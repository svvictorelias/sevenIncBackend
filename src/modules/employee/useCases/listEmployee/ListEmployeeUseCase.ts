import { Employee } from '../../model/employee';
import { IEmployeeRepository } from '../../repositories/IEmployeeRepository';
const employeeRepository = require('../../repositories/implementations/EmployeeRepository');

class ListEmployeeUseCase {
  constructor(private employeeRepository: IEmployeeRepository) {}

  async execute(): Promise<Employee[]> {
    const employees = await employeeRepository.list();
    return employees;
  }
}

export { ListEmployeeUseCase };
