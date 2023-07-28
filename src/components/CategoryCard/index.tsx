
import './styles.scss'

type Props = {
  img: string,
  title: string,
}

export const CategoryCard = ({img, title}: Props) => {
  return (
    <div className="category__card">
      <img 
        src={img} 
        alt="Artificial Plants Image" 
        className="cartegory__image"
      />
      <p className="category__title">
        {title}
      </p>
      <a 
        href="#" 
        className="category__button"
      >
        See more
      </a>
    </div>
  )
}
