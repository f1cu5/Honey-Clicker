/**
 * Represents a leaderboard player entry.
 *
 * @interface LeaderboardPlayer
 * @property {string} userID - Unique identifier of the player.
 * @property {string} displayName - Display name of the player.
 * @property {string | null} picture - Optional player avatar.
 * @property {number} score - Player score or points.
 */
export interface LeaderboardPlayer {
  userID: string;
  displayName: string;
  picture: string | null;
  score: number;
}
