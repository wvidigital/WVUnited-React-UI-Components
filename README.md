# WorldVision UI components

[https://wvidigital.github.io/WVUnited-React-UI-Components](https://wvidigital.github.io/WVUnited-React-UI-Components)

## Installation & Usage

### Prerequisites

1. Clone the repository
2. Install [yarn](https://yarnpkg.com/en/docs/install)

## Installing dependencies

```sh
yarn
```

## Storybook

Use following command to serve a storybook server:

```sh
yarn storybook
```

Storybook server will be started at [http://localhost:9001](http://localhost:9001)

## Development

To link this package, run following command in the @worldvision/ui-components root folder:

```sh
yarn link
```

Run following to start webpack in watch mode:

```sh
yarn dev
```

> This is important to keep running while developing on the consumer/app. Everytime a file changes, webpack creates a new build and the app will show the latest updates.

Move to the the consumer/app's repository's root folder and run following command:

```sh
yarn link @worldvision/ui-components
```

> To confirm that this has worked, you can check the `node_modules/@worldvision/ui-components` folder if this symlinks to your local `ui-components` folder.

Start the consumer/app server and then you're ready to go!

## Deployment

Run following command to deploy to GitHub pages

```sh
yarn deploy
```

The deployed storybook will be available under [https://wvidigital.github.io/WVUnited-React-UI-Components](https://wvidigital.github.io/WVUnited-React-UI-Components).
