import React from 'react';
import PropTypes from 'prop-types';
import { LayoutFullWidth } from 'feature-layouts';
import Plan from './Plan';
import EmptyState from '../EmptyState';
import classes from './PlansPage.css';


/*
Solution 1, plans object will have changes on interaction
forcing a full component re-render
*/
const PlansPage = ({
  plans,
}) => (
  <LayoutFullWidth>
    {plans.length > 0
      ? (plans.map(plan => (
        <Plan
          plan={plan}
        />
      )))
      : (
        <EmptyState
          title={labels.emptyStateTitle}
          message={labels.emptyStateMessage}
        />
      )
    }
  </LayoutFullWidth>
);

/*
Solution 2, no parent component re-render needed
generated array of plans created before returning component
*/

const PlansPage = ({
  numberOfPlans,
}) => {
  const plans=[];
  for(let i = 0; i < numberOfPlans; i++){
    plans.push(<Plan index={i} />);
  }
  return (
    <LayoutFullWidth>
    {numberOfPlans> 0
      ? {plans}
      : (
        <EmptyState
          title={labels.emptyStateTitle}
          message={labels.emptyStateMessage}
        />
      )
    }
  </LayoutFullWidth>)
};

/*
Solution 3
no parent component re-render needed
no array of components generated before rendering component
*/

const PlansPage = ({
  planIds,
}) => (
  <LayoutFullWidth>
    {planIds.length > 0
      ? (planIds.map(plan => (
        <Plan
          plan={plan}
        />
      )))
      : (
        <EmptyState
          title={labels.emptyStateTitle}
          message={labels.emptyStateMessage}
        />
      )
    }
  </LayoutFullWidth>
);

PlansPage.propTypes = {
  plans: PropTypes.array.isRequired,
};

export default PlansPage;
