const ExperienceGrid = () => {
  return (
    // <div className=" bg-gradient-radial from-brandLight to-white">
    <div className="opacity-100 bg-gradient-to-t from-white via-brandLight to-white">
      <div className="grid grid-cols-1 mx-auto md:grid-cols-2 text-heroH">
        <div className="border-b-2 border-dashed border-divider">
          <div className="flex flex-col mx-auto my-12 space-y-10 font-bold max-w-max lg:my-28">
            <h1 className="text-4xl lg:text-6xl w-28 font-poppins">15+</h1>
            <p className="max-w-xs font-sans text-2xl lg:text-3xl ">
              UI/UX and Graphic Design projects Done.
            </p>
          </div>
        </div>
        <div className="border-b-2 border-dashed md:border-l-2 border-divider">
          <div className="flex flex-col mx-auto my-12 space-y-10 font-bold max-w-max lg:my-28">
            <h1 className="text-4xl lg:text-6xl w-28 font-poppins">03</h1>
            <p className="max-w-xs font-sans text-2xl lg:text-3xl ">
              Internships done in the field of UI/UX.
            </p>
          </div>
        </div>
        <div className="border-b-2 border-dashed border-divider md:border-none">
          <div className="flex flex-col mx-auto my-12 space-y-10 font-bold max-w-max lg:my-28">
            <h1 className="text-4xl lg:text-6xl w-28 font-poppins">2</h1>
            <p className="max-w-xs font-sans text-2xl lg:text-3xl ">
              Years of Experience in the field of UI/UX.
            </p>
          </div>
        </div>
        <div className="border-dashed md:border-l-2 border-divider">
          <div className="flex flex-col mx-auto my-12 space-y-10 font-bold max-w-max lg:my-28">
            <h1 className="text-4xl lg:text-6xl w-28 font-poppins">07+</h1>
            <p className="max-w-xs font-sans text-2xl lg:text-3xl text-exp">
              Personal Projects Done.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceGrid;
