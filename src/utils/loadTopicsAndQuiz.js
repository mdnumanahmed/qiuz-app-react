export const loadTopicsAndQuiz = async() => {
    const loadedTopics = await fetch('https://openapi.programming-hero.com/api/quiz')
    const topics = await loadedTopics.json()
    return topics
}
