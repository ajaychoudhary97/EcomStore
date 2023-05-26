import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import {
    MDBFooter,
    MDBContainer,
   
    MDBIcon,
    MDBBtn
  } from 'mdb-react-ui-kit';
  import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";


function Footer() {
  return (<>
    <Container fluid style={{marginTop: '25px'}}>
    <Card className="text-center" style={{border: 'none', background: 'black', color: '#fff'}}>
      <Card.Header style={{fontSize: '26px'}}>CLINIQUE (EVEN BETTER GLOW)</Card.Header>
      <Card.Body>
        <Card.Title> </Card.Title>
        <Card.Text>
        Moderate-coverage foundation instantly perfects,improves evenness of skin.
        </Card.Text>
       <MDBFooter className='bg-black text-center text-white'>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#3b5998' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#55acee' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#dd4b39' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='google' />
          </MDBBtn>
          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#ac2bac' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#0082ca' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#333333' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
     
        <a className='text-white' href='https://mdbootstrap.com/'>
        CLINIQUE (EVEN BETTER GLOW) © 2020 Copyright CLINIQUE.com
        </a>
      </div>
    </MDBFooter>
      </Card.Body>
    
    </Card>
    </Container>
    </>
  );
}

export default Footer;