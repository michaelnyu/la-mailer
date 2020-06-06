import React, { useEffect, useState, useMemo } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { buildEmailPreview, emailIdMap } from "../emails/email-builder"

const IndexPage = ({ location }) => {
  const [emailId, setEmailId] = useState("")
  const [emailBody, setEmailBody] = useState("")
  const [emailSubject, setEmailSubject] = useState("")
  const [emailDirectRecipient, setEmailDirectRecipient] = useState([])
  const [emailRecipients, setEmailRecipients] = useState([])
  const [emailBodyArgs, setEmailBodyArgs] = useState({})
  const [modalInfo, setModalInfo] = useState({ title: "", body: "", url: [] })
  // receivers is the complete list of selectable emails
  const [receivers, setReceivers] = useState([])
  const [args, setArgs] = useState({})

  // DELETE later.
  // set defaults
  useEffect(() => {
    if (
      emailId === "" &&
      location.hash.length > 2 &&
      location.hash.slice(2) in emailIdMap
    ) {
      setEmailId(location.hash.slice(2))
    } else {
      setEmailId("peoples-budget")
    }
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
    setEmailRecipients(
      email.receivers
        ? email.receivers.reduce((recipients, receiver) => {
            if (receiver.autoSelect) {
              return [...recipients, receiver.email]
            }
            return recipients
          }, [])
        : []
    )
  }, [emailId, emailBodyArgs])

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
