import DefundLAPD from "./defund-lapd"
import BreonnaTaylor from "./breonna-taylor"
import JackieLacey from "./jackie-lacey"
import PeoplesBudget from "./peoples-budget"
import DefundFremontPD from "./defund-fremontpd"
import DefundOpd from "./defund-opd"
import DefundSjpd from "./defund-sjpd"
import DefundSdpd from "./defund-sdpd"
import DefundNypd from "./defund-nypd"

export const emailIdMap = {
  "peoples-budget": PeoplesBudget,
  "defund-nypd": DefundNypd,
  "defund-opd": DefundOpd,
  "defund-sjpd": DefundSjpd,
  "defund-sdpd": DefundSdpd,
  "defund-fremontpd": DefundFremontPD,
  "jackie-lacey": JackieLacey,
}

export const emailIdTitleMap = {
  "peoples-budget": "Defund LAPD (People's Budget)",
  "defund-nypd": "Defund NYPD",
  "defund-fremontpd": "Defund Fremont PD",
  "defund-opd": "Defund OPD",
  "defund-sjpd": "Defund SJPD",
  "defund-sdpd": "Defund SDPD",
  "jackie-lacey": "Rescind Jackie Lacey Endorsement - LA",
}

export function buildEmailPreview({ emailId, stringInputs }) {
  if (emailId in emailIdMap) return emailIdMap[emailId](stringInputs)

  return { body: "Cannot find Email.", subject: "cannot find email" }
}
