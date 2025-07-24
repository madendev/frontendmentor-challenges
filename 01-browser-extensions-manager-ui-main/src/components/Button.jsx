export const Button = ({ children, textSmall, handleClick }) => {
  return (
    <button
      className={`border border-Neutral-100 dark:border-Neutral-700 px-5 py-2 rounded-full bg-Neutral-0 hover:bg-Neutral-600 cursor-pointer hover:text-Neutral-0 dark:text-Neutral-0 dark:bg-Neutral-800 dark:hover:bg-Red-500 ${
        textSmall ? 'text-base' : 'text-xl'
      }`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};
