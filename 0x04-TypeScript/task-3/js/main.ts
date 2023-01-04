/// <reference path="crud.d.ts" />
// the reference directive asks the compiler to include additional files for the compilation process.

import { RowElement, RowID } from "./interface";
import * as CRUD from './crud';

const row:RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva'
}

const newRowID: RowID = CRUD.insertRow(row);
const updatedRow: RowElement = {...row, age: 23};
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
