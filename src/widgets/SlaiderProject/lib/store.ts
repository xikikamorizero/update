import { types } from "@/shared/api";
import { makeAutoObservable } from "mobx";

export class Store {
    public portfolio: types.PortfolioType[] = [];
    public keyword = "";
    public category = "";
    public type = "";
    public count: number | null = null;
    public page_count: number | null = null;
    public page: number = 1;
    public limit: number = 8;
    public loading: boolean = false;

    constructor() {
        makeAutoObservable(this);
    }
}
