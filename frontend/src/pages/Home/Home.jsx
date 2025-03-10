import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMesnu from '../../components/ExploreMenu/ExploreMesnu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import MobileDownload from '../../components/MobileDownload/MobileDownload'

function Home() {
    const [category, setCategory] = useState('All')

    return (
        <div>
            <Header />
            <ExploreMesnu category={category} setCategory={setCategory} />
            <FoodDisplay category={category} />
            <MobileDownload />
        </div>
    )
}

export default Home