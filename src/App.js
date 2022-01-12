import './App.scss';
import rocketImg from './rocket.svg';
import starImg from './star.svg';

function App() {
  return (
    <div className='app-container'>
      <div className='banner'>
        <div className='top-banner'>
          <div className='title-container'>
            <h1 className='title'>Hello and Welcome!</h1>
            <h2 className='sub-title'>This is the <span>start</span> of your new journey</h2>
          </div>
          <div className='rocket-stars'>
            <div className='rocket'>
              <img src={rocketImg} alt='rocket' />
              <div className='star-1'><img src={starImg} alt='star' /></div>
              <div className='star-2'><img src={starImg} alt='star' /></div>
              <div className='star-3'><img src={starImg} alt='star' /></div>
            </div>
          </div>
        </div>
      </div>
      <div className='action-container'>
        <div className='action'>
            <button className='banner-action'><span>Get Started</span></button>
        </div>
      </div>
    </div>
  );
}

export default App;
