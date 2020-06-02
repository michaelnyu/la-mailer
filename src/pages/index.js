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
    setEmailSubject("this is the subject")
    setEmailBody(email.body)
  }, [emailId])

  return (
    <Layout>
      <SEO title="Home" />
      <Preview emailId={emailId} />
      <EmailLink
        recipients={emailRecipients}
        subject={emailSubject}
        body={emailBody}
      />
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </Layout>
  )
}

export default IndexPage
