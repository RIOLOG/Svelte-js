export const actions = {

    default: async ({ request }) => {

        const formData = await request.formData();

        const username =
            formData.get("username");

        const password =
            formData.get("password");

        console.log(username);

        console.log(password);

        return {

            success: true

        };

    }

};