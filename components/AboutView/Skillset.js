const Skillset = () => {
  const skillItems = [
    {
      name: "Figma, Adobe XD",
      progressValue: "96",
      class: "h-5 bg-brand w-6/7 md:w-491 rounded-3xl",
    },
    {
      name: "HTML, CSS, JavaScript",
      progressValue: "92",
      class: "h-5 bg-brand w-4/7 md:w-480 rounded-3xl",
    },
    {
      name: "Angular, Node.js",
      progressValue: "87",
      class: "h-5 bg-brand w-3/7 md:w-445 rounded-3xl",
    },
    {
      name: "Adobe Illustrator, Adobe Photoshop",
      progressValue: "94",
      class: "h-5 bg-brand w-5/7 md:w-483 rounded-3xl",
    },
    {
      name: "PHP, MySQL",
      progressValue: "79",
      class: "h-5 bg-brand w-2/7 md:w-402 rounded-3xl",
    },
  ];
  return (
    <div className="flex flex-col max-w-xs md:max-w-lg font-poppins text-heroH ">
      <h1 className="mb-8 text-3xl font-semibold lg:mb-10 lg:text-5xl">
        My <br />
        Skillset
      </h1>
      <ul className="space-y-5 lg:space-y-10">
        {skillItems.map((item, index) => (
          <li key={index} className="space-y-1 lg:space-y-3">
            <h1 className="text-xl lg:text-2xl">{item.name}</h1>

            <div className="h-5 lg:w-510 bg-bar rounded-3xl">
              <div className={item.class}></div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skillset;
