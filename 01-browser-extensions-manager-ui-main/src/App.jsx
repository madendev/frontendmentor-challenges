import { CardsContainer } from "./components/CardsContainer.jsx";
import { Filters } from "./components/Filters.jsx";
import { Header } from "./components/Header.jsx";

function App() {
  return (
    <main className="light-gradient dark:dark-gradient min-h-screen flex flex-col items-center">
      <section className="w-[343px] my-6">
        <Header />
        <Filters />
        <CardsContainer />
      </section>
    </main>
  );
}

export default App;
