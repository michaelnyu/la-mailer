function buildEmail({ name, state }) {
  return {
    title: "Defund Fremont PD",
    subject: "Policy Reform in Light of Current Events",
    body: `Police Chief Kimberly Petersen:

My name is ${name || "[YOUR NAME HERE]"} and I am a resident of ${
      state || ["YOUR CITY, STATE HERE"]
    }. First and foremost, I would like to thank you for releasing a public statement regarding George Floyd’s death and making your officers partake in the Fair and Unbiased Policing training this week. However, that is not enough. Racially motivated violence and discrimination continue to persist in the United States. These are not isolated incidents; they are the result of systemic inequalities that are exacerbated by police brutality and lack of reform.

While less than 4 percent of Fremont’s population is Black, they consist of 16% of the people arrested, and 36% of the people killed or seriously injured. You are in a position to put an end to the disproportionate use of police violence against Black residents. This needs to start with placing restrictions on police’s use of force -- including deadly force -- in your own police department.

Use of Force Policy Reform

Based on research conducted by Campaign Zero and their work with legal experts, advocates, and academics with expertise in this area, here are eight major policies that establish meaningful restrictions on police use of force against citizens:

1. Require officers to de-escalate situations, when possible, before using force.
2. Use of force continuum or matrix that defines/limits the types of force and or weapons that can be used to respond to specific types of resistance.
3. Restrict chokeholds and strangleholds (including carotid restraints) to situations where deadly force is authorized or prohibiting them altogether.
4. Require officers to give a verbal warning, when possible, before using deadly force.
5. Prohibit officers from shooting at people in moving vehicles unless the person poses a deadly threat by means other than the vehicle (for example, shooting at people from the vehicle.)
6. Require officers to exhaust all other reasonable alternatives before resorting to using deadly force.
7. Require officers to intervene to stop another officer from using excessive force.
8. Require comprehensive reporting that includes both uses of force and threats of force (for example,
reporting instances when an officer threatens a civilian with a firearm).

Of these policies, the Fremont Police Department only requires officers to warn before shooting and to intervene to stop other officers from using excessive force. Police departments that have implemented more of these policies are less likely to kill people than departments that have not. More specifically speaking, each additional use of force policy mentioned was associated with a 15% reduction in killings for the average police department. The policies with the largest impact are the ones that require comprehensive use of force reporting, ban chokeholds and strangleholds, and require officers to exhaust all other means before using deadly force. The Fremont Police Department has not implemented any of the aforementioned policies.

Some police departments have suggested that these restrictions endanger their officers. However and on the contrary, officers in police departments with more restrictive policies in place are less likely to be killed in the line of duty, less likely to be assaulted, and have a similar likelihood of sustaining an injury during an assault.

Therefore, I beg to question why the Fremont Police Department has not implemented all of the eight policies that would restrict excessive police force and reduce the amount of racially charged incidents in our city.

Accountability and Transparency Policy Reform

In addition to reassessing the Use of Force policies, the Fremont Police Department can hold its officers more accountable and be more transparent with the community it serves. Currently, our officers are held to a lower standard of misconduct than civilians when charged with offenses, allowing them to get away with wrongdoings they otherwise would not be able to. By being permitted to treat the very laws they are to enforce as if they are negligible, police officers are not held accountable for their actions. Current policies lean in favor of police officers and therefore civilians are not always getting the justice they deserve. Within the Fremont Police Department, only 1 in 6 civilian complaints of misconduct ruled in favor of civilians.

Here are policies that would address Accountability and Transparency:
1. Require police officers to provide their name, badge number, and an informative card on how to report complaints to people with which they interact.
2. Establish an independent special investigator or prosecutor office responsible for investigating instances where police have seriously injured or killed civilians. Take for instance Berkeley’s Police Review Commission.
3. Stop giving officers under investigation access to information that civilian suspects do not get. Officers should not be allowed to record or review themselves being interrogated or given access to the recording.
4. Amend policies regarding the disqualification misconduct complaints that are submitted too many days after an incident occurs or if an investigation takes too long to complete.
5. Amend restrictions on how, when, or where police officers can be interrogated. There should not be any limitations on the number of interrogators at one time. Cease to limit the language and incentives used during interrogations. Allow for blood samples to be used in a criminal investigation, especially if the officer tested positive for alcohol or substance abuse.
6. Make the outcomes of police officer investigations a matter of public record.
7. Contribute to the International Association of Directors of Law Enforcement Standards and Trainings’ (IADLEST) National Decertification Index to ensure officers who have been stripped of their police power are not allowed to continue serving in other precincts. Use the database to inform who you hire.
8. Establish reporting requirements for every use of force (except for handcuffing or escorting a person with no resistance, injury, or complaint of injury). Reports should include an explanation of the tactics the officer employed before using force and provide a detailed justification for each use of force. All reports should be analyzed for broader patterns.
9. Collect, synthesize, and publish the following data in accessible formats: Critical incidents; Use of force; Complaints of misconduct by police officers; Stops, searches, and arrests; Profiling or discriminatory policing policies; Hate crimes and hate incidents.

In Fremont, a Black person is 12.9 times as likely to have deadly force used on them than a white person. Does the city of Fremont want to be contributing to the nationwide injustice against Black people in America or do we want to be setting an example in department reformation? I commend you on your willingness to take short-term action but it is time we implement policies that will have a lasting impact.

Which side of history do you want to be on? As the Chief of the Fremont Police Department, you are accountable for those you lead and therefore the choice is yours.

Sincerely,
${name || "[YOUR NAME HERE]"}

---------------------

I invite you to visit the websites where I gathered data and policy recommendations to further inform your course of action:

“California Police Scorecard.” CA Police Scorecard, Campaign Zero, policescorecard.org/?city=fremont.

“New Era of Public Safety: A Guide to Fair, Safe, and Effective Community Policing.” The Leadership Conference Education Fund, The Leadership Conference Education Fund, 28 Mar. 2019, civilrights.org/wp-content/uploads/Toolkit.pdf.`,
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
    directRecipient: `policechief@fremont.gov `,
    receivers: [],
    modalBody: ``,
    modalTitle: `Email Fremont Police Chief to defund Fremont PD`,
    modalUrl: [
      `https://docs.google.com/document/d/1pQBIrV9Jz9VqlJNNcnZcYRWfaxgjT8gIRX20nTP0q50/edit`,
    ],
  }
}

export default buildEmail
