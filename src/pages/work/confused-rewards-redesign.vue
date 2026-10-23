<script setup lang="ts">
import { usePageMeta } from "@/lib/meta.ts";

usePageMeta({
  title: "Rewards, UX design",
  description: "A 5-month product design project, working in a large team to expand an existing rewards scheme &amp; integrate the offer into a mobile app.",
});
</script>

<template>
  <CaseHero
    title="Confused.com Rewards: Improving retention by optimising a marketing proposition"
    image="/images/confused-rewards-redesign/header-image.webp"
    image-alt="Two phones displaying a rewards offer on Confused.com"
    image-square
  >
    <p class="text-large">A 5-month product design project, working in a large team to expand an existing rewards scheme &amp; integrate the offer into a mobile app.</p>
  </CaseHero>

  <ProjectFacts
    :items="[
      { label: 'Project type', value: 'As part of my role as a product designer at Confused.com.' },
      { label: 'My role', value: 'Product designer, in a team of two designers.' },
      { label: 'Tools', value: 'Figma, Miro, UserZoom' },
      { label: 'Duration', value: 'Project completed between June 2022- Oct 2022' },
    ]"
  />

  <Section>
    <v-row align="center">
      <v-col cols="12" md="6" class="pe-md-10">
        <Prose>
          <h2>Where did we start?</h2>
          <p class="text-large">When the project started, Confused.com Rewards was a simple offer:<br /><br /><strong><em>Choose a reward when you buy car, home or van insurance with Confused.com.</em></strong><em><br /><br /></em>The user could return to Confused.com after buying their insurance to select 1 of 4 rewards, worth £20. After completing a claim form they would be emailed a voucher, which could be redeemed with their chosen retailer.</p>
        </Prose>
      </v-col>
      <v-col cols="12" md="6">
        <Figure src="/images/confused-rewards-redesign/confused-2023-04.webp" :max-width="520" square />
      </v-col>
    </v-row>
  </Section>

  <Section tone="accent">
    <Prose>
      <h2>The problem</h2>
    </Prose>
    <v-row class="mt-2">
      <v-col cols="12" md="6" class="pe-md-10">
        <Prose>
          <h4>The problem:</h4>
          <p class="text-large">After buying car or home insurance, only 25% of our users return to buy with Confused.com the following year.&nbsp;</p>
          <p class="text-large"><br />However, 34% of users that redeem a reward return to buy the following year.<strong> </strong></p>
        </Prose>
      </v-col>
      <v-col cols="12" md="6">
        <Prose>
          <h4>The task:</h4>
          <p class="text-large">Improve the offer &amp; the redemption process to encourage more users to claim a reward.</p>
          <p class="text-large">Increase the 34% retention rate by improving Confused.com Rewards.</p>
          <p class="text-large">Integrate rewards into the Confused.com App.</p>
        </Prose>
      </v-col>
    </v-row>
  </Section>

  <Section tone="muted">
    <Prose>
      <h2>Research &amp; discovery</h2>
    </Prose>
    <v-row class="mt-2">
      <v-col cols="12" md="6">
        <Panel>
          <h4><strong>What we did</strong>:</h4>
          <ul>
            <li>
              <p class="text-large">Data analysis, to understand what we know about the current offer</p>
            </li>
            <li>
              <p class="text-large">Competitor research, ground our offer against our competitors and other reward schemes in the market </p>
            </li>
            <li>
              <p class="text-large">User research, learn more about our users and their experience claiming a reward</p>
            </li>
            <li>
              <p class="text-large">UX analysis of the end-to-end user journey</p>
            </li>
          </ul>
        </Panel>
      </v-col>
      <v-col cols="12" md="6">
        <Panel>
          <h4><strong>What we found:</strong></h4>
          <ul>
            <li>
              <p class="text-large">1 of our 4 existing rewards, 12 free car washes – supplied monthly, had a <strong>52%</strong> retention rate, leading to some key ideas.</p>
            </li>
            <li>
              <p class="text-large">Our offer was truly free, not 2-4-1 or similar. This set us apart.</p>
            </li>
            <li>
              <p class="text-large">A choice of rewards was key &amp; it set us apart. We can’t remove choice.</p>
            </li>
            <li>
              <p class="text-large">Some rewards were more difficult to redeem than others, causing frustration.</p>
            </li>
          </ul>
        </Panel>
      </v-col>
    </v-row>
  </Section>

  <Section tone="accent" narrow>
    <Prose>
      <h4>The solution</h4>
      <h3><span class="text-white">Introduce a new app-only monthly reward to keep users engaged for their entire insurance term.<br /><br />Overhaul the offer &amp; redemption process to encourage more users to redeem a reward.</span></h3>
    </Prose>
  </Section>

  <Section>
    <v-row align="center">
      <v-col cols="12" md="6" class="pe-md-10">
        <Prose>
          <h2>Improving the redemption process</h2>
          <p class="text-large">Before designing the new monthly reward, we needed to improve the redemption process of our current offer. We analysed the journey and found:</p>
          <ol>
            <li>
              <p class="text-large">Offering four rewards meant four different journeys. Some rewards were more difficult to redeem than others. This caused a disproportionate amount of customer queries. </p>
            </li>
            <li>
              <p class="text-large">The rewards tracker, used to check the status of your rewards, was inaccurate. This page had a very high bounce rate.</p>
            </li>
            <li>
              <p class="text-large">Users were often unaware of restrictions applicable to each reward, leading to a lot of frustration after the rewards has been redeemed. </p>
            </li>
          </ol>
          <p class="text-large">With a better idea of the problems we had to solve, we then moved on to wire-framing.</p>
        </Prose>
      </v-col>
      <v-col cols="12" md="6">
        <Figure src="/images/confused-rewards-redesign/user-flow-rewards.webp" alt="A user flow looking at the path a user has to take to redeem each of our 4 rewards." square>
          <p class="text-small">The user flow shows the difference in effort across the 4 reward redemption processes</p>
        </Figure>
      </v-col>
    </v-row>
  </Section>

  <Section tone="muted">
    <v-row align="center">
      <v-col cols="12" md="6" order-md="2" class="ps-md-10">
        <Prose>
          <h2>Developing the claim journey</h2>
          <p class="text-large">Our development of the claim journey was key. We needed to introduce the new offer, explain how it worked and ensure all users knew how and when they could claim both the main reward and the monthly reward. </p>
          <p class="text-large">What we did to improve the claims process:</p>
          <ul>
            <li>
              <p class="text-large">Broke the claim process into manageable sections to reduce cognitive load.</p>
            </li>
            <li>
              <p class="text-large">Improved content in the claim form with helpful tips and more accurate error messaging.</p>
            </li>
            <li>
              <p class="text-large">Added specific tracker states per reward, no longer using generic language across all rewards.</p>
            </li>
            <li>
              <p class="text-large">Introduced the monthly reward and reminded users how and when to redeem it.</p>
            </li>
            <li>
              <p class="text-large">Included the monthly reward in the tracker so the user could track everything in one place.</p>
            </li>
            <li>
              <p class="text-large">Product colours allowed us to differentiate a car insurance reward, in blue, and a home insurance reward, in green.</p>
            </li>
          </ul>
        </Prose>
      </v-col>
      <v-col cols="12" md="6" order-md="1">
        <Figure src="/images/confused-rewards-redesign/group-17971-min.webp" :max-width="440" square>
          <p>The existing design for the claiming process and the new design.</p>
        </Figure>
      </v-col>
    </v-row>
  </Section>

  <Section>
    <v-row align="center">
      <v-col cols="12" md="6" class="pe-md-10">
        <Prose>
          <h2>Tracking the new monthly reward</h2>
          <p class="text-large">The new monthly reward meant a user had two active rewards each time they bought car, home or van insurance. </p>
          <p class="text-large">Allowing a user to track all of their rewards in one place was particularly important. So we focused on improving the tracker in the user’s web account and within the app itself. </p>
          <p class="text-large">We tested our mid-fidelity wireframes and found that we needed to differentiate the main reward from the regular reward. But would need to group both rewards within each claim to make it clear they were linked. </p>
          <p class="text-large">We introduced tracker states that were personalised to each individual reward, with over 80 states in total.</p>
        </Prose>
      </v-col>
      <v-col cols="12" md="6">
        <Figure src="/images/confused-rewards-redesign/tracker-states-development.webp" square>
          <p>Development of the tracker states</p>
        </Figure>
      </v-col>
    </v-row>
  </Section>

  <Section tone="muted">
    <v-row align="center">
      <v-col cols="12" md="6" order-md="2" class="ps-md-10">
        <Prose>
          <h2>Creating the app journey</h2>
          <p class="text-large">Working alongside our app designer, we planned the app flow. We kept the flow very simple, with just 3 steps from home screen to the QR code used to get the monthly reward.</p>
          <p class="text-large">We wanted the app to showcase to our users a cumulative view of all of the rewards they’ve received from us throughout the year. We opted for a calendar grid to show the redemption of each monthly reward.</p>
          <p class="text-large">During testing we discovered that the web tracker cards did not convert exactly into the app as the focus was to redeem the regular reward. Users also found the app experience to be uninspiring, so we introduced imagery to enhance the app screens.</p>
          <p class="text-large">Through a combination of push notifications and emails, we also planned how and when reminders would be sent to the user to tell them their monthly reward was ready to redeem.</p>
        </Prose>
      </v-col>
      <v-col cols="12" md="6" order-md="1">
        <Figure src="/images/confused-rewards-redesign/group-17965.webp" square>
          <p>First wireframes through to the final designs. Allowing the user to redeem and track their monthly reward.</p>
        </Figure>
      </v-col>
    </v-row>
  </Section>

  <Section>
    <Prose>
      <h2>Final designs</h2>
    </Prose>
    <v-row class="mt-2">
      <v-col cols="12" md="4">
        <Figure src="/images/confused-rewards-redesign/rewards-landing-page-final-colours-desktop.webp" :max-width="420" square sizes="(max-width: 959px) 100vw, 400px">
          <p>Rewards landing page during testing monthly reward testing period. </p>
        </Figure>
      </v-col>
      <v-col cols="12" md="8" class="ps-md-8">
        <v-row align="end">
          <v-col cols="6" sm="3">
            <Figure src="/images/confused-rewards-redesign/iphone-31.webp" square sizes="(max-width: 599px) 50vw, 200px" />
          </v-col>
          <v-col cols="6" sm="3">
            <Figure src="/images/confused-rewards-redesign/iphone-29.webp" square sizes="(max-width: 599px) 50vw, 200px" />
          </v-col>
          <v-col cols="6" sm="3">
            <Figure src="/images/confused-rewards-redesign/5a-ready-to-use.webp" square sizes="(max-width: 599px) 50vw, 200px" />
          </v-col>
          <v-col cols="6" sm="3">
            <Figure src="/images/confused-rewards-redesign/4a-rewards-verified.webp" square sizes="(max-width: 599px) 50vw, 200px" />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="6">
            <Prose>
              <p class="text-small">Emails: An example of the monthly reward reminder email and the main reward redemption email.</p>
            </Prose>
          </v-col>
          <v-col cols="12" sm="6">
            <Prose>
              <p class="text-small">App screens: Calendar tiles to show monthly redemption &amp; the rewards tracker within the app.</p>
            </Prose>
          </v-col>
        </v-row>
        <div class="mt-8">
          <Figure src="/images/confused-rewards-redesign/mlp-claim-form-rewards-tracker.webp" square>
            <p>Web tracker: Web tracker &amp; promotion of the new monthly reward.</p>
          </Figure>
        </div>
      </v-col>
    </v-row>
  </Section>

  <Section tone="inverse">
    <Prose>
      <h2>Tracked results</h2>
    </Prose>
    <v-row class="mt-2">
      <v-col cols="12" md="4">
        <Panel>
          <h4>Renewal rates</h4>
          <ul>
            <li>
              <p class="text-large">Tracking to be +25% vs a user that didn’t claim either reward</p>
            </li>
            <li>
              <p class="text-large">Tracking to be +13% vs a user that claimed just the standard reward</p>
            </li>
          </ul>
        </Panel>
      </v-col>
      <v-col cols="12" md="4">
        <Panel>
          <h4>Monthly active users</h4>
          <ul>
            <li>
              <p class="text-large">Trebled monthly active users over the first 6 months</p>
            </li>
          </ul>
        </Panel>
      </v-col>
      <v-col cols="12" md="4">
        <Panel>
          <h4>App downloads</h4>
          <ul>
            <li>
              <p class="text-large">App downloads up around 22% YoY for the first 6 months after launch</p>
            </li>
          </ul>
        </Panel>
      </v-col>
    </v-row>
  </Section>

  <NextProject />
</template>
