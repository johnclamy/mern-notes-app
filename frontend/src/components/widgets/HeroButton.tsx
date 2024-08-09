import { ReactNode, MouseEventHandler } from "react";

const HeroButton = ({
  children,
  handleClick,
}: {
  children: ReactNode;
  handleClick: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button
      type="button"
      className="mt-8 inline-flex items-center justify-center rounded-xl bg-green-600 py-3 px-6 font-dm text-base font-medium text-white shadow-xl shadow-green-400/75 transition-transform duration-200 ease-in-out hover:scale-[1.02]"
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default HeroButton;
