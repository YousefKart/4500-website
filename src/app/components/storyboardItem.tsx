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
      <img
        src={image}
        alt={desc}
        className="h-1/3 border-2 border-white shadow-[10px_10px_20px_rgba(0,0,0,1)]"
        style={{ borderRadius: '5%' }}
      />
      <div className="flex-1 flex justify-center">
        <p className="p-4 text-center w-2/3 text-lg">{desc}</p>
      </div>
    </li>
  );
};

export default StoryboardItem;
