import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({
    good,
    neutral,
    bad,
    total,
    positivePercentage,
}) => {
    return (
        <>
            <ul className={css.statistics}>
                <li className={css.statistics__iteam}>Good: {good},</li>
                <li className={css.statistics__iteam}>Neutral: {neutral},</li>
                <li className={css.statistics__iteam}>Bad: {bad},</li>
                <li className={css.statistics__iteam}>Total: {total},</li>
                <li className={css.statistics__iteam}>Positive feedback: {positivePercentage}%</li>
            </ul>
        </>
    )
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}


export default Statistics;