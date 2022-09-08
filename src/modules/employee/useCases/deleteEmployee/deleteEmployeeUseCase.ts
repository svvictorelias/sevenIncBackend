import { AppError } from '../../../../errors/AppError';
import { Employee } from '../../model/employee';
import { IEmployeeRepository } from '../../repositories/IEmployeeRepository';
const employeeRepository = require('../../repositories/implementations/EmployeeRepository');

class DeleteEmployeeUseCase {
  constructor(private employeeRepository: IEmployeeRepository) {}

  async execute({id}): Promise<Employee[]> {
    const employeeExists = await employeeRepository.listById({id})
    if(!employeeExists){
      throw new AppError('Employee not found',404)
    }
    const employee = await employeeRepository.deleteEmployee({id});
    return employee;
  }
}

export { DeleteEmployeeUseCase };
