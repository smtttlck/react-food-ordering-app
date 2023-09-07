import React from 'react'
import './FilterMenu.css'
import { GiKnifeFork, GiHamburger, GiChickenOven, GiWaterBottle } from "react-icons/gi";
import { FaFishFins, FaIceCream } from "react-icons/fa6";

const FilterMenu = ({setFilter}) => {

    const selectFilter = e => {

        const filters = document.querySelectorAll(".filter-card")
        filters.forEach(filter => {
            filter.style.backgroundColor = "#91C8E4"
            filter.children[0].style.backgroundColor = "#4682A9" 
        })

        e.target.style.backgroundColor = "#4682A9"
        e.target.children[0].style.backgroundColor = "#91C8E4" 
        setFilter(e.target.id)
    }

    return (
        <div className="filter-menu">
            <div id="all" className="filter-card" onClick={selectFilter}>
                <div className="icon">
                    <GiKnifeFork />
                </div>
                <p>All</p>
            </div>
            <div id="fast-food" className="filter-card" onClick={selectFilter}>
                <div className="icon">
                    <GiHamburger />
                </div>
                <p>Fast Foods</p>
            </div>
            <div id="fish" className="filter-card" onClick={selectFilter}>
                <div className="icon">
                    <FaFishFins />
                </div>
                <p>Fish</p>
            </div>
            <div id="chicken" className="filter-card" onClick={selectFilter}>
                <div className="icon">
                    <GiChickenOven />
                </div>
                <p>Chicken</p>
            </div>
            <div id="drink" className="filter-card" onClick={selectFilter}>
                <div className="icon">
                    <GiWaterBottle />
                </div>
                <p>Drinks</p>
            </div>
            <div id="icecream" className="filter-card" onClick={selectFilter}>
                <div className="icon">
                    <FaIceCream />
                </div>
                <p>Icecreams</p>
            </div>
        </div>
    )
}

export default FilterMenu