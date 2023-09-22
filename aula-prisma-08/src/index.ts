import prisma from "./database";

// (async () => {

//   //   SELECT COUNT(id), "class" FROM students s
//   //    GROUP BY "class"
//   //    ORDER BY COUNT(id) desc;

//   const students = await prisma.student.groupBy({
//     by: ["class"],
//     _count: { id: true },
//     orderBy: { _count: { class: "desc" } }
//   })
//   console.log(students);
// })()

(async () => {

  // SELECT COUNT(*), s."class" FROM students s
  // WHERE s."jobId" is null
  // GROUP BY s."class"
  // ORDER BY COUNT(*) desc

  const students = await prisma.student.groupBy({
    by: ["class"],
    where: { jobId: null },
    _count: { id: true },
    orderBy: { _count: { class: "desc" } }
  })
  console.log(students);
})()