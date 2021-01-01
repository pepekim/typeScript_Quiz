
import {shuffleArray} from './utils';

export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
}

// Question 타입을 사용하고 거기에 더해서 answers: string[] 타입을 추가하여 QuestionState 라는 타입을 새로 생성
export type QuestionState = Question & {answers: string[]}

export enum Difficulty {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard'
}

export const fetchQuizQuestions = async (amount: number, difficulty: Difficulty) => {

  const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
  const data = await (await fetch(endpoint)).json();
  return data.results.map((question: Question) => (
  {
    ...question,
    answers: shuffleArray([
      ...question.incorrect_answers, 
      question.correct_answer
    ])
  }
))
}

export default fetchQuizQuestions;