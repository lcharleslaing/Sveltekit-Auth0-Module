<script>
    import { user } from "../lib/authStore";
</script>

<div class="">
    {#if $user}
        <h1>You are logged in!</h1>
    {/if}
    {#if !$user}
        <h1>You are logged out!</h1>
    {/if}
</div>
