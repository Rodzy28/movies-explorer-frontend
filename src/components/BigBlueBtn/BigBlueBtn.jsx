import './BigBlueBtn.css';

export default function BigBlueBtn({ buttonText, idForm }) {

    return (
        <button className='blue-button' type='submit' form={idForm}>
            {buttonText}
        </button>
    )
}