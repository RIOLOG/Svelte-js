<script>

    import {

        page

    } from "$app/state";

</script>

<h1>

Oops!

</h1>

<h2>

{$page.status}

</h2>

<p>

{$page.error?.message}

</p>