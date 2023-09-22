## Assignment 8 Book Catalog

### USER

- api/v1/auth/signup (POST) public API
- api/v1/auth/signin (POST) public API
- api/v1/users (GET) Admin API
- api/v1/users/92fc52de-dcc3-4a3a-acf5-70f99fe2229b (Single GET) Admin API
- api/v1/users/6b2a991c-0091-4490-8823-ce6db576fb91 (PATCH) Admin API
- api/v1/users/c2eb7012-1abf-4106-b386-cc3e6ae8274c (DELETE) Admin API
- api/v1/profile (GET)

  ### CATEGORY

- api/v1/categories/create-category (POST)
- api/v1/categories (GET)
- api/v1/categories/f7b077e4-5834-4008-9026-da51118c010d (Single GET)
- api/v1/categories/f7b077e4-5834-4008-9026-da51118c010d (PATCH)
- api/v1/categories/076dabae-5d88-4152-bca3-e43368a4ce2f (DELETE)

### BOOK

- api/v1/books/create-book (POST)
- api/v1/books (GET)
- api/v1/books/:categoryId/category (GET)
- api/v1/books/:id (GET)
- api/v1/books/:id (PATCH)
- api/v1/books/:id (DELETE)

### ORDER

- api/v1/orders/create-order (POST)
- api/v1/orders (GET)
- api/v1/orders/:orderId (GET)
