import './NotFound.css'
import { useNavigate } from 'react-router-dom';

export default function NotFound() {

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className='not-found'>
      <h2 className='not-found__title'>404</h2>
      <p className='not-found__text'>Страница не найдена</p>
      <button className='not-found__link' onClick={goBack}>Назад</button>
    </div>
  );
}