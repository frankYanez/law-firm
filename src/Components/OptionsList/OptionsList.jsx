import React from "react";
import "./OptionsList.style.css";

const OptionsList = ({ branch , setBranch}) => {

    const positions = [
        "Criminal Law",
        "Family Law",
        "Inmigration Law",
        "Labor Law"
    ]

    const handleChange = (e) => {
      setBranch(e.target.value)
    }

  return (
    <div className="options container">
      <label>Branch</label>
      <select value={branch} onChange={handleChange}>
        <option value="" disabled defaultValue="" hidden>Select your branch</option>
        {positions.map( (position, index) => <option key={index}>{position}</option>)}
      </select>
    </div>
  );
};

export default OptionsList;
