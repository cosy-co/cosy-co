<script lang="ts">
  import { Button, Meta } from '@components/index';
  import Icon from '@iconify/svelte';

  const baseInputStyle =
    'block w-full p-3 rounded-md focus:ring transition duration-200 border border-border focus:border-primary/75 ring-primary/30 hover:border-primary/50';

  const onSubmit = (event: Event) => {
    event.preventDefault();

    alert('Message sent!');
  };
</script>

<Meta title="Contact Us" />

<div class="2xl:py-32 lg:py-20 p-0 bg-default">
  <div class="max-w-5xl mx-auto lg:w-11/12 md:flex lg:rounded-3xl lg:shadow-lg">
    <div
      class="w-1/3 px-10 py-20 bg-secondary lg:border border-border border-r-0 lg:rounded-l-3xl text-white"
    >
      <h3 class="font-bold text-2xl">Contact Us</h3>
      <div class="mt-5 flex">
        <div class="rounded-3xl bg-white/20 p-2 mr-3">
          <Icon icon="mdi:phone" class="h-5 w-5" />
        </div>
        <p class="mt-1.5"><b>Phone:</b> +64 27 000 000</p>
      </div>
      <div class="mt-5 flex">
        <div class="rounded-3xl bg-white/20 p-2 mr-3">
          <Icon icon="eva:email-outline" class="h-5 w-5" />
        </div>
        <p class="mt-1.5">
          <b>Email:</b>
          <a href="mailto:business@cozyco.nz" class="hover:underline">business@cozyco.nz</a>
        </p>
      </div>
      <div class="mt-5 flex">
        <div class="rounded-3xl bg-white/20 p-2 mr-3">
          <Icon icon="gg:website" class="h-5 w-5" />
        </div>
        <p class="mt-1.5"><b>Website:</b> <a href="/" class="hover:underline">cozyco.nz</a></p>
      </div>
    </div>

    <div class="w-2/3 px-10 py-20 lg:border border-border lg:rounded-r-3xl bg-background">
      <h3 class="font-bold text-2xl">Get In Touch</h3>
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
        />

        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email Address"
          maxlength="100"
          minlength="3"
          required={true}
          class={`${baseInputStyle} mt-5`}
        />

        <textarea
          id="message"
          name="message"
          placeholder="Your message..."
          maxlength="500"
          minlength="10"
          required={true}
          class={`${baseInputStyle} mt-5`}
        />

        <div class="mt-8">
          <Button size="lg"
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
