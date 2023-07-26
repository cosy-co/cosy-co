<script lang="ts">
  import { Button, Feedback, Meta } from '@components/index';
  import Icon from '@iconify/svelte';

  interface IFeedback {
    name: string;
    title: string;
    avatar: string;
    content: string;
    rating: number;
  }

  const feedbackData: IFeedback[] = [
    {
      name: 'Sarah Thompson',
      title: 'Fitness Enthusiast',
      avatar: '/home/feedback-1.jpg',
      content: `I absolutely love Cosy Co's Wheat Bag! It's become my go-to for relieving muscle soreness after workouts. The natural warmth and soft fabric provide instant comfort, and it's so easy to use. Highly recommended.`,
      rating: 4,
    },
    {
      name: 'Mark Davis',
      title: 'Personal Trainer',
      avatar: '/home/feedback-2.jpg',
      content: `Cosy Co's Wheat Bag has been a game-changer for my chronic back pain. The heat therapy works wonders, and the quality of the product is impressive. Thank you, Cosy Co!`,
      rating: 5,
    },
    {
      name: 'Emily Johnson',
      title: 'Happy Customer',
      avatar: '/home/feedback-3.jpg',
      content: `I received Cosy Co's Wheat Bag as a gift, and it has quickly become my favorite relaxation companion. The soothing warmth is incredibly comforting, especially during chilly evenings. I can't thank Cosy Co enough for this delightful product!`,
      rating: 4,
    },
  ];

  import { Splide, SplideSlide } from '@splidejs/svelte-splide';
  import '@splidejs/svelte-splide/css';
</script>

<Meta title="Home" />

<!-- Main banner section -->
<div class="relative w-full py-24 lg:py-32 xl:py-40">
  <img
    src="/home/banner-1.jpg"
    alt="Home banner"
    class="absolute top-0 left-0 object-cover w-full h-full"
  />
  <div class="w-10/12 mx-auto text-white max-w-7xl drop-shadow-lg">
    <div class="relative max-w-2xl">
      <h1 class="text-4xl font-extrabold sm:text-5xl lg:text-6xl">
        Embrace the Warmth,<br />Embrace Cosy Co!
      </h1>
      <p class="my-10 lg:text-lg">
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
  class="justify-center w-10/12 mx-auto my-20 max-w-7xl md:flex md:my-32 lg:my-40"
>
  <div class="mr-5 lg:mr-10">
    <img
      src="/home/image-1.jpg"
      alt="Wheat bag"
      class="object-cover mx-0 min-w-20 min-h-20 max-w-20 max-h-20 md:max-w-60 md:max-h-60 md:min-w-60 md:min-h-60 lg:min-w-96 lg:min-h-96 lg:max-w-96 lg:max-h-96 md:mx-0"
    />
  </div>
  <div class="max-w-lg py-4 mt-2 ml-5 lg:ml-10 lg:py-12 md:mt-0">
    <h1 class="text-2xl font-bold">High Quality Wheat Bags</h1>
    <div class="w-40 h-1 my-5 rounded-lg bg-secondary" />
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
          <Icon icon="mingcute:check-fill" class="w-3 h-3 text-orange-600" />
        </div>
        <p class="mt-0.5 ml-3 text-sm">
          100% linen, filled with treated wheat grains
        </p>
      </div>
      <div class="flex mt-2">
        <div class="p-1.5 bg-orange-600/20 h-6 w-6 rounded-3xl">
          <Icon icon="mingcute:check-fill" class="w-3 h-3 text-orange-600" />
        </div>
        <p class="mt-0.5 ml-3 text-sm">Easy to use and maintain</p>
      </div>
      <div class="flex mt-2">
        <div class="p-1.5 bg-orange-600/20 h-6 w-6 rounded-3xl">
          <Icon icon="mingcute:check-fill" class="w-3 h-3 text-orange-600" />
        </div>
        <p class="mt-0.5 ml-3 text-sm">Completely natural ingredients</p>
      </div>
    </div>
  </div>
</div>

<!-- Feedback section -->
<div class="w-10/12 mx-auto my-20 max-w-7xl md:my-32 lg:my-40">
  <div class="p-5 text-center shadow-inner bg-default rounded-3xl sm:p-10">
    <p class="font-bold text-rose-500">Customer Love</p>
    <h3 class="px-2 mt-2 text-xl font-bold sm:text-3xl">
      Hear It From Our Customers
    </h3>
    <p
      class="max-w-md mx-auto mt-2 text-xs sm:text-sm text-text-secondary sm:mt-5"
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus amet
      quaerat libero modi. Minus amet quaerat libero modi.
    </p>
    <div class="mt-5 text-left sm:mt-10">
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
            <div class="h-full pb-8">
              <Feedback {feedback} />
            </div>
          </SplideSlide>
        {/each}
      </Splide>
    </div>
  </div>
</div>
