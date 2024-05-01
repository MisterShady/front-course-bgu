import React from 'react';
import './App.css';
import Navbar from './parts/Nav';
import MovieList from './parts/MovieList';
import BookingForm from './parts/BookingForm';
import Footer from './parts/Footer';

const App: React.FC = () => {
  return (
      <div className="App">
        <Navbar />
        <main>
          <MovieList />
          <BookingForm />
        </main>
        <Footer />
      </div>
  );
};

export default App;
