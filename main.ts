#! /usr/bin/env node

import inquirer from "inquirer"
import chalk from "chalk"

console.log("=".repeat(100))
console.log(chalk.bold.bgMagentaBright("\t Welcome-to-code-with-tooba--oop--project\t" ))
console.log("=".repeat(100))

class Student{
    name:string
    constructor(n:string){
        this.name=n
    }
}
class Person{
    students:Student[]=[]
    addStudent(obj:Student){
        this.students.push(obj)
    }
}
     let persons = new Person()
     let programStart=async(persons:Person)=>{
 do{
      let ans=await inquirer.prompt([
    {
        name:"select",
        type:"list",
        message:"By whom you want to intearct with?",
        choices:["staff","student","exit"]
    }
      ])
 if(ans.select==="staff"){
   console.log("Hello! You are free to ask any question here")
   }
   else if(ans.select==="student"){
   let ans =await inquirer.prompt([
    {
        name:"student",
        type:"input",
        message:"Which student you wish to engaged with? "
    }
   ])
   let student=persons.students.find(
    val=> val.name==ans.student)

    if(!student){
      let name=new Student(ans.student)
      persons.addStudent(name)
      console.log(`Hello! I am ${name.name}.Nice to meet you`)
      console.log("\n New students added")
      console.log("\t Current student List:\n\t")
      console.log(persons.students)
    }
    else{
        console.log(`Hello! I am ${student.name}.Nice to see you again`)
        console.log("\n\t Existing student list\n\t")
        console.log(persons.students)
    }

  
    }
   else if(ans.select==="exit"){
    console.log("Exiting....")
    process.exit()
   }
 }
 while(true)
}

programStart(persons)