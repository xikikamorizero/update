import { types } from "@/shared/api";
import { makeAutoObservable } from "mobx";

export class Store {
    public loading: boolean = false;

    constructor() {
        makeAutoObservable(this);
    }
}
