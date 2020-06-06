function buildEmail({ name, state }) {
  return {
    title: "Rescind Jackie Lacey",
    subject: "Rescind Jackie Lacey Endorsement",
    body: `Dear Supervisor Kuehl,\n\nMy name is ${
      name || "[YOUR NAME HERE]"
    } and I am writing to you from ${
      state || "[STATE/LOCATION]"
    }. I want to thank you for your years of strong leadership in imagining, building, and investing in community-based alternatives to incarceration. You have demonstrated a clear commitment to supporting the values of the Third District, and I applaud the steps you have taken to make Los Angeles a more just, safe, and healthy community. I am now asking that you take another step in the direction of justice, and rescind your endorsement of Jackie Lacey for District Attorney in this upcoming runoff election.\n\nWith our eyes turned to George Floyd’s death in Minneapolis, and a national call for transformation, accountability, and racial justice in our law enforcement systems, we are reminded that, here in Los Angeles, we have a District Attorney who has spent her eight years in office ignoring the calls for accountability by those who have had loved ones killed by police.\n\nWhile Jackie Lacey has been in office, she has firmly refused to prosecute a single LAPD officer for a shooting, despite 601 people (https://www.theguardian.com/us-news/2018/aug/24/los-angeles-police-violence-shootings-african-american) being killed by law enforcement or dying in custody during DA Lacey’s tenure. She has also stood in direct opposition to voter-led initiatives seeking to reverse the harms of mass incarceration, such as Proposition 47, Proposition 57, and Proposition 64. Furthermore, she has exacerbated the racial disparities in our capital punishment system by securing death sentences for 22 people, all of whom are people of color. Most recently, amid this global pandemic, a leaked memo from DA Lacey’s office revealed her efforts to subvert the statewide zero-dollar bail order that was implemented to mitigate the spread of COVID-19 in jails and in our community. Her focus on loopholes at the expense of decarceration puts our public health at risk.\n\nThank you for the work you have done so far to promote justice and equity in LA County. I hope that you further that progress by rescinding your endorsement of Jackie Lacey in what is being called the most important District Attorney race in the country.\n\nSincerely,\n\n${
      name || "[YOUR NAME HERE]"
    }`,
    args: {
      name: {
        label: "Your name",
        inputType: "text",
      },
      state: { label: "State/city", inputType: "text" },
    },
    directRecipient: `sheila@bos.lacounty.gov`,
    receivers: [],
    modalBody: `BlackLivesMatter Los Angeles has demanded the immediate firing of Jackie Lacy.  Jackie Lacey has “served” as District Attorney since December 2012. Since that time, more than 600 people have been killed by law enforcement in Los Angeles county between sheriff’s deputies, LAPD and ones from cities around the county. \nIf that wasn’t enough, Lacey has fostered an environment where sexual harassment was normalized and protected. If this wasn’t costing real taxpayer dollars, that might be a different thing but the combination of neglect and creating a hostile work environment does not serve the interests of justice. Her behavior indicates that she doesn’t care who watches the watchmen.\nWithout Albert Ramon Dorsey or Grechario Mack or Wakiesha Wilson or Brendon Glenn or the scores of others robbed of their lives under her indifferent gaze, there would be cause for Jackie Lacey to be ousted from her position. With those names called out by grieving families, knowing justice has not been served, the evidence is overwhelming and her guilt is unmistakable.`,
    modalTitle: `Email LA County Supervisor Sheila Kuehl to Rescind Jackie Lacey Endorsement`,
    modalUrl: [
      `https://www.blmla.org/jackie-lacey-must-go`,
      `https://docs.google.com/document/d/1uyVPCibl4HAqOQbJMoRyg1CZA3pVYwvsDHVPqWVThbw/edit`,
    ],
  }
}

export default buildEmail
