import imageOne from "../assets/3D-pink-motorcycle-illustration-created-by-Fotor-AI-illustration-maker.webp";
import imageTwo from "../assets/6or6_A_strong_unicorn_holding_a_balloon_labeled_happy_birthday__f406f945-09b2-42a3-a2c8-32e1963e67ad.png";
import imageThree from "../assets/9t35ajdqda3826_An_isometric_pixel_art_of_a_delivery_van_in_the__fc7954ae-39b0-49b0-b241-5a415d410499.png";
import imageFour from "../assets/cherrystardust_A_hyper-realistic_photograph_of_a_black_cat_with_866c5de5-54f6-4fe3-a79f-1afef0e02ab2.png";
import imageFive from "../assets/culturadsgn24_j_editorial_medium_shot_woman_standing_in_a_dark__acbb2d8d-34df-4463-ac4d-6d5a87333fae.png";
import imageSix from "../assets/how-to-generate.webp";
import imageSeven from "../assets/og-dragon-headphones.webp";
import imageEight from "../assets/photo-generator.webp";
import imageNine from "../assets/seanchi._A_me_a_cute_retro_sci-fi_assistant_in_robot_realistic__2d5b5d46-e9f2-4316-a9f3-ca587a0db02b.png";
import imageTen from "../assets/teaser_400.webp";

export interface Image {
  id: number;
  title: string;
  src: string;
}

const images: Image[] = [
  {
    id: 1,
    title: "creative art",
    src: imageOne,
  },
  {
    id: 2,
    title: "creative art",
    src: imageTwo,
  },
  {
    id: 3,
    title: "creative art",
    src: imageThree,
  },
  {
    id: 4,
    title: "creative art",
    src: imageFour,
  },
  {
    id: 5,
    title: "creative art",
    src: imageFive,
  },
  {
    id: 6,
    title: "creative art",
    src: imageSix,
  },
  {
    id: 7,
    title: "creative art",
    src: imageSeven,
  },
  {
    id: 8,
    title: "creative art",
    src: imageEight,
  },
  {
    id: 9,
    title: "creative art",
    src: imageNine,
  },
  {
    id: 10,
    title: "creative art",
    src: imageTen,
  },
];

export default images;
