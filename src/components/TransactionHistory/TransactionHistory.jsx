import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export function TransactionHistory({ items }) {
  return (
    <table className={css.transactionHistory}>
      <thead className={css.tableHead}>
        <tr className={css.tableLine}>
          <th className={css.tableColumn}>Type</th>
          <th className={css.tableColumn}>Amount</th>
          <th className={css.tableColumn}>Currency</th>
        </tr>
      </thead>
      <tbody className={css.tableBody}>
        {items.map(({ id, type, amount, currency }) => (
          <tr className={css.tableLine} key={id}>
            <td className={css.tableColumn}>{type}</td>
            <td className={css.tableColumn}>{amount}</td>
            <td className={css.tableColumn}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
