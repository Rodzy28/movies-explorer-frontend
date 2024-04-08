import './Switch.css';

export default function Switch({shortMovies, setShortMovies}) {

  function handleCheckbox(e) {
    setShortMovies(e.target.checked);
  }

  return (
    <div className='switch'>
      <input className='switch__checkbox' id='switch' type='checkbox' name='switch' onChange={handleCheckbox} checked={shortMovies || ''} />
      <label className='switch__background' htmlFor='switch'>
        <span className='switch__toggle' />
      </label>
      <span className='switch__text'>Короткометражки</span>
    </div>
  );
};
