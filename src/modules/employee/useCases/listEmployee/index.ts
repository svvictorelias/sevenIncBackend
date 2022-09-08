import { ListEmployeeController } from './ListEmployeeController';
import { ListEmployeeUseCase } from './ListEmployeeUseCase';

const list = require('../../repositories/implementations/EmployeeRepository');

const listEmployeeUseCase = new ListEmployeeUseCase(list);

const listEmployeeController = new ListEmployeeController(listEmployeeUseCase);

export { listEmployeeController };
