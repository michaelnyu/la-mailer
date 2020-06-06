import styled from "styled-components"

export const Spacer = styled.div`
  height: ${props => (props.height ? props.height + "rem" : "100%")};
  width: ${props => (props.width ? props.width + "rem" : "100%")};
`
