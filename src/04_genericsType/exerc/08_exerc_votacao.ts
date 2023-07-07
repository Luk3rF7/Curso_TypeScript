type VotationOption = {
  numberOfVotes: number;
  option: string;
};

export class Votation {
  private _votationOptions: VotationOption[] = [];
  constructor(public details: string) {}

  addVotationOption(votationOption): void {
    this._votationOptions.push(votationOption);
  }

  vote(votationIndex: number): void {
    if (!this._votationOptions[votationIndex]) return;
    this._votationOptions[votationIndex].numberOfVotes += 1;
  }
  get votationOptions(): VotationOption[] {
    return this._votationOptions;
  }
}

export class VotationApp {
  private votations: Votation[] = [];

  addVotation(votation: Votation): void {
    this.votations.push(votation);
  }
  showVotation(): void {
    for (const votation of this.votations) {
      console.log(votation.details);
      for (const votationOption of votation.votationOptions) {
        console.log(votationOption.option, votationOption.numberOfVotes);
      }
      console.log("=======/ Final da Votação /========");
    }
  }
}

const votation1 = new Votation("which is your favorite programming language?");

votation1.addVotationOption({ option: "red", numberOfVotes: 0 });
votation1.addVotationOption({ option: "green", numberOfVotes: 0 });
votation1.addVotationOption({ option: "blue", numberOfVotes: 0 });
votation1.addVotationOption({ option: "white", numberOfVotes: 0 });

votation1.vote(0);
votation1.vote(1);
votation1.vote(1);
votation1.vote(2);
votation1.vote(3);
votation1.vote(0);
const votationApp = new VotationApp();
votationApp.addVotation(votation1);
votationApp.showVotation();
