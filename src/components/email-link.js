import React from "react"

import { colors } from "../components/styles"
import styled from "styled-components"

const StyledButton = styled.button`
  display: inline-block;
  border-radius: 0.25rem;
  font-size: 1.125rem;
  line-height: 2.5rem;
  border: none;
  background-color: ${colors.blackPrimary};
  color: ${colors.whitePrimary};
  &:hover {
    cursor: pointer;
  }
  width: ${props => (props.stretch ? "100%" : "auto")};
`

const EmailLink = ({ recipients = [], body, subject }) => {
  let href = `mailto:${recipients[0]}?`

  if (recipients.length > 1) {
    const bccRecipients = recipients.splice(1).join(",")
    href += `&bcc=${bccRecipients}`
  }

  href += `&subject=${subject}`
  href += `&body=${body.replace(/\n/g, "%0A%0A")}`

  return (
    <a href={href}>
      <StyledButton>Open in Mail App</StyledButton>
    </a>
  )
}

export default EmailLink
