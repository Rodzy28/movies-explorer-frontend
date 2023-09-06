import './AboutProject.css'

export default function AboutProject() {
  return (
    <section className='about-project'>
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

      <ul className='table-line'>
        <li className='table-line__cell'>
          <p className='table-line__week table-line__week_green'>1 неделя</p>
          <p className='table-line__text'>Back-end</p>
        </li>
        <li className='table-line__cell'>
          <p className='table-line__week table-line__week_gray'>4 недели</p>
          <p className='table-line__text'>Front-end</p>
        </li>
      </ul>
    </section>
  );
}