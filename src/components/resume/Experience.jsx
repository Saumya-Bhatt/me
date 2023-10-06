
import Card from "../reuseables/Card"

function Experience(props) {

    let data = props.experienceData.map((item) => {
        return {
            "cardName" : item.company,
            "cardLink" : item.link,
            "metadataLeft" : item.title,
            "metadataRight" : item.duration,
            "cardSummary" : item.summary,
            "toggleData" : item.description
        }
    })

    return (
        <section 
            id="Experience"
            className="experience"
        >
            <Card
                title="Experience"
                requireHeaders={true}
                resourceList={data}
                asList={true}
                isToggleRequired={true}
            />
      </section>
    )
}
export default Experience