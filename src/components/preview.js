import React from "react"
// import { buildEmailPreview } from "../emails/email-builder"
import styled from "styled-components"
import { Spacer } from "./Spacer"
import { colors, styles } from "./styles"

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

const Preview = ({
  emailId,
  emailBody,
  emailDirectRecipient,
  isMobile,
  emailSubject,
  receivers,
  emailRecipients = [],
  emailBodyArgs,
}) => {
  // const email = buildEmailPreview({
  //   emailId,
  //   stringInputs: { name: "michael" },
  // })
  // const { body } = email

  return (
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
}

export default Preview
