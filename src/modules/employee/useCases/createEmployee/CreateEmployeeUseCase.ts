import { AppError } from '../../../../errors/AppError';
import { IEmployeeRepository } from '../../repositories/IEmployeeRepository';
const employeeRepository = require('../../repositories/implementations/EmployeeRepository');

interface IRequest {
  name: string;
  document: string;
  email: string;
  phone: string;
  birth_date: Date;
  salary: number;
}

class CreateEmployeeUseCase {
  constructor(private employeeRepository: IEmployeeRepository) {}

  async execute({
    name,
    document,
    email,
    phone,
    birth_date,
    salary
  }: IRequest): Promise<IRequest[]> {
    const employeeAlreadyExists = await employeeRepository.listByDocument({document})
    if(employeeAlreadyExists){
      throw new AppError('Document Already Exists',401)
    }
    const employee = await employeeRepository.create({
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

export { CreateEmployeeUseCase };
