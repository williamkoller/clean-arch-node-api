# Signin

> ## Caso de sucesso
1. ✅ Recebe uma requisição do tipo **POST** na rota **/api/signin**
2. ✅ Valida dados obrigatórios **email** e **password**
3. ✅ Valida que o campo **email** é um e-mail válido
4. ✅ **Busca** o usuário com o email e senha fornecidos
5. ✅ Gera um **token** de acesso a partir do ID do usuário
6. ✅ Retorna **200** com o token de acesso e o nome do usuário

> ## Exceções
1. ✅ Retorna erro **404** se o usuário não existir
2. ✅ Retorna erro **400** se email ou password não forem fornecidos pelo client
3. ✅ Retorna erro **400** se o campo email for um e-mail inválido
4. ✅ Retorna erro **500** se der erro ao tentar gerar o token de acesso
5. ✅ Retorna erro **500** se der erro ao tentar atualizar o usuário com o token de acesso gerado