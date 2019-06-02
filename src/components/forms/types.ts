export interface Team {
    teamName: string;
    players: string[];
};

export interface MatchResult {
    homeTeam: Team;
    guestTeam: Team;
    homeScore: number;
    guestScore: number;
    matchDate: Date;
}
