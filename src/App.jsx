import { useState } from "react"
import Banner from "./components/Banner/Banner"
import NavBar from "./components/NavBar/NavBar"
import Recipes from "./components/Recipes/Recipes"
import SideBar from "./components/SideBar/SideBar"
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const [showCooks, setShowCooks] = useState([]);
  const [currentCook, setCurrentCook] = useState([])
  const handleCooking = (cooks) => {
    const isExist = showCooks.find(item => item.id ==cooks.id);
    if(!isExist){
       setShowCooks([...showCooks, cooks])
    }
    else{
      toast.warn("Already Exsist!")
    }
  }

  const handlePreparing =(id) =>{
    const remainigitem = showCooks.filter(item => item.id !==id.id);
    setShowCooks(remainigitem)
    const currentCooks = [...currentCook, id];
    setCurrentCook(currentCooks)

  }
  
  return (
    <div className="lg:w-[1280px] m-auto">
      {/* Nav section */}
      <div className="mt-3">
      <NavBar></NavBar>
      </div>
      {/* Banner Section */}
      <div className="mt-7">
        <Banner></Banner>
      </div>
      <div>
        <div className="m-auto text-center mt-11 space-y-7">
          <h3 className="text-[#150B2B] text-5xl font-semibold">Our Recipes</h3>
          <p className="text-[#150B2B99]">Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget <br /> urna volutpat curabitur elementum mauris aenean neque. </p>
        </div>
        {/* Recipe Section */}
        <div className="grid grid-cols-1 lg:grid-cols-9 mt-10 gap-7">
          <div className="lg:col-span-6">
            <Recipes handleCooking={handleCooking}></Recipes>
          </div>
          <div className="lg:col-span-3">
          <SideBar currentCook={currentCook} handlePreparing={handlePreparing} showCooks={showCooks}></SideBar>
          </div>
          </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default App
