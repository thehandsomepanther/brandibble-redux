import Brandibble from 'brandibble';
import ENV from './environment';
import localforage from 'localforage';

localforage.config({name: 'brandibble-redux-test', storeName: 'brandibble-redux-test'});

export const brandibble = new Brandibble({
  apiKey: ENV.BRANDIBBLE_API_KEY,
  brandId: ENV.BRANDIBBLE_BRAND_ID,
  apiEndpoint: ENV.BRANDIBBLE_API_ENDPOINT,
  storage: localforage,
});

export const customersValidateStub = {
  is_brandibble_active: true,
  is_brandibble_customer: true,
  is_levelup_connected: true,
  is_levelup_user: true,
  levelup_connected_email: 'api@brandibble.co',
};

export const orderStub = {
  'address': {
    'city':'New York',
    'customer_address_id':158082,
    'state_code':'NY',
    'street_address':'150 East 52nd Street',
    'unit':'1001',
    'zip_code':'10022'
  },
  'cart': [
    {
      'id':5688,
      'instructions':'',
      'made_for':'',
      'name':'Charred Chicken',
      'option_gropus': [
        {
          'id':473,
          'option_items': [
            {
              'id':9431,
              'name':'Classic Brown Rice',
              'price':0.0
            }
          ]
        },
      ],
      'price':10.57,
      'quantity':1,
      'total_price':11.63
    },
  ],
  'customer': {
    'customer_id':3,
    'email':'jc.harrington1@gmail.com',
    'first_name':'JC',
    'last_name':'Gmail',
    'phone':'2028343641'
  },
  'discount':0.0,
  'include_utensils':1,
  'location_id':20,
  'notes_for_store':'These are notes for the store.',
  'payment_type':'cash',
  'requested_at':'2016-11-11T16:30:00Z',
  'service_type':'delivery',
  'shipping':0.0,
  'subtotal':20.34,
  'surcharge':0.0,
  'tax':1.81,
  'tip':0.0,
  'total':22.15,
};

export const validCredentialsStub = {
  email: 'sanctuary-testing-email@example.com',
  password: 'password'
};

export const authResponseStub = {
  'allergens': [
    'Gluten',
    'Dairy',
  ],
  'customer_id': 88210,
  'email': 'api@brandibble.co',
  'first_name': 'Brandibble',
  'last_name': 'API',
  'levelup_connected': true,
  'levelup_email': 'levelup@brandibble.co',
  'phone': '212-555-5555',
};

export const SAMPLE_MENU_LOCATION_ID = 19;
export const SAMPLE_EMAIL = 'sanctuary-testing-email@example.com';
