
// @ts-ignore
export async function load({ params }) {

    console.log("Load Function Running");

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 2000));

    return {

        employee: {

            id: params.id,

            name: "Ankit",

            company: "Nagarro"

        }

    };

}