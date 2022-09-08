import { AppError } from '../../../../errors/AppError';
import { IEmployeeRepository } from '../../repositories/IEmployeeRepository';
const employeeRepository = require('../../repositories/implementations/EmployeeRepository');

interface IRequest {
  id: string;
  name: string;
  document: string;
  email: string;
  phone: string;
  birth_date: Date;
  salary: number;
}

class UpdateEmployeeUseCase {
  constructor(private employeeRepository: IEmployeeRepository) {}

  async execute({
    id,
    name,
    document,
    email,
    phone,
    birth_date,
    salary
  }: IRequest): Promise<IRequest[]> {
    const employeeExists = await employeeRepository.listById({id})
    if(!employeeExists){
      throw new AppError('Employee not found',404)
    }
    const employee = await employeeRepository.update({
      id,
      name,
      document,
      email,
      phone,
      birth_date,
      salary
    });
    return employee;
  }
}

export { UpdateEmployeeUseCase };
