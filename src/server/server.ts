import jobDefinitions from './config.json';
import {ESX} from "./esx";

ESX.RegisterServerCallback('immojobs:getJobInfo', function(source:number ,cb:{ (jobResult:any):void}, job: string)  {
  const jobResolve = jobDefinitions.find(element => {
    return element.name == job;
  });

  if(jobResolve != undefined) {
    cb(jobResolve);
  }else {
    cb(null);
  }
});

onNet('test', () => {
  //const _source:number = (global as any).source;

});

on("onResourceStart", (resourceName:string) => {
  if(GetCurrentResourceName() != resourceName) return;

});
