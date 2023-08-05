import './Promo.css';
import NavTab from '../NavTab/NavTab';
import promologo from '../../images/promo-logo.svg'

export default function Promo() {
  return (
    <section className="promo">
      <div className='promo__container'>
        <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
        <img className='promo__logo' src={promologo} alt="" />
        <p className='promo__text'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
        <NavTab/>
      </div>
    </section>
  );
}