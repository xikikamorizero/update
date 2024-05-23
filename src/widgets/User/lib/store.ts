import { types } from "@/shared/api";
import { makeAutoObservable } from "mobx";

export class Store {
    public user: types.userType | null = null;
    public loading: boolean = false;
    public loadingLike:boolean = false;
    public loadingDisLike:boolean = false;
    public loadingSubscribe:boolean = false;

    public update_sub: boolean = false;
    public update_like: boolean = false;


    constructor() {
        makeAutoObservable(this);
    }

    updateSub() {
        this.update_sub = !this.update_sub;
    }
    updateLike() {
        this.update_like = !this.update_like;
    }
}
