import { compose } from 'recompose';
import { connect } from 'react-redux';
import PlansPage from './PlansPage';


/*
Solution 1 is using the non refactored example,

the argument to this function is equivalent to the
const "state" in the sample data file
*/

// Solution 1, all plans propagated to plan components
const mapStateToProps = ({ account: { plans: { packs, included } } }) => ({
  plans: packs.reduce((acc, cur) => {
    const product = included.product.find(item => item.id === cur.prod_id);
    acc.push({ ...product, ...cur });
    return acc;
  }, []),
});

/*
Solution 2 and 3 are now using the code refactor where
the plans have already been correctly formatted

the argument to this function is equivalent to the
const "plans" in the sample data file
 */

// Solution 2, parent component is aware of the length of plans
const mapStateToProps = ({ account: { plans } }) => ({
  numberOfPlans: plans.length,
});

// Solution 3, parent component is aware of the ID's of individual plans
const mapStateToProps = ({ account: { plans } }) => ({
  planIds: plans.map(plan => plan.id),
});

export default compose(
  connect(mapStateToProps),
)(PlansPage);
