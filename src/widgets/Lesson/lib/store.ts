import { types } from "@/shared/api";
import { makeAutoObservable } from "mobx";

export class Store {
    public lesson: types.LessonType | null = null;
    public loading: boolean = false;

    constructor() {
        makeAutoObservable(this);
    }
}
