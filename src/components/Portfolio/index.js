import TeamProfile from '../../assets/images/Team-Profile-Generator.png';
import WeatherDashboard from '../../assets/images/weather-dashboard-search-results.png';

export default function Portfolio() {
    return(
        <div id="portfolio">
            <h2>My Projects:</h2>
            <ul>
                <li>
                    <img src={TeamProfile} style={{ width: "50%" }} alt="" />
                </li>
                <li>
                    <img src={WeatherDashboard} style={{ width: "50%" }} alt="" />
                </li>
            </ul>
        </div>
    );
}