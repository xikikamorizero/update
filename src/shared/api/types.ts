export type ID = {
    id: string;
};
export interface authType {
    email: string;
    password: string;
}
export interface createPortfolio {
    title: string;
    content: string;
    category: string;
    type: string;
    image: any;
}
export interface createCourse {
    title: string;
    description: string;
    level: string;
    category: string;
    image: any;
}
export interface createLesson {
    courseId: string;
    title: string;
    content: string;
    description: string;
    lesson_number: string;
    reading_materials?: string[];
    image: any;
}
export interface editProfile {
    name?: string | null;
    image?: any;
    description?: string | null;
    place_of_work?: string | null;
    science_degree?: string | null;
    categories?: string | null;
    contacts?: string | null;
}
export interface editLesson {
    title: string;
    content: string;
    description: string;
    lesson_number: string;
    reading_materials?: string[];
    image: any;
}
export interface LikeAndDislikeResponse {
    success: boolean;
    message: string;
}
export interface DeleteResponse {
    success: boolean;
    message: string;
}
export interface LoginResponseType {
    token: string;
}
export interface usersParamType {
    keyword: string;
    place_of_work: string;
    science_degree: string;
    page: number;
    limit: number;
}
export interface portfolioParamType {
    keyword: string;
    category: string;
    type: string;
    page: number;
    limit: number;
}
export interface defaultParamType {
    page: number;
    limit: number;
}
export interface Subscription {
    subscriberId: number;
    authorId: number;
    createdAt: string;
    updatedAt: string;
}
export interface Dislike {
    id: number;
    userId: number;
    dislikedUserId: number;
    createdAt: string;
    updatedAt: string;
}
export interface Subscribers {
    id: number;
    email: string;
    name: string | null;
    avatar: string | null;
    description: string | null;
    place_of_work: string | null;
    science_degree: string | null;
    categories: string[] | null;
    contacts: string | null;
    banned: boolean;
    banReason: string | null;
    likes: number;
    dislikes: number;
    createdAt: string;
    updatedAt: string;
    Subscription: Subscription[];
}
export interface Likes {
    id: number;
    email: string;
    name: string | null;
    avatar: string | null;
    description: string | null;
    place_of_work: string | null;
    science_degree: string | null;
    categories: string[] | null;
    contacts: string | null;
    banned: boolean;
    banReason: string | null;
    likes: number;
    dislikes: number;
    createdAt: string;
    updatedAt: string;
    Dislike: Dislike[];
}
export interface userType {
    id: number;
    email: string;
    name: string | null;
    avatar: string | null;
    description: string | null;
    place_of_work: string | null;
    science_degree: string | null;
    categories: string[] | null;
    contacts: string | null;
    banned: boolean;
    banReason: string | null;
    likes: number;
    dislikes: number;
    createdAt: string;
    updatedAt: string;
    roles: any[];
    course: any[];
    postfolio: any[];
    subscriptions: Subscribers[];
    subscribers: Subscribers[];
    likedUsers: Likes[];
    dislikedUsers: Likes[];
}
export interface usersType {
    users: userType[];
    totalUsers: number;
    page: number;
    pageCount: number;
    limit: number;
}
export interface PortfolioType {
    id: number;
    title: string;
    content: string;
    category: string;
    type: string;
    image: string | null;
    docs: string | null;
    userId: number;
}

export interface PortfolioListType {
    portfolio: PortfolioType[];
    totalPortfolio: number;
    page: number;
    pageCount: number;
    limit: number;
}

export interface LessonType {
    id: number;
    title: string;
    content: string;
    description: string;
    image: string;
    lesson_number: string;
    reading_materials: string[];
    courseId: number;
}

export interface CourseType {
    id: number;
    title: string;
    description: string;
    level: string;
    category: string;
    image: string;
    authorId: number;
    lessonCount: number;
    lessons: LessonType[];
}

export interface CourseListType {
    courses: CourseType[];
    totalCourses: number;
    page: number;
    pageCount: number;
    limit: number;
}

export interface ProjectType {
    portfolio: PortfolioType[];
    course: CourseType[];
}
