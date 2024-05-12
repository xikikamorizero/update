"use client";
import { Context as GlobalContext } from "@/shared/api";
import { Context } from "./context";
import { useContext, useEffect } from "react";
import { useSearchParams, usePathname } from "next/navigation";

export const useUsers = () => {
    const global_store = useContext(GlobalContext);
    const { store } = useContext(Context);

    const pathname = usePathname();
    let path = useSearchParams();
    const current = new URLSearchParams(Array.from(path.entries()));

    function setKeyword(keyword: string) {
        store.keyword = keyword;
    }
    function setPlaceOfWork(placeOfWork: string) {
        store.placeOfWork = placeOfWork;
    }
    function setScienceDegreets(scienceDegreets: string) {
        store.scienceDegreets = scienceDegreets;
    }
    function setYearsOfExperienceMin(yearsOfExperienceMin: number | null) {
        store.yearsOfExperienceMin = yearsOfExperienceMin;
    }
    function setYearsOfExperienceMax(yearsOfExperienceMax: number | null) {
        store.yearsOfExperienceMax = yearsOfExperienceMax;
    }
    function setAwardMin(awardMin: number | null) {
        store.awardMin = awardMin;
    }
    function setAwardMax(awardMax: number | null) {
        store.awardMax = awardMax;
    }
    function setPublicationsMin(publicationsMin: number | null) {
        store.publicationsMin = publicationsMin;
    }
    function setPublicationsMax(publicationsMax: number | null) {
        store.publicationsMax = publicationsMax;
    }
    function setPortfolioMin(portfolioMin: number | null) {
        store.portfolioMin = portfolioMin;
    }
    function setPortfolioMax(portfolioMax: number | null) {
        store.portfolioMax = portfolioMax;
    }
    function setCourseMin(courseMin: number | null) {
        store.courseMin = courseMin;
    }
    function setCourseMax(courseMax: number | null) {
        store.courseMax = courseMax;
    }

    useEffect(() => {
        const keyword = path.get("keyword");
        const placeOfWork = path.get("place_of_work");
        const scienceDegreets = path.get("science_degree");
        const yearsOfExperienceMin = path.get("years_of_experience_min");
        const yearsOfExperienceMax = path.get("years_of_experience_max");
        const awardMin = path.get("award_min");
        const awardMax = path.get("award_max");
        const publicationsMin = path.get("publications_min");
        const publicationsMax = path.get("publications_max");
        const portfolioMin = path.get("portfolio_min");
        const portfolioMax = path.get("portfolio_max");
        const courseMin = path.get("course_min");
        const courseMax = path.get("course_max");

        if (keyword != null) {
            store.keyword = keyword;
        }
        if (placeOfWork != null) {
            store.placeOfWork = placeOfWork;
        }
        if (scienceDegreets != null) {
            store.scienceDegreets = scienceDegreets;
        }
        if (yearsOfExperienceMin != null) {
            store.yearsOfExperienceMin = Number(yearsOfExperienceMin);
        }
        if (yearsOfExperienceMax != null) {
            store.yearsOfExperienceMax = Number(yearsOfExperienceMax);
        }
        if (awardMin != null) {
            store.awardMin = Number(awardMin);
        }
        if (awardMax != null) {
            store.awardMax = Number(awardMax);
        }
        if (publicationsMin != null) {
            store.publicationsMin = Number(publicationsMin);
        }
        if (publicationsMax != null) {
            store.publicationsMax = Number(publicationsMax);
        }
        if (portfolioMin != null) {
            store.portfolioMin = Number(portfolioMin);
        }
        if (portfolioMax != null) {
            store.portfolioMax = Number(portfolioMax);
        }
        if (courseMin != null) {
            store.courseMin = Number(courseMin);
        }
        if (courseMax != null) {
            store.courseMax = Number(courseMax);
        }
    }, []);

    useEffect(() => {
        if (store.keyword != "") {
            current.set("keyword", store.keyword);
        } else {
            current.delete("keyword");
        }
        if (store.placeOfWork != "") {
            current.set("place_of_work", store.placeOfWork);
        } else {
            current.delete("place_of_work");
        }
        if (store.scienceDegreets != "") {
            current.set("science_degree", store.scienceDegreets);
        } else {
            current.delete("science_degree");
        }
        if (store.yearsOfExperienceMin != null) {
            current.set(
                "years_of_experience_min",
                String(store.yearsOfExperienceMin)
            );
        } else {
            current.delete("years_of_experience_min");
        }
        if (store.yearsOfExperienceMax != null) {
            current.set(
                "years_of_experience_max",
                String(store.yearsOfExperienceMax)
            );
        } else {
            current.delete("years_of_experience_max");
        }
        if (store.awardMin != null) {
            current.set("award_min", String(store.awardMin));
        } else {
            current.delete("award_min");
        }
        if (store.awardMax != null) {
            current.set("award_max", String(store.awardMax));
        } else {
            current.delete("award_max");
        }
        if (store.publicationsMin != null) {
            current.set("publications_min", String(store.publicationsMin));
        } else {
            current.delete("publications_min");
        }
        if (store.publicationsMax != null) {
            current.set("publications_max", String(store.publicationsMax));
        } else {
            current.delete("publications_max");
        }
        if (store.portfolioMin != null) {
            current.set("portfolio_min", String(store.portfolioMin));
        } else {
            current.delete("portfolio_min");
        }
        if (store.portfolioMax != null) {
            current.set("portfolio_max", String(store.portfolioMax));
        } else {
            current.delete("portfolio_max");
        }
        if (store.courseMin != null) {
            current.set("course_min", String(store.courseMin));
        } else {
            current.delete("course_min");
        }
        if (store.courseMax != null) {
            current.set("course_max", String(store.courseMax));
        } else {
            current.delete("course_max");
        }

        const search = current.toString();
        const query = search ? `?${search}` : "";
        window.history.pushState(null, "", `${pathname}${query}`);
    }, [
        store.keyword,
        store.placeOfWork,
        store.scienceDegreets,
        store.awardMin,
        store.awardMax,
        store.publicationsMin,
        store.publicationsMax,
        store.yearsOfExperienceMin,
        store.yearsOfExperienceMax,
        store.portfolioMin,
        store.portfolioMax,
        store.courseMin,
        store.courseMax,
    ]);

    useEffect(() => {
        console.log(encodeURIComponent(store.keyword));
        if (!store.loading) {
            store.loading = true;
            global_store.store.user
                .getUsers({
                    keyword: store.keyword,
                    place_of_work: store.placeOfWork,
                    science_degree: store.scienceDegreets,
                    yearsOfExperienceMin:store.yearsOfExperienceMin,
                    yearsOfExperienceMax:store.yearsOfExperienceMax,
                    awardMin:store.awardMin,
                    awardMax:store.awardMax,
                    publicationsMin:store.publicationsMin,
                    publicationsMax:store.publicationsMax,
                    portfolioMin:store.portfolioMin,
                    portfolioMax:store.portfolioMax,
                    courseMin:store.courseMin,
                    courseMax:store.courseMax,
                    page: store.page,
                    limit: store.limit,
                })
                .then((response) => {
                    store.users = response.data.users;
                    store.count = response.data.totalUsers;
                    store.page = response.data.page;
                    store.page_count = response.data.pageCount;
                })
                .catch((error) => {
                    console.log("ошибка", error);
                })
                .finally(() => {
                    store.loading = false;
                });
        }
    }, [
        store.page,
        store.keyword,
        store.placeOfWork,
        store.scienceDegreets,
        store.awardMin,
        store.awardMax,
        store.publicationsMin,
        store.publicationsMax,
        store.yearsOfExperienceMin,
        store.yearsOfExperienceMax,
        store.portfolioMin,
        store.portfolioMax,
        store.courseMin,
        store.courseMax,
    ]);

    return {
        setYearsOfExperienceMin,
        setYearsOfExperienceMax,
        setAwardMin,
        setAwardMax,
        setPublicationsMin,
        setPublicationsMax,
        setPortfolioMin,
        setPortfolioMax,
        setCourseMin,
        setCourseMax,

        yearsOfExperienceMin: store.yearsOfExperienceMin,
        yearsOfExperienceMax: store.yearsOfExperienceMax,
        awardMin: store.awardMin,
        awardMax: store.awardMax,
        publicationsMin: store.publicationsMin,
        publicationsMax: store.publicationsMax,
        portfolioMin: store.portfolioMin,
        portfolioMax: store.portfolioMax,
        courseMin: store.courseMin,
        courseMax: store.courseMax,

        users: store.users,
        keyword: store.keyword,
        setKeyword: setKeyword,
        placeOfWork: store.placeOfWork,
        setPlaceOfWork: setPlaceOfWork,
        scienceDegreets: store.scienceDegreets,
        setScienceDegreets: setScienceDegreets,
        page: store.page,
        pageCount: store.page_count,
        limit: store.limit,
        myId: global_store.store.profile?.id,
    };
};
