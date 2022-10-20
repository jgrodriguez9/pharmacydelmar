import { Button, Card, Col, Row } from "react-bootstrap";
import Slider from "react-slick";

export default function Section({item}){

    const settingsMenu = {
        dots: true,
        speed: 800,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="my-5">
            <Row className="my-3">
                <Col xs="12" md="10">
                    <h1 className="text-primary-dark fw-700">{item.title}</h1>
                </Col>
                {/* <Col xs="12" md="2" className="d-none d-md-block text-end">
                    <Button variant="link" className="text-danger-dark text-uppercase">ver todo</Button>
                </Col> */}
            </Row>
            <Row>
                <Col>
                    <Slider {...settingsMenu}>
                    {
                        item.items.map((it, index) => (
                            <div key={index}>
                                <Card className="m-3 shadow border-0 h-300">
                                    <Card.Body className="d-flex flex-column">
                                        {/* <h6 className="fw-400 text-primary-dark">{it.primary.title}</h6> */}
                                        <h5 className="fw-500 text-danger-dark m-auto text-center">{it.primary.subtitle}</h5>
                                        {/* <p className="text-paragraph lh-12 opacity-54">{it.primary.description.substring(0,200)}</p> */}

                                        {/* <div className="text-end  mt-auto">
                                            <Button 
                                                variant="primary" 
                                                size="sm" 
                                                className="text-uppercase px-4 fs-btn-1 fw-600 lp-1">
                                                    Ver más
                                            </Button>
                                        </div> */}
                                    </Card.Body>
                                </Card>
                            </div>
                        ))
                    }
                        
                    </Slider>
                </Col>
            </Row>
        </div>
    )
}