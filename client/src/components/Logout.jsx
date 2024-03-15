import React from "react";

const Logout = ()=>{
    return(
        <div className="bg-gray-100 rounded-md p-2">
            <div onClick={()=>{
                    localStorage.clear()
                    window.location.reload()
                }} className="cursor-pointer">Logout</div>
        </div>
    )
}

export default Logout;