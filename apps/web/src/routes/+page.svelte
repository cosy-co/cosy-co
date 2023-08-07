<script lang="ts">
  import Icon from '@iconify/svelte';
  import { Button, Meta } from '@lib/components/index';
  // import { Feedback } from '@lib/components/index';
  // import { feedbackData } from '@lib/constants';

  // import { Splide, SplideSlide } from '@splidejs/svelte-splide';
  import '@splidejs/svelte-splide/css';

  interface Product {
    size: string;
    price: number;
    description: string;
    image: string;
  }

  const prices: Product[] = [
    {
      size: 'Small',
      price: 7.5,
      description:
        'A compact and versatile heating or cooling solution, this small wheat bag offers soothing relief for minor aches and pains. Its convenient size makes it perfect for targeted comfort and can be easily heated in the microwave or chilled in the freezer.',
      image: '/home/small.jpg',
    },
    {
      size: '2x Small',
      price: 10,
      description:
        'Maximize your comfort and savings with this cost-effective set of two small wheat bags. Providing targeted relief for minor discomfort, these bags can be heated or cooled as needed, offering an economical solution to soothe your aches and pains.',
      image: '/home/2x-small.jpg',
    },
    {
      size: 'Medium',
      price: 12,
      description:
        'The medium-sized wheat bag combines flexibility and coverage, making it an ideal choice for relieving muscle stiffness and promoting relaxation. Heat it up or cool it down according to your preference and enjoy the soothing benefits.',
      image: '/home/medium.jpg',
    },
    {
      size: 'Large',
      price: 18,
      description:
        'Experience full-body relief with this large wheat bag, offering generous coverage for soothing warmth or cooling comfort. Perfect for easing stress, tension, and promoting relaxation, this spacious bag can be heated or chilled for a luxurious therapeutic experience.',
      image: '/home/large.jpg',
    },
  ];
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
      <a href="#pricing"><Button size="lg">Pricing</Button></a>
    </div>
  </div>
</div>

<!-- Wheat bags section -->
<div
  class="justify-center w-10/12 mx-auto my-20 max-w-7xl md:flex md:my-32 lg:my-40"
>
  <div class="mr-5 lg:mr-10">
    <img
      src="/home/2x-small.jpg"
      alt="Wheat bag"
      class="object-cover mx-0 min-w-20 min-h-20 max-w-20 max-h-20 md:max-w-60 md:max-h-60 md:min-w-60 md:min-h-60 lg:min-w-96 lg:min-h-96 lg:max-w-96 lg:max-h-96 md:mx-0"
    />
  </div>
  <div class="max-w-lg py-0 mt-2 ml-5 lg:ml-10 lg:py-0 md:mt-0">
    <h1 class="text-2xl font-bold">High Quality Wheat Bags</h1>
    <div class="w-40 h-1 my-5 bg-gray-400 rounded-lg" />
    <p class="text-sm">
      A natural remedy for soothing relief. Filled with treated wheat grains, it
      harnesses heat therapy to alleviate aches, cramps, and headaches. Simply
      heat in the microwave for instant warmth. With a removable, washable
      cover, it's easy to maintain. Its compact shape molds to your body for
      targeted comfort. Embrace natural, drug-free comfort with our Wheat Bag,
      providing relaxation and relief in seconds.
    </p>

    <div class="mt-5">
      {#each ['Easy to use and maintain', 'Completely natural ingredients'] as feature}
        <div class="flex mt-2">
          <div class="p-1.5 bg-green-600/20 h-6 w-6 rounded-3xl">
            <Icon icon="mingcute:check-fill" class="w-3 h-3 text-green-600" />
          </div>
          <p class="mt-0.5 ml-3 text-sm">
            {feature}
          </p>
        </div>
      {/each}
    </div>
  </div>
</div>

<!-- Pricing section -->
<div id="pricing" class="w-10/12 mx-auto my-20 max-w-7xl md:my-32 lg:my-40">
  <div class="flex flex-wrap">
    {#each prices as product}
      <div class="w-full py-5 sm:p-5 md:w-1/2">
        <div class="relative h-full border rounded-md shadow-xl border-border">
          <div class="p-5 text-white rounded-t-md bg-secondary">
            <p class="text-lg font-bold">{product.size}</p>
            <p class="text-4xl font-bold">
              ${product.price} <b class="text-sm text-white/75">NZD</b>
            </p>
          </div>
          <div class="relative p-5 xl:flex">
            <p class="block pr-5 text-text-secondary">
              {product.description}
            </p>
            <div class="block mt-5 min-w-52 xl:mt-0">
              <img src={product.image} alt="Product" class="rounded-md" />
            </div>
          </div>
          <div class="h-16" />
          <a href="/contact" class="absolute bottom-5 left-5">
            <Button>Contact Us</Button>
          </a>
        </div>
      </div>
    {/each}
  </div>
</div>

<!-- Feedback section -->
<!-- <div class="w-10/12 mx-auto my-20 max-w-7xl md:my-32 lg:my-40">
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
</div> -->
