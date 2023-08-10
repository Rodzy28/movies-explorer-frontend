import Login from '../Login/Login';

export default function Register() {
    return (
        <Login>
            <label className='form__label'>
                <span className='form__label-title'>Имя</span>
                <input className='form__input' type='text' name='name'
                    placeholder='Введите имя' minLength='3' maxLength='30' autoComplete='off' required />
            </label>
            <span className='form__input-error'>Что-то пошло не так...</span>
        </Login>
    );
}