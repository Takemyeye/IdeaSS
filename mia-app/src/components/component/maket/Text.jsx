import React from "react"

export function Text ({h5, h1, h3, h3_2}) {
  return (
    <div className="text">
      <h5>{h5}</h5>
      <h1>{h1}</h1>
      <h3>{h3}</h3>     
      <h3>{h3_2}</h3>
    </div>
  )
}