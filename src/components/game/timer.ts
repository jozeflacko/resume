export default class Timer {
  private initTime: number;
  private onResetTime: number;
  private countdown: number = 0;
  private refreshIntervalId: any = null;
  private callback: any;
  private triggerCallback:boolean = true;
  private nodeIdWhereToPrintCountdown: any;

  constructor (initTime:number, onResetTime: number, callback: any, nodeIdWhereToPrintCountdown: any) {
    if(initTime < 0 || onResetTime < 0 || !callback)
      return;

    this.initTime = initTime+1;
    this.onResetTime = onResetTime+1;
    this.callback = callback;
    this.nodeIdWhereToPrintCountdown = nodeIdWhereToPrintCountdown;
  }

  public start() {
    this.stop();
    this.countdown = this.initTime;
    this.refreshMessage();
    this.refreshIntervalId = setInterval(() => { this.refreshMessage(); }, 1000);
  }

  processCountdown() {
    const myNode = document.getElementById(this.nodeIdWhereToPrintCountdown);
    if(myNode)
      myNode.innerHTML = this.getCountdown().toString();
  }

  public stop(triggerCallback:boolean = true) {
     if( this.refreshIntervalId !== null ) {
       clearInterval(this.refreshIntervalId);
     }
     this.countdown = 0;
     this.refreshIntervalId = null;
     this.countdown = 0;
     this.triggerCallback = triggerCallback;
   }

   public setInit() {
     this.countdown = this.initTime;
     this.refreshMessage();
   }

   public reset() {
    	this.countdown = this.onResetTime;
      this.refreshMessage(); 
   }

   private getCountdown() {
     return this.countdown;
   }

   private refreshMessage() {
      if(this.countdown <= 0) {
        this.stop();
        if(this.triggerCallback)
          this.callback();
      } else {
        this.countdown = this.countdown - 1;
      }
      this.processCountdown();
    }
}
