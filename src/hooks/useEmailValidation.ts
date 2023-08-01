import { useState, useRef } from "react"

export const useEmailValidation = () => {
  const [emailSubmit, setEmailSubmit] = useState(false)
  const [inputError, setInputError] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleChange = () => {
      const isValid = inputRef?.current?.checkValidity();
      setInputError(!isValid);
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    handleChange();
    inputRef?.current?.checkValidity() && setEmailSubmit(true)
  } 

  return {emailSubmit, setEmailSubmit, inputError, setInputError, inputRef, handleChange, handleSubmit}
}
