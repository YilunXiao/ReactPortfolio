import React, {useState} from 'react';
// nav and pages, About Me, Portfolio, Contact, and Resume
import NavTabs from './NavTabs';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';


const Container = () => {
    const headerText = 'Yilun Xiao';
    // State variable to decide page to be rendered, default to home page
    const [currentPage, setCurrentPage] = useState('AboutMe');

    // This method is checking to see what the value of `currentPage` is
    // Depending on the value of currentPage, we return the corresponding component to render.
    const renderPage = () => {
        if (currentPage === 'AboutMe') {
        return <AboutMe />;
        }
        if (currentPage === 'Portfolio') {
        return <Portfolio />;
        }
        if (currentPage === 'Contact') {
        return <Contact />;
        }
        return <Resume />;
    };

    return (
        <main>
            <header>
                <h1>
                    {headerText}
                </h1>
                {/* We are passing the currentPage from state and the function to update it */}
                <NavTabs currentPage={currentPage} setCurrentPage={setCurrentPage} />
                {/* Here we are calling the renderPage method which will return a component  */}
            </header>
            
            <body>
                {renderPage()}
            </body>
        </main>
    );
}

export default Container;