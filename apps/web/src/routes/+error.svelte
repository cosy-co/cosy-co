<script lang="ts">
  import { page } from '$app/stores';
</script>

<div class="my-40 text-center max-w-3xl mx-auto w-11/12">
  <h1 class="font-bold text-4xl">{$page.status}</h1>
  <h1 class="font-bold text-4xl">{$page.error?.message}</h1>
</div>
