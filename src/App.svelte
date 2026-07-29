<!--
//Variable displaying

<script>
  let name = "Ankit";
  let a = 20, b = 30;
</script>

<h1>Hello {name}</h1>
<h2>Value {a+b}</h2>
<h2>upper case: {name.toUpperCase()}</h2>
-->






<!--
//Reactivity - Interactuve Example

<script> 

  let count = 0;

  function inc() {
    console.log("increment");
    count += 1;
  }

  function dec() {
    count -= 1;
  }

  function reset() {
    count = 0;
  }

</script>




<h1>Counter: {count}</h1>

<button onclick={inc}>+</button>

<button onclick={dec}>-</button>

<button onclick={reset}>Reset</button>


Internal Flow

When you click the button:

Click

↓

increment()

↓

count changes

↓

Generated update code runs

↓

Only the text node displaying count updates

Notice what's not in the flow:

No Virtual DOM
No setState
No component function re-execution

-->










<!--
//Template Syntax & Rendering
<script>

  function greet() {
    return "Hello Ankit"
  }

   let user = {
    name:"Ankit", 
    age:24
  };

  let arr = ["Abe", "1"];


  let htmlsyntax = "<h1>Hello</h1>"

</script>

<h1>{greet()}</h1>


<h1>{user.name}</h1>
<h1>{user.age}</h1>

<h1>{arr}</h1>
 
//Output is literally: 
//<h1>Hello</h1>

Not a heading.

Why?

Because Svelte escapes HTML by default to protect against XSS (Cross-Site Scripting).
<h2>{htmlsyntax}</h2>


//If you intentionally want to render HTML, Svelte provides a special syntax:
{@html htmlsyntax}


-->






<!--
//Event Handling (Making Your App Interactive)
//user click -> browser create click event -> svelte listens -> your function executes


<script>

  let value = "";

  function handleClick(event) {
    console.log("event fired ", event);
  }

  function typing(e) {
    value = e.target.value;
  }

</script>


<button onclick={handleClick}> Click  </button>
<input onkeydown={handleClick}>

<input oninput={typing}>
<h1>value on typing: {value}</h1>

-->










<!--
//Two-Way Binding (bind:)
//What does bind:value mean?
//It actually creates two connections.
//JS - Input  - User types
//Svelte compiler When it sees:<input bind:value={name}> 

//It generates code conceptually similar to:

//input.value = name;

//input.addEventListener("input", () => {
	//name = input.value;
//});
-->

<!--
<script>

  let name = "ankit";
  let accepted = false;
  let city = "";


</script>

<input bind:value={name} placeholder="enter name">

<h2>Hello {name}</h2>

<input type="checkbox" bind:checked={accepted}>

<p>{accepted}</p>


<select bind:value={city}>
	<option value="">Choose</option>
	<option>Delhi</option>
	<option>Mumbai</option>
	<option>Bangalore</option>
</select>

<p>{city}</p>
-->









<!--
//Conditional Rendering

<script>


  let isLoggedIn = false;

	function toggle() {
		isLoggedIn = !isLoggedIn;
	}

  let score = 82;

</script>



{#if !isLoggedIn}

	<h1>Welcome</h1>

{/if}


<button onclick={toggle}>
	Toggle Login
</button>

{#if isLoggedIn}
	<h2>Welcome Back!</h2>
{/if}


{#if score >= 90}
	<p>Grade A</p>
{:else if score >= 75}
	<p>Grade B</p>
{:else if score >= 60}
	<p>Grade C</p>
{:else}
	<p>Failed</p>
{/if}

-->
















<!--
//Our First Modern Counter
<script>
	let count = $state(0);

	function increment() {
		count++;
	}

	function decrement() {
		count--;
	}

	function reset() {
		count = 0;
	}
</script>

<h1>Counter: {count}</h1>

<button onclick={increment}>+</button>
<button onclick={decrement}>-</button>
<button onclick={reset}>Reset</button>

-->

<!--
//Understanding $derived
//Changes because the user/app updates it directly? → $state
//Calculated from other reactive values? → $derived


<script>
	let price = $state(100);
	let quantity = $state(10);

	let total = $derived(price * quantity);
</script>

<h1>{total}</h1>

<button onclick={() => quantity++}>
	Increase quantity
</button>


//IN react we use useMemo
//DOne, no No dependency array. No callback. No manual tracking.
//Internal Flow Compiler sees: let total = $derived(price * quantity);, it watches for price & quantity

-->













<!--
//$effect : This is the modern replacement for much of what people previously did with reactive statements and many useEffect use cases

<script>

  let count = $state(0);

  $effect(() => {
    console.log("count changed: ", count);
  });

  function inc() {
    count ++;
  }

</script>

<h1>{count}</h1>

<button onclick={inc}> Increment </button>

-->















<!--
//Props (Component Communication)

<script>

  import UserCard from "./UserCard.svelte"

  let user = {
    name:"Ankit", 
    age:24
  }

</script>


<UserCard user={user} />

-->












<!--
//Snippets and @render

<script>
    import Card from "./Card.svelte";
</script>

<Card>
    {#snippet content()}
        <h2>Hello!</h2>
        <p>Learning Svelte 5.</p>
    {/snippet}
</Card>
-->











<!--
//Component Events (Child → Parent Communication)
<script>
import Counter from "./Counter.svelte"

	function handleIncrement(value) {
		console.log("Child count in parent component :", value);
	}

</script>

<Counter onIncrement={handleIncrement} />
-->













//Bindings Between Parent and Child ($bindable)
//This prop is allowed to participate in two-way binding
//child to update the parent's value

<script>
	import TextInput from "./TextInput.svelte";

	let username = $state("Ankit");

</script>

<TextInput bind:value={username} />

<p>Username: {username}</p>



