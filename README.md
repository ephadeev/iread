# iread

![](https://img.shields.io/badge/architecture-%20Feature--Sliced%20Design-000000?style=flat)

## Contents
- [Application architecture](#Application-architecture)
- [State management](#State-management)
- [Running locally](#Running-locally)
- [Deployment](#Deployment)
- [License](#License)

## Application architecture

<a href="./Application-architecture.svg">
  <img alt="application architecture" width="390px" src="./Application-architecture.svg">
</a>

Application is a single repository monolith, consisting of frontend written in [React](https://react.dev/)
and backend part made using [Google Firebase](https://firebase.google.com/). As a build tool I use [Vite](https://vite.dev).
I developed the frontend side of application using [FSD](https://feature-sliced.design/) methodology with some
simplifications. For example, inside pages layer we have ui and lib segments without slices.

Application layers:
- app - everything that makes the app run — entrypoints, global styles: `index.tsx`, `App.tsx`, `index.css`, `App.css`, etc.
- pages - large parts of a page in nested routing: `Activity`, `Authentication` and `Friends`, etc.
- widgets - large self-contained chunks of functionality or UI, in our case that are: `Footer`, `Header`, `Nav`, etc.
- features - reused implementations of entire product features, i.e. actions that bring business value to the user: `AddFriend`, `AddMessage`, `AddPost`, etc.
- entities - business entities that the project works with: `Message`, `Post` and `User`.
- shared - reusable functionality, especially when it's detached from the specifics of the project/business

Folders inside every layer divide the layer by domain and by FSD it's called slices.
Also, every slice and shared layer is divided by segments: ui, model and api.

Also, I configured [aliasing paths](https://dev.to/tilly/aliasing-in-vite-w-typescript-1lfo) in the project for all layers.
For linting & formatting I use [Biome](https://biomejs.dev).
For now not all Components were divided into [presentational and container](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0).

## State management
I decided to use [RTK](https://redux-toolkit.js.org/) with RTK Query for state management because I wanted to have a centralized state
and the ability to see when, where, and how the application's state changed.

## Running locally
All the following commands should be executed from the root folder of the project.
1. Install necessary dependencies:

```bash
npm ci
```

2. Start frontend in development mode:

```bash
npm run start
```

## Deployment
Frontend is deployed to [Google Firebase Hosting](https://firebase.google.com/products/hosting) using. 
Deployment is triggered automatically when there are changes
on the `main` branch.

## License

Licensed under the MIT license.