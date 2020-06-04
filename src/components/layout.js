/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, useMemo } from "react"
import "./layout.css"
import Select from "react-select"
import Receiver from "../components/receiver"
import EmailLink from "../components/email-link"
import { colors, styles, values } from "../components/styles"
import styled from "styled-components"
import { emailIdTitleMap } from "../emails/email-builder"
import { ReactComponent as CloseSVG } from "../assets/close.svg"
import { useDeviceQueries } from "../utils"
import Button from "./Button"
import Modal from "./Modal"

const StyledContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  height: 100%;
`

const StyledControlContainer = styled.div`
  ${styles.shadowRight}
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background-color: ${colors.whiteSecondary};
  ${props =>
    props.isMobile ? "flex: 1" : "flex: 0 0 ".concat(values.controlWidth)};
  width: ${props => (props.isMobile ? "100%;" : "auto;")}
  z-index: 1; /* jank solution to box shadow rendering */
  overflow-y: scroll;
`

const StyledControlHeader = styled.div`
  ${styles.paddingDefault}
  display: flex;
  flex: 0 0 4rem;
  background-color: ${colors.whitePrimary};
`

const StyledSelect = styled(Select)`
  flex: 1;
`

const StyledControlDetails = styled.div`
  ${styles.borderRadiusStyle}
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 5.5rem;
  font-size: 0.75rem;
  color: ${colors.blackSecondary};
  text-decoration: underline;
  transition: 0.2s;
  &:hover {
    cursor: pointer;
    background-color: ${colors.whiteTertiary};
  }
`

const StyledControlForm = styled.div`
  ${styles.paddingDefault}
  display: flex;
  flex-direction: column;
  height: auto;
`

const StyledControlAction = styled.div`
  ${styles.paddingDefault}
  ${styles.shadowAbove}
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  width: ${props => (props.isMobile ? "100%" : values.controlWidth)};
  background-color: ${colors.whitePrimary};
  & > a {
    text-decoration: none;
  }
`

const StyledPreviewContainer = styled.div`
  ${props => (props.isMobile ? styles.paddingDefault : styles.paddingLarge)}
  flex: 1;
  background-color: ${colors.whiteTertiary};
  max-height: 100vh;
  overflow-y: scroll;
`
const StyledPreviewHeader = styled.h3`
  ${styles.textStyle}
  font-size: 1.125rem;
  color: ${colors.blackTertiary};
  text-transform: uppercase;
`

const StyledPreviewEmail = styled.div`
  ${styles.borderRadiusStyle}
  ${styles.shadowBelow}
  ${props => (props.isMobile ? styles.paddingDefault : styles.paddingLarge)}
  background-color: ${colors.whitePrimary};
`

const StyledPreviewEmailRow = styled.div`
  display: ${props => (props.isMobile ? "block" : "grid")};
  grid-template-columns: 8em auto;
`

const StyledPreviewEmailRowLabel = styled.p`
  ${styles.textStyle}
  color: ${colors.blackTertiary};
`

const StyledPreviewEmailRowContent = styled.p`
  ${styles.textStyle}
  color: ${props => props.color};
  white-space: pre-wrap;
`

export const Spacer = styled.div`
  height: ${props => props.height + "rem"};
  width: ${props => props.width + "rem"};
`

const StyledInput = styled.input`
  ${styles.borderRadiusStyle}
  padding: 0.5rem;
  background: ${colors.whitePrimary};
  border: ${colors.whiteTertiary} solid 1px;
  width: 100%;
`

const StyledInputHeader = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
  margin-bottom: 0.5rem;
`

const StyledInputHeaderButtons = styled.div`
  display: inline-flex;
`

