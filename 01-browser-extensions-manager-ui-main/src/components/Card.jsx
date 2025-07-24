import { Button } from './Button';
import { ButtonToggle } from './ButtonToggle';

export const Card = ({ logo, name, description, isActive, extensions, setExtensions }) => {
  console.log(extensions);

  const onToggle = () => {
    const currentExtension = extensions.filter((extension) => extension.name === name[0]);

    console.log(currentExtension);

    const updateExtension = {
      ...currentExtension,
      isActive: !currentExtension.isActive,
    };

    console.log(updateExtension);
  };

  return (
    <article className='bg-Neutral-0 dark:bg-Neutral-800 rounded-xl mt-4 p-4 shadow-md dark:text-Neutral-0'>
      <main className='flex gap-4 items-start mb-4'>
        <img src={logo} alt={name} />
        <div>
          <h2 className='text-xl font-bold mb-2'>{name}</h2>
          <p className='text-Neutral-600 dark:text-Neutral-300 text-sm'>{description}</p>
        </div>
      </main>
      <footer className='flex justify-between items-center'>
        <Button textSmall>Remove</Button>
        <ButtonToggle onClick={onToggle} checked={isActive} />
      </footer>
    </article>
  );
};
