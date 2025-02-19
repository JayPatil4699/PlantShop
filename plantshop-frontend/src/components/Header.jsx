import { useSelector } from 'react-redux'

function Header() {
  const state = useSelector((state) => state)
  console.log('Header ', state.loggedin.Username)
  return (
    <div className='jumbotron px-2 py-0 mb-0 bg-success border-bottom border-white text-white rounded-0'>
      <img
        src={'assets/logo.png'}
        style={{ width: '70px', height: '70px' }}
        className='float-left'
      />
      {state.loggedin.IsLoggedIn ? (
        <>
          <h5 className='float-right mt-3'>
            Welcome ! {state.loggedin.Username}
          </h5>{' '}
        </>
      ) : (
        ''
      )}
      <h4 className='text-center pt-3'>Welcome to Plant Shop</h4>
      <div className='clearfix'></div>
    </div>
  )
}

export default Header
