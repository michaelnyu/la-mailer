import React from "react"

import { colors } from "../components/styles"
import styled from "styled-components"
import { StyledButton } from "./layout"

const EmailLink = ({ recipients = [], body, subject, stretch, style }) => {
  let href = `mailto:${recipients[0]}?`

  if (recipients.length > 1) {
    const bccRecipients = [...recipients].splice(1).join(",")
    href += `&bcc=${bccRecipients}`
  }

  href += `&subject=${subject}`
  href += `&body=${body.replace(/\n\n/g, "%0A%0A")}`

  return (
    <a href={href} style={style}>
      <StyledButton stretch={stretch}>Open in Mail App</StyledButton>
    </a>
  )
}

export default EmailLink
