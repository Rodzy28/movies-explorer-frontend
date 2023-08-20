import './BigBlueBtn.css';

export default function BigBlueBtn({ buttonText, idForm, disabled }) {

  return (
    <button className={`blue-button ${disabled ? 'blue-button_disabled' : ''}`} type='submit' form={idForm} disabled={disabled}>
      {buttonText}
    </button>
  )
}