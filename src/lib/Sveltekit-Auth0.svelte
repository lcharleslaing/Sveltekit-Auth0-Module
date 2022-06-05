<script>
    import auth from "./auth0/authService";
    import { user, isAuthenticated, popupOpen } from "./authStore";
    import { onMount } from "svelte";
    import { goto } from "$app/navigation";

    export const showLoginBtns = import.meta.env.VITE_SHOW_LOGIN_BTNS;
    export const showNavbar = import.meta.env.VITE_SHOW_NAVBAR;

    let auth0Client;

    onMount(async () => {
        auth0Client = await auth.createClient();

        isAuthenticated.set(await auth0Client.isAuthenticated());
        user.set(await auth0Client.getUser());
    });

    function login() {
        auth.loginWithPopup(auth0Client);
        goto(import.meta.env.VITE_LOGIN_REDIRECT_URL);
    }

    function logout() {
        auth.logout(auth0Client);
        goto(import.meta.env.VITE_LOGOUT_REDIRECT_URL);
    }
</script>

{#if showLoginBtns === "true" && showNavbar === "false"}
    <h1>Login Buttons only</h1>
    {#if $user}
        <button on:click={logout} class="">Logout</button>
    {/if}
    {#if !$user}
        <button on:click={login} class="">Login</button>
    {/if}
{/if}
{#if showNavbar === "true" && showLoginBtns === "false"}
    <h1>Navbar</h1>
    {#if $user}
        <button on:click={logout} class="">Logout</button>
    {/if}
    {#if !$user}
        <button on:click={login} class="">Login</button>
    {/if}
{/if}
<slot />
