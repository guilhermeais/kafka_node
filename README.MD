# Micro-serviço com Node.js

- Utilizando Kafka;
- Utilizando Node;

# Aplicações:
- API Principal;
- Uma API Secundária (Geração de Certificado)

# Fluxo
- API Principal envia mensagem pro serviço de certificado para gerar o certificado;
- O Micro-serviço de certificado devolve uma resposta (síncrona/assíncrona).

Se conseguir síncrona/assíncrona:
- Receber uma resposta assíncrona de quando o e-mail com o certificado foi enviado;

# O que sabemos?
 - REST (latência);
 - Redis / RabbitMQ / **Kafka** / (qualquer pub, sub);
 - 