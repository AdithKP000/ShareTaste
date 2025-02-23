import Breadcrumb from "../components/Breadcrumb"

const Support = () => {
  return (
    <>
      <Breadcrumb title="Contact Us" />
      <div>
        <div className="contact-us">
          <div className="row">
            <div className="contact-col">
              <div>
                <i className="fa fa-home"></i>
                <span>
                  <h5>College of Engineering Karunagappally, Engineering College Rd, Thodiyoor , Karunagappalli</h5>
                  <p>Kollam - 690523, Kerala India</p>
                </span>
              </div>

              <div>
                <i className="fa fa-phone"></i>
                <span>
                  <h5>XXXXXXXXXX , XXXXXXXXXX</h5>
                  <p>Office hours: 9:00 am to 4.00pm</p>
                </span>
              </div>

              <div>
                <i className="fa fa-envelope"></i>
                <span>
                  <h5>For General Enquiry: sharetaste2024@gmail.com</h5>
                  <p>For Admin: sharetaste2024@gmail.com</p>
                </span>
              </div>
            </div>

            <div className="contact-col">
              <form action="#">
                <input type="text" placeholder="Enter your name" required />
                <input type="email" placeholder="Enter your email address" required />
                <input type="text" placeholder="Enter your subject" required />
                <textarea rows="8" placeholder="Message" required></textarea>
                <button type="submit" className="supportsubmitbut">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Support;