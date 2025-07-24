import { useState } from 'react';

import { CardsContainer } from './components/CardsContainer.jsx';
import { Filters } from './components/Filters.jsx';
import { Header } from './components/Header.jsx';

function App() {
  const [filter, setFilter] = useState('All'); // 'All' - 'Active' - 'Inactive'

  return (
    <main className='light-gradient dark:dark-gradient min-h-screen flex flex-col items-center'>
      <section className='w-[343px] md:w-[672px] xl:w-[1170px] my-6'>
        <Header />
        <Filters setFilter={setFilter} />
        <CardsContainer filter={filter} />
      </section>
    </main>
  );
}

export default App;
