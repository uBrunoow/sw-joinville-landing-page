import SectionTitle from '../Common/SectionTitle'
import SingleFeature from './SingleFeature'
import featuresData from './featuresData'

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Principais recursos"
            paragraph="Explore ferramentas inovadoras como quizzes interativos, desafios colaborativos e recompensas personalizadas que tornam o aprendizado mais dinâmico, engajador e eficaz, ajudando a reduzir a evasão no ensino superior de tecnologia EAD."
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Features
