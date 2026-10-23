<script setup lang="ts">
/**
 * Contact form handled by Netlify Forms (submissions appear in the Netlify
 * dashboard and can be emailed on). Netlify finds the form in the pre-rendered
 * HTML at deploy time; we submit it with fetch so the page doesn't reload.
 * The field `name`s are what Netlify stores, so don't rename them.
 */
import { reactive, ref } from "vue";
import type { SubmitEventPromise } from "vuetify";
import { mdiSend } from "@mdi/js";

const FORM_NAME = "contact";
const fields = reactive({ firstName: "", lastName: "", email: "", message: "", "bot-field": "" });
const status = ref<"idle" | "sending" | "sent" | "error">("idle");

const required = (v: string) => !!v.trim() || "Required";
const email = (v: string) => /^\S+@\S+\.\S+$/.test(v) || "Enter a valid email address";

async function submit(event: SubmitEventPromise) {
  const { valid } = await event;
  if (!valid) return;
  status.value = "sending";
  try {
    const body = new URLSearchParams({ "form-name": FORM_NAME, ...fields }).toString();
    const res = await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
    });
    if (!res.ok) throw new Error(String(res.status));
    status.value = "sent";
  } catch {
    status.value = "error";
  }
}
</script>

<template>
  <v-card class="contact-form">
    <v-alert v-if="status === 'sent'" type="success" variant="tonal" role="status" title="Thank you!">
      Your message is on its way. I’ll get back to you soon.
    </v-alert>
    <v-form
      v-else
      :name="FORM_NAME"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      validate-on="submit lazy"
      @submit.prevent="submit"
    >
      <input type="hidden" name="form-name" :value="FORM_NAME" />
      <p class="visually-hidden">
        <label>Don’t fill this out: <input v-model="fields['bot-field']" name="bot-field" tabindex="-1" autocomplete="off" /></label>
      </p>

      <v-row dense>
        <v-col cols="12" sm="6">
          <v-text-field v-model="fields.firstName" name="firstName" label="First name" autocomplete="given-name" :rules="[required]" required />
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field v-model="fields.lastName" name="lastName" label="Last name" autocomplete="family-name" :rules="[required]" required />
        </v-col>
        <v-col cols="12">
          <v-text-field v-model="fields.email" name="email" type="email" label="Email" autocomplete="email" :rules="[required, email]" required />
        </v-col>
        <v-col cols="12">
          <v-textarea v-model="fields.message" name="message" label="Message" rows="5" auto-grow :rules="[required]" required />
        </v-col>
      </v-row>

      <v-alert v-if="status === 'error'" type="error" variant="tonal" class="mb-4">
        Sorry, something went wrong sending your message. Please try again.
      </v-alert>

      <v-btn type="submit" color="primary" :loading="status === 'sending'" :append-icon="mdiSend" block>Send</v-btn>
      <p class="contact-form__note">All fields are required.</p>
    </v-form>
  </v-card>
</template>

<style>
@layer site {
  .contact-form.v-card {
    padding: clamp(1.25rem, 1rem + 1.5vw, 2.5rem);
    border: 1px solid rgb(0 0 0 / 0.08);
    box-shadow: 0 18px 40px -24px rgb(0 0 0 / 0.25);
  }
  .contact-form__note {
    margin: 0.75rem 0 0;
    font-size: var(--fs-small);
    color: var(--ink-soft);
    text-align: center;
  }
}
</style>
