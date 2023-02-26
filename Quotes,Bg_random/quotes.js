const quotes = [
    {
        quote: "일관된 행동을 바꿔 습관을 고치면 결과가 바뀔수 있습니다.",
        author: "Walt Disney",
    },
    {
        quote: "자신에게 진심어린 사랑을 표현하세요",
        author: "Walt Disney",
    },
    {
        quote: "믿음은 할 수 있는 일에 대해 긍정적인 태도를 가지며, 할 수 없는 일에 대해 전혀 걱정하지 않는 것을 말합니다.",
        author: "Walt Disney",
    },
    {
        quote: "서두르지 말고 천천히 한걸음 한걸음 그렇게 오세요",
        author: "Walt Disney",
    },
    {
        quote: "인생은 모든 것이 제자리를 일고 그것을 바로 잡기 위해 싸우기로 결정한 순간에 제일 좋습니다.",
        author: "Walt Disney",
    },
    {
        quote: "꿈을 향해 당당하게 나아가라",
        author: "Walt Disney",
    },
    {
        quote: "삶은 설계,테스트, 변화와 실행의 연속이다.",
        author: "Walt Disney",
    },
    {
        quote: "자신과의 관계가 모든 사람과의 분위기를 결정합니다.",
        author: "Walt Disney",
    },
    {
        quote: "패자는 실패하는 순간 그만둡니다. 승자는 실패해도 성공할 때까지 걔속됩니다",
        author: "Walt Disney",
    },
]

const quote = document.querySelector("#quote span:first-child")
const author = document.querySelector("#quote span:last-child")

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)]

quote.innerText = todayQuote.quote
author.innerText = todayQuote.author

// console.log(quotes[Math.floor(Math.random() * 10)]) => 10을 quotes.length 로 대체함
//console.log(quotes[Math.floor(Math.random() * quotes.length))

//  Math.random() 에 *10 을 하면 0-10 사이의 숫자들을 얻을수 있다.