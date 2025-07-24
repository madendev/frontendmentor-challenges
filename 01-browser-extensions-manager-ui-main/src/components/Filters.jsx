import { Button } from './Button';

export const Filters = ({ filter, setFilter }) => {
  const handleClick = (event) => {
    setFilter(event.target.textContent);
  };

  return (
    <div className='flex flex-col md:flex-row md:justify-between md:items-center'>
      <h2 className='dark:text-Neutral-0 text-center text-4xl font-bold mb-6 md:mb-0'>Extensions List</h2>
      <div className='flex justify-around md:gap-4'>
        <Button active={filter === 'All'} handleClick={handleClick}>
          All
        </Button>
        <Button active={filter === 'Active'} handleClick={handleClick}>
          Active
        </Button>
        <Button active={filter === 'Inactive'} handleClick={handleClick}>
          Inactive
        </Button>
      </div>
    </div>
  );
};
