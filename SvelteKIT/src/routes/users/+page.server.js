import { invalidate } from "$app/navigation";

async function addUser(){

    await fetch(

        "/api/users",

        {

            method:"POST"

        }

    );

    await invalidate('url');

}