<script>
    import Position from "./Position.svelte";
    import Section from "./Section.svelte";
    import Profile, { metadata as profile}  from '../../data/resume/profile.md';

    function parsePositions(positions) {
        const parsed = Object.entries(positions).map(([_, md]) => {
            const { title, org, tenure, stamp } = md.metadata;
            const content = md.default;

            return{
                title: title,
                org: org,
                tenure: tenure,
                content: content,
                stamp: stamp
            }
        });
        
        parsed.sort( (a, b) => b.stamp - a.stamp );

        return parsed;
    }
    
    const employment = parsePositions(import.meta.glob(
        "../../data/resume/employment/*.md", 
        { eager: true }
    ));

    const education = parsePositions(import.meta.glob(
        "../../data/resume/education/*.md", 
        { eager: true }
    ));
</script>

<div class="resume">
    <header>
        <h1><a href="/">kinto behr</a></h1>
        <h2>data scientist / data engineer</h2>
        <a href="assets/pdf/resume.pdf" target="_blank" rel="noopener noreferrer">
            pdf
        </a>
    </header>

    <Section title="Personal Profile">
        <Profile style="text-align: justify;"/>
    </Section>

    <Section title="Employment History">
        {#each employment as pos}
            <Position
                title={pos.title}
                org={pos.org}
                tenure={pos.tenure}
            >
            <svelte:component this={pos.content} />
            </Position>
        {/each}
    </Section>

    <Section title="Education">
        {#each education as pos}
            <Position
                title={pos.title}
                org={pos.org}
                tenure={pos.tenure}
            >
            <svelte:component this={pos.content} />
            </Position>
        {/each}
    </Section>
    
    <Section title="Selected Honours">
        <table>
            <tbody>
                {#each profile.honours as honour}
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
            {#each profile.skills as skill}
                <li>{skill}</li>
            {/each}
        </ul>
    </Section>

    <Section title="Software">
        <p>I have developed or made large contributions to a number of R packages including:</p>
        <ul>
            {#each profile.software as soft}
                <li><a href="{soft.link}">{soft.title}</a>: {soft.desc}</li>
            {/each}
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