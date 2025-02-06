const ModelItem = ({ title, image }: { title: string; image: string }) => {
  return (
    <li className="flex flex-col items-center" data-aos="fade-up">
      <div className="">
        <img
          src={image}
          alt={title}
          className="w-64 h-64 object-cover border-2 border-white shadow-[10px_10px_20px_rgba(0,0,0,1)]"
          style={{ borderRadius: '5%' }}
        />
        <h3 className="mt-2 mb-8 text-xl font-semibold text-center">{title}</h3>
      </div>
    </li>
  );
};

export default ModelItem;
