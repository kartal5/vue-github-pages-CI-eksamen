# Info

The repo is set to public as setting it to private introduced problems with using gh-pages

## Features

- Continuous deployment to GitHub Pages on any commit.
- Static code analysis with ESLint to ensure code quality.
- Unit testing with Jest.
- End-To-End (E2E) testing with Cypress


## Setup

1. **Vue CLI progress:**
   ```bash
   git init
   git branch -M main
   git remote add origin https://github.com/kartal5/vue-github-pages-CI-eksamen.git
   npm install

   vue add unit-jest
   npm install --save-dev @vue/test-utils @vue/vue3-jest jest
   npm run test:unit

   npm install --save-dev cypress
   npm run test:e2e

   npm run lint