import {

    redirect

} from "@sveltejs/kit";

export async function load() {

    const loggedIn = true;

    if (!loggedIn) {

        throw redirect(

            302,

            "/register"

        );

    }

    return {

        username:

            "Ankit"

    };

}