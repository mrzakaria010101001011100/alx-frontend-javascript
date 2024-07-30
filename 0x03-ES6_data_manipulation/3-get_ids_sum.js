export default function getStudentIdsSum(students) {
  return students.reduce((Redu, student) => Redu + student.id, 0);
}
