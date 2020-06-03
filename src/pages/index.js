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
    name: "",
  })

  // DELETE later.
  // set defaults
  useEffect(() => {
    setEmailId("police-brutality-la")
  }, [])

  useEffect(() => {
    // update email states when deps change
    const email = buildEmailPreview({
      emailId,
      stringInputs: emailBodyArgs,
    })

    setEmailSubject(email.subject)
    setEmailBody(email.body)
  }, [emailId, emailBodyArgs])

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
