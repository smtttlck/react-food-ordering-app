import React, { useEffect, useState } from 'react'
import './App.css'
import FilterMenu from './components/filterMenu/FilterMenu'
import Menu from './components/menu/Menu'
import SidePanel from './components/sidePanel/SidePanel'

function App() {

  const [foods, setFoods] = useState([])
  const [filter, setFilter] = useState("all")
  const [orders, setOrders] = useState([])
  const [amount, setAmount] = useState(0)

  useEffect(() => {
    const loadData = async () => {
      const url = "http://localhost:3002/menu"
      const data = await (await fetch(url)).json()
      setFoods(data)
    }
    loadData()
  }, [])

  
  return (
    <div className="container">
      <h2>React Food Ordering App</h2>
      <FilterMenu 
          setFilter={setFilter} 
      />
      <Menu 
          foods={foods} 
          orders={orders} setOrders={setOrders} 
          amount={amount} setAmount={setAmount}
          filter={filter}
      />
      <SidePanel 
          orders={orders} setOrders={setOrders} 
          amount={amount} setAmount={setAmount} 
      />
    </div>
  )
}

export default App
