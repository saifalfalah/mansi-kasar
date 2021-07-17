import React, { useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

const ScrollTopBtn = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", checkScrollTop);

  return (
    <div className={`${showScroll ? "flex h-10 px-4 justify-end" : "hidden"}`}>
      <FaArrowCircleUp
        onClick={scrollTop}
        className="fixed z-0 items-center justify-end h-10 text-3xl text-gray-800 text bottom-5 "
      />
    </div>
  );
};

export default ScrollTopBtn;

// import { useState } from "react";
// import { FaArrowCircleUp } from "react-icons/fa";
// const ScrollTopBtn = () => {
//   const [toggleScroll, setToggleScroll] = useState(false);

//   const clickToggle = () => {
//     if (!toggleScroll && window.pageYOffset > 200) {
//       setToggleScroll(true);
//     } else if (toggleScroll && window.pageYOffset <= 300) {
//       setToggleScroll(false);
//     }
//   };
//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//     window.addEventListener("scroll", clickToggle);
//   };

//   return (
//     <FaArrowCircleUp
//       className={`fixed w-full bottom-5 items-center h-5 justify-center z-50 cursor-pointer
//         ${toggleScroll ? "flex h-10" : "hidden"}`}
//     />
//   );
// };

// export default ScrollTopBtn;
