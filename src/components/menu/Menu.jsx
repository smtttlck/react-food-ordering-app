import React from 'react'
import './Menu.css'

const Menu = ({ foods, orders, setOrders,  amount, setAmount, filter }) => {

    const addOrder = foodId => {
        let flag = -1
        orders.map((order) => {
            if(order.id==foodId)
                flag = order.id
        })
        if(flag==-1){
            setOrders(array => [...array, 
                    {"id": foods[foodId].id, "name": foods[foodId].name, "count": 1, 
                    "salary": foods[foodId].salary, "imageUrl": foods[foodId].imageUrl}])
        }
        else {
            var swap = []
            orders.map(order => {
                    if (order.id!=flag)
                        swap.push(order)
                    else
                        swap.push({"id": order.id, "name": order.name, "count": order.count+1, 
                                "salary": order.salary, "imageUrl": order.imageUrl})
                    }
            )
            setOrders(swap)
        }
        setAmount(amount+foods[foodId].salary)
    }

    const filteredMenu = (filter=="all") ? foods : foods.filter(food => food.category==filter)

    return (
        <div className="menu">
            {filteredMenu.map((food, index) => (
                <div key={index} className="food-card">
                    <div className="image-container">
                        <img src={food.imageUrl} />
                    </div>
                    <div className="text-container">
                        <div className="food-name">{food.name}</div>
                        <div className="food-salary">${food.salary}</div>
                    </div>
                    <div className="food-detail">{food.detail}</div>
                    <div className="selector" onClick={() =>  addOrder(food.id)}>+</div>
                </div>
            ))}
        </div>
    )
}

export default Menu