import {
  afterEach, describe, expect, it, vi,
} from "vitest";
import { flushPromises } from "@vue/test-utils";
import { renderWithApp } from "@/test/mount.ts";
import ContactPage from "./ContactPage.vue";

/*
 * The contact page is the one place the site takes input, and it relies on
 * Netlify Forms finding the form in the prerendered HTML. These tests render
 * the real Vuetify fields so a Vuetify upgrade that changes the markup fails here.
 */

const message = {
  firstName: "Ada", lastName: "Lovelace", email: "ada@example.com", message: "Hello Tom",
};

async function renderPage() {
  const wrapper = await renderWithApp(ContactPage, { path: "/contact" });
  const form = wrapper.find("form");
  return { wrapper, form };
}

async function fillAndSend(form: Awaited<ReturnType<typeof renderPage>>["form"]) {
  for (const [name, value] of Object.entries(message)) await form.find(`[name="${name}"]`).setValue(value);
  await form.trigger("submit");
  await flushPromises();
  await vi.waitFor(() => expect(fetch).toHaveBeenCalled());
  await flushPromises();
}

/** Text of every live alert region (screen readers announce these). */
const alerts = (wrapper: Awaited<ReturnType<typeof renderPage>>["wrapper"]) => wrapper.findAll("[role=\"alert\"]").map((a) => a.text());

afterEach(() => {
  vi.unstubAllGlobals();
  document.body.innerHTML = "";
});

describe("Contact page form", () => {
  it("is marked up for Netlify Forms", async () => {
    const { form } = await renderPage();

    expect(form.attributes()).toMatchObject({
      name: "contact", method: "POST", "data-netlify": "true", "netlify-honeypot": "bot-field",
    });
    expect(form.find("input[type=\"hidden\"][name=\"form-name\"]").element.getAttribute("value")).toBe("contact");
    expect(form.find("input[name=\"bot-field\"]").exists()).toBe(true);
    for (const name of ["firstName", "lastName", "email"]) expect(form.find(`input[name="${name}"]`).exists(), name).toBe(true);
    expect(form.find("textarea[name=\"message\"]").exists()).toBe(true);
  });

  it("sends the message to Netlify and thanks the visitor", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue(new Response(null, { status: 200 })));
    const { wrapper, form } = await renderPage();

    await fillAndSend(form);

    const [url, init] = vi.mocked(fetch).mock.calls[0];
    expect(url).toBe("/");
    expect(init).toMatchObject({ method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" } });
    expect(Object.fromEntries(new URLSearchParams(init!.body as string))).toEqual({
      "form-name": "contact",
      ...message,
      "bot-field": "",
    });
    expect(wrapper.text()).toContain("Thank you!");
    expect(wrapper.find("form").exists()).toBe(false);
  });

  it("asks the visitor to try again when Netlify rejects the message", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue(new Response(null, { status: 500 })));
    const { wrapper, form } = await renderPage();

    await fillAndSend(form);

    expect(alerts(wrapper)).toContainEqual(expect.stringContaining("Sorry, something went wrong sending your message"));
    expect(wrapper.find("form").exists()).toBe(true);
  });

  it("asks the visitor to try again when the network fails", async () => {
    vi.stubGlobal("fetch", vi.fn().mockRejectedValue(new TypeError("Failed to fetch")));
    const { wrapper, form } = await renderPage();

    await fillAndSend(form);

    expect(alerts(wrapper)).toContainEqual(expect.stringContaining("Sorry, something went wrong sending your message"));
  });
});
