import './AboutProject.css'

export default function AboutProject() {
  return (
    <section className='about-project'>
      <div className='about-project__container'>
        <h2 className='about-project__title'>О проекте</h2>
        <ul className='table'>
          <li className='table__cell'>
            <h3 className='table__heading'>Дипломный проект включал 5 этапов</h3>
            <p className='table__text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </li>
          <li className='table__cell'>
            <h3 className='table__heading'>На выполнение диплома ушло 5 недель</h3>
            <p className='table__text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </li>
        </ul>
        <ul className='table'>
          <li className>
            <p className>1 неделя</p>
            <p className>Back-end</p>
          </li>
          <li className>
            <p className>4 недели</p>
            <p className>Front-end</p>
          </li>
        </ul>
      </div>
    </section>
  );
}