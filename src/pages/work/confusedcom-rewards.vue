<script setup lang="ts">
import { usePageMeta } from "@/lib/meta.ts";

usePageMeta({
  title: "Rewards+",
  description: "As a product designer, few things are as rewarding as seeing a project you've poured your heart into make a real impact. I recently had the incredible…",
});
</script>

<template>
  <CaseHero
    title="Creating Rewards+ for Confused.com"
    image="/images/confusedcom-rewards/r-final-image-landscape.webp"
    image-square
    tone="inverse"
  >
    <p class="text-large">As a product designer, few things are as rewarding as seeing a project you've poured your heart into make a real impact. I recently had the incredible opportunity to lead the design of <strong>Rewards+</strong>, Confused.com's brand-new flagship marketing scheme. </p>
    <p class="text-large">This wasn't just about a fresh coat of paint; I stepped beyond my core responsibilities to help rethink how we can use a loyalty scheme to drive significant shifts in <strong>acquisition</strong>, <strong>retention</strong>, and <strong>product density</strong>.</p>
  </CaseHero>

  <ProjectFacts
    :items="[
      { label: 'Project type', value: 'As part of my role as a Senior Product Designer at Confused.com.' },
      { label: 'My role', value: 'Product designer. Responsible for UI design, UX research and content design.' },
      { label: 'Tools', value: 'Figma, Miro, Usertesting.com' },
      { label: 'Duration', value: 'Project completed between November 2024- March 2025' },
    ]"
  />

  <Section>
    <Prose>
      <h2>Project overview</h2>
    </Prose>
    <v-row>
      <v-col cols="12" md="7" class="pe-md-10">
        <Prose>
          <h4>The challenge:</h4>
          <p class="text-large">For the past 5 years, Confused.com has offered incentives to customers who purchase car, home, or van insurance. Our previous scheme gave users a choice of one of four rewards. We even introduced a monthly treat – a hot drink from Greggs – which was a hit, significantly boosting retention.</p>
          <p class="text-large">However, there was a catch… only 15% of our customers actually redeemed a reward. This meant we weren't fully leveraging the retention power of our monthly treat. We knew we could do better.</p>
        </Prose>
      </v-col>
      <v-col cols="12" md="5">
        <Panel>
          <h4>My mission:</h4>
          <p class="text-large">Within 18 months, create a new marketing proposition that would make Confused.com the go-to platform for insurance, driving a meaningful shift in <strong>acquisition</strong>, <strong>retention</strong>, and <strong>product density</strong> (customers buying more products from us).</p>
        </Panel>
      </v-col>
    </v-row>
  </Section>

  <Section tone="muted">
    <Prose>
      <h2>Aligning with stakeholders &amp; driving collaboration</h2>
    </Prose>
    <v-row>
      <v-col cols="12" md="6" class="pe-md-10">
        <Prose>
          <p class="text-large">To build a strong foundation, our first step was aligning stakeholders and creating a shared understanding of where we stood.</p>
          <p class="text-large">We brought together three cross-functional squads, including marketing, product, support, developers and senior leadership. We ran a series of collaborative workshops. Each session started by grounding the group in our current state before opening up discussion around future opportunities.</p>
        </Prose>
      </v-col>
      <v-col cols="12" md="6">
        <Prose>
          <p class="text-large">To support this, we consolidated everything we knew. Including analysis of our current offer, past user research, customer support feedback, and a large-scale competitor review. This surfaced a few key insights:</p>
          <ul>
            <li>
              <p class="text-large">Online redemption was frustrating, leading to user drop-offs</p>
            </li>
            <li>
              <p class="text-large">Complex redemption journeys were perceived as dishonest and eroded trust</p>
            </li>
            <li>
              <p class="text-large">Rewards often went unused, creating low perceived value</p>
            </li>
            <li>
              <p class="text-large">Users wanted choice and flexibility, but rarely liked the options available</p>
            </li>
            <li>
              <p class="text-large">Competitor analysis (34 schemes) showed that successful programmes balanced short- and long-term value, often with a sense of progression</p>
            </li>
          </ul>
        </Prose>
      </v-col>
    </v-row>
  </Section>

  <Section>
    <v-row align="center">
      <v-col cols="12" md="6" class="pe-md-10">
        <Prose>
          <h2><span class="highlight">Early ideation</span></h2>
          <p class="text-large">The second half of each session was all about blue-sky thinking, taking what we knew and asking, “what could we do with this?”</p>
          <p class="text-large">We opened it up to the whole group so everyone could contribute ideas. It was important that the problem felt clear to everyone, and that different perspectives across the business had a voice in shaping potential solutions.</p>
          <p class="text-large">No idea was off limits. By the end, we’d generated over 50 unique ideas.</p>
        </Prose>
      </v-col>
      <v-col cols="12" md="6">
        <Figure src="/images/confusedcom-rewards/all-ideas-mapped-out.webp" />
      </v-col>
    </v-row>
  </Section>

  <Section tone="muted">
    <v-row align="center">
      <v-col cols="12" md="6" order-md="2" class="ps-md-10">
        <Prose>
          <h2>Refining the vision</h2>
          <p class="text-large">To narrow down our ideas, the Product Manager and I scored each one out of 10 against four critical categories:</p>
          <ol>
            <li>
              <p class="text-large">Does this idea deliver <strong>customer value</strong>?</p>
            </li>
            <li>
              <p class="text-large">Does this idea deliver <strong>business value</strong>?</p>
            </li>
            <li>
              <p class="text-large">Is this idea <strong>technically feasible</strong>?</p>
            </li>
            <li>
              <p class="text-large">Is this idea <strong>viable for our business</strong>? (Considering brand alignment and potential cost.)</p>
            </li>
          </ol>
          <p class="text-large">This allowed us to filter out less promising ideas and highlight areas that needed further exploration. </p>
          <p class="text-large">As our discovery progressed, we continuously updated these scores based on what we learned.</p>
        </Prose>
      </v-col>
      <v-col cols="12" md="6" order-md="1">
        <Figure src="/images/confusedcom-rewards/prioritising-ideas.webp" />
      </v-col>
    </v-row>
  </Section>

  <Section>
    <v-row align="center">
      <v-col cols="12" md="6" class="pe-md-10">
        <Prose>
          <h2>Targeted discovery to shape the direction</h2>
          <p class="text-large">Once we’d narrowed things down to four ideas, we moved into more focused discovery aimed at filling the gaps in what we didn’t know.</p>
          <p class="text-large">We were intentional about what we needed to learn, which made sure the research was directly feeding into how we’d design both the offer and the journey.</p>
          <p class="text-large">For the concept we progressed with, we focused on four areas:</p>
          <ul>
            <li>
              <p class="text-large"><strong>Technical feasibility:</strong> Working with engineering to understand constraints early</p>
            </li>
            <li>
              <p class="text-large"><strong>Customer value:</strong> Running focus groups to explore needs and test the idea</p>
            </li>
            <li>
              <p class="text-large"><strong>Business value:</strong> Using surveys to validate demand at scale</p>
            </li>
            <li>
              <p class="text-large"><strong>Viability:</strong> Light-touch forecasting to sense-check costs</p>
            </li>
          </ul>
          <p class="text-large">This approach helped us quickly understand what was realistic, what resonated, and where to focus. It meant that when we moved into design, we had a much clearer direction.</p>
        </Prose>
      </v-col>
      <v-col cols="12" md="6">
        <Figure src="/images/confusedcom-rewards/discovery-plan.webp" />
      </v-col>
    </v-row>
  </Section>

  <Section tone="muted">
    <v-row>
      <v-col cols="12" md="6" order-md="2" class="ps-md-10">
        <Prose>
          <h2>Testing &amp; shaping the offer</h2>
          <p class="text-large">To put our ideas in front of users, we ran three focus groups across the four shortlisted concepts. I created two branded mock-ups for each, making them feel like real offers rather than abstract ideas.</p>
          <p class="text-large">This was not just about testing appeal. It helped us understand how the offer should be presented, what resonated, and how people expected the experience to work.</p>
          <p class="text-large">One idea clearly stood out. A tiered, multi-product reward system with increasing value for repeat purchases and access to a wide range of brands.</p>
          <p class="text-large">Here’s what users responded to:</p>
          <ul>
            <li>
              <p class="text-large"><strong>Choice:</strong> With 150+ retailers, it felt flexible. “It’s like cash.”</p>
            </li>
            <li>
              <p class="text-large"><strong>Progression:</strong> Increasing rewards encouraged repeat behaviour</p>
            </li>
            <li>
              <p class="text-large"><strong>Simplicity:</strong> “There’s no thinking involved.” It was easy to understand</p>
            </li>
          </ul>
          <p class="text-large">It also highlighted what needed refining:</p>
          <ul>
            <li>
              <p class="text-large"><strong>Tier confusion:</strong> Users expected tiers to offer more than just progression, such as added perks or savings</p>
            </li>
          </ul>
        </Prose>
      </v-col>
      <v-col cols="12" md="6" order-md="1" class="d-flex flex-column ga-6">
        <Figure src="/images/confusedcom-rewards/focus-group-image.webp" />
        <v-row align="center" class="flex-grow-0">
          <v-col cols="12" sm="7">
            <Figure src="/images/confusedcom-rewards/1-tiered-rewards-bigger-rewards-introduction.webp" sizes="(max-width: 599px) 100vw, 30vw" />
          </v-col>
          <v-col cols="12" sm="5">
            <Figure src="/images/confusedcom-rewards/2-tiered-rewards-bigger-rewards-detail.webp" sizes="(max-width: 599px) 100vw, 20vw" />
          </v-col>
        </v-row>
        <Prose>
          <p>Example of the conversation stimulus shown during focus groups</p>
        </Prose>
      </v-col>
    </v-row>
  </Section>

  <Section narrow>
    <Prose>
      <h2>Validating the offer at scale</h2>
      <p class="text-large">Our quantitative research helped validate the broad appeal of the tiered offer, while also highlighting a few important concerns:</p>
      <ul>
        <li>
          <p class="text-large">Difficulty progressing: Users worried they would not use the service enough to earn meaningful rewards</p>
        </li>
        <li>
          <p class="text-large">Trust issues: Some felt the offer “sounds too good to be true,” pointing to a need for clear, trustworthy communication</p>
        </li>
      </ul>
      <p class="text-large">This stage also gave me a clearer picture before moving into wireframing. We learned how people preferred to redeem rewards, what they expected from the process, and how quick and simple it needed to feel.</p>
      <p class="text-large">All of this fed directly into the initial wireframes, helping ensure the experience was grounded in real user expectations.</p>
    </Prose>
  </Section>

  <Section tone="muted">
    <v-row align="center">
      <v-col cols="12" md="5" class="pe-md-10">
        <Prose>
          <h2>Mapping the journey &amp; wireframing</h2>
          <p class="text-large">With a clear direction in place, I moved into mapping out the end-to-end journey and creating wireframes.</p>
          <p class="text-large">As we were working with a new reward provider, it was important to align our experience with their technical setup from the start. I worked closely with engineering, our app team, and the rewards team to sense-check flows early and surface any constraints or gaps.</p>
        </Prose>
      </v-col>
      <v-col cols="12" md="7">
        <Figure src="/images/confusedcom-rewards/user-flow.webp" sizes="(max-width: 959px) 100vw, 60vw" />
      </v-col>
    </v-row>
  </Section>

  <Section>
    <v-row align="center">
      <v-col cols="12" md="7" order-md="2" class="ps-md-10">
        <Prose>
          <h2>Usability testing &amp; refinement</h2>
          <p class="text-large">Once we had a working prototype, I tested it with 10 users through Usertesting.com, focusing specifically on the redemption journey and overall usability. Branding and marketing were intentionally deprioritised at this stage so we could focus on how the experience worked.</p>
          <p class="text-large">The sessions revealed a few key areas to improve:</p>
          <ul>
            <li>
              <p class="text-large"><strong>Expectation of automation:</strong> Users expected rewards to be automatically applied. This led us to rethink how data was shared, removing the need for users to manually add rewards</p>
            </li>
            <li>
              <p class="text-large"><strong>Unclear progression:</strong> Users often missed that their next purchase would unlock a higher reward, prompting changes to better highlight progression</p>
            </li>
          </ul>
          <p class="text-large">After testing, I refined both the designs and the user flow, smoothing out friction points and making the journey as intuitive as possible. With the structure in place, I then moved on to defining the brand and messaging.</p>
        </Prose>
      </v-col>
      <v-col cols="12" md="5" order-md="1">
        <Figure src="/images/confusedcom-rewards/dashboard-concept-1.webp" :max-width="340" sizes="(max-width: 959px) 100vw, 340px">
          <p>An early dashboard wireframe we tested with users.</p>
        </Figure>
      </v-col>
    </v-row>
  </Section>

  <Section tone="inverse">
    <v-row align="center">
      <v-col cols="12" md="6" class="pe-md-10">
        <Prose>
          <h2>Branding the offer</h2>
          <p class="text-large">Next, I defined the visual style of the offer. We ran multiple UserTesting.com sessions, including five-second tests, to see what was memorable across our core marketing channels. This ensured the design worked in-app and in marketing.</p>
          <p class="text-large">Research showed “tiered” had negative connotations. Users wanted simplicity and immediate value, so we focused on clarity while building on <strong>Confused.com Rewards</strong>’ existing brand. Highlighting the wide range of redemption brands was also key.</p>
          <p class="text-large">This led to <strong>Rewards+</strong>, a visual style emphasising choice, with the tagline: <em>“Get rewards you’ll actually use, every time.”</em> Working closely with the brand team was critical, as pitching new ideas while staying on-brand required careful collaboration.</p>
        </Prose>
      </v-col>
      <v-col cols="12" md="6">
        <Figure src="/images/confusedcom-rewards/r-final-image-phone-included.webp" square />
        <Prose wide class="mt-4">
          <h3 style="text-align: center"><span class="text-white"><strong>Confused.com Rewards+</strong></span></h3>
        </Prose>
      </v-col>
    </v-row>

    <v-divider class="my-8" />

    <v-row align="center">
      <v-col cols="12" md="5" class="pe-md-10">
        <Prose>
          <h3>Unused branding ideas</h3>
          <p class="text-large">Each idea aimed to encapsulate Confused.com’s brand ethos, the lifting feeling that comes with ticking insurance off your to-do list.</p>
          <p class="text-large">However, our research revealed that these ideas focused too much on future progression and not enough on the here and now. Users cared more about the reward they’ll get now, not what they’ll get next year. </p>
        </Prose>
      </v-col>
      <v-col cols="12" md="7" class="d-flex flex-column ga-6">
        <Figure src="/images/confusedcom-rewards/rising-reward-concept.webp" sizes="(max-width: 959px) 100vw, 60vw" />
        <v-row class="flex-grow-0">
          <v-col cols="12" sm="6">
            <Figure src="/images/confusedcom-rewards/kerching-concept.webp" sizes="(max-width: 599px) 100vw, 30vw" />
          </v-col>
          <v-col cols="12" sm="6">
            <Figure src="/images/confusedcom-rewards/to-do-to-wohoo-concept.webp" sizes="(max-width: 599px) 100vw, 30vw" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </Section>

  <Section tone="muted">
    <Prose>
      <h2>Final designs</h2>
    </Prose>
    <v-row>
      <v-col cols="6" md="3">
        <Figure src="/images/confusedcom-rewards/wallet-screen-wallet.webp" square sizes="(max-width: 959px) 50vw, 300px" />
      </v-col>
      <v-col cols="6" md="3">
        <Figure src="/images/confusedcom-rewards/wallet-screen-m-s-gift-card.webp" square sizes="(max-width: 959px) 50vw, 300px" />
      </v-col>
      <v-col cols="6" md="3">
        <Figure src="/images/confusedcom-rewards/wallet-history.webp" square sizes="(max-width: 959px) 50vw, 300px" />
      </v-col>
      <v-col cols="6" md="3">
        <Figure src="/images/confusedcom-rewards/wallet-screen-choose-reward.webp" square sizes="(max-width: 959px) 50vw, 300px" />
      </v-col>
      <v-col cols="6" md="3">
        <Figure src="/images/confusedcom-rewards/sainsbury-s.webp" square sizes="(max-width: 959px) 50vw, 300px" />
      </v-col>
      <v-col cols="6" md="3">
        <Figure src="/images/confusedcom-rewards/email-20-reward.webp" square sizes="(max-width: 959px) 50vw, 300px" />
      </v-col>
      <v-col cols="6" md="3">
        <Figure src="/images/confusedcom-rewards/prices-page-banner.webp" square sizes="(max-width: 959px) 50vw, 300px" />
      </v-col>
      <v-col cols="6" md="3">
        <Figure src="/images/confusedcom-rewards/email-40-reward.webp" square sizes="(max-width: 959px) 50vw, 300px" />
      </v-col>
    </v-row>
  </Section>

  <Section tone="inverse">
    <Prose>
      <h2>The results:</h2>
    </Prose>
    <v-row>
      <v-col cols="12" md="4">
        <Panel tone="dark">
          <h4><span class="text-white">The impact on retention and acquisition:</span></h4>
          <p class="text-large"><span class="text-white">Quote to sale conversion increased by +5% from launch. </span></p>
          <p class="text-large"><span class="text-white">Rewards+ customers' retention rate is 28% higher than our existing Reward customers, and 42% higher than users who didn't claim any reward.</span></p>
          <p class="text-large"><span class="text-white">Rewards+ led to a <strong>5% increase in customers returning from non-paid channels</strong>. Many users are now redeeming rewards in our app and choosing to return to buy other products via this channel, rather than through paid search.</span></p>
        </Panel>
      </v-col>
      <v-col cols="12" md="4">
        <Panel tone="dark">
          <h4><span class="text-white">Our post-live survey of purchasers revealed:</span></h4>
          <p class="text-large"><span class="text-white">63% of respondents said Rewards+ had a major impact on their decision to buy their insurance.</span></p>
          <p class="text-large"><span class="text-white">78% of respondents would be much more likely to compare insurance with Confused.com in future because of Rewards+.</span></p>
          <p class="text-large"><span class="text-white">We also learned that 40% of respondents noticed the offer while comparing quotes.</span></p>
          <p class="text-large"></p>
        </Panel>
      </v-col>
      <v-col cols="12" md="4">
        <Panel tone="dark">
          <h4><span class="text-white">Product Density and Sales Frequency:</span></h4>
          <p class="text-large"><span class="text-white">Rewards+ customers are buying more products, more frequently, with a +1.5% increase across both metrics during the test period.</span></p>
          <p class="text-large"><span class="text-white">The retention trend suggests that the "more you buy, more you get" element of Rewards+ is actively encouraging subsequent purchases sooner.<br /></span></p>
          <p></p>
        </Panel>
      </v-col>
    </v-row>
  </Section>

  <NextProject />
</template>
