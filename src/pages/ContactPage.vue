<script setup lang="ts">
import { usePageMeta } from "@/lib/meta.ts";

usePageMeta({
  title: "Contact",
  description: "Get in touch with Tom Allen, a Senior Product Designer from Bristol, UK.",
});
</script>

<template>
  <Section tone="muted">
    <v-row align="start">
      <v-col cols="12" md="5" class="pe-md-12">
        <Prose>
          <p class="eyebrow">Contact</p>
          <h3>Get in touch! ✌️</h3>
          <p class="text-large">Whether it’s a role, a project or just a chat about design, I’d love to hear from you.</p>
          <p>Bristol, UK</p>
        </Prose>
      </v-col>
      <v-col cols="12" md="7">
        <ContactForm />
      </v-col>
    </v-row>
  </Section>
</template>
