import './Switch.css';

export default function Switch({checked, setChecked}) {

  function handleCheckbox(e) {
    setChecked(!checked);
  }

  return (
    <div className='switch'>
      <input className='switch__checkbox' id='switch' type='checkbox' name='switch' onChange={handleCheckbox} checked={checked} />
      <label className='switch__background' htmlFor='switch'>
        <span className='switch__toggle' />
      </label>
      <span className='switch__text'>Короткометражки</span>
    </div>
  );
};
