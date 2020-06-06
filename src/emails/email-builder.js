import DefundLAPD from "./defund-lapd"
import BreonnaTaylor from "./breonna-taylor"
import JackieLacey from "./jackie-lacey"
import PeoplesBudget from "./peoples-budget"
import DefundFremontPD from "./defund-fremontpd"

export const emailIdMap = {
  "defund-lapd": DefundLAPD,
  "breonna-taylor": BreonnaTaylor,
  "jackie-lacey": JackieLacey,
  "peoples-budget": PeoplesBudget,
  "defund-fremontpd": DefundFremontPD,
}

export const emailIdTitleMap = {
  "defund-lapd": "Defund LAPD - LA",
  "breonna-taylor": "Justice for Breonna Taylor",
  "jackie-lacey": "Rescind Jackie Lacey Endorsement - LA",
  "peoples-budget": "Adopt a People's Budget - LA",
  "defund-fremontpd": "Defund Fremont PD",
}

export function buildEmailPreview({ emailId, stringInputs }) {
  if (emailId in emailIdMap) return emailIdMap[emailId](stringInputs)

  return { body: "Cannot find Email.", subject: "cannot find email" }
}
