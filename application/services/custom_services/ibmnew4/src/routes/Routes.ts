import { Request, Response, NextFunction } from "express";
import { ibmController } from '../controller/ibmController';


export class Routes {
    private ibm: ibmController = new ibmController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/ibm').post(this.ibm.GpCreate);
     }

}