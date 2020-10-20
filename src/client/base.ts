import {Ped} from 'fivem-js';
import {ESXClient} from "fivem-esx-js/client/esx_client";
import {ESX} from "./esx";


export class ImmoPlayer extends Ped {

  private job:string;
  private jobgrade:number;
  private jobdata:any;
  private readonly ESX: ESXClient = ESX;
  private tickId:number;

  constructor(handle: number, job?:string, jobgrade?:number) {
    super(handle);
    if(job && jobgrade) {
      this.job = job;
      this.jobgrade = jobgrade;
      this.fetchJobData();
    }else {
      this.fetchJobs();
    }
    
  }

  public fetchJobs(): void {
    const playerData = ESX.GetPlayerData();
    this.job = playerData.job.name;
    this.jobgrade = playerData.job.grade;
    this.fetchJobData();
  }

  private fetchJobData() {
    ESX.TriggerServerCallback('immojobs:getJobInfo', (result:any) => {
      this.jobdata = result;
    }, this.job);
  }

  public destroy() :void {
    if(this.tickId != undefined) {
      setImmediate(() => {
        clearTick(this.tickId);
      })
    }
  }


}
