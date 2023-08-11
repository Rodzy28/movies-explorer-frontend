import './FormInput.css'

export default function FormInput({children}) {

    return (
        <form className='form' id='sign-form'>
            {children}
            <label className='form__label'>
                <span className='form__label-title'>E-mail</span>
                <input className='form__input' type='email' name='email'
                    placeholder='Введите E-mail' autoComplete='off' required />
            </label>
            <span className='form__input-error'></span>

            <label className='form__label'>
                <span className='form__label-title'>Пароль</span>
                <input className='form__input' type='password' name='password'
                    placeholder='Введите пароль' minLength='5' maxLength='15' autoComplete='off' required />
            </label>
            <span className='form__input-error'>Что-то пошло не так...</span>
        </form>
    )
}