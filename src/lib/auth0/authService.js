// src/authService.js
import createAuth0Client from "@auth0/auth0-spa-js";
import { user, isAuthenticated, popupOpen } from "../authStore";
import config from "./auth_config";



async function createClient() {
    let auth0Client = await createAuth0Client({
        domain: config.domain,
        client_id: config.clientId
    });

    return auth0Client;
}

/**
 * @param {{ loginWithPopup: (arg0: any) => any; getUser: () => {} | PromiseLike<{}>; }} client
 * @param {any} options
 */
async function loginWithPopup(client, options) {
    popupOpen.set(true);
    try {
        await client.loginWithPopup(options);
        user.set(await client.getUser());
        isAuthenticated.set(true);
    } catch (e) {
        console.error(e);
    } finally {
        popupOpen.set(false);
    }
}

/**
 * @param {{ logout: () => any; }} client
 */
function logout(client) {
    return client.logout();
}

const auth = {
    createClient,
    loginWithPopup,
    logout
};

export default auth;