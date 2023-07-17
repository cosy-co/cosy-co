<script lang="ts">
  import { Button } from '@components/index';
  import Menu from './Menu.svelte';

  import { page } from '$app/stores';

  interface Link {
    name: string;
    href: string;
  }

  const links: Link[] = [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'About',
      href: '/about',
    },
    {
      name: 'Contact',
      href: '/contact',
    },
  ];
</script>

<div class="relative h-20 w-full block" />

<div
  class="max-h-20 min-h-20 left-0 z-40 w-full fixed top-0 border-header-border border-b bg-header text-header-text shadow-sm"
>
  <div class="flex py-5 justify-between max-w-7xl mx-auto w-11/12">
    <!-- Links -->
    <div class="hidden md:flex">
      {#each links as link}
        <a
          href={link.href}
          class={`block mr-8 py-2 text-base ${
            $page.route.id === link.href
              ? 'font-extrabold'
              : 'font-medium text-text-secondary'
          }`}>{link.name}</a
        >
      {/each}
    </div>

    <!-- Menu (mobile only) -->
    <Menu {links} />

    <!-- Title -->
    <a href="/" class="flex absolute left-1/2 -translate-x-1/2">
      <img src="/logo.png" alt="Logo" class="h-10 w-10 rounded-lg" />
      <h1 class="font-bold text-3xl ml-3 mt-0.5 hidden md:block">Cozy Co</h1>
    </a>

    <!-- Contact -->
    <a href="/contact"><Button outline={true}>Contact</Button></a>
  </div>
</div>
