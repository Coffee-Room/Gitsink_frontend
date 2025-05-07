export const policyTranslations = {
  en: {
    hero: {
      title: "Our Policies — Your Security, Our Priority",
      subtitle: "Understand our terms, your rights, and how we keep your data secure.",
    },
    navigation: {
      title: "Policy Sections",
      terms: "Terms of Service",
      privacy: "Privacy Policy",
      acceptableUse: "Acceptable Use",
      dataProtection: "Data Protection",
      apiUsage: "API Usage",
      userResponsibility: "User Responsibility",
    },
    lastUpdated: "Last updated",
    terms: {
      title: "Terms of Service",
      sections: [
        {
          title: "1. Acceptance of Terms",
          content:
            "By accessing or using Gitsink, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our service.",
        },
        {
          title: "2. Service Description",
          content:
            "Gitsink provides an API service that allows users to showcase their GitHub projects across various platforms. The service requires authentication with GitHub and creates a structured API from your repository data.",
        },
        {
          title: "3. User Accounts",
          content:
            "To use Gitsink, you must authenticate with your GitHub account. You are responsible for maintaining the security of your API keys and for all activities that occur under your account.",
        },
        {
          title: "4. Restrictions",
          content: "You agree not to:",
          list: [
            "Use the service for any illegal purpose or in violation of any laws",
            "Sell, resell, or lease the Gitsink API access to third parties",
            "Reverse engineer or attempt to extract the source code of our service",
            "Use the service in a way that could damage, disable, or impair Gitsink",
            "Attempt to gain unauthorized access to any part of the service",
          ],
        },
        {
          title: "5. Termination",
          content:
            "We reserve the right to terminate or suspend your account immediately, without prior notice or liability, for any reason, including breach of these Terms. Upon termination, your right to use the service will immediately cease.",
        },
        {
          title: "6. Changes to Terms",
          content:
            "We reserve the right to modify these terms at any time. We will provide notice of significant changes by updating the date at the top of these terms and by maintaining a changelog. Your continued use of Gitsink after such modifications constitutes your acceptance of the revised terms.",
        },
      ],
    },
    privacy: {
      title: "Privacy Policy",
      sections: [
        {
          title: "1. Information We Collect",
          content: "When you use Gitsink, we collect the following information:",
          list: [
            "GitHub authentication data (OAuth tokens)",
            "GitHub username and public profile information",
            "Repository metadata (names, descriptions, languages, stars, etc.)",
            "Custom metadata provided in Portfolio.md files",
            "Usage data related to API calls and service interactions",
          ],
        },
        {
          title: "2. How We Use Your Information",
          content: "We use the collected information for the following purposes:",
          list: [
            "To provide and maintain our service",
            "To generate API responses based on your GitHub projects",
            "To improve and personalize your experience",
            "To communicate with you about service updates or changes",
            "To monitor and analyze usage patterns and trends",
          ],
        },
        {
          title: "3. Data Sharing and Disclosure",
          content:
            "We do not sell your personal information to third parties. We may share your information in the following circumstances:",
          list: [
            "With service providers who help us operate Gitsink",
            "To comply with legal obligations",
            "To protect our rights, privacy, safety, or property",
            "In connection with a business transfer or acquisition",
          ],
        },
        {
          title: "4. Your Data Rights",
          content: "You have the right to:",
          list: [
            "Access the personal data we hold about you",
            "Request correction of inaccurate data",
            "Request deletion of your data",
            "Restrict or object to certain processing of your data",
            "Request a copy of your data in a structured, machine-readable format",
          ],
        },
        {
          title: "5. Data Security",
          content:
            "We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include encryption of API keys, secure authentication processes, and regular security assessments.",
        },
        {
          title: "6. Data Retention",
          content:
            "We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.",
        },
      ],
    },
    acceptableUse: {
      title: "Acceptable Use Policy",
      sections: [
        {
          title: "1. Prohibited Activities",
          content: "When using Gitsink, you agree not to engage in any of the following prohibited activities:",
          list: [
            "Violating any applicable laws or regulations",
            "Infringing on intellectual property rights",
            "Distributing malware or other harmful content",
            "Engaging in unauthorized scraping or data mining",
            "Attempting to interfere with or disrupt the service",
            "Sharing your API key with unauthorized third parties",
            "Using the service to generate spam or unsolicited communications",
          ],
        },
        {
          title: "2. API Rate Limits",
          content:
            "To ensure fair usage and service stability, we implement rate limits on API calls. Excessive or abusive usage patterns may result in temporary or permanent restrictions on your account.",
        },
        {
          title: "3. Content Guidelines",
          content:
            "All content exposed through our API, including repository metadata and Portfolio.md content, must comply with our content guidelines. This includes prohibitions against:",
          list: [
            "Offensive, harmful, or discriminatory content",
            "Misleading or fraudulent information",
            "Content that violates the privacy or rights of others",
          ],
        },
        {
          title: "4. Reporting Violations",
          content:
            "If you become aware of any violations of this Acceptable Use Policy, please report them to us at support@gitsink.tech. We will investigate and take appropriate action.",
        },
        {
          title: "5. Consequences of Violations",
          content: "Violations of this policy may result in:",
          list: [
            "Temporary or permanent suspension of your account",
            "Revocation of API access",
            "Legal action in serious cases",
          ],
        },
      ],
    },
    dataProtection: {
      title: "Data Protection Policy",
      sections: [
        {
          title: "1. Data Storage",
          content: "Gitsink stores your data securely using industry-standard practices:",
          list: [
            "User authentication data is encrypted at rest",
            "API keys are hashed and stored securely",
            "Project metadata is stored in encrypted databases",
            "We use Redis for caching with appropriate security controls",
          ],
        },
        {
          title: "2. Data Processing",
          content:
            "We process your data only for the purposes specified in our Privacy Policy. Our data processing activities include:",
          list: [
            "Syncing repository data from GitHub",
            "Generating API responses based on your project data",
            "Analyzing usage patterns to improve our service",
            "Implementing security measures to protect your data",
          ],
        },
        {
          title: "3. Data Protection Measures",
          content: "We implement the following measures to protect your data:",
          list: [
            "Encryption of sensitive data in transit and at rest",
            "Regular security audits and vulnerability assessments",
            "Access controls and authentication requirements",
            "Employee training on data protection best practices",
            "Incident response procedures for potential data breaches",
          ],
        },
        {
          title: "4. Data Subject Rights",
          content: "As a data subject, you have the following rights:",
          list: [
            "Right to access your personal data",
            "Right to rectification of inaccurate data",
            'Right to erasure ("right to be forgotten")',
            "Right to restriction of processing",
            "Right to data portability",
            "Right to object to processing",
          ],
          additionalContent: "To exercise these rights, please contact us at privacy@gitsink.tech.",
        },
        {
          title: "5. Data Breach Notification",
          content:
            "In the event of a data breach that affects your personal information, we will notify you and the relevant authorities as required by applicable law. Our notification will include information about the breach, its potential impact, and the measures we are taking to address it.",
        },
      ],
    },
    apiUsage: {
      title: "API Usage Policy",
      sections: [
        {
          title: "1. API Authentication",
          content:
            "All API requests must include your unique API key for authentication. Your API key should be kept confidential and should not be shared with unauthorized parties.",
        },
        {
          title: "2. Rate Limits",
          content: "To ensure fair usage and service stability, we implement the following rate limits:",
          list: ["Free tier: 1,000 requests per day", "Paid tiers: Higher limits based on your subscription level"],
          additionalContent:
            "Rate limit information is included in API response headers. If you exceed your rate limit, requests will be rejected with a 429 (Too Many Requests) status code.",
        },
        {
          title: "3. API Key Management",
          content: "You are responsible for managing your API keys securely:",
          list: [
            "Do not embed API keys directly in client-side code",
            "Regenerate your API key immediately if you suspect it has been compromised",
            "Use environment variables or secure vaults to store API keys",
            "Implement proper access controls for your API keys",
          ],
        },
        {
          title: "4. Acceptable API Usage",
          content: "The Gitsink API should be used in accordance with our Acceptable Use Policy. Additionally:",
          list: [
            "Implement proper error handling in your applications",
            "Cache API responses when appropriate to reduce unnecessary requests",
            "Do not use automated scripts to make excessive API requests",
            "Respect the privacy of data accessed through the API",
          ],
        },
        {
          title: "5. API Versioning",
          content:
            "We use versioned API endpoints to ensure compatibility as our service evolves. We will provide advance notice before deprecating any API version and will maintain backward compatibility for a reasonable period.",
        },
        {
          title: "6. API Support",
          content:
            "For API-related questions or issues, please contact our support team at api-support@gitsink.tech. We strive to respond to all API support requests within 48 hours.",
        },
      ],
    },
    userResponsibility: {
      title: "User Responsibility Agreement",
      sections: [
        {
          title: "1. GitHub Content Compliance",
          content:
            "As a Gitsink user, you are responsible for ensuring that all content in your GitHub repositories complies with GitHub's terms of service and applicable laws. This includes:",
          list: [
            "Respecting intellectual property rights",
            "Not distributing harmful or illegal content",
            "Adhering to open source licensing requirements",
          ],
        },
        {
          title: "2. Portfolio.md Accuracy",
          content:
            "You are responsible for the accuracy and appropriateness of all information provided in your Portfolio.md files. This information should:",
          list: [
            "Accurately represent your projects",
            "Not contain misleading or false claims",
            "Respect the privacy and rights of others",
            "Comply with our content guidelines",
          ],
        },
        {
          title: "3. API Key Security",
          content: "You are responsible for maintaining the security of your API keys:",
          list: [
            "Keep your API keys confidential",
            "Do not share your API keys with unauthorized parties",
            "Implement proper security measures in your applications",
            "Regenerate API keys if they are compromised",
          ],
        },
        {
          title: "4. Usage Monitoring",
          content:
            "You are responsible for monitoring your API usage and ensuring it complies with our rate limits and acceptable use policies. This includes:",
          list: [
            "Implementing proper error handling for rate limit responses",
            "Monitoring your usage patterns",
            "Upgrading your plan if you consistently exceed free tier limits",
          ],
        },
        {
          title: "5. Reporting Issues",
          content:
            "You agree to promptly report any security vulnerabilities, API issues, or policy violations to our support team at support@gitsink.tech.",
        },
        {
          title: "6. Compliance with Laws",
          content:
            "You are responsible for ensuring that your use of Gitsink complies with all applicable laws and regulations in your jurisdiction.",
        },
      ],
    },
    cta: {
      title: "Ready to showcase your GitHub projects?",
      subtitle: "Secure your API key and start showcasing your projects with confidence.",
      button: "Join the Waitlist",
      disclaimer: "By joining, you agree to our Terms of Service and Privacy Policy.",
    },
  },
  es: {
    hero: {
      title: "Nuestras Políticas — Tu Seguridad, Nuestra Prioridad",
      subtitle: "Comprende nuestros términos, tus derechos y cómo mantenemos tus datos seguros.",
    },
    navigation: {
      title: "Secciones de Políticas",
      terms: "Términos de Servicio",
      privacy: "Política de Privacidad",
      acceptableUse: "Uso Aceptable",
      dataProtection: "Protección de Datos",
      apiUsage: "Uso de la API",
      userResponsibility: "Responsabilidad del Usuario",
    },
    lastUpdated: "Última actualización",
    terms: {
      title: "Términos de Servicio",
      sections: [
        {
          title: "1. Aceptación de Términos",
          content:
            "Al acceder o utilizar Gitsink, aceptas estar sujeto a estos Términos de Servicio. Si no estás de acuerdo con estos términos, por favor no uses nuestro servicio.",
        },
        {
          title: "2. Descripción del Servicio",
          content:
            "Gitsink proporciona un servicio de API que permite a los usuarios mostrar sus proyectos de GitHub en varias plataformas. El servicio requiere autenticación con GitHub y crea una API estructurada a partir de los datos de tu repositorio.",
        },
        {
          title: "3. Cuentas de Usuario",
          content:
            "Para usar Gitsink, debes autenticarte con tu cuenta de GitHub. Eres responsable de mantener la seguridad de tus claves de API y de todas las actividades que ocurran bajo tu cuenta.",
        },
        {
          title: "4. Restricciones",
          content: "Aceptas no:",
          list: [
            "Usar el servicio para cualquier propósito ilegal o en violación de cualquier ley",
            "Vender, revender o arrendar el acceso a la API de Gitsink a terceros",
            "Realizar ingeniería inversa o intentar extraer el código fuente de nuestro servicio",
            "Usar el servicio de manera que pueda dañar, deshabilitar o perjudicar a Gitsink",
            "Intentar obtener acceso no autorizado a cualquier parte del servicio",
          ],
        },
        {
          title: "5. Terminación",
          content:
            "Nos reservamos el derecho de terminar o suspender tu cuenta inmediatamente, sin previo aviso o responsabilidad, por cualquier motivo, incluida la violación de estos Términos. Tras la terminación, tu derecho a usar el servicio cesará inmediatamente.",
        },
        {
          title: "6. Cambios en los Términos",
          content:
            "Nos reservamos el derecho de modificar estos términos en cualquier momento. Proporcionaremos aviso de cambios significativos actualizando la fecha en la parte superior de estos términos y manteniendo un registro de cambios. Tu uso continuado de Gitsink después de tales modificaciones constituye tu aceptación de los términos revisados.",
        },
      ],
    },
    privacy: {
      title: "Política de Privacidad",
      sections: [
        {
          title: "1. Información que Recopilamos",
          content: "Cuando usas Gitsink, recopilamos la siguiente información:",
          list: [
            "Datos de autenticación de GitHub (tokens OAuth)",
            "Nombre de usuario de GitHub e información de perfil público",
            "Metadatos del repositorio (nombres, descripciones, lenguajes, estrellas, etc.)",
            "Metadatos personalizados proporcionados en archivos Portfolio.md",
            "Datos de uso relacionados con llamadas a la API e interacciones con el servicio",
          ],
        },
        {
          title: "2. Cómo Usamos Tu Información",
          content: "Usamos la información recopilada para los siguientes propósitos:",
          list: [
            "Para proporcionar y mantener nuestro servicio",
            "Para generar respuestas de API basadas en tus proyectos de GitHub",
            "Para mejorar y personalizar tu experiencia",
            "Para comunicarnos contigo sobre actualizaciones o cambios en el servicio",
            "Para monitorear y analizar patrones y tendencias de uso",
          ],
        },
        {
          title: "3. Compartir y Divulgar Datos",
          content:
            "No vendemos tu información personal a terceros. Podemos compartir tu información en las siguientes circunstancias:",
          list: [
            "Con proveedores de servicios que nos ayudan a operar Gitsink",
            "Para cumplir con obligaciones legales",
            "Para proteger nuestros derechos, privacidad, seguridad o propiedad",
            "En relación con una transferencia o adquisición de negocios",
          ],
        },
        {
          title: "4. Tus Derechos de Datos",
          content: "Tienes derecho a:",
          list: [
            "Acceder a los datos personales que tenemos sobre ti",
            "Solicitar la corrección de datos inexactos",
            "Solicitar la eliminación de tus datos",
            "Restringir u objetar cierto procesamiento de tus datos",
            "Solicitar una copia de tus datos en un formato estructurado y legible por máquina",
          ],
        },
        {
          title: "5. Seguridad de Datos",
          content:
            "Implementamos medidas de seguridad apropiadas para proteger tu información personal contra acceso no autorizado, alteración, divulgación o destrucción. Estas medidas incluyen cifrado de claves API, procesos de autenticación seguros y evaluaciones regulares de seguridad.",
        },
        {
          title: "6. Retención de Datos",
          content:
            "Conservamos tu información personal solo durante el tiempo necesario para cumplir con los propósitos descritos en esta Política de Privacidad, a menos que un período de retención más largo sea requerido o permitido por la ley.",
        },
      ],
    },
    acceptableUse: {
      title: "Política de Uso Aceptable",
      sections: [
        {
          title: "1. Actividades Prohibidas",
          content: "Al usar Gitsink, aceptas no participar en ninguna de las siguientes actividades prohibidas:",
          list: [
            "Violar cualquier ley o regulación aplicable",
            "Infringir derechos de propiedad intelectual",
            "Distribuir malware u otro contenido dañino",
            "Participar en raspado o minería de datos no autorizados",
            "Intentar interferir o interrumpir el servicio",
            "Compartir tu clave API con terceros no autorizados",
            "Usar el servicio para generar spam o comunicaciones no solicitadas",
          ],
        },
        {
          title: "2. Límites de Tasa de API",
          content:
            "Para garantizar un uso justo y la estabilidad del servicio, implementamos límites de tasa en las llamadas a la API. Los patrones de uso excesivos o abusivos pueden resultar en restricciones temporales o permanentes en tu cuenta.",
        },
        {
          title: "3. Directrices de Contenido",
          content:
            "Todo el contenido expuesto a través de nuestra API, incluidos los metadatos del repositorio y el contenido de Portfolio.md, debe cumplir con nuestras directrices de contenido. Esto incluye prohibiciones contra:",
          list: [
            "Contenido ofensivo, dañino o discriminatorio",
            "Información engañosa o fraudulenta",
            "Contenido que viola la privacidad o los derechos de otros",
          ],
        },
        {
          title: "4. Reportar Violaciones",
          content:
            "Si tienes conocimiento de alguna violación de esta Política de Uso Aceptable, por favor repórtala a support@gitsink.tech. Investigaremos y tomaremos las medidas apropiadas.",
        },
        {
          title: "5. Consecuencias de las Violaciones",
          content: "Las violaciones de esta política pueden resultar en:",
          list: [
            "Suspensión temporal o permanente de tu cuenta",
            "Revocación del acceso a la API",
            "Acción legal en casos graves",
          ],
        },
      ],
    },
    dataProtection: {
      title: "Política de Protección de Datos",
      sections: [
        {
          title: "1. Almacenamiento de Datos",
          content: "Gitsink almacena tus datos de forma segura utilizando prácticas estándar de la industria:",
          list: [
            "Los datos de autenticación del usuario están cifrados en reposo",
            "Las claves API están hasheadas y almacenadas de forma segura",
            "Los metadatos del proyecto se almacenan en bases de datos cifradas",
            "Usamos Redis para el almacenamiento en caché con controles de seguridad apropiados",
          ],
        },
        {
          title: "2. Procesamiento de Datos",
          content:
            "Procesamos tus datos solo para los fines especificados en nuestra Política de Privacidad. Nuestras actividades de procesamiento de datos incluyen:",
          list: [
            "Sincronización de datos de repositorio desde GitHub",
            "Generación de respuestas API basadas en los datos de tu proyecto",
            "Análisis de patrones de uso para mejorar nuestro servicio",
            "Implementación de medidas de seguridad para proteger tus datos",
          ],
        },
        {
          title: "3. Medidas de Protección de Datos",
          content: "Implementamos las siguientes medidas para proteger tus datos:",
          list: [
            "Cifrado de datos sensibles en tránsito y en reposo",
            "Auditorías de seguridad regulares y evaluaciones de vulnerabilidad",
            "Controles de acceso y requisitos de autenticación",
            "Capacitación de empleados en mejores prácticas de protección de datos",
            "Procedimientos de respuesta a incidentes para posibles violaciones de datos",
          ],
        },
        {
          title: "4. Derechos del Sujeto de Datos",
          content: "Como sujeto de datos, tienes los siguientes derechos:",
          list: [
            "Derecho a acceder a tus datos personales",
            "Derecho a la rectificación de datos inexactos",
            'Derecho a la eliminación ("derecho al olvido")',
            "Derecho a la restricción del procesamiento",
            "Derecho a la portabilidad de datos",
            "Derecho a objetar el procesamiento",
          ],
          additionalContent: "Para ejercer estos derechos, por favor contáctanos en privacy@gitsink.tech.",
        },
        {
          title: "5. Notificación de Violación de Datos",
          content:
            "En caso de una violación de datos que afecte tu información personal, te notificaremos a ti y a las autoridades relevantes según lo requiera la ley aplicable. Nuestra notificación incluirá información sobre la violación, su impacto potencial y las medidas que estamos tomando para abordarla.",
        },
      ],
    },
    apiUsage: {
      title: "Política de Uso de API",
      sections: [
        {
          title: "1. Autenticación de API",
          content:
            "Todas las solicitudes de API deben incluir tu clave API única para autenticación. Tu clave API debe mantenerse confidencial y no debe compartirse con partes no autorizadas.",
        },
        {
          title: "2. Límites de Tasa",
          content:
            "Para garantizar un uso justo y la estabilidad del servicio, implementamos los siguientes límites de tasa:",
          list: [
            "Nivel gratuito: 1,000 solicitudes por día",
            "Niveles de pago: Límites más altos según tu nivel de suscripción",
          ],
          additionalContent:
            "La información del límite de tasa se incluye en los encabezados de respuesta de la API. Si excedes tu límite de tasa, las solicitudes serán rechazadas con un código de estado 429 (Demasiadas Solicitudes).",
        },
        {
          title: "3. Gestión de Claves API",
          content: "Eres responsable de gestionar tus claves API de forma segura:",
          list: [
            "No incrustes claves API directamente en código del lado del cliente",
            "Regenera tu clave API inmediatamente si sospechas que ha sido comprometida",
            "Usa variables de entorno o bóvedas seguras para almacenar claves API",
            "Implementa controles de acceso adecuados para tus claves API",
          ],
        },
        {
          title: "4. Uso Aceptable de API",
          content: "La API de Gitsink debe usarse de acuerdo con nuestra Política de Uso Aceptable. Además:",
          list: [
            "Implementa un manejo adecuado de errores en tus aplicaciones",
            "Almacena en caché las respuestas de la API cuando sea apropiado para reducir solicitudes innecesarias",
            "No uses scripts automatizados para hacer solicitudes excesivas a la API",
            "Respeta la privacidad de los datos accedidos a través de la API",
          ],
        },
        {
          title: "5. Versionado de API",
          content:
            "Usamos puntos finales de API versionados para garantizar la compatibilidad a medida que nuestro servicio evoluciona. Proporcionaremos aviso previo antes de deprecar cualquier versión de API y mantendremos la compatibilidad hacia atrás durante un período razonable.",
        },
        {
          title: "6. Soporte de API",
          content:
            "Para preguntas o problemas relacionados con la API, por favor contacta a nuestro equipo de soporte en api-support@gitsink.tech. Nos esforzamos por responder a todas las solicitudes de soporte de API dentro de las 48 horas.",
        },
      ],
    },
    userResponsibility: {
      title: "Acuerdo de Responsabilidad del Usuario",
      sections: [
        {
          title: "1. Cumplimiento del Contenido de GitHub",
          content:
            "Como usuario de Gitsink, eres responsable de asegurar que todo el contenido en tus repositorios de GitHub cumpla con los términos de servicio de GitHub y las leyes aplicables. Esto incluye:",
          list: [
            "Respetar los derechos de propiedad intelectual",
            "No distribuir contenido dañino o ilegal",
            "Adherirse a los requisitos de licencias de código abierto",
          ],
        },
        {
          title: "2. Precisión de Portfolio.md",
          content:
            "Eres responsable de la precisión y adecuación de toda la información proporcionada en tus archivos Portfolio.md. Esta información debe:",
          list: [
            "Representar con precisión tus proyectos",
            "No contener afirmaciones engañosas o falsas",
            "Respetar la privacidad y los derechos de otros",
            "Cumplir con nuestras directrices de contenido",
          ],
        },
        {
          title: "3. Seguridad de la Clave API",
          content: "Eres responsable de mantener la seguridad de tus claves API:",
          list: [
            "Mantén tus claves API confidenciales",
            "No compartas tus claves API con partes no autorizadas",
            "Implementa medidas de seguridad adecuadas en tus aplicaciones",
            "Regenera las claves API si están comprometidas",
          ],
        },
        {
          title: "4. Monitoreo de Uso",
          content:
            "Eres responsable de monitorear tu uso de API y asegurar que cumpla con nuestros límites de tasa y políticas de uso aceptable. Esto incluye:",
          list: [
            "Implementar un manejo adecuado de errores para respuestas de límite de tasa",
            "Monitorear tus patrones de uso",
            "Actualizar tu plan si excedes consistentemente los límites del nivel gratuito",
          ],
        },
        {
          title: "5. Reportar Problemas",
          content:
            "Aceptas reportar prontamente cualquier vulnerabilidad de seguridad, problemas de API o violaciones de política a nuestro equipo de soporte en support@gitsink.tech.",
        },
        {
          title: "6. Cumplimiento de Leyes",
          content:
            "Eres responsable de asegurar que tu uso de Gitsink cumpla con todas las leyes y regulaciones aplicables en tu jurisdicción.",
        },
      ],
    },
    cta: {
      title: "¿Listo para mostrar tus proyectos de GitHub?",
      subtitle: "Asegura tu clave API y comienza a mostrar tus proyectos con confianza.",
      button: "Únete a la Lista de Espera",
      disclaimer: "Al unirte, aceptas nuestros Términos de Servicio y Política de Privacidad.",
    },
  },
  fr: {
    hero: {
      title: "Nos Politiques — Votre Sécurité, Notre Priorité",
      subtitle: "Comprenez nos conditions, vos droits et comment nous protégeons vos données.",
    },
    navigation: {
      title: "Sections des Politiques",
      terms: "Conditions d'Utilisation",
      privacy: "Politique de Confidentialité",
      acceptableUse: "Utilisation Acceptable",
      dataProtection: "Protection des Données",
      apiUsage: "Utilisation de l'API",
      userResponsibility: "Responsabilité de l'Utilisateur",
    },
    lastUpdated: "Dernière mise à jour",
    terms: {
      title: "Conditions d'Utilisation",
      sections: [
        {
          title: "1. Acceptation des Conditions",
          content:
            "En accédant ou en utilisant Gitsink, vous acceptez d'être lié par ces Conditions d'Utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser notre service.",
        },
        {
          title: "2. Description du Service",
          content:
            "Gitsink fournit un service d'API qui permet aux utilisateurs de présenter leurs projets GitHub sur diverses plateformes. Le service nécessite une authentification avec GitHub et crée une API structurée à partir des données de votre dépôt.",
        },
        {
          title: "3. Comptes Utilisateurs",
          content:
            "Pour utiliser Gitsink, vous devez vous authentifier avec votre compte GitHub. Vous êtes responsable du maintien de la sécurité de vos clés API et de toutes les activités qui se produisent sous votre compte.",
        },
        {
          title: "4. Restrictions",
          content: "Vous acceptez de ne pas :",
          list: [
            "Utiliser le service à des fins illégales ou en violation de toute loi",
            "Vendre, revendre ou louer l'accès à l'API Gitsink à des tiers",
            "Faire de l'ingénierie inverse ou tenter d'extraire le code source de notre service",
            "Utiliser le service d'une manière qui pourrait endommager, désactiver ou nuire à Gitsink",
            "Tenter d'accéder sans autorisation à toute partie du service",
          ],
        },
        {
          title: "5. Résiliation",
          content:
            "Nous nous réservons le droit de résilier ou de suspendre votre compte immédiatement, sans préavis ni responsabilité, pour quelque raison que ce soit, y compris la violation de ces Conditions. À la résiliation, votre droit d'utiliser le service cessera immédiatement.",
        },
        {
          title: "6. Modifications des Conditions",
          content:
            "Nous nous réservons le droit de modifier ces conditions à tout moment. Nous fournirons un avis de changements significatifs en mettant à jour la date en haut de ces conditions et en maintenant un journal des modifications. Votre utilisation continue de Gitsink après de telles modifications constitue votre acceptation des conditions révisées.",
        },
      ],
    },
    privacy: {
      title: "Politique de Confidentialité",
      sections: [
        {
          title: "1. Informations que Nous Collectons",
          content: "Lorsque vous utilisez Gitsink, nous collectons les informations suivantes :",
          list: [
            "Données d'authentification GitHub (jetons OAuth)",
            "Nom d'utilisateur GitHub et informations de profil public",
            "Métadonnées du dépôt (noms, descriptions, langages, étoiles, etc.)",
            "Métadonnées personnalisées fournies dans les fichiers Portfolio.md",
            "Données d'utilisation liées aux appels API et aux interactions avec le service",
          ],
        },
        {
          title: "2. Comment Nous Utilisons Vos Informations",
          content: "Nous utilisons les informations collectées aux fins suivantes :",
          list: [
            "Pour fournir et maintenir notre service",
            "Pour générer des réponses API basées sur vos projets GitHub",
            "Pour améliorer et personnaliser votre expérience",
            "Pour communiquer avec vous concernant les mises à jour ou les changements de service",
            "Pour surveiller et analyser les modèles et tendances d'utilisation",
          ],
        },
        {
          title: "3. Partage et Divulgation des Données",
          content:
            "Nous ne vendons pas vos informations personnelles à des tiers. Nous pouvons partager vos informations dans les circonstances suivantes :",
          list: [
            "Avec des fournisseurs de services qui nous aident à exploiter Gitsink",
            "Pour se conformer aux obligations légales",
            "Pour protéger nos droits, notre vie privée, notre sécurité ou notre propriété",
            "Dans le cadre d'un transfert ou d'une acquisition d'entreprise",
          ],
        },
        {
          title: "4. Vos Droits sur les Données",
          content: "Vous avez le droit de :",
          list: [
            "Accéder aux données personnelles que nous détenons à votre sujet",
            "Demander la correction de données inexactes",
            "Demander la suppression de vos données",
            "Restreindre ou s'opposer à certains traitements de vos données",
            "Demander une copie de vos données dans un format structuré et lisible par machine",
          ],
        },
        {
          title: "5. Sécurité des Données",
          content:
            "Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos informations personnelles contre l'accès non autorisé, l'altération, la divulgation ou la destruction. Ces mesures comprennent le chiffrement des clés API, des processus d'authentification sécurisés et des évaluations régulières de sécurité.",
        },
        {
          title: "6. Conservation des Données",
          content:
            "Nous conservons vos informations personnelles uniquement aussi longtemps que nécessaire pour remplir les objectifs décrits dans cette Politique de Confidentialité, à moins qu'une période de conservation plus longue ne soit requise ou autorisée par la loi.",
        },
      ],
    },
    acceptableUse: {
      title: "Politique d'Utilisation Acceptable",
      sections: [
        {
          title: "1. Activités Interdites",
          content:
            "Lorsque vous utilisez Gitsink, vous acceptez de ne pas vous engager dans les activités interdites suivantes :",
          list: [
            "Violer toute loi ou réglementation applicable",
            "Enfreindre les droits de propriété intellectuelle",
            "Distribuer des logiciels malveillants ou d'autres contenus nuisibles",
            "S'engager dans le scraping ou l'extraction de données non autorisés",
            "Tenter d'interférer avec ou de perturber le service",
            "Partager votre clé API avec des tiers non autorisés",
            "Utiliser le service pour générer du spam ou des communications non sollicitées",
          ],
        },
        {
          title: "2. Limites de Taux d'API",
          content:
            "Pour assurer une utilisation équitable et la stabilité du service, nous implémentons des limites de taux sur les appels API. Des modèles d'utilisation excessifs ou abusifs peuvent entraîner des restrictions temporaires ou permanentes sur votre compte.",
        },
        {
          title: "3. Directives de Contenu",
          content:
            "Tout contenu exposé via notre API, y compris les métadonnées du dépôt et le contenu de Portfolio.md, doit se conformer à nos directives de contenu. Cela inclut des interdictions contre :",
          list: [
            "Contenu offensant, nuisible ou discriminatoire",
            "Informations trompeuses ou frauduleuses",
            "Contenu qui viole la vie privée ou les droits d'autrui",
          ],
        },
        {
          title: "4. Signalement des Violations",
          content:
            "Si vous avez connaissance de violations de cette Politique d'Utilisation Acceptable, veuillez nous les signaler à support@gitsink.tech. Nous enquêterons et prendrons les mesures appropriées.",
        },
        {
          title: "5. Conséquences des Violations",
          content: "Les violations de cette politique peuvent entraîner :",
          list: [
            "Suspension temporaire ou permanente de votre compte",
            "Révocation de l'accès à l'API",
            "Action en justice dans les cas graves",
          ],
        },
      ],
    },
    dataProtection: {
      title: "Politique de Protection des Données",
      sections: [
        {
          title: "1. Stockage des Données",
          content: "Gitsink stocke vos données en toute sécurité en utilisant des pratiques standard de l'industrie :",
          list: [
            "Les données d'authentification des utilisateurs sont chiffrées au repos",
            "Les clés API sont hachées et stockées en toute sécurité",
            "Les métadonnées du projet sont stockées dans des bases de données chiffrées",
            "Nous utilisons Redis pour la mise en cache avec des contrôles de sécurité appropriés",
          ],
        },
        {
          title: "2. Traitement des Données",
          content:
            "Nous traitons vos données uniquement aux fins spécifiées dans notre Politique de Confidentialité. Nos activités de traitement des données comprennent :",
          list: [
            "Synchronisation des données de dépôt depuis GitHub",
            "Génération de réponses API basées sur les données de votre projet",
            "Analyse des modèles d'utilisation pour améliorer notre service",
            "Mise en œuvre de mesures de sécurité pour protéger vos données",
          ],
        },
        {
          title: "3. Mesures de Protection des Données",
          content: "Nous mettons en œuvre les mesures suivantes pour protéger vos données :",
          list: [
            "Chiffrement des données sensibles en transit et au repos",
            "Audits de sécurité réguliers et évaluations de vulnérabilité",
            "Contrôles d'accès et exigences d'authentification",
            "Formation des employés aux meilleures pratiques de protection des données",
            "Procédures de réponse aux incidents pour les violations potentielles de données",
          ],
        },
        {
          title: "4. Droits du Sujet des Données",
          content: "En tant que sujet des données, vous avez les droits suivants :",
          list: [
            "Droit d'accès à vos données personnelles",
            "Droit de rectification des données inexactes",
            "Droit à l'effacement (\"droit à l'oubli\")",
            "Droit à la limitation du traitement",
            "Droit à la portabilité des données",
            "Droit d'opposition au traitement",
          ],
          additionalContent: "Pour exercer ces droits, veuillez nous contacter à privacy@gitsink.tech.",
        },
        {
          title: "5. Notification de Violation de Données",
          content:
            "En cas de violation de données affectant vos informations personnelles, nous vous en informerons, ainsi que les autorités compétentes, comme l'exige la loi applicable. Notre notification comprendra des informations sur la violation, son impact potentiel et les mesures que nous prenons pour y remédier.",
        },
      ],
    },
    apiUsage: {
      title: "Politique d'Utilisation de l'API",
      sections: [
        {
          title: "1. Authentification API",
          content:
            "Toutes les requêtes API doivent inclure votre clé API unique pour l'authentification. Votre clé API doit être gardée confidentielle et ne doit pas être partagée avec des parties non autorisées.",
        },
        {
          title: "2. Limites de Taux",
          content:
            "Pour assurer une utilisation équitable et la stabilité du service, nous implémentons les limites de taux suivantes :",
          list: [
            "Niveau gratuit : 1 000 requêtes par jour",
            "Niveaux payants : Limites plus élevées en fonction de votre niveau d'abonnement",
          ],
          additionalContent:
            "Les informations sur les limites de taux sont incluses dans les en-têtes de réponse de l'API. Si vous dépassez votre limite de taux, les requêtes seront rejetées avec un code d'état 429 (Trop de Requêtes).",
        },
        {
          title: "3. Gestion des Clés API",
          content: "Vous êtes responsable de la gestion sécurisée de vos clés API :",
          list: [
            "Ne pas intégrer les clés API directement dans le code côté client",
            "Régénérer votre clé API immédiatement si vous soupçonnez qu'elle a été compromise",
            "Utiliser des variables d'environnement ou des coffres-forts sécurisés pour stocker les clés API",
            "Mettre en œuvre des contrôles d'accès appropriés pour vos clés API",
          ],
        },
        {
          title: "4. Utilisation Acceptable de l'API",
          content:
            "L'API Gitsink doit être utilisée conformément à notre Politique d'Utilisation Acceptable. De plus :",
          list: [
            "Mettre en œuvre une gestion appropriée des erreurs dans vos applications",
            "Mettre en cache les réponses API lorsque c'est approprié pour réduire les requêtes inutiles",
            "Ne pas utiliser de scripts automatisés pour faire des requêtes API excessives",
            "Respecter la confidentialité des données accessibles via l'API",
          ],
        },
        {
          title: "5. Versionnement de l'API",
          content:
            "Nous utilisons des points de terminaison API versionnés pour assurer la compatibilité à mesure que notre service évolue. Nous fournirons un préavis avant de déprécier toute version de l'API et maintiendrons la compatibilité descendante pendant une période raisonnable.",
        },
        {
          title: "6. Support API",
          content:
            "Pour les questions ou problèmes liés à l'API, veuillez contacter notre équipe de support à api-support@gitsink.tech. Nous nous efforçons de répondre à toutes les demandes de support API dans les 48 heures.",
        },
      ],
    },
    userResponsibility: {
      title: "Accord de Responsabilité de l'Utilisateur",
      sections: [
        {
          title: "1. Conformité du Contenu GitHub",
          content:
            "En tant qu'utilisateur de Gitsink, vous êtes responsable de vous assurer que tout le contenu de vos dépôts GitHub est conforme aux conditions d'utilisation de GitHub et aux lois applicables. Cela inclut :",
          list: [
            "Respecter les droits de propriété intellectuelle",
            "Ne pas distribuer de contenu nuisible ou illégal",
            "Adhérer aux exigences de licence open source",
          ],
        },
        {
          title: "2. Précision de Portfolio.md",
          content:
            "Vous êtes responsable de l'exactitude et de la pertinence de toutes les informations fournies dans vos fichiers Portfolio.md. Ces informations doivent :",
          list: [
            "Représenter fidèlement vos projets",
            "Ne pas contenir d'affirmations trompeuses ou fausses",
            "Respecter la vie privée et les droits d'autrui",
            "Se conformer à nos directives de contenu",
          ],
        },
        {
          title: "3. Sécurité des Clés API",
          content: "Vous êtes responsable du maintien de la sécurité de vos clés API :",
          list: [
            "Garder vos clés API confidentielles",
            "Ne pas partager vos clés API avec des parties non autorisées",
            "Mettre en œuvre des mesures de sécurité appropriées dans vos applications",
            "Régénérer les clés API si elles sont compromises",
          ],
        },
        {
          title: "4. Surveillance de l'Utilisation",
          content:
            "Vous êtes responsable de surveiller votre utilisation de l'API et de vous assurer qu'elle est conforme à nos limites de taux et politiques d'utilisation acceptable. Cela inclut :",
          list: [
            "Mettre en œuvre une gestion appropriée des erreurs pour les réponses de limite de taux",
            "Surveiller vos modèles d'utilisation",
            "Mettre à niveau votre forfait si vous dépassez constamment les limites du niveau gratuit",
          ],
        },
        {
          title: "5. Signalement des Problèmes",
          content:
            "Vous acceptez de signaler rapidement toute vulnérabilité de sécurité, problème d'API ou violation de politique à notre équipe de support à support@gitsink.tech.",
        },
        {
          title: "6. Conformité aux Lois",
          content:
            "Vous êtes responsable de vous assurer que votre utilisation de Gitsink est conforme à toutes les lois et réglementations applicables dans votre juridiction.",
        },
      ],
    },
    cta: {
      title: "Prêt à présenter vos projets GitHub ?",
      subtitle: "Sécurisez votre clé API et commencez à présenter vos projets en toute confiance.",
      button: "Rejoindre la Liste d'Attente",
      disclaimer: "En rejoignant, vous acceptez nos Conditions d'Utilisation et notre Politique de Confidentialité.",
    },
  },
  nl: {
    hero: {
      title: "Ons Beleid — Uw Veiligheid, Onze Prioriteit",
      subtitle: "Begrijp onze voorwaarden, uw rechten en hoe we uw gegevens beveiligen.",
    },
    navigation: {
      title: "Beleidssecties",
      terms: "Servicevoorwaarden",
      privacy: "Privacybeleid",
      acceptableUse: "Aanvaardbaar Gebruik",
      dataProtection: "Gegevensbescherming",
      apiUsage: "API-gebruik",
      userResponsibility: "Gebruikersverantwoordelijkheid",
    },
    lastUpdated: "Laatst bijgewerkt",
    terms: {
      title: "Servicevoorwaarden",
      sections: [
        {
          title: "1. Acceptatie van Voorwaarden",
          content:
            "Door toegang te krijgen tot of gebruik te maken van Gitsink, gaat u ermee akkoord gebonden te zijn aan deze Servicevoorwaarden. Als u niet akkoord gaat met deze voorwaarden, gebruik onze service dan niet.",
        },
        {
          title: "2. Servicebeschrijving",
          content:
            "Gitsink biedt een API-service waarmee gebruikers hun GitHub-projecten op verschillende platforms kunnen tonen. De service vereist authenticatie met GitHub en creëert een gestructureerde API van uw repository-gegevens.",
        },
        {
          title: "3. Gebruikersaccounts",
          content:
            "Om Gitsink te gebruiken, moet u zich authenticeren met uw GitHub-account. U bent verantwoordelijk voor het handhaven van de veiligheid van uw API-sleutels en voor alle activiteiten die onder uw account plaatsvinden.",
        },
        {
          title: "4. Beperkingen",
          content: "U stemt ermee in om niet:",
          list: [
            "De service te gebruiken voor illegale doeleinden of in strijd met wetten",
            "De Gitsink API-toegang aan derden te verkopen, door te verkopen of te verhuren",
            "Reverse engineering toe te passen of te proberen de broncode van onze service te extraheren",
            "De service te gebruiken op een manier die Gitsink zou kunnen beschadigen, uitschakelen of benadelen",
            "Te proberen ongeautoriseerde toegang te krijgen tot enig deel van de service",
          ],
        },
        {
          title: "5. Beëindiging",
          content:
            "Wij behouden ons het recht voor om uw account onmiddellijk te beëindigen of op te schorten, zonder voorafgaande kennisgeving of aansprakelijkheid, om welke reden dan ook, inclusief schending van deze Voorwaarden. Bij beëindiging zal uw recht om de service te gebruiken onmiddellijk ophouden.",
        },
        {
          title: "6. Wijzigingen in Voorwaarden",
          content:
            "Wij behouden ons het recht voor om deze voorwaarden op elk moment te wijzigen. We zullen kennisgeving doen van significante wijzigingen door de datum bovenaan deze voorwaarden bij te werken en door een changelog bij te houden. Uw voortgezette gebruik van Gitsink na dergelijke wijzigingen vormt uw acceptatie van de herziene voorwaarden.",
        },
      ],
    },
    privacy: {
      title: "Privacybeleid",
      sections: [
        {
          title: "1. Informatie die We Verzamelen",
          content: "Wanneer u Gitsink gebruikt, verzamelen we de volgende informatie:",
          list: [
            "GitHub-authenticatiegegevens (OAuth-tokens)",
            "GitHub-gebruikersnaam en openbare profielinformatie",
            "Repository-metadata (namen, beschrijvingen, talen, sterren, enz.)",
            "Aangepaste metadata verstrekt in Portfolio.md-bestanden",
            "Gebruiksgegevens gerelateerd aan API-aanroepen en service-interacties",
          ],
        },
        {
          title: "2. Hoe We Uw Informatie Gebruiken",
          content: "We gebruiken de verzamelde informatie voor de volgende doeleinden:",
          list: [
            "Om onze service te leveren en te onderhouden",
            "Om API-responses te genereren op basis van uw GitHub-projecten",
            "Om uw ervaring te verbeteren en te personaliseren",
            "Om met u te communiceren over service-updates of wijzigingen",
            "Om gebruikspatronen en trends te monitoren en te analyseren",
          ],
        },
        {
          title: "3. Gegevens Delen en Openbaarmaking",
          content:
            "We verkopen uw persoonlijke informatie niet aan derden. We kunnen uw informatie delen in de volgende omstandigheden:",
          list: [
            "Met serviceproviders die ons helpen Gitsink te exploiteren",
            "Om te voldoen aan wettelijke verplichtingen",
            "Om onze rechten, privacy, veiligheid of eigendom te beschermen",
            "In verband met een bedrijfsoverdracht of overname",
          ],
        },
        {
          title: "4. Uw Gegevensrechten",
          content: "U heeft het recht om:",
          list: [
            "Toegang te krijgen tot de persoonlijke gegevens die we over u hebben",
            "Correctie van onnauwkeurige gegevens te verzoeken",
            "Verwijdering van uw gegevens te verzoeken",
            "Bepaalde verwerking van uw gegevens te beperken of hiertegen bezwaar te maken",
            "Een kopie van uw gegevens in een gestructureerd, machineleesbaar formaat te verzoeken",
          ],
        },
        {
          title: "5. Gegevensbeveiliging",
          content:
            "We implementeren passende beveiligingsmaatregelen om uw persoonlijke informatie te beschermen tegen ongeautoriseerde toegang, wijziging, openbaarmaking of vernietiging. Deze maatregelen omvatten encryptie van API-sleutels, veilige authenticatieprocessen en regelmatige veiligheidsbeoordelingen.",
        },
        {
          title: "6. Gegevensbewaring",
          content:
            "We bewaren uw persoonlijke informatie alleen zo lang als nodig is om de doeleinden te vervullen die in dit Privacybeleid worden beschreven, tenzij een langere bewaartermijn vereist of toegestaan is door de wet.",
        },
      ],
    },
    acceptableUse: {
      title: "Beleid voor Aanvaardbaar Gebruik",
      sections: [
        {
          title: "1. Verboden Activiteiten",
          content:
            "Bij het gebruik van Gitsink stemt u ermee in niet deel te nemen aan de volgende verboden activiteiten:",
          list: [
            "Het schenden van toepasselijke wetten of voorschriften",
            "Inbreuk maken op intellectuele eigendomsrechten",
            "Het verspreiden van malware of andere schadelijke inhoud",
            "Deelnemen aan ongeautoriseerd scrapen of data mining",
            "Proberen de service te verstoren of te belemmeren",
            "Uw API-sleutel delen met ongeautoriseerde derden",
            "De service gebruiken om spam of ongevraagde communicatie te genereren",
          ],
        },
        {
          title: "2. API-snelheidslimieten",
          content:
            "Om eerlijk gebruik en servicestabiliteit te garanderen, implementeren we snelheidslimieten op API-aanroepen. Overmatige of misbruikende gebruikspatronen kunnen leiden tot tijdelijke of permanente beperkingen op uw account.",
        },
        {
          title: "3. Contentrichtlijnen",
          content:
            "Alle inhoud die via onze API wordt blootgesteld, inclusief repository-metadata en Portfolio.md-inhoud, moet voldoen aan onze contentrichtlijnen. Dit omvat verboden tegen:",
          list: [
            "Aanstootgevende, schadelijke of discriminerende inhoud",
            "Misleidende of frauduleuze informatie",
            "Inhoud die de privacy of rechten van anderen schendt",
          ],
        },
        {
          title: "4. Melden van Overtredingen",
          content:
            "Als u kennis heeft van overtredingen van dit Beleid voor Aanvaardbaar Gebruik, meld deze dan aan ons op support@gitsink.tech. We zullen onderzoeken en passende maatregelen nemen.",
        },
        {
          title: "5. Gevolgen van Overtredingen",
          content: "Overtredingen van dit beleid kunnen leiden tot:",
          list: [
            "Tijdelijke of permanente opschorting van uw account",
            "Intrekking van API-toegang",
            "Juridische actie in ernstige gevallen",
          ],
        },
      ],
    },
    dataProtection: {
      title: "Gegevensbeschermingsbeleid",
      sections: [
        {
          title: "1. Gegevensopslag",
          content: "Gitsink slaat uw gegevens veilig op met behulp van industriestandaard praktijken:",
          list: [
            "Gebruikersauthenticatiegegevens worden versleuteld opgeslagen",
            "API-sleutels worden gehasht en veilig opgeslagen",
            "Projectmetadata wordt opgeslagen in versleutelde databases",
            "We gebruiken Redis voor caching met passende beveiligingscontroles",
          ],
        },
        {
          title: "2. Gegevensverwerking",
          content:
            "We verwerken uw gegevens alleen voor de doeleinden die in ons Privacybeleid zijn gespecificeerd. Onze gegevensverwerkingsactiviteiten omvatten:",
          list: [
            "Synchroniseren van repository-gegevens van GitHub",
            "Genereren van API-responses op basis van uw projectgegevens",
            "Analyseren van gebruikspatronen om onze service te verbeteren",
            "Implementeren van beveiligingsmaatregelen om uw gegevens te beschermen",
          ],
        },
        {
          title: "3. Gegevensbeschermingsmaatregelen",
          content: "We implementeren de volgende maatregelen om uw gegevens te beschermen:",
          list: [
            "Versleuteling van gevoelige gegevens tijdens transport en in rust",
            "Regelmatige veiligheidsaudits en kwetsbaarheidsbeoordelingen",
            "Toegangscontroles en authenticatievereisten",
            "Training van medewerkers in best practices voor gegevensbescherming",
            "Incidentresponsprocedures voor potentiële gegevensinbreuken",
          ],
        },
        {
          title: "4. Rechten van Betrokkenen",
          content: "Als betrokkene heeft u de volgende rechten:",
          list: [
            "Recht op toegang tot uw persoonlijke gegevens",
            "Recht op rectificatie van onnauwkeurige gegevens",
            'Recht op verwijdering ("recht om vergeten te worden")',
            "Recht op beperking van verwerking",
            "Recht op gegevensoverdraagbaarheid",
            "Recht om bezwaar te maken tegen verwerking",
          ],
          additionalContent: "Om deze rechten uit te oefenen, neem contact met ons op via privacy@gitsink.tech.",
        },
        {
          title: "5. Melding van Gegevensinbreuk",
          content:
            "In het geval van een gegevensinbreuk die uw persoonlijke informatie beïnvloedt, zullen we u en de relevante autoriteiten op de hoogte stellen zoals vereist door de toepasselijke wetgeving. Onze melding zal informatie bevatten over de inbreuk, de potentiële impact ervan en de maatregelen die we nemen om deze aan te pakken.",
        },
      ],
    },
    apiUsage: {
      title: "API-gebruiksbeleid",
      sections: [
        {
          title: "1. API-authenticatie",
          content:
            "Alle API-verzoeken moeten uw unieke API-sleutel bevatten voor authenticatie. Uw API-sleutel moet vertrouwelijk worden gehouden en mag niet worden gedeeld met ongeautoriseerde partijen.",
        },
        {
          title: "2. Snelheidslimieten",
          content:
            "Om eerlijk gebruik en servicestabiliteit te garanderen, implementeren we de volgende snelheidslimieten:",
          list: [
            "Gratis niveau: 1.000 verzoeken per dag",
            "Betaalde niveaus: Hogere limieten op basis van uw abonnementsniveau",
          ],
          additionalContent:
            "Informatie over snelheidslimieten is opgenomen in API-responseheaders. Als u uw snelheidslimiet overschrijdt, worden verzoeken afgewezen met een 429 (Te Veel Verzoeken) statuscode.",
        },
        {
          title: "3. API-sleutelbeheer",
          content: "U bent verantwoordelijk voor het veilig beheren van uw API-sleutels:",
          list: [
            "Embed API-sleutels niet direct in client-side code",
            "Regenereer uw API-sleutel onmiddellijk als u vermoedt dat deze is gecompromitteerd",
            "Gebruik omgevingsvariabelen of beveiligde kluizen om API-sleutels op te slaan",
            "Implementeer passende toegangscontroles voor uw API-sleutels",
          ],
        },
        {
          title: "4. Aanvaardbaar API-gebruik",
          content:
            "De Gitsink API moet worden gebruikt in overeenstemming met ons Beleid voor Aanvaardbaar Gebruik. Daarnaast:",
          list: [
            "Implementeer correcte foutafhandeling in uw applicaties",
            "Cache API-responses wanneer gepast om onnodige verzoeken te verminderen",
            "Gebruik geen geautomatiseerde scripts om overmatige API-verzoeken te doen",
            "Respecteer de privacy van gegevens die via de API worden benaderd",
          ],
        },
        {
          title: "5. API-versioning",
          content:
            "We gebruiken geversioneerde API-eindpunten om compatibiliteit te garanderen naarmate onze service evolueert. We zullen vooraf kennisgeving doen voordat we een API-versie afkeuren en we zullen gedurende een redelijke periode achterwaartse compatibiliteit behouden.",
        },
        {
          title: "6. API-ondersteuning",
          content:
            "Voor API-gerelateerde vragen of problemen, neem contact op met ons ondersteuningsteam op api-support@gitsink.tech. We streven ernaar om binnen 48 uur te reageren op alle API-ondersteuningsverzoeken.",
        },
      ],
    },
    userResponsibility: {
      title: "Gebruikersverantwoordelijkheidsovereenkomst",
      sections: [
        {
          title: "1. Naleving van GitHub-inhoud",
          content:
            "Als Gitsink-gebruiker bent u verantwoordelijk voor het waarborgen dat alle inhoud in uw GitHub-repositories voldoet aan de servicevoorwaarden van GitHub en toepasselijke wetten. Dit omvat:",
          list: [
            "Respecteren van intellectuele eigendomsrechten",
            "Niet verspreiden van schadelijke of illegale inhoud",
            "Naleven van open source licentievereisten",
          ],
        },
        {
          title: "2. Nauwkeurigheid van Portfolio.md",
          content:
            "U bent verantwoordelijk voor de nauwkeurigheid en geschiktheid van alle informatie die in uw Portfolio.md-bestanden wordt verstrekt. Deze informatie moet:",
          list: [
            "Uw projecten nauwkeurig weergeven",
            "Geen misleidende of valse beweringen bevatten",
            "De privacy en rechten van anderen respecteren",
            "Voldoen aan onze contentrichtlijnen",
          ],
        },
        {
          title: "3. API-sleutelbeveiliging",
          content: "U bent verantwoordelijk voor het handhaven van de veiligheid van uw API-sleutels:",
          list: [
            "Houd uw API-sleutels vertrouwelijk",
            "Deel uw API-sleutels niet met ongeautoriseerde partijen",
            "Implementeer passende beveiligingsmaatregelen in uw applicaties",
            "Regenereer API-sleutels als ze zijn gecompromitteerd",
          ],
        },
        {
          title: "4. Gebruiksmonitoring",
          content:
            "U bent verantwoordelijk voor het monitoren van uw API-gebruik en ervoor zorgen dat het voldoet aan onze snelheidslimieten en beleid voor aanvaardbaar gebruik. Dit omvat:",
          list: [
            "Implementeren van correcte foutafhandeling voor snelheidslimietresponses",
            "Monitoren van uw gebruikspatronen",
            "Upgraden van uw abonnement als u consistent de limieten van het gratis niveau overschrijdt",
          ],
        },
        {
          title: "5. Melden van Problemen",
          content:
            "U stemt ermee in om onmiddellijk beveiligingskwetsbaarheden, API-problemen of beleidsovertredingen te melden aan ons ondersteuningsteam op support@gitsink.tech.",
        },
        {
          title: "6. Naleving van Wetten",
          content:
            "U bent verantwoordelijk voor het waarborgen dat uw gebruik van Gitsink voldoet aan alle toepasselijke wetten en voorschriften in uw rechtsgebied.",
        },
      ],
    },
    cta: {
      title: "Klaar om uw GitHub-projecten te tonen?",
      subtitle: "Beveilig uw API-sleutel en begin met het tonen van uw projecten met vertrouwen.",
      button: "Meld u aan voor de Wachtlijst",
      disclaimer: "Door u aan te melden, gaat u akkoord met onze Servicevoorwaarden en ons Privacybeleid.",
    },
  },
  ja: {
    hero: {
      title: "私たちのポリシー — あなたのセキュリティ、私たちの優先事項",
      subtitle: "私たちの利用規約、あなたの権利、そしてデータをどのように保護しているかを理解してください。",
    },
    navigation: {
      title: "ポリシーセクション",
      terms: "利用規約",
      privacy: "プライバシーポリシー",
      acceptableUse: "利用規定",
      dataProtection: "データ保護",
      apiUsage: "API使用ポリシー",
      userResponsibility: "ユーザー責任",
    },
    lastUpdated: "最終更新",
    terms: {
      title: "利用規約",
      sections: [
        {
          title: "1. 規約の承諾",
          content:
            "Gitsinkにアクセスまたは使用することにより、あなたはこれらの利用規約に拘束されることに同意します。これらの規約に同意しない場合は、当社のサービスを使用しないでください。",
        },
        {
          title: "2. サービスの説明",
          content:
            "Gitsinkは、ユーザーがGitHubプロジェクトを様々なプラットフォームで紹介できるAPIサービスを提供します。このサービスはGitHubでの認証を必要とし、リポジトリデータから構造化されたAPIを作成します。",
        },
        {
          title: "3. ユーザーアカウント",
          content:
            "Gitsinkを使用するには、GitHubアカウントで認証する必要があります。あなたはAPIキーのセキュリティを維持し、アカウントで発生するすべての活動に責任を負います。",
        },
        {
          title: "4. 制限事項",
          content: "あなたは以下を行わないことに同意します：",
          list: [
            "違法な目的または法律に違反する方法でサービスを使用すること",
            "Gitsink APIアクセスを第三者に販売、再販、またはリースすること",
            "当社のサービスのリバースエンジニアリングまたはソースコードの抽出を試みること",
            "Gitsinkを損傷、無効化、または損なう可能性のある方法でサービスを使用すること",
            "サービスの任意の部分への不正アクセスを試みること",
          ],
        },
        {
          title: "5. 終了",
          content:
            "当社は、これらの規約の違反を含む任意の理由で、事前通知や責任なしに、即座にあなたのアカウントを終了または停止する権利を留保します。終了時、サービスを使用する権利は直ちに停止します。",
        },
        {
          title: "6. 規約の変更",
          content:
            "当社はいつでもこれらの規約を変更する権利を留保します。重要な変更については、これらの規約の上部の日付を更新し、変更履歴を維持することで通知します。そのような変更後もGitsinkを継続して使用することは、改訂された規約の承諾を構成します。",
        },
      ],
    },
    privacy: {
      title: "プライバシーポリシー",
      sections: [
        {
          title: "1. 収集する情報",
          content: "Gitsinkを使用する際、当社は以下の情報を収集します：",
          list: [
            "GitHub認証データ（OAuthトークン）",
            "GitHubユーザー名と公開プロフィール情報",
            "リポジトリメタデータ（名前、説明、言語、スター数など）",
            "Portfolio.mdファイルで提供されるカスタムメタデータ",
            "APIコールとサービスインタラクションに関連する使用データ",
          ],
        },
        {
          title: "2. 情報の使用方法",
          content: "収集した情報は以下の目的で使用します：",
          list: [
            "サービスの提供と維持",
            "GitHubプロジェクトに基づいたAPIレスポンスの生成",
            "体験の向上とパーソナライズ",
            "サービスの更新や変更についての連絡",
            "使用パターンとトレンドの監視と分析",
          ],
        },
        {
          title: "3. データの共有と開示",
          content: "当社は個人情報を第三者に販売しません。以下の状況で情報を共有することがあります：",
          list: [
            "Gitsinkの運営を支援するサービスプロバイダーとの共有",
            "法的義務を遵守するため",
            "当社の権利、プライバシー、安全、または財産を保護するため",
            "事業譲渡または買収に関連して",
          ],
        },
        {
          title: "4. データに関する権利",
          content: "あなたには以下の権利があります：",
          list: [
            "当社が保持するあなたの個人データへのアクセス",
            "不正確なデータの修正の要求",
            "データの削除の要求",
            "データの特定の処理の制限または異議申し立て",
            "構造化された機械可読形式でのデータのコピーの要求",
          ],
        },
        {
          title: "5. データセキュリティ",
          content:
            "当社は、不正アクセス、改ざん、開示、または破壊からあなたの個人情報を保護するための適切なセキュリティ対策を実施しています。これらの対策には、APIキーの暗号化、安全な認証プロセス、定期的なセキュリティ評価が含まれます。",
        },
        {
          title: "6. データ保持",
          content:
            "当社は、このプライバシーポリシーに概説された目的を達成するために必要な期間のみ、あなたの個人情報を保持します。ただし、法律によって長期間の保持が要求または許可されている場合を除きます。",
        },
      ],
    },
    acceptableUse: {
      title: "利用規定",
      sections: [
        {
          title: "1. 禁止行為",
          content: "Gitsinkを使用する際、以下の禁止行為に従事しないことに同意します：",
          list: [
            "適用法または規制の違反",
            "知的財産権の侵害",
            "マルウェアまたはその他の有害なコンテンツの配布",
            "不正なスクレイピングまたはデータマイニングへの従事",
            "サービスの妨害または中断を試みること",
            "APIキーを不正な第三者と共有すること",
            "スパムまたは迷惑な通信を生成するためにサービスを使用すること",
          ],
        },
        {
          title: "2. APIレート制限",
          content:
            "公平な使用とサービスの安定性を確保するために、APIコールにレート制限を実装しています。過度または悪用的な使用パターンは、アカウントの一時的または永久的な制限をもたらす可能性があります。",
        },
        {
          title: "3. コンテンツガイドライン",
          content:
            "当社のAPIを通じて公開されるすべてのコンテンツ（リポジトリメタデータやPortfolio.mdコンテンツを含む）は、コンテンツガイドラインに準拠する必要があります。これには以下に対する禁止が含まれます：",
          list: [
            "攻撃的、有害、または差別的なコンテンツ",
            "誤解を招くまたは詐欺的な情報",
            "他者のプライバシーまたは権利を侵害するコンテンツ",
          ],
        },
        {
          title: "4. 違反の報告",
          content:
            "この利用規定の違反に気づいた場合は、support@gitsink.techまでご報告ください。調査し、適切な措置を講じます。",
        },
        {
          title: "5. 違反の結果",
          content: "このポリシーの違反は以下をもたらす可能性があります：",
          list: ["アカウントの一時的または永久的な停止", "APIアクセスの取り消し", "深刻な場合は法的措置"],
        },
      ],
    },
    dataProtection: {
      title: "データ保護ポリシー",
      sections: [
        {
          title: "1. データストレージ",
          content: "Gitsinkは業界標準のプラクティスを使用してデータを安全に保存します：",
          list: [
            "ユーザー認証データは保存時に暗号化されます",
            "APIキーはハッシュ化され安全に保存されます",
            "プロジェクトメタデータは暗号化されたデータベースに保存されます",
            "適切なセキュリティコントロールを備えたRedisをキャッシングに使用します",
          ],
        },
        {
          title: "2. ��ータ処理",
          content:
            "当社はプライバシーポリシーで指定された目的のためにのみデータを処理します。データ処理活動には以下が含まれます：",
          list: [
            "GitHubからのリポジトリデータの同期",
            "プロジェクトデータに基づいたAPIレスポンスの生成",
            "サービス改善のための使用パターンの分析",
            "データを保護するためのセキュリティ対策の実装",
          ],
        },
        {
          title: "3. データ保護対策",
          content: "当社はデータを保護するために以下の対策を実施しています：",
          list: [
            "転送中および保存中の機密データの暗号化",
            "定期的なセキュリティ監査と脆弱性評価",
            "アクセス制御と認証要件",
            "データ保護のベストプラクティスに関する従業員トレーニング",
            "潜在的なデータ侵害に対するインシデント対応手順",
          ],
        },
        {
          title: "4. データ主体の権利",
          content: "データ主体として、あなたには以下の権利があります：",
          list: [
            "個人データへのアクセス権",
            "不正確なデータの訂正権",
            "削除権（「忘れられる権利」）",
            "処理の制限権",
            "データポータビリティの権利",
            "処理に対する異議申し立て権",
          ],
          additionalContent: "これらの権利を行使するには、privacy@gitsink.techまでご連絡ください。",
        },
        {
          title: "5. データ侵害通知",
          content:
            "あなたの個人情報に影響を与えるデータ侵害が発生した場合、適用法で要求されるとおり、あなたと関連当局に通知します。通知には侵害に関する情報、潜在的な影響、および対処するための措置が含まれます。",
        },
      ],
    },
    apiUsage: {
      title: "API使用ポリシー",
      sections: [
        {
          title: "1. API認証",
          content:
            "すべてのAPIリクエストには、認証のために一意のAPIキーを含める必要があります。APIキーは機密に保持し、不正な第三者と共有しないでください。",
        },
        {
          title: "2. レート制限",
          content: "公平な使用とサービスの安定性を確保するために、以下のレート制限を実装しています：",
          list: ["無料プラン：1日あたり1,000リクエスト", "有料プラン：サブスクリプションレベルに基づいたより高い制限"],
          additionalContent:
            "レート制限情報はAPIレスポンスヘッダーに含まれています。レート制限を超えると、リクエストは429（リクエスト過多）ステータスコードで拒否されます。",
        },
        {
          title: "3. APIキー管理",
          content: "APIキーを安全に管理する責任があります：",
          list: [
            "クライアントサイドコードに直接APIキーを埋め込まないでください",
            "APIキーが漏洩した疑いがある場合は、直ちに再生成してください",
            "APIキーを保存するには環境変数または安全なボールトを使用してください",
            "APIキーに適切なアクセス制御を実装してください",
          ],
        },
        {
          title: "4. 許容されるAPI使用",
          content: "Gitsink APIは利用規定に従って使用する必要があります。さらに：",
          list: [
            "アプリケーションで適切なエラー処理を実装してください",
            "不要なリクエストを減らすために適切な場合はAPIレスポンスをキャッシュしてください",
            "過度のAPIリクエストを行うための自動スクリプトを使用しないでください",
            "APIを通じてアクセスされるデータのプライバシーを尊重してください",
          ],
        },
        {
          title: "5. APIバージョニング",
          content:
            "サービスの進化に伴う互換性を確保するために、バージョン管理されたAPIエンドポイントを使用しています。APIバージョンを廃止する前に事前通知を提供し、合理的な期間、後方互換性を維持します。",
        },
        {
          title: "6. APIサポート",
          content:
            "API関連の質問や問題については、api-support@gitsink.techでサポートチームにお問い合わせください。すべてのAPIサポートリクエストに48時間以内に対応するよう努めています。",
        },
      ],
    },
    userResponsibility: {
      title: "ユーザー責任契約",
      sections: [
        {
          title: "1. GitHubコンテンツのコンプライアンス",
          content:
            "Gitsinkユーザーとして、GitHubリポジトリ内のすべてのコンテンツがGitHubの利用規約および適用法に準拠していることを確認する責任があります。これには以下が含まれます：",
          list: ["知的財産権の尊重", "有害または違法なコンテンツの配布禁止", "オープンソースライセンス要件の遵守"],
        },
        {
          title: "2. Portfolio.mdの正確性",
          content: "Portfolio.mdファイルで提供されるすべての情報の正確性と適切性に責任があります。この情報は：",
          list: [
            "プロジェクトを正確に表現すること",
            "誤解を招くまたは虚偽の主張を含まないこと",
            "他者のプライバシーと権利を尊重すること",
            "コンテンツガイドラインに準拠すること",
          ],
        },
        {
          title: "3. APIキーのセキュリティ",
          content: "APIキーのセキュリティを維持する責任があります：",
          list: [
            "APIキーを機密に保持すること",
            "APIキーを不正な第三者と共有しないこと",
            "アプリケーションに適切なセキュリティ対策を実装すること",
            "APIキーが漏洩した場合は再生成すること",
          ],
        },
        {
          title: "4. 使用状況の監視",
          content:
            "API使用状況を監視し、レート制限と利用規定に準拠していることを確認する責任があります。これには以下が含まれます：",
          list: [
            "レート制限レスポンスに対する適切なエラー処理の実装",
            "使用パターンの監視",
            "無料プランの制限を一貫して超える場合はプランをアップグレードすること",
          ],
        },
        {
          title: "5. 問題の報告",
          content:
            "セキュリティ脆弱性、API問題、またはポリシー違反を速やかにsupport@gitsink.techのサポートチームに報告することに同意します。",
        },
        {
          title: "6. 法律の遵守",
          content: "Gitsinkの使用が管轄区域のすべての適用法および規制に準拠していることを確認する責任があります。",
        },
      ],
    },
    cta: {
      title: "GitHubプロジェクトを紹介する準備はできていますか？",
      subtitle: "APIキーを確保し、自信を持ってプロジェクトを紹介し始めましょう。",
      button: "ウェイトリストに参加",
      disclaimer: "参加することにより、利用規約とプライバシーポリシーに同意したことになります。",
    },
  },
}
