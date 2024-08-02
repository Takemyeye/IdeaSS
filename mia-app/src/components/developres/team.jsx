import React from "react"
import { TeamUnit } from "../../ui/teamUnit"
import "./styles/team.scss"

const Team = () => {
  return (
    <div className="team">
      <div className="title-container">
        <h5>Our Team</h5>
        <h1>Meet Our Team</h1>
        <h3>The talented individuals who make our company great.</h3>
      </div>
      <div className="team-container"> 
        <TeamUnit
          name="Oleh Bratok"
          possition="Frontend Developer"
          description="Is our frontend development expert, crafting beautiful and responsive user interfaces."
          />
      </div>
    </div>
  )
}

export default Team;