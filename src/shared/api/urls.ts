export const auth = {
    login() {
        return "/auth/login";
    },
    registration() {
        return "/auth/registration";
    },
};

export const user = {
    get() {
        return "/users/professor";
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

export const updatePort = {
    addRoles() {
        return "/users/role";
    },

    getAward(id: string) {
        return `/award/${id}`;
    },
    createAward() {
        return "/award";
    },
    updateAward(id: string) {
        return `/award/${id}`;
    },
    deleteAward(id: string) {
        return `/award/${id}`;
    },

    getPublications(id: string) {
        return `/publications/${id}`;
    },
    createPublications() {
        return "/publications";
    },
    updatePublications(id: string) {
        return `/publications/${id}`;
    },
    deletePublications(id: string) {
        return `/publications/${id}`;
    },

    getTraning(id: string) {
        return `/traning/${id}`;
    },
    createTraning() {
        return "/traning";
    },
    updateTraning(id: string) {
        return `/traning/${id}`;
    },
    deleteTraning(id: string) {
        return `/traning/${id}`;
    },

    getEducation(id: string) {
        return `/education/${id}`;
    },
    createEducation() {
        return "/education";
    },
    updateEducation(id: string) {
        return `/education/${id}`;
    },
    deleteEducation(id: string) {
        return `/education/${id}`;
    },
};
export const portfolio = {
    get() {
        return "/portfolio";
    },
    getTypes() {
        return "/types";
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
    createType() {
        return "/types";
    },
    updateType(id: string) {
        return `/types/${id}`;
    },
    deleteType(id: string) {
        return `/types/${id}`;
    },
};
export const course = {
    get(id: string) {
        return `/courses/${id}`;
    },
    create() {
        return "/courses";
    },
    edit(id: string) {
        return `/courses/${id}`;
    },
    delete(id: string) {
        return `/courses/${id}`;
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
