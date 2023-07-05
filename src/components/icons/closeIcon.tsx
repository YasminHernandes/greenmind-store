import { MinicartContextProvider } from "../../contexts/minicartContext"

export const CloseIcon = ({...props}) => {
  return (
    <MinicartContextProvider>
      <div className="close-icon" onClick={props.onClick} style={{cursor: 'pointer', display: 'flex'}}>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 8L24 24M8 24L24 8" stroke="#1E1E1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </MinicartContextProvider>
  )
}
