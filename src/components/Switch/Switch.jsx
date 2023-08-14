import './Switch.css';

export default function Switch() {
    return (
        <div className='switch'>
            <input className='switch__checkbox' id='switch' type='checkbox' name='switch' />
            <label className='switch__background' htmlFor='switch'>
                <span className='switch__toggle' />
            </label>
            <span className='switch__text'>Короткометражки</span>
        </div>
    );
};
