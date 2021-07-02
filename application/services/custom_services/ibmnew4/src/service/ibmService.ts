import { Request, Response } from 'express';
import {ibmDao} from '../dao/ibmDao';
import { CustomLogger } from '../config/Logger'
let ibm = new ibmDao();

export class ibmService {
    
    constructor() { }
    
    public GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into ibmService.ts: GpCreate')
     const  ibmData = req.body;
     ibm.GpCreate(ibmData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from ibmService.ts: GpCreate')
         callback(response);
         });
    }


}