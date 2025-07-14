import React from 'react'
import "./basic.css"
const Basic = (prop) => {
  return (
    <div className="basic">
        <p className="basic_title">{prop.Nameprop}</p>
        <h3 className="basic_name">{prop.Titleprop}
</h3>
    </div>
  )
}

export default Basic