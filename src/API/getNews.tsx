import axios from "axios";

export async function getStories() {
        try {
            let response = await axios.get(`https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`);
            return response 
        } catch(e) {
            throw(e)
        }
}

export async function getBestStories() {
        try {
            let response = await axios.get(`https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`);
            return response 
        } catch(e) {
            throw(e)
        }
}

export async function getStory(id: number | string | undefined) {
    try {
        let response = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
        return response 
    } catch(e) {
        throw(e)
    }
}

export async function getComment(id: number) {
    try {
        let response = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`);
        return response 
    } catch(e) {
        throw(e)
    }
}