const MobileStates = {
  CONTROL: 0,
  PREVIEW: 1,
}

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
  const addAllRecipients = () => {
    receivers.forEach(receiver => {
      if (emailRecipients.indexOf(receiver.email) <= -1) {
        addEmailRecipient(receiver.email)
      }
    })
  }

  const removeAllRecipients = () => {
    receivers.forEach(receiver => {
      if (emailRecipients.indexOf(receiver.email) > -1) {
        removeEmailRecipient(receiver.email)
      }
    })
  }

  const controlActionComponent = (
    <StyledControlAction isMobile={isMobile}>
      {isMobile && (
        <Button
          type="secondary"
          onClick={() =>
            setMobileState(
              mobileState === MobileStates.CONTROL
                ? MobileStates.PREVIEW
                : MobileStates.CONTROL
            )
          }
          style={{ flexBasis: "50%", marginRight: 10 }}
        >
          {mobileState === MobileStates.CONTROL
            ? "Preview email"
            : "Back to edit"}
        </Button>
      )}
      <EmailLink
        stretch={!isMobile}
        directRecipient={emailDirectRecipient}
        recipients={emailRecipients}
        subject={emailSubject}
        body={emailBody}
      />
    </StyledControlAction>
  )

  const previewComponent = (
    <StyledPreviewContainer isMobile={isMobile}>
      {isMobile && <Spacer height={2} />}
      <StyledPreviewHeader>Preview</StyledPreviewHeader>
      <Spacer height={0.5} />
      <StyledPreviewEmail isMobile={isMobile}>
        {[
          {
            label: "From",
            content:
              emailBodyArgs.name === ""
                ? "[No name inputted]"
                : emailBodyArgs.name,
            hasUserInput:
              emailBodyArgs.name !== "" && emailBodyArgs.name != null,
            isVisible: true,
          },
          {
            label: "To",
            content: emailDirectRecipient,
            hasUserInput:
              emailDirectRecipient !== "" && emailDirectRecipient != null,
            isVisible: true,
          },
          {
            label: "BCC",
            content:
              emailRecipients.length > 0
                ? [...emailRecipients].join(", ")
                : "[No representatives selected]",
            hasUserInput: emailRecipients.length > 0,
            isVisible: receivers && receivers.length !== 0,
          },
          {
            label: "Subject",
            content: emailSubject,
            hasUserInput: emailSubject !== "" && emailSubject != null,
            isVisible: true,
          },
          {
            label: "Body",
            content: emailBody,
            hasUserInput: emailBody !== "" && emailBody != null,
            isVisible: true,
          },
        ]
          .filter(row => row.isVisible)
          .map((row, index, originalArray) => (
            <StyledPreviewEmailRow key={row.label} isMobile={isMobile}>
              <StyledPreviewEmailRowLabel>
                {row.label}
              </StyledPreviewEmailRowLabel>
              <StyledPreviewEmailRowContent
                color={!row.hasUserInput ? colors.red : colors.blackPrimary}
              >
                {row.content}
              </StyledPreviewEmailRowContent>
              {index !== originalArray.length - 1 && (
                <Spacer height={1} width={1} />
              )}
            </StyledPreviewEmailRow>
          ))}
      </StyledPreviewEmail>
      {isMobile && <Spacer height={5} />}
    </StyledPreviewContainer>
  )

  const controlContainerComponent = useMemo(
    () => (
      <StyledControlContainer isMobile={isMobile}>
        <StyledControlHeader>
          <StyledSelect
            placeholder="Choose an email template"
            onChange={({ value }) => setEmailId(value)}
            options={dropdownOptions}
            value={
              dropdownOptions[
                dropdownOptions.findIndex(d => d.value === emailId)
              ]
            }
          ></StyledSelect>
          <Spacer width={0.5} />
          <StyledControlDetails onClick={() => setShowModal(true)}>
            What is this?
          </StyledControlDetails>
        </StyledControlHeader>
        <StyledControlForm>
          {args &&
            Object.entries(args).map(([key, { label, inputType }]) => (
              <div key={key} style={{ marginBottom: 10 }}>
                <StyledInputHeader>{label}</StyledInputHeader>
                <StyledInput
                  value={emailBodyArgs[key] || ""}
                  type={inputType}
                  onChange={e => {
                    updateEmailInputs(key, e.target.value)
                  }}
                ></StyledInput>
              </div>
            ))}
          <Spacer height={1.5} />
          <div style={{ width: "100%" }}>
            {receivers && receivers.length !== 0 ? (
              <>
                <StyledInputHeader>
                  Send to...
                  <StyledInputHeaderButtons>
                    <Button
                      onClick={removeAllRecipients}
                      type="secondary"
                      size="small"
                    >
                      Deselect all
                    </Button>
                    <Spacer width={0.25} />
                    <Button
                      onClick={addAllRecipients}
                      type="secondary"
                      size="small"
                    >
                      Select all
                    </Button>
                  </StyledInputHeaderButtons>
                </StyledInputHeader>
                {receivers.map(receiver => {
                  let selected = emailRecipients.indexOf(receiver.email) > -1
                  return (
                    <Receiver
                      selected={selected}
                      key={receiver.name}
                      {...receiver}
                      onClick={() => {
                        if (!selected) {
                          addEmailRecipient(receiver.email)
                        } else {
                          removeEmailRecipient(receiver.email)
                        }
                      }}
                    />
                  )
                })}
              </>
            ) : null}
          </div>
          <Spacer height={5} />
        </StyledControlForm>
        {controlActionComponent}
      </StyledControlContainer>
    ),
    [isMobile, dropdownOptions, args, emailRecipients, emailBodyArgs, receivers]
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
        {showModal && (
          <Modal
            setShowModal={setShowModal}
            isMobile={isMobile}
            modalInfo={modalInfo}
          />
        )}
      </StyledContainer>
    )
  }
  return (
    <StyledContainer>
      {controlContainerComponent}
      {previewComponent}
      {showModal && (
        <Modal
          setShowModal={setShowModal}
          isMobile={isMobile}
          modalInfo={modalInfo}
        />
      )}
    </StyledContainer>
  )
}
export default Layout
