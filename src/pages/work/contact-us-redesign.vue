<script setup lang="ts">
import { usePageMeta } from "@/lib/meta.ts";

usePageMeta({
  title: "Contact us redesign",
  description: "A UX review and complete redesign of a contact form, help centre and FAQs.",
});
</script>

<template>
  <CaseHero
    title="Contact form and information suite redesign"
    image="/images/contact-us-redesign/2group-13041.webp"
    image-square
  >
    <p>A UX review and complete redesign of a contact form, help centre and FAQs. </p>
    <p>Making it easier for our users to get the answers they need, while reducing the amount of customer queries our customer support team see daily.</p>
  </CaseHero>

  <ProjectFacts
    :items="[
      { label: 'Project type', value: 'As part of my role as a product designer at Confused.com.' },
      { label: 'My role', value: 'Primary designer, UX and UI.' },
      { label: 'Tools', value: 'Figma' },
      { label: 'Duration', value: 'Designs completed between July 2021-Sept 2021' },
    ]"
  />

  <Section>
    <v-row>
      <v-col cols="12" md="6" class="pe-md-10">
        <Prose>
          <h2>The problem</h2>
          <h4>User problem</h4>
          <p class="text-large">Confused.com users need answers to their queries quickly so they can continue comparing or buying insurance.</p>
          <h4>Business problem</h4>
          <p class="text-large">The customer support team need a more effective contact process to reduce the number of customer queries coming through to them.</p>
        </Prose>
      </v-col>
      <v-col cols="12" md="6">
        <Prose>
          <h2>The solution</h2>
          <p class="text-large">Redesign the contact form, help centre and FAQ pages to help users self serve when they’re looking for answers.</p>
          <p class="text-large">Ensure answers to simple questions are easy to find and remove the need for users to get in touch and wait 2-3 days for a response. </p>
        </Prose>
      </v-col>
    </v-row>
  </Section>

  <Section tone="muted">
    <Prose>
      <h2>Research</h2>
      <p class="text-large">Research was comprised of 3 sections, <strong>user research</strong>, <strong>competitor research</strong> &amp; <strong>feedback from our customer support team</strong>. The research led to some key findings:</p>
    </Prose>
    <v-row>
      <v-col cols="12" md="4">
        <Panel>
          <p class="text-large"><strong>User research</strong> showed users were frustrated by:</p>
          <ul>
            <li>
              <p>How difficult it was to find the correct way to contact us.</p>
            </li>
            <li>
              <p>The time they needed to wait for a response to simple questions.</p>
            </li>
          </ul>
        </Panel>
      </v-col>
      <v-col cols="12" md="4">
        <Panel>
          <p class="text-large"><strong>Competitor research</strong> revealed:</p>
          <ul>
            <li>
              <p>Many competitors would only display FAQs, with no way to directly contact customer support. </p>
            </li>
            <li>
              <p>We had an opportunity to provide an improved experience.</p>
            </li>
          </ul>
        </Panel>
      </v-col>
      <v-col cols="12" md="4">
        <Panel>
          <p class="text-large"><strong>Customer support feedback</strong> showed:</p>
          <ul>
            <li>
              <p>Users would get in contact with common questions daily.</p>
            </li>
            <li>
              <p>We’d use a template response to respond to these questions which would take a lot of unnecessary time.</p>
            </li>
          </ul>
        </Panel>
      </v-col>
    </v-row>
  </Section>

  <Section>
    <v-row align="center">
      <v-col cols="12" md="7" class="pe-md-10">
        <Prose>
          <h2>The current design: Usability issues</h2>
          <p class="text-large">I then analysed our current contact form &amp; FAQ pages, highlighting any usability issues that we would fix in our redesign: to each set of FAQs.</p>
          <ol>
            <li>
              <p class="text-large"><strong>The contact form was hidden</strong> at the bottom of a long page of FAQs. </p>
            </li>
            <li>
              <p class="text-large"><strong>The heading</strong> (‘What’s your query about?’) <strong>was small</strong> and didn’t make it obvious that this was a contact form.</p>
            </li>
            <li>
              <p class="text-large"><strong>The FAQ accordions are open on load</strong>, making the page longer.</p>
            </li>
            <li>
              <p class="text-large"><strong>Users would see 2 email addresses before they get to the form. </strong>Neither email address was used for customer questions and could cause the user to contact an incorrect email address.</p>
            </li>
            <li>
              <p class="text-large"><strong>The FAQs featured are not particularly helpful</strong> and didn’t line up with the most common questions our customer support team would answer. </p>
            </li>
            <li>
              <p class="text-large"><strong>Our FAQ groups, featured on a different page, were not clearly grouped</strong> and there was no clear navigation to each set of FAQs.</p>
            </li>
          </ol>
        </Prose>
      </v-col>
      <v-col cols="12" md="5">
        <Figure
          src="/images/contact-us-redesign/old-contact-https-www-confused-com-help-contact-us.webp"
          alt="Confused.com Contact us page - before the redesign"
          square
          shadow
          sizes="(max-width: 959px) 100vw, 40vw"
        />
      </v-col>
    </v-row>
  </Section>

  <Section tone="muted">
    <v-row align="center">
      <v-col cols="12" md="7" order-md="2" class="ps-md-10">
        <Prose>
          <h2>Contact form redesign</h2>
          <p class="text-large">I then started creating basic wireframes to solve the problems that came out of the research and usability assessment. </p>
          <p class="text-large"><strong>During this process we found that we could include helpful information within the contact form itself. </strong>This would help users get quick answers to common questions while reducing the amount of questions coming through to our customer support team. </p>
          <p class="text-large">Users would select the subject of their query and what they were having a problem with and we would show some information to help them with that topic. I used content design to improve hundreds of pieces of information, to make sure we’re providing the information our users need in the right way. </p>
          <p class="text-large">I then developed this idea into increasing levels of fidelity, while moving the design into our new design patterns. </p>
          <p class="text-large">It was important that we designed the contact form in such a way that the helpful information didn’t slow down users with complex queries. Users can still get in touch if the information didn’t answer their question.</p>
        </Prose>
      </v-col>
      <v-col cols="12" md="5" order-md="1">
        <Figure src="/images/contact-us-redesign/contact-us-subject-help-selected.webp" sizes="(max-width: 959px) 100vw, 40vw" />
      </v-col>
    </v-row>
  </Section>

  <Section>
    <v-row align="center">
      <v-col cols="12" md="7" class="pe-md-10">
        <Prose>
          <h2>Help centre redesign</h2>
          <p class="text-large">I then focused on redesigning the help centre page to help users find FAQs, guides and helpful information. </p>
          <p class="text-large">Navigating between the groups of FAQs was a key issue, using a dropdown the choose the topic allowed us to display all of our FAQs on one page, rather than 10 separate pages. </p>
          <p class="text-large">I also rewrote all of our site FAQs and used content design to ensure there’s a consistent language throughout each piece of information.</p>
        </Prose>
      </v-col>
      <v-col cols="12" md="5">
        <Figure src="/images/contact-us-redesign/help-centre-1.webp" sizes="(max-width: 959px) 100vw, 40vw" />
      </v-col>
    </v-row>
  </Section>

  <Section tone="muted">
    <Prose>
      <h2>Final designs</h2>
    </Prose>
    <v-row align="center">
      <v-col cols="12" md="3">
        <Figure
          src="/images/contact-us-redesign/contact-us-still-need-to-get-in-touch-yes.webp"
          :max-width="300"
          sizes="300px"
        />
      </v-col>
      <v-col cols="12" md="9">
        <Figure
          src="/images/contact-us-redesign/we-ve-got-your-messagedevice-macbook-pro.webp"
          alt="Laptop mock up that shows the confirmation screen, after a user has got in touch"
          square
          sizes="(max-width: 959px) 100vw, 75vw"
        />
      </v-col>
    </v-row>
  </Section>

  <NextProject />
</template>
