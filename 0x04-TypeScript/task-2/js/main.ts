interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
      return 'Working from home';
  }
  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }
  workDirectorTasks(): string {
    return 'Getting to director tasks'
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Working from home';
  }
  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }
  workDirectorTasks(): string {
    return 'Getting to work';
  }
}

function createEmployee(salary: string | number): TeacherInterface | DirectorInterface {
  if (typeof salary === 'string') {
    try {
      salary = parseInt(salary);
    } catch (error) {
      throw Error('invalid input for salary parameter');
    }
  }
  if (salary > 500) {
    return new Director;
  } else {
    return new Teacher;
  }
}