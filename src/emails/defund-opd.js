function buildEmail({ name, city }) {
  return {
    title: "Defund OPD",
    subject: "DEFUND OPD",
    body: `Hello,\n
      My name is ${name || "[YOUR NAME HERE]"} and I am a resident of ${
      city || "[CITY]"
    }. This year, city council officials are expecting a budget deficit of $122 million due to Covid-19. The Oakland Police Department makes up 44% of the city's budget, more than the budgets of Human Services, Affordable Housing, and Race and Equity COMBINED. In light of recent police violence, as well as documented cases of OPD abuse and racial profiling, I urge you to advocate for a mid-budget review that reduces funding to OPD. I would like to redirect funding away from OPD and into health, housing, education, and social services that support vulnerable residents and residents of color, especially lower-income black residents. I would also urge you in your future voting patterns to advocate for an eventual abolition of the Oakland Police Department in favor of investing into non-violent social services and investing back into minority communities.\n\nThank you for your time. `,
    args: {
      name: {
        label: "Your name",
        inputType: "text",
      },
      city: { label: "City", inputType: "text" },
    },
    directRecipient: `officeofthemayor@oaklandnet.com`,
    receivers: [
      {
        label: "Councilmember at Large",
        name: "Rebecca Kaplan",
        autoSelect: true,
        email: "atlarge@oaklandca.gov",
      },
      {
        label: "Councilmember",
        name: "Daniel Kalb",
        autoSelect: true,
        email: "dkalb@oaklandca.gov",
      },
      {
        label: "Councilmember",
        name: "Lia Azul Salaverry",
        autoSelect: true,
        email: "lsalaverry@oaklandca.gov",
      },
      {
        label: "Councilmember",
        name: "Nikki Fortunato Bas",
        autoSelect: true,
        email: "nfbas@oaklandca.gov",
      },
      {
        label: "Councilmember",
        name: "Pamela Drake",
        autoSelect: true,
        email: "pdrake@oaklandca.gov",
      },
      {
        label: "Councilmember",
        name: "Lynette Gibson McElhaney",
        autoSelect: true,
        email: "LMcElhaney@oaklandca.gov",
      },
      {
        label: "District",
        name: "District 4 Office",
        autoSelect: true,
        email: "district4@oaklandca.gov",
      },
      {
        label: "District 5",
        name: "Noel Gallo",
        autoSelect: true,
        email: "Ngallo@oaklandca.gov",
      },
      {
        label: "District",
        name: "District 6 Office",
        autoSelect: true,
        email: "District6@oaklandca.gov",
      },
      {
        label: "Councilmember",
        name: "Larry Reid",
        autoSelect: true,
        email: "lreid@oaklandnet.com",
      },
    ],
    modalBody: `Oakland Police Department makes up 44% of the city's budget. More taxpayer funds are allocated to the police than to all programs related to human services, race & equity and affordable housing combined (via oaklandca.gov/budget). Budget discussions for the 2020-2021 fiscal year continue at the next City Council meeting on Jun 16. Use your voice to redirect budget funds into vital community services.`,
    modalTitle: `Email city council to defund Oakland police`,
    modalUrl: [`https://tinyurl.com/defundoakpd`],
  }
}

export default buildEmail
