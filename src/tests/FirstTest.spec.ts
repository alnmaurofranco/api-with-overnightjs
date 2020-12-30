// eslint-disable-next-line import/extensions
import Site from '@models/WebSeo';

test('it should be ok', () => {
  const site = new Site();

  site.title = 'OvernightJS';

  expect(site.title).toEqual('OvernightJS');
});
