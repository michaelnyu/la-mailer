function buildEmail({ name, state }) {
  return {
    title: "Rescind Jackie Lacey Template",
    subject: "Rescind Jackie Lacey Endorsement",
    body: `Dear Supervisor Kuehl,

      My name is ${name || "[YOUR NAME HERE]"} and I am writing to you from ${
      state || "[STATE/LOCATION]"
    }. I want to thank you for your years of strong leadership in imagining, building, and investing in community-based alternatives to incarceration. You have demonstrated a clear commitment to supporting the values of the Third District, and I applaud the steps you have taken to make Los Angeles a more just, safe, and healthy community. I am now asking that you take another step in the direction of justice, and rescind your endorsement of Jackie Lacey for District Attorney in this upcoming runoff election.
      
      With our eyes turned to George Floyd’s death in Minneapolis, and a national call for transformation, accountability, and racial justice in our law enforcement systems, we are reminded that, here in Los Angeles, we have a District Attorney who has spent her eight years in office ignoring the calls for accountability by those who have had loved ones killed by police.
      
      While Jackie Lacey has been in office, she has firmly refused to prosecute a single LAPD officer for a shooting, despite 601 [people](https://www.theguardian.com/us-news/2018/aug/24/los-angeles-police-violence-shootings-african-american) being killed by law enforcement or dying in custody during DA Lacey’s tenure. She has also stood in direct opposition to voter-led initiatives seeking to reverse the harms of mass incarceration, such as Proposition 47, Proposition 57, and Proposition 64. Furthermore, she has exacerbated the racial disparities in our capital punishment system by securing death sentences for 22 people, all of whom are people of color. Most recently, amid this global pandemic, a leaked memo from DA Lacey’s office revealed her efforts to subvert the statewide zero-dollar bail order that was implemented to mitigate the spread of COVID-19 in jails and in our community. Her focus on loopholes at the expense of decarceration puts our public health at risk.
      
      Thank you for the work you have done so far to promote justice and equity in LA County. I hope that you further that progress by rescinding your endorsement of Jackie Lacey in what is being called the most important District Attorney race in the country.
      
      Sincerely,
      ${name || "[YOUR NAME HERE]"}`,
    args: {
      name: {
        label: "Your name",
        inputType: "text",
      },
      state: { label: "State/location", inputType: "text" },
    },
    directRecipient: `sheila@bos.lacounty.gov`,
    receivers: [],
    modalBody: `On March 13th, Breonna Taylor was killed by Louisville police as they illegally executed a drug raid at the wrong address for a person they had already arrested earlier that day. The LMPD officers responsible for Breonna’s murder are John Mattingly, Brett Hankison, and Myles Cosgrove. To date, they have been placed on administrative leave while the investigation continues. No charges have been brought and no arrests have been made.`,
    modalTitle: `Email officials to bring Louisville police to justice `,
    modalUrl: `https://www.standwithbre.com/`,
  }
}

export default buildEmail
