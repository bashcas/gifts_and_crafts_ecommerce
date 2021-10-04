import React, { useState } from "react"
import Checkbox from "./Checkbox"
import { emitCustomEvent } from "react-custom-events"

const RealCheckbox = ({ label, ...props }) => {
  const [checked, setChecked] = useState(false)

  const handleCheckboxChange = (e) => {
    setChecked(e.target.checked)

    if (e.target.checked) {
      emitCustomEvent("relleno-added", { relleno: label })
    } else {
      emitCustomEvent("relleno-removed", { relleno: label })
    }
  }

  return (
    <div>
      <label>
        <Checkbox
          checked={checked}
          onChange={handleCheckboxChange}
          {...props}
        />
        <span style={{ marginLeft: "15px" }}>{label}</span>
      </label>
    </div>
  )
}

export default RealCheckbox
