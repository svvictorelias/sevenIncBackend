import { ListByIdEmployeeController } from './ListByIdEmployeeController';
import { ListByIdEmployeeUseCase } from './ListByIdEmployeeUseCase';

const listById = require('../../repositories/implementations/EmployeeRepository');

const listByIdEmployeeUseCase = new ListByIdEmployeeUseCase(listById);

const listByIdEmployeeController = new ListByIdEmployeeController(listByIdEmployeeUseCase);

export { listByIdEmployeeController };
