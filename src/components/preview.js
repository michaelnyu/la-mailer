import React from "react"
import { buildEmailPreview } from "../emails/email-builder"

const Preview = ({ emailId }) => {
  const email = buildEmailPreview({
    emailId,
    stringInputs: { name: "michael" },
  })

  const { body } = email

  return <p>{body}</p>
}

export default Preview
