export default function Sell() {
  return (
    <div className='sell-container'>
      <form className='sell-form' method='POST'>
        <input type='text' placeholder='Item name...' />
        <input type='number' placeholder='Price...' />
        <button type='submit'>Post</button>
      </form>
    </div>
  )
}