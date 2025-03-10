import React, { useEffect, useState } from 'react'
import './List.css'
import axios from 'axios'
import { toast } from 'react-toastify'

function List({ url }) {
  const [list, setlist] = useState([])


  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`)

    if (response.data.success) {
      setlist(response.data.data)
    }
    else {
      toast.error("Something went wrong")
    }
  }

  const removeFood = async (foodId) => {
    const response = await axios.post(`${url}/api/food/remove`, { id: foodId })
    await fetchList();
    if (response.data.success) {
      toast.success(response.data.message)
    }
    else {
      toast.error("Error")
    }
  }
  
  useEffect(() => {
    fetchList()
  }, [])

  return (
    <div className='list add flex-col'>
      <p>All Foods List</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {
          list.map((data, idx) => {
            return (
              <div className="list-table-format" key={idx}>
                <img src={`${url}/images/` + data.image} alt="" />
                <p>{data.name}</p>
                <p>{data.category}</p>
                <p>Rs.{data.price}</p>
                <p className='cursor' onClick={() => removeFood(data._id)}>X</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default List