export interface Team {
    teamName: string;
    players: string[];
};

export interface MatchResult {
    homeScore: string,
    guestScore: string; 
    homeTeam: string;
    guestTeam: string;
    matchDate: Date;
}
