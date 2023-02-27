// Renders all the visbible screens for the current dimensions
// i use it just so it is clear what is the current screen
export default function DebugScreens() {
  return (
    <div className="z-50 fixed top-0 left-0 text-white bg-black bg-opacity-75 text-5xl">
      <p className="hidden 2xl:block">2xl</p>
      <p className="hidden 1xl:block">1xl</p>
      <p className="hidden xl:block">xl</p>
      <p className="hidden lg:block">lg</p>
      <p className="hidden 1md:block">1md</p>
      <p className="hidden md:block">md</p>
      <p className="hidden sm:block">sm</p>
      <p className="hidden xs:block">xs</p>
    </div>
  );
}