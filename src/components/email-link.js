import React from "react"

const EmailLink = ({ recipients = [], body, subject }) => {
  let href = `mailto:${recipients[0]}?`

  if (recipients.length > 1) {
    const bccRecipients = recipients.splice(1).join(",")
    href += `&bcc=${bccRecipients}`
  }

  href += `&subject=${subject}`
  href += `&body=${body.replace(/\n/g, "%0A%0A")}`

  return (
    <a href={href}>
      <button>Open in Mail App</button>
    </a>
  )
}

export default EmailLink
