export function calculateScore(
  funding: number
) {
  if (funding >= 10000000000) return 95;

  if (funding >= 5000000000) return 90;

  if (funding >= 1000000000) return 85;

  if (funding >= 500000000) return 80;

  return 70;
}