<script setup>
import {ref} from "vue";
import axios from "axios";

const loading = ref(false);
const success = ref(false);
const errored = ref(false);

const form = ref({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const sendMessage = () => {
  loading.value = true;
  axios
    .post("/messages", {
      name: name.value,
      email: email.value,
      phone: phone.value,
      message: message.value,
    })
    .then((response) => {
      success.value = true;
      errored.value = false;
    })
    .catch((error) => {
      errored.value = true;
    })
    .finally(() => {
      loading.value = false;
    });
};

async function submit(form) {
  console.log(form);
}
</script>

<template>
  <div>
    <div id="anfahrt">
      <h1 id="contact" class="font-playfair text-3xl md:text-5xl text-center mb-5 font-bold">
        Anfahrt & Kontakt
      </h1>
      <h3 class="font-playfair text-lg md:text-2xl text-center mb-8">
        So kommen Sie zu uns:
      </h3>
      <div
      class="flex md:flex-row flex-col justify-center justify-items-center md:py-5">
      <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2690.0031939493424!2d12.895706476880653!3d47.60662757118986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4776f20c110fe40f%3A0x6d4ac9750b3f2533!2sAm%20Bartmannfeld%205%2C%2083486%20Ramsau%20bei%20Berchtesgaden!5e0!3m2!1sde!2sde!4v1688647858455!5m2!1sde!2sde"
      class="w-full md:w-1/2 h-[550px]"
      referrerpolicy="no-referrer-when-downgrade"></iframe>
      <div class="bg-[#4F604B] w-full md:w-1/2 p-7">
        <h1 class="text-white md:text-2xl py-5 font-raleway">Kontakt:</h1>
        
        <div class="font-raleway">
          <div
          v-if="success"
          class="rounded bg-emerald-900 text-white text-lg p-4">
          Ihre Nachricht wurde erfolgreich versendet. Wir melden uns so schnell wie möglich.
        </div>
        <form @submit.prevent="submit(form)" class="grid grid-cols-1 gap-y-6">
          <div v-if="errored" class="rounded bg-red-200 text-lg p-4">
            Leider hat es nicht geklappt. Haben Sie alle Felder ausgefüllt? Schreiben Sie uns doch bitte eine eMail an: fewo.am.kurpark@gmx.de
          </div>
          <div>
            <label for="full_name" class="sr-only">Ihr Name</label>
            <div class="relative rounded-md shadow-sm">
              <input
              v-model="form.name"
              required
              name="name"
              id="full_name"
              class="form-input block w-full py-3 px-4 placeholder-gray-500 transition ease-in-out duration-150"
              placeholder="Ihr Name" />
            </div>
          </div>
          <div>
            <label for="email" class="sr-only">eMail Adresse</label>
            <div class="relative rounded-md shadow-sm">
              <input
              required
              v-model="form.email"
              name="email"
              id="email"
              type="email"
              class="form-input block w-full py-3 px-4 placeholder-gray-500 transition ease-in-out duration-150"
              placeholder="eMail-Adresse" />
            </div>
          </div>
          <div>
            <label for="subject" class="sr-only">Titel</label>
            <div class="relative rounded-md shadow-sm">
              <input
              v-model="form.subject"
              name="subject"
              id="subject"
              class="form-input block w-full py-3 px-4 placeholder-gray-500 transition ease-in-out duration-150"
              placeholder="Titel" />
            </div>
          </div>
          <div>
            <label for="message" class="sr-only">Ihre Nachricht</label>
            <div class="relative rounded-md shadow-sm">
              <textarea
              required
              v-model="form.message"
              name="message"
              id="message"
              rows="4"
              class="form-input block w-full py-3 px-4 placeholder-gray-500 transition ease-in-out duration-150"
              placeholder="Ihre Nachricht"></textarea>
            </div>
          </div>
          <div class="">
            <span class="inline-flex rounded-md shadow-sm">
              <button
              type="submit"
              class="inline-flex justify-center py-3 px-6 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-[#700304] hover:bg-[#d28002] focus:outline-none focus:border-[#d28002] focus:shadow-outline-indigo active:bg-[#d28002] transition duration-150 ease-in-out">
              {{ loading ? "Sending Message..." : "Absenden" }}
            </button>
          </span>
        </div>
      </form>
    </div>
  </div>
</div>
</div>
</div>
</template>
