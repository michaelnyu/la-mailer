import React, { useEffect, useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { buildEmailPreview } from "../emails/email-builder"

const IndexPage = () => {
  const [emailId, setEmailId] = useState("")
  const [emailBody, setEmailBody] = useState("")
  const [emailSubject, setEmailSubject] = useState("")
  const [emailRecipients, setEmailRecipients] = useState([])
  const [emailBodyArgs, setEmailBodyArgs] = useState({})

  useEffect(() => {
    const email = buildEmailPreview({
      emailId,
      stringInputs: emailBodyArgs,
    })
    setEmailSubject(email.subject)
    setEmailBody(email.body)
    setEmailBodyArgs({ name: "michael" })
  }, [emailId])

  // Should probably move this to a store or context
  const layoutProps = {
    setEmailId,
    emailRecipients: [...emailRecipients],
    addEmailRecipient: email => {
      setEmailRecipients(emailRecipients => [...emailRecipients, email])
    },
    removeEmailRecipient: email => {
      setEmailRecipients(emailRecipients =>
        emailRecipients.filter(e => email !== e)
      )
    },
    emailId,
    emailSubject,
    emailBody,
    emailBodyArgs: { ...emailBodyArgs },
    setEmailBodyArgs,
  }

  return (
    <Layout {...layoutProps}>
      <SEO title="Home" />
    </Layout>
  )
}

export default IndexPage
