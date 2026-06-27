import { calculateAIScore } from "./aiScore";

export function rankCompanies(companies: any[]) {
  return [...companies].sort((a, b) => {
    return (
      calculateAIScore(b) -
      calculateAIScore(a)
    );
  });
}