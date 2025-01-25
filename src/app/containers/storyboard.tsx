const commonStyles = 'w-full flex flex-col items-center';
const titleStyles = 'border-b-2 border-tertiary text-4xl font-bold mt-16 mb-4';

export default function Storyboard() {
  return (
    <div id="storyboard" className={`${commonStyles}`}>
      <h1 className={`${titleStyles} w-3/4 text-center`}>Storyboard</h1>
      <ul className=""></ul>
    </div>
  );
}
