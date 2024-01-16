<script>
    import Position from "./Position.svelte";
    import Section from "./Section.svelte";

    const honours = [
        {
            year: 2019,
            title: "Hastie Prize in Philosophy",
            org: "the University of Melbourne",
            link: "https://blogs.unimelb.edu.au/shaps-research/2020/07/27/celebrating-our-students-achievements/"
        },
        {
            year: 2016,
            title: "Peter J. Lloyd Prize in Theoretical Physics",
            org: "Monash University",
            link: "https://www.monash.edu/science/schools/physics/undergraduate/prizes"       
        }
    ]
</script>

<div class="resume">
    <header>
        <h1><a href="/">kinto behr</a></h1>
        <a href="assets/pdf/resume.pdf" target="_blank" rel="noopener noreferrer">
            pdf
        </a>
    </header>

    <Section title="Personal Profile">
        I am a data scientist and statistician with expertise in R and a keen interest in process
        automation, software engineering, and applied statistics. Although I am most comfortable in R, I
        have varying degrees of experience with a number of other languages from Python and SQL
        (fluent), through LaTeX, HTML/CSS, JavaScript and Rust (intermediate).
        <br />
        <br />
        Outside of work, I am an active contributor to the open source software community, having
        developed or made large contributions to a number of R packages.
    </Section>

    <Section title="Employment History">
        <Position 
            title="Statistician" 
            org="Social Research Centre"
            tenure="2022 - Present"
        >
            <p>
                I am currently shared between the data and statistical methods teams, spending half my time
                in each. This being the case, I work on a fairly wide variety of things.
                On the one hand, I am responsible for carrying out various statistical procedures (e.g.
                weighting, small area estimation, propensity modelling) and writing technical reports.
                On the other hand, I am the technical lead on a variety of software engineering projects,
                typically focussed on data modeling, processing, analysis and reporting, but often general
                application development. Some of the things I've worked on in this latter capacity are:
            </p>
            <ul>
                <li>Developing a three-tier lottery application for setting up and running prize draws.</li>
                <li>Deploying machine learning models and designing API access to them to retrieve
                    predictions</li>
                <li>Redesigning the SQL database and associated workflows that underpin the Life in
                    Australia study.</li>
            </ul>
        </Position>

        <Position
            title="Data Scientist"
            org="Social Research Centre"
            tenure="2020 - 2022"
        >
            <p>
                I was the lead data scientist on the <a href="https://www.qilt.edu.au/surveys/student-experience-survey-(ses)">SES</a>,
                which approaches hundreds of thousands of higher education students each year. In this capacity, I was responsible for
                maintaining the data infrustructure throughout the full length of the pipeline from sample collection and validation,
                through fieldwork operations and data processing, to report production.

                <br />
                <br />

                In addition, I made key contributions to the in-house R package architecture and Shiny application suite. In particular, I
            </p>
            <ul>
                <li>Authored and/or maintained the majority of in-house packages</li>
                <li>Trained other data scientists in R package development, helping them to become maintainers in their own right</li>
                <li>Developed a number of complex Shiny applications which became core to projects across the business, including one which won a company-wide competition</li>
            </ul>
        </Position>

        <Position
            title="Team Lead"
            org="Sidekicker"
            tenure="2018 - 2020"
        >
            <p>
                I was in charge of the community operations team,  which was responsible for ensuring that the application marketplace was running smoothly.
                <br />
                <br />
                Alongside managing 15+ casual staff, I
            </p>
            <ul>
                <li>Performed data analysis using SQL and Python</li>
                <li>Automated core processes to save ~100hrs of labour-time per month</li>
            </ul>
        </Position>
    </Section>

    <Section title="Education">
        <Position
            title="Master of Statistics"
            org="University of New South Wales"
            tenure="2021 - 2023"
        >
            <ul>
                <li>Awarded with Excellence</li>
                <li>Thesis title: <i>Classification with Semi-Supervised Learning Algorithms</i></li>
                <li>UNSW WAM: 92% so far; UniMelb GPA: 4.0 (WAM: 88%)</li>
            </ul>
        </Position>

        <Position
            title="Bachelor of Arts (Honours)"
            org="University of Melbourne"
            tenure="2019"
        >
            <ul>
                <li>Recieved the Hastie Prize for graduating top of my class</li>
                <li>Thesis title: <i>Epistemic Relativism: The Futility of the Argument from the Criterion</i></li>
                <li>GPA: 4.0 (WAM: 87%)</li>
            </ul>
        </Position>

        <Position
            title="Bachelor of Arts and Bachelor of Science"
            org="University of Melbourne"
            tenure="2013 - 2017"
        >
            <ul>
                <li>Received numerous academic awards including the Peter J. Lloyd prize in Theoretical Physics, 
                    the Dean's List Fellowship Award and five best in unit awards for achieving top marks across various physics courses</li>
                <li>Majors (minors): Philosophy (Japanese) and Physics (Mathematics)</li>
                <li>GPA: 3.93 (WAM: 87%)</li>
            </ul>
        </Position>
    </Section>
    
    <Section title="Selected Honours">
        <table>
            <tbody>
                {#each honours as honour}
                    <tr>
                        <td class="key">{honour.year}</td>
                        <td class="value">
                            <p><a href="{honour.link}">{honour.title}</a>, {honour.org}</p>
                        </td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </Section>

    <Section title="Skills and Abilities">
        <ul>
            <li>R, Git, SQL, Python, LaTeX, HTML/CSS, Javascript, Excel, C++</li>
            <li>Data management</li>
            <li>Modelling</li>
            <li>Automation</li>
            <li>Software development</li>
            <li>German (roughly B1) and Japanese (roughly N3)</li>
        </ul>
    </Section>

    <Section title="Software">
        <p>I have developed or made large contributions to a number of R packages including:</p>
        <ul>
            <li><a href="https://kinto-b.github.io/makepipe/">makepipe</a>: Data processing pipeline tools inspired by 'GNU Make'</li>
            <li><a href="https://socialresearchcentre.github.io/testdat/">testdat</a>: Data file validation tools inspired by software unit testing</li>
        </ul>
    </Section>

</div>


<style>
    .resume {
        max-width: 800px;
        margin: 0 auto;
    }

    header {
        width: 80%;
        margin: 0 auto;
        text-align: center;
    }

    table {
        margin: 5px 0 0 0;
        text-align: left;
        border-collapse: collapse;
        padding: 0;
        border: 0;
        table-layout: fixed;
    }

    td p {
        margin: 1px;
    }

    td.key {
        font-size: 12px;
        text-transform: uppercase;
        letter-spacing: 1px;
        color: #777;
        padding: 0 0.5rem 0 0;
        /*text-align: right;*/
        white-space: nowrap;
    }

    td.value {
        font-weight: 300;
    }
</style>