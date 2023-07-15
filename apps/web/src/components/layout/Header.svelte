<script lang="ts">
  import { Button } from '@components/index';

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

<div class="h-16 left-0 w-full top-0 border border-gray-300">
  <div class="flex justify-between max-w-7xl mx-auto w-11/12">
    <div class="flex my-2">
      {#each links as link, i}
        <a href={link.href} class="block font-medium px-2 py-3">{link.name}</a>
      {/each}
    </div>
    <a href="/" class="font-bold text-3xl">Cozy Co</a>
    <Button>Cart</Button>
  </div>
</div>
