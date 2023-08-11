import './BigBlueBtn.css';

export default function BigBlueBtn({ buttonText, idForm }) {

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <button className='blue-button' type='submit' form={idForm} onSubmit={handleSubmit}>
            {buttonText}
        </button>
    )
}