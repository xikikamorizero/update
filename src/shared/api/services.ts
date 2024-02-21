import { AxiosResponse } from "axios";
import { $voxmentor_api_public } from "./instances";
import * as types from "./types";
import * as urls from "./urls";
import axios from "axios";

export class Auth {
    static async login(
        email: string,
        password: string
    ): Promise<AxiosResponse<types.LoginResponseType>> {
        return await axios.post<types.LoginResponseType>(urls.auth.login(), {
            email: email,
            password: password,
        });
    }
    static async registration(
        email: string,
        password: string
    ): Promise<AxiosResponse<types.authType>> {
        return await axios.post<types.authType>(urls.auth.registration(), {
            email: email,
            password: password,
        });
    }
}
export class User {
    static async getUsers({
        keyword,
        place_of_work,
        science_degree,
        page,
        limit,
    }: types.usersParamType): Promise<AxiosResponse<types.usersType>> {
        return await $voxmentor_api_public.get<types.usersType>(
            urls.user.get(),
            {
                params: {
                    keyword,
                    place_of_work,
                    science_degree,
                    page,
                    limit,
                },
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
        image,
        description,
        place_of_work,
        science_degree,
        categories,
        contacts,
    }: types.editProfile): Promise<AxiosResponse<types.userType>> {
        const formData = new FormData();

        const fields = {
            name,
            image,
            description,
            place_of_work,
            science_degree,
            categories,
            contacts,
        };

        Object.entries(fields).forEach(([key, value]) => {
            if (value) {
                formData.append(key, value);
            }
        });

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
        type,
        page,
        limit,
    }: types.portfolioParamType): Promise<
        AxiosResponse<types.PortfolioListType>
    > {
        return await $voxmentor_api_public.get<types.PortfolioListType>(
            urls.portfolio.get(),
            {
                params: { keyword, category, type, page, limit },
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

    static async create({
        title,
        content,
        category,
        type,
        image,
    }: types.createPortfolio): Promise<AxiosResponse<types.PortfolioType>> {
        const formData = new FormData();
        formData.append("title", title);
        formData.append("content", content);
        formData.append("category", category);
        formData.append("type", type);
        formData.append("image", image);
        return await $voxmentor_api_public.post<types.PortfolioType>(
            urls.portfolio.create(),
            formData
        );
    }

    static async edit(
        { id }: types.ID,
        { title, content, category, type, image }: types.createPortfolio
    ): Promise<AxiosResponse<types.PortfolioType>> {
        const formData = new FormData();
        formData.append("title", title);
        formData.append("content", content);
        formData.append("category", category);
        formData.append("type", type);
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
