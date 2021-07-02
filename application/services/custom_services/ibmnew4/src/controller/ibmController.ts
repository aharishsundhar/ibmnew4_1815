import { Request, Response } from 'express';
import { ibmService } from '../service/ibmService';
import { CustomLogger } from '../config/Logger'
let ibm = new ibmService();

export class ibmController {
    
    constructor() { }
    
    public GpCreate(req: Request, res: Response) {
ibm.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into ibmController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from ibmController.ts: GpCreate');
    })}


}