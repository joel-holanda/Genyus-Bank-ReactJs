import { AppBar } from "../../../../components/appBar/AppBar"
import PageContainer from "../../../../components/PageContainer"
import ProcessPageLayout from "../../../../components/ProcessPageLayout"
import { CreateAccountHeader } from "../../components/CreateAccountHeader"

export const CreateAccount = () => {
  return (
    <PageContainer>
      <ProcessPageLayout 
        appBar={<AppBar />}
        header={<CreateAccountHeader />}
        main={
          <div className="container-inputs">
            <label htmlFor="clientFullName">Qual o seu nome completo?</label>
              <input type="text" id="fullname"/>
            <label htmlFor="clientCPF">Qual é o seu CPF?</label>
              <input type="text" />
            <label htmlFor="clientBirthDate">Qual é a sua data de nascimento?</label>
              <input type="text" />
            <label htmlFor="clientEmail">Qual é o seu E-mail</label>
              <input type="text" />
            <label htmlFor="">cellphoneNumber</label>
              <input type="text" />
            <label htmlFor="password">
              <input type="text" />
            </label>
          </div>
        }
        footer={''}
      />  
    </PageContainer>
  )
}