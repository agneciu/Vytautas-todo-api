import { REGISTER } from "../utils/routes"

export const registerUser = (user) => {
console.log(user, REGISTER)
    return fetch(REGISTER, {
        method: "POST",
        header: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "email": "antanasss434",
            "password": "antanasssssss466"
        }),

    }).then((response) => response.json());
}