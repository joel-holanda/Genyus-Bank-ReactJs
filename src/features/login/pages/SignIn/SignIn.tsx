import { AppBar } from "../../../../components/appBar/AppBar";
import { ProcessDescriptionHeader } from "../../../../components/header/ProccessDescriptionHeader";
import PageContainer from "../../../../components/PageContainer";
import ProcessPageLayout from "../../../../components/ProcessPageLayout";
import { Greetings } from "../../components/Greetings";
import person from "../../../../_assets/person.svg"
import lock from "../../../../_assets/lock.svg"
import confirmed from "../../../../_assets/confirmed.svg"
import visible from "../../../../_assets/visible.svg"
import Button from "../../../../components/Button";
import ProcessPageFooter from "../../../../components/ProcessPageFooter";
import { FooterLinks } from "../../components/FooterLinks";



function SignIn() {
  return (
    <div>
      <PageContainer>
        <ProcessPageLayout
          appBar={<AppBar arg={false}/>}
          header={
            <ProcessDescriptionHeader component={<Greetings />}/>
          }
          main={
            <form action="none">
              <div>
                <label htmlFor="input-cpf">CPF</label>
                <img src={person} alt="perfil" />
                <input type="number" name="cpf" id="input-cpf" />
                <img src={confirmed} alt="ok" />
              </div>
              <div>
                <label htmlFor="input-password">Senha</label>
                <img src={lock} alt="senha" />
                <input type="password" name="password" id="input-password" />
                <img src={visible} alt="visivel" />
              </div>
              
              <div>
                <p>Lembre de mim</p>
                <a href="#">toggle</a>
              </div>

              <div>
                <Button text="Entrar" widthButton={256}/>
              </div>
            </form>
          }
          footer={
            <ProcessPageFooter>
              <FooterLinks />
            </ProcessPageFooter> 
          }
        />
      </PageContainer>
    
    </div>
    )
  }
  
  export default SignIn;