# Forking Gitsink

This guide helps new contributors fork the repository and keep it in sync with the upstream project.

## 1. Fork the Repository

Click the **Fork** button on GitHub to create your own copy of `coffee-room/Gitsink`.

## 2. Clone Your Fork

```bash
git clone https://github.com/<your-username>/Gitsink.git
cd Gitsink
```

## 3. Add the Upstream Remote

```bash
git remote add upstream https://github.com/coffee-room/Gitsink.git
```

## 4. Sync with Upstream

Before starting new work, always sync your fork:

```bash
git fetch upstream
git checkout main
git merge upstream/main
```

## 5. Submit a Pull Request

Create a feature or fix branch, push it to your fork, and open a pull request against `coffee-room/Gitsink`.
