import PoliceBrutalityLa from "./police-brutality-la"
import BreonnaTaylor from "./breonna-taylor"
import JackieLacy from "./jackie-lacey"
import DefundOpd from "./defund-opd"
import DefundSjpd from "./defund-sjpd"
import DefundSdpd from "./defund-sdpd"

export const emailIdMap = {
  "police-brutality-la": PoliceBrutalityLa,
  "defund-opd": DefundOpd,
  "defund-sjpd": DefundSjpd,
  "defund-sdpd": DefundSdpd,
  "breonna-taylor": BreonnaTaylor,
  "jackie-lacey": JackieLacy,
}

export const emailIdTitleMap = {
  "police-brutality-la": "Defund LAPD",
  "defund-opd": "Defund OPD",
  "defund-sjpd": "Defund SJPD",
  "defund-sdpd": "Defund SDPD",
  "breonna-taylor": "Justice for Breonna Taylor",
  "jackie-lacey": "Rescind Jackie Lacey Endorsement",
}

export function buildEmailPreview({ emailId, stringInputs }) {
  if (emailId in emailIdMap) return emailIdMap[emailId](stringInputs)

  return { body: "Cannot find Email.", subject: "cannot find email" }
}
