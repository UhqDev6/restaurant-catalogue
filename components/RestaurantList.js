import RestaurantItem from './RestaurantItem';
import PropTypes from 'prop-types';
import Grid from './styled/Grid';

export default function RestaurantList({ restaurants, isDetails }) {
  return (
    <Grid>
      {restaurants.map((restaurant) => (
        <RestaurantItem key={restaurant.id} {...restaurant} isDetails={isDetails} />
      ))}
    </Grid>
  );
}

RestaurantList.propTypes = {
  restaurants: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    pictureId: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })).isRequired,
  isDetails: PropTypes.bool.isRequired,
};

RestaurantList.defaultProps = {
  isDetails: false,
}