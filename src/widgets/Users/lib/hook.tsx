"use client";
import { Context as GlobalContext } from "@/shared/api";
import { Context } from "./context";
import { useContext, useEffect } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export const useUsers = () => {
    const global_store = useContext(GlobalContext);
    const { store } = useContext(Context);

    const router = useRouter();
    const pathname = usePathname();
    let path = useSearchParams();
    const current = new URLSearchParams(Array.from(path.entries()));

    function setKeyword(keyword: string) {
        store.keyword = keyword;
    }
    function setСategories(categories: string[]) {
        store.categories = categories;
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
    //
    function setLikesMin(likesMin: number | null) {
        store.likesMin = likesMin;
    }
    function setLikesMax(likesMax: number | null) {
        store.likesMax = likesMax;
    }
    function setDisLikesMin(dislikesMin: number | null) {
        store.dislikesMin = dislikesMin;
    }
    function setDisLikesMax(dislikesMax: number | null) {
        store.dislikesMax = dislikesMax;
    }
    //
    function setSortBy(sortBy: string) {
        store.sortBy = sortBy;
    }
    function setSortOrder(sortOrder: string) {
        store.sortOrder = sortOrder;
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

        const likesMin = path.get("likes_min");
        const likesMax = path.get("likes_max");
        const dislikesMin = path.get("dislikes_min");
        const dislikesMax = path.get("dislikes_max");

        const sortBy = path.get("sortBy");
        const sortOrder = path.get("sortOrder");

        const categoryParams = path.getAll("category");

        if (categoryParams != null) {
            setСategories(categoryParams as string[]);
        }

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
        //
        if (likesMin != null) {
            store.likesMin = Number(likesMin);
        }
        if (likesMax != null) {
            store.likesMax = Number(likesMax);
        }
        if (dislikesMin != null) {
            store.dislikesMin = Number(dislikesMin);
        }
        if (dislikesMax != null) {
            store.dislikesMax = Number(dislikesMax);
        }
        //

        if (sortBy != null) {
            store.sortBy = sortBy;
        }
        if (sortOrder != null) {
            store.sortOrder = sortOrder;
        }
    }, [path]);

    useEffect(() => {
        const categoryParams = path.getAll("category");
        if (store.categories.length !== 0) {
            console.log("категории", store.categories);

            const missingInArray2 = store.categories.filter(
                (item: string) => !categoryParams.includes(item)
            );
            console.log("missingInArray2", missingInArray2);
            const missingInArray1 = categoryParams.filter(
                (item: string) => !store.categories.includes(item)
            );
            console.log("missingInArray1", missingInArray1);

            if (missingInArray2.length !== 0) {
                store.categories.forEach((type) => {
                    if (!categoryParams.includes(type)) {
                        current.append("category", type);
                    }
                });
            }

            if (missingInArray1.length !== 0) {
                current.delete("category");
                const categoryParams = current.getAll("category");
                store.categories.forEach((type) => {
                    if (!categoryParams.includes(type)) {
                        current.append("category", type);
                    }
                });
            }
        } else {
            current.delete("category");
        }

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
        //
        if (store.likesMin != null) {
            current.set("likes_min", String(store.likesMin));
        } else {
            current.delete("likes_min");
        }
        if (store.likesMax != null) {
            current.set("likes_max", String(store.likesMax));
        } else {
            current.delete("likes_max");
        }
        //
        if (store.dislikesMin != null) {
            current.set("dislikes_min", String(store.dislikesMin));
        } else {
            current.delete("dislikes_min");
        }
        if (store.dislikesMax != null) {
            current.set("dislikes_max", String(store.dislikesMax));
        } else {
            current.delete("dislikes_max");
        }

        //
        if (store.sortBy != null) {
            current.set("sortBy", String(store.sortBy));
        } else {
            current.delete("sortBy");
        }
        if (store.sortOrder != null) {
            current.set("sortOrder", String(store.sortOrder));
        } else {
            current.delete("sortOrder");
        }

        const search = current.toString();
        const query = search ? `?${search}` : "";
        // if (window.history.pushState) {
        //     window.history.pushState(null, "", `${pathname}${query}`);
        // }
    

        window.history.replaceState(
            {
                ...window.history.state,
                as: `${pathname}${query}`,
                url: `${pathname}${query}`
            },
            "",
            `${pathname}${query}`
        )
        // console.log(window.history.pushState)

        // router.replace(`${pathname}${query}`)
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
        store.likesMin,
        store.likesMax,
        store.dislikesMin,
        store.dislikesMax,
        store.categories,

        store.sortBy,
        store.sortOrder,
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
                    category: store.categories,
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
                    likesMin: store.likesMin,
                    likesMax: store.likesMax,
                    dislikesMin: store.dislikesMin,
                    dislikesMax: store.dislikesMax,
                    page: store.page,
                    limit: store.limit,
                    sortBy: store.sortBy,
                    sortOrder: store.sortOrder,
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
        store.categories,
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
        store.likesMin,
        store.likesMax,
        store.dislikesMin,
        store.dislikesMax,

        store.sortBy,
        store.sortOrder,
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
        setLikesMin,
        setLikesMax,
        setDisLikesMin,
        setDisLikesMax,
        setСategories,

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
        likesMin: store.likesMin,
        likesMax: store.likesMax,
        dislikesMin: store.dislikesMin,
        dislikesMax: store.dislikesMax,
        categories: store.categories,

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
        loading: store.loading,

        sortBy: store.sortBy,
        sortOrder: store.sortOrder,
        setSortBy,
        setSortOrder,
    };
};
