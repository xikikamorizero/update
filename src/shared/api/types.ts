export type ID = {
    id: string;
};
export interface authType {
    email: string;
    password: string;
}
export interface authTypeReg {
    email: string;
    password: string;
    teacher: boolean;
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
    avatar?: any;
    description?: string | null;
    place_of_work?: string | null;
    position?: string | null;
    science_degree?: string | null;
    yearsOfExperience?: string;
    categories?: string[] | null;
    contacts?: string | null;
}

export interface editCourse {
    title: string;
    description: string;
    level: string;
    category: string;
    image: any;
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
export interface DeleteResponseUpd {
    success: boolean;
}
export interface LoginResponseType {
    token: string;
}
export interface usersParamType {
    keyword: string;
    place_of_work: string;
    science_degree: string;
    yearsOfExperienceMin: number | null;
    yearsOfExperienceMax: number | null;
    awardMin: number | null;
    awardMax: number | null;
    publicationsMin: number | null;
    publicationsMax: number | null;
    portfolioMin: number | null;
    portfolioMax: number | null;
    courseMin: number | null;
    courseMax: number | null;
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
    position: string | null;
    science_degree: string | null;
    yearsOfExperience: number;
    categories: string[] | null;
    contacts: string | null;
    banned: boolean;
    banReason: string | null;
    likes: number;
    dislikes: number;
    awardsCount: number;
    publicationsCount: number;
    courseCount: number;
    portfolioCount: number;
    createdAt: string;
    updatedAt: string;
    roles: rolesType[];
    awards: Award[];
    traning: Traning[];
    education: Education[];
    publications: Publications[];
    course: any[];
    portfolio: any[];
    subscriptions: Subscribers[];
    subscribers: Subscribers[];
    likedUsers: Likes[];
    dislikedUsers: Likes[];
}
interface rolesType {
    id: number;
    value: string;
    description: string;
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

export interface Award {
    id: number;
    title: string;
    year: number;
    image: string | null;
    docs: string | null;
    type: string;
    userId: number;
}
export interface CreateAward {
    title: string;
    year: number;
    image?: any;
    docs?: any;
    type: string;
}
export interface EditAward {
    title?: string;
    year?: string;
    image?: any;
    docs?: any;
    type?: string;
}

export interface Publications {
    id: number;
    title: string;
    year: number;
    docs: string | null;
    type: string;
    link: string | null;
    userId: number;
}
export interface CreatePublications {
    title: string;
    year: number;
    docs?: any;
    type: string;
    link: string;
}
export interface EditPublications {
    title?: string;
    year?: string;
    docs?: any;
    type?: string;
    link?: string | null;
}

export interface Traning {
    id: number;
    title: string;
    date: string;
    location: string;
    organization: string;
    hoursSpent: number;
    image: null;
    docs: null;
    userId: number;
}
export interface CreateTraning {
    title: string;
    date: string;
    location: string;
    organization: string;
    hoursSpent: number;
    image?: any;
    docs?: any;
}
export interface EditTraning {
    title?: string;
    date?: string;
    location?: string;
    organization?: string;
    hoursSpent?: string;
    image?: any;
    docs?: any;
}

export interface Education {
    id: number;
    title: string;
    date: string;
    image: string | null;
    docs: string | null;
    userId: number;
}
export interface CreateEducation {
    title: string;
    date: string;
    image?: any;
    docs?: any;
}
export interface EditEducation {
    title?: string;
    date?: string;
    image?: any;
    docs?: any;
}
