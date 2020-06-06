function buildEmail({ name, state }) {
  return {
    title: "Adopt a People's Budget",
    subject: "Adopt a People's Budget",
    body: `Hello,\n\nMy name is ${
      name || "[YOUR NAME HERE]"
    } and I am a resident of ${
      state || "[YOUR CITY, STATE HERE]"
    }. We are in the midst of a health pandemic with severe economic consequences. Over 50% of Angelenos are unemployed — and we can expect 42% lasting unemployment. Over 50% of this city is renters — and if folx are unemployed, they cannot pay rent. Prior to the pandemic, there were around 60k unhoused folx; after evictions and economic insecurity due to COVID-19 and its fall out, we can expect thousands more. In this context, the Mayor is proposing an increase to LAPD, despite the fact that crime has fallen considerably during the past few months. LAPD has seen a rise in overtime which, more often than not, is paid out to officers harassing unhoused folx, and Black, Indigenous, people of color.\n\nWe are also in the midst of widespread upheaval over the systemic violence — embodied by the LAPD — which murders Black folx. We will no longer accept empty gestures and suggestions of “reform.”\n\nWe need to defund the LAPD. We need to #DefundThePolice. We need a budget that adequately and effectively meets the needs of Angelenos during this trying and uncertain time; and we need a budget that supports communities and supports their wellbeing, not which empowers the force(s) that tear them apart.\n\nAfter City Council cowardly avoided voting or revising your draconian budget proposal, the document is back in your hands. I am urging you to completely revise the LA budget for 2020-2021 and fund #CareNotCops. You need to adopt a People’s Budget.\n\nThank you for your time,\n\n${
      name || "[YOUR NAME HERE]"
    }`,
    args: {
      name: {
        label: "Your name",
        inputType: "text",
      },
      state: {
        label: "City, State",
        inputType: "text",
      },
    },
    directRecipient: `mayor.helpdesk@lacity.org`,
    receivers: [
      {
        label: "CD1",
        name: "Gil Cedillo",
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
    modalTitle: `Email Mayor Garcetti & councilmembers to adopt a People's Budget`,
    modalUrl: [
      `https://peoplesbudgetla.com/`,
      `https://docs.google.com/document/u/1/d/1qbq7YfJs102qJbGwGO1-wFa0diG16LdGYqiOoQ-hRAI/mobilebasic`,
    ],
  }
}

export default buildEmail
