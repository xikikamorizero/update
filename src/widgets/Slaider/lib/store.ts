import { types } from "@/shared/api";
import { makeAutoObservable } from "mobx";

export class Store {
    public users: types.userType[] = [];
    public portfolio: types.PortfolioType[] = [];
    public loading: boolean = false;
    public keyword = "";
    public placeOfWork = "";
    public scienceDegreets = "";
    public count: number | null = null;
    public page_count: number | null = null;
    public page: number = 1;
    public limit: number = 8;

    constructor() {
        makeAutoObservable(this);
    }
}
