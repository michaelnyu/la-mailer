import React from "react"

// import { colors } from "../components/styles"
import styled from "styled-components"
import Button from "./Button"

const StyledEmailLink = styled.a`
  display: flex;
  flex-direction: column;
  flex: 1.5;
`

const EmailLink = ({
  recipients = [],
  directRecipient,
  body = "",
  subject,
  stretch,
  style,
}) => {
  let href = `mailto:${directRecipient}?`

  if (recipients.length > 1) {
    const bccRecipients = [...recipients].join(",")
    href += `&bcc=${bccRecipients}`
  }

  href += `&subject=${subject}`
  href += `&body=${body.replace(/\n/g, "%0A")}`

  return (
    <StyledEmailLink href={href} style={style}>
      <Button stretch={stretch}>Open in Mail App</Button>
    </StyledEmailLink>
  )
}

export default EmailLink
