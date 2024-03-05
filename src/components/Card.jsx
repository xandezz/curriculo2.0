import './Card.css';

const Card = ({ nome, backgroundURL, url, alt }) => {


  return (
    <div className="container-card">
      <div className='card'>
        <a
          href={url}
          target='_blank'
        >
          <img
            src={backgroundURL} className='conteudo-card'
            alt={alt}
          />
        </a>

        <h2 className='texto-card'>
          {nome}
        </h2>
      </div>
    </div>
  );
};

export default Card;
