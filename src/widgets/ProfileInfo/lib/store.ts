import { types } from "@/shared/api";
import { makeAutoObservable } from "mobx";

export class Store {
    public portfolio: types.PortfolioType[] = [];
    public course: types.CourseType[] = [];

    constructor() {
        makeAutoObservable(this);
    }
}
