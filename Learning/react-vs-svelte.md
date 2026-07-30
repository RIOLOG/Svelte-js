# React vs Svelte – Understanding the Core Differences

A beginner-friendly guide to understanding the architectural differences between **React** and **Svelte**, including runtime vs compiler, rendering strategies, reactivity, hooks, and SvelteKit.

---

# Table of Contents

1. React Runtime vs Svelte Compiler
2. Is Svelte an SPA Like React?
3. React vs Svelte Rendering (CSR, SSR, SSG)
4. Why Svelte Doesn't Need Hooks
5. Why Svelte Doesn't Need Dependency Arrays
6. The Biggest Mental Shift from React to Svelte

---

# 1. React Runtime vs Svelte Compiler

This is the biggest architectural difference between React and Svelte.

To understand it, let's first understand what a **runtime** is.

## What is a Runtime?

Imagine you're taking an exam.

### Option A (Runtime)

You solve every question **during the exam**.

```
Exam Starts
      ↓
Think
      ↓
Solve
      ↓
Write Answer
```

This is similar to **runtime**.

---

### Option B (Compile Time)

You solve every question **the day before**.

During the exam, you simply copy the answers.

```
One Day Before
      ↓
Solve Everything
      ↓
Exam Starts
      ↓
Copy Answers
```

This is similar to **compile time**.

---

## Applying This to Programming

When a browser loads your JavaScript, it performs the following steps:

```
Browser
    ↓
Load JavaScript
    ↓
Execute JavaScript
    ↓
Create UI
```

Everything that happens **after the JavaScript is loaded** is considered **runtime**.

---

# React Runtime

Suppose you write the following React component:

```jsx
function App() {
    const [count, setCount] = useState(0);

    return <h1>{count}</h1>;
}
```

The browser cannot understand JSX directly.

Before the application runs, **Babel** converts JSX into JavaScript.

```jsx
React.createElement("h1", null, count);
```

Now the browser understands the JavaScript.

However, the browser still doesn't understand concepts like:

- useState
- useEffect
- useMemo
- Components
- Context
- JSX

These are understood by the **React runtime**.

When the application starts:

```
Browser
    ↓
Download JavaScript
    ↓
Download React
    ↓
Download ReactDOM
    ↓
Start React Runtime
```

The React runtime creates several internal structures:

- Component Tree
- Virtual DOM
- Fiber Tree
- Scheduler

These exist in memory while the application is running.

---

## What Happens When State Changes?

Initially:

```
count = 0
```

The UI displays:

```
0
```

Suppose the button is clicked.

```
count = 1
```

React detects that the state has changed.

```
State Changed
      ↓
Run Component Again
      ↓
Create New Virtual DOM
      ↓
Compare With Old Virtual DOM
      ↓
Find Differences
      ↓
Update Real DOM
```

This comparison process is called **Reconciliation**.

Notice something important:

> React's runtime continues working throughout the lifetime of the application.

---

## Why Does React Need a Runtime?

Consider this code:

```jsx
{
    users.map(user => <Card user={user} />)
}
```

During build time, React cannot know whether:

- users contains 10 items
- users contains 100 items
- users contains 10,000 items

Because this information is only available while the application is running.

Therefore, React makes many decisions at **runtime**.

---

# Svelte Compiler

Now let's look at the same concept in Svelte.

```svelte
<script>
    let count = 0;
</script>

<h1>{count}</h1>
```

Instead of shipping a large runtime, **Svelte analyzes your component during compilation**.

The compiler understands:

- `count` is displayed here
- Only this text depends on `count`

It generates optimized JavaScript similar to:

```javascript
heading.textContent = count;
```

There is:

- No Virtual DOM
- No Diffing
- No Reconciliation
- No Fiber
- No Scheduler

When `count` changes:

```javascript
heading.textContent = count;
```

That's it.

The browser directly updates the DOM.

---

# Visual Comparison

## React

