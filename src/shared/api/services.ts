import { AxiosResponse } from "axios";
import { $voxmentor_api_public, $voxmentor_auth } from "./instances";
import * as types from "./types";
import * as urls from "./urls";
import axios from "axios";

export class Auth {
    static async login(
        email: string,
        password: string
    ): Promise<AxiosResponse<types.LoginResponseType>> {
        return await $voxmentor_auth.post<types.LoginResponseType>(urls.auth.login(), {
            email: email,
            password: password,
        });
    }
    static async registration(
        email: string,
        password: string,
        teacher: boolean
    ): Promise<AxiosResponse<types.LoginResponseType>> {
        return await $voxmentor_auth.post<types.LoginResponseType>(
            urls.auth.registration(),
            {
                email: email,
                password: password,
                teacher: teacher,
            }
        );
    }
}
export class User {
    static async getUsers({
        keyword,
        place_of_work,
        science_degree,
        category,
        yearsOfExperienceMin,
        yearsOfExperienceMax,
        awardMin,
        awardMax,
        publicationsMin,
        publicationsMax,
        portfolioMin,
        portfolioMax,
        courseMin,
        courseMax,
        likesMin,
        likesMax,
        dislikesMin,
        dislikesMax,
        page,
        limit,
    }: types.usersParamType): Promise<AxiosResponse<types.usersType>> {
        const params: Record<string, any> = {
            keyword,
            place_of_work,
            science_degree,
            yearsOfExperienceMin,
            yearsOfExperienceMax,
            awardMin,
            awardMax,
            publicationsMin,
            publicationsMax,
            portfolioMin,
            portfolioMax,
            courseMin,
            courseMax,
            likesMin,
            likesMax,
            dislikesMin,
            dislikesMax,
            page,
            limit,
        };

        if (category && category.length > 0) {
            category.forEach((cat, index) => {
                params[`category[${index}]`] = cat;
            });
        }

        return await $voxmentor_api_public.get<types.usersType>(
            urls.user.get(),
            {
                params,
            }
        );
    }

    static async getUser({
        id,
    }: types.ID): Promise<AxiosResponse<types.userType>> {
        return await $voxmentor_api_public.get<types.userType>(
            urls.user.getUser(id),
            {
                params: {},
            }
        );
    }

    static async getProfile(): Promise<AxiosResponse<types.userType>> {
        return await $voxmentor_api_public.get<types.userType>(
            urls.user.getProfile(),
            {
                params: {},
            }
        );
    }

    static async getMyProject(): Promise<AxiosResponse<types.ProjectType>> {
        return await $voxmentor_api_public.get<types.ProjectType>(
            urls.user.getMyProject(),
            {
                params: {},
            }
        );
    }

    static async editProfile({
        name,
        avatar,
        description,
        position,
        place_of_work,
        yearsOfExperience,
        science_degree,
        categories,
        contacts,
    }: types.editProfile): Promise<AxiosResponse<types.userType>> {
        const formData = new FormData();

        const fields = {
            name,
            avatar,
            description,
            position,
            place_of_work,
            yearsOfExperience,
            science_degree,
            contacts,
        };

        Object.entries(fields).forEach(([key, value]) => {
            if (value) {
                formData.append(key, value);
            }
        });

        if (categories) {
            if (categories.length == 0) {
                formData.append("categories", "null");
            } else {
                categories.forEach(function (item) {
                    formData.append("categories", item);
                });
            }
        }

        return await $voxmentor_api_public.put<types.userType>(
            urls.user.editProfile(),
            formData
        );
    }

    static async like({
        id,
    }: types.ID): Promise<AxiosResponse<types.LikeAndDislikeResponse>> {
        return await $voxmentor_api_public.post<types.LikeAndDislikeResponse>(
            urls.user.like(id),
            {
                params: {},
            }
        );
    }

    static async unlike({
        id,
    }: types.ID): Promise<AxiosResponse<types.LikeAndDislikeResponse>> {
        return await $voxmentor_api_public.delete<types.LikeAndDislikeResponse>(
            urls.user.unlike(id),
            {
                params: {},
            }
        );
    }

