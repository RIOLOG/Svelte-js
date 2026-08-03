// export async function load({ parent }) {

//     const parentData = await parent();

//     console.log(parentData);

//     return {

//         posts: [

//             "Svelte",

//             "React"

//         ]

//     };

// }
// 















import { users } from "$lib/db";

export async function load({ parent }) {

    console.log("===== PROFILE LOAD =====");

    const parentData = await parent();

    console.log(parentData);

    return {

        users

    };

}

