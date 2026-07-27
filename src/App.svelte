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










