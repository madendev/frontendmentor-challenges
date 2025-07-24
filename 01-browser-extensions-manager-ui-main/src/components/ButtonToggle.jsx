export const ButtonToggle = ({ isActive, onClick }) => {
  return (
    <div>
      <label htmlFor='toggle-switch'>
        <input
          type='checkbox'
          id='toggle-switch'
          className='cursor-pointer translate-y-0.5 h-7 w-12 rounded-full appearance-none bg-Neutral-600 bg-opacity-5 checked:bg-Red-400 transition duration-200 relative'
          onChange={onClick}
          checked={isActive}
        />
      </label>
    </div>
  );
};
