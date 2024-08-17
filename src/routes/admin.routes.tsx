import AcademicDepartment from "../pages/admin/AcademicSemesterManagement/AcademicDepartment";
import AcademicFaculty from "../pages/admin/AcademicSemesterManagement/AcademicFaculty";
import AcademicSemesters from "../pages/admin/AcademicSemesterManagement/AcademicSemesters";
import CreateAcademicDepartment from "../pages/admin/AcademicSemesterManagement/CreateAcademicDepartment";
import CreateAcademicFaculty from "../pages/admin/AcademicSemesterManagement/CreateAcademicFaculty";
import CreateAcademicSemester from "../pages/admin/AcademicSemesterManagement/CreateAcademicSemester";
import AdminDashboard from "../pages/admin/AdminDashboard";
import Courses from "../pages/admin/CourseManagement/Courses";
import CreateCourse from "../pages/admin/CourseManagement/CreateCourse";
import OfferCourse from "../pages/admin/CourseManagement/OfferCourse";
import RegisteredSemester from "../pages/admin/CourseManagement/RegisteredSemester";
import SemesterRegistration from "../pages/admin/CourseManagement/SemesterRegistration";
import CreateAdmin from "../pages/admin/UserManagement/CreateAdmin";
import CreateFaculty from "../pages/admin/UserManagement/CreateFaculty";
import CreateStudent from "../pages/admin/UserManagement/CreateStudent";
import StudentData from "../pages/admin/UserManagement/StudentInfo/StudentData";
import StudentDetails from "../pages/admin/UserManagement/StudentInfo/StudentDetails";
import OfferedCourse from "../pages/faculty/OfferedCourse";

export const adminPaths = [
  {
    name: "Admin Dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
  },

  {
    name: "User Management",
    children: [
      {
        name: "Create Admin",
        path: "create-admin",
        element: <CreateAdmin />,
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: <CreateFaculty />,
      },
      {
        name: "Create Student",
        path: "create-student",
        element: <CreateStudent />,
      },

      {
        name: "Student Data",
        path: "students",
        element: <StudentData />,
      },
      {
        path: "students/:studentId",
        element: <StudentDetails />,
      },
    ],
  },
  {
    name: "Academic Management",
    children: [
      {
        name: "Create A.Semester",
        path: "create-academic-semesters",
        element: <CreateAcademicSemester />,
      },
      {
        name: "Academic Semester",
        path: "academic-semesters",
        element: <AcademicSemesters />,
      },
      {
        name: "Create A.Department",
        path: "create-academic-department",
        element: <CreateAcademicDepartment />,
      },
      {
        name: "Academic Department",
        path: "academic-department",
        element: <AcademicDepartment />,
      },
      {
        name: "Create A.Faculty",
        path: "create-academic-faculty",
        element: <CreateAcademicFaculty />,
      },
      {
        name: "Academic Faculty",
        path: "academic-faculty",
        element: <AcademicFaculty />,
      },
    ],
  },
  {
    name: "Course Management",
    children: [
      {
        name: "Semester Registration",
        path: "semester-registration",
        element: <SemesterRegistration />,
      },
      {
        name: "Registered Semesters",
        path: "registered-semesters",
        element: <RegisteredSemester />,
      },
      {
        name: "Create Course",
        path: "create-course",
        element: <CreateCourse />,
      },
      {
        name: "Courses",
        path: "courses",
        element: <Courses />,
      },
      {
        name: "Offer Course",
        path: "offer-course",
        element: <OfferCourse />,
      },
      {
        name: "Offered Courses",
        path: "offered-courses",
        element: <OfferedCourse />,
      },
    ],
  },
];

//for route
// export const adminRoutes = adminPaths.reduce((acc: TRoute[], item) => {
//   if (item.path && item.element) {
//     acc.push({
//       path: item.path,
//       element: item.element,
//     });
//   }
//   if (item.children) {
//     item.children.forEach((child) => {
//       acc.push({
//         path: child.path,
//         element: child.element,
//       });
//     });
//   }
//   return acc;
// }, []);

//for route sidebarItem

// export const adminSidebarItems = adminPaths.reduce(
//   (acc: TSidebarItem[], item) => {
//     if (item.path && item.name) {
//       acc.push({
//         key: item.path,
//         label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>,
//       });
//     }
//     if (item.children) {
//       acc.push({
//         key: item.name,
//         label: item.name,
//         children: item.children.map((child) => ({
//           key: child.name,
//           label: <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>,
//         })),
//       });
//     }
//     return acc;
//   },
//   []
// );

//this is hardcode way

// export const adminPaths = [
//   {
//     index: true,
//     element: <AdminDashboard />,
//   },
//   {
//     path: "dashboard",
//     element: <AdminDashboard />,
//   },
//   {
//     path: "create-admin",
//     element: <CreateAdmin />,
//   },
//   {
//     path: "create-faculty",
//     element: <CreateFaculty />,
//   },
//   {
//     path: "create-student",
//     element: <CreateStudent />,
//   },
// ];
