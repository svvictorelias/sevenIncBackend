import { Employee } from '../../model/employee';
const prisma = require('../../../../database/prismaClient');

const list = async (): Promise<Employee[]> => {
  const result = await prisma.employee.findMany({});
  return result;
};
const listById = async ({ id }): Promise<Employee> => {
  const result = await prisma.employee.findUnique({
    where: { id }
  });
  return result;
};
const listByDocument = async ({ document }): Promise<Employee> => {
  const result = await prisma.employee.findFirst({
    where: { document }
  });
  return result;
};

const create = async ({
  name,
  document,
  email,
  phone,
  birth_date,
  salary
}): Promise<Employee> => {
  const birthDate = new Date(birth_date);
  const result = await prisma.employee.create({
    data: {
      name,
      document,
      email,
      phone,
      birth_date: birthDate,
      salary
    }
  });
  return result;
};
const update = async ({
  id,
  name,
  document,
  email,
  phone,
  birth_date,
  salary
}): Promise<Employee> => {
  const user = await prisma.employee.findUnique({
    where: { id }
  });
  const result = await prisma.employee.update({
    where: { id },
    data: {
      name: name ? name : user.name,
      document: document ? document : user.document,
      email: email ? email : user.email,
      phone: phone ? phone : user.phone,
      birth_date: birth_date ? new Date(birth_date) : user.birth_date,
      salary
    }
  });
  return result;
};
const deleteEmployee = async ({ id }): Promise<Employee> => {
  const result = await prisma.employee.delete({
    where: { id }
  });
  return result;
};

module.exports = {
  list,
  listById,
  listByDocument,
  create,
  update,
  deleteEmployee
};
