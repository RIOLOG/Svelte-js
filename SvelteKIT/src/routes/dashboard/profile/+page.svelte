<!--

<script>

    let { data } = $props();

</script>

<h1>

Profile

</h1>

{#each data.posts as post}

<p>

{post}

</p>

{/each}

-->





<script>

	import { invalidate, invalidateAll } from "$app/navigation";

	let { data } = $props();

	async function addUser() {
		  console.log("Before POST");
		await fetch("/api/users", {

			method: "POST"

		});

		console.log("After POST");

    	await invalidateAll();

    	console.log("After invalidate");

	}

	async function refreshEverything() {

		await invalidateAll();

	}

</script>

<h1>

Profile

</h1>

{#each data.users as user}

<p>

{user.name}

</p>

{/each}

<button onclick={addUser}>

Add User

</button>

<button onclick={refreshEverything}>

Refresh All

</button>