    static async dislike({
        id,
    }: types.ID): Promise<AxiosResponse<types.LikeAndDislikeResponse>> {
        return await $voxmentor_api_public.post<types.LikeAndDislikeResponse>(
            urls.user.dislike(id),
            {
                params: {},
            }
        );
    }

    static async undislike({
        id,
    }: types.ID): Promise<AxiosResponse<types.LikeAndDislikeResponse>> {
        return await $voxmentor_api_public.delete<types.LikeAndDislikeResponse>(
            urls.user.undislike(id),
            {
                params: {},
            }
        );
    }

    static async subscribe({
        id,
    }: types.ID): Promise<AxiosResponse<types.LikeAndDislikeResponse>> {
        return await $voxmentor_api_public.post<types.LikeAndDislikeResponse>(
            urls.user.subscribe(id),
            {
                params: {},
            }
        );
    }

    static async unsubscribe({
        id,
    }: types.ID): Promise<AxiosResponse<types.LikeAndDislikeResponse>> {
        return await $voxmentor_api_public.delete<types.LikeAndDislikeResponse>(
            urls.user.unsubscribe(id),
            {
                params: {},
            }
        );
    }
}

export class Portfolio {
    static async getPortfolio({
        keyword,
        category,
        typeId,
        page,
        limit,
    }: types.portfolioParamType): Promise<
        AxiosResponse<types.PortfolioListType>
    > {
        return await $voxmentor_api_public.get<types.PortfolioListType>(
            urls.portfolio.get(),
            {
                params: { keyword, category, typeId, page, limit },
            }
        );
    }

    static async getPortfolioType(): Promise<
        AxiosResponse<types.TypePortfolio[]>
    > {
        return await $voxmentor_api_public.get<types.TypePortfolio[]>(
            urls.portfolio.getTypes(),
            {
                params: {},
            }
        );
    }

    static async getPortfolioItem({
        id,
    }: types.ID): Promise<AxiosResponse<types.PortfolioType>> {
        return await $voxmentor_api_public.get<types.PortfolioType>(
            urls.portfolio.getPortfolio(id),
            {
                params: {},
            }
        );
    }

    static async createType({
        valueEn,
        valueRu,
        valueUz,
        description,
    }: types.TypePortfolioDto): Promise<AxiosResponse<types.TypePortfolio>> {
        return await $voxmentor_api_public.post<types.TypePortfolio>(
            urls.portfolio.createType(),
            {
                valueEn,
                valueRu,
                valueUz,
                description,
            }
        );
    }

    static async editType(
        { id }: types.ID,
        { valueEn, valueRu, valueUz, description }: types.TypePortfolioDto
    ): Promise<AxiosResponse<types.TypePortfolio>> {
        return await $voxmentor_api_public.put<types.TypePortfolio>(
            urls.portfolio.updateType(id),
            { valueEn, valueRu, valueUz, description }
        );
    }
    static async deleteType({
        id,
    }: types.ID): Promise<AxiosResponse<types.DeleteResponse>> {
        return await $voxmentor_api_public.delete<types.DeleteResponse>(
            urls.portfolio.deleteType(id)
        );
    }

    static async create({
        title,
        content,
        category,
        typeId,
        image,
    }: types.createPortfolio): Promise<AxiosResponse<types.PortfolioType>> {
        const formData = new FormData();
        formData.append("title", title);
        formData.append("content", content);
        formData.append("category", category);
        formData.append("typeId", String(typeId));
        formData.append("image", image);
        return await $voxmentor_api_public.post<types.PortfolioType>(
            urls.portfolio.create(),
            formData
        );
    }

    static async edit(
        { id }: types.ID,
        { title, content, category, typeId, image }: types.createPortfolio
    ): Promise<AxiosResponse<types.PortfolioType>> {
        const formData = new FormData();
        formData.append("title", title);
        formData.append("content", content);
        formData.append("category", category);
        formData.append("type", String(typeId));
        formData.append("image", image);
        return await $voxmentor_api_public.put<types.PortfolioType>(
            urls.portfolio.edit(id),
            formData
        );
    }

    static async delete({
        id,
    }: types.ID): Promise<AxiosResponse<types.DeleteResponse>> {
        return await $voxmentor_api_public.delete<types.DeleteResponse>(
            urls.portfolio.delete(id)
        );
    }
}

