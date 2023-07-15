<script lang="ts">
  type Style = 'primary' | 'secondary' | 'danger' | 'success' | 'warning';
  type Size = 'sm' | 'md' | 'lg';

  export let style: Style = 'primary';
  export let size: Size = 'md';

  const baseStyle = `font-medium rounded-lg border text-sm ${
    size === 'sm' ? 'text-sm' : size === 'md' ? 'text-base px-5 py-2' : 'px-7 py-3'
  }`;
</script>

{#if style === 'primary'}
  <button
    class={`${baseStyle} bg-primary hover:bg-primary-hover active:bg-primary-active text-text-button border-transparent transition duration-200`}
  >
    <slot />
  </button>
{:else if style === 'secondary'}
  <button class={`${baseStyle} bg-primary active:bg-gray-400`}>
    <slot />
  </button>
{:else if style === 'danger'}
  <button class={`${baseStyle} bg-primary active:bg-gray-400`}>
    <slot />
  </button>
{:else if style === 'success'}
  <button class={`${baseStyle} bg-primary active:bg-gray-400`}>
    <slot />
  </button>
{:else if style === 'warning'}
  <button class={`${baseStyle} bg-primary active:bg-gray-400`}>
    <slot />
  </button>
{/if}
