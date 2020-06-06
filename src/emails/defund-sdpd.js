function buildEmail({ city }) {
  return {
    title: "Defund SDPD",
    subject: "San Diego demands a People's Budget",
    body: `I am a resident of District ${
      city || "[YOUR DISTRICT]"
    }. I am writing to demand that the City Council adopts a People’s Budget that prioritizes community wellbeing and redirects funding away from the police.\n\nWe are in the midst of widespread upheaval over the systemic violence of policing. We will no longer accept empty gestures and suggestions of “reform.” We are demanding that our voices be heard now, and that real change be made to the way this city allocates its resources.\n\nSupport for communities in need is necessary now, more than ever. We demand that the City Council defund the SDPD. We join the calls of those across the country to #DefundThePolice. We demand a budget that adequately and effectively meets the needs of at-risk San Diego residents during this trying and uncertain time, when livelihoods are on the line. We demand a budget that supports community wellbeing, rather than empowers the police forces that tear them apart.\n\nAs the City Council, the budget proposal is in your hands. It is your duty to represent your constituents. I am urging you to completely revise the budget for the 2020-2021 fiscal year, and to fund #CareNotCops. You need to adopt a People’s Budget. Public opinion is with me.\n\nThank you for your time.`,
    args: {
      city: { label: "Your district", inputType: "text" },
    },
    directRecipient: `mayoremail@sanjoseca.gov`,
    receivers: [
      {
        name: "Kevin Faulconer",
        label: "City Mayor",
        autoSelect: true,
        email: "kevinfaulconer@sandiego.gov",
      },
      {
        name: "Barbara Bry",
        label: "Council President Pro Tem",
        autoSelect: true,
        email: "barbarabry@sandiego.gov",
      },
      {
        name: "Jennifer Campbell",
        label: "District 2 Council",
        autoSelect: true,
        email: "jennifercampbell@sandiego.gov",
      },
      {
        name: "Christopher Ward",
        label: "District 3 Council",
        autoSelect: true,
        email: "christopherward@sandiego.gov",
      },
      {
        name: "Monica Montgomery",
        label: "District 4 Council",
        autoSelect: true,
        email: "monicamontgomery@sandiego.gov",
      },
      {
        name: "Mark Kersey",
        label: "District 5",
        autoSelect: true,
        email: "markkersey@sandiego.gov",
      },
      {
        name: "Christopher Cate",
        label: "District 6 Council",
        autoSelect: true,
        email: "chriscate@sandiego.gov",
      },
      {
        name: "Scott Sherman",
        label: "District 7 Council",
        autoSelect: true,
        email: "scottsherman@sandiego.gov",
      },
      {
        name: "Vivian Moreno",
        label: "District 8 Council",
        autoSelect: true,
        email: "vivianmoreno@sandiego.gov",
      },
      {
        name: "Georgette Gomez",
        label: "District 9 Council",
        autoSelect: true,
        email: "georgettegomez@sandiego.gov",
      },
    ],
    modalBody: `Email your district councilmember to defund police and allocate resources to communities.`,
    modalTitle: `Email city council to defund San Diego police`,
    modalUrl: ["https://defund12.org/sandiego"],
  }
}

export default buildEmail
