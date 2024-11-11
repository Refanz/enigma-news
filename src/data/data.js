const NEWS_STORAGE_KEY = "NEWS";

const newsStorage = [];

const saveNews = (news) => {
    const parsedNews = JSON.stringify(news);
    localStorage.setItem(NEWS_STORAGE_KEY, parsedNews);
}

const getNewsFromStorage = () => {
    const storedNews = localStorage.getItem(NEWS_STORAGE_KEY);

    if (storedNews) {
        return JSON.parse(storedNews);
    }

    return [];
}

export {newsStorage, saveNews, getNewsFromStorage};