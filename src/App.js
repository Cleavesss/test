import React from "react";
import { Routes, Route, Navigate} from 'react-router-dom';
import PersonPage from "components/persons/PersonPage.jsx";
import Login from "components/loginlogout/Login.jsx";
import Logout from "components/loginlogout/Logout.jsx";
import Header from "components/Header.jsx";
import Upload from "components/upload/Upload.jsx"
import NotFound404 from "components/notfound/NotFound404.jsx";
import Footer from "components/Footer.jsx";
import FilesPage from "components/files/FilesPage.jsx";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUserAction } from "store/reducers/currentUserReducer";



function App() {

  let currentUser = useSelector(state => state.current.currentUser);
  let variantes = useSelector(state => state.login.variantes)
  let dispatch = useDispatch();
  
  
  function auth(email, password){
    let userWithEmail = variantes.find((obj) => email === obj.email)
    let passwordCorrect = userWithEmail.login.password === password
    return passwordCorrect;
  }

  if(currentUser !== '' && !auth(currentUser.email, currentUser.login.password)){
    dispatch(setCurrentUserAction(''))
    return <Navigate to='/login' replace/>;
  }
  return (
    <>
      <Header />
      <main className="newContainer  mt-7">
        <Routes>
          <Route path="/login" element={<Login />}/>
          <Route path="/logout" element={<Logout />}/>
          <Route path="/persons" element={<PersonPage />}/>
          <Route path="/files" element={<FilesPage />}/>
          <Route path="/upload" element={<Upload />}/>
          <Route path="*" element={<NotFound404 />}/>
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
