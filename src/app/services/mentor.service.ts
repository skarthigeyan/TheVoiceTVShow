import { Injectable } from '@angular/core';
import { ITeam } from './../models/thevoice-show-models';

@Injectable()
export class MentorService {

  constructor() { }

      getMentorServicesData(): ITeam[] {
      
        return [{"teamName":"Team A","teamMentorName":"Mentor1","teamMembers":[{"name":"Michael Jackson","activities":[{"nameOfTheSong":"What I want to Say is","date":"03/03/2018","mentor1Score":99,"mentor2Score":99,"mentor3Score":100,"averageScore":99.3},{"nameOfTheSong":"Dangerous","date":"03/03/2018","mentor1Score":90,"mentor2Score":95,"mentor3Score":100,"averageScore":95}]},{"name":"Britney Spears","activities":[{"nameOfTheSong":"Oops!.. I Dit it Again","date":"03/03/2018","mentor1Score":90,"mentor2Score":90,"mentor3Score":90,"averageScore":90},{"nameOfTheSong":"Baby One More Time","date":"03/03/2018","mentor1Score":90,"mentor2Score":95,"mentor3Score":100,"averageScore":95}]}],"teamAverageScore":94.8},{"teamName":"Team B","teamMentorName":"Mentor2","teamMembers":[{"name":"Jennifer Lopez","activities":[{"nameOfTheSong":"If you had my Love","date":"03/03/2018","mentor1Score":95,"mentor2Score":95,"mentor3Score":95,"averageScore":95},{"nameOfTheSong":"Let's Get Loud","date":"03/03/2018","mentor1Score":95,"mentor2Score":90,"mentor3Score":90,"averageScore":91.6}]},{"name":"Backstreet Boys","activities":[{"nameOfTheSong":"I want it that way","date":"03/03/2018","mentor1Score":95,"mentor2Score":95,"mentor3Score":95,"averageScore":95},{"nameOfTheSong":"Everybody rock your body","date":"03/03/2018","mentor1Score":95,"mentor2Score":90,"mentor3Score":90,"averageScore":91.6}]}],"teamAverageScore":93.3},{"teamName":"Team C","teamMentorName":"Mentor3","teamMembers":[{"name":"Shakira","activities":[{"nameOfTheSong":"This time for Africa","date":"03/03/2018","mentor1Score":99,"mentor2Score":99,"mentor3Score":100,"averageScore":99.3},{"nameOfTheSong":"Hips Don't Lie","date":"03/03/2018","mentor1Score":99,"mentor2Score":99,"mentor3Score":100,"averageScore":99.3}]},{"name":"Katy Perry","activities":[{"nameOfTheSong":"Roar","date":"03/03/2018","mentor1Score":95,"mentor2Score":99,"mentor3Score":97,"averageScore":97},{"nameOfTheSong":"I kissed a girl","date":"03/03/2018","mentor1Score":93,"mentor2Score":99,"mentor3Score":98,"averageScore":96.6}]}],"teamAverageScore":98.1}]


      }

}
