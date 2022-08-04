export default function Navigation(props) {
    const {
        sections = [],
        setCurrentSection,
        currentSection
    } = props;
    
    return(
        <nav>
            <ul>
                {sections.map((section) => (
                    <li className={`${currentSection === section && 'navActive'}`} key={section}>
                        <span onClick={() => {
                            setCurrentSection(section)
                        }}>
                            {section}
                        </span>
                    </li>
                ))}
            </ul>
        </nav>
    );
}