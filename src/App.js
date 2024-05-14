import DateFilter from "./components/Filter/DateFilter";
import NewsList from "./components/News/NewsList";
import SearchBar from "./components/Filter/SearchBar";

function App() {
  return (
    <>
      <SearchBar />
      <DateFilter />
      <NewsList />
    </>
  );
}

export default App;
