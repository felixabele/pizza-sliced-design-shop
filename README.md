# Showcase project for Feature-Sliced Design (FSD)

This project is a basic and rudimentary e-commerce application to showcase and discover the use of [Feature-Sliced Design](https://feature-sliced.design/) in an Angular application.

Deployed Preview: https://felixabele.github.io/pizza-sliced-design-shop/

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Lint

The Project uses [ESLint](https://eslint.org/) for Typescript linting and [Steiger](https://npmjs.com/package/steiger) for FSD-Checks.

Run with `npm run lint`

## Create new Layers, Slices or Segments

[@feature-sliced/cli](https://www.npmjs.com/package/@feature-sliced/cli) supports the generation of FSD-layer structure via CLI.

**Create new pages**

`npx fsd pages product-overview product-detail cart --segments ui`

**create shared configs and api**

`npx fsd shared --segments api config`

## Project structure and Layer documentation

- [App](./src/app/README.md)
- [Pages](./src/pages/README.md)
- [Widgets](./src/widgets/README.md)
- [Features](./src/features/README.md)
- [Entities](src/entities/README.md)
- [Shared](./src/shared/README.md)
