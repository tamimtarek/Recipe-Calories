
import PropTypes from 'prop-types';

const Ingredients = ({i}) => {
    return (
        <div>
            <ul>
                <li>{i}</li>
            </ul>
        </div>
    );
};

Ingredients.propTypes = {
    i: PropTypes.array
};

export default Ingredients;