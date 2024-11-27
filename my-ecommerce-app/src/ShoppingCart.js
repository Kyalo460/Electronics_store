export default function ShoppingCart() {
  return (
    <aside className='shopping-cart'>
      <div className='order'>
        <h4>PS4 Controller</h4>
        <h5>Price: 4,500KSH</h5>
        <button>Remove</button>
      </div>
      <div className='order'>
        <h4>42" Flat-screen TV</h4>
        <h5>Price: 10,000KSH</h5>
        <button>Remove</button>
      </div>
    </aside>
  )
}