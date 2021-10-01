import React, { useEffect, useState } from "react"
import styled from "styled-components"

const StyledModal = styled.div`
  position: fixed;
  width: 100%;
  z-index: 20;
  left: 0;
  bottom: ${({ isOpen }) => (isOpen ? "-50%" : "0")};
  background-color: white;
  padding: 2em;
  transition: bottom 0.3s ease-in-out;
`

const Modal = ({ children, open }) => {
  const [isOpen, setIsOpen] = useState(open)

  useEffect(() => {
    setIsOpen((prevState) => !prevState)
  }, [open])

  return <StyledModal isOpen={isOpen}>{children}</StyledModal>
}

export default Modal
