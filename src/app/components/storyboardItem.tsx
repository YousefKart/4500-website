import React from 'react';

const StoryboardItem = ({
  image,
  desc,
  reverse,
}: {
  image: string;
  desc: string;
  reverse?: boolean;
}) => {
  return (
    <li
      className={`flex ${
        reverse ? 'flex-row-reverse' : 'flex-row'
      } items-center justify-between`}
      data-aos="fade-up"
    >
      <img src={image} alt={desc} className="h-1/3" />
      <div className="flex-1 flex justify-center">
        <p className="p-4 text-center">{desc}</p>
      </div>
    </li>
  );
};

export default StoryboardItem;
