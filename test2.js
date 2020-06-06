// sample state
const state = {
  account: {
    plans: {
      packs: [
        {
          id: '2134',
          subscription_end: '2008-09-15T15:53:00',
          prod_id: '23',
          subscription_name: '365PM',
          credits: '100',
          credits_remaining: '23',
        },
        {
          id: '1525',
          subscription_end: '2008-09-15T15:53:00',
          prod_id: '12',
          subscription_name: '365PM',
          credits: '20',
          credits_remaining: '1',
        },
      ],
      included: {
        product: [
          {
            id: '23',
            auto_renew: false,
            is_renewable: true,
          },
          {
            id: '12',
            auto_renew: true,
            is_renewable: true,
          }],
      },
    },
  },
};

const mapStateToProps = ({ account: { plans: { packs, included } } }) =>
  packs.reduce((acc, cur) => {
    const product = included.product.find(item => item.id === cur.prod_id);
    acc.push({ ...product, ...cur });
    return acc;
  }, []);
