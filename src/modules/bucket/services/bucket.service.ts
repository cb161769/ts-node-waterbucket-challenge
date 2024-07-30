/* eslint-disable prettier/prettier */
import { Injectable, Logger } from '@nestjs/common';
import { Solution } from '../dto/response/solution.resonse.dto';
import { WaterJugRiddle } from '../dto/requests/riddle.request.dto';
import { solve } from '../utils/math.utils';
import { states } from '../enums/status.enum';
import { Steps } from '../dto/response/steps.response.dto';

@Injectable()
export class bucketService {
    private readonly logger = new Logger(bucketService.name);
    public compute(request: WaterJugRiddle): Solution {
        try {
            this.logger.log('starting request for water riddle challenge');
            const paths = solve(request.bucket.first, request.bucket.second, [0, 0], [0, request.amountWanted]);
            if (paths.length > 0) {
                const solution: Steps[] = [];
                let count = 0;
                for (const path of paths) {
                    if (path) {
                        
                        const [action, state] = path as any;
                        solution.push({
                            step: count,
                            action: action.padEnd(15),
                            bucketOne: state[0],
                            bucketTwo: state[1]
                        })
                       count +=1;
                    }
                }
                    this.logger.log(`sucessfully computed solutions: ${paths.length}`);
                return {
                    status :states.solved,
                    solution
                }
            }else{
                this.logger.warn(`no solution was found`);
                return {
                    status: states.unsolved,
                    solution:null
                }
            }
        } catch (error) {
            this.logger.error(`an internal error occured `, error['message'], 'compute()');
            throw new Error(error['message']);
        }
    }
}
