import { types } from "@/shared/api";
import { makeAutoObservable } from "mobx";

export class Store {
    public award: types.Award | null = null;
    public loading: boolean = false;

    constructor() {
        makeAutoObservable(this);
    }
}
