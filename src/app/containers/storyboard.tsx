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
            image: 'images/storyboard1.jpg',
            desc: 'Description',
          },
          {
            image: 'images/storyboard2.jpg',
            desc: 'Description',
          },
          {
            image: 'images/storyboard3.jpg',
            desc: 'Description',
          },
          {
            image: 'images/storyboard4.jpg',
            desc: 'Description',
          },
          {
            image: 'images/storyboard5.jpg',
            desc: 'Description',
          },
          {
            image: 'images/storyboard6.jpg',
            desc: 'Description',
          },
          {
            image: 'images/storyboard7.jpg',
            desc: 'Description',
          },
          {
            image: 'images/storyboard8.jpg',
            desc: 'Description',
          },
        ].map((milestone, index) => (
          <li key={index}>
            <StoryboardItem
              image={milestone.image}
              desc={milestone.desc}
              reverse={index % 2 === 1}
            />
            {index < 7 && <hr className="my-4 border-gray-500" />}
          </li>
        ))}
      </ul>
    </div>
  );
}
