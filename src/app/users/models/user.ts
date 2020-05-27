export interface User {
    gender: string;
    userId: number;
    name: Name;
    email: string;
    picture: Picture;
    phone?: string;
    starRating: number;
    dob: DateOfBirth;
}

export interface SearchResponse {
    results: User[];
    info: Info;
}

interface DateOfBirth {
    date: string;
    age: number;
}

interface Picture {
    medium: string;
}

interface Name {
    title: string;
    first: string;
    last: string;
}

interface Info {
    seed: string;
    results: number;
    page: number;
    version: string;
}