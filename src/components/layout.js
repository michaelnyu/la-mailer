/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, useMemo } from "react"
import "./layout.css"
import styled from "styled-components"
import { emailIdTitleMap } from "../emails/email-builder"
import { useDeviceQueries, MobileStates } from "../utils"
import Modal from "./Modal"
import Preview from "./preview"
import ControlAction from "./ControlAction"
import ControlContainer from "./ControlContainer"

const StyledContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  height: 100%;
`

const Layout = ({
  emailId,
  setEmailId,
  addEmailRecipient,
  removeEmailRecipient,
  updateEmailInputs,
  emailDirectRecipient,
  emailSubject,
  emailBody,
  emailBodyArgs = { name: "" },
  emailRecipients = [],
  modalInfo = { title: "", body: "", url: [] },
  receivers,
  args,
}) => {
  const dropdownOptions = Object.entries(
    emailIdTitleMap
  ).map(([id, title]) => ({ value: id, label: title }))

  const [mobileState, setMobileState] = useState(MobileStates.CONTROL)
  const [showModal, setShowModal] = useState(false)

  const { isMobile } = useDeviceQueries()

  const controlActionComponent = (
    <ControlAction
      isMobile={isMobile}
      emailDirectRecipient={emailDirectRecipient}
      emailRecipients={emailRecipients}
      emailSubject={emailSubject}
      emailBody={emailBody}
      mobileState={mobileState}
      setMobileState={setMobileState}
    />
  )

  const previewComponent = (
    <Preview
      isMobile={isMobile}
      emailBodyArgs={emailBodyArgs}
      emailDirectRecipient={emailDirectRecipient}
      emailBody={emailBody}
      emailSubject={emailSubject}
      receivers={receivers}
      emailRecipients={emailRecipients}
    />
  )

  const modalComponent = (
    <Modal
      setShowModal={setShowModal}
      isMobile={isMobile}
      modalInfo={modalInfo}
    />
  )

  const controlContainerComponent = (
    <ControlContainer
      isMobile={isMobile}
      dropdownOptions={dropdownOptions}
      setEmailId={setEmailId}
      emailId={emailId}
      args={args}
      receivers={receivers}
      emailBodyArgs={emailBodyArgs}
      updateEmailInputs={updateEmailInputs}
      addEmailRecipient={addEmailRecipient}
      removeEmailRecipient={removeEmailRecipient}
      emailRecipients={emailRecipients}
      setShowModal={setShowModal}
      controlActionComponent={controlActionComponent}
    />
  )

  if (isMobile) {
    return (
      <StyledContainer>
        {mobileState === MobileStates.CONTROL && controlContainerComponent}
        {mobileState === MobileStates.PREVIEW && (
          <>
            {previewComponent}
            {controlActionComponent}
          </>
        )}
        {showModal && modalComponent}
      </StyledContainer>
    )
  }
  return (
    <StyledContainer>
      {controlContainerComponent}
      {previewComponent}
      {showModal && modalComponent}
    </StyledContainer>
  )
}
export default Layout
