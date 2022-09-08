import { Request, Response } from 'express';
import { ListByIdEmployeeUseCase } from './ListByIdEmployeeUseCase';

class ListByIdEmployeeController {
  constructor(private listByIdEmployeeUseCase: ListByIdEmployeeUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const {id} = request.params
    const all = await this.listByIdEmployeeUseCase.execute({id});
    return response.json(all);
  }
}

export { ListByIdEmployeeController };
