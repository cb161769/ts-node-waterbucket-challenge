import { Body, Controller, Post, Version } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Solution } from '../dto/response/solution.resonse.dto';
import { WaterJugRiddle } from '../dto/requests/riddle.request.dto';
//TODO: rename endpoints and files
@ApiTags('waterbucket-challenge')
@Controller('waterbucket')
export class WaterBuckController {
  @Post('/compute')
  @Version('1')
  @ApiOperation({
    summary: '',
  })
  @ApiBody({ type: WaterJugRiddle })
  @ApiResponse({ type: Solution })
  public async compute(@Body() request: WaterJugRiddle): Promise<any> {
    try {
    } catch (error) {}
  }
}
