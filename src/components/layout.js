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
  whitePrimary: "#FFF",
  whiteSecondary: "#F3F3F3",
  whiteTertiary: "#EBEBEB",
  shadow: "rgba(0,0,0,0.1)",
}

const paddingDefault = css`
  padding: 1rem;
`
const shadowAbove = css`
  box-shadow: 0px -4px 10px ${colors.shadow};
`
const shadowRight = css`
  box-shadow: 4px 0px 10px ${colors.shadow};
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

const StyledPreviewContainer = styled.div`
  flex: 1;
  background-color: ${colors.whiteTertiary};
`
const StyledControlHeader = styled.div`
  display: flex;
  flex: 0 0 4rem;
  ${paddingDefault}
  background-color: ${colors.whitePrimary};
`

const StyledControlForm = styled.div`
  ${paddingDefault}

  display: flex;
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
        <StyledControlHeader>Header</StyledControlHeader>
        <StyledControlForm>Contents</StyledControlForm>
        <StyledControlAction>Actions</StyledControlAction>
      </StyledControlContainer>
      <StyledPreviewContainer>fill</StyledPreviewContainer>
    </StyledContainer>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
