import { UpdateEmployeeController } from './UpdateEmployeeController';
import { UpdateEmployeeUseCase } from './UpdateEmployeeUseCase';

const update = require('../../repositories/implementations/EmployeeRepository');

const updateEmployeeUseCase = new UpdateEmployeeUseCase(update);

const updateEmployeeController = new UpdateEmployeeController(
  updateEmployeeUseCase
);

export { updateEmployeeController };
