import {useEffect, useState} from "react";

const tabs = [
    "Home",
    "Series",
    "Films",
    "New & Popular",
    "My List",
    "Browse by Languages"
]

export default function NavBar() {


    const [showBackground, setShowBackground] = useState(false)
    useEffect(()=>{

        window.addEventListener("scroll", ()=> {
            if (window.scrollY > 700) {
                setShowBackground(true)
            } else {
                setShowBackground(false)
            }
        })
    } , [])

  return (
      <nav className="w-full fixed z-40">
          <div className={`px-16 py-6 flex items-center ${showBackground ? 'bg-black bg-opacity-90' : null}`}>
                <img alt="logo" className="h-16" src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"/>
              <div className="flex gap-7 ml-8">
                  {tabs.map(tab=> (
                      <div key={tab} className="text-white hover:text-gray-300 cursor-pointer">
                          <p>{tab}</p>
                      </div>
                  ))}
              </div>
          </div>

      </nav>
  )
}
