

<!--
<script>
    let { children } = $props();
</script>

<header>

    🌐 Global Navbar

</header>

<hr>

{@render children()}

<hr>

<footer>

    Global Footer

</footer>
-->







<!--

<script>

    let { data, children } = $props();

</script>

<nav>

    Welcome

    {data.user.name}

</nav>

<hr>

{@render children()}

-->







<script>

	let { children, data } = $props();

</script>

<h2>

Root Layout

</h2>

<p>

Logged User :

{data.user.name}

</p>

<hr>

{@render children()}