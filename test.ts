import got from 'got';

Feature('Store feature');

Scenario('Get store order by id', async ({ I }) => {
    const resp = await got('http://petstore.swagger.io/v2/store/order/1')
    const body = JSON.parse(resp.body)
    I.assert(body.id, 1)
});