const commonStyles = 'w-full flex flex-col items-center';
const titleStyles = 'border-b-2 border-tertiary text-4xl font-bold mt-16 mb-4';

import MilestoneItem from '../components/milestoneItem';

export default function Milestones() {
  return (
    <div id="milestones" className={`${commonStyles}`}>
      <h1 className={`${titleStyles} w-3/4 text-center`} data-aos="fade-up">
        Milestones
      </h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            title: 'Storyboard',
            date: '2025-01-23',
            image: 'https://placehold.co/350',
          },
          {
            title: 'Models',
            date: '2023-01-30',
            image: 'https://placehold.co/350',
          },
          {
            title: 'Textures',
            date: '2023-02-06',
            image: 'https://placehold.co/350',
          },
          {
            title: 'Animations',
            date: '2023-02-13',
            image: 'https://placehold.co/350',
          },
          {
            title: 'Polish',
            date: '2023-02-20',
            image: 'https://placehold.co/350',
          },
          {
            title: 'Renders',
            date: '2023-02-27',
            image: 'https://placehold.co/350',
          },
          {
            title: 'Sound Design',
            date: '2023-03-06',
            image: 'https://placehold.co/350',
          },
          {
            title: 'Editing',
            date: '2023-03-13',
            image: 'https://placehold.co/350',
          },
          {
            title: 'Review',
            date: '2023-03-20',
            image: 'https://placehold.co/350',
          },
        ].map((milestone, index) => (
          <MilestoneItem
            key={index}
            title={milestone.title}
            date={milestone.date}
            image={milestone.image}
          />
        ))}
      </ul>
    </div>
  );
}
