import router from 'next/router'
import * as S from './styles'
import { TextField } from '../TextField'
import { Button } from '../Button'
import { Client } from '../../types/cliente'

type props = {
  client?: Client
}

export const ClientForm = ({ client }: props) => (
  <S.Wrapper aria-label="Form">
    <S.FieldSet>
      <legend>Nome Completo</legend>
      <TextField
        placeholder="Nome"
        size="big"
        type="text"
        onChange={() => null}
        defaultValue={client ? client.name : ''}
      />
      <TextField
        placeholder="Sobrenome"
        size="big"
        type="text"
        onChange={() => null}
        defaultValue={client ? client.surname : ''}
      />
    </S.FieldSet>

    <S.FieldSet column>
      <legend>Contato</legend>
      <TextField
        placeholder="Email"
        size="big"
        type="email"
        onChange={() => null}
        defaultValue={client ? client.email : ''}
      />
      <div id="flex">
        <TextField
          placeholder="Telefone"
          size="big"
          type="tel"
          onChange={() => null}
          defaultValue={client ? client.phone : ''}
        />
        <TextField
          placeholder="Endereço"
          size="big"
          type="text"
          onChange={() => null}
          defaultValue={client ? client.address : ''}
        />
      </div>
    </S.FieldSet>

    <S.FieldSet>
      <legend>Outros</legend>
      <TextField
        placeholder="CPF"
        size="big"
        type="text"
        onChange={() => null}
        defaultValue={client ? client.cpf : ''}
      />
      <TextField
        placeholder="Data de Nascimento"
        size="big"
        type="text"
        onChange={() => null}
        defaultValue={client ? client.birth : ''}
      />
    </S.FieldSet>

    <S.buttonWrapper>
      <Button text={client ? 'Salvar' : 'Cadastrar'} size="big" />
    </S.buttonWrapper>
  </S.Wrapper>
)
