import PropTypes from 'prop-types';
export function Statistics({ title, stats }) {
  // console.log(typeof(stats[0].id))
  return (
    <section className="statistics">
      {title? <h2 className="title">{title}</h2> : null}
      <ul className="stat-list">
        {stats.map(({ id, label, percentage }) => {
          return (
            <li className="item" key={id}>
              <span className="label">{label}</span>
              <span className="percentage">{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
  title: PropTypes.string,
};