<script>
    import SveltekitAuth0 from "../lib/Sveltekit-Auth0.svelte";
    import { user } from "/src/lib/stores/authStore";
</script>

<SveltekitAuth0
    hideBtnIcon={false}
    btn_login_text="Login"
    btn_logout_text="Logout"
    imgSrcLogin="/feather/log-in.svg"
    imgSrcLogout="/feather/log-out.svg"
    iconSize="w-5"
    _class="m-2 btn btn-ghost uppercase btn-primary text-sm"
/>
<pre>{JSON.stringify($user, null, 2)}</pre>
