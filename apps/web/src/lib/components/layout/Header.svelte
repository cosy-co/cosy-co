<script lang="ts">
  import { Button } from '@lib/components/index';
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

<div class="relative block w-full h-20" />

<div
  class="fixed top-0 left-0 z-40 w-full border-b shadow-sm max-h-20 min-h-20 border-header-border bg-header text-header-text"
>
  <div class="flex justify-between w-11/12 py-5 mx-auto max-w-7xl">
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
    <a href="/" class="absolute flex -translate-x-1/2 left-1/2">
      <img src="/logo.png" alt="Logo" class="w-10 h-10 rounded-lg" />
      <h1 class="font-bold text-3xl ml-3 mt-0.5 hidden md:block">Cosy Co</h1>
    </a>

    <!-- Contact -->
    <a href="/contact"><Button outline={true}>Contact</Button></a>
  </div>
</div>
