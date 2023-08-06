import './Promo.css';
import NavTab from '../NavTab/NavTab';
import promologo from '../../images/promo-logo.svg'

export default function Promo() {
  return (
    <section className="promo">
      <div className='promo__container'>
        <div className='promo__table'>
          <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
          <p className='promo__text'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
        </div>
        <img className='promo__logo' src={promologo} alt="Логотип" />
      </div>
      <NavTab />
    </section>
  );
}