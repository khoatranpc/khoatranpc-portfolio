/** Mốc bắt đầu làm việc chính trong ngành — dùng cho copy “hơn X năm” / badge X+. */
export const CAREER_START_YEAR = 2022

export function yearsSinceCareerStart(): number {
  return Math.max(1, new Date().getFullYear() - CAREER_START_YEAR)
}

/** Badge kiểu "4+" */
export function yearsSinceCareerStartPlus(): string {
  return `${yearsSinceCareerStart()}+`
}
