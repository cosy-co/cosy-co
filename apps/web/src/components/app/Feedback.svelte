<script lang="ts">
  import Icon from '@iconify/svelte';

  interface Feedback {
    name: string;
    title: string;
    avatar: string;
    content: string;
    rating: number;
  }

  export let feedback: Feedback;
</script>

<div class="rounded-3xl relative h-full bg-white p-5 pb-10">
  <div class="flex">
    <img
      src={feedback.avatar}
      alt="Feedback 1 avatar"
      class="bg-default-active rounded-3xl h-10 w-10 text-xs overflow-hidden"
    />
    <div class="py-0 ml-3">
      <p class="font-bold">{feedback.name}</p>
      <p class="text-text-secondary -mt-1 text-sm">
        {feedback.title}
      </p>
    </div>
  </div>
  <p class="text-sm my-3">
    {feedback.content}
  </p>

  <div class="flex absolute bottom-5">
    {#each Array(feedback.rating) as _}
      <Icon icon="bx:bx-star" class="h-5 w-5 text-orange-600" />
    {/each}
    {#each Array(5 - feedback.rating) as _}
      <Icon icon="bx:bx-star" class="h-5 w-5 text-gray-300" />
    {/each}
  </div>
</div>
