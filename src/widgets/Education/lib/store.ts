import { types } from "@/shared/api";
import { makeAutoObservable } from "mobx";

export class Store {
    public education: types.Education | null = null;
    public loading: boolean = false;

    constructor() {
        makeAutoObservable(this);
    }
}
