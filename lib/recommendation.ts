export function scoreManhwa(item: any, answers: string[]) {

  let score = 0;

  const genres = item.genres || [];

  const title = (
    item.title?.english ||
    item.title?.romaji ||
    ""
  ).toLowerCase();

  // VIBE

  if (answers.includes("Action") && genres.includes("Action")) {
    score += 30;
  }

  if (answers.includes("Romance") && genres.includes("Romance")) {
    score += 30;
  }

  if (answers.includes("Fantasy") && genres.includes("Fantasy")) {
    score += 30;
  }

  if (answers.includes("Thriller") && genres.includes("Thriller")) {
    score += 30;
  }

  if (answers.includes("Horror") && genres.includes("Horror")) {
    score += 30;
  }

  // POWER SYSTEM

  if (
    answers.includes("System / Leveling") &&
    (
      title.includes("level") ||
      title.includes("player") ||
      title.includes("hunter")
    )
  ) {
    score += 25;
  }

  if (
    answers.includes("Regression / Return") &&
    (
      title.includes("return") ||
      title.includes("regression") ||
      title.includes("reincarn")
    )
  ) {
    score += 25;
  }

  // DARKNESS

  if (
    answers.includes("Pitch Black") &&
    genres.includes("Psychological")
  ) {
    score += 20;
  }

  if (
    answers.includes("Keep It Light") &&
    genres.includes("Comedy")
  ) {
    score += 20;
  }

  // BONUS

  score += item.averageScore || 0;

  return score;
}