/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useMemo, useState } from "react"
import PropTypes from "prop-types"
import "./layout.css"
import Select from "react-select"
import Receiver from "../components/receiver"
import EmailLink from "../components/email-link"
import { colors } from "../components/styles"
import styled, { css } from "styled-components"
import { emailIdTitleMap } from "../emails/email-builder"
import { ReactComponent as CloseSVG } from "../assets/close.svg"

import {
  isMobile,
  isBrowser,
  BrowserView,
  MobileView,
} from "react-device-detect"

const paddingDefaultSides = css`
  padding-left: 1rem;
  padding-right: 1rem;
`

const paddingLargeSides = css`
  padding-left: 2rem;
  padding-right: 2rem;
`

const paddingDefault = css`
  ${paddingDefaultSides}
  padding-top: 1rem;
  padding-bottom: 1rem;
`
const paddingLarge = css`
  ${paddingLargeSides}
  padding-top: 2rem;
  padding-bottom: 2rem;
`

const controlWidth = "22rem"

const shadowAbove = css`
  box-shadow: 0px -4px 10px ${colors.shadow};
`
const shadowRight = css`
  box-shadow: 4px 0px 10px ${colors.shadow};
`
const shadowBelow = css`
  box-shadow: 4px 0px 10px ${colors.shadow};
`

const textStyle = css`
  margin: 0;
  line-height: 1.33333em;
`

const StyledContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  height: 100%;
  flex-direction: ${props => (props.column ? "column" : "row")};
`

const StyledControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background-color: ${colors.whiteSecondary};
  ${props => !props.isMobile && "flex: 0 0 " + controlWidth + ";"}
  width: ${props => (props.isMobile ? "100%;" : "auto;")}
  z-index: 1; /* jank solution to box shadow rendering */
  ${shadowRight}
  overflow: scroll;
`

const StyledControlHeader = styled.div`
  display: flex;
  flex: 0 0 4rem;
  ${paddingDefault}
  background-color: ${colors.whitePrimary};
`

const StyledSelect = styled(Select)`
  flex: 1;
`

const StyledControlDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 5.5rem;
  font-size: 0.75rem;
  color: ${colors.blackSecondary};
  text-decoration: underline;
  border-radius: 0.25rem;
  transition: 0.2s;
  &:hover {
    cursor: pointer;
    background-color: ${colors.whiteTertiary};
  }
`

const StyledControlForm = styled.div`
  ${paddingDefault}
  display: flex;
  flex-direction: column;
  height: auto;
`

const StyledControlAction = styled.div`
  position: absolute;
  background-color: ${colors.whitePrimary};
  width: ${props => (props.isMobile ? "100%" : controlWidth)};
  ${props => props.isMobile && "display: flex; justify-content: space-between;"}
  ${paddingDefault}
  bottom: 0;
  ${shadowAbove}
  & > a {
    text-decoration: none;
  }
`

const StyledPreviewContainer = styled.div`
  flex: 1;
  ${props => (props.isMobile ? paddingDefault : paddingLarge)}
  background-color: ${colors.whiteTertiary};
  max-height: 100vh;
  overflow-y: scroll;
`
const StyledPreviewHeader = styled.h3`
  font-size: 1.125rem;
  ${textStyle}
  text-transform: uppercase;
  color: ${colors.blackTertiary};
`

const StyledPreviewEmail = styled.div`
  ${props => (props.isMobile ? paddingDefault : paddingLarge)}

  ${shadowBelow}
  background-color: ${colors.whitePrimary};
  border-radius: 0.25rem;
`

const StyledPreviewEmailHeader = styled.h4``

const StyledPreviewEmailRow = styled.div`
  display: ${props => (props.isMobile ? "block" : "grid")};
  line-height: 1.333em;
  grid-template-columns: 8em auto;
`

const StyledPreviewEmailRowLabel = styled.p`
  color: ${colors.blackTertiary};
  margin: 0;
`

const StyledPreviewEmailRowContent = styled.p`
  color: ${props => props.color};
  margin: 0;
  line-height: 1.333em;
  white-space: pre-wrap;
`

const Spacer = styled.div`
  height: ${props => props.height + "rem"};
  width: ${props => props.width + "rem"};
`

const StyledInput = styled.input`
  padding: 0.5em;
  background: ${colors.whitePrimary};
  border: ${colors.whiteTertiary} solid 1px;
  width: 100%;
  border-radius: 3px;
`

const StyledInputHeader = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
  margin-bottom: 12px;
`

const StyledInputHeaderButtons = styled.div`
  display: inline-flex;
`

