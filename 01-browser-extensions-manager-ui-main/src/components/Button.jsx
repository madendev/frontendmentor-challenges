export const Button = ({ children, textSmall, handleClick, active }) => {
  return (
    <button
      className={`border  px-5 py-2 rounded-full   cursor-pointer  dark:text-Neutral-0 ${
        textSmall ? 'text-base' : 'text-xl'
      } ${active ? 'bg-Red-500 text-Neutral-0 border-Red-500 hover:bg-Red-700 ' : 'bg-Neutral-0 dark:hover:bg-Neutral-900  hover:text-Neutral-0 hover:bg-Neutral-600 dark:border-Neutral-700 border-Neutral-100  dark:bg-Neutral-800'}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};
