export default function SearchBox() {
  return (
    <div className='searchbox-wrapper'>
      <form className='searchbox' method='GET'>
        <input type='text' placeholder='Search...' name='query' aria-label='Search' />
        <button type='submit'><i class="fa fa-search fa-lg" aria-hidden="true"></i></button>
      </form>
    </div>
  )
}