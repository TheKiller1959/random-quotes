import img1 from './shuffle.svg';
import img2 from './twitter-alt.svg';

const Button = ({handle}) => {

  return(
    <div className="d-flex jc-space-between">
      <div>
        <button className={'btn'} onClick={handle} title='New Quote'><input className="img" type="image" src={img1} alt=""/></button>
      </div>
      <div>
        <button className={'btn'} title='Share in Twitter'><a href="https://twitter.com/intent/tweet?text=Frases%20célebres%20para%20compartir%20en%20Twitter&url=https%3A%2F%2Frandomquotes-thekiller1959.netlify.app&hashtags=frases,autor,diaadia" target='_blank' rel='noopener noreferrer'><input className="img" type="image" src={img2} alt="" /></a></button>
      </div>
    </div>
  )
}

export default Button;