import {test,expect} from '@playwright/test'

test('Test1:API Testing',async({request})=>{
    //request fixture is used to send API Request in playwright and perf'orm api testing
    //without request

    const response=await request.get('https://jsonplaceholder.typicode.com/users/1')
    //get: get api request
//const response:store

    expect(response.ok()).toBeTruthy()
    //tobeTruthy(): 
    //response.ok()- check whether api request was success or not
    //used for validation -expect
    const body=await response.json() //this method converts the api response in the json format
    console.log(body)


})
test('Post Request',async({request})=>{
    const response=await request.post('https://jsonplaceholder.typicode.com/users',{
        data:{
            name:'Jamsheera',
            email:'jamsheera@gmail.com'
        }
    })
    expect(response.status()).toBe(201)
const responsebody=await response.json()
console.log(responsebody)


})
test('Patch Request',async({request})=>{
    //patch:partially update data
    const response=await request.patch('https://jsonplaceholder.typicode.com/users/10',{
        data:{
            name:'Clementina DuBuque abcc'


        }
    })
    expect(response.status()).toBe(200)

})

test('PUT Request',async({request})=>{
const response=await request.put('https://jsonplaceholder.typicode.com/users/10',{
    data:{
         "id": 10,
    "name": "Jamsheera",
    "username": "Moriah",
    "email": "email@gmail.com",
    "address": {
      "street": "qqqqqqqqqqurnpike",
      "suite": "198",
      "city": "yyyyyyyyyy",
      "zipcode": "31428-2260",
      "geo": {
        "lat": "2386",
        "lng": "2232"
      }
    },
    "phone": "944-648-3804",
    "website": "https://.net",
    "company": {
      "name": "summit LLC",
      "catchPhrase": " task-force",
      "bs": "end-to-end models"
    }
  }

}
)
expect(response.status()).toBe(200)


})

test.only('delete Request',async({request})=>{
const response=await request.delete('https://jsonplaceholder.typicode.com/users/10',{
    
})
expect(response.status()).toBe(200)

})