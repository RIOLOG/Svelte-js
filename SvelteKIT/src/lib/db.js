export let users = [
    {
        id: 1,
        name: "Ankit"
    },
    {
        id: 2,
        name: "Rahul"
    }
];

export function addUser() {
    users.push({
        id: users.length + 1,
        name: "User " + (users.length + 1)
    });
}