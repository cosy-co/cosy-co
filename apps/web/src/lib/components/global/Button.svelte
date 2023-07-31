<script lang="ts">
  type Style =
    | 'primary'
    | 'secondary'
    | 'default'
    | 'danger'
    | 'success'
    | 'warning';
  type Size = 'sm' | 'md' | 'lg';

  export let style: Style = 'primary';
  export let size: Size = 'md';
  export let outline = false;

  const baseStyle = `font-semibold rounded-md border text-sm transition duration-200 ${
    size === 'sm'
      ? 'text-sm'
      : size === 'md'
      ? 'text-base px-5 py-2'
      : 'px-7 py-3'
  }`;
</script>

{#if style === 'primary' && outline}
  <button
    class={`${baseStyle} hover:bg-primary/10 active:bg-primary/20 text-primary border-primary`}
  >
    <slot />
  </button>
{:else if style === 'primary' && !outline}
  <button
    class={`${baseStyle} bg-primary hover:bg-primary-hover active:bg-primary-active text-text-button border-transparent`}
  >
    <slot />
  </button>
{:else if style === 'secondary' && outline}
  <button
    class={`${baseStyle} hover:bg-secondary/10 active:bg-secondary/20 text-secondary border-secondary`}
  >
    <slot />
  </button>
{:else if style === 'secondary' && !outline}
  <button
    class={`${baseStyle} bg-secondary hover:bg-secondary-hover active:bg-secondary-active text-text-button border-transparent`}
  >
    <slot />
  </button>
{:else if style === 'default' && outline}
  <button
    class={`${baseStyle} hover:bg-default/10 active:bg-default/20 text-text border-default`}
  >
    <slot />
  </button>
{:else if style === 'default' && !outline}
  <button
    class={`${baseStyle} bg-default hover:bg-default-hover active:bg-default-active text-text border-transparent`}
  >
    <slot />
  </button>
{:else if style === 'success' && outline}
  <button
    class={`${baseStyle} hover:bg-success/10 active:bg-success/20 text-success border-success`}
  >
    <slot />
  </button>
{:else if style === 'success' && !outline}
  <button
    class={`${baseStyle} bg-success hover:bg-success-hover active:bg-success-active text-text-button border-transparent`}
  >
    <slot />
  </button>
{:else if style === 'warning' && outline}
  <button
    class={`${baseStyle} hover:bg-warning/10 active:bg-warning/20 text-warning border-warning`}
  >
    <slot />
  </button>
{:else if style === 'warning' && !outline}
  <button
    class={`${baseStyle} bg-warning hover:bg-warning-hover active:bg-warning-active text-text-button border-transparent`}
  >
    <slot />
  </button>
{:else if style === 'danger' && outline}
  <button
    class={`${baseStyle} hover:bg-danger/10 active:bg-danger/20 text-danger border-danger`}
  >
    <slot />
  </button>
{:else if style === 'danger' && !outline}
  <button
    class={`${baseStyle} bg-danger hover:bg-danger-hover active:bg-danger-active text-text-button border-transparent`}
  >
    <slot />
  </button>
{/if}
