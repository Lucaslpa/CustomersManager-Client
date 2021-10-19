import * as S from './styles'
import { TextField } from '../TextField'
import { Button } from '../Button'

export const ClientForm = () => (
  <S.Wrapper aria-label="Form">
    <S.FieldSet>
      <legend>Nome Completo</legend>
      <TextField
        placeholder="Nome"
        size="big"
        type="text"
        onChange={() => null}
      />
      <TextField
        placeholder="Sobrenome"
        size="big"
        type="text"
        onChange={() => null}
      />
    </S.FieldSet>

    <S.FieldSet column>
      <legend>Contato</legend>
      <TextField
        placeholder="Email"
        size="big"
        type="email"
        onChange={() => null}
      />
      <div id="flex">
        <TextField
          placeholder="Telefone"
          size="big"
          type="tel"
          onChange={() => null}
        />
        <TextField
          placeholder="Endereço"
          size="big"
          type="text"
          onChange={() => null}
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
      />
      <TextField
        placeholder="Data de Nascimento"
        size="big"
        type="text"
        onChange={() => null}
      />
    </S.FieldSet>

    <S.buttonWrapper>
      <Button text="Salvar" size="big" />
    </S.buttonWrapper>
  </S.Wrapper>
)
