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
            image:
              'images/Vintage Car.png',
          },
          {
            title: 'Futuristic Car',
            image: 'images/Futuristic Car2.png',
          },
          {
            title: 'NPC Cars',
            image:
              'https://bbsupply.ca/wp-content/uploads/2018/11/Image-Coming-Soon-Placeholder.png',
          },
          {
            title: 'Old City',
            image:
              'images/Old City.png',
          },
          {
            title: 'New City',
            image:
              'images/New City.jpg',
          },
          {
            title: 'Garage',
            image:
              'images/Garage.png',
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
