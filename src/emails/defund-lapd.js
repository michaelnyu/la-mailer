function buildEmail({ name }) {
  return {
    title: "Defund LAPD Template",
    subject: "Defund LAPD",
    body: `Dear Council Members of the Budget and Finance Committee,\n\nI understand the city of Los Angeles is in the process of reviewing its 2020-2021 budget for the fiscal year. Obviously there is a need for overall cuts due to the financial impact of the COVID-19 pandemic, but this is not a time for dire cuts to some of its most important departments including: Emergency Management, Cultural Affairs, Parks and Recreation, Transportation and Housing, and Community Investments. Each of these departments provide extremely critical resources to the residents of Los Angeles. Funding should instead be cut from the LAPD, and their budget reallocated to the people and programs that need it most.\n\nIn light of recent events including the deaths of George Floyd, Ahmaud Arbery, Breonna Taylor, and many more and their impact nationally, this is an extremely crucial time to critically review the budget of the Los Angeles Police Department as well as strengthening its oversight.\n\nThe costs of this department overshadows the rest of the city's budget exponentially, more than half of the general fund, which could provide much needed and necessary support to other programs, programs that serve the public's needs so much more.\n\nIt is an imperative time that the LAPD's budget is fiscally reviewed. It is an imperative time that the city reflect upon its management of the LAPD, its overall oversight, and its relationship to its citizens and the harm they inflict upon them. The people of Los Angeles are imploring you to cut the funding for the LAPD.\n\nThank you for your time.\n\nFrom your constituent,\n\n${
      name || "[YOUR NAME HERE]"
    }`,
    args: {
      name: {
        label: "Your name",
        inputType: "text",
      },
    },
    directRecipient: `clerk.budgetandfinancecommittee@lacity.org`,
    receivers: [
      {
        label: "CD1",
        name: "Gil Dedillo",
        email: "councilmember.cedillo@la.org",
        autoSelect: true,
      },
      {
        label: "CD2",
        name: "Paul Krekorian",
        email: "councilmember.Krekorian@lacity.org",

        autoSelect: true,
      },
      {
        label: "CD3",
        name: "Bob Blumenfield",
        email: "councilmember.blumenfield@lacity.org",
        autoSelect: true,
      },
      {
        label: "CD4",
        name: "David Ryu",
        email: "david.ryu@lacity.org",
        autoSelect: true,
      },
      {
        label: "CD5",
        name: "Paul Koretz",
        email: "paul.koretz@lacity.org",
        autoSelect: true,
      },
      {
        label: "CD6",
        name: "Nuny Martinez",
        email: "councilmember.martinez@lacity.org",
        autoSelect: true,
      },
      {
        label: "CD7",
        name: "Monica Rodriguez",
        email: "councilmember.rodriguez@lacity.org",
        autoSelect: true,
      },
      {
        label: "CD8",
        name: "Marcqueece Harris-Dawson",
        email: "councilmember.harris-dawson@lacity.org",
        autoSelect: true,
      },
      {
        label: "CD9",
        name: "Curren Price",
        email: "councilmember.price@lacity.org",
        autoSelect: true,
      },

      {
        label: "CD10",
        name: "Herb Wesson",
        email: "councilmember.wesson@lacity.org",
        autoSelect: true,
      },
      {
        label: "CD11",
        name: "Mike Bonin ",
        email: "councilmember.bonin@lacity.org",
        autoSelect: true,
      },
      {
        label: "CD12",
        name: "John Lee",
        email: "councilmember.Lee@lacity.org",
        autoSelect: true,
      },
      {
        label: "CD13",
        name: "Mitch O’Farrell",
        email: "councilmember.ofarrell@lacity.org",
        autoSelect: true,
      },
      {
        label: "CD14",
        name: "Jose Huizar",
        email: "councilmember.huizar@lacity.org",
        autoSelect: true,
      },
      {
        label: "CD15",
        name: "Joe Buscaino ",
        email: "councilmember.buscaino@lacity.org",
        autoSelect: true,
      },
    ],
    modalBody: `Mayor Garcetti has chosen to increase LAPD funding, at a time when Angelenos have made clear this does not align with their priorities and concerns. The City’s unemployment rate continues to rise — reaching around 55% in early May, and nationally the highest rate since the Great Depression. Many of its approximately 2 million renters are struggling to pay rent. 58,000 of our unhoused comrades remain on the streets, despite clear evidence that failing to house them is the equivalent of sentencing them to death. \n\nThe mayor has failed to commandeer hotel rooms, despite 100,000 rooms sitting vacant, many that were overwhelmingly built with public money or on public land. Incarcerated folx are not being released, though the risk of contracting COVID-19 is greater in congregate and institutionalized living settings. Garcetti has chosen to ignore these pressing concerns, furlough 16,000 non-police municipal workers, cut funding to services, and funnel more (and unnecessary) money towards the police department AS CRIME RATES HAVE DROPPED.`,
    modalTitle: `Email councilmembers to defund LAPD`,
    modalUrl: [
      `https://blacklivesmatter.com/defundthepolice/`,
      `https://docs.google.com/document/u/1/d/1qbq7YfJs102qJbGwGO1-wFa0diG16LdGYqiOoQ-hRAI/mobilebasic`,
    ],
  }
}

export default buildEmail
