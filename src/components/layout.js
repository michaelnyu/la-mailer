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

import {
  isMobile,
  isBrowser,
  BrowserView,
  MobileView,
} from "react-device-detect"

const paddingDefault = css`
  padding: 1rem;
`
const paddingLarge = css`
  padding: 2rem;
`

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
  ${props => !props.isMobile && "flex: 0 0 22rem;"}
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
  width: ${props => (props.isMobile ? "100%;" : "20rem;")}
  ${props => props.isMobile && "display: flex; justify-content: space-between;"}
  ${paddingDefault}
  bottom: 0;
  ${shadowAbove}
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
  font-size: 1rem;
  display: block;
  margin-bottom: 12px;
`

const StyledButton = styled.button`
  display: inline-block;
  border-radius: 0.25rem;
  font-size: 1.125rem;
  line-height: 2.5rem;
  border: ${props =>
    props.type === "secondary" ? colors.blackTertiary + "1px solid" : "none"};
  background-color: ${props =>
    props.type === "secondary" ? colors.whitePrimary : colors.blackPrimary};
  color: ${props =>
    props.type === "secondary" ? colors.blackPrimary : colors.whitePrimary};
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
  width: ${props => (props.stretch ? "100%" : "auto")};
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
      name: "Gil Dedillo 2",
      email: "councilmember.cedillo2@la.org",
    },
    {
      label: "CD3",
      name: "Gil Dedillo 3",
      email: "councilmember.cedillo3@la.org",
    },
  ]
  const dropdownOptions = Object.entries(
    emailIdTitleMap
  ).map(([id, title]) => ({ value: id, label: title }))

  const [mobileState, setMobileState] = useState(MobileStates.CONTROL)
  const showPreview = !isMobile || mobileState == MobileStates.PREVIEW
  const showControlPanel = !isMobile || mobileState == MobileStates.CONTROL

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
          { label: "From", content: emailBodyArgs.name },
          {
            label: "To",
            content: emailRecipients.length
              ? emailRecipients[0]
              : "[EMAIL RECIPIENT HERE]",
          },
          {
            label: "BCC",
            content:
              emailRecipients.length > 1
                ? [...emailRecipients].splice(1).join(", ")
                : "[BCC RECIPIENTS HERE]",
          },
          { label: "Subject", content: emailSubject },
          { label: "Body", content: emailBody },
        ].map((row, index, originalArray) => (
          <StyledPreviewEmailRow key={row.label} isMobile={isMobile}>
            <StyledPreviewEmailRowLabel>{row.label}</StyledPreviewEmailRowLabel>
            <StyledPreviewEmailRowContent>
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
        <StyledControlDetails onClick={console.log("clicked details")}>
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
          <StyledInputHeader>Send to...</StyledInputHeader>
          {receivers.map(receiver => {
            return (
              <Receiver
                key={receiver.name}
                {...receiver}
                onClick={selected => {
                  if (selected) {
                    addEmailRecipient(receiver.email)
                  } else {
                    removeEmailRecipient(receiver.email)
                  }
                }}
              />
            )
          })}
        </div>
      </StyledControlForm>
      {controlActionComponent}
    </StyledControlContainer>
  )

  return (
    <>
      {children}
      <BrowserView style={{ height: "100%" }}>
        <StyledContainer>
          {controlContainerComponent}
          {previewComponent}
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
