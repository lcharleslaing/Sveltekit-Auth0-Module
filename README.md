## Authentication - Sveltekit & Auth0

If you are in need of authentication and you love Auth0 as much as I do, You've found the right package!

Authentication can be one of the most frustrating parts of our creation process as developers and hopefully you find this as simple to use and save time. 

The initial reason for creating this was because of issues I had when creating the auth components, mounting everything in __layout.svelte file and then being able to place buttons in the Navbar.svelte component.  I had issues and this seemed to do everything I desired.

Enjoy what you do and prosper at it!

Follow the below instructions and you'll be up and running with Auth0 authentication in minutes.

I use TailwindCSS so it setup with that in mind and if you do not, it will work just fine.

## Create Sveltekit Project

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

#### Create or Edit .env file

```env
VITE_AUTH0_DOMAIN = <your-auth0-domain>
VITE_AUTH0_CLIENT_ID = <your-auth0-client-id>
VITE_LOGIN_REDIRECT_URL = "/somewhere"
VITE_LOGOUT_REDIRECT_URL = "/somewhere-else"
```
#### Create authStore in your project
```bash
./src/lib/stores/authStore.js (or .ts)
```
#### Add below code to store
```javascript
import { writable, derived } from "svelte/store";

export const isAuthenticated = writable(false);
export const user = writable({});
export const popupOpen = writable(false);
export const error = writable();

```

##### Get Auth0 User Info once Logged in

```html
<script>
    import { user } from "/src/lib/stores/authStore";
 </script>

<pre>{JSON.stringify($user, null, 2)}</pre>
```

##### Component Settings
Insert this into your Navbar component or anywhere else you need it to be.
```html
<script>
    import SveltekitAuth0 from "sveltekit-auth0-js/Sveltekit-Auth0.svelte";
</script>

<SveltekitAuth0
    hideBtnIcon={false}
    btn_login_text=""
    btn_logout_text=""
    imgSrcLogin="/feather/log-in.svg"
    imgSrcLogout="/feather/log-out.svg"
    iconSize="w-5"
    _class="m-2 btn btn-ghost uppercase btn-primary text-sm"
/>

```