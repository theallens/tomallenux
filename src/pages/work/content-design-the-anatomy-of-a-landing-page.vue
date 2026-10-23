<script setup lang="ts">
import { usePageMeta } from "@/lib/meta.ts";

usePageMeta({
  title: "Content design, The anatomy of a landing page",
  description: "To dissect how I approach content design, I’ve broken down a page I rewrote and redesigned in 2022.  I’ll outline my process, review the impact content…",
});
</script>

<template>
  <CaseHero
    eyebrow="Content design"
    title="Content design: The anatomy of a landing page"
    image="/images/content-design-the-anatomy-of-a-landing-page/group-17977.webp"
    image-square
  >
    <p class="text-large">To dissect how I approach content design, I’ve broken down a page I rewrote and redesigned in 2022. I’ll outline my process, review the impact content can have on users and summarise the design decisions I made along the way. </p>
    <p class="text-large">The page I’m reviewing is the Confused.com car insurance landing page, the most visited page on the site. As it’s an SEO page, it’s content-heavy and the primary goal is to convince users to compare car insurance quotes.</p>
  </CaseHero>

  <Section tone="muted" narrow>
    <Prose>
      <h2>How I approach content design</h2>
      <p class="text-large">Content design is about giving the user information in the <strong>right way</strong> at the <strong>right time</strong>.</p>
      <p class="text-large">Context is everything. What has the user done to get here? What’s their goal? Is the change we’re making based on data, or a hunch?</p>
      <p class="text-large">When writing content I like to apply these rules:</p>
      <ul>
        <li>
          <p class="text-large">Make sure there’s a consistent tone.</p>
        </li>
        <li>
          <p class="text-large">Use the same wording end-to-end e.g. from email to web page.</p>
        </li>
        <li>
          <p class="text-large">Keep the primary goal in mind. What does the user need/want to do?</p>
        </li>
        <li>
          <p class="text-large">All key decisions should be data-led.</p>
        </li>
        <li>
          <p class="text-large">Display information in the clearest way, using the correct components.</p>
        </li>
      </ul>
    </Prose>
  </Section>

  <Section>
    <v-row align="center">
      <v-col cols="12" md="6" class="pe-md-10">
        <Prose>
          <h2>Tackling hero sections</h2>
          <p class="text-large">As it has the largest impact, I’ll almost always spend the most time crafting the content in the hero section. In this example, 60% of users scrolled less than 10% of the page. 70% of active clicks used the main CTA in the hero. </p>
          <p class="text-large">What I did to improve the content:</p>
          <ul>
            <li>
              <p class="text-large"><strong>Mirrored the search terms</strong> in the main headline to reassure the user they’ve landed on the correct page.</p>
            </li>
            <li>
              <p class="text-large"><strong>Included the main selling point</strong> in the headline ‘Save up to £X'</p>
            </li>
            <li>
              <p class="text-large"><strong>Made sure there’s additional reasons to buy</strong> with, including social proof, stats to back up our legitimacy, guarantee of a reward and line outlining the time it will take to reassure the user.</p>
            </li>
            <li>
              <p class="text-large"><strong>Descriptive labelling in the primary CTA</strong></p>
            </li>
            <li>
              <p class="text-large"><strong>Positive iconography</strong></p>
            </li>
          </ul>
        </Prose>
      </v-col>
      <v-col cols="12" md="6" class="d-flex flex-column ga-6">
        <Figure src="/images/content-design-the-anatomy-of-a-landing-page/frame-13534.webp" shadow />
        <Figure src="/images/content-design-the-anatomy-of-a-landing-page/screenshot-2023-01-14-at-17-31-1.webp" :max-width="480" shadow>
          <p>An example of the search terms, mirrored in the headline.</p>
        </Figure>
      </v-col>
    </v-row>
  </Section>

  <Section tone="muted">
    <v-row align="center">
      <v-col cols="12" md="7" order-md="2" class="ps-md-10">
        <Prose>
          <h2>Scannable headings and button labels</h2>
          <p class="text-large"><strong>Users don’t read, they scan</strong>. </p>
          <p class="text-large">Headings, links and buttons are particularly noticeable in content so it’s important to use this content wisely. We need to make sure there’s a consistent tone running throughout the page, as if we’re having a conversation with the user.</p>
          <p class="text-large">What I did to improve the content:</p>
          <ul>
            <li>
              <p class="text-large"><strong>Used consistent language</strong> in headings, in this case they’re all statements (rather than questions).</p>
            </li>
            <li>
              <p class="text-large"><strong>Paid attention to reading patterns</strong>, usually following an F-pattern – which focusses on the start of lines toward the top of the page (left-right languages).</p>
            </li>
            <li>
              <p class="text-large"><strong>Used descriptive labels for all button and links.</strong> I avoided content like ‘read more’ ‘click here’ ‘find out more’ as these are not accessible. Screen readers pick-up links so the link should make sense if you take everything else away.</p>
            </li>
          </ul>
        </Prose>
      </v-col>
      <v-col cols="12" md="5" order-md="1" class="d-flex flex-column ga-4">
        <Figure src="/images/content-design-the-anatomy-of-a-landing-page/screenshot-2023-01-15-at-09-18-01.webp" :max-width="448" shadow />
        <Figure src="/images/content-design-the-anatomy-of-a-landing-page/screenshot-2023-01-15-at-09-18-27.webp" :max-width="692" shadow />
        <Figure src="/images/content-design-the-anatomy-of-a-landing-page/screenshot-2023-01-15-at-09-46-59.webp" :max-width="534" shadow />
        <Figure src="/images/content-design-the-anatomy-of-a-landing-page/screenshot-2023-01-15-at-09-47-16.webp" :max-width="451" shadow />
        <Figure src="/images/content-design-the-anatomy-of-a-landing-page/screenshot-2023-01-15-at-09-47-34.webp" :max-width="553" shadow />
        <Figure src="/images/content-design-the-anatomy-of-a-landing-page/screenshot-2023-01-15-at-09-18-39.webp" :max-width="656" shadow>
          <p>Example of consistent headings and descriptive button &amp; link content.</p>
        </Figure>
      </v-col>
    </v-row>
  </Section>

  <Section>
    <v-row align="center">
      <v-col cols="12" md="6" class="pe-md-10">
        <Prose>
          <h2>Developing the flow of the page</h2>
          <p class="text-large">Naturally, SEO pages use a lot of content so we need to look at the order we display each module. It’s essential we look at the overall context of the page and our users and ask, what information is essential for the user to complete their task? And what’s the business goal?</p>
          <p class="text-large">What I did to improve the content:</p>
          <ul>
            <li>
              <p class="text-large"><strong>Prioritised the most important sections</strong> for a user. In this case, user’s that scroll past the main CTA may need more information about ‘How to compare insurance’ so this information is available directly after the hero section.</p>
            </li>
            <li>
              <p class="text-large"><strong>Positioned content around key actions</strong> to improve the flow. ‘How to compare’ for example, leads nicely into a CTA as the user has now got the information they need. I also grouped certain sections as they’re directly related.</p>
            </li>
          </ul>
        </Prose>
      </v-col>
      <v-col cols="12" md="6">
        <Figure src="/images/content-design-the-anatomy-of-a-landing-page/screenshot-2023-01-15-at-10-10-22.webp" shadow>
          <p>Improving the flow of the page: ‘How to compare…’ leads nicely into a second CTA</p>
        </Figure>
      </v-col>
    </v-row>
  </Section>

  <Section tone="muted">
    <v-row align="center">
      <v-col cols="12" md="6" order-md="2" class="ps-md-10">
        <Prose>
          <h2>Organising longer content</h2>
          <p class="text-large">For longer content, it’s important to provide detailed and helpful information without overwhelming users. </p>
          <p class="text-large">What I did to improve the content:</p>
          <ul>
            <li>
              <p class="text-large"><strong>Split long content into a separate module</strong>.</p>
            </li>
            <li>
              <p class="text-large"><strong>Kept content to</strong> <strong>less than</strong> <strong>350 words. </strong>Any longer and it can<strong> </strong>look cluttered.</p>
            </li>
            <li>
              <p class="text-large"><strong>Used two columns for content with a clear break</strong>.</p>
            </li>
            <li>
              <p class="text-large"><strong>Utilised bullets points</strong> where possible.</p>
            </li>
            <li>
              <p class="text-large"><strong>Front loaded paragraphs</strong> so users can scan and find the information they need without reading for too long.</p>
            </li>
            <li>
              <p class="text-large"><strong>Swapped words for more appropriate components</strong>, in this case a graph and bullets that use iconography.</p>
            </li>
          </ul>
        </Prose>
      </v-col>
      <v-col cols="12" md="6" order-md="1" class="d-flex flex-column ga-6">
        <Figure src="/images/content-design-the-anatomy-of-a-landing-page/screenshot-2023-01-15-at-10-32-03.webp" shadow />
        <Figure src="/images/content-design-the-anatomy-of-a-landing-page/screenshot-2023-01-15-at-10-32-21.webp" shadow>
          <p>Examples of longer content: Broken down into manageable sections.</p>
        </Figure>
      </v-col>
    </v-row>
  </Section>

  <Section>
    <Prose>
      <h2>The final result</h2>
    </Prose>
    <div class="mt-6">
      <Figure src="/images/content-design-the-anatomy-of-a-landing-page/desktop-min.webp" :max-width="560" shadow sizes="(max-width: 959px) 100vw, 560px" />
    </div>
  </Section>

  <NextProject />
</template>
