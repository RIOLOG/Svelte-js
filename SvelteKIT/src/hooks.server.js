//SvelteKit lets every incoming request pass through one central place before it reaches a page or API.

//Think of it as a security gate.

// Browser Request  -> hooks.server.js  -> Allowed? -> Page or  Redirect/Login



// src/hooks.server.js

export async function handle({ event, resolve }) {

    console.log("Incoming request:");

    console.log(event.url.pathname);

    return resolve(event);

}




// import { redirect } from "@sveltejs/kit";

// export async function handle({ event, resolve }) {

//     const token = event.cookies.get("token");

//     if (!token && event.url.pathname.startsWith("/dashboard")) {

//         throw redirect(302, "/login");

//     }

//     return resolve(event);

// }