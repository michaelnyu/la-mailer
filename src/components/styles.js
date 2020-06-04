import { css } from "styled-components"

const colors = {
  blackPrimary: "rgba(0,0,0,0.8)",
  blackSecondary: "rgba(0,0,0,0.6)",
  blackTertiary: "rgba(0,0,0,0.4)",
  whitePrimary: "#FFF",
  whiteSecondary: "#F3F3F3",
  whiteTertiary: "#EBEBEB",
  shadow: "rgba(0,0,0,0.1)",
  red: "#ff0000",
}

const borderRadiusStyle = css`
  border-radius: 0.25rem;
`
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

const styles = {
  borderRadiusStyle,
  paddingDefaultSides,
  paddingLargeSides,
  paddingDefault,
  paddingLarge,
  shadowAbove,
  shadowRight,
  shadowBelow,
  textStyle,
}

const controlWidth = "22rem"

const values = {
  controlWidth,
}

export { colors, styles, values }
