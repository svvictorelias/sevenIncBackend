import { Request, Response } from 'express';
import { ListEmployeeUseCase } from './ListEmployeeUseCase';

class ListEmployeeController {
  constructor(private listEmployeeUseCase: ListEmployeeUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const all = await this.listEmployeeUseCase.execute();
    return response.json(all);
  }
}

export { ListEmployeeController };
