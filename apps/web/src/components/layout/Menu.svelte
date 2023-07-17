<script lang="ts">
  import { page } from '$app/stores';
  import Icon from '@iconify/svelte';

  interface Link {
    name: string;
    href: string;
  }

  export let links: Link[] = [];

  let open = false;

  const openMenu = () => {
    open = true;
  };

  const closeMenu = () => {
    open = false;
  };
</script>

<!-- Menu button -->
<div class="my-0.5 md:hidden">
  <button
    class="p-2 rounded-3xl hover:bg-default-hover active:bg-default-active h-10 w-10"
    on:click={openMenu}
  >
    <Icon icon="mingcute:menu-fill" class="h-6 w-6" />
  </button>
</div>

<!-- Background overlay -->
<div
  class={`fixed top-0 left-0 h-screen w-screen md:hidden bg-black/60 z-40 backdrop-blur-sm transition-all duration-500 ${
    !open && 'invisible opacity-0'
  }`}
  on:click={closeMenu}
  on:keydown={closeMenu}
  aria-hidden={!open}
/>

<!-- Menu content -->
<div
  class={`fixed top-0 left-0 h-screen min-w-60 md:hidden max-w-60 bg-background z-50 transition duration-500 ${
    !open && '-translate-x-full opacity-0'
  }`}
>
  <!-- Menu header -->
  <div class="h-16 px-5 border-b border-border flex py-3 justify-between">
    <a href="/"><h1 class="font-bold text-xl py-2">Cozy Co</h1></a>

    <button
      class="p-2 rounded-3xl hover:bg-default-hover active:bg-default-active h-10 w-10"
      on:click={closeMenu}
    >
      <Icon icon="mdi:close" class="h-6 w-6" />
    </button>
  </div>

  <!-- Links -->
  <div class="py-5 px-5">
    {#each links as link}
      <a
        href={link.href}
        class={`block relative rounded-md py-3 px-5 font-medium ${
          $page.route.id === link.href
            ? 'bg-primary text-white my-2'
            : 'text-text-secondary hover:bg-default-hover active:bg-default-active transition duration-200'
        }`}
        on:click={closeMenu}
      >
        {link.name}
      </a>
    {/each}
  </div>
</div>
