import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Preview from "../components/preview"
import EmailLink from "../components/email-link"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Preview emailId={"police-brutality-la"} />
    <EmailLink
      recipients={[
        "michaelnyu@yahoo.com",
        "bccemail@email.com",
        "bccemail2@email.com",
      ]}
      subject={"yes"}
      body={"this is body"}
    />
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
