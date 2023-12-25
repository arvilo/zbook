import AdminAboutStudent from "./Components/AdminAboutStudent.jsx";
import AdminHome from "./Components/AdminHome.jsx";
import CreateFaculity from "./Components/CreateFaculity.jsx";
import CreateDepartment from "./Components/CreateDepartment.jsx";
import LoginPage from "./Components/LoginPage.jsx";
import { Route, Routes } from "react-router-dom";
import CreateSpecialty from "./Components/CreateSpecialty.jsx";
import CreateGroup from "./Components/CreateGroup.jsx";
import AdminFacultyPage from "./Components/AdminFacultyPage.jsx";
import GroupPage from "./Components/GroupPage.jsx";
import { useSelector } from "react-redux";
import HeadOfDepartmentHome from "./Components/HeadOfDepartmentHome.jsx";
import NotFound from "./Components/NotFound.jsx"; 
import UserHome from "./Components/UserHome.jsx";



function App() {

  const currentGroupId = useSelector(state => state.university.currentGroupId)

  return (
    <div className="App">
      <Routes>
        <Route path="zbook/login" element={<LoginPage/>} />
        <Route path="zbook/admin/home" element={<AdminHome/>} />
        <Route path="zbook/head/of/department/home" element={<UserHome/>} />
        <Route path="zbook/dean/home" element={<UserHome/>} />
        <Route path="zbook/tutor/home" element={<UserHome/>} />
        <Route path="zbook/teacher/home" element={<UserHome/>} />
        <Route path="zbook/student/home" element={<UserHome/>} />
        <Route path="zbook/about/student" element={<AdminAboutStudent/>} />
        <Route path="zbook/create/faculity" element={<CreateFaculity/>} />
        <Route path="zbook/create/department" element={<CreateDepartment/>} />
        <Route path="zbook/create/specialty" element={<CreateSpecialty/>} />
        <Route path="zbook/create/group" element={<CreateGroup/>} />
        <Route path="zbook/admin/faculty" element={<AdminFacultyPage/>} />
        <Route path="zbook/group" element={<GroupPage id={currentGroupId} />} />
        <Route path="zbook/admin/department" element={<HeadOfDepartmentHome />} />
        <Route path="*" element={<NotFound/>} />


      </Routes>
    </div>
  );
}

export default App;
