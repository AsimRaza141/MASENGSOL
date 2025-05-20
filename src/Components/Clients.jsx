import { Component } from 'react';
import './Clients.css';
import CAP from '../images/CAP.png'; 
import suppliers from '../images/Suppliers.png'; 


class Clients extends Component {
  render() {
    return (
      <>
        <section id="clients" className="container my-5">
          <h1 className="section-title">Clients & Partners</h1>
          <div className="image-container">
            <img src={CAP} alt="Clients & Partners" className="client-image" />
          </div>
        </section>
        
        <section id="suppliers" className="container my-5">
          <h1 className="section-title">Our Suppliers</h1>
          <div className="image-container">
            <img src={suppliers} alt="Our Suppliers" className="supplier-image" />
          </div>
        </section>
      </>
    );
  }
}

export default Clients;
