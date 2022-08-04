// import Name from '../Name'
// import { useState } from 'react';
import Navigation from '../Navigation';

export default function Header(props) {
// const sections = ["About Me", "Portfolio", "Contact", "Resumé"];
// const [currentSection, setCurrentSection] = useState(sections[0]);

    const {
        sections = [],
        setCurrentSection,
        currentSection
    } = props;

    return (
        <header>
            <h1><a href="/">Jonathan A. Price</a></h1>
            <Navigation
                sections={sections}
                setCurrentSection={setCurrentSection}
                currentSection={currentSection}
            ></Navigation>
        </header>
    );
}