```
Your Code
     ↓
JSX
     ↓
React Runtime
     ↓
Virtual DOM
     ↓
Diffing
     ↓
Real DOM
```

---

## Svelte

```
Your Code
     ↓
Svelte Compiler
     ↓
Optimized JavaScript
     ↓
Real DOM
```

---

## Philosophy

React says:

> "I'll determine what changed while the application is running."

Svelte says:

> "I'll determine what can change before the application even runs."

---

# 2. Is Svelte an SPA Like React?

Yes.

By itself, **Svelte behaves similarly to React**.

Both are responsible for building user interfaces using components.

Typical components include:

- Button
- Navbar
- Sidebar
- Card
- Footer

---

## React Provides

- Components
- State Management APIs
- Lifecycle APIs

React does **not** include:

- Routing
- Server-Side Rendering
- Authentication
- API Endpoints
- Layout System

These are provided by additional libraries or frameworks.

---

## Svelte Provides

Svelte also focuses on UI components.

It does **not** include:

- Routing
- SSR
- API Endpoints
- Authentication
- Layouts

Those features belong to **SvelteKit**.

---

## React vs Svelte

| React | Svelte |
|--------|---------|
| UI Library | Compiler-based Framework |
| Creates Components | Creates Components |
| CSR by Default | CSR by Default |

---

# Then What is SvelteKit?

SvelteKit plays the same role for Svelte that Next.js plays for React.

| UI Framework | Full-stack Framework |
|--------------|---------------------|
| React | Next.js |
| Svelte | SvelteKit |

SvelteKit adds features such as:

- Routing
- SSR
- SSG
- API Routes
- Layouts
- Form Actions
- Prerendering
- Streaming (where supported)

---

# 3. React vs Svelte Rendering

This is where many beginners get confused.

Let's separate **Svelte** and **SvelteKit**.

---

## Svelte

Default rendering:

```
CSR (Client-Side Rendering)
```

Exactly like:

```
React + Vite
```

The browser downloads JavaScript and generates the page.

---

## SvelteKit

SvelteKit supports multiple rendering strategies.

- CSR
- SSR
- SSG
- Hybrid Rendering
- Streaming
- Prerendering

The developer chooses which strategy to use.

---

## Comparison

| Framework | Default Rendering | Supports |
|------------|------------------|-----------|
| React | CSR | CSR |
| React + Vite | CSR | CSR |
| Svelte | CSR | CSR |
| Next.js | Hybrid | CSR, SSR, SSG |
| SvelteKit | Hybrid | CSR, SSR, SSG, Prerendering |

---

# 4. Why Doesn't Svelte Need Hooks?

Let's compare how React and Svelte respond to state changes.

## React

```jsx
const [count, setCount] = useState(0);
```

When you call:

```jsx
setCount(count + 1);
```

React performs the following:

```
State Changed
      ↓
Run Component Again
      ↓
Generate New Virtual DOM
      ↓
Compare
      ↓
Update DOM
```

Every render executes the entire component function again.

For example:

```jsx
const name = "Ankit";
```

Even if only `count` changes, this line executes again because the component function runs from the beginning.

React relies on **component re-execution** to produce the next UI.

---

## Svelte

```svelte
<script>
let count = 0;

function increment() {
    count++;
}
</script>

<h1>{count}</h1>
```

During compilation, Svelte already knows:

- `count` is displayed inside `<h1>`
- No other DOM depends on it

So the generated JavaScript updates only that text node.

```javascript
text.data = count;
```

No component is re-executed.

Only the affected DOM node changes.

This is one of the biggest performance advantages of Svelte.



---

# 5. Why Doesn't Svelte Need Dependency Arrays?

One of the most common questions React developers ask is:

> **"If Svelte doesn't have `useEffect`, then how does it know when something changes?"**

Let's first understand why React needs dependency arrays.

---

## React

Consider the following code:

```jsx
useEffect(() => {
    console.log(count);
}, [count]);
```

Why do we write:

```jsx
[count]
```

