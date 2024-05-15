import { types } from "@/shared/api";
import { makeAutoObservable } from "mobx";

export class Store {
    public users: types.userType[] = [];
    public keyword = "";
    public placeOfWork = "";
    public scienceDegreets = "";
    public categories:string[] = []
    public count: number | null = null;
    public page_count: number | null = null;
    public page: number = 1;
    public limit: number = 8;

    public yearsOfExperienceMin: number | null = null;
    public yearsOfExperienceMax: number | null = null;
    public awardMin: number | null = null;
    public awardMax: number | null = null;
    public publicationsMin: number | null = null;
    public publicationsMax: number | null = null;
    public portfolioMin: number | null = null;
    public portfolioMax: number | null = null;
    public courseMin: number | null = null;
    public courseMax: number | null = null;

    public loading: boolean = false;

    constructor() {
        makeAutoObservable(this);
    }
}
