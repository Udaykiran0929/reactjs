import React from 'react';
import Feeds from './Feeds';
import post from './post';
import {BrowserRouter as Router, Routes, Route, Link} from "react-route-dom";
export default function App17() {
 return (
    <div>
        <Router>
            <Link to="/">Feeds</Link> | <Link to="/post">Post</Link>
            <Routes>
                <Route path='/' index element={<Feeds/>}></Route>
                <Route path='/post' element={<post/>}></Route>
            </Routes>
        </Router>
    </div>
  );
}
