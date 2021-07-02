import * as mongoose from 'mongoose';
import ibmModel from '../models/ibm';
import { CustomLogger } from '../config/Logger'


export class ibmDao {
    private ibm = ibmModel;
    constructor() { }
public GpCreate(ibmData, callback){
new CustomLogger().showLogger('info', 'Enter into ibmDao.ts: GpCreate')
let temp = new ibmModel(ibmData);
;
temp.save().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from ibmDao.ts: GpCreate');
callback(result);
}).catch((error)=>{
callback(error);
});}


}