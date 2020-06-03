import React, { useEffect, useState, useMemo } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { buildEmailPreview } from "../emails/email-builder"

const IndexPage = () => {
  const [emailId, setEmailId] = useState("")
  const [emailBody, setEmailBody] = useState("")
  const [emailSubject, setEmailSubject] = useState("")
  const [emailDirectRecipient, setEmailDirectRecipient] = useState([])
  const [emailRecipients, setEmailRecipients] = useState([])
  const [emailBodyArgs, setEmailBodyArgs] = useState({})
  const [modalInfo, setModalInfo] = useState({ title: "", body: "", url: "" })
  // receivers is the complete list of selectable emails
  const [receivers, setReceivers] = useState([])
  const [args, setArgs] = useState({})

  // DELETE later.
  // set defaults
  useEffect(() => {
    setEmailId("police-brutality-la")
  }, [])

  useEffect(() => {
    // update email states when deps change
    if (emailId === "") {
      return
    }
    const email = buildEmailPreview({
      emailId,
      stringInputs: emailBodyArgs,
    })
    setReceivers(email.receivers)
    setArgs(email.args)
    setEmailDirectRecipient(email.directRecipient)
    setEmailSubject(email.subject)
    setEmailBody(email.body)
    setModalInfo({
      title: email.modalTitle,
      body: email.modalBody,
      url: email.modalUrl,
    })
  }, [emailId, emailBodyArgs])

  console.log(emailRecipients)

  const layoutProps = useMemo(
    () => ({
      modalInfo,
      emailId,
      setEmailId,
      emailDirectRecipient,
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
      updateEmailInputs: (argName, value) => {
        setEmailBodyArgs({ ...emailBodyArgs, [argName]: value })
      },
      receivers,
      args,
    }),
    [
      emailId,
      args,
      receivers,
      emailRecipients,
      emailBody,
      emailSubject,
      emailDirectRecipient,
      emailBodyArgs,
      modalInfo,
    ]
  )

  return (
    <>
      <SEO title="Home" />
      <Layout {...layoutProps} />
    </>
  )
}

export default IndexPage
