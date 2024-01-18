import React from 'react';
import { useParams, BrowserRouter, Routes, Route} from 'react-router-dom';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import HelpPage from '../components/HelpPage';
import EditExpensePage from '../components/EditExpensePage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import history from '../history';
import 'react-dates/lib/css/_datepicker.css';
// import '../firebase/firebase';

function ProfilePage() {
  // Get the userId param from the URL.
  let { id } = useParams();
  // ...
}

const AppRouter = () => (
  <BrowserRouter history={history}>
    <div> 
      <Header />
      <Routes path='/404'>
          <Route path="/" element={<ExpenseDashboardPage />} />
          <Route path="/create" element={<AddExpensePage />} />
          <Route path='/help' element={<HelpPage />}/>
          <Route path='/edit/:id' element={<EditExpensePage />}/>
          <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  </BrowserRouter>
)

export {AppRouter as default};

