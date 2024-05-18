import { makeAutoObservable } from "mobx";

import * as types from "./types";
import * as services from "./services";

class Auth {
    constructor() {
        makeAutoObservable(this);
    }
    public readonly login = services.Auth.login;
    public readonly registration = services.Auth.registration;
}
class User {
    constructor() {
        makeAutoObservable(this);
    }
    public readonly getUsers = services.User.getUsers;
    public readonly getUser = services.User.getUser;
    public readonly getProfile = services.User.getProfile;
    public readonly getMyProject = services.User.getMyProject;
    public readonly editProfile = services.User.editProfile;
    public readonly like = services.User.like;
    public readonly unlike = services.User.unlike;
    public readonly dislike = services.User.dislike;
    public readonly undislike = services.User.undislike;
    public readonly subscribe = services.User.subscribe;
    public readonly unsubscribe = services.User.unsubscribe;
}
class Portfolio {
    constructor() {
        makeAutoObservable(this);
    }
    public readonly getPortfolioList = services.Portfolio.getPortfolio;
    public readonly getPortfolio = services.Portfolio.getPortfolioItem;
    public readonly create = services.Portfolio.create;
    public readonly edit = services.Portfolio.edit;
    public readonly delete = services.Portfolio.delete;
    public readonly getPortfolioType = services.Portfolio.getPortfolioType;
    public readonly createType = services.Portfolio.createType;
    public readonly editType = services.Portfolio.editType;
    public readonly deleteType = services.Portfolio.deleteType;
}
class Course {
    constructor() {
        makeAutoObservable(this);
    }
    public readonly create = services.Course.create;
    public readonly edit = services.Course.edit;
    public readonly delete = services.Course.delete;
    public readonly getCourseById = services.Course.getCourseById;
}
class Lesson {
    constructor() {
        makeAutoObservable(this);
    }
    public readonly getLesson = services.Lesson.getLessonItem;
    public readonly create = services.Lesson.create;
    public readonly edit = services.Lesson.edit;
    public readonly delete = services.Lesson.delete;
}
class UpdatePort {
    constructor() {
        makeAutoObservable(this);
    }
    public readonly getAwardItem = services.UpdatePort.getAwardItem;
    public readonly createAward = services.UpdatePort.createAward;
    public readonly editAward = services.UpdatePort.editAward;
    public readonly deleteAward = services.UpdatePort.deleteAward;

    public readonly createPublications = services.UpdatePort.createPublications;
    public readonly editPublications = services.UpdatePort.editPublications;
    public readonly deletePublications = services.UpdatePort.deletePublications;

    public readonly createTraning = services.UpdatePort.createTraning;
    public readonly editTraning = services.UpdatePort.editTraning;
    public readonly deleteTraning = services.UpdatePort.deleteTraning;

    public readonly getEducationItem = services.UpdatePort.getEducationItem;
    public readonly createEducation = services.UpdatePort.createEducation;
    public readonly editEducation = services.UpdatePort.editEducation;
    public readonly deleteEducation = services.UpdatePort.deleteEducation;
}

export class Store {
    public readonly auth = new Auth();
    public readonly user = new User();
    public readonly portfolio = new Portfolio();
    public readonly course = new Course();
    public readonly lesson = new Lesson();
    public readonly UpdatePort = new UpdatePort();
    public profile: types.userType | null = null;
    public loader = false;
    public error = 0;
    public isAuth: boolean = false;
    private token: string | null = null;
    public update_profile: boolean = false;
    public typePortfolio: types.TypePortfolio[] = [];

    constructor() {
        makeAutoObservable(this);
        // this.loadFromLocalStorage = this.loadFromLocalStorage.bind(this);
        // this.loadFromLocalStorage();
    }

    // loadFromLocalStorage() {
    //     const token = localStorage.getItem("token");
    //     if (token) {
    //         this.token = token;
    //     }
    // }
    // saveToLocalStorage() {
    //     localStorage.setItem("token", JSON.stringify(this.token));
    // }

    updateProfile() {
        this.update_profile = !this.update_profile;
    }
}
