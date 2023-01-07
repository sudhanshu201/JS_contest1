/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperswithMap() {
  //Write your code here
   const developers = [{id:1,name:"john",age:"18",profession:"developer"},{id:2, name:"jack",age:"20", profession:"developer"},{id:3, name:"karen", age:"19",profession:"admin"}];
  const developerNames = developers.map(developer => {
    if (developer.profession === 'developer') {
      return developer.name;
    }
  });
  console.log(developerNames);
}

function PrintDeveloperbyForEach() {
  //Write your code here
   const developers = [{id:1,name:"john",age:"18",profession:"developer"},{id:2, name:"jack",age:"20", profession:"developer"},{id:3, name:"karen", age:"19",profession:"admin"}];
  developers.forEach(developer => {
    if (developer.profession === 'developer') {
      console.log(developer.name);
    }
  });
  
}

function addData() {
  //Write your code here
   const newEmployee = {id:4,name:"susan",age:"20",profession:"intern"};
  const developers = [{id:1,name:"john",age:"18",profession:"developer"},{id:2, name:"jack",age:"20", profession:"developer"},{id:3, name:"karen", age:"19",profession:"admin"}];
  developers.push(newEmployee);
  console.log(developers);
}

function removeAdmin() {
  //Write your code here
   const developers = [{id:1,name:"john",age:"18",profession:"developer"},{id:2, name:"jack",age:"20", profession:"developer"},{id:3, name:"karen", age:"19",profession:"admin"}];
  const updatedDevelopers = developers.filter(developer => developer.profession !== 'admin');
  console.log(updatedDevelopers);
}

function concatenateArray() {
  //Write your code here
   const developers = [{id:1,name:"john",age:"18",profession:"developer"},{id:2, name:"jack",age:"20", profession:"developer"},{id:3, name:"karen", age:"19",profession:"admin"}];
  const newDevelopers = [{id:4,name:"tim",age:"23",profession:"developer"},{id:5, name:"peter",age:"30", profession:"developer"},{id:6, name:"jane", age:"25",profession:"admin"}];
  const allDevelopers = developers.concat(newDevelopers);
  console.log(allDevelopers);
}
