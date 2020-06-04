import React from "react"
import styled from "styled-components"
import { Spacer } from "./Spacer"
import { colors, styles } from "./styles"
import { ReactComponent as CloseSVG } from "../assets/close.svg"

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
  ${props =>
    props.isMobile ? styles.paddingDefaultSides : styles.paddingLargeSides}
`

const StyledModalClose = styled.div`
  display: flex;
  flex: 0 0 2rem;
  height: 2rem;
  border-radius: 1rem;
  border: ${colors.blackTertiary} 1px solid;
  transition: 0.2s;
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
  ${props =>
    props.isMobile ? styles.paddingDefaultSides : styles.paddingLargeSides}
`

const StyledModalText = styled.p`
  line-height: 1.5em;
  white-space: pre-wrap;
  margin: 0;
  color: ${props =>
    props.type === "heading" ? colors.blackTertiary : colors.blackPrimary};
`

export default function Modal({ setShowModal, modalInfo, isMobile }) {
  return (
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
            {modalInfo.url.map(url => (
              <span key={url}>
                <a href={url}>{url}</a>
                <br />
              </span>
            ))}
          </StyledModalText>
          <Spacer height={2} />
          <hr />
          <StyledModalText type="heading">
            About Email Los Angeles
          </StyledModalText>
          <Spacer height={1} />
          <StyledModalText>
            Email Los Angeles is a project started by some students from UCLA.
            If you're an organizer, let us know how we can support you at{" "}
            <a href="mailto:activismemailer@gmail.com">
              activismemailer@gmail.com
            </a>
            .
          </StyledModalText>
          <Spacer height={2} />
        </StyledModalContent>
      </StyledModalContainer>
    </StyledModalBackground>
  )
}
