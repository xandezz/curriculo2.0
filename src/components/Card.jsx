import './Card.css';

const Card = ({ nome, backgroundURL, url }) => {


  return (
    <div className="container-card">
      <div className='card'>
        <a
          className='conteudo-card'
          style={{ backgroundImage: `url(${"'"+backgroundURL+ "'"})` }}
          href={url}
          target='_blank'
          >
            
        </a>
        <h2 className='texto-card'>
            {nome}
          </h2>
      </div>
    </div>
  );
};

export default Card;
