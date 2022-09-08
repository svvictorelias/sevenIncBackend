import { AppError } from '../../../../errors/AppError';
import { Employee } from '../../model/employee';
import { IEmployeeRepository } from '../../repositories/IEmployeeRepository';
const employeeRepository = require('../../repositories/implementations/EmployeeRepository');

class ListByIdEmployeeUseCase {
  constructor(private employeeRepository: IEmployeeRepository) {}

  async execute({id}): Promise<Employee[]> {

    const employee = await employeeRepository.listById({id});
    if(!employee){
      throw new AppError('Employee not found',404)
    }
    return employee;
  }
}

export { ListByIdEmployeeUseCase };