const buttonStyle = css`
  border: ${props =>
    props.type === "secondary" ? colors.blackTertiary + "1px solid" : "none"};
  background-color: ${props =>
    props.type === "secondary" ? colors.whitePrimary : colors.blackPrimary};
  color: ${props =>
    props.type === "secondary" ? colors.blackPrimary : colors.whitePrimary};
  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
  border-radius: 0.25rem;
  width: ${props => (props.stretch ? "100%" : "auto")};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  &:focus {
    outline: none;
  }
  &:active {
    border: ${props =>
      props.type === "secondary" ? colors.blackPrimary + "1px solid" : "none"};
    opacity: 1;
  }
`

const StyledButton = styled.button`
  ${buttonStyle}
  font-size: 1.125rem;
  padding: 0.75rem;
`

const StyledButtonSmall = styled.button`
  ${buttonStyle}
  font-size: 0.75em;
  line-height: 0.75em;
  padding: 0.25rem;
`

const StyledModalBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: ${colors.blackTertiary};
  z-index: 2;
`

const StyledModalContainer = styled.div`
  display: flex;
  flex: ${props => (props.isMobile ? 1 : 0.7)};
  align-self: ${props => (props.isMobile ? "flex-end" : "center")};
  max-height: 80vh;
  max-width: 100vw;
  flex-direction: column;
  background-color: ${colors.whitePrimary};
  border-radius: ${props => (props.isMobile ? "1rem 1rem 0 0" : "0.5rem")};
`

const StyledModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${props => (props.isMobile ? paddingDefaultSides : paddingLargeSides)}
`

const StyledModalClose = styled.div`
  display: flex;
  flex: 0 0 2rem;
  height: 2rem;
  width: 2rem;
  border-radius: 1rem;
  border: ${colors.blackTertiary} 1px solid;
  transition: 0.2s;
  align-self: flex-end;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer;
    border: ${colors.blackPrimary} 1px solid;
  }
`

const StyledModalContent = styled.div`
  flex: 1;
  overflow-y: scroll;
  ${props => (props.isMobile ? paddingDefaultSides : paddingLargeSides)}
`

const StyledModalText = styled.p`
  line-height: 1.5em;
  white-space: pre-wrap;
  margin: 0;
  color: ${props =>
    props.type === "heading" ? colors.blackTertiary : colors.blackPrimary};
`

const MobileStates = {
  CONTROL: 0,
  PREVIEW: 1,
}