export class Course {
    static async create({
        title,
        description,
        level,
        category,
        image,
    }: types.createCourse): Promise<AxiosResponse<types.CourseType>> {
        const formData = new FormData();
        formData.append("title", title);
        formData.append("description", description);
        formData.append("level", level);
        formData.append("category", category);
        formData.append("image", image);

        return await $voxmentor_api_public.post<types.CourseType>(
            urls.course.create(),
            formData
        );
    }

    static async edit(
        { id }: types.ID,
        { title, description, level, category, image }: types.editCourse
    ): Promise<AxiosResponse<types.CourseType>> {
        const formData = new FormData();
        formData.append("title", title);
        formData.append("description", description);
        formData.append("level", level);
        formData.append("category", category);
        formData.append("image", image);
        return await $voxmentor_api_public.put<types.CourseType>(
            urls.course.edit(id),
            formData
        );
    }

    static async delete({
        id,
    }: types.ID): Promise<AxiosResponse<types.DeleteResponse>> {
        return await $voxmentor_api_public.delete<types.DeleteResponse>(
            urls.course.delete(id)
        );
    }

    static async getCourseById({
        id,
    }: types.ID): Promise<AxiosResponse<types.CourseType>> {
        return await $voxmentor_api_public.get<types.CourseType>(
            urls.course.get(id)
        );
    }
}
export class Lesson {
    static async getLessonItem({
        id,
    }: types.ID): Promise<AxiosResponse<types.LessonType>> {
        return await $voxmentor_api_public.get<types.LessonType>(
            urls.lesson.getLesson(id),
            {
                params: {},
            }
        );
    }

    static async create({
        courseId,
        title,
        content,
        description,
        lesson_number,
        image,
    }: types.createLesson): Promise<AxiosResponse<types.LessonType>> {
        const formData = new FormData();
        formData.append("courseId", courseId);
        formData.append("title", title);
        formData.append("content", content);
        formData.append("description", description);
        formData.append("lesson_number", lesson_number);
        formData.append("image", image);

        return await $voxmentor_api_public.post<types.LessonType>(
            urls.lesson.create(),
            formData
        );
    }

    static async edit(
        { id }: types.ID,
        { title, description, lesson_number, content, image }: types.editLesson
    ): Promise<AxiosResponse<types.LessonType>> {
        const formData = new FormData();
        formData.append("title", title);
        formData.append("description", description);
        formData.append("lesson_number", lesson_number);
        formData.append("content", content);
        formData.append("image", image);
        return await $voxmentor_api_public.put<types.LessonType>(
            urls.lesson.edit(id),
            formData
        );
    }

    static async delete({
        id,
    }: types.ID): Promise<AxiosResponse<types.DeleteResponse>> {
        return await $voxmentor_api_public.delete<types.DeleteResponse>(
            urls.lesson.delete(id)
        );
    }
}

export class UpdatePort {
    static async getAwardItem({
        id,
    }: types.ID): Promise<AxiosResponse<types.Award>> {
        return await $voxmentor_api_public.get<types.Award>(
            urls.updatePort.getAward(id),
            {
                params: {},
            }
        );
    }
    static async createAward({
        title,
        year,
        image,
        docs,
        type,
    }: types.CreateAward): Promise<AxiosResponse<types.Award>> {
        const formData = new FormData();
        formData.append("title", title);
        formData.append("year", String(year));
        formData.append("image", image);
        formData.append("docs", docs);
        formData.append("type", type);

        return await $voxmentor_api_public.post<types.Award>(
            urls.updatePort.createAward(),
            formData
        );
    }
    static async editAward(
        { id }: types.ID,
        { title, year, image, docs, type }: types.EditAward
    ): Promise<AxiosResponse<types.Award>> {
        const formData = new FormData();
        const fields = {
            title,
            year,
            image,
            docs,
            type,
        };
        Object.entries(fields).forEach(([key, value]) => {
            if (value) {
                formData.append(key, value);
            }
        });

        return await $voxmentor_api_public.put<types.Award>(
            urls.updatePort.updateAward(id),
            formData
        );
    }
    static async deleteAward({
        id,
    }: types.ID): Promise<AxiosResponse<types.DeleteResponseUpd>> {
        return await $voxmentor_api_public.delete<types.DeleteResponseUpd>(
            urls.updatePort.deleteAward(id)
        );
    }

