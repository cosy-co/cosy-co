<script lang="ts">
  import { Button, Feedback, Meta } from '@components/index';
  import Icon from '@iconify/svelte';

  interface Feedback {
    name: string;
    title: string;
    avatar: string;
    content: string;
    rating: number;
  }

  const feedbackData: Feedback[] = [
    {
      name: 'Sarah Thompson',
      title: 'Fitness Enthusiast',
      avatar: '/home/feedback-1.jpg',
      content: `I absolutely love Cozy Co's Wheat Bag! It's become my go-to for relieving muscle soreness after workouts. The natural warmth and soft fabric provide instant comfort, and it's so easy to use. Highly recommended.`,
      rating: 4,
    },
    {
      name: 'Mark Davis',
      title: 'Personal Trainer',
      avatar: '/home/feedback-2.jpg',
      content: `Cozy Co's Wheat Bag has been a game-changer for my chronic back pain. The heat therapy works wonders, and the quality of the product is impressive. Thank you, Cozy Co!`,
      rating: 5,
    },
    {
      name: 'Emily Johnson',
      title: 'Happy Customer',
      avatar: '/home/feedback-3.jpg',
      content: `I received Cozy Co's Wheat Bag as a gift, and it has quickly become my favorite relaxation companion. The soothing warmth is incredibly comforting, especially during chilly evenings. I can't thank Cozy Co enough for this delightful product!`,
      rating: 4,
    },
  ];

  import { Splide, SplideSlide } from '@splidejs/svelte-splide';
  import '@splidejs/svelte-splide/css';
</script>

<Meta title="Home" />

<!-- Main banner section -->
<div class="relative py-24 lg:py-32 xl:py-40 w-full">
  <img
    src="/home/banner-1.jpg"
    alt="Home banner"
    class="absolute top-0 left-0 w-full h-full object-cover"
  />
  <div class="max-w-7xl mx-auto w-10/12 text-white drop-shadow-lg">
    <div class="max-w-2xl relative">
      <h1 class="font-extrabold text-4xl sm:text-5xl lg:text-6xl">
        Embrace the Warmth,<br />Embrace Cozy Co!
      </h1>
      <p class="lg:text-lg my-10">
        Where comfort meets self-care. Discover our premium wheat bags and
        indulgent products designed to help you unwind, relax, and rejuvenate.
        Treat yourself to ultimate coziness and embrace a lifestyle of
        well-being.
      </p>
      <Button size="lg">Explore More</Button>
    </div>
  </div>
</div>

<!-- Wheat bags section -->
<div
  class="max-w-7xl mx-auto w-10/12 md:flex justify-center my-20 md:my-32 lg:my-40"
>
  <div class="mr-5 lg:mr-10">
    <img
      src="/home/image-1.jpg"
      alt="Wheat bag"
      class="min-w-20 min-h-20 max-w-20 max-h-20 md:max-w-60 md:max-h-60 md:min-w-60 md:min-h-60 lg:min-w-96 lg:min-h-96 lg:max-w-96 lg:max-h-96 object-cover mx-0 md:mx-0"
    />
  </div>
  <div class="ml-5 lg:ml-10 py-4 lg:py-12 max-w-lg mt-2 md:mt-0">
    <h1 class="font-bold text-2xl">High Quality Wheat Bags</h1>
    <div class="h-1 rounded-lg bg-secondary w-40 my-5" />
    <p class="text-sm">
      A natural remedy for soothing relief. Made from 100% linen, filled with
      treated wheat grains, it harnesses heat therapy to alleviate aches,
      cramps, and headaches. Simply heat in the microwave for instant warmth.
      With a removable, washable cover, it's easy to maintain. Its compact shape
      molds to your body for targeted comfort. Embrace natural, drug-free
      comfort with our Wheat Bag, providing relaxation and relief in seconds.
    </p>

    <div class="mt-5">
      <div class="flex mt-2">
        <div class="p-1.5 bg-orange-600/20 h-6 w-6 rounded-3xl">
          <Icon icon="mingcute:check-fill" class="h-3 w-3 text-orange-600" />
        </div>
        <p class="mt-0.5 ml-3 text-sm">
          100% linen, filled with treated wheat grains
        </p>
      </div>
      <div class="flex mt-2">
        <div class="p-1.5 bg-orange-600/20 h-6 w-6 rounded-3xl">
          <Icon icon="mingcute:check-fill" class="h-3 w-3 text-orange-600" />
        </div>
        <p class="mt-0.5 ml-3 text-sm">Easy to use and maintain</p>
      </div>
      <div class="flex mt-2">
        <div class="p-1.5 bg-orange-600/20 h-6 w-6 rounded-3xl">
          <Icon icon="mingcute:check-fill" class="h-3 w-3 text-orange-600" />
        </div>
        <p class="mt-0.5 ml-3 text-sm">Completely natural ingredients</p>
      </div>
    </div>
  </div>
</div>

<!-- Feedback section -->
<div class="max-w-7xl mx-auto w-10/12 my-20 md:my-32 lg:my-40">
  <div class="text-center bg-default shadow-inner rounded-3xl p-5 sm:p-10">
    <p class="text-rose-500 font-bold">Customer Love</p>
    <h3 class="font-bold px-2 text-xl sm:text-3xl mt-2">
      Hear It From Our Customers
    </h3>
    <p
      class="text-xs sm:text-sm max-w-md mx-auto text-text-secondary mt-2 sm:mt-5"
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus amet
      quaerat libero modi. Minus amet quaerat libero modi.
    </p>
    <div class="mt-5 sm:mt-10 text-left">
      <Splide
        aria-label="Feedback"
        options={{
          type: 'loop',
          perPage: 3,
          perMove: 1,
          arrows: false,
          rewind: true,
          gap: '1rem',
          breakpoints: {
            640: {
              perPage: 1,
            },
            1024: {
              perPage: 2,
            },
          },
        }}
      >
        {#each feedbackData as feedback}
          <SplideSlide>
            <div class="pb-8 h-full">
              <Feedback {feedback} />
            </div>
          </SplideSlide>
        {/each}
      </Splide>
    </div>
  </div>
</div>
