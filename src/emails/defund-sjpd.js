function buildEmail({ name, state }) {
  return {
    title: "Defund SJPD",
    subject: "DEFUND SJPD",
    body: `Hello,\n\nMy name is ${
      name || "[YOUR NAME]"
    } and I am a resident of ${
      state || "[YOUR CITY, STATE HERE]"
    }. I am writing to demand that funding is reallocated from SJPD to social and public programming that takes place in our communities. It is an outrage that 44% of city funding goes towards the Police Department. The SJPD has seen a rise in overtime pay which, more often than not, is paid out to officers responsible for harassing the unhoused, and Black, Indigenous, people of color.\n\nWe demand that the City Council defund the SJPD. We join the calls of those across the country to #DefundThePolice. We demand a budget that adequately and effectively meets the needs of at-risk San Jose residents during this trying and uncertain time, when livelihoods are on the line. We demand a budget that supports community wellbeing, rather than empowering police.\n\nIt is your duty to represent your constituents. I am urging you to completely revise the San Jose city budget for 2020-2021 fiscal year, and to fund #CareNotCops. Public opinion is with me.\n\nThank you for your time.`,
    args: {
      name: {
        label: "Your name",
        inputType: "text",
      },
      state: { label: "City, State", inputType: "text" },
    },
    directRecipient: `mayoremail@sanjoseca.gov`,
    receivers: [
      {
        name: "David Sykes",
        label: "City Manager",
        autoSelect: true,
        email: "webmaster.manager@sanjoseca.gov",
      },
      {
        name: "Sandra Cranford",
        label: "City Manager Assistant",
        autoSelect: true,
        email: "sandra.cranford@sanjoseca.gov",
      },
      {
        name: "District 1",
        label: "District",
        autoSelect: true,
        email: "District1@sanjoseca.gov",
      },
      {
        name: "District 2",
        label: "District",
        autoSelect: true,
        email: "District2@sanjoseca.gov",
      },
      {
        name: "District 3",
        label: "District",
        autoSelect: true,
        email: "District3@sanjoseca.gov",
      },
      {
        name: "District 4",
        label: "District",
        autoSelect: true,
        email: "District4@sanjoseca.gov",
      },
      {
        name: "District 5",
        label: "District",
        autoSelect: true,
        email: "District5@sanjoseca.gov",
      },
      {
        name: "District 6",
        label: "District",
        autoSelect: true,
        email: "District6@sanjoseca.gov",
      },
      {
        name: "District 7",
        label: "District",
        autoSelect: true,
        email: "District7@sanjoseca.gov",
      },
      {
        name: "District 8",
        label: "District",
        autoSelect: true,
        email: "District8@sanjoseca.gov",
      },
      {
        name: "District 9",
        label: "District",
        autoSelect: true,
        email: "District9@sanjoseca.gov",
      },
      {
        name: "District 10",
        label: "District",
        autoSelect: true,
        email: "District10@sanjoseca.gov",
      },
    ],
    modalBody: `Budget discussions for the 2020-2021 fiscal year will be held on June 16. Use your voice to redirect budget funds into vital community services.`,
    modalTitle: `Email city council to defund San Jose police`,
    modalUrl: ["https://defund12.org/sanjose"],
  }
}

export default buildEmail
