export const loadTopicsAndQuiz = async() => {
    const loadedTopics = await fetch('https://openapi.programming-hero.com/api/quiz')
    const topics = await loadedTopics.json()


    return topics
}

export const loadQuiz = async(id) => {
    const loadedQuiz = await fetch(`https://openapi.programming-hero.com/api/quiz/${id}`)
    const quiz = await loadedQuiz.json()
    return quiz
}
