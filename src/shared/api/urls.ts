export const auth = {
    login() {
        return "http://localhost:5000/auth/login";
    },
    registration() {
        return "http://localhost:5000/auth/registration";
    },
};

export const user = {
    get() {
        return "/users";
    },
    getUser(id: string) {
        return `/users/${id}`;
    },
    getProfessor() {
        return "/users/professor";
    },
    getProfile() {
        return "/users/profile/me";
    },
    getMyProject() {
        return "/users/project/me";
    },
    editProfile() {
        return "/users";
    },
    like(id: string) {
        return `/users/like/${id}`;
    },
    unlike(id: string) {
        return `/users/unlike/${id}`;
    },
    dislike(id: string) {
        return `/users/dislike/${id}`;
    },
    undislike(id: string) {
        return `/users/undislike/${id}`;
    },

    subscribe(id: string) {
        return `/users/subscribe/${id}`;
    },
    unsubscribe(id: string) {
        return `/users/unsubscribe/${id}`;
    },
    subscriptions() {
        return "/users/subscriptions";
    },
    subscribers() {
        return "/users/subscribers";
    },
};
export const portfolio = {
    get() {
        return "/portfolio";
    },
    getPortfolio(id: string) {
        return `/portfolio/${id}`;
    },
    create() {
        return "/portfolio";
    },
    edit(id: string) {
        return `/portfolio/${id}`;
    },
    delete(id: string) {
        return `/portfolio/${id}`;
    },
};
export const course = {
    get(id: string) {
        return `/courses/${id}`;
    },
    create() {
        return "/courses";
    },
};
export const lesson = {
    create() {
        return "/lessons";
    },
    getLesson(id: string) {
        return `/lessons/${id}`;
    },
    edit(id: string) {
        return `/lessons/${id}`;
    },
    delete(id: string) {
        return `/lessons/${id}`;
    },
};
