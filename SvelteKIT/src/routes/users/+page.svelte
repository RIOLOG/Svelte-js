<script>

    import {

        invalidate

    } from "$app/navigation";

    let { data } = $props();

</script>

<h1>

Users

</h1>

{#each data.users as user}

<p>{user}</p>

{/each}

<button>

Add User

</button>