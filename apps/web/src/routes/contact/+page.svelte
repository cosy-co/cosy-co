<script lang="ts">
  import Icon from '@iconify/svelte';
  import { Button, Meta } from '@lib/components/index';
  import api from '@lib/utils/api';

  const baseInputStyle =
    'block w-full bg-black/30 hover:bg-black/30 focus:bg-black/50 border-transparent p-3 rounded-md focus:ring text-white transition duration-200 border border-border focus:border-secondary ring-secondary/40';

  let name = '';
  let email = '';
  let phone = '';
  let message = '';

  const onSubmit = async (event: Event) => {
    event.preventDefault();

    try {
      await api.submitContactForm({
        name,
        email,
        phone,
        message,
      });

      alert('success');
    } catch (error) {
      console.error(error);
      alert('error');
    }
  };
</script>

<Meta title="Contact Us" />

<div class="2xl:py-32 lg:py-20 xl:py-32 p-0 bg-[url(/contact/background.jpg)]">
  <div class="max-w-5xl mx-auto lg:w-11/12 md:flex lg:rounded-3xl">
    <div
      class="px-10 py-10 text-white md:w-1/3 md:px-5 lg:px-10 md:py-20 bg-black/40 backdrop-blur-md lg:rounded-l-md"
    >
      <h3 class="text-2xl font-bold">Contact Us</h3>
      <!-- <div class="flex mt-5">
        <div class="p-2 mr-3 rounded-3xl bg-black/30 h-9 w-9">
          <Icon icon="mdi:phone" class="w-5 h-5" />
        </div>
        <p class="mt-1.5"><b>Phone:</b> +64 27 000 000</p>
      </div> -->

      <div class="flex mt-5">
        <div class="p-2 mr-3 rounded-3xl bg-black/30 h-9 w-9">
          <Icon icon="eva:email-outline" class="w-5 h-5" />
        </div>
        <p class="mt-1.5">
          <b>Email:</b>
          <a
            href="mailto:slekupvimplyrataqq@protonmail.com"
            class="break-all hover:underline"
            >slekupvimplyrataqq@protonmail.com</a
          >
        </p>
      </div>

      <div class="flex mt-5">
        <div class="p-2 mr-3 rounded-3xl bg-black/30 h-9 w-9">
          <Icon icon="gg:website" class="w-5 h-5" />
        </div>
        <p class="mt-1.5">
          <b>Website:</b> <a href="/" class="hover:underline">cosyco.nz</a>
        </p>
      </div>
    </div>

    <div
      class="px-10 pt-20 pb-16 md:w-2/3 lg:rounded-r-md bg-black/20 backdrop-blur-md"
    >
      <h3 class="text-2xl font-bold text-white">Get In Touch</h3>
      <form class="mt-5" on:submit={onSubmit}>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          maxlength="100"
          minlength="3"
          required={true}
          class={`${baseInputStyle} mt-5`}
          bind:value={name}
        />

        <div class="flex">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email Address"
            maxlength="100"
            minlength="3"
            required={true}
            class={`${baseInputStyle} mt-5 mr-2.5`}
            bind:value={email}
          />

          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="Phone Number"
            maxlength="12"
            minlength="5"
            required={false}
            class={`${baseInputStyle} mt-5 ml-2.5`}
            bind:value={phone}
          />
        </div>

        <textarea
          id="message"
          name="message"
          placeholder="Your message..."
          maxlength="500"
          minlength="10"
          rows="5"
          required={true}
          class={`${baseInputStyle} mt-5`}
          bind:value={message}
        />

        <div class="mt-8">
          <Button size="lg" style="success"
            >Send Message <Icon
              icon="iconoir:arrow-tr"
              class="inline-block h-5 w-5 -mt-0.5 ml-1"
            /></Button
          >
        </div>
      </form>
    </div>
  </div>
</div>