    //Publications

    static async createPublications({
        title,
        year,
        docs,
        type,
        link,
    }: types.CreatePublications): Promise<AxiosResponse<types.Publications>> {
        const formData = new FormData();
        formData.append("title", title);
        formData.append("year", String(year));
        formData.append("docs", docs);
        formData.append("type", type);
        formData.append("link", link);

        return await $voxmentor_api_public.post<types.Publications>(
            urls.updatePort.createPublications(),
            formData
        );
    }
    static async editPublications(
        { id }: types.ID,
        { title, year, docs, type, link }: types.EditPublications
    ): Promise<AxiosResponse<types.Publications>> {
        const formData = new FormData();
        const fields = {
            title,
            year,
            docs,
            type,
            link,
        };
        Object.entries(fields).forEach(([key, value]) => {
            if (value) {
                formData.append(key, value);
            }
        });

        return await $voxmentor_api_public.put<types.Publications>(
            urls.updatePort.updatePublications(id),
            formData
        );
    }
    static async deletePublications({
        id,
    }: types.ID): Promise<AxiosResponse<types.DeleteResponseUpd>> {
        return await $voxmentor_api_public.delete<types.DeleteResponseUpd>(
            urls.updatePort.deletePublications(id)
        );
    }

    //Traning

    static async createTraning({
        title,
        date,
        location,
        organization,
        hoursSpent,
        image,
        docs,
    }: types.CreateTraning): Promise<AxiosResponse<types.Traning>> {
        const formData = new FormData();
        formData.append("title", title);
        formData.append("date", date);
        formData.append("location", location);
        formData.append("organization", organization);
        formData.append("hoursSpent", String(hoursSpent));
        formData.append("image", image);
        formData.append("docs", docs);

        return await $voxmentor_api_public.post<types.Traning>(
            urls.updatePort.createTraning(),
            formData
        );
    }
    static async editTraning(
        { id }: types.ID,
        {
            title,
            date,
            location,
            organization,
            hoursSpent,
            image,
            docs,
        }: types.EditTraning
    ): Promise<AxiosResponse<types.Traning>> {
        const formData = new FormData();
        const fields = {
            title,
            date,
            location,
            organization,
            hoursSpent,
            image,
            docs,
        };
        Object.entries(fields).forEach(([key, value]) => {
            if (value) {
                formData.append(key, value);
            }
        });

        return await $voxmentor_api_public.put<types.Traning>(
            urls.updatePort.updateTraning(id),
            formData
        );
    }
    static async deleteTraning({
        id,
    }: types.ID): Promise<AxiosResponse<types.DeleteResponseUpd>> {
        return await $voxmentor_api_public.delete<types.DeleteResponseUpd>(
            urls.updatePort.deleteTraning(id)
        );
    }

    //Education
    static async getEducationItem({
        id,
    }: types.ID): Promise<AxiosResponse<types.Education>> {
        return await $voxmentor_api_public.get<types.Education>(
            urls.updatePort.getEducation(id),
            {
                params: {},
            }
        );
    }

    static async createEducation({
        title,
        date,
        image,
        docs,
    }: types.CreateEducation): Promise<AxiosResponse<types.Education>> {
        const formData = new FormData();
        formData.append("title", title);
        formData.append("date", date);
        formData.append("image", image);
        formData.append("docs", docs);

        return await $voxmentor_api_public.post<types.Education>(
            urls.updatePort.createEducation(),
            formData
        );
    }
    static async editEducation(
        { id }: types.ID,
        { title, date, image, docs }: types.EditEducation
    ): Promise<AxiosResponse<types.Education>> {
        const formData = new FormData();
        const fields = {
            title,
            date,
            image,
            docs,
        };
        Object.entries(fields).forEach(([key, value]) => {
            if (value) {
                formData.append(key, value);
            }
        });

        return await $voxmentor_api_public.put<types.Education>(
            urls.updatePort.updateEducation(id),
            formData
        );
    }
    static async deleteEducation({
        id,
    }: types.ID): Promise<AxiosResponse<types.DeleteResponseUpd>> {
        return await $voxmentor_api_public.delete<types.DeleteResponseUpd>(
            urls.updatePort.deleteEducation(id)
        );
    }
}
