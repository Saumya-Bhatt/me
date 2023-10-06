import Card from "../reuseables/Card"

export default function Projects(props) {

    let data = props.projectData.map((item) => {
        return {
            "cardName" : item.name,
            "cardLink" : item.link,
            "metadataLeft" : item.tech,
            "metadataRight" : null,
            "cardSummary" : item.description
        }
    })

    return (
      <section
        id="Projects" 
        className="projects"
      >
        <Card
            title="Projects"
            requireHeaders={true}
            resourceList={data}
            asList={false}
            isToggleRequired={false}
        />
      </section>
    )
  }