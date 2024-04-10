export interface StoryType {
    by: string,
    id: number,
    kids: number[],
    score: number,
    time: number,
    title: string,
    url: string,
}

export interface CommentType {
    by: string,
    id: number,
    kids: number[],
    parent: number,
    text: string,
    time: number,
}