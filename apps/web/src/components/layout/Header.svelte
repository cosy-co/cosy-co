<script lang="ts">
  import { Button } from '@components/index';

  import { page } from '$app/stores';

  const links = [
    {
      name: 'Home',
      href: '/'
    },
    {
      name: 'About',
      href: '/about'
    },
    {
      name: 'Contact',
      href: '/contact'
    }
  ];
</script>

<div
  class="h-20 left-0 w-full top-0 border-header-border border-b bg-header text-header-text shadow-sm"
>
  <div class="flex my-2.5 justify-between max-w-7xl mx-auto w-11/12">
    <!-- Links -->
    <div class="flex">
      {#each links as link}
        <a
          href={link.href}
          class={`block px-2 py-3 ${$page.route.id === link.href ? 'font-bold' : 'font-medium'}`}
          >{link.name}</a
        >
      {/each}
    </div>

    <!-- Title -->
    <a href="/" class="font-bold text-3xl">Cozy Co</a>

    <!-- Contact -->
    <a href="/contact"><Button>Contact</Button></a>
  </div>
</div>
