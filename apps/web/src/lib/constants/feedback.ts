interface IFeedback {
  name: string;
  title: string;
  avatar: string;
  content: string;
  rating: number;
}

const feedback: IFeedback[] = [
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

export default feedback;
