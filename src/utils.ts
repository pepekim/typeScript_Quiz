// 랜덤 배열만들 때 sort 처리하는 것 주의깊게 봐라

export const shuffleArray = (array: any[]) => [...array].sort(() => Math.random() - 0.5);