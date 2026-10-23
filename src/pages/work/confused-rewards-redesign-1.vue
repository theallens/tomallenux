<script setup lang="ts">
import { usePageMeta } from "@/lib/meta.ts";

usePageMeta({
  title: "Building peace of mind: Designing the 'Reminders' feature for Confused.com",
  description: "Forget calendar reminders and sticky notes! Reminders are the automated way to know when your insurance is coming up for renewal—and statistically,…",
});
</script>

<template>
  <CaseHero
    title="Building Peace of Mind: Designing the 'Reminders' Feature for Confused.com"
    image="/images/confused-rewards-redesign-1/group-13120-1.webp"
    image-square
  >
    <p class="text-large">Forget calendar reminders and sticky notes! Reminders are the automated way to know when your insurance is coming up for renewal—and statistically, when you'll find the cheapest prices. <br /><br />This 6-month project explores how solving user-needs lead to an increase in retention by capturing key data points.</p>
  </CaseHero>

  <ProjectFacts
    :items="[
      { label: 'Project type', value: 'As part of my role as a Senior Product Designer at Confused.com.' },
      { label: 'My role', value: 'Product designer. Responsible for the end-to-end design, research, UX, UI and content.' },
      { label: 'Tools', value: 'Figma, Miro, Usertesting.com' },
      { label: 'Duration', value: 'Project completed between June 2024- December 2024' },
    ]"
  />

  <Section>
    <Prose>
      <h2>Project overview</h2>
    </Prose>
    <v-row class="mt-2">
      <v-col cols="12" md="6" class="pe-md-10">
        <Prose>
          <h4>The challenge:</h4>
          <p class="text-large">At Confused.com, we knew our existing reminder system had a problem. We would use a user’s renewal date to send them email reminders before their insurance was due, but it operated behind the scenes, leaving users powerless. Users couldn't edit incorrect dates, stop unwanted reminders, or knowingly create reminders for other products.<br /><br />But this wasn't just a user frustration; it was a missed opportunity. Renewal dates are gold for increasing retention &amp; product density, and we were leaving valuable data on the table.</p>
        </Prose>
      </v-col>
      <v-col cols="12" md="6">
        <Prose>
          <h4>My mission:</h4>
          <p class="text-large">Transform this passive system into an empowering tool. Design a new feature that would allow users to view, edit, and create reminders effortlessly, while also encouraging them to share more renewal dates for other household products. <br /><br />This meant aligning key channels (eCRM, app, portal), exploring new reminder methods, boosting retention, and driving product density.</p>
        </Prose>
      </v-col>
    </v-row>
  </Section>

  <Section tone="muted">
    <Prose>
      <h2><span class="highlight">Discovery phase</span></h2>
      <p class="text-large">Before starting any design work, we undertook a thorough discovery phase to define the problem. This comprised of 3 elements:</p>
    </Prose>
    <v-row class="mt-4">
      <v-col cols="12" md="6">
        <Panel>
          <h4><strong>1. Technical discovery</strong></h4>
          <p class="text-large">The Product Owner and I led several technical discovery sessions. Bringing together technical leads from different teams to highlight any potential hurdles. This involved:</p>
          <ul>
            <li>
              <p class="text-large"><strong>Scoping and integration</strong>: We mapped the integration points between our eCRM platform (Braze), customer app, and customer account. This ensured we could start work to design a solution with key user-touch points sharing data.</p>
            </li>
            <li>
              <p class="text-large"><strong>Data analysis</strong>: We uncovered inconsistencies in our existing data, particularly with renewal dates captured through marketing campaigns.</p>
            </li>
          </ul>
        </Panel>
      </v-col>
      <v-col cols="12" md="6">
        <Panel>
          <h4><strong>2. Analysis of customer support feedback</strong></h4>
          <p class="text-large">As we had an existing feature, I explored customer feedback to understand the limitations of our current solution:</p>
          <ul>
            <li>
              <p class="text-large"><strong>Frustration with unstoppable reminders</strong>: Users were deeply frustrated by their inability to stop reminders, particularly when their circumstances changed. <span class="highlight"><span class="sqsrte-text-color--darkAccent"><strong>"We have not owned this car for nearly 3 years!!" </strong></span></span></p>
            </li>
            <li>
              <p class="text-large"><strong>Confusion with uneditable dates</strong>: Users were confused and frustrated when they couldn't correct inaccurate renewal dates.<br /><span class="highlight"><strong>"My house insurance is in March, kindly unsubscribe me from your list." </strong></span></p>
            </li>
          </ul>
        </Panel>
      </v-col>
      <v-col cols="12">
        <Panel>
          <h4><strong>3. Customer research &amp; interviews: Uncovering core user needs</strong></h4>
          <p class="text-large">I led 10 user interview sessions through UserTesting.com to learn more. I focused on:</p>
          <v-row>
            <v-col cols="12" md="6" class="pe-md-8">
              <ul>
                <li>
                  <p class="text-large"><strong>Current experiences</strong>: I explored users' existing processes for managing insurance renewals to highlight any point of frustration. This revealed a reliance on reminders as a trigger for action: <em>"I don’t really remember until the email comes through".</em></p>
                </li>
                <li>
                  <p class="text-large"><strong>Feature opportunity</strong>: I asked users what features would make a reminder system most valuable, revealing their desire for control &amp; personalisation.</p>
                </li>
              </ul>
            </v-col>
            <v-col cols="12" md="6">
              <p class="text-large">Key problems &amp; opportunities:</p>
              <ul>
                <li>
                  <p class="text-large"><strong>Lack of trust in insurer prices</strong>: Participants did not trust in the renewal prices offered by their existing insurers, presenting an opportunity for Confused.com to position itself as a trusted, independent platform.</p>
                </li>
                <li>
                  <p class="text-large"><strong>Desire to speed up comparison</strong>: Users wanted reminders to help them compare new prices, rather than do it all for them.</p>
                </li>
                <li>
                  <p class="text-large"><strong>Misconceptions about insurance prices</strong>: Participants were generally unaware of the statistically cheapest time to shop for insurance, often guessing it was around 30 days before renewal. This insight presented a key selling point for our feature as we could notify them at the ‘cheapest’ time to find insurance.</p>
                </li>
                <li>
                  <p class="text-large"><strong>Everything in one place</strong>: Users had a desire to manage everything in one place, with a clear view of what tasks they have coming up. </p>
                </li>
              </ul>
            </v-col>
          </v-row>
        </Panel>
      </v-col>
    </v-row>
  </Section>

  <Section>
    <v-row align="center">
      <v-col cols="12" md="6" class="pe-md-10">
        <Prose>
          <h2>Exploring solutions</h2>
          <p class="text-large">Armed with these insights, I moved onto design. </p>
          <p class="text-large">I started by transforming key problems into "How Might We..." questions, this meant I could focus on the problems rather than jumping to solutions. This highlighted the key area to start designing, the customer account dashboard.</p>
          <p class="text-large">Then, I explored four initial UI concepts through pencil sketches, refining two ideas into mid-fidelity designs.</p>
          <p class="text-large">From here I could flesh out more detailed user flows, focusing on key tasks, such as stopping &amp; editing reminders. </p>
        </Prose>
      </v-col>
      <v-col cols="12" md="6" class="d-flex flex-column ga-6">
        <Figure src="/images/confused-rewards-redesign-1/group-13122.webp" square />
        <Figure src="/images/confused-rewards-redesign-1/group-13121.webp" square />
      </v-col>
    </v-row>
  </Section>

  <Section tone="muted">
    <Prose>
      <h2>Aligning product teams and data</h2>
    </Prose>
    <v-row class="mt-2">
      <v-col cols="12" md="6" class="pe-md-10">
        <Prose>
          <p class="text-large">Once we had a clearer understanding of the user flow, we aligned with product teams to define a robust approach for managing renewal dates in the backend. </p>
          <p class="text-large">This included discussions around how potential design changes affected key touchpoints (emails, app, and customer portal) and allowed us to highlight technical constraints.</p>
        </Prose>
      </v-col>
      <v-col cols="12" md="6">
        <Prose>
          <p class="text-large">We ran collaborative sessions using wireframes to map out solutions to key challenges:</p>
          <ul>
            <li>
              <p class="text-large">Are there any technical issues with implementing these wireframes?</p>
            </li>
            <li>
              <p class="text-large">How should conflicting existing dates be handled?</p>
            </li>
            <li>
              <p class="text-large">How are renewal dates updated as new data is received?</p>
            </li>
            <li>
              <p class="text-large">Where should renewal dates be stored?</p>
            </li>
            <li>
              <p class="text-large">What’s needed to support this consistently in emails?</p>
            </li>
          </ul>
          <p class="text-large">Working cross-functionally helped us align quickly and begin the backend work needed to deliver a scalable solution.</p>
        </Prose>
      </v-col>
    </v-row>
  </Section>

  <Section>
    <v-row align="center">
      <v-col cols="12" md="7" order-md="2" class="ps-md-10">
        <Prose>
          <h2>Validation: Putting the design to the test</h2>
          <p class="text-large">I then led ten remote usability tests using UserTesting.com. I set four tasks for participants to complete as they navigated through the prototype I’d created. This identified areas for improvement:</p>
          <ul>
            <li>
              <p class="text-large"><strong>Communicating benefits</strong>: Users needed clearer messaging about the feature's value upfront. Participants would only see the value in creating a reminders after they’d set one up. "The thought of having all of my insurance quotes, reminders, dates, information in one place is actually quite appealing," one participant noted, highlighting the need for stronger upfront communication.</p>
            </li>
            <li>
              <p class="text-large"><strong>Providing context</strong>: During reminder creation, users wanted more information about why they needed to enter certain pieces of information – revealing the need to communicate why this benefits them.</p>
            </li>
            <li>
              <p class="text-large"><strong>Expanding reminder channels</strong>: Participants wanted multiple reminders, across different channels. Emails weren’t enough. This led us to integrate insurance reminders into SMS and push notifications.</p>
            </li>
          </ul>
          <p class="text-large">These insights allowed me to return to the designs and make a host of changes before handing the designs over to the developers.</p>
        </Prose>
      </v-col>
      <v-col cols="12" md="5" order-md="1" class="d-flex flex-column ga-6">
        <Figure src="/images/confused-rewards-redesign-1/screenshot-2025-02-26-at-15-24-23-1.webp" shadow />
        <Figure src="/images/confused-rewards-redesign-1/screenshot-2025-02-26-at-15-23-48-1.webp" shadow />
      </v-col>
    </v-row>
  </Section>

  <Section tone="muted">
    <Prose>
      <h2>Final designs</h2>
    </Prose>
    <v-row class="mt-2">
      <v-col cols="12" md="9">
        <Figure src="/images/confused-rewards-redesign-1/group-13118.webp" square sizes="(max-width: 959px) 100vw, 900px" />
        <v-row class="mt-4">
          <v-col cols="4">
            <Figure src="/images/confused-rewards-redesign-1/group-13112.webp" square sizes="(max-width: 959px) 33vw, 300px" />
          </v-col>
          <v-col cols="4">
            <Figure src="/images/confused-rewards-redesign-1/group-13113.webp" square sizes="(max-width: 959px) 33vw, 300px" />
          </v-col>
          <v-col cols="4">
            <Figure src="/images/confused-rewards-redesign-1/group-13117.webp" square sizes="(max-width: 959px) 33vw, 300px" />
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" md="3">
        <Figure src="/images/confused-rewards-redesign-1/dashboard-desktop-quotes-reminders-mobile-14.webp" :max-width="300" square sizes="(max-width: 959px) 100vw, 300px" />
      </v-col>
    </v-row>
  </Section>

  <Section tone="inverse">
    <Prose>
      <h2>Results</h2>
    </Prose>
    <v-row class="mt-2">
      <v-col cols="12" md="4">
        <Panel tone="dark">
          <h4><span class="text-white">Product Density: </span></h4>
          <h4><span class="text-white">1 in every 3 users that create a reminder go on to add dates for other products, significantly expanding our renewal date database.</span></h4>
        </Panel>
      </v-col>
      <v-col cols="12" md="4">
        <Panel tone="dark">
          <h4><span class="text-white">Retention: </span></h4>
          <h4><span class="text-white">The new feature now manages over 600,000 individual insurance renewal dates, allowing Confused.com to contact each customer during the buying cycle.</span></h4>
        </Panel>
      </v-col>
      <v-col cols="12" md="4">
        <Panel tone="dark">
          <h4><span class="text-white">Platform Consistency: </span></h4>
          <h4><span class="text-white">The feature was seamlessly integrated into the Confused.com app. With systems in place to align renewal dates as we received more accurate data.</span></h4>
        </Panel>
      </v-col>
    </v-row>
  </Section>

  <NextProject />
</template>
