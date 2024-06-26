import './Techs.css'

export default function Techs() {
  return (
    <section className='techs'>
      <div className='techs_container'>
        <h2 className='techs__title'>Технологии</h2>
        <h3 className='techs__subtitle'>7 технологий</h3>
        <p className='techs__text'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        <ul className='techs__table'>
          <li className='techs__table-cell'>HTML</li>
          <li className='techs__table-cell'>CSS</li>
          <li className='techs__table-cell'>JS</li>
          <li className='techs__table-cell'>React</li>
          <li className='techs__table-cell'>Git</li>
          <li className='techs__table-cell'>Express.js</li>
          <li className='techs__table-cell'>mongoDB</li>
        </ul>
      </div>
    </section>
  );
}