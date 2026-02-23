# System Architecture and Engineering Decisions

## 1) Folder Structure

```text
algorithm_lab/
  backend/
    src/
      config/         # environment + DB bootstrap
      controllers/    # request orchestration
      services/       # business logic
      repositories/   # data-access abstraction
      models/         # mongoose schemas + indexes
      middleware/     # auth, validation, error, security
      validators/     # Joi contracts
      routes/         # modular REST routes
      docs/           # OpenAPI config
      utils/          # logger, errors, responses, jwt helpers
    tests/
  frontend/
    src/
      app/            # store and app composition
      api/            # axios client + interceptors
      features/       # slices by bounded context
      components/     # reusable UI/layout components
      pages/          # route-level screens
      routes/         # route definitions + guards
      styles/         # global styles
    public/           # robots + sitemap
  docker/
  nginx/
```

## 2) Data Model (scalable for 10k+ users)

- **User**: auth identity + role + follower counters.
- **Blog**: text index for search, status index for listing, popularity index for trending.
- **Comment**: parent-comment pointer for nested replies.
- **Follower**: unique compound index to prevent duplicate follow edges.
- **Bookmark**: unique compound index user+blog.
- **Notification**: recipient/time index for inbox retrieval.

## 3) Backend Architecture

- Layered dependency direction (controller -> service -> repository -> model).
- Centralized `AppError` and response wrapper for consistent API envelope.
- Security middleware chain with rate limiting, sanitization, CSP/helmet, XSS and CSRF hooks.
- JWT access token for API calls, refresh token for session continuity.

## 4) Frontend Architecture

- Route-level code splitting with `React.lazy`.
- Redux Toolkit for auth/blog/ui domains.
- ProtectedRoute for auth + role checks.
- Tailwind-based design system primitives and skeleton loaders.

## 5) Production Controls

- Environment-driven config in `.env` files.
- Dockerfiles for backend/frontend and compose stack.
- SEO assets (`robots.txt`, `sitemap.xml`) and dynamic page metadata with Helmet.

## 6) Extension Points

- Plug Redis cache in service layer for hot feeds.
- Add Socket.io under `backend/src/sockets` for real-time notifications.
- Integrate Cloudinary upload service and CDN URLs in Blog/User models.
