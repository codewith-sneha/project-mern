import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Add from './admin-pages/Add'
import About from './pages/About';
import Contact from './pages/Contact';
import Curriculum from './pages/Curriculum';
import Admission from './pages/Admission';
import Notices from './pages/Notices';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './pages/Login';
import View_activity from './admin-pages/View_activity';
import Footer from './pages/Footer';
// import Nav1 from './pages/Nav1';
import Admin_dashboard from "./admin-pages/Admin_dashboard";
import Update_activity from "./admin-pages/Update_activity";
import Gallery from "./admin-pages/Gallery";
import Parent_review from "./admin-pages/Parent_review";
import View_notices from "./admin-pages/View_notices";
import Student from "./admin-pages/Student";
import Edit_review from "./admin-pages/Edit_review";
import Add_review from "./admin-pages/Add_review";
import Add_Gallary from "./admin-pages/Add_Gallary";
import Update_gallery from "./admin-pages/Update_gallery";
import Error_page from "./pages/Error_page";
import Add_student from "./admin-pages/Add_student";
import Update_student from "./admin-pages/Update_student";
import View_galleryImage from "./pages/View_galleryImage";
import Navbar from "./pages/Navbar";
import Add_notice from "./admin-pages/Add_notice";
import Update_notice from "./admin-pages/Update_notice";
import Student_dashboard from "./admin-pages/Student_dashboard";
import Privacy_policy from "./pages/Privacy_policy";
import TermsAndCondotion from "./pages/TermsAndCondotion";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/*' element={<Error_page/>}></Route>
          <Route
            path="/Student_dashboard"
            element={<Student_dashboard />}
          ></Route>
          <Route
            path="/Update_student/:id"
            element={<Update_student />}
          ></Route>
          <Route path="/Update_notice/:id" element={<Update_notice />}></Route>
          <Route path="/TermsAndCondition" element={<TermsAndCondotion/>}></Route>
          <Route path="/Privacy_policy" element={<Privacy_policy/>} ></Route>
          <Route path="/Add_notice" element={<Add_notice />}></Route>
          <Route path="/Add_student" element={<Add_student />}></Route>
          <Route path="/Update_gallery" element={<Update_gallery />}></Route>
          <Route path="/Add_Gallary" element={<Add_Gallary />}></Route>
          <Route path="/Add_review" element={<Add_review />}></Route>
          <Route path="/Edit_review/:id" element={<Edit_review />}></Route>
          <Route path="/Admin_dashboard" element={<Admin_dashboard />} />
          <Route path="/View_activity" element={<View_activity />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route
            path="/View_galleryImage/:id"
            element={<View_galleryImage />}
          ></Route>
          <Route path="/Student" element={<Student />} />
          <Route path="/Parent_review" element={<Parent_review />} />
          <Route path="/View_notices" element={<View_notices />} />
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Curriculum" element={<Curriculum />} />
          <Route path="/Notices" element={<Notices />} />
          <Route path="/Admission" element={<Admission />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Add" element={<Add />}></Route>
          <Route path="/Update_activity/:id" element={<Update_activity />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
