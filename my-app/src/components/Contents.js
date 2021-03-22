import React from "react"
import "./Contents.css"
import Main from "../pages/Main"

function contents({ title }){
  return (
    <div className="Contents">
        <Main title={title}/>
    </div>
  )
}
  


export default contents

