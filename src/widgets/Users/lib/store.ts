import { types } from "@/shared/api";
import { makeAutoObservable } from "mobx";

export class Store {
    public users: types.userType[] = [];
    public keyword = "";
    public placeOfWork = "";
    public scienceDegreets = "";
    public count: number | null = null;
    public page_count: number | null = null;
    public page: number = 1;
    public limit: number = 10;
    public loading: boolean = false;

    constructor() {
        makeAutoObservable(this);
    }
}