Because React **cannot automatically know** which values your effect depends on.

The developer explicitly tells React:

> "Run this effect again whenever `count` changes."

Without the dependency array, React wouldn't know when the effect should execute.

---

## Svelte

Svelte's compiler analyzes your component before it runs.

Consider this example:

```svelte
<script>
    let price = 100;
    let quantity = 2;

    $: total = price * quantity;
</script>
```

The compiler immediately understands that:

```
total
   ↑
depends on
price
quantity
```

It automatically builds the dependency graph.

There is no need to write:

```jsx
[price, quantity]
```

because the compiler already knows the dependencies.

---

## Svelte 5 (Runes)

In Svelte 5, reactivity is written differently.

```javascript
const total = $derived(price * quantity);
```

Again, Svelte automatically tracks:

- `price`
- `quantity`

No dependency array is required.

---

## Comparison

### React

```
Developer
      ↓
Tells React
Which dependencies exist
      ↓
React runs effect
```

---

### Svelte

```
Compiler
      ↓
Analyzes code
      ↓
Finds dependencies
      ↓
Generates optimized updates
```

---

# Why Can't React Automatically Detect Dependencies?

React components are ordinary JavaScript functions.

For example:

```jsx
function App() {

    if (Math.random() > 0.5) {
        doSomething();
    }

    someFunction();

    anotherFunction();

    return <div>Hello</div>;
}
```

Because JavaScript is extremely dynamic, React cannot reliably determine every runtime relationship during compilation.

Therefore React chooses a different approach:

- Runtime
- Hooks
- Dependency Arrays

Svelte controls the component syntax more tightly.

That allows its compiler to safely analyze dependencies during compilation.

---

# 6. The Biggest Mental Shift from React to Svelte

If you remember only one concept, let it be this.

## React's Philosophy

```
State Changes
      ↓
Run Component Again
      ↓
Create New Virtual DOM
      ↓
Compare Old vs New
      ↓
Update DOM
```

---

## Svelte's Philosophy

```
State Changes
      ↓
Compiler Already Knows
What Depends On It
      ↓
Update Only That DOM Node
```

There is:

- No Virtual DOM
- No Reconciliation
- No Component Re-execution
- No Dependency Arrays for reactive expressions

---

# A Small Technical Correction

You may hear people say:

> **"Svelte has no runtime."**

This is a useful simplification for beginners, but it isn't completely accurate.

Svelte **does** include a **very small runtime**.

Its responsibilities include:

- Updating the DOM
- Lifecycle behavior
- Event handling

However, unlike React, Svelte **does not ship a large Virtual DOM and reconciliation engine**.

Most of Svelte's intelligence lives in the **compiler**, not in the browser.

---

# 7. Why Doesn't Svelte Need `return`?

In React:

```jsx
function App() {
    return (
        <h1>Hello</h1>
    );
}
```

React components are JavaScript functions.

Functions must return a value.

Therefore React requires:

```jsx
return (...)
```

---

## Svelte

```svelte
<script>
    let name = "Ankit";
</script>

<h1>Hello {name}</h1>
```

A Svelte component is **not** a JavaScript function.

It is a special component file understood by the Svelte compiler.

The compiler already knows:

```svelte
<h1>Hello</h1>
```

represents the UI.

There is nothing to return.

---

## Comparison

| React | Svelte |
|--------|---------|
| Components are JavaScript functions | Components are `.svelte` files |
| Requires `return` | No `return` required |
| Runtime renders returned JSX | Compiler transforms markup into JavaScript |

---

# 8. Svelte Development Flow

Whenever you save a `.svelte` file, the following happens:

```
Save File
      ↓
Vite Detects Change
      ↓
Svelte Compiler Runs
      ↓
Generates Optimized JavaScript
      ↓
Vite Sends HMR Update
      ↓
Browser Updates Instantly
```

Because only the changed component is recompiled, development remains extremely fast.

---

# 9. React vs Svelte Startup Flow

## React (Vite)

