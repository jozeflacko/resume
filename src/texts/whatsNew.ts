
export class WhatsNew {

  private title: string = "What´s New 1";
  private subtitle: string = "What´s New 2";
  private description: string = "What´s New 3";

  public getTitle(): string {
    return this.title;
  }

  public getSubtitle(): string {
    return this.subtitle;
  }

  public getDescription(): string {
    return this.description;
  }

  public get() {
    return [
      {
        name: "Neural Network Library",
        created: "13 Januar 2018",
        description: "Description 2",
        github: "https://github.com/opam/AI.perceptron_demo",
        page:""
      },
      {
        name: "Single Perceptron",
        created: "13 Januar 2018",
        description: "Description 2",
        github: "https://github.com/opam/AI.perceptron_demo",
        page:""
      },      
    ];
  }  
}
