import PoliceBrutatlityLa from "./police-brutality-la"

const emailIdMap = {
  "police-brutality-la": PoliceBrutatlityLa,
}

export function buildEmailPreview({ emailId, stringInputs }) {
  if (emailId in emailIdMap) return emailIdMap[emailId](stringInputs)

  return { body: "Cannot find Email." }
}
