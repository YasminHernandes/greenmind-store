import { useNavigate } from "react-router-dom"
import { ArrowNavigate } from "@/components/icons/arrowNavigate"

import './styles.scss'

export const BackButton = () => {
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate(-1)
  }

  return (
      <div className="default-max-width-setup button-container" onClick={handleNavigate}>
        <button className="back__button">
          <ArrowNavigate/>
          Back
        </button>
      </div>
  )
}
