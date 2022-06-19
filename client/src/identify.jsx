import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Container, Row, Col } from "react-bootstrap";
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Placeholder from 'react-bootstrap/Placeholder';
import "react-placeholder/lib/reactPlaceholder.css";
import './index.css';
import AOS from 'aos';
import "aos/dist/aos.css";

class identify extends Component {
  constructor(props) {
    super(props);

    this.state = {
      response: '', plantSpecies: [],
      loading: false, specie: '', family: '', genus: '', image1: '', image2: '', image3: '', image4: '', image5: '', scientificName: '', commonNames: ' ', image: '',
      specie2: '', family2: '', genus2: '', scientificName2: '', commonNames2: '',
      specie3: '', family3: '', genus3: '', scientificName3: '', commonNames3: '', gbifId: '', gbifId2: '', gbifId3: ''

    }
  }

  callApi = async () => {
    const response = await fetch('/ident');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  componentDidMount() {
    AOS.init({
      duration: 900,
    });
    this.callApi()
      .then(res => {
        console.log(res)
        this.setState({
          plantSpecies: res.express.results,
          specie: res.express.results[0].species.scientificNameWithoutAuthor,
          family: res.express.results[0].species.family.scientificName,
          genus: res.express.results[0].species.genus.scientificName,
          image1: res.express.results[0].images[0].url.o,
          image2: res.express.results[0].images[1].url.o,
          image3: res.express.results[0].images[2].url.o,
          image4: res.express.results[0].images[3].url.o,
          image5: res.express.results[0].images[4].url.o,
          image6: res.express.results[0].images[5].url.o,
          gbifId: res.express.results[0].gbif.id,
          gbifId2: res.express.results[1].gbif.id,
          gbifId3: res.express.results[2].gbif.id,
          scientificName: res.express.results[0].species.scientificNameAuthorship,
          commonNames: res.express.results[0].species.commonNames[0],

          specie2: res.express.results[1].species.scientificNameWithoutAuthor,
          family2: res.express.results[1].species.family.scientificName,
          genus2: res.express.results[1].species.genus.scientificName,
          scientificName2: res.express.results[1].species.scientificNameAuthorship,
          commonNames2: res.express.results[1].species.commonNames[0],

          specie3: res.express.results[2].species.scientificNameWithoutAuthor,
          family3: res.express.results[2].species.family.scientificName,
          genus3: res.express.results[2].species.genus.scientificName,
          scientificName3: res.express.results[2].species.scientificNameAuthorship,
          commonNames3: res.express.results[2].species.commonNames[0]
        });
        this.setState({ loading: true })
      })
      .catch(err => console.log(err));
  }


  render() {
    // const { plantSpecies } = this.state;
    return (
      <div className="identify">
        <div className="mb-4">
          <h1 className="text-center"> Species Details  </h1>
        </div>
        {/* {plantSpecies.map(item => (
          
             <p>{item.species.scientificNameWithoutAuthor}</p>
           
          ))} */}
        {this.state.loading ? <Container>
          <Row className="justify-content-center">
            <Col xs={3} data-aos="fade-right">
              <Card style={{ width: '18rem', borderRadius: "10px 10px 10px 10px" }}>
                <Card.Img className="cbg" variant="top" src={this.state.image1} style={{ width: "269px", height: "140px", borderRadius: "10px 10px 10px 10px" }} />
                <Card.Body>
                  <Card.Title>Species</Card.Title>
                  <Card.Text>
                    {this.state.specie}
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>Scientific Name : {this.state.scientificName}</ListGroupItem>
                  <ListGroupItem>Family : {this.state.family}</ListGroupItem>
                  <ListGroupItem>Genus : {this.state.genus}</ListGroupItem>
                  <ListGroupItem>Commom Names: {this.state.commonNames}</ListGroupItem>
                </ListGroup>
                <Card.Body>
                  <Card.Link href="#"><a href={"https://www.gbif.org/species/" + this.state.gbifId}>Click Here </a></Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={3} className="ml-3" data-aos="zoom-in">
              <Card style={{ width: '18rem', borderRadius: "10px 10px 10px 10px" }}>
                <Card.Img className="cbg" variant="top" src={this.state.image2} style={{ width: "270px", height: "140px", borderRadius: "10px 10px 10px 10px" }} />
                <Card.Body>
                  <Card.Title>Species</Card.Title>
                  <Card.Text>
                    {this.state.specie2}
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>Scientific Name : {this.state.scientificName2}</ListGroupItem>
                  <ListGroupItem>Family : {this.state.family2}</ListGroupItem>
                  <ListGroupItem>Genus : {this.state.genus2}</ListGroupItem>
                  <ListGroupItem>Commom Names: {this.state.commonNames2}</ListGroupItem>
                </ListGroup>
                <Card.Body>
                  <Card.Link href="#"><a href={"https://www.gbif.org/species/" + this.state.gbifId2}>Click Here </a></Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={3} data-aos="fade-left">
              <Card style={{ width: '18rem', borderRadius: "10px 10px 10px 10px" }}>
                <Card.Img className="cbg" variant="top" src={this.state.image3} style={{ width: "270px", height: "140px", borderRadius: "10px 10px 10px 10px" }} />
                <Card.Body>
                  <Card.Title>Species</Card.Title>
                  <Card.Text>
                    {this.state.specie3}
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>Scientific Name : {this.state.scientificName3}</ListGroupItem>
                  <ListGroupItem>Family : {this.state.family3}</ListGroupItem>
                  <ListGroupItem>Genus : {this.state.genus3}</ListGroupItem>
                  <ListGroupItem>Commom Names: {this.state.commonNames3}</ListGroupItem>
                </ListGroup>
                <Card.Body>
                  <Card.Link href="#"><a href={"https://www.gbif.org/species/" + this.state.gbifId3}>Click Here </a></Card.Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container> : <Container>
          <Row className="justify-content-center">
            <Col xs={3} data-aos="fade-right">
              <Card style={{ width: '18rem' }}>
                <Placeholder xs={12} />
                <Placeholder xs={12} />
                <Placeholder xs={12} />
                <Placeholder xs={12} />
                <Placeholder xs={12} />
                <Placeholder xs={12} />
                <Placeholder xs={12} />
                <Placeholder xs={12} />
                <Placeholder xs={12} />
                <Placeholder xs={12} />
                <Card.Body>
                  <Placeholder as={Card.Title} animation="glow">
                    <Placeholder xs={6} />
                  </Placeholder>
                  <Placeholder as={Card.Text} animation="glow">
                    <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                    <Placeholder xs={6} /> <Placeholder xs={8} />
                    <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                    <Placeholder xs={6} /> <Placeholder xs={8} />
                    <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                  </Placeholder>
                  <Placeholder.Button variant="primary" xs={6} />
                </Card.Body>
              </Card>
            </Col>
            <Col xs={3} className="ml-3" data-aos="zoom-in">
              <Card style={{ width: '18rem' }}>
                <Placeholder xs={12} />
                <Placeholder xs={12} />
                <Placeholder xs={12} />
                <Placeholder xs={12} />
                <Placeholder xs={12} />
                <Placeholder xs={12} />
                <Placeholder xs={12} />
                <Placeholder xs={12} />
                <Placeholder xs={12} />
                <Placeholder xs={12} />
                <Card.Body>
                  <Placeholder as={Card.Title} animation="glow">
                    <Placeholder xs={6} />
                  </Placeholder>
                  <Placeholder as={Card.Text} animation="glow">
                    <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                    <Placeholder xs={6} /> <Placeholder xs={8} />
                    <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                    <Placeholder xs={6} /> <Placeholder xs={8} />
                    <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                  </Placeholder>
                  <Placeholder.Button variant="primary" xs={6} />
                </Card.Body>
              </Card>
            </Col>
            <Col xs={3} data-aos="fade-left">
              <Card style={{ width: '18rem' }}>
                <Placeholder xs={12} />
                <Placeholder xs={12} />
                <Placeholder xs={12} />
                <Placeholder xs={12} />
                <Placeholder xs={12} />
                <Placeholder xs={12} />
                <Placeholder xs={12} />
                <Placeholder xs={12} />
                <Placeholder xs={12} />
                <Placeholder xs={12} />
                <Card.Body>
                  <Placeholder as={Card.Title} animation="glow">
                    <Placeholder xs={6} />
                  </Placeholder>
                  <Placeholder as={Card.Text} animation="glow">
                    <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                    <Placeholder xs={6} /> <Placeholder xs={8} />
                    <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                    <Placeholder xs={6} /> <Placeholder xs={8} />
                    <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                  </Placeholder>
                  <Placeholder.Button variant="primary" xs={6} />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>}



      </div>
    );
  }
}

export default identify;
