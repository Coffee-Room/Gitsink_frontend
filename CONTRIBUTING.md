# Contributing to Gitsink Frontend

Thank you for considering contributing to Gitsink! We welcome improvements to the UI/UX, bug fixes, and documentation updates.

## Getting Started

1. **Fork** the repository to your own GitHub account.
2. **Clone** your fork:
   ```bash
   git clone https://github.com/<your-username>/Gitsink.git
   cd Gitsink
   ```
3. **Install dependencies** and start the dev server:
   ```bash
   # using npm
   npm install
   npm run dev

   # or with yarn
   yarn install
   yarn dev
   ```

## Branch Naming

Create branches off of `main` using the following prefixes:
- `feature/<name>` for new features
- `fix/<name>` for bug fixes
- `docs/<name>` for documentation changes

## Pull Request Guidelines

- Keep PRs small and focused.
- Use descriptive titles and include context about the change.
- Ensure the application builds and lint passes before opening the PR:
  ```bash
  npm run lint
  npm run build
  ```
- Reference related issues when applicable.

## Code Formatting

We recommend using **Prettier** and **ESLint** to maintain consistent code style. Run `npm run lint` before submitting a PR.

## Reporting Bugs or Requesting Features

Please use [GitHub Issues](https://github.com/coffee-room/Gitsink/issues) to report bugs or suggest features.

## Questions?

Feel free to start a discussion in [GitHub Discussions](https://github.com/coffee-room/Gitsink/discussions) or join our community chat.
