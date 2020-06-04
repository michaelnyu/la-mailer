import React from "react"
import styled, { css } from "styled-components"
import { colors } from "./styles"

const borderRadiusStyle = css`
  border-radius: 0.25rem;
`

const buttonStyle = css`
  border: ${props =>
    props.type === "secondary" ? colors.blackTertiary + "1px solid" : "none"};
  background-color: ${props =>
    props.type === "secondary" ? colors.whitePrimary : colors.blackPrimary};
  color: ${props =>
    props.type === "secondary" ? colors.blackPrimary : colors.whitePrimary};
  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
  flex: 1;
  ${borderRadiusStyle}
  width: ${props => (props.stretch ? "100%" : "auto")};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  &:focus {
    outline: none;
  }
  &:active {
    border: ${props =>
      props.type === "secondary" ? colors.blackPrimary + "1px solid" : "none"};
    opacity: 1;
  }
`

const buttonStyleDefault = css`
  font-size: 1rem;
  padding: 0.75rem;
`

const buttonStyleSmall = css`
  font-size: 0.75em;
  line-height: 0.75em;
  padding: 0.25rem;
  white-space: nowrap;
`

const StyledButton = styled.button`
  ${buttonStyle}
  ${props => {
    if (props.size === "small") {
      return buttonStyleSmall
    } else {
      return buttonStyleDefault
    }
  }}
`
function Button(props) {
  return <StyledButton {...props}>{props.children}</StyledButton>
}

export default Button
