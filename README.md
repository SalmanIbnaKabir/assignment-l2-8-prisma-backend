## Assignment 8 Book Catalog

## Live Server Link: https://book-catalog-prisma-psql.vercel.app

```html
<div
  class="postman-run-button"
  data-postman-action="collection/fork"
  data-postman-visibility="public"
  data-postman-var-1="27406965-2de8ace4-c551-4c6f-81ff-ce5e7741b631"
  data-postman-collection-url="entityId=27406965-2de8ace4-c551-4c6f-81ff-ce5e7741b631&entityType=collection&workspaceId=a64a3aed-a283-4b0a-aaef-08256d53f9dd"
></div>
<script type="text/javascript">
  (function (p, o, s, t, m, a, n) {
    !p[s] &&
      (p[s] = function () {
        (p[t] || (p[t] = [])).push(arguments);
      });
    !o.getElementById(s + t) &&
      o
        .getElementsByTagName('head')[0]
        .appendChild(
          ((n = o.createElement('script')),
          (n.id = s + t),
          (n.async = 1),
          (n.src = m),
          n),
        );
  })(
    window,
    document,
    '_pm',
    'PostmanRunObject',
    'https://run.pstmn.io/button.js',
  );
</script>
```

### USER

- api/v1/auth/signup (POST) public API
- api/v1/auth/signin (POST) public API
- api/v1/users (GET) Admin API
- api/v1/users/92fc52de-dcc3-4a3a-acf5-70f99fe2229b (Single GET) Admin API
- api/v1/users/6b2a991c-0091-4490-8823-ce6db576fb91 (PATCH) Admin API
- api/v1/users/c2eb7012-1abf-4106-b386-cc3e6ae8274c (DELETE) Admin API
- api/v1/profile (GET)

  ### CATEGORY

- api/v1/categories/create-category (POST) Admin API
- api/v1/categories (GET) Public API
- api/v1/categories/0af45a6e-22e9-4725-a9b4-98f819f1873c (Single GET) Public API
- api/v1/categories/0af45a6e-22e9-4725-a9b4-98f819f1873c (PATCH) Admin API
- api/v1/categories/0af45a6e-22e9-4725-a9b4-98f819f1873c (DELETE) Admin API

### BOOK

- api/v1/books/create-book (POST) Admin API
- api/v1/books (GET) Public API
- api/v1/books/:categoryId/category (GET) Public API
- api/v1/books/:id (GET) Public API
- api/v1/books/:id (PATCH) Admin API
- api/v1/books/:id (DELETE) Admin API

### ORDER

- api/v1/orders/create-order (POST) Customer API
- api/v1/orders (GET) if Admin have All Order || If customer have his order
- api/v1/orders/:orderId (GET) Admin And Customer API
