import React, { useState } from "react"
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
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:hover {
    border: ${props =>
        props.active ? colors.blackPrimary : colors.blackTertiary}
      1px solid;
  }
`

const StyledLabel = styled.b`
  display: inline-block;
  margin-right: 5px;
`
const StyledName = styled.p`
  display: inline-block;
  margin-bottom: 0;
`
const StyledEmail = styled.div`
  color: ${colors.blackSecondary};
`

// label is the bolded text on left
const Receiver = ({ label, name, email, onClick, defaultSelected }) => {
  const [selected, setSelected] = useState(defaultSelected)

  return (
    <StyledReceiver
      active={selected}
      onClick={() => {
        onClick(!selected)
        setSelected(!selected)
      }}
    >
      <div style={{ display: "inline-block" }}>
        <div style={{ marginBottom: 5 }}>
          <StyledLabel>{label}</StyledLabel>
          <StyledName>{name}</StyledName>
        </div>
        <StyledEmail>{email}</StyledEmail>
      </div>
      {selected && <CheckSVG />}
    </StyledReceiver>
  )
}

export default Receiver
