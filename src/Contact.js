/* eslint-disable jsx-a11y/iframe-has-title */
import styled from "styled-components";

const Contact = () => {
  return <Wrapper>
    <h2 className="common-heading">Contact Page</h2>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58668.
    24019068009!2d77.36002225820314!3d23.215232900000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.
    1!3m3!1m2!1s0x397c42514ac9644f%3A0x59e9522d95e2be7c!2s
    Vanijyik%20Kar%20Bhawan!5e0!3m2!1sen!2sin!4v1671821099755!5m2!1sen!2sin"
      width="100%"
      height="400"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"></iframe>

    <div className="container">
      <div className="contact-form">
        <form action="https://formspree.io/f/xqkozgak" method="POST" className="contact-inputs">
          <input
            type="text"
            placeholder="username"
            name="username"
            autoComplete="off"
            required
          />

          <input
            type="email"
            name="Email"
            placeholder="Email"
            autoComplete="off"
            required
          />
          <textarea
            name="message"
            id="" cols="30"
            rows="10"
            placeholder="Enter Your Message"
            autoComplete="off"
            required
          >
          </textarea>
          <input type="submit" value="send" />
        </form>
      </div>
    </div>
  </Wrapper>;
};

const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

export default Contact;
