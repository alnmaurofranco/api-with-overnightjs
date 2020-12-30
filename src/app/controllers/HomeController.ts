import { Controller, Get } from '@overnightjs/core';
import { Request, Response } from 'express';

@Controller('api/')
export default class HomeController {
  @Get()
  public index(_: Request, res: Response): void {
    res.status(200).json({
      message: 'Weelcome to OvernightJS com ExpressJS',
    });
  }
}
