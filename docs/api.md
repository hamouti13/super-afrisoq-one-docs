# API Documentation

## Authentication

### Login
- **Endpoint**: `/api/auth/login`
- **Method**: POST
- **Request**:
  ```json
  {
    "email": "user@example.com",
    "password": "your-password"
  }
  ```
- **Response**:
  ```json
  {
    "token": "your-auth-token",
    "user": {
      "id": 1,
      "name": "John Doe",
      "email": "user@example.com"
    }
  }
  ```

### Register
- **Endpoint**: `/api/auth/register`
- **Method**: POST
- **Request**:
  ```json
  {
    "name": "John Doe",
    "email": "user@example.com",
    "password": "your-password",
    "password_confirmation": "your-password"
  }
  ```

## Items

### Get All Items
- **Endpoint**: `/api/items`
- **Method**: GET
- **Parameters**:
  - `page`: Page number (for pagination)
  - `per_page`: Items per page
  - `category_id`: Filter by category
  - `store_id`: Filter by store

### Get Single Item
- **Endpoint**: `/api/items/{id}`
- **Method**: GET
- **Parameters**:
  - `id`: Item ID

### Create Item
- **Endpoint**: `/api/items`
- **Method**: POST
- **Request**:
  ```json
  {
    "name": "Product Name",
    "description": "Product description",
    "price": 100.00,
    "category_id": 1,
    "store_id": 1,
    "images": ["image1.jpg", "image2.jpg"]
  }
  ```

## Orders

### Get All Orders
- **Endpoint**: `/api/orders`
- **Method**: GET
- **Parameters**:
  - `page`: Page number
  - `per_page`: Orders per page
  - `status`: Filter by status

### Get Single Order
- **Endpoint**: `/api/orders/{id}`
- **Method**: GET
- **Parameters**:
  - `id`: Order ID

### Create Order
- **Endpoint**: `/api/orders`
- **Method**: POST
- **Request**:
  ```json
  {
    "items": [
      {
        "id": 1,
        "quantity": 2
      }
    ],
    "delivery_address": "Delivery Address",
    "payment_method": "cash"
  }
  ```

## Stores

### Get All Stores
- **Endpoint**: `/api/stores`
- **Method**: GET
- **Parameters**:
  - `page`: Page number
  - `per_page`: Stores per page
  - `status`: Filter by status

### Get Single Store
- **Endpoint**: `/api/stores/{id}`
- **Method**: GET
- **Parameters**:
  - `id`: Store ID

## Error Responses

All API endpoints return standardized error responses:

```json
{
  "success": false,
  "message": "Error message",
  "errors": {
    "field_name": ["Error description"]
  }
}
```

## Rate Limiting

- 60 requests per minute for authenticated users
- 30 requests per minute for unauthenticated users
- 10 requests per minute for sensitive endpoints
