import { error } from "@sveltejs/kit";

export async function load({ params }) {

    if (params.id !== "20") {

        throw error(404, "Product Not Found");

    }

    return {

        product: {

            id: params.id,

            name: "MacBook"

        }

    };

}