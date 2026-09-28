/* ================================================================
   Central de Atendimento Operacional · Agrológica
   Configuração do ambiente Microsoft 365 — preencher pelo time de TI
   ================================================================ */
window.CENTRAL_CFG = {
  /* ID do diretório (locatário) — Entra ID > Visão geral > "ID do diretório (locatário)" */
  tenantId: '326da5aa-04f3-4066-9c53-4861ceb95598',

  /* ID do aplicativo (cliente) do registro criado no Entra ID para a central */
  clientId: 'e7796abd-4812-49eb-adb3-760ff4a72ad8',

  /* Endereço do site do SharePoint onde ficam chamados e anexos (sem https://) */
  site: 'agrologicamerc.sharepoint.com/sites/centraldeatendimento',

  /* Pasta criada na biblioteca "Documentos" do site (chamados, anexos, dashboards, configuração) */
  pasta: 'Central de Atendimento',

  /* E-mails dos administradores: instalam a central, configuram áreas e cadastram pessoas */
  admins: ['jack.locatelli@agrologica.com.br']
};
