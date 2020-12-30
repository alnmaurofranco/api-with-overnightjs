import { getRepository } from 'typeorm';
import Version from '@models/Version';
import * as expressAsyncHandler from 'express-async-handler';
import {
  Controller, Get, Put, Wrapper,
} from '@overnightjs/core';
import { Request, Response } from 'express';

@Controller('api/version')
export default class VersionController {
  @Get()
  @Wrapper(expressAsyncHandler.default)
  public async get(req: Request, res: Response): Promise<Response> {
    const repo = getRepository(Version);
    const data = await repo.find();

    return res.json(data);
  }

  @Put(':id')
  @Wrapper(expressAsyncHandler.default)
  public async update(req: Request, res: Response): Promise<Response> {
    const repo = getRepository(Version);

    const { id } = req.params;
    const { version } = req.body;

    const versionRes = await repo.findOneOrFail(id);

    repo.update(versionRes.id, { version });

    const result = await repo.save(versionRes); // Não está retornando o campo atualizado

    return res.json(result);
  }
}
