import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PathaoService } from './pathao.service';

@Controller('pathao')
export class PathaoController {

    constructor(private pathao: PathaoService) { }

    @Post()
    createOrder(@Body() data: any) {
        const res = this.pathao.createPathaoOrder(data)
        return res;
    }

    @Get('stores')
    async getStores() {
       const res = await this.pathao.getPathaoStores();
       return res;
    }

    @Get('cities')
    async getCities() {
       const res = await this.pathao.getPathaoCities();
       return res;
    }

    @Get('zones/:city_id')
    async getZones(@Param('city_id') city_id: string) {
        const res = await this.pathao.getPathaoZones(city_id);
        return res
    }

    @Get('areas/:id')
    getAreas(@Param("id") id: string) {
        return this.pathao.getPathaoAreas(id);
    }
}
