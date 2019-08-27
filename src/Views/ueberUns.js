import React, {Component} from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import kazim from "./kazim-foto.jpg"
import felix from "./felix-foto.jpg"
import viet from "./viet-foto.jpg"

export default class ueberUns extends Component {
    render() {
        return (
            <div>
                <h2>Über uns</h2>
                <Row>
                    <Col sm={9}>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                            invidunt ut
                            labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                            dolores
                            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                            amet.
                            Dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                            et ea
                            rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                            invidunt ut
                            labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                            dolores
                            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                            amet.
                        </p>
                        <p>
                            Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel
                            illum
                            dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui
                            blandit
                            praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum
                            dolor sit
                            amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                            dolore magna
                            aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
                            suscipit
                            lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in
                            hendrerit in
                            vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero
                            eros et
                            accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis
                            dolore
                            te feugait nulla facilisi. Nam lib at vero eos et accusdolor sit amet. Lorem ipsum dolor sit
                            amet,
                            consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                            dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                            et
                            ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam
                            dolore #
                            dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea
                            et
                            gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum
                            dolor
                            sit amet. Lorem ipsum dolor sit amet, consetetur.
                        </p>
                        <p>
                            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                            takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
                            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
                            kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                            Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat,
                            vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim
                            qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                            tincidunt ut laoreet dolore magna aliquam erat volutpat.
                        </p>
                    </Col>
                    <Col sm={1}/>
                    <Col sm={2}>
                        <Image style={{width: 150, height: 150}} className="rounded mx-auto d-block"
                               src={kazim}/>
                        <br/>
                        <Image style={{width: 150, height: 150}} className="rounded mx-auto d-block"
                               src={felix}/>
                        <br/>
                        <Image style={{width: 150, height: 150}} className="rounded mx-auto d-block"
                               src={viet}/>

                    </Col>
                </Row>
            </div>
        )
    }
}