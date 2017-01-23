import { brandibble } from './config/stubs';
import ENV from './config/environment';

const SAMPLE_MENU_LOCATION_ID = 19;

before(done => {
  const setAuthToken = () => {
    brandibble.orders.create(SAMPLE_MENU_LOCATION_ID).then(() => {
      brandibble.customers.authenticate({ email: 'sanctuary-testing-email@example.com', password: 'password' }).then(() => {
        window.TEST_TOKEN = brandibble.adapter.customerToken;
        brandibble.payments.all().then(res => {
          res.data.forEach(card => {
            brandibble.payments.delete(card.customer_card_id);
          });
          done();
        });
      });
    });
  };

  brandibble.customers.create({
    first_name: 'Sanctuary',
    last_name: 'Computer',
    email: 'sanctuary-testing-email@example.com',
    password: 'password'
  }).then(setAuthToken).catch(setAuthToken);
});
