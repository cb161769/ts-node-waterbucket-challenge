import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
  Version,
} from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Solution } from '../dto/response/solution.resonse.dto';
import { WaterJugRiddle } from '../dto/requests/riddle.request.dto';
import { bucketService } from '../services/bucket.service';
//TODO: rename endpoints and files
@ApiTags('waterbucket-challenge')
@Controller('waterbucket')
export class WaterBuckController {
  constructor(private readonly service: bucketService) {}
  @Post('/compute')
  @Version('1')
  @ApiOperation({
    summary: '',
  })
  @ApiBody({ type: WaterJugRiddle })
  @ApiResponse({ type: Solution })
  public async compute(@Body() request: WaterJugRiddle): Promise<Solution> {
    try {
      return this.service.compute(request);
    } catch (error) {
      throw new HttpException(error['message'], HttpStatus.NOT_IMPLEMENTED);
    }
  }
}
