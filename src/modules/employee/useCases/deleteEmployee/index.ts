import { DeleteEmployeeController } from './deleteEmployeeController';
import { DeleteEmployeeUseCase } from './deleteEmployeeUseCase';

const deleteEmployee = require('../../repositories/implementations/EmployeeRepository');

const deleteEmployeeUseCase = new DeleteEmployeeUseCase(deleteEmployee);

const deleteEmployeeController = new DeleteEmployeeController(
  deleteEmployeeUseCase
);

export { deleteEmployeeController };
