import React, { useEffect, useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Preview from "../components/preview"
import EmailLink from "../components/email-link"
import { buildEmailPreview } from "../emails/email-builder"

const IndexPage = () => {
  const [emailId, setEmailId] = useState("")
  const [emailBody, setEmailBody] = useState("")
  const [emailSubject, setEmailSubject] = useState("")
  const [emailRecipients, setEmailRecipients] = useState("")
  const [emailBodyArgs, setEmailBodyArgs] = useState({})

  // FOR TESTING
  // what inputs & selects would probably do
  useEffect(() => {
    setEmailId("police-brutality-la")
    setEmailRecipients([
      "michaelnyu@yahoo.com",
      "bccemail@email.com",
      "bccemail2@email.com",
    ])

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
    setEmailRecipients,
    setEmailBodyArgs,
    emailSubject,
    emailBody,
    emailBodyArgs,
    emailRecipients,
  }
  console.log(emailRecipients)
  return (
    <Layout {...layoutProps}>
      <SEO title="Home" />
      <Preview emailId={emailId} />
      <EmailLink
        recipients={emailRecipients}
        subject={emailSubject}
        body={emailBody}
      />
    </Layout>
  )
}

export default IndexPage
