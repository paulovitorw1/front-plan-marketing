import http from "axios";

const api = http.create({
    baseURL: "/",
});

export { api };
