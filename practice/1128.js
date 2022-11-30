//[easier] - Given this array of students (objects), write a function that takes a studentId and grade - and update’s that student’s grade.

let studentArray = [
    {
        name: "Tom",
        studentId: 1,
        grade: undefined
    },
    {
        name: "Sasha",
        studentId: 2,
        grade: undefined
    },
    {
        name: "Daniel",
        studentId: 3,
        grade: undefined
    },
    {
        name: "Tiger",
        studentId: 4,
        grade: undefined
    }
]


const changeGrade = (id, grade) => {
  studentArray.forEach(el => {if (el.studentId == id) 
    el.grade = grade;
  }) 
}


changeGrade(2, 100)
console.log(studentArray[1].grade)


//[ harder] - Given this array of students (objects) write a function that takes an array of new assignment submissions (objects) and for each student copies the relevant assignments and pushes them to an array on their student objects called grades (while also deleting the studentId property on the object).
let students = [
    {
        name: "Tom",
        studentId: 1,
        grades: [
            {
            assignmentId: 1,
            grade: 88
            },
            {
            assignmentId: 2,
            grade: 100
            }
        ]
    },
    {
        name: "Sasha",
        studentId: 2,
        grades: [
            {
            assignmentId: 1,
            grade: 90
            },
            {
            assignmentId: 2,
            grade: 92
            }
        ]
    },
    {
        name: "Daniel",
        studentId: 3,
        grades: [
            {
            assignmentId: 1,
            grade: null
            },
            {
            assignmentId: 2,
            grade: 70
            }
        ]
    },
    {
        name: "Tiger",
        studentId: 4,
        grades: [
            {
            assignmentId: 1,
            grade: 100
            },
            {
            assignmentId: 2,
            grade: 100
            }
        ]
    },
]


let newAssignments = [
    {
        assignmentId: 3,
        studentId: 1,
        grade: 60
    },
    {
        assignmentId: 3,
        studentId: 2,
        grade: 86
    },
    {
        assignmentId: 3,
        studentId: 2,
        grade: 99
    },
    {
        assignmentId: 3,
        studentId: 4,
        grade: null
    },
    {
        assignmentId: 4,
        studentId: 1,
        grade: 41
    },
    {
        assignmentId: 4,
        studentId: 2,
        grade: 42
    },
    {
        assignmentId: 4,
        studentId: 2,
        grade: 43
    },
    {
        assignmentId: 4,
        studentId: 4,
        grade: 44
    }
]


const addGrade = (arr) => {
  for (i =0; i < arr.length; i++) {
    for (j = 0; j < students.length; j++) {
      if (arr[i].studentId == students[j].studentId) {
      delete arr[i].studentId;
        students[j].grades.push(arr[i])
      }
    }
  }
}

addGrade(newAssignments)
console.log(students[0])

