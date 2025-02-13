const commonStyles = 'w-full flex flex-col items-center';
const titleStyles = 'border-b-2 border-tertiary text-4xl font-bold mt-16 mb-4';

import ModelItem from '../components/modelItem';

export default function Models() {
  return (
    <div id="models" className={`${commonStyles}`}>
      <h1 className={`${titleStyles} w-3/4 text-center`} data-aos="fade-up">
        Models
      </h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            title: 'Vintage Car',
            date: '2025-01-23',
            image:
              'https://bbsupply.ca/wp-content/uploads/2018/11/Image-Coming-Soon-Placeholder.png',
          },
          {
            title: 'Futuristic Car',
            date: '2023-01-30',
            image: 'images/Futuristic Car.png',
          },
          {
            title: 'NPC Cars',
            date: '2023-02-06',
            image:
              'https://bbsupply.ca/wp-content/uploads/2018/11/Image-Coming-Soon-Placeholder.png',
          },
          {
            title: 'Old City',
            date: '2025-01-23',
            image:
              'https://bbsupply.ca/wp-content/uploads/2018/11/Image-Coming-Soon-Placeholder.png',
          },
          {
            title: 'New City',
            date: '2023-01-30',
            image:
              'https://bbsupply.ca/wp-content/uploads/2018/11/Image-Coming-Soon-Placeholder.png',
          },
          {
            title: 'Garage',
            date: '2023-02-06',
            image:
              'https://bbsupply.ca/wp-content/uploads/2018/11/Image-Coming-Soon-Placeholder.png',
          },
        ].map((milestone, index) => (
          <ModelItem
            key={index}
            title={milestone.title}
            image={milestone.image}
          />
        ))}
      </ul>
    </div>
  );
}
