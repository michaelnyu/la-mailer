/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
// import Header from "./header"
import "./layout.css"
import Receiver from "../components/receiver"
import EmailLink from "../components/email-link"
import { colors } from "../components/styles"
import styled, { css } from "styled-components"

import { isMobile } from "react-device-detect"

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
  ${props => !props.isMobile && "flex: 0 0 18rem;"}
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

const Layout = ({
  setEmailId,
  setEmailBody,
  setEmailSubject,
  setEmailRecipients,
  setEmailBodyArgs,
  emailSubject,
  emailBody,
  emailBodyArgs,
  emailRecipients,
  children,
}) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

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

  const addEmailRecipient = email =>
    setEmailRecipients(emailRecipients.concat(email))
  const removeEmailRecipient = email =>
    setEmailRecipients(emailRecipients.filter(e => email != e))

  return (
    <StyledContainer>
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
                    // setEmailRecipients(
                    //   [...emailRecipients, receiver.email].filter(
                    //     email =>
                    //       selected || (!selected && email != receiver.email)
                    //   )
                    // )
                  }}
                />
              )
            })}
          </div>
        </StyledControlForm>
        <StyledControlAction isMobile={isMobile}>
          <EmailLink
            recipients={emailRecipients}
            subject={emailSubject}
            body={emailBody}
          />
        </StyledControlAction>
      </StyledControlContainer>
      {!isMobile && (
        <StyledPreviewContainer>
          <StyledPreviewHeader>Preview</StyledPreviewHeader>
          <Spacer height={0.5} />
          <StyledPreviewEmail> Email contents</StyledPreviewEmail>
        </StyledPreviewContainer>
      )}
    </StyledContainer>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
export { colors }
