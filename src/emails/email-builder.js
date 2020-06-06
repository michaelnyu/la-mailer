import DefundLAPD from "./defund-lapd"
import BreonnaTaylor from "./breonna-taylor"
import JackieLacey from "./jackie-lacey"
import PeoplesBudget from "./peoples-budget"
import DefundFremontPD from "./defund-fremontpd"
import DefundOpd from "./defund-opd"
import DefundSjpd from "./defund-sjpd"

export const emailIdMap = {
  "defund-lapd": DefundLAPD,
  "defund-opd": DefundOpd,
  "defund-sjpd": DefundSjpd,
  "defund-fremontpd": DefundFremontPD,
  "breonna-taylor": BreonnaTaylor,
  "peoples-budget": PeoplesBudget,
  "jackie-lacey": JackieLacey,
}

export const emailIdTitleMap = {
  "defund-lapd": "Defund LAPD",
  "defund-fremontpd": "Defund Fremont PD",
  "defund-opd": "Defund OPD",
  "defund-sjpd": "Defund SJPD",
  "breonna-taylor": "Justice for Breonna Taylor",
  "jackie-lacey": "Rescind Jackie Lacey Endorsement - LA",
  "peoples-budget": "Adopt a People's Budget - LA",
}

export function buildEmailPreview({ emailId, stringInputs }) {
  if (emailId in emailIdMap) return emailIdMap[emailId](stringInputs)

  return { body: "Cannot find Email.", subject: "cannot find email" }
}
