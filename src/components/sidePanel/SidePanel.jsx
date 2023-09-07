import React from "react"
import './SidePanel.css'
import { MdDelete, MdArrowBackIos } from "react-icons/md";
import { CgMathPlus, CgMathMinus } from "react-icons/cg";

const SidePanel = ({ orders, setOrders, amount, setAmount }) => {

    const updateCount = (orderId, flag) => {
        var swap = []
        orders.map(order => {
            if (order.id != orderId)
                swap.push(order)
            else
                swap.push({
                    "id": order.id, "name": order.name, "count": (flag) ? order.count + 1: order.count - 1,
                    "salary": order.salary, "imageUrl": order.imageUrl
                })
        })
        setOrders(swap)
        totalAmount(swap)
    }

    const deleteOrder = foodId => {
        var array = orders.filter(order => order.id != foodId)
        setOrders(array)
        totalAmount(array)
    }

    const totalAmount = (array) => {
        let total = 0
        array.map(order => total += order.salary * order.count)
        setAmount(total)
    }

    return (
        <div>
            <a className="collapse-link" data-bs-toggle="collapse" href="#collapseMenu" role="button" aria-expanded="false" aria-controls="collapseMenu">
                <span className="collapse-icon"><MdArrowBackIos /></span> <p>Show your orders</p>
            </a>
            <div className="panel-container collapse" id="collapseMenu">
                <div className="orders">
                    {orders.map((order, index) => (
                        <div className="order" key={index}>
                            <div className="order-image">
                                <img src={order.imageUrl} />
                            </div>
                            <div className="order-name">
                                {order.name}
                            </div>
                            <div className="order-info">
                                <div className="order-salary">${order.salary}</div>
                                <div className="order-counter">
                                    <div className="delete" onClick={() => deleteOrder(order.id, index, order.name)}>
                                        {<MdDelete />}
                                    </div>
                                    <div className="decrease mini-btn" onClick={() => updateCount(order.id, false)}>
                                        {<CgMathMinus />}
                                    </div>
                                    <div>{order.count}</div>
                                    <div className="increase mini-btn" onClick={() => updateCount(order.id, true)}>
                                        {<CgMathPlus />}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="order">
                    <div className="text">Total</div>
                    <div className="amount">${amount}</div>
                </div>
                <button className="complete-button">Order Completion</button>
            </div>
        </div >
    )
}

export default SidePanel