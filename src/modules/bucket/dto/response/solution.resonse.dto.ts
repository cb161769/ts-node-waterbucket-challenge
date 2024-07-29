import { states } from '../../enums/status.enum';
import { Steps } from './steps.response.dto';

export class Solution {
  status: states;
  solution: Steps[];
}
