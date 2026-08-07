Stencil is a compiler for building Web Components.

Suppose you want to build a reusable button component.

In React, you'd write:

<Button />

In Angular, you'd write:

<app-button></app-button>

In Svelte, you'd write:

<Button />

Each of these components is tied to its own framework:

A React component works only in a React application.
An Angular component works only in an Angular application.
A Svelte component works only in a Svelte application.

Now imagine creating a component like this:

<my-button></my-button>

This isn't a React component.

It isn't an Angular component.

It isn't a Vue or Svelte component either.

It's a Web Component—a browser-native custom element built on web standards.

Because it's native to the browser, it can be used in React, Angular, Vue, Svelte, or even plain HTML without rewriting the component for each framework.

Stencil is a compiler that helps you build these browser-native Web Components. You write components using a React-like syntax (JSX and TypeScript), and Stencil compiles them into standard Web Components that work across different frameworks.




=> React build React Components
=> Angular build Angular Components
=> Vue build Vue Components
=> Svelte build Svelte Components
=> Stencil build Web Components


=> What are web components?
=> Imagine html only had : <div>, <p>, <button>
=> Wouldn't it be nice to have a <my-button> element that you could use anywhere, just like <button>?
=> Modern browsers support this idea with Web Components, which allow you to create your own custom HTML elements.
=> These are custom elements that can encapsulate their own structure, style, and behavior, making them reusable across different projects and frameworks.


=> Scentil's Job:
@Component({
    tag: "user-card"
})
export class UserCard {

    render() {

        return (
            <h1>Hello</h1>
        );

    }

}


The compiler generates all the browser-specific code.
Exactly like Svelte compiles .svelte files into JavaScript.

## So web components are the components that you can use in any framework, and Stencil is the compiler that helps you build them.

## Internal Architecture:
=> You write -> Stencil Component -> Stencil Compiler -> Optimized JS -> broswer custom element -> work in any framework


## Why needs Stencil?
=> Suppose, a compnay, has Team A working on React, Team B working on Angular, and Team C working on Vue. Each team is building their own button component for their respective frameworks. This leads to duplication of effort and inconsistent UI across the application.


=> Instead, if the company uses Stencil to build a single button component as a Web Component, all teams can use the same <my-button> element in their respective frameworks. This promotes code reusability, consistency, and reduces maintenance overhead.



| Svelte                | Stencil                       |
| --------------------- | ----------------------------- |
| Build complete apps   | Build reusable Web Components |
| Uses `.svelte` files  | Uses `.tsx`                   |
| Compiler              | Compiler                      |
| Routing via SvelteKit | No routing                    |
| State management      | Local component state         |
| Targets applications  | Targets component libraries   |



### Where is Stencil Used?
=> Desgin system -> <buton> , <input>, <Table>  -> Publish to npm -> Install in React, Angular, Vue, Svelte, or plain HTML





## The Four Pillars of Web Components
Web Components
├── Custom Elements
├── Shadow DOM
├── HTML Templates
└── ES Modules



