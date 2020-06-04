function buildEmail({ name, state }) {
  return {
    title: "Justice for Breonna Taylor Template",
    subject: "Justice for the murder of Breonna Taylor ",
    body: `Hello,\n\n My name is ${
      name || "[YOUR NAME HERE]"
    }. I am a resident of ${
      state || "[STATE]"
    } and I am emailing today to demand accountability for the racist murder of Breonna Taylor.\n\nI demand that charges be pressed against all officers involved in this heinous killing, including Sgt. Jonathan Mattingly and officers Brett Hankison and Myles Cosgrove. They should all be fired, and should be charged and prosecuted to the fullest extent of the law for murder.\n\nBreonna Taylor was an ER technician, working tirelessly to help others during this global pandemic. She should be alive today. She would be alive today if it were not for the gross abuse of power and white supremacy exhibited by the Louisville Police Department. All officers involved must face consequences for this murder in order to provide her family with justice and to deter law enforcement from committing racist and brutal acts of violence against communities of color.\n\nIn addition, I demand that we provide more support for community efforts and organizations that work to prevent police brutality and violence.\n\n Sincerely,\n\n${
      name || "[YOUR NAME HERE]"
    }`,
    args: {
      name: {
        label: "Your name",
        inputType: "text",
      },
      state: { label: "State/location", inputType: "text" },
    },
    directRecipient: `meredythm@louisvilleco.gov`,
    receivers: [
      {
        label: "Louisville Commonwealth Attorney",
        name: "Tom Wine",
        email: "tbwine@louisvilleprosecutor.com",
        autoSelect: true,
      },
      {
        label: "Asst. Chief of Police",
        name: "Robert Schroeder",
        email: "robert.schroeder@louisvilleky.gov",
        autoSelect: true,
      },
    ],
    modalBody: `On March 13th, Breonna Taylor was killed by Louisville police as they illegally executed a drug raid at the wrong address for a person they had already arrested earlier that day. The LMPD officers responsible for Breonna’s murder are John Mattingly, Brett Hankison, and Myles Cosgrove. To date, they have been placed on administrative leave while the investigation continues. No charges have been brought and no arrests have been made.`,
    modalTitle: `Email officials to bring Louisville police to justice `,
    modalUrl: [`https://www.standwithbre.com/`],
  }
}

export default buildEmail
