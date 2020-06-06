import PoliceBrutalityLa from "./police-brutality-la"
import BreonnaTaylor from "./breonna-taylor"
import JackieLacy from "./jackie-lacy"
import DefundOpd from "./defund-opd"

export const emailIdMap = {
  "police-brutality-la": PoliceBrutalityLa,
  "breonna-taylor": BreonnaTaylor,
  "jackie-lacy": JackieLacy,
  "defund-opd": DefundOpd,
}

export const emailIdTitleMap = {
  "police-brutality-la": "Defund LAPD",
  "breonna-taylor": "Justice for Breonna Taylor",
  "jackie-lacy": "Rescind Jackie Lacey Endorsement",
  "defund-opd": "Defund OPD",
}

export function buildEmailPreview({ emailId, stringInputs }) {
  if (emailId in emailIdMap) return emailIdMap[emailId](stringInputs)

  return { body: "Cannot find Email.", subject: "cannot find email" }
}
