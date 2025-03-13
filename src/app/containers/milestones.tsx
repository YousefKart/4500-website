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
            image: 'images/storyboard.jpg',
            status: 'done',
          },
          {
            title: 'Models',
            date: '2025-02-06',
            image: 'images/Futuristic Cars.png',
            status: 'done',
          },
          {
            title: 'Textures',
            date: '2025-02-13',
            image: 'images/texture example.png',
            status: 'done',
          },
          {
            title: 'Animations',
            date: '2025-02-27',
            image:
              'images/AnimationPic.png',
            status: 'pending',
          },
          {
            title: 'Polish',
            date: '2025-03-06',
            image:
              'images/Futuristic Car.png',
            status: 'pending',
          },
          {
            title: 'Renders',
            date: '2025-03-13',
            image:
              'https://bbsupply.ca/wp-content/uploads/2018/11/Image-Coming-Soon-Placeholder.png',
            status: 'pending',
          },
          {
            title: 'Sound Design',
            date: '2025-03-20',
            image:
              'https://bbsupply.ca/wp-content/uploads/2018/11/Image-Coming-Soon-Placeholder.png',
            status: 'pending',
          },
          {
            title: 'Editing',
            date: '2025-03-27',
            image:
              'https://bbsupply.ca/wp-content/uploads/2018/11/Image-Coming-Soon-Placeholder.png',
            status: 'planned',
          },
          {
            title: 'Review',
            date: '2025-04-03',
            image:
              'https://bbsupply.ca/wp-content/uploads/2018/11/Image-Coming-Soon-Placeholder.png',
            status: 'planned',
          },
        ].map((milestone, index) => (
          <MilestoneItem
            key={index}
            title={milestone.title}
            date={milestone.date}
            image={milestone.image}
            status={milestone.status}
          />
        ))}
      </ul>
    </div>
  );
}
