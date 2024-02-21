import { types } from "@/shared/api";
import { makeAutoObservable } from "mobx";

export class Store {
    public course: types.CourseType | null = null;
    public loading = false;

    constructor() {
        makeAutoObservable(this);
    }
}