```
Browser
      ↓
main.jsx
      ↓
React
      ↓
ReactDOM
      ↓
<App />
      ↓
React Runtime
      ↓
Render UI
```

---

## Svelte

```
Browser
      ↓
main.js
      ↓
App.svelte
      ↓
Svelte Compiler Output
      ↓
Optimized JavaScript
      ↓
DOM
```

### Key Difference

React relies on its runtime to interpret components and update the UI.

Svelte components have already been transformed into optimized JavaScript during compilation.

---

# 10. Why Doesn't Svelte Need `useState`?

React needs `useState` because it must know which values should trigger a component re-render.

Consider this example:

```jsx
let count = 0;

count++;
```

React does not know that `count` has changed.

Therefore, the UI does not update.

Instead, React provides:

```jsx
const [count, setCount] = useState(0);
```

When `setCount()` is called:

```
setCount()
      ↓
React Knows State Changed
      ↓
Component Re-renders
```

---

## Svelte

```svelte
<script>
    let count = 0;

    function increment() {
        count++;
    }
</script>

<h1>{count}</h1>

<button on:click={increment}>
    Increment
</button>
```

During compilation, Svelte records:

```
count
   ↓
Used inside <h1>
```

When `count` changes:

```
count++
      ↓
Compiler Already Knows
Which DOM Node Uses It
      ↓
Update That Node
```

No `useState()` is required.

---

# Final Comparison

| Feature | React | Svelte |
|---------|--------|---------|
| Runtime | Large | Minimal |
| Compiler | ❌ | ✅ |
| Virtual DOM | ✅ | ❌ |
| Reconciliation | ✅ | ❌ |
| Component Re-render | Entire Component | Only affected DOM updates |
| Hooks | ✅ | ❌ |
| `useState` | ✅ | ❌ |
| `useEffect` | ✅ | ❌ (uses reactivity) |
| Dependency Arrays | ✅ | ❌ |
| JSX | ✅ | ❌ |
| HTML-like Syntax | JSX | Native HTML-like syntax |
| Build-Time Optimization | Limited | Extensive |
| Default Rendering | CSR | CSR |
| Full-stack Framework | Next.js | SvelteKit |

---

# React vs Svelte Architecture

## React

```
React Code
      ↓
Babel
      ↓
JavaScript
      ↓
React Runtime
      ↓
Virtual DOM
      ↓
Diffing
      ↓
Real DOM
```

---

## Svelte

```
Svelte Component
      ↓
Svelte Compiler
      ↓
Optimized JavaScript
      ↓
Direct DOM Updates
```

---

# Key Takeaways

- React relies heavily on a runtime to interpret components, manage state, and reconcile UI updates.
- Svelte performs most of this work during compilation, producing highly optimized JavaScript.
- React re-renders components and uses a Virtual DOM to determine UI changes.
- Svelte updates only the DOM nodes affected by state changes.
- React uses hooks like `useState` and `useEffect`; Svelte uses built-in reactivity.
- React requires dependency arrays because it cannot infer effect dependencies.
- Svelte automatically tracks dependencies at compile time.
- React components are JavaScript functions that return JSX.
- Svelte components are `.svelte` files that combine HTML, CSS, and JavaScript.
- Both React and Svelte default to Client-Side Rendering (CSR).
- Next.js extends React, while SvelteKit extends Svelte with routing, SSR, SSG, layouts, API routes, and more.

---

# Conclusion

React and Svelte both solve the same problem—building modern user interfaces—but they take fundamentally different approaches.

- **React** emphasizes a powerful runtime, component re-rendering, hooks, and a Virtual DOM.
- **Svelte** shifts most of the work to the compiler, enabling direct DOM updates with minimal runtime overhead.

Neither approach is universally better. React offers a mature ecosystem and flexibility, while Svelte provides a simpler mental model, smaller bundles, and excellent runtime performance.

Understanding these architectural differences helps you choose the right tool for your project and makes transitioning between React and Svelte much easier.