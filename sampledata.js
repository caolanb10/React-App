// Solution 1
const plans = {
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
};

// Solution 2 and 3
const plans = [{
  id: '2134',
  auto_renew: false,
  is_renewable: true,
  subscription_end: '2008-09-15T15:53:00',
  prod_id: '23',
  subscription_name: '365PM',
  credits: '100',
  credits_remaining: '23',
},
{
  id: '1525',
  auto_renew: true,
  is_renewable: true,
  subscription_end: '2008-09-15T15:53:00',
  prod_id: '12',
  subscription_name: '365PM',
  credits: '20',
  credits_remaining: '1',
}];
