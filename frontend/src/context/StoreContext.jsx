import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    const [cardItem, setCardItem] = useState({})
    const url = 'https://food-application-fvi8.onrender.com'
    const [token, setToken] = useState("")

    const [food_list, setFood_list] = useState([])


    const addToCart = async (itemId) => {
        if (!cardItem[itemId]) {
            setCardItem((prev) => ({ ...prev, [itemId]: 1 }))
        }
        else {
            setCardItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }
        if (token) {
            await axios.post(url + "/api/cart/add", { itemId }, { headers: { token } })
        }
    }

    const removeFromCart = async (itemId) => {
        setCardItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
        if (token) {
            await axios.post(url + "/api/cart/remove", { itemId }, { headers: { token } })
        }
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const items in cardItem) {
            if (cardItem[items] > 0) {
                let iteminfo = food_list.find((product) => product._id === items)
                totalAmount += iteminfo.price * cardItem[items];
            }
        }
        return totalAmount;
    }

    const fetchFoodList = async () => {
        const response = await axios.get(url + '/api/food/list')
        setFood_list(response.data.data)
    }

    const loadCartData = async (token) => {
        const response = await axios.post(url + "/api/cart/get", {}, {
            headers: { token }
        })
        setCardItem(response.data.cartData)
    }

    useEffect(() => {
        async function loadData() {
            await fetchFoodList()

            if (localStorage.getItem("token")) {
                setToken(localStorage.getItem("token"))
                await loadCartData(localStorage.getItem("token"))
            }
        }
        loadData()
    }, [])

    const contextValue = {
        food_list,
        cardItem,
        setCardItem,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        url,
        token,
        setToken
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;
