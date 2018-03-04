export interface ITeam{
    teamName: string;
    teamMentorName: string;
    teamMembers: ICandiate[];
    teamAverageScore: number;
}

export interface ICandiate {
    name: string;
    activities: IActivity[];    
}

export interface IActivity {
  nameOfTheSong: string;
  date: string;
  mentor1Score : number;
  mentor2Score : number;
  mentor3Score : number;
  averageScore: number;
}

