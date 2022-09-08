import { Request, Response } from 'express';
import { CreateEmployeeUseCase } from './CreateEmployeeUseCase';

class CreateEmployeeController {
  constructor(private createEmployeeUseCase: CreateEmployeeUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, document, email, phone, birth_date, salary } = request.body;
    const create = await this.createEmployeeUseCase.execute({
      name,
      document,
      email,
      phone,
      birth_date,
      salary
    });

    return response.status(201).send(create);
  }
}

export { CreateEmployeeController };
