<script>
	let { onIncrement } = $props();

	let count = $state(0);

	function increment() {
		count++;
		onIncrement(count);
	}
</script>

<p>Local Count: {count}</p>

<button onclick={increment}>
	+
</button>