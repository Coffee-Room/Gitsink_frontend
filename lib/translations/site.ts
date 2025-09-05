import type { SupportedLanguage } from "@/lib/language-detection"

export interface SiteTranslations {
  nav: {
    features: string
    howItWorks: string
    developer: string
    faq: string
    status: string
    contact: string
    login: string
    waitlist: string
  }
  waitlist: {
    title: string
    subtitle: string
    form: {
      email: string
      emailPlaceholder: string
      firstName: string
      firstNamePlaceholder: string
      lastName: string
      lastNamePlaceholder: string
      company: string
      companyPlaceholder: string
      githubUsername: string
      githubUsernamePlaceholder: string
      interestedFeatures: string
      interestedFeaturesPlaceholder: string
      submit: string
      submitting: string
    }
    success: {
      title: string
      position: string
      referralLink: string
      totalReferrals: string
      copyLink: string
      linkCopied: string
      backToForm: string
    }
    errors: {
      emailRequired: string
      emailInvalid: string
      firstNameRequired: string
      lastNameRequired: string
      featuresRequired: string
      submitError: string
    }
  }
}

export const siteTranslations: Record<SupportedLanguage, SiteTranslations> = {
  en: {
    nav: {
      features: "Features",
      howItWorks: "How It Works",
      developer: "Developers",
      faq: "FAQ",
      status: "Status",
      contact: "Contact",
      login: "Login",
      waitlist: "Join Waitlist",
    },
    waitlist: {
      title: "Join the Waitlist",
      subtitle: "Be the first to experience the future of GitHub portfolio management",
      form: {
        email: "Email Address",
        emailPlaceholder: "Enter your email address",
        firstName: "First Name",
        firstNamePlaceholder: "Enter your first name",
        lastName: "Last Name",
        lastNamePlaceholder: "Enter your last name",
        company: "Company (Optional)",
        companyPlaceholder: "Enter your company name",
        githubUsername: "GitHub Username (Optional)",
        githubUsernamePlaceholder: "Enter your GitHub username",
        interestedFeatures: "What features interest you most?",
        interestedFeaturesPlaceholder: "Tell us what you'd like to see...",
        submit: "Join Waitlist",
        submitting: "Joining...",
      },
      success: {
        title: "Welcome to the waitlist!",
        position: "You are #{{position}} on the waitlist",
        referralLink: "Your referral link:",
        totalReferrals: "Total referrals: {{count}}",
        copyLink: "Copy Link",
        linkCopied: "Link copied!",
        backToForm: "Back to form",
      },
      errors: {
        emailRequired: "Email address is required",
        emailInvalid: "Please enter a valid email address",
        firstNameRequired: "First name is required",
        lastNameRequired: "Last name is required",
        featuresRequired: "Please tell us what features interest you",
        submitError: "Something went wrong. Please try again.",
      },
    },
  },
  es: {
    nav: {
      features: "Características",
      howItWorks: "Cómo Funciona",
      developer: "Desarrolladores",
      faq: "Preguntas",
      status: "Estado",
      contact: "Contacto",
      login: "Iniciar Sesión",
      waitlist: "Lista de Espera",
    },
    waitlist: {
      title: "Únete a la Lista de Espera",
      subtitle: "Sé el primero en experimentar el futuro de la gestión de portafolios de GitHub",
      form: {
        email: "Dirección de Email",
        emailPlaceholder: "Ingresa tu dirección de email",
        firstName: "Nombre",
        firstNamePlaceholder: "Ingresa tu nombre",
        lastName: "Apellido",
        lastNamePlaceholder: "Ingresa tu apellido",
        company: "Empresa (Opcional)",
        companyPlaceholder: "Ingresa el nombre de tu empresa",
        githubUsername: "Usuario de GitHub (Opcional)",
        githubUsernamePlaceholder: "Ingresa tu usuario de GitHub",
        interestedFeatures: "¿Qué características te interesan más?",
        interestedFeaturesPlaceholder: "Cuéntanos qué te gustaría ver...",
        submit: "Unirse a la Lista",
        submitting: "Uniéndose...",
      },
      success: {
        title: "¡Bienvenido a la lista de espera!",
        position: "Eres el #{{position}} en la lista de espera",
        referralLink: "Tu enlace de referencia:",
        totalReferrals: "Referencias totales: {{count}}",
        copyLink: "Copiar Enlace",
        linkCopied: "¡Enlace copiado!",
        backToForm: "Volver al formulario",
      },
      errors: {
        emailRequired: "La dirección de email es requerida",
        emailInvalid: "Por favor ingresa un email válido",
        firstNameRequired: "El nombre es requerido",
        lastNameRequired: "El apellido es requerido",
        featuresRequired: "Por favor cuéntanos qué características te interesan",
        submitError: "Algo salió mal. Por favor intenta de nuevo.",
      },
    },
  },
  fr: {
    nav: {
      features: "Fonctionnalités",
      howItWorks: "Comment ça marche",
      developer: "Développeurs",
      faq: "FAQ",
      status: "Statut",
      contact: "Contact",
      login: "Connexion",
      waitlist: "Liste d'attente",
    },
    waitlist: {
      title: "Rejoindre la Liste d'Attente",
      subtitle: "Soyez le premier à découvrir l'avenir de la gestion de portfolio GitHub",
      form: {
        email: "Adresse Email",
        emailPlaceholder: "Entrez votre adresse email",
        firstName: "Prénom",
        firstNamePlaceholder: "Entrez votre prénom",
        lastName: "Nom",
        lastNamePlaceholder: "Entrez votre nom",
        company: "Entreprise (Optionnel)",
        companyPlaceholder: "Entrez le nom de votre entreprise",
        githubUsername: "Nom d'utilisateur GitHub (Optionnel)",
        githubUsernamePlaceholder: "Entrez votre nom d'utilisateur GitHub",
        interestedFeatures: "Quelles fonctionnalités vous intéressent le plus?",
        interestedFeaturesPlaceholder: "Dites-nous ce que vous aimeriez voir...",
        submit: "Rejoindre la Liste",
        submitting: "Inscription...",
      },
      success: {
        title: "Bienvenue dans la liste d'attente!",
        position: "Vous êtes #{{position}} sur la liste d'attente",
        referralLink: "Votre lien de parrainage:",
        totalReferrals: "Parrainages totaux: {{count}}",
        copyLink: "Copier le Lien",
        linkCopied: "Lien copié!",
        backToForm: "Retour au formulaire",
      },
      errors: {
        emailRequired: "L'adresse email est requise",
        emailInvalid: "Veuillez entrer un email valide",
        firstNameRequired: "Le prénom est requis",
        lastNameRequired: "Le nom est requis",
        featuresRequired: "Veuillez nous dire quelles fonctionnalités vous intéressent",
        submitError: "Quelque chose s'est mal passé. Veuillez réessayer.",
      },
    },
  },
  de: {
    nav: {
      features: "Funktionen",
      howItWorks: "Wie es funktioniert",
      developer: "Entwickler",
      faq: "FAQ",
      status: "Status",
      contact: "Kontakt",
      login: "Anmelden",
      waitlist: "Warteliste",
    },
    waitlist: {
      title: "Der Warteliste beitreten",
      subtitle: "Seien Sie der Erste, der die Zukunft des GitHub-Portfolio-Managements erlebt",
      form: {
        email: "E-Mail-Adresse",
        emailPlaceholder: "Geben Sie Ihre E-Mail-Adresse ein",
        firstName: "Vorname",
        firstNamePlaceholder: "Geben Sie Ihren Vornamen ein",
        lastName: "Nachname",
        lastNamePlaceholder: "Geben Sie Ihren Nachnamen ein",
        company: "Unternehmen (Optional)",
        companyPlaceholder: "Geben Sie Ihren Firmennamen ein",
        githubUsername: "GitHub-Benutzername (Optional)",
        githubUsernamePlaceholder: "Geben Sie Ihren GitHub-Benutzernamen ein",
        interestedFeatures: "Welche Funktionen interessieren Sie am meisten?",
        interestedFeaturesPlaceholder: "Sagen Sie uns, was Sie gerne sehen möchten...",
        submit: "Warteliste beitreten",
        submitting: "Beitritt...",
      },
      success: {
        title: "Willkommen auf der Warteliste!",
        position: "Sie sind #{{position}} auf der Warteliste",
        referralLink: "Ihr Empfehlungslink:",
        totalReferrals: "Gesamte Empfehlungen: {{count}}",
        copyLink: "Link kopieren",
        linkCopied: "Link kopiert!",
        backToForm: "Zurück zum Formular",
      },
      errors: {
        emailRequired: "E-Mail-Adresse ist erforderlich",
        emailInvalid: "Bitte geben Sie eine gültige E-Mail ein",
        firstNameRequired: "Vorname ist erforderlich",
        lastNameRequired: "Nachname ist erforderlich",
        featuresRequired: "Bitte sagen Sie uns, welche Funktionen Sie interessieren",
        submitError: "Etwas ist schief gelaufen. Bitte versuchen Sie es erneut.",
      },
    },
  },
  nl: {
    nav: {
      features: "Functies",
      howItWorks: "Hoe het werkt",
      developer: "Ontwikkelaars",
      faq: "Veelgestelde vragen",
      status: "Status",
      contact: "Contact",
      login: "Inloggen",
      waitlist: "Wachtlijst",
    },
    waitlist: {
      title: "Doe mee met de Wachtlijst",
      subtitle: "Wees de eerste die de toekomst van GitHub portfolio beheer ervaart",
      form: {
        email: "E-mailadres",
        emailPlaceholder: "Voer uw e-mailadres in",
        firstName: "Voornaam",
        firstNamePlaceholder: "Voer uw voornaam in",
        lastName: "Achternaam",
        lastNamePlaceholder: "Voer uw achternaam in",
        company: "Bedrijf (Optioneel)",
        companyPlaceholder: "Voer uw bedrijfsnaam in",
        githubUsername: "GitHub Gebruikersnaam (Optioneel)",
        githubUsernamePlaceholder: "Voer uw GitHub gebruikersnaam in",
        interestedFeatures: "Welke functies interesseren u het meest?",
        interestedFeaturesPlaceholder: "Vertel ons wat u graag zou willen zien...",
        submit: "Doe mee met Wachtlijst",
        submitting: "Deelnemen...",
      },
      success: {
        title: "Welkom op de wachtlijst!",
        position: "U bent #{{position}} op de wachtlijst",
        referralLink: "Uw verwijzingslink:",
        totalReferrals: "Totale verwijzingen: {{count}}",
        copyLink: "Link kopiëren",
        linkCopied: "Link gekopieerd!",
        backToForm: "Terug naar formulier",
      },
      errors: {
        emailRequired: "E-mailadres is vereist",
        emailInvalid: "Voer een geldig e-mailadres in",
        firstNameRequired: "Voornaam is vereist",
        lastNameRequired: "Achternaam is vereist",
        featuresRequired: "Vertel ons welke functies u interesseren",
        submitError: "Er is iets misgegaan. Probeer het opnieuw.",
      },
    },
  },
  ja: {
    nav: {
      features: "機能",
      howItWorks: "仕組み",
      developer: "開発者",
      faq: "よくある質問",
      status: "ステータス",
      contact: "お問い合わせ",
      login: "ログイン",
      waitlist: "ウェイトリスト",
    },
    waitlist: {
      title: "ウェイトリストに参加",
      subtitle: "GitHubポートフォリオ管理の未来を最初に体験してください",
      form: {
        email: "メールアドレス",
        emailPlaceholder: "メールアドレスを入力してください",
        firstName: "名",
        firstNamePlaceholder: "名を入力してください",
        lastName: "姓",
        lastNamePlaceholder: "姓を入力してください",
        company: "会社名（任意）",
        companyPlaceholder: "会社名を入力してください",
        githubUsername: "GitHubユーザー名（任意）",
        githubUsernamePlaceholder: "GitHubユーザー名を入力してください",
        interestedFeatures: "最も興味のある機能は何ですか？",
        interestedFeaturesPlaceholder: "ご希望の機能をお聞かせください...",
        submit: "ウェイトリストに参加",
        submitting: "参加中...",
      },
      success: {
        title: "ウェイトリストへようこそ！",
        position: "あなたはウェイトリストの#{{position}}番目です",
        referralLink: "あなたの紹介リンク：",
        totalReferrals: "総紹介数：{{count}}",
        copyLink: "リンクをコピー",
        linkCopied: "リンクがコピーされました！",
        backToForm: "フォームに戻る",
      },
      errors: {
        emailRequired: "メールアドレスは必須です",
        emailInvalid: "有効なメールアドレスを入力してください",
        firstNameRequired: "名は必須です",
        lastNameRequired: "姓は必須です",
        featuresRequired: "興味のある機能をお聞かせください",
        submitError: "何かが間違っています。もう一度お試しください。",
      },
    },
  },
}
