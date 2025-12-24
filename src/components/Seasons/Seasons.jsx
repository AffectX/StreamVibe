import './Seasons.scss'
import classNames from 'classnames'
import AccordionGroup from "@/components/AccordionGroup";
import seasonsItems from "@/components/Seasons/seasonsItems";
import Accordion from "@/components/Accordion";
import EpisodeCard from "@/components/EpisodeCard";

const Seasons = (props) => {
  const {
    className,
  } = props

  return (
    <AccordionGroup
      className={classNames(className, 'seasons')}
      mode="dark"
      isOrderedList={false}
    >
      {seasonsItems.map(({title,subtitle,episodes},index) => (
        <Accordion
          title={title}
          titleLevelClassName = 'h4'
          subtitle={subtitle}
          id={`season-${index}`}
          name="seasons"
          isOpen={index === 0}
          key={index}
          isArrowButton
        >
          <ul className="seasons__list">
            {episodes.map((episode,index)=> (
              <li className="seasons__item" key={index}>
                <EpisodeCard {...episode} />
              </li>
            ))}
          </ul>
        </Accordion>
      ))}
    </AccordionGroup>
  )
}

export default Seasons