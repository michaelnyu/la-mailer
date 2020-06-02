/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useMemo, useState } from "react"
import PropTypes from "prop-types"
import "./layout.css"
import Receiver from "../components/receiver"
import EmailLink from "../components/email-link"
import { colors } from "../components/styles"
import styled, { css } from "styled-components"

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
  ${props => !props.isMobile && "flex: 0 0 20rem;"}
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

const StyledControlForm = styled.div`
  ${paddingDefault}
  // display: flex;
  height: auto;
`

const StyledControlAction = styled.div`
  position: absolute;
  background-color: ${colors.whitePrimary};
  width: ${props => (props.isMobile ? "100%;" : "18rem;")}
  ${props => props.isMobile && "display: flex; justify-content: space-between;"}
  ${paddingDefault}
  bottom: 0;
  ${shadowAbove}
`

const StyledPreviewContainer = styled.div`
  flex: 1;
  ${paddingLarge}
  background-color: ${colors.whiteTertiary};
`
const StyledPreviewHeader = styled.h3`
  font-size: 1.125rem;
  ${textStyle}
  text-transform: uppercase;
  color: ${colors.blackTertiary};
`

const StyledPreviewEmail = styled.div`
  ${paddingLarge}
  ${shadowBelow}
  background-color: ${colors.whitePrimary};
  border-radius: 0.25rem;
`

const StyledPreviewEmailHeader = styled.h4``

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
  border: none;
  background-color: ${colors.blackPrimary};
  color: ${colors.whitePrimary};
  &:hover {
    cursor: pointer;
  }
  width: ${props => (props.stretch ? "100%" : "auto")};
`

const MobileStates = {
  CONTROL: 0,
  PREVIEW: 1,
}

const Layout = ({
  setEmailId,
  setEmailBody,
  setEmailSubject,
  addEmailRecipient,
  removeEmailRecipient,
  setEmailBodyArgs,
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

  const [mobileState, setMobileState] = useState(MobileStates.CONTROL)
  const showPreview = !isMobile || mobileState == MobileStates.PREVIEW
  const showControlPanel = !isMobile || mobileState == MobileStates.CONTROL

  const controlActionComponent = (
    <StyledControlAction isMobile={isMobile}>
      {isMobile && (
        <StyledButton
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
    <StyledPreviewContainer>
      <StyledPreviewHeader>Preview</StyledPreviewHeader>
      <Spacer height={0.5} />
      <StyledPreviewEmail>{emailBody}</StyledPreviewEmail>
    </StyledPreviewContainer>
  )

  const controlContainerComponent = (
    <StyledControlContainer isMobile={isMobile}>
      <StyledControlHeader>Header for choosing form</StyledControlHeader>
      <StyledControlForm>
        <div style={{ width: "100%", marginBottom: 50 }}>
          <StyledInputHeader>Your name</StyledInputHeader>
          <StyledInput
            type="text"
            onChange={e =>
              setEmailBodyArgs({ ...emailBodyArgs, name: e.target.value })
            }
          ></StyledInput>
        </div>
        <div style={{ width: "100%" }}>
          <StyledInputHeader>Councilmembers to send to</StyledInputHeader>
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
