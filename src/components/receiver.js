import React from "react"
import { colors } from "./styles"
import styled from "styled-components"
import { ReactComponent as CheckSVG } from "../assets/check.svg"

const StyledReceiver = styled.div`
  padding: 0.5rem;
  background: ${colors.whitePrimary};
  border: ${props =>
      props.active ? colors.blackPrimary : colors.whiteTertiary}
    solid 1px;
  width: 100%;
  border-radius: 0.25rem;
  cursor: pointer;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:hover {
    border: ${props =>
        props.active ? colors.blackPrimary : colors.blackTertiary}
      1px solid;
  }
  user-select: none;
  font-size: 0.875em;
`

const StyledLabel = styled.p`
  display: inline-block;
  margin-bottom: 0;
  margin-right: 5px;
`
const StyledName = styled.b`
  display: inline-block;
  margin-bottom: 0;
  margin-right: 5px;
`
const StyledEmail = styled.div`
  color: ${colors.blackSecondary};
`

// label is the bolded text on left
const Receiver = ({ label, name, email, onClick, selected }) => {
  return (
    <StyledReceiver active={selected} onClick={onClick}>
      <div style={{ display: "inline-block", maxWidth: "90%" }}>
        <div style={{ marginBottom: 5 }}>
          <StyledName>{name}</StyledName>
          <StyledLabel>{label}</StyledLabel>
        </div>
        <StyledEmail>{email}</StyledEmail>
      </div>
      <CheckSVG style={{ opacity: selected ? 1 : 0 }} />
    </StyledReceiver>
  )
}

export default Receiver
