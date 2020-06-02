import PoliceBrutalityLa from "./police-brutality-la"

const emailIdMap = {
  "police-brutality-la": PoliceBrutalityLa,
}

export const emailIdTitleMap = {
  "police-brutality-la": "Defund LAPD Template",
}

export function buildEmailPreview({ emailId, stringInputs }) {
  if (emailId in emailIdMap) return emailIdMap[emailId](stringInputs)

  return { body: "Cannot find Email.", subject: "cannot find email" }
}
