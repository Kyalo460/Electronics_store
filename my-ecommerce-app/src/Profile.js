export default function Profile() {
  return (
    <div className='profile-container'>
      <div className='personal-info'>
        <h4>Name: Brian Muoki Kyalo</h4>
        <h4>Number: 0705999577</h4>
        <h4>Email: Kyalo460@gmail.com</h4>
      </div>
      <div className='products'>
        <div className='item'>
          <h4>Flat Screen TV</h4>
          <h4>Price: KSH 10,000</h4>
          <button>Delete</button>
        </div>
        <div className='item'>
          <h4>JBL Speakers</h4>
          <h4>Price: KSH 10,000</h4>
          <button>Delete</button>
        </div>
      </div>
    </div>
  )
}