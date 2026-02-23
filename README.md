# MERN Blogging Platform (Production-Oriented Monorepo)

This repository contains a scalable blogging platform built with **MongoDB, Express, React, and Node.js** using clean architecture, layered backend boundaries, and modular frontend patterns.

## Monorepo Layout

- `backend/` — REST API, auth, RBAC, blog engine, comments, notifications, analytics.
- `frontend/` — React SPA with Tailwind, Redux Toolkit, protected routes, lazy loading.
- `docker/` and `nginx/` — production deployment artifacts.

## Architecture Highlights

- Clean layering: **route -> controller -> service -> repository -> model**
- Centralized config, validation, error handling, and API response envelope
- JWT access/refresh token strategy with refresh rotation hooks
- Security: helmet, cors, rate-limit, mongo-sanitize, hpp, xss-clean, csurf
- Search, pagination, sorting, filtering, slug URLs, nested comments
- Indexing for high-read workloads and text search
- OpenAPI docs at `/api/docs`
- Frontend supports dark mode, skeleton loaders, split chunks, role-based pages

## Quick Start

### Backend

```bash
cd backend
cp .env.example .env
npm install
npm run dev
```

### Frontend

```bash
cd frontend
cp .env.example .env
npm install
npm run dev
```

## Roadmap Coverage (requested sequence)

1. Folder structure ✅
2. Database schema ✅
3. Backend setup ✅
4. Frontend setup ✅
5. Authentication ✅
6. Blog CRUD ✅
7. Advanced features ✅
8. Security/performance hardening ✅
9. Deployment prep ✅

