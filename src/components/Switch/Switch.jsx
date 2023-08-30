import { useEffect } from 'react';
import './Switch.css';

export default function Switch({checked, setChecked}) {

  function handleCheckbox() {
    setChecked(!checked);
    localStorage.setItem('Checked', !checked);
  }

  useEffect(() => {
    setChecked(JSON.parse(localStorage.getItem('Checked')));
  }, [setChecked])

  return (
    <div className='switch'>
      <input className='switch__checkbox' id='switch' type='checkbox' name='switch' onChange={handleCheckbox} checked={checked || ''} />
      <label className='switch__background' htmlFor='switch'>
        <span className='switch__toggle' />
      </label>
      <span className='switch__text'>Короткометражки</span>
    </div>
  );
};
