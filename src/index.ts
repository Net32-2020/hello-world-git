import { Controller, Get, Param, Put, Body, Post, Delete } from '@nestjs/common';
import {NameEntity} from './name.entity';

@Controller('name')
export class NameController {
    @Get()
    getMany(): Promise<NameEntity[]> {
        return NameEntity.find();
    }

    @Get(':id')
    getOne(@Param('id') id: number): Promise<NameEntity> {
        return NameEntity.findOne(id);
    }

    @Post()
    createOne(@Body() dto: NameEntity): Promise<NameEntity> {
        return NameEntity.save(dto);
    }

    @Put(':id')
    updateOne(
        @Param('id') id: number,
        @Body() dto: NameEntity,
    ) {
        dto.id = id;

        return NameEntity.save(dto);
    }

    @Delete(':id')
    async deleteOne(
        @Param('id') id: number,
    ): Promise<NameEntity> {
        const dto = await NameEntity.findOne(id);

        return NameEntity.remove(dto);
    }
}
