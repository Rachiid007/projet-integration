import { Controller, Body, Patch, Param, Delete, Get } from '@nestjs/common';
import { StatisticService } from './statistic.service';
import { CreateStatisticDto } from './dto/create-statistic.dto';
import { UpdateStatisticDto } from './dto/update-statistic.dto';

@Controller('statistic')
export class StatisticController {
  constructor(private readonly statisticService: StatisticService) {}

  /* @Post()
  create(@Body() createStatisticDto: CreateStatisticDto) {
    return this.statisticService.create(createStatisticDto);
  }*/

  /* @Get()
  findAll() {
    return this.statisticService.findAll();
  }*/

  /*@Get(':id')
  findOne(@Param('id') id: number) {
    return this.statisticService.Get_User_stat(+id);
  }*/

  /* @Patch(':id')
  update(@Param('id') id: string, @Body() updateStatisticDto: UpdateStatisticDto) {
    return this.statisticService.update(+id, updateStatisticDto);
  }*/

  /*@Delete(':id')
  remove(@Param('id') id: string) {
    return this.statisticService.remove(+id);
  }*/
}
