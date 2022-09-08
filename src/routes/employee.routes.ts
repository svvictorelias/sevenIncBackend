import { Router } from 'express';
import { createEmployeeController } from '../modules/employee/useCases/createEmployee';
import { deleteEmployeeController } from '../modules/employee/useCases/deleteEmployee';
import { listByIdEmployeeController } from '../modules/employee/useCases/listByIdEmployee';
import { listEmployeeController } from '../modules/employee/useCases/listEmployee';
import { updateEmployeeController } from '../modules/employee/useCases/updateEmployee';

const employeeRoutes = Router();

employeeRoutes.get('/', (request, response) => {
  return listEmployeeController.handle(request, response);
});
employeeRoutes.get('/:id', (request, response) => {
  return listByIdEmployeeController.handle(request, response);
});

employeeRoutes.post('/', (request, response) => {
  return createEmployeeController.handle(request, response);
});
employeeRoutes.put('/:id', (request, response) => {
  return updateEmployeeController.handle(request, response);
});
employeeRoutes.delete('/:id', (request, response) => {
  return deleteEmployeeController.handle(request, response);
});

export { employeeRoutes };
