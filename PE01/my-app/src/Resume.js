

export default function Resume() {
    return (
        <div>
            <div>
                <h1>Tyler Adams</h1>
                <h3>San Diego, CA 92139 | (949) 525-4998 | tyleradams918@hotmail.com</h3>
            </div>

            <div id="section">
                <h1>Education</h1>
                <h3>Master of Science in Computer Science</h3>
                <p>City University of Seattle | July 2025</p>
    
                <h3>Certificate: Cybersecurity Bootcamp</h3>
                <p>University of San Diego | 2021</p>

                <h3>Certificate: Data Science and Visualization Bootcamp</h3>
                <p>University of San Diego | 2020</p>

                <h3>Bachelors of Arts: Human Development</h3>
                <p>California State University, San Marcos | 2017</p>
            </div>

            <div id="section">
                <h1>Skills</h1>
                <p>Programming languages: Python, Javascript, AutoHotkey, Visual Basic, C#, Bash</p>
                <p>Frameworks and libraries: Pandas, Numpy, Scikit-learn, Tensorflow, Scrapy, Flask</p>
            </div>
            
            <div id="section">
                <h1>Work Experience</h1>
                
                <h3>Automation Engineer</h3>
                <h4>General Atomics Aeronautical Systems, Inc | Jan 2023 - Present</h4>
                <p>Utilized common automation protocols such as ModBus to create real time data feeds for the manufacturing floor.</p>
                <p>Configured ubuntu to collect sensor data and forward data to an enterprise data historian server (OSIsoft, PIVision)</p>

                <h3>Software Support Speciallist</h3>
                <h4>General Atomics Aeronautical Systems, Inc | Jan 2022 - Jan 2023</h4>
                <p>Supported automated GUI testing activities for multiple high profile projects in parallel.</p>
                <p>Coordinated with engineers, developed a system to track test development status for thousands of service tests.</p>

                <h3>Department Specialist III</h3>
                <h4>General Atomics | Feb, 2018 - Jan, 2022</h4>
                <p>Inventory Specialist responsible for part and material needs for over 80 buildings and 50+ technicians.</p>
                <p>Scripted a GUI Order Management program that manages and tracks all material orders.</p>
            </div>

            <div>
                <h1>Projects</h1>
                
                <h3>Machine Learning Wine Predictor</h3>
                <p>Machine Learning model will predict wine type and quality when provided the chemical properties.</p>
                <p>Developed web front-end that executes Python code using Flask, deployed to Heroku.</p>
                <p>Source code: <a href="http://bit.ly/38SfGgx">http://bit.ly/38SfGgx</a></p>
    
                <h3>Elastic Stack Project</h3>
                <p>Network infrastructure created in Microsoft Azure using docker, ansible, load balancers and a jump-box VM.</p>
                <p>Real-time logs and metrics are sent to the Kibana server for monitoring events in real time.</p>
                <p>Source code: <a href="https://bit.ly/3lMoVqH">https://bit.ly/3lMoVqH</a></p>

                <h3>Service Test Development Tracker Spreadsheet</h3>
                <p>Excel (VBA) attached to a Python webserver. SQlite database, Automatic data retrieval from GIT API / SMB file share</p>
                <p>Source code: <a href="http://bit.ly/415xXlW">http://bit.ly/415xXlW</a></p>



            </div>
        </div>
    );
}