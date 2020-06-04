import React from "react"
import Select from "react-select"
import Receiver from "./receiver"
import { Spacer } from "./Spacer"
import Button from "./Button"

import { colors, styles, values } from "./styles"
import styled from "styled-components"

const StyledControlContainer = styled.div`
  ${styles.shadowRight}
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background-colbmor: ${colors.whiteSecondary};
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

const StyledReactSelect = styled(Select)`
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

const ControlContainer = ({
  isMobile,
  dropdownOptions,
  setEmailId,
  emailId,
  args,
  receivers,
  emailBodyArgs,
  updateEmailInputs,
  addEmailRecipient,
  removeEmailRecipient,
  emailRecipients,
  setShowModal,
  controlActionComponent,
}) => {
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
  return (
    <StyledControlContainer isMobile={isMobile}>
      <StyledControlHeader>
        <StyledReactSelect
          placeholder="Choose an email template"
          onChange={({ value }) => setEmailId(value)}
          options={dropdownOptions}
          value={
            dropdownOptions[dropdownOptions.findIndex(d => d.value === emailId)]
          }
        ></StyledReactSelect>
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
        <Spacer height={7} />
      </StyledControlForm>
      {controlActionComponent}
    </StyledControlContainer>
  )
}

export default ControlContainer
