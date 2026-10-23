<script setup lang="ts">
import { usePageMeta } from "@/lib/meta.ts";

usePageMeta({
  title: "Pet insurance comparison journey",
  description: "Pet insurance is needlessly complex. With four cover types, each featuring unique rules, limits, and exclusions; it's difficult to know what your pets…",
});

const prototype = "https://www.figma.com/proto/w6hAG1UtXXG6MtZprP4fMR/Pet-insurance?hide-ui=1&node-id=707-27848&page-id=707%3A27799&scaling=min-zoom&t=kloXX7C0R4X9Fx9W-8&type=design&viewport=446%2C484%2C0.28";
</script>

<template>
  <CaseHero
    title="Pet Insurance: Simplifying a journey"
    image="/images/confused-pet-insurance/top-image.webp"
    image-alt="An image of 2 phones with screens from the confused.com pet insurance comparison journey"
    image-square
  >
    <p class="text-large">Pet insurance is needlessly complex. With four cover types, each featuring unique rules, limits, and exclusions; it's difficult to know what your pets are truly covered for. This project sought to revamp our comparison journey, simplifying these intricacies and providing the information needed to for anyone to make a confident buying decision.</p>
  </CaseHero>

  <ProjectFacts
    :items="[
      { label: 'Project type', value: 'As part of my role as a Product Designer at Confused.com.' },
      { label: 'My role', value: 'Product and Content designer, in a team of two designers.' },
      { label: 'Tools', value: 'Figma, UserZoom' },
      { label: 'Duration', value: 'Project completed between June 2023- Aug 2023' },
    ]"
  />

  <Section>
    <v-row>
      <v-col cols="12" md="7" class="pe-md-10">
        <Prose>
          <h2>Understanding the problem</h2>
          <p class="text-large">Our analysis of the existing pet insurance journey revealed some key problems:</p>
          <ul>
            <li>
              <p class="text-large"><strong>Lack of clarity between different types of cover</strong>. Users struggled to comprehend distinctions between the three types of pet insurance cover.</p>
            </li>
            <li>
              <p class="text-large"><strong>Overuse of insurance jargon</strong>. Frequent use of complex insurance terminology created a barrier for users.</p>
            </li>
            <li>
              <p class="text-large"><strong>Limited flexibility.</strong> The platform was designed to accommodate insuring one pet at a time, which contrasted with competitors' offerings. The list of dog/cat breeds was limited, leading to many users feeling like they were unable to get accurate cover.</p>
            </li>
            <li>
              <p class="text-large"><strong>Impersonal process</strong>. The pet insurance journey lacked personalisation, despite the deeply personal nature of pet care.</p>
            </li>
          </ul>
        </Prose>
      </v-col>
      <v-col cols="12" md="5" class="d-flex flex-column ga-6 justify-center">
        <QuoteCard>
          <p class="text-large"><strong><em>“A lot of different types of cover… unfortunately it isn’t clear what’s what and how much how much the vet coverage is”</em></strong></p>
          <p><strong><em>- Confused.com Pet Insurance User</em></strong></p>
        </QuoteCard>
        <QuoteCard>
          <p class="text-large"><strong><em>“Sometimes the terminology is hard to understand and you need specific jargon busters”</em></strong></p>
          <p><strong><em>- Confused.com Pet Insurance User</em></strong></p>
        </QuoteCard>
      </v-col>
    </v-row>
  </Section>

  <Section tone="muted">
    <v-row align="center">
      <v-col cols="12" md="6" order-md="2" class="ps-md-10">
        <Prose>
          <h2>Ideation: Designing solutions</h2>
          <p class="text-large">In the ideation phase, we focused on refining the user flow and design elements to address the identified issues. Here are the key highlights:</p>
          <ul>
            <li>
              <p class="text-large"><strong>Streamlined user flow</strong>: We restructured the question set to prioritise the most-selected option (Lifetime cover was selected by over 90% of users).</p>
            </li>
            <li>
              <p class="text-large"><strong>Segmented question set</strong>: We divided the questions into three sections, rather than one long page, to prevent information overload.</p>
            </li>
            <li>
              <p class="text-large"><strong>Clarity on multi-pet policies</strong>: We created wireframes that communicated the ability to add multiple pets to a single policy, aligning with user expectations – the number of pets was moved to be the opening question. </p>
            </li>
            <li>
              <p class="text-large"><strong>Enhanced content</strong>: We overhauled the content to offer clear definitions and user-friendly breakdowns of cover types and other questions.</p>
            </li>
            <li>
              <p class="text-large"><strong>Design system integration</strong>: The journey was updated into our new design system, enhancing usability and consistency in form components.</p>
            </li>
          </ul>
        </Prose>
      </v-col>
      <v-col cols="12" md="6" order-md="1">
        <Figure src="/images/confused-pet-insurance/new-ieation-min.webp" alt="An image showcasing before and after images of the Confused.com pet insurance journey" square />
      </v-col>
    </v-row>
  </Section>

  <Section>
    <v-row>
      <v-col cols="12" md="7" class="pe-md-10">
        <Prose>
          <h2>Testing the design: Survey plan &amp; results</h2>
          <p class="text-large">Following the ideation phase, we proceeded to the testing stage, which was centered around refining the user experience in the section of the journey that posed the most challenges—understanding the nuances of three cover types: Lifetime cover, Maximum Benefit &amp; Time Limited. </p>
          <p class="text-large">Our primary goal was to gather quantitative data to test our solutions and new content.</p>
          <p class="text-large">To achieve this, we created a comprehensive survey that reached 250 participants. The survey was designed to gauge user confidence in understanding the questions, statements, and information within the question set. <br /><br /><strong>Survey Highlights</strong>: </p>
          <ul>
            <li>
              <p class="text-large">88% of participants said they were confident they understood the difference between the three types of cover.</p>
            </li>
            <li>
              <p class="text-large">89% of participants expressed confidence in understanding the statement regarding cover for pre-existing conditions.</p>
            </li>
          </ul>
          <p class="text-large"><strong>Areas for improvement:</strong></p>
          <ul>
            <li>
              <p class="text-large">Notably, some participants expressed a desire to read about all three cover types together, rather than separated across two questions.</p>
            </li>
            <li>
              <p class="text-large">Two participants highlighted the term "limit" as a potential point of confusion.</p>
            </li>
          </ul>
        </Prose>
      </v-col>
      <v-col cols="12" md="5">
        <div class="position-sticky case-sticky">
          <ShareMeter
            :data="[{ label: 'Confident', value: 220 }, { label: 'Not confident', value: 30 }]"
            caption="Based on the questions and information provided. How confident are you that you understand the difference between the three cover types?"
          />
        </div>
      </v-col>
    </v-row>
  </Section>

  <Section tone="muted">
    <v-row>
      <v-col cols="12" md="7" class="pe-md-10">
        <Prose>
          <h2>Testing the design: Usability testing results</h2>
          <p class="text-large">Following the survey, we ran usability testing sessions with 15 participants using a prototype of the redesigned flow. This phase aimed to gather qualitative data, assess design usability, and understand user interactions, especially with help text and new content.</p>
          <p class="text-large"><strong>Highlights:</strong></p>
          <ul>
            <li>
              <p class="text-large">All participants successfully chose pet insurance cover.</p>
            </li>
            <li>
              <p class="text-large">All participants expressed confidence in their cover selection.</p>
            </li>
            <li>
              <p class="text-large">12/15 participants used the help text and expressed that it assisted them in understanding the questions.</p>
            </li>
          </ul>
          <p class="text-large"><strong>Areas for improvement:</strong></p>
          <ul>
            <li>
              <p class="text-large">A participant suggested incorporating real-life scenarios would be helpful.</p>
            </li>
            <li>
              <p class="text-large">Another participant mentioned that they’d like to see the pros and cons of each cover type to help them compare.</p>
            </li>
          </ul>
          <p class="text-large">The usability testing phase provided actionable insights that further refined our design.</p>
          <h4>Want to try it out? View the cover section of the prototype: (desktop only)</h4>
        </Prose>
        <CtaButton :to="prototype" new-window class="mt-4">View prototype</CtaButton>
      </v-col>
      <v-col cols="12" md="5" class="d-flex flex-column ga-6 justify-center">
        <QuoteCard>
          <p class="text-large"><strong><em>“This point here about the average claim is really, really helpful and that actually informed my decision”</em></strong></p>
          <p><strong><em>- Usability testing participant 11</em></strong></p>
        </QuoteCard>
        <QuoteCard>
          <p class="text-large"><strong><em>“Might be nice to have a link to a specific breakdown that details all the good and bad things about each type”</em></strong></p>
          <p><strong><em>- Usability testing participant 4</em></strong></p>
        </QuoteCard>
      </v-col>
    </v-row>
  </Section>

  <Section>
    <v-row align="center">
      <v-col cols="12" md="6" class="pe-md-10">
        <Prose>
          <h2>Refinements inspired by user insights</h2>
          <p class="text-large">Driven by insights from survey and usability testing, we made several changes to the design:</p>
          <ol>
            <li>
              <p class="text-large">Usability testing pinpointed areas for subtle content adjustments.</p>
            </li>
            <li>
              <p class="text-large"> We introduced a comprehensive slide-out panel. This feature presents the advantages and disadvantages of each cover type upfront, offering users complete clarity before they begin answering questions. This section allowed users to compare all cover types in one place.</p>
            </li>
            <li>
              <p class="text-large">We also refined visual aspects of the journey. These changes emphasise the personal nature of pet care.</p>
            </li>
          </ol>
        </Prose>
      </v-col>
      <v-col cols="12" md="6">
        <Figure src="/images/confused-pet-insurance/refinement-image-min.webp" alt="An image that shows a new drawer introduced to the design with more detailed explanations." square />
      </v-col>
    </v-row>
  </Section>

  <Section tone="muted">
    <Prose>
      <h2>Final designs</h2>
    </Prose>
    <v-row align="center">
      <v-col cols="12" md="6" class="d-flex flex-column ga-6">
        <Figure src="/images/confused-pet-insurance/glamour-shots-2-min.webp" square />
        <Figure src="/images/confused-pet-insurance/gllamour-shots-4.webp" square />
      </v-col>
      <v-col cols="6" md="3">
        <Figure src="/images/confused-pet-insurance/glamour-shots.webp" square sizes="(max-width: 959px) 50vw, 300px" />
      </v-col>
      <v-col cols="6" md="3">
        <Figure src="/images/confused-pet-insurance/glamour-shots-5.webp" square sizes="(max-width: 959px) 50vw, 300px" />
      </v-col>
    </v-row>
    <div class="d-flex flex-wrap align-center ga-4">
      <Prose>
        <h4>Want to try it out? View the cover section of the prototype: (desktop only)</h4>
      </Prose>
      <CtaButton :to="prototype" new-window>View prototype</CtaButton>
    </div>
  </Section>

  <NextProject />
</template>
