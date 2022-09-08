import { Request, Response } from 'express';
import { DeleteEmployeeUseCase } from './deleteEmployeeUseCase';

class DeleteEmployeeController {
  constructor(private deleteEmployeeUseCase: DeleteEmployeeUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const {id} = request.params
    const employee = await this.deleteEmployeeUseCase.execute({id});
    return response.status(202).send();
  }
}

export { DeleteEmployeeController };
