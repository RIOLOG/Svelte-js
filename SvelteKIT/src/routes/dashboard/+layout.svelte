<!--

<script>

    let { data, children } = $props();

</script>

<div>

Notifications:

{data.notifications}

</div>

<hr>

{@render children()}

-->








<script>

	let { children, data } = $props();

</script>

<h3>

Dashboard Layout

</h3>

<p>

Notifications :

{data.notifications}

</p>

<hr>

{@render children()}