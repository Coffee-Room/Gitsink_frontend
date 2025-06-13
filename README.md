# Gitsink Frontend

![MIT License](https://img.shields.io/badge/license-MIT-green.svg)

Gitsink lets developers sync their GitHub projects, fetch metadata like repository descriptions, tags, and `Portfolio.md` files, and expose them through a clean API. This repository contains the **frontend** for that service.

## Features

- GitHub OAuth login
- View and manage synced repositories
- Blacklist unwanted repos
- Generate and manage your API key
- Documentation and sync history views

Check out the live site at [https://gitsink.tech](https://gitsink.tech).

For UI conventions, see [docs/style-guide.md](docs/style-guide.md).


## Getting Started

Install dependencies and start the development server.

```bash
# with npm
npm install
npm run dev

# or with yarn
yarn install
yarn dev
```

## Contribution Guidelines

Please see [CONTRIBUTING.md](CONTRIBUTING.md) for how to get involved. New issues and pull requests are always welcome!

## Maintainers

- Wave – [@Enochthedev](https://github.com/Enochthedev)
- The Coffee Room team

## Syncing with the Public Repository

The `dev` branch of this private repository stays aligned with
[`Coffee-Room/gitsink_frontend`](https://github.com/Coffee-Room/gitsink_frontend).
A workflow listens for a `repository_dispatch` event (`public-main-updated`) or
runs hourly. When triggered, it merges the public `main` branch into `dev`,
pushes the branch, and opens an automated pull request from `dev` to `main`.
All sync operations use a single secret token, `PUBLIC_REPO_TOKEN`, which has the
permissions needed to push to other repositories.

## License

This project is licensed under the MIT License. See the [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) for community behavior guidelines.

## Error Handling

This application includes custom error pages and boundaries.
- **404 Not Found** – defined in `app/not-found.tsx`.
- **500 Server Error** – defined in `app/error.tsx`.
- **Global Error** – defined in `app/global-error.tsx`.
- **Component Error Boundaries** – see `components/error-handling/error-boundary.tsx`.

