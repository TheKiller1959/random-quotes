import img1 from '../assets/icons/shuffle.svg';
import img2 from '../assets/icons/twitter-alt.svg';

const Button = ({ handle, quote, author }) => {

  return (
    <div className="d-flex jc-space-between">
      <div>
        <button className={'btn'} onClick={handle} title='New Quote'><input className="img" type="image" src={img1} alt="" /></button>
      </div>
      <div>
        <a href={"https://twitter.com/intent/tweet?text=%22" + quote + "%22%0A%0A" + author + "%0A%0A&url=https%3A%2F%2Frandomquotes-thekiller1959.netlify.app"} target='_blank' rel='noopener noreferrer'><button className={'btn'} title='Share in Twitter'><input className="img" type="image" src={img2} alt="" /></button></a>
      </div>
    </div>
  )
}

export default Button;