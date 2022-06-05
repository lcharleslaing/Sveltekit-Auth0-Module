# Create Sveltekit Project

Visit the Docs [`Getting Started`](https://kit.svelte.dev/docs/introduction#getting-started).


```bash
# create a new project in the current directory
npm init svelte

# create a new project in my-app
npm init svelte my-app

# create a new project in the current directory
pnpm create svelte

# create a new project in the current directory
pnpm create svelte my-app

```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open

# Using pnpm
pnpm dev

# or start the server and open the app in a new browser tab
pnpm dev -- --open
```

## Building

To create a production version of your app:

```bash
# using npm
npm run build

# using pnpm
pnpm build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

## Installing 'sveltekit-auth0-js'

Visit NPM [`sveltekit-auth0-js`](https://www.npmjs.com/package/sveltekit-auth0-js).


```bash
# Using npm
npm i sveltekit-auth0-js

# Using pnpm
pnpm i sveltekit-auth0-js
```

#### Import and add into __layout.svelte
```html
<script>
    import SveltekitAuth0 from "sveltekit-auth0-js/Sveltekit-Auth0.svelte";
</script>

<SveltekitAuth0>
    <slot />
</SveltekitAuth0>
```
#### Create or Edit .env file
Testing
- VITE_SHOW_LOGIN_BTNS set to true
- VITE_SHOW_NAVBAR set to false

Navbar usage
- VITE_SHOW_LOGIN_BTNS set to false
- VITE_SHOW_NAVBAR set to true

##### .env (contents)
```env
VITE_AUTH0_DOMAIN = <your-auth0-domain>
VITE_AUTH0_CLIENT_ID = <your-auth0-client-id>
VITE_LOGIN_REDIRECT_URL = <your-login-redirect-url>
VITE_LOGOUT_REDIRECT_URL = <your-logout-redirect-url>
VITE_SHOW_LOGIN_BTNS = true
VITE_SHOW_NAVBAR = false
```
