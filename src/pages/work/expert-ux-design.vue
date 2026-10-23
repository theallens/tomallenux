<script setup lang="ts">
import { usePageMeta } from "@/lib/meta.ts";

usePageMeta({
  title: "Expert, UX Design",
  description: "Expert is a web app that allows creatives to chat with an expert in their field. Amateur or professional creatives can speak with experts for…",
});
</script>

<template>
  <CaseHero title="Expert." image="/images/expert-ux-design/expert-thumbnail-for-portfolio.webp">
    <p>Expert is a web app that allows creatives to chat with an expert in their field. Amateur or professional creatives can speak with experts for mentorship and advice. </p>
    <p>Expert’s goal is to give artists, designers, illustrators and videographers a simple way to connect with an expert in their creative field.</p>
  </CaseHero>

  <ProjectFacts
    :items="[
      { label: 'Project type', value: 'Career Foundry course project' },
      { label: 'My role', value: 'User Research, UX Design, UI Design.' },
      { label: 'Tools', value: 'Adobe XD' },
      { label: 'Duration', value: 'Completed outside of work hours from Feb - Sept 2020' },
    ]"
  />

  <Section narrow>
    <Prose>
      <h2>The process</h2>
      <p>The design process for this project was borken down into 6 sections:</p>
    </Prose>
    <Accordion
      class="mt-6"
      :items="[
        { title: '1. Research', body: '<p>The research section included a competitor analysis, user surveys and user interviews. I wanted to understand the problem and learn about the users.</p>' },
        { title: '2. Define', body: '<p>Using my research, I defined the problem, create user stories, user personas and user journeys to confirm who the user is and how I can best solve their problem.</p>' },
        { title: '3. Ideate', body: '<p>I then created user flows and used information architecture to create sitemaps.</p>' },
        { title: '4. Wireframes & prototypes', body: '<p>After analysing the data, I created pen and paper wireframes before moving on to higher quality designs in Adobe XD. I also created prototypes ready for testing.</p>' },
        { title: '5. User testing', body: '<p>I ran usability and preference testing sessions with numerous participants. This phase also involved analysing and reporting on the resulting data.</p>' },
        { title: '6. Design iteration', body: '<p>With the data from the user testing, I started iterated on the designs I had created and tested.</p>' },
      ]"
    />
  </Section>

  <Section tone="muted">
    <v-row>
      <v-col cols="12" md="6">
        <Panel>
          <h3>The problem</h3>
          <p>Users need a way to communicate with experts in a wide range of professional fields because they want specific questions answered. </p>
          <p>I’ll know this to be true when I see users using Expert to communicate with professional creatives to help them solve specific problems.</p>
        </Panel>
      </v-col>
      <v-col cols="12" md="6">
        <Panel>
          <h3>The solution</h3>
          <p>I believe that creating Expert will allow users to discover and communicate with experts to help solve their creative problems. </p>
          <p>Users can contact experts via message or video calls. Expert will encourage collaboration amongst a community of like-minded individuals.</p>
        </Panel>
      </v-col>
    </v-row>
  </Section>

  <Section>
    <Prose>
      <h3>&nbsp;1. Research</h3>
      <ul>
        <li>
          <p class="text-large">Competitor analysis</p>
        </li>
      </ul>
      <ul>
        <li>
          <p class="text-large">User interviews</p>
        </li>
      </ul>
    </Prose>
    <v-divider class="my-8" />
    <v-row align="center">
      <v-col cols="12" md="6" class="pe-md-10">
        <Prose>
          <h4>Competitor analysis</h4>
          <p>I completed a <strong>SWOT analysis</strong> of <em>Just Answer</em> and <em>Clarity</em>. In highlighting In the strengths, weaknesses, opportunities and threats of competitors I could better understand how to approach the problem. </p>
          <p>Existing websites all hosted experts from a specialism, mostly business or medicine. There isn’t a site that specialises in creative or artistic advice. Where these sites were particularly successful was in their <strong>speed of response</strong>.</p>
          <p>Competitive analysis provided inspiration for my own product but also highlighted elements I wanted to avoid and improve upon. </p>
        </Prose>
      </v-col>
      <v-col cols="12" md="6">
        <Figure src="/images/expert-ux-design/swot-analysis-clarity.webp" :max-width="480" square />
      </v-col>
    </v-row>
    <Prose class="mt-12">
      <h4>User interviews</h4>
    </Prose>
    <v-row class="mt-2">
      <v-col cols="12" md="6" class="pe-md-10">
        <Prose>
          <p><strong>Research Goals:</strong></p>
          <ul>
            <li>
              <p><strong>Discover the problems</strong> creatives find when they’re working</p>
            </li>
            <li>
              <p><strong>Understand how our users seek out advice&nbsp;</strong></p>
            </li>
            <li>
              <p><strong>Learn about our user’s experience</strong> using similar products</p>
            </li>
            <li>
              <p><strong>Discover how users feel </strong>about communicating online</p>
            </li>
          </ul>
        </Prose>
      </v-col>
      <v-col cols="12" md="6">
        <Prose>
          <p><strong>Conclusions:</strong></p>
          <ul>
            <li>
              <p><strong>The participants need professional advice</strong> and it isn’t always readily available</p>
            </li>
            <li>
              <p><strong>All participants would look within their workplace</strong> (or university) for advice</p>
            </li>
            <li>
              <p><strong>YouTube and Instagram are close competitors</strong> - we can&nbsp;take inspiration from these platforms</p>
            </li>
            <li>
              <p><strong>Video calling is preferred</strong> but offering a variety is key</p>
            </li>
            <li>
              <p><strong>Social engagement enhances enjoyment</strong> of creative subjects</p>
            </li>
            <li>
              <p><strong>Viewing an expert’s work would create trust</strong></p>
            </li>
          </ul>
        </Prose>
      </v-col>
    </v-row>
  </Section>

  <Section tone="muted">
    <Prose>
      <h3>2. Define</h3>
      <ul>
        <li>
          <p class="text-large">User personas</p>
        </li>
      </ul>
      <ul>
        <li>
          <p class="text-large">User journeys</p>
        </li>
      </ul>
    </Prose>
    <v-divider class="my-8" />
    <v-row align="center">
      <v-col cols="12" md="5" class="pe-md-10">
        <Prose>
          <h4>User personas </h4>
          <p>With the data generated during the research phase, I created two user personas that encapsulated my target audience. I referred back to the two personas throughout the project to ensure I was solving the right problems.</p>
        </Prose>
      </v-col>
      <v-col cols="12" md="7">
        <Figure src="/images/expert-ux-design/user-persona-1.webp" square>
          <p>One of the user personas used in the project</p>
        </Figure>
      </v-col>
    </v-row>
    <v-row align="center" class="mt-8">
      <v-col cols="12" md="5" order-md="2" class="ps-md-10">
        <Prose>
          <h4>User journeys</h4>
          <p>Once I had a solid idea of who my user was, I investigated their path to and throughout the app. </p>
          <ul>
            <li>
              <p><strong>Why would they be using the app? </strong></p>
            </li>
            <li>
              <p><strong>How would they be feeling? </strong></p>
            </li>
            <li>
              <p><strong>What do they want?</strong></p>
            </li>
          </ul>
        </Prose>
      </v-col>
      <v-col cols="12" md="7" order-md="1">
        <Figure src="/images/expert-ux-design/user-journey-1.webp" square>
          <p>A user journey for the primary personas</p>
        </Figure>
      </v-col>
    </v-row>
  </Section>

  <Section>
    <Prose>
      <h3>3. Ideate</h3>
      <ul>
        <li>
          <p class="text-large">User task flows</p>
        </li>
      </ul>
      <ul>
        <li>
          <p class="text-large">Information architecture &amp; sitemap</p>
        </li>
      </ul>
    </Prose>
    <v-divider class="my-8" />
    <v-row align="center">
      <v-col cols="12" md="5" class="pe-md-10">
        <Prose>
          <h4>User task flow</h4>
          <p>I created user flows that showed how a user would move from an entry point to success criteria. </p>
          <p>I wanted to iron out the easiest route for a user to complete a task.</p>
        </Prose>
      </v-col>
      <v-col cols="12" md="7">
        <Figure src="/images/expert-ux-design/user-task-flow-1-new.webp" :aspect="60.81" square>
          <p>One of the user flows created for the project</p>
        </Figure>
      </v-col>
    </v-row>
    <v-row align="center" class="mt-8">
      <v-col cols="12" md="6" order-md="2" class="ps-md-10">
        <Prose>
          <h4>Information architecture &amp; sitemap</h4>
          <p>I then created a comprehensive sitemap, covering all of the features that were highlighted during competitor research and user interviews. </p>
          <p>I created an initial version, set up and ran a short online survey, then adapted the sitemaps based on the results. The second iteration is included below.</p>
        </Prose>
      </v-col>
      <v-col cols="12" md="6" order-md="1">
        <Figure src="/images/expert-ux-design/sitemap-1.webp" square>
          <p>A sitemap for Expert</p>
        </Figure>
      </v-col>
    </v-row>
  </Section>

  <Section tone="muted">
    <Prose>
      <h3>4. Wireframes &amp; prototypes</h3>
    </Prose>
    <v-divider class="my-8" />
    <v-row align="center">
      <v-col cols="12" md="5" class="pe-md-10">
        <Prose>
          <h4>Low fidelity wireframes</h4>
          <p>I took all of the information, data and ideas and started sketching some wireframes. I used paper and pencil to make on-the-go alterations.</p>
        </Prose>
      </v-col>
      <v-col cols="12" md="7">
        <Figure src="/images/expert-ux-design/low-fidelity-wireframes.webp" :aspect="60.81">
          <p>A selection of low fidelity wireframes</p>
        </Figure>
      </v-col>
    </v-row>
    <v-row align="center" class="mt-8">
      <v-col cols="12" md="5" order-md="2" class="ps-md-10">
        <Prose>
          <h4>Mid fidelity wireframes</h4>
          <p>I then started refining my design. At this mid fidelity stage, it was easy to change the design and make iterations. </p>
          <p>I limited myself to grey scale to focus solely on the layout and design – colour and images would come later. </p>
        </Prose>
      </v-col>
      <v-col cols="12" md="7" order-md="1">
        <Figure src="/images/expert-ux-design/new-mid-fidelity-wireframes.webp" square>
          <p>A selection of mid fidelity wireframes</p>
        </Figure>
      </v-col>
    </v-row>
    <v-row align="center" class="mt-8">
      <v-col cols="12" md="5" class="pe-md-10">
        <Prose>
          <h4>High fidelity wireframes</h4>
          <p>I then developed the design further with pixel perfect alignment, images (still in greyscale at this point) and copy. This fidelity was also developed into a prototype. </p>
        </Prose>
      </v-col>
      <v-col cols="12" md="7">
        <Figure src="/images/expert-ux-design/new-high-fidelity-wireframes.webp" square>
          <p>The development from low to high fidelity</p>
        </Figure>
      </v-col>
    </v-row>
  </Section>

  <Section>
    <Prose>
      <h3>5. Usability testing</h3>
    </Prose>
    <v-divider class="my-8" />
    <Prose>
      <p>I prepared for the testing sessions by writing a test plan and script. I then completed multiple remote usability tests.</p>
      <p>I wanted to discover how easy it was for my participants to navigate the prototype and complete tasks. I observed 6 participants as they completed the tasks and took note of any errors, points of friction, frustrations or confusion. I then rated the errors using Jacob Nielsen’s error severity chart.</p>
      <p>Here are some of the main errors and what I did to fix the problem.</p>
    </Prose>
    <v-row align="center" class="mt-10">
      <v-col cols="12" md="6" class="pe-md-10">
        <Prose>
          <h4>Issue 1: ‘I can’t find the Answers section’</h4>
          <p><strong>Evidence: </strong></p>
          <ul>
            <li>
              <p>All 6 participants took a long time to find the Answers section</p>
            </li>
            <li>
              <p>2 participants said they would expect to see the Answers section on the homepage</p>
            </li>
            <li>
              <p>The name of the section, Answers, was a cause for confusion</p>
            </li>
          </ul>
          <p><strong>Solutions:</strong></p>
          <ul>
            <li>
              <p>Change the section name, from Answers to Community. </p>
            </li>
            <li>
              <p>Include a section on the homepage that introduces the Community section</p>
            </li>
          </ul>
        </Prose>
      </v-col>
      <v-col cols="12" md="6">
        <Figure src="/images/expert-ux-design/usability-test-results-1-community-section.webp" :aspect="60.81">
          <p>Additional banner included on the homepage</p>
        </Figure>
      </v-col>
    </v-row>
    <v-row align="center" class="mt-8">
      <v-col cols="12" md="6" order-md="2" class="ps-md-10">
        <Prose>
          <h4>Issue 2: ‘I’d be worried about pressing the phone button’</h4>
          <p><strong>Evidence:</strong></p>
          <ul>
            <li>
              <p>3 participants mentioned that they thought the phone icon would automatically call the expert</p>
            </li>
            <li>
              <p>2 participants mentioned that this made them feel uncomfortable</p>
            </li>
          </ul>
          <p><strong>Solutions:</strong></p>
          <ul>
            <li>
              <p>Added text to the button to show the user will request a call </p>
            </li>
            <li>
              <p>Add detail into the how-it-works section on the homepage to explain users will book a time with the expert. The usability tests showed that users spend some time reading the how-it-works section</p>
            </li>
          </ul>
        </Prose>
      </v-col>
      <v-col cols="12" md="6" order-md="1">
        <Figure src="/images/expert-ux-design/usability-test-results-2-phone-icon.webp" />
      </v-col>
    </v-row>
  </Section>

  <Section tone="muted">
    <Prose>
      <h3>6. Design iterations</h3>
    </Prose>
    <v-divider class="my-8" />
    <Prose>
      <ul>
        <li>
          <p class="text-large">Design principles</p>
          <p>I then applied some well known design principles to finalise the design. I also added colour.</p>
        </li>
      </ul>
      <ul>
        <li>
          <p class="text-large">Design language system</p>
          <p>I also developed a language system for hand off of my project which included design elements and rules for tone of voice and accessibility.</p>
        </li>
      </ul>
      <h4 class="mt-12">Design language system</h4>
    </Prose>
    <v-row class="mt-4">
      <v-col cols="12" md="6">
        <Figure src="/images/expert-ux-design/1-typography.webp" square />
      </v-col>
      <v-col cols="6" md="3" class="d-flex flex-column ga-6">
        <Figure src="/images/expert-ux-design/5-2-ui-elements.webp" square sizes="(max-width: 959px) 50vw, 300px" />
        <Figure src="/images/expert-ux-design/2-2-colour.webp" square sizes="(max-width: 959px) 50vw, 300px" />
      </v-col>
      <v-col cols="6" md="3" class="d-flex flex-column ga-6">
        <Figure src="/images/expert-ux-design/2-1-colours.webp" square sizes="(max-width: 959px) 50vw, 300px" />
        <Figure src="/images/expert-ux-design/5-1-ui-elements.webp" square sizes="(max-width: 959px) 50vw, 300px" />
      </v-col>
    </v-row>
  </Section>

  <Section>
    <Prose>
      <h3>Final design &amp; prototype</h3>
    </Prose>
    <v-divider class="my-8" />
    <v-row align="center">
      <v-col cols="12" md="5">
        <Figure src="/images/expert-ux-design/3-all-images.webp" square />
      </v-col>
      <v-col cols="12" md="7">
        <Figure src="/images/expert-ux-design/four-mockups.webp" square />
      </v-col>
    </v-row>
  </Section>

  <Section tone="inverse">
    <v-row align="center">
      <v-col cols="12" md="6" class="pe-md-10">
        <Prose>
          <h3>Want to try out the prototype?</h3>
        </Prose>
        <CtaButton to="https://xd.adobe.com/view/23962511-7300-40e2-6077-81e9150903b1-55a7/?fullscreen" new-window class="mt-4">Visit prototype</CtaButton>
      </v-col>
      <v-col cols="6" md="3">
        <Figure src="/images/expert-ux-design/homescreen-run-through.webp" :max-width="183" square sizes="183px" />
      </v-col>
      <v-col cols="6" md="3">
        <Figure src="/images/expert-ux-design/new-mobile-wireframes-video-2.webp" :max-width="182" square sizes="182px" />
      </v-col>
    </v-row>
  </Section>

  <NextProject />
</template>
