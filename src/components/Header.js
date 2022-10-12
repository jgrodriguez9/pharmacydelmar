import { Col, Image, Row } from "react-bootstrap";
import logoP from '../logo-pharmacy.svg';

export default function Header(){


    return (
        <Row>
            <Col className="text-center py-3">
                <Image src={logoP} />
            </Col>
        </Row>
    )
}