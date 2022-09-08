import { Request, Response } from 'express';
import { UpdateEmployeeUseCase } from './UpdateEmployeeUseCase';

class UpdateEmployeeController {
  constructor(private updateEmployeeUseCase: UpdateEmployeeUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const {id} = request.params
    const { name, document, email, phone, birth_date, salary } = request.body;
    const update = await this.updateEmployeeUseCase.execute({
      id,
      name,
      document,
      email,
      phone,
      birth_date,
      salary
    });

    return response.status(200).send(update);
  }
}

export { UpdateEmployeeController };
