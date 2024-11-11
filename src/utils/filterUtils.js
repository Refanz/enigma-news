export default function getNewsByCategory(news, category) {
    return news.filter((item) => {
        if (item.category === category) return item;
    });
}