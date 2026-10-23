<script setup lang="ts">
import { usePageMeta } from "@/lib/meta.ts";

usePageMeta({
  title: "Umoov, UX & UI Design",
  description: "Umoov makes exercise easy, whatever your schedule or fitness level.  Discover manageable home workouts and take on daily challenges to stay motivated…",
});
</script>

<template>
  <CaseHero eyebrow="UX & UI design project" title="Umoov" image="/images/umoov-ux-ui-design/image-2-new.webp" image-square>
    <p>Umoov makes exercise easy, whatever your schedule or fitness level. Discover manageable home workouts and take on daily challenges to stay motivated during the working week. </p>
    <p>Exercise is something anyone can pick up, find something they love, and fit it into their daily schedule. Our aim is to get people <strong>healthy</strong> and <strong>happy</strong> at home.</p>
    <p>This project was completed as part of my UX and UI course study with CareerFoundry.</p>
  </CaseHero>

  <ProjectFacts
    :items="[
      { label: 'Project Brief', value: 'Design a web app that encourages people to do more exercise' },
      { label: 'My Role', value: 'UX & UI Design, User Research, Information Architecture, Prototyping' },
      { label: 'Tools', value: 'Adobe XD, Illustrator, Indesign' },
      { label: 'Duration', value: 'Completed outside of work hours over 7 weeks. October - December 2020' },
    ]"
  />

  <Section narrow>
    <Prose>
      <h3>The process</h3>
    </Prose>
    <Accordion
      class="mt-6"
      :items="[
        { title: '1. Define', body: '<p><strong>Create user flows</strong> to define the key paths a user must take to complete tasks. <strong>Explore the core functionalities </strong>that will solve user problems. <strong>Develop the tone</strong> of the project using moodboards.</p>' },
        { title: '2. Explore', body: '<p><strong>Create low, mid and high fidelity wireframes</strong> to create the layout. Utilise low-fidelity wireframes to make quick iterations and explore ideas before refining the design in mid and high fidelity. <strong>Develop a brand identity </strong>that aligns with the user.</p>' },
        { title: '3. Create', body: '<p><strong>Refine the direction of the UI</strong> by creating a high-fidelity prototype and then communicate all design elements in a style guide.</p>' },
      ]"
    />
  </Section>

  <Section tone="muted">
    <v-row>
      <v-col cols="12" md="6">
        <Panel>
          <h3>The problem</h3>
          <p>People with busy work schedules struggle to find the <strong>time</strong> and <strong>motivation</strong> to workout regularly. Finding exercise routines for the right level can be difficult, especially when wanting to try something new.</p>
        </Panel>
      </v-col>
      <v-col cols="12" md="6">
        <Panel>
          <h3>The solution</h3>
          <p>Create a web-app that <strong>motivates</strong> people into an exercise routine that suits their level, schedule, and interests. Users want to <strong>learn</strong> how exercises are done and <strong>track progress </strong>with achievable goals.</p>
        </Panel>
      </v-col>
    </v-row>
  </Section>

  <Section>
    <v-row align="center">
      <v-col cols="12" md="6" class="pe-md-10">
        <Prose>
          <h3>Information architecture</h3>
          <p>I started by studying the brief along with the user stories and problems. I also mapped out a <strong>user flow </strong>for the project. I focused on the two key functionalities, finding the simplest way a user can complete their task.</p>
          <p><strong>How do these features solve the users problems?</strong></p>
          <p>Core takeaways from the user stories:</p>
          <ol>
            <li>
              <p><strong>Users want to be motivated</strong> to workout every day</p>
            </li>
            <li>
              <p><strong>Users want to be rewarded</strong> for their efforts so they stay engaged</p>
            </li>
            <li>
              <p><strong>Users would like to learn</strong> how to do exercises correctly</p>
            </li>
          </ol>
          <p>I decided <strong>gamification</strong> was a smart direction to take the project in. The core functionalities, therefore, allow users to discover workout videos, join workout challenges and gain daily achievements for hitting their goals. </p>
        </Prose>
      </v-col>
      <v-col cols="12" md="6">
        <Figure src="/images/umoov-ux-ui-design/user-flows.webp" square />
      </v-col>
    </v-row>
  </Section>

  <Section tone="muted">
    <v-row align="center">
      <v-col cols="12" md="6" order-md="2" class="ps-md-10">
        <Prose>
          <h3>Mood board</h3>
          <p>I explored <strong>colour</strong>, <strong>shape</strong>, <strong>images</strong> and <strong>typography</strong> in a mood board to establish the tone of the project.</p>
          <p>My aim was to show dynamic movement. It was important not to overwhelm users with busy or intimidating colours or imagery so I used negative space around each element to give the design room to breathe. I then chose a vibrant pink to inject energy into the design. </p>
          <p>The reoccurring curved rectangle shape contributes to a feeling of movement as the sweeping angle moves round to the sharp corner. </p>
        </Prose>
      </v-col>
      <v-col cols="12" md="6" order-md="1">
        <Figure src="/images/umoov-ux-ui-design/mood-board.webp" />
      </v-col>
    </v-row>
  </Section>

  <Section>
    <v-row align="center">
      <v-col cols="12" md="5" class="pe-md-10">
        <Prose>
          <h3>Development</h3>
          <p>Following a mobile-first approach, I mapped out my ideas in low-fidelity wireframes. This process allowed me to explore creative ideas quickly while making on-the-go iterations. I created a low-fidelity prototype to test the basic layout and flow. </p>
          <p>After mapping out the low-fidelity wireframes into the user flow I upgraded each screen to mid-fidelity. From here, I could build in typography, colour, images and iconography. </p>
        </Prose>
      </v-col>
      <v-col cols="12" md="7" class="d-flex flex-column ga-8">
        <Figure src="/images/umoov-ux-ui-design/challenges-progression.webp" square>
          <p>Challenges screen progression from low to high fidelity</p>
        </Figure>
        <Figure src="/images/umoov-ux-ui-design/workout-list-progression.webp" square>
          <p>Workouts screen progression from low to high fidelity</p>
        </Figure>
      </v-col>
    </v-row>
  </Section>

  <Section tone="muted">
    <v-row align="center">
      <v-col cols="12" md="7" order-md="2" class="ps-md-10">
        <Prose>
          <h3>Creating the brand</h3>
          <p>Umoov needed an identity that aligned with the content - simple but dynamic. The brand logo mark is a combination of the letter U and two out stretched arms. </p>
          <p><strong>Achievement Badges:</strong></p>
          <p>The achievement badges were designed to develop the gamification of the project. They’re also effective in keeping the app fun and light-hearted as users take on exercise challenges.</p>
        </Prose>
        <Figure src="/images/umoov-ux-ui-design/all-badges.webp" square class="mt-6" />
      </v-col>
      <v-col cols="12" md="5" order-md="1">
        <Figure src="/images/umoov-ux-ui-design/logos-examples.webp" :max-width="420" square />
      </v-col>
    </v-row>
  </Section>

  <Section>
    <v-row>
      <v-col cols="12" md="6" class="d-flex flex-column ga-6">
        <Prose>
          <h3>Style guide</h3>
          <p>I then created a style guide for the project. This includes guidelines for colour, typography, iconography, logo, imagery and UI elements.</p>
        </Prose>
        <Figure src="/images/umoov-ux-ui-design/style-guide-typography.webp" square />
      </v-col>
      <v-col cols="12" md="6" class="d-flex flex-column ga-6">
        <Figure src="/images/umoov-ux-ui-design/style-guide-colours.webp" :aspect="52.43" square />
        <Figure src="/images/umoov-ux-ui-design/style-guide-logo.webp" square />
      </v-col>
    </v-row>
  </Section>

  <Section tone="inverse">
    <Prose>
      <h3>Final screens &amp; mock ups</h3>
    </Prose>
    <v-row align="center" class="mt-6">
      <v-col cols="12" md="6">
        <Figure src="/images/umoov-ux-ui-design/image-7.webp" square />
      </v-col>
      <v-col cols="12" md="6">
        <Figure src="/images/umoov-ux-ui-design/all-screens-min.webp" :aspect="98.18" square />
      </v-col>
    </v-row>
    <v-row justify="center" class="mt-6">
      <v-col cols="6" md="3">
        <Figure src="/images/umoov-ux-ui-design/challenges-walkthrough.webp" :max-width="256" square sizes="256px" />
      </v-col>
      <v-col cols="6" md="3">
        <Figure src="/images/umoov-ux-ui-design/workout-walkthrough-video.webp" :max-width="256" square sizes="256px" />
      </v-col>
    </v-row>
  </Section>

  <NextProject />
</template>
