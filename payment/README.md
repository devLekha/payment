# Mock Payment API
* It is a mock api to process payments for the customers.
* Created an endpoint to create payments in two methods:
    *Credit Card
    *Boleto
* Api returns the buyers information along with payment details.
* An end point is created to check all the payments done by the client along with payment information.

### '/client' route is for adding client in database
Request data for /client route:
```json
{"name":"abc",
"email":"abc@gmail.com",
"cpf":"823.467.230-60"}
```

### '/payments' route is for getting all the payments of a client
Request data for /payments route:
```json
{"name":"abc"}
```
### '/payment?type=boleto' route for doing payment using boleto method
Request data for the route:
```json
{"name":"abc",
"amount":1200}
```

### '/payment?type=card' route for doing payment using card method
Request data for the route:
```json
{"name":"abc",
"amount":1200,
"holder":"abc def",
"number":"222.4053.4324.8877",
"exp":"03/2030",
"cvv":"031"}
```

### Project Architecture:
* config
  * db.js
* models
  * client.js
  * payment.js
* routes
  * client.js
* index.js
* package-lock.json
* package.json

### To install all the dependencies of the project run:
```node
npm install
```

### To start the project run the following command:
```node
npm run dev
```
