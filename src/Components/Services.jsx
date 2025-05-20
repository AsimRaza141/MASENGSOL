import React, { Component } from 'react';
import './Services.css'; // Import CSS file for styling

class Services extends Component {
  render() {
    return (
      <div>
        {/* Navigation Bar */}
        <nav className="services-navbar">
          <div className="services-nav-text">
            <h1>Our Services</h1>
          </div>
        </nav>

        <section id="services" className="container my-5">
          {/* First Set of Cards */}
          <h2 className="text-center mb-4"><i>SOLAR SYSTEM DESIGN AND APPLICATION</i></h2>
          <div className="row">
            {/* Service 1 */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card service-card shadow">
                <div className="card-header bg-warning text-white">
                  GRID TIED SOLAR SYSTEM
                  <span>(Residential & Commercial)</span>
                </div>
                <div className="card-body">
                  <ul className="service-list">
                    <li>Feeds energy directly to Grid</li>
                    <li>Net Metering Enabled</li>
                    <li>Wi-Fi Enabled</li>
                    <li>Minimal Maintenance</li>
                    <li>Works without batteries</li>
                    <li>Harness energy as per your requirement</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Service 2 */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card service-card shadow">
                <div className="card-header bg-info text-white">
                  HYBRID SOLAR SYSTEM
                  <span>(Residential & Commercial)</span>
                </div>
                <div className="card-body">
                  <ul className="service-list">
                    <li>Feeds energy directly to Grid</li>
                    <li>Net Metering Enabled</li>
                    <li>Wi-Fi Enabled</li>
                    <li>Minimal Maintenance</li>
                    <li>Battery Backup Availability</li>
                    <li>Harness energy as per your requirement</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Service 3 */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card service-card shadow">
                <div className="card-header bg-success text-white">
                  GRID TIED SOLAR SYSTEM
                  <span>(Industrial)</span>
                </div>
                <div className="card-body">
                  <ul className="service-list">
                    <li>Feeds energy directly to Grid</li>
                    <li>Net Metering Enabled</li>
                    <li>Wi-Fi Enabled</li>
                    <li>Minimal Maintenance</li>
                    <li>Synchronized with Generators</li>
                    <li>Harness energy up to several Megawatts</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Second Set of Cards with Updated Header Colors */}
          <h2 className="text-center mt-5 mb-4"><i>OTHER SERVICES</i></h2>
          <div className="row">
            {/* Service 1 */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card service-card shadow">
                <div className="card-header bg-danger text-white"> {/* Changed color to red */}
                  Building Electrifications
                  <span></span>
                </div>
                <div className="card-body">
                  <ul className="service-list-tick">
                    <li>Electrical Power Distribution
                    </li>
                    <li> Lighting Systems
                    </li>
                    <li> Energy Storage Systems
                    </li>
                    <li> Electric Vehicle Charging Infrastructure
                    </li>
                    <li>Smart Energy Management System</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Service 2 */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card service-card shadow">
                <div className="card-header bg-primary text-white"> {/* Changed color to blue */}
                Fire Alarm Systems

                  <span></span>
                </div>
                <div className="card-body">
                  <ul className="service-list-tick">
                    <li> Fire Detection Devices
                    </li>
                    <li>Addressable Alarm Notification Devices</li>
                    <li>Fire Alarm Control Panel
                    </li>
                    <li>Manual Call Points
                    </li>
                    <li>Communication Systems</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Service 3 */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card service-card shadow">
                <div className="card-header bg-secondary text-white"> {/* Changed color to gray */}
                General Electric Supplies

                  <span></span>
                </div>
                <div className="card-body">
                  <ul className="service-list-tick">
                    <li> Wires and Cables
                    </li>
                    <li>Circuit Breakers and Fuses
                    </li>
                    <li>Switches and Sockets
                    </li>
                    <li> Electrical Conduits and Fittings
                    </li>
                    <li>Distribution Boards and Panels</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Services;