const Layout = ({
  setEmailId,
  addEmailRecipient,
  removeEmailRecipient,
  updateEmailInputs,
  emailSubject,
  emailBody,
  emailBodyArgs,
  emailRecipients,
  modalInfo,
  children,
}) => {
  const receivers = [
    {
      label: "CD1",
      name: "Gil Dedillo",
      email: "councilmember.cedillo@la.org",
    },
    {
      label: "CD2",
      name: "Paul Krekorian",
      email: "councilmember.Krekorian@lacity.org",
    },
    {
      label: "CD3",
      name: "Bob Blumenfield",
      email: "councilmember.blumenfield@lacity.org",
    },
    {
      label: "CD4",
      name: "David Ryu",
      email: "david.ryu@lacity.org",
    },
    {
      label: "CD5",
      name: "Paul Koretz",
      email: "paul.koretz@lacity.org",
    },
    {
      label: "CD6",
      name: "Nuny Martinez",
      email: "councilmember.martinez@lacity.org",
    },
    {
      label: "CD7",
      name: "Monica Rodriguez",
      email: "councilmember.rodriguez@lacity.org",
    },
    {
      label: "CD8",
      name: "Marcqueece Harris-Dawson",
      email: "councilmember.harris-dawson@lacity.org",
    },
    {
      label: "CD9",
      name: "Curren Price",
      email: "councilmember.price@lacity.org",
    },

    {
      label: "CD10",
      name: "Herb Wesson",
      email: "councilmember.wesson@lacity.org",
    },
    {
      label: "CD11",
      name: "Mike Bonin ",
      email: "councilmember.bonin@lacity.org",
    },
    {
      label: "CD12",
      name: "John Lee",
      email: "councilmember.Lee@lacity.org",
    },
    {
      label: "CD13",
      name: "Mitch O’Farrell",
      email: "councilmember.ofarrell@lacity.org",
    },
    {
      label: "CD14",
      name: "Jose Huizar (suspended)",
      email: "councilmember.huizar@lacity.org",
    },
    {
      label: "CD15",
      name: "Joe Buscaino ",
      email: "councilmember.buscaino@lacity.org",
    },
  ]
  const dropdownOptions = Object.entries(
    emailIdTitleMap
  ).map(([id, title]) => ({ value: id, label: title }))

  const [mobileState, setMobileState] = useState(MobileStates.CONTROL)
  const showPreview = !isMobile || mobileState == MobileStates.PREVIEW
  const showControlPanel = !isMobile || mobileState == MobileStates.CONTROL
  const [showModal, setShowModal] = useState(false)

  const addAllRecipients = () => {
    receivers.map(receiver => {
      if (emailRecipients.indexOf(receiver.email) <= -1) {
        addEmailRecipient(receiver.email)
      }
    })
  }

  const removeAllRecipients = () => {
    receivers.map(receiver => {
      if (emailRecipients.indexOf(receiver.email) > -1) {
        removeEmailRecipient(receiver.email)
      }
    })
  }

  const controlActionComponent = (
    <StyledControlAction isMobile={isMobile}>
      {isMobile && (
        <StyledButton
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
        </StyledButton>
      )}
      <EmailLink
        style={{ flexBasis: "50%" }}
        stretch={true}
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
                ? "[YOUR NAME HERE]"
                : emailBodyArgs.name,
            hasUserInput:
              emailBodyArgs.name !== "" && emailBodyArgs.name != null,
          },
          {
            label: "To",
            content: emailRecipients.length
              ? emailRecipients[0]
              : "[EMAIL RECIPIENT HERE]",
            hasUserInput: emailRecipients.length > 0,
          },
          {
            label: "BCC",
            content:
              emailRecipients.length > 1
                ? [...emailRecipients].splice(1).join(", ")
                : "[BCC RECIPIENTS HERE]",
            hasUserInput: emailRecipients.length > 0,
          },
          {
            label: "Subject",
            content: emailSubject,
            hasUserInput: emailSubject !== "" && emailSubject != null,
          },
          {
            label: "Body",
            content: emailBody,
            hasUserInput: emailBody !== "" && emailBody != null,
          },
        ].map((row, index, originalArray) => (
          <StyledPreviewEmailRow key={row.label} isMobile={isMobile}>
            <StyledPreviewEmailRowLabel>{row.label}</StyledPreviewEmailRowLabel>
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

  const controlContainerComponent = (
    <StyledControlContainer isMobile={isMobile}>
      <StyledControlHeader>
        <StyledSelect
          placeholder="Choose an email template"
          onChange={({ value }) => setEmailId(value)}
          options={dropdownOptions}
          value={dropdownOptions[0]}
        ></StyledSelect>
        <Spacer width={0.5} />
        <StyledControlDetails onClick={() => setShowModal(true)}>
          What is this?
        </StyledControlDetails>
      </StyledControlHeader>
      <StyledControlForm>
        <div>
          <StyledInputHeader>Your name</StyledInputHeader>
          <StyledInput
            type="text"
            onChange={e => {
              updateEmailInputs({ name: e.target.value })
            }}
          ></StyledInput>
        </div>
        <Spacer height={1.5} />
        <div style={{ width: "100%" }}>
          <StyledInputHeader>
            Send to...
            <StyledInputHeaderButtons>
              <StyledButtonSmall onClick={removeAllRecipients} type="secondary">
                Deselect all
              </StyledButtonSmall>
              <Spacer width={0.25} />
              <StyledButtonSmall onClick={addAllRecipients} type="secondary">
                Select all
              </StyledButtonSmall>
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
        </div>
        <Spacer height={5} />
      </StyledControlForm>
      {controlActionComponent}
    </StyledControlContainer>
  )

  const modalComponent = (
    <StyledModalBackground
      onClick={e => {
        setShowModal(false)
      }}
    >
      <Spacer height={1} />

      <StyledModalContainer
        isMobile={isMobile}
        onClick={e => e.stopPropagation()}
      >
        <Spacer height={2} />
        <StyledModalHeader isMobile={isMobile}>
          <StyledModalText type="heading">{modalInfo.title}</StyledModalText>
          <StyledModalClose
            onClick={e => {
              setShowModal(false)
            }}
          >
            <CloseSVG />
          </StyledModalClose>
        </StyledModalHeader>
        <Spacer height={1} />
        <StyledModalContent isMobile={isMobile}>
          <StyledModalText>{modalInfo.body}</StyledModalText>
          <Spacer height={1} />
          <StyledModalText>
            More resources can be found at:{" "}
            <a href={modalInfo.url}>{modalInfo.url}</a>
          </StyledModalText>

          <Spacer height={2} />
        </StyledModalContent>
      </StyledModalContainer>
    </StyledModalBackground>
  )

  return (
    <>
      {children}
      <BrowserView style={{ height: "100%" }}>
        <StyledContainer>
          {controlContainerComponent}
          {previewComponent}
          {showModal && modalComponent}
        </StyledContainer>
      </BrowserView>
      <MobileView style={{ height: "100%" }}>
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
      </MobileView>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
export { colors, StyledButton }
