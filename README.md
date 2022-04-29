ol-ux
---

This project utilizes yarn workspaces to manage this monorepo. Most commands are available both at the root and within individual packages.

### Running tests

You can run tests the following ways:

```shell
yarn test // run tests using the latest react version
REACT_VERSION=0.18 yarn test // run tests using the react 0.18
REACT_VERSION=0.17 yarn test // run tests using the react 0.17
REACT_VERSION=0.16 yarn test // run tests using the react 0.16
```

### Contributing

- We aim for 100% test coverage, this is enforced by Jest's coverage checking.
- This repository utilizes [`changesets`](https://github.com/changesets/changesets/) to manage the changelog. This tool is monorepo-aware and will prompt you to specific the impact of your changes in terms of semantic versioning. To create a new changeset for your commit/PR, you should run `yarn changeset` and follow the interactive prompts.

### Best Practices

- Prefer functional components, avoid use of class-based components.
- Prefer using hook-based implementations.
- Avoid implementation of HOCs.
- Prefer composition of many smaller components over larger monolithic components.
- Code lives in a `src/` directory and tests live in a `test/`. Name test files as `[module].test.ts{x}`.


The root `package.json` defines preferred libraries as dependencies:

- [`react-query`](https://react-query.tanstack.com/overview)
  - Use for API data loading, implement queries in reusable react hooks.
- [`jest`](https://jestjs.io/) for running tests.
  - Use this instead of `mocha`, `chai`, and `sinon`.
- [`react-testing-library`](https://testing-library.com/docs/react-testing-library/) for writing tests.
  - Use this instead of `enzyme`.
- `prettier` for code formatting
- `eslint` for code linting