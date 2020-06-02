function buildEmail({ name }) {
  return {
    title: "Defund LAPD Template",
    subject: "Defund LAPD",
    body: `Dear Council Members of the Budget and Finance Committee, \n I understand the city of Los Angeles is in the process of reviewing its 2020-2021 budget for the fiscal year. Obviously there is a need for overall cuts due to the financial impact of the COVID-19 pandemic, but this is not a time for dire cuts to some of its most important departments including: Emergency Management, Cultural Affairs, Parks and Recreation, Transportation and Housing, and Community Investments. Each of these departments provide extremely critical resources to the residents of Los Angeles. Funding should instead be cut from the LAPD, and their budget reallocated to the people and programs that need it most.\n In light of recent events including the deaths of George Floyd, Ahmaud Arbery, Breonna Taylor, and many more and their impact nationally, this is an extremely crucial time to critically review the budget of the Los Angeles Police Department as well as strengthening its oversight.\n The costs of this department overshadows the rest of the city's budget exponentially, more than half of the general fund, which could provide much needed and necessary support to other programs, programs that serve the public's needs so much more.\n It is an imperative time that the LAPD's budget is fiscally reviewed. It is an imperative time that the city reflect upon its management of the LAPD, its overall oversight, and its relationship to its citizens and the harm they inflict upon them. The people of Los Angeles are imploring you to cut the funding for the LAPD.\n Thank you for your time.\n From your constituent,\n ${
      name || "YOUR NAME HERE"
    }`,
  }
}

export default buildEmail
