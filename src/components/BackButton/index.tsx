import './styles.scss'
import { useNavigate } from "react-router-dom"
import { ArrowNavigate } from "@/components/icons/arrowNavigate"


export const BackButton = () => {
  const navigate = useNavigate()

  return (
      <div className="default-max-width-setup button-container">
        <button 
          className="back__button" 
          onClick={() => navigate(-1)}
        >
          <ArrowNavigate/>
          Back
        </button>
      </div>
  )
}
