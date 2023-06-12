import { Routes, Route } from "react-router-dom";
import Home from '../views/HomeViews';
import PostIndex from '../views/Posts/Index.jsx';
import PostCreate from '../views/Posts/Create.jsx';
import PostEdit from '../views/Posts/Edit.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactForm from '../views/ContactView';
import RegisterLogin from "../views/RegisterloginViews";
import About from "../views/AboutUsViews";


function RoutesIndex() {
    return (
        <Routes>

            {/* route "/" */}
            <Route path="/" element={<Home />} />

            {/* route "/posts" */}
            <Route path="/posts" element={<PostIndex />} />

            {/* route "/posts/create" */}
            <Route path="/posts/create" element={<PostCreate />} />

            {/* route "/posts/edit/:id" */}
            <Route path="/posts/edit/:id" element={<PostEdit />} />

            {/* route "/contact" */}
            <Route path="/contact" element={<ContactForm />} />

            {/* route "/contact" */}
            <Route path="/logout" element={<RegisterLogin />} />

            {/* route "/contact" */}
            <Route path="/about" element={<About />} />

        </Routes>
    )
}

export default RoutesIndex