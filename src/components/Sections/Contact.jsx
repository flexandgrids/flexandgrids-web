import React from "react";
import styled from "styled-components";
import ContactImg1 from "../../assets/img/web/footer-img-1.png";

export default function Contact() {
  return (
    <Wrapper id="contact">
      <div className="">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Let's get in touch</h1>
            <p className="font13">
              Lets connect and make something awesome together!
            </p>
          </HeaderInfo>
          <div className="row" style={{ paddingBottom: "30px" }}>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <Form>
                <label className="font13">Full name:</label>
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  style={{
                    border: "1px solid gray",
                    borderRadius: "10px",
                    padding: "10px",
                  }}
                  className=" font-calibri"
                  placeholder="Enter your name.."
                />
                <label className="font13">Email:</label>
                <input
                  type="text"
                  id="email"
                  style={{
                    border: "1px solid gray",
                    borderRadius: "10px",
                    padding: "10px",
                  }}
                  name="email"
                  className=" font-calibri"
                  placeholder="Enter your email.."
                />
                <label className="font13">Subject:</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  style={{
                    border: "1px solid gray",
                    borderRadius: "10px",
                    padding: "10px",
                  }}
                  className=" font-calibri"
                  placeholder="Enter your subject.."
                />
                <label className="font13">Your Message:</label>
                <textarea
                  rows="4"
                  cols="50"
                  type="text"
                  id="message"
                  name="message"
                  style={{
                    border: "1px solid gray",
                    borderRadius: "10px",
                    padding: "10px",
                    height: "40px",
                  }}
                  className=" font-calibri"
                  placeholder="Enter your message.."
                />
              </Form>
              <SumbitWrapper className="flex">
                <ButtonInput
                  type="submit"
                  value="Send"
                  className="pointer animate radius8"
                  style={{ maxWidth: "150px" }}
                />
              </SumbitWrapper>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 flex">
              <div
                style={{ width: "50%" }}
                className="flexNullCenter flexColumn"
              >
                <ContactImgBox>
                  <img
                    width={400}
                    src={ContactImg1}
                    alt="office"
                    className="radius6"
                  />
                </ContactImgBox>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  padding: 70px 0 30px 0;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Form = styled.form`
  padding: 70px 0 30px 0;
  input,
  textarea {
    width: 100%;
    background-color: transparent;
    border: 0px;
    outline: none;
    box-shadow: none;
    border-bottom: 1px solid #707070;
    height: 30px;
    margin-bottom: 30px;
  }
  textarea {
    min-height: 100px;
  }
  @media (max-width: 860px) {
    padding: 30px 0;
  }
`;
const ButtonInput = styled.input`
  border: 1px solid #36a9e1;
  background-color: #36a9e1;
  width: 100%;
  padding: 15px;
  outline: none;
  color: #fff;
  :hover {
    background-color: #36a9e1;
    border: 1px solid #36a9e1;
    color: #fff;
  }
  @media (max-width: 991px) {
    margin: 0 auto;
  }
`;
const ContactImgBox = styled.div`
  max-width: 180px;
  align-self: flex-end;
  margin: 10px 30px 10px 0;
`;
const SumbitWrapper = styled.div`
  @media (max-width: 991px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;
