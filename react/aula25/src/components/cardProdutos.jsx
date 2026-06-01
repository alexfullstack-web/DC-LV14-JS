import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardProduto({url, nome, descricao, preco, promocao = false}) {
  return (
    <Card style={{ width: '18rem' }} className={promocao ? "border-danger" : "border-primary"}>
      <Card.Img variant="top" src={url} alt={nome} />
      <Card.Body>
        <Card.Title>{nome}</Card.Title>
        <Card.Text>
            {descricao} - R$ {preco}
        </Card.Text>
        <Button variant="primary">Ver detalhes</Button>
      </Card.Body>
    </Card>
  );
}

export default CardProduto;