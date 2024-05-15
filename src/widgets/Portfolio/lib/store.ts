import { types } from "@/shared/api";
import { TypePortfolio } from "@/shared/api/types";
import { makeAutoObservable } from "mobx";

export class Store {
    public portfolio: types.PortfolioType[] = [];
    public keyword = "";
    public category = "";
    public typeId:string = "";
    public count: number | null = null;
    public page_count: number | null = null;
    public page: number = 1;
    public limit: number = 8;
    public loading: boolean = false;

    public loadingT: boolean = false;
    public types:TypePortfolio[]=[]

    constructor() {
        makeAutoObservable(this);
    }
}
