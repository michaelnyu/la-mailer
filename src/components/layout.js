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

import styled, { css } from "styled-components"

const colors = {
  blackPrimary: "rgba(0,0,0,0.8)",
  blackSecondary: "rgba(0,0,0,0.6)",
  blackTertiary: "rgba(0,0,0,0.4)",
  whitePrimary: "#FFF",
  whiteSecondary: "#F3F3F3",
  whiteTertiary: "#EBEBEB",
  shadow: "rgba(0,0,0,0.1)",
}

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
  flex: 0 0 18rem;
  z-index: 1; /* jank solution to box shadow rendering */
  ${shadowRight}
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
  width: 18rem;
  ${paddingDefault}
  bottom: 0;
  ${shadowAbove}
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
  border: ${colors.blackTertiary} solid 1px;
  width: 100%;
  border-radius: 3px;
`

const StyledInputHeader = styled.div`
  font-size: 1rem;
  display: block;
  margin-bottom: 12px;
`

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <StyledContainer>
      <StyledControlContainer>
        <StyledControlHeader>Header for choosing form</StyledControlHeader>
        <StyledControlForm>
          <div style={{ width: "100%", marginBottom: 50 }}>
            {" "}
            <StyledInputHeader>Your name</StyledInputHeader>
            <StyledInput></StyledInput>
          </div>
          <div style={{ width: "100%" }}>
            {" "}
            <StyledInputHeader>Councilmembers to send to</StyledInputHeader>
            <StyledInput></StyledInput>
          </div>
        </StyledControlForm>
        <StyledControlAction>
          <StyledButton stretch={true}>Open in Email App</StyledButton>
        </StyledControlAction>
      </StyledControlContainer>
      <StyledPreviewContainer>
        <StyledPreviewHeader>Preview</StyledPreviewHeader>
        <Spacer height={0.5} />
        <StyledPreviewEmail> Email contents</StyledPreviewEmail>
      </StyledPreviewContainer>
    </StyledContainer>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
