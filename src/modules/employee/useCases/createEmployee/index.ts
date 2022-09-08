import { CreateEmployeeController } from './CreateEmployeeController';
import { CreateEmployeeUseCase } from './CreateEmployeeUseCase';

const create = require('../../repositories/implementations/EmployeeRepository');

const createEmployeeUseCase = new CreateEmployeeUseCase(create);

const createEmployeeController = new CreateEmployeeController(
  createEmployeeUseCase
);

export { createEmployeeController };
