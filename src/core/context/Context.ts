import { createContext, useContext } from 'react';
import { Desk } from '../../desks/models/Desk';
import { Employee } from '../../employees/models/Employee';
import { EmployeeDesk } from '../../employees/models/EmployeeDesk';

interface ContextType {
  desks: Desk[],
  setDesks: Function,
  employees: Employee[],
  setEmployees: Function,
  employeesDesks: EmployeeDesk[],
  setEmployeesDesks: Function,
  deskToEdit: Desk,
  setDeskToEdit: Function
}

const AppContext = createContext<ContextType>({
	desks: [],
	setDesks: value => {},
  employees: [],
  setEmployees: value => {},
  employeesDesks: [],
  setEmployeesDesks: value => {},
  deskToEdit: { id: -1, name: '' },
  setDeskToEdit: value => {}
});

const useAppContext = () => useContext(AppContext);

export { AppContext, useAppContext }