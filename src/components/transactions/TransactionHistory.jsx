import PropTypes from 'prop-types';
import css from "./TransactionHistory.module.css";

export const TransactionHistory = ({ items }) => {
    return (
        <table className={css.transactionhistory}>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amout</th>
                    <th>Currency</th>
                </tr>
            </thead>
            <tbody>
                {items.map(item => {
                    return (
                        <tr key={item.id}>
                            <th style={{
                                textTransform: 'capitalize',
                                color: 'rgb(141, 141, 141)'
                            }}>{item.type}</th>
                            <th style={{
                                color: 'rgb(141, 141, 141)',
                            }}>{item.amount}</th>
                            <th style={{
                                color: 'rgb(141, 141, 141)',
                            }}>{item.currency}</th>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amout: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired
        })
    ).isRequired
};