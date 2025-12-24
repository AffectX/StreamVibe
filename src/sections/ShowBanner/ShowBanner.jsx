import './ShowBanner.scss'
import classNames from 'classnames'
import MovieBannerCard from "@/components/MovieBannerCard";

const ShowBanner = (props) => {
  const {
    className,
  } = props

  const titleId = 'show-banner-title'

  return (
    <section
      className={classNames(className, 'show-banner container')}
      aria-labelledby={titleId}
    >
      <MovieBannerCard
        title="Stranger Things"
        titleId={titleId}
        titleTag="h1"
        description="When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl."
        imgSrc="/src/assets/images/movie-banner/3.jpg"
        isSmallPaddingY
      />
    </section>
  )
}

export default ShowBanner