import { useState, useEffect, memo } from "react";
import { FaArrowUp } from "react-icons/fa";

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) setVisible(true);
      else setVisible(false);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    visible && (
      <button
        onClick={scrollUp}
        className='cursor-pointer fixed bottom-26 right-6 z-50 w-16 h-16 rounded-full bg-secondary text-white shadow-lg hover:bg-secondary/80 transition flex items-center justify-center'
      >
        <FaArrowUp size={24} />
      </button>
    )
  );
}

// export bằng memo
export default memo(BackToTop);
