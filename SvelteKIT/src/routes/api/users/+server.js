
// export async function load() {

//     return {

//         users: [

//             "Ankit",

//             "Rahul"

//         ]

//     };

// }





import { addUser } from "$lib/db";

export async function POST() {

    console.log("POST API CALLED");

    addUser();

    return new Response("OK");

}