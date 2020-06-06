import DefundLAPD from "./defund-lapd"
import BreonnaTaylor from "./breonna-taylor"
import JackieLacey from "./jackie-lacey"
import PeoplesBudget from "./peoples-budget"

export const emailIdMap = {
  "defund-lapd": DefundLAPD,
  "breonna-taylor": BreonnaTaylor,
  "jackie-lacey": JackieLacey,
  "peoples-budget": PeoplesBudget,
}

export const emailIdTitleMap = {
  "defund-lapd": "Defund LAPD Template - LA",
  "breonna-taylor": "Justice for Breonna Taylor",
  "jackie-lacey": "Rescind Jackie Lacey Endorsement Template - LA",
  "peoples-budget": "Adopt a People's Budget - LA",
}

export function buildEmailPreview({ emailId, stringInputs }) {
  if (emailId in emailIdMap) return emailIdMap[emailId](stringInputs)

  return { body: "Cannot find Email.", subject: "cannot find email" }
}
