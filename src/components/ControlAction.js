import React from "react"
import { Spacer } from "./Spacer"
import EmailLink from "./email-link"
import Button from "./Button"

import { MobileStates } from "../utils"
import { colors, styles, values } from "./styles"
import styled from "styled-components"

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

const ControlAction = ({
  isMobile,
  emailDirectRecipient,
  emailRecipients,
  emailSubject,
  emailBody,
  mobileState,
  setMobileState,
}) => (
  <StyledControlAction isMobile={isMobile}>
    {isMobile && (
      <>
        <Button
          type="secondary"
          onClick={() =>
            setMobileState(
              mobileState === MobileStates.CONTROL
                ? MobileStates.PREVIEW
                : MobileStates.CONTROL
            )
          }
        >
          {mobileState === MobileStates.CONTROL
            ? "Preview email"
            : "Back to edit"}
        </Button>
        <Spacer width={0.5} />
      </>
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

export default ControlAction
