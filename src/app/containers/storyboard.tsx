const commonStyles = 'w-full flex flex-col items-center';
const titleStyles = 'border-b-2 border-tertiary text-4xl font-bold mt-16 mb-4';

import StoryboardItem from '../components/storyboardItem';

export default function Storyboard() {
  return (
    <div id="storyboard" className={`${commonStyles}`}>
      <h1 className={`${titleStyles} w-3/4 text-center`} data-aos="fade-up">
        Storyboard
      </h1>
      <ul className="w-4/5">
        {[
          {
            image: 'images/storyboard2.jpg',
            desc: 'The screen fades in to a gray, lifeless city. Identical, self-driving box-shaped cars move silently in perfect lines, with no honking or interaction. The streets are eerily quiet.',
          },
          {
            image: 'images/storyboard3.jpg',
            desc: 'Inside a small, dimly lit garage, an old vintage car sits covered in dust—its paint chipped, its headlights dim.',
          },
          {
            image: 'images/storyboard4.jpg',
            desc: "A tiny, shiny modern car rolls in, curious but hesitant. The vintage car's headlights flicker faintly, its voice old but full of warmth.",
          },
          {
            image: 'images/storyboard5.jpg',
            desc: "The vintage car's headlights glow brighter as the camera zooms into them, transitioning into a flashback: The vintage car speeds down a bustling street, its shiny red paint gleaming in the sunlight. Other cars honk in greeting as it passes.",
          },
          {
            image: 'images/storyboard7.jpg',
            desc: 'They navigate the monotonous, gray city streets until a winding road leads them upward. As they crest the hill, a breathtaking panorama unfolds—a rugged edge of land meeting an endless horizon drenched in the hues of a setting sun.',
          },
          {
            image: 'images/storyboard8.jpg',
            desc: "Together, they pause, admiring the majestic view. The vintage car's once-faded red paint glows in the last rays of sunlight—a quiet, powerful testament to days gone by.",
          },
        ].map((milestone, index) => (
          <div key={index}>
            <StoryboardItem
              image={milestone.image}
              desc={milestone.desc}
              reverse={index % 2 === 1}
            />
            {index < 7 && <hr className="my-4 border-gray-500" />}
          </div>
        ))}
      </ul>
    </div>
  );
}
