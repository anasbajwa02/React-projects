import React from 'react'
import "./basic.css"
const Basic = (prop) => {
  return (
    <div classNameName="basic">
        <p classNameName="basic_title">{prop.Nameprop}</p>
        <h3 classNameName="basic_name">{prop.Titleprop}
</h3>
    </div>
  )
}

export default Basic