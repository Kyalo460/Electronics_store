import ItemsList from "./ItemsList";
import SearchBox from "./SearchBox";

export default function Main() {
  return (
    <div className='main-container'>
      <SearchBox />
      <ItemsList />
    </div>
  )
}