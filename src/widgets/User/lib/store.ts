import { types } from "@/shared/api";
import { makeAutoObservable } from "mobx";

export class Store {
    public user: types.userType | null = null;
    public loading: boolean = false;
    public loadingLike:boolean = false;
    public loadingDisLike:boolean = false;
    public loadingSubscribe:boolean = false;

    constructor() {
        makeAutoObservable(this);
    }
}
