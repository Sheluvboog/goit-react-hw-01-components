import PropTypes from 'prop-types';
import css from "./TransactionHistory.module.css";

export const TransactionHistory = ({ transactions }) => {
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
                {transactions.map(({id,type,amount,currency}) => {
                    return (
                        <tr key={id}>
                            <th style={{
                                textTransform: 'capitalize',
                                color: 'rgb(141, 141, 141)'
                            }}>{type}</th>
                            <th style={{
                                color: 'rgb(141, 141, 141)',
                            }}>{amount}</th>
                            <th style={{
                                color: 'rgb(141, 141, 141)',
                            }}>{currency}</th>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
};

TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    ).isRequired
};