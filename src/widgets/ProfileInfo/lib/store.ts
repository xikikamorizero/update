import { types } from "@/shared/api";
import { makeAutoObservable } from "mobx";

export class Store {
    public portfolio: types.PortfolioType[] = [];
    public course: types.CourseType[] = [];
    public profile:types.userType|null = null

    public loading:boolean=false;
    public loadingProject:boolean=false;

    constructor() {
        makeAutoObservable(this);
    }
}
