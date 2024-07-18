Design the Orders management system API

Security:
Basic Authentication should be used to secure the API. The Authorization header should be provided with the username and password encoded in Base64.

API Endpoints:
Create Order

Endpoint: POST /orders
Description: Creates a new customer order.
Request Body:
{
"orderId": "string",
"customerId": "string",
"placementDate": "string",
"status": "string"
}
Response:
201 Created: Order successfully created.
400 Bad Request: Invalid input data.
Update Order

Endpoint: PUT /orders/:orderId
Description: Updates an existing customer order.
Request Body:

{
"customerId": "string",
"placementDate": "string",
"status": "string"
}
Response:
200 OK: Order successfully updated.
404 Not Found: Order with the specified ID not found.
400 Bad Request: Invalid input data.
Search Orders

Endpoint: GET /orders
Description: Searches for customer orders based on query parameters.
Query Parameters:
customerId (optional)
status (optional)
Response:
200 OK: Returns a list of orders matching the search criteria.
400 Bad Request: Invalid query parameters.
Authentication:
