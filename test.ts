import got from 'got';

Feature('Store feature');

Scenario('Get store order by id', async ({ I }) => {
    const id: number | string = 1
    const resp = await got(`${process.env.BASE_URL}/store/order/${id}`)
    const body = JSON.parse(resp.body)
    I.assertEqual(body.id, 1)
});

Scenario('Create new user', async ({ I}) => {
    const userFields = {
         "id": 1,
         "username": 'johnSmith',
         "firstName": 'John',
         "lastName": 'Smith',
         "email": 'john@gmail.com',
         "password": '123456',
         "phone": '324554545',
         "userStatus": 0
        }
    {
    const response = await got(`${process.env.BASE_URL}/user`, {
         method: 'POST',
         json: userFields
     })
    const body = JSON.parse(response.body)
    I.assertEqual(body.code, 200)
    I.assertEqual(body.message, userFields.id)
    }
})

Scenario('Place an order', async ({ I}) => {
    const id: number = 1
    const petId: number = 1
    const quantity: number = 5
    const status: string = 'placed'
    {
        const response = await got<any>(`${process.env.BASE_URL}/store/order`, {
              method: 'POST',
              json: { id, petId, quantity, status }
            })
        const body:any = response.body
        I.assertEqual(body.status, status)
        I.assertEqual(body.quantity, quantity)
        I.assertEqual(body.complete, false)
    }
})
