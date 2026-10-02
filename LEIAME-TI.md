# Central de Atendimento Operacional — instalação no Microsoft 365

Pacote: `index.html` (a central), `config.js` (configuração), pasta `manuais/` (PDFs de ajuda).
Os dados (chamados, configuração, anexos) ficam num site do SharePoint; não há servidor próprio.

## 1. Registro do aplicativo (Entra ID → Registros de aplicativo → Novo)
- Tipo de conta: somente este diretório. Plataforma: **Aplicativo de página única (SPA)**.
- **URI de redirecionamento**: o endereço exato onde o `index.html` será aberto
  (ex.: `https://central.suaempresa.com.br/index.html`). Precisa ser igual ao da barra de endereço.
- Anote o **ID do aplicativo (client)** e o **ID do diretório (tenant)** e coloque no `config.js`.

## 2. Permissões da API Microsoft Graph (Delegadas) + consentimento do administrador
| Permissão | Para quê |
|---|---|
| `Sites.ReadWrite.All` | Ler e gravar chamados, configuração e anexos no site |
| `Sites.Manage.All` | Criar as listas e a pasta na primeira instalação |
| `User.Read` | Identificar quem entrou |
| `Mail.Send`, `Mail.Send.Shared` | Avisos por e-mail às equipes (opcional; exige "Enviar como" na caixa remetente) |
| `User.ReadBasic.All` | Fotos dos responsáveis (opcional) |

Depois de adicionar: **Conceder consentimento do administrador**.

## 3. Site do SharePoint
- Crie um site (ex.: `/sites/CentralDeAtendimento`) e compartilhe com todos que vão usar a central.
- Em `config.js`, `site` = `suaempresa.sharepoint.com/sites/CentralDeAtendimento` (sem https://).
- `admins` = e-mails de quem pode instalar e configurar.

## 4. Hospedagem do index.html
O SharePoint não abre `.html` de biblioteca como página (baixa o arquivo). Hospede a pasta inteira
em um endereço https (Azure Static Web Apps, Storage com site estático, IIS ou o servidor web da empresa)
e use esse endereço como URI de redirecionamento do passo 1.

## 5. Primeiro acesso
O administrador abre a central, entra com a conta Microsoft e clica em **Instalar a central**.
Depois cadastra os solicitantes em **Configurar → Solicitantes**.
