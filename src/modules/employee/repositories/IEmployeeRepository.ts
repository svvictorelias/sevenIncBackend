import { Employee } from '../model/employee';

interface IEmployeeDTO {
  id?: string;
  name: string;
  document: string;
  email: string;
  phone: string;
  birth_date: Date;
  salary: number;
  created_at?: Date;
}

interface IEmployeeRepository {
  list(): Promise<Employee[]>;
  listById(): Promise<Employee>;
  create({
    name,
    document,
    email,
    phone,
    birth_date,
    salary
  }: IEmployeeDTO): void;
  update({
    name,
    document,
    email,
    phone,
    birth_date,
    salary
  }: IEmployeeDTO): void;
  deleteEmployee({ id }): void;
}

export { IEmployeeRepository, IEmployeeDTO };
