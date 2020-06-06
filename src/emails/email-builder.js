import DefundLAPD from "./defund-lapd"
import BreonnaTaylor from "./breonna-taylor"
import JackieLacey from "./jackie-lacey"
import PeoplesBudget from "./peoples-budget"
import DefundFremontPD from "./defund-fremontpd"
import DefundOpd from "./defund-opd"
import DefundSjpd from "./defund-sjpd"
import DefundSdpd from "./defund-sdpd"

export const emailIdMap = {
  "defund-lapd": DefundLAPD,
  "defund-opd": DefundOpd,
  "defund-sjpd": DefundSjpd,
  "defund-sdpd": DefundSdpd,
  "defund-fremontpd": DefundFremontPD,
  "peoples-budget": PeoplesBudget,
  "jackie-lacey": JackieLacey,
}

export const emailIdTitleMap = {
  "defund-lapd": "Defund LAPD",
  "defund-fremontpd": "Defund Fremont PD",
  "defund-opd": "Defund OPD",
  "defund-sjpd": "Defund SJPD",
  "defund-sdpd": "Defund SDPD",
  "jackie-lacey": "Rescind Jackie Lacey Endorsement - LA",
  "peoples-budget": "Adopt a People's Budget - LA",
}

export function buildEmailPreview({ emailId, stringInputs }) {
  if (emailId in emailIdMap) return emailIdMap[emailId](stringInputs)

  return { body: "Cannot find Email.", subject: "cannot find email" }
}
