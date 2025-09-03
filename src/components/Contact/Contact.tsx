import { Send } from "lucide-react";
import {
  Section,
  Title,
  Form,
  Input,
  TextArea,
  Button,
  InfoBox,
  InfoItem,
  IconWrapper,
  ContainerContact,
} from "./styles";

export default function Contact() {
  return (
    <ContainerContact>
      <Section id="contact">
        <Title>Let’s connect</Title>
        <div className="container">
          <Form>
            <div>
              <Input type="text" placeholder="Your name" />
              <Input type="text" placeholder="Phone" />
              <Input type="email" placeholder="Email" />
              <Input type="text" placeholder="Subject" />
            </div>
            <TextArea placeholder="Message" rows={5} />
            <Button type="submit">
              <Send size={16} />
              Send Message
            </Button>
          </Form>
          <div>
            <InfoBox>
              <InfoItem>
                <IconWrapper>
                  <img src="../../../public/icons/tel.png" alt="Phone Number" />
                </IconWrapper>
                <div>
                  <strong>Phone Number</strong>
                  <a href="tel:+5519993772739">+55 (19) 99377-2739</a>
                </div>
              </InfoItem>

              <InfoItem>
                <IconWrapper>
                  <img src="../../../public/icons/email.png" alt="Email" />
                </IconWrapper>
                <div>
                  <strong>Email</strong>
                  <a href="mailto:josevaldirdev@gmail.com">
                    josevaldirdev@gmail.com
                  </a>
                </div>
              </InfoItem>

              <InfoItem>
                <IconWrapper>
                  <img
                    src="../../../public/icons/linkedin.png"
                    alt="LinkedIn"
                  />
                </IconWrapper>
                <div>
                  <strong>LinkedIn</strong>
                  <a href="https://www.linkedin.com/in/josevaldircalixto/">
                    www.linkedin.com/in/josevaldircalixto/
                  </a>
                </div>
              </InfoItem>

              <InfoItem>
                <IconWrapper>
                  <img src="../../../public/icons/adress.png" alt="Adress" />
                </IconWrapper>
                <div>
                  <strong>Address</strong>
                  <a href="https://maps.app.goo.gl/Ghn3BzMpZqGnXfc77">
                    Bosque das Palmeiras, Campinas, São Paulo - Brasil
                  </a>
                </div>
              </InfoItem>
            </InfoBox>
          </div>
        </div>
      </Section>
    </ContainerContact>
  );
}
