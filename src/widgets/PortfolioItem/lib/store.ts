import { types } from "@/shared/api";
import { makeAutoObservable } from "mobx";

export class Store {
    public portfolio: types.PortfolioType | null = null;
    public loading: boolean = false;

    constructor() {
        makeAutoObservable(this);
    }
}
