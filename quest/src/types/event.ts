type TEvent = {
    id: number;
    authorId: number;
    title: string;
    description: string;
    startDate: Date;
    endDate: Date;
    imgSrc?: string;
    url?: string;
};

export type { TEvent };
