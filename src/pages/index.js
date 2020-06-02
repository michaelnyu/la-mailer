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

  // FOR TESTING
  // what inputs & selects would probably do
  useEffect(() => {
    setEmailId("police-brutality-la")

    const email = buildEmailPreview({
      emailId,
      stringInputs: { name: "michael" },
    })
    setEmailSubject(email.subject)
    setEmailBody(email.body)
  }, [emailId])

  // Should probably move this to a store or context
  const layoutProps = {
    setEmailId,
    setEmailBody,
    setEmailSubject,
    emailRecipients: [...emailRecipients],
    addEmailRecipient: email => {
      setEmailRecipients(emailRecipients => [...emailRecipients, email])
    },
    removeEmailRecipient: email => {
      setEmailRecipients(emailRecipients =>
        emailRecipients.filter(e => email !== e)
      )
    },
    setEmailBodyArgs,
    emailSubject,
    emailBody,
    emailBodyArgs,
  }

  return (
    <Layout {...layoutProps}>
      <SEO title="Home" />
    </Layout>
  )
}

export default IndexPage
