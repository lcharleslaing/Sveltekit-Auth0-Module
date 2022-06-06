<script>
    import SveltekitAuth0 from "../../package/Sveltekit-Auth0.svelte";
</script>

<SveltekitAuth0
    hideBtnIcon={true}
    hideBtnText={false}
    _class="m-1 bg-blue-500 py-0.5 px-2 rounded text-white"
    btn_login_text="Sign-in"
    btn_logout_text="Sign-out"
    imgSrcLogin="/feather/log-in-white.svg"
    imgSrcLogout="/feather/log-out-white.svg"
    iconSize="w-5"
/>
