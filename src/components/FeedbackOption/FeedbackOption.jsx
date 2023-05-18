import PropTypes from 'prop-types';
import css from './FeedbackOption.module.css'

const FeedbackOptions = ({ options, onBtnClick }) => (
    <div className={css.feedback}>
        {options.map(option => (
            <button
                className={css.feedback__buttons}
                type="button"
                key={option}
                onClick={() => { onBtnClick(option) }}
            >{option}</button>
        ))}
    </div>
);

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onBtnClick: PropTypes.func.isRequired,
}

export default FeedbackOptions;