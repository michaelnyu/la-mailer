import React, { useEffect, useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { buildEmailPreview } from "../emails/email-builder"

const IndexPage = () => {
  const [emailId, setEmailId] = useState("")
  const [emailBody, setEmailBody] = useState("")
  const [emailSubject, setEmailSubject] = useState("")
  const [emailRecipients, setEmailRecipients] = useState([])
  const [emailBodyArgs, setEmailBodyArgs] = useState({
    name: "[YOUR NAME HERE]",
  })

  const updateEmail = () => {
    const email = buildEmailPreview({
      emailId,
      stringInputs: emailBodyArgs,
    })

    setEmailSubject(email.subject)
    setEmailBody(email.body)
  }

  // DELETE later.
  // set defaults
  useEffect(() => {
    setEmailId("police-brutality-la")
  }, [])

  useEffect(() => {
    updateEmail()
  }, [emailId, emailBodyArgs])

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
    emailSubject,
    emailBody,
    emailBodyArgs: { ...emailBodyArgs },
    updateEmailInputs: ({ name }) => {
      setEmailBodyArgs({ ...emailBodyArgs, name })
    },
  }

  return (
    <Layout {...layoutProps}>
      <SEO title="Home" />
    </Layout>
  )
}

export default IndexPage
