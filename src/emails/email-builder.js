import PoliceBrutalityLa from "./police-brutality-la"
import BreonnaTaylor from "./breonna-taylor"

const emailIdMap = {
  "police-brutality-la": PoliceBrutalityLa,
  "breonna-taylor": BreonnaTaylor,
}

export const emailIdTitleMap = {
  "police-brutality-la": "Defund LAPD Template",
  "breonna-taylor": "Justice for Breonna Taylor Template",
}

export function buildEmailPreview({ emailId, stringInputs }) {
  if (emailId in emailIdMap) return emailIdMap[emailId](stringInputs)

  return { body: "Cannot find Email.", subject: "cannot find email" }
}
