<script lang="ts">
  import { page } from '$app/stores';
  import { Meta } from '@components/index';
</script>

<Meta title={`${$page.status} - ${$page.error?.message}`} />

<div class="my-40 text-center max-w-3xl mx-auto w-11/12">
  <h1 class="font-bold text-5xl">{$page.status}</h1>
  <h1 class="font-bold text-4xl mt-2 text-text-secondary">{$page.error?.message}</h1>
</div>
