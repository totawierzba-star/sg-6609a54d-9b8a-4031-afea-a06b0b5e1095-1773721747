import { Locale } from "./i18n";

export interface Translations {
  common: {
    siteName: string;
    siteDescription: string;
    readMore: string;
    learnMore: string;
    backToHome: string;
    articles: string;
    author: string;
  };
  nav: {
    home: string;
    yourRights: string;
    canceledFlight: string;
    cancelledFlight: string;
    delayedFlight: string;
    employerCompensation: string;
    ticketRights: string;
    compensation: string;
    businessCompensation: string;
    about: string;
    articles: string;
  };
  cta: {
    checkCompensation: string;
  };
  home: {
    hero: {
      title: string;
      subtitle: string;
      cta1: string;
      cta2: string;
    };
    intro: {
      title: string;
      description: string;
    };
    features: {
      title: string;
      feature1: {
        title: string;
        description: string;
      };
      feature2: {
        title: string;
        description: string;
      };
      feature3: {
        title: string;
        description: string;
      };
    };
    cta: {
      title: string;
      description: string;
      button: string;
    };
  };
  footer: {
    tagline: string;
    rights: string;
    madeWith: string;
  };
}

export const translations: Record<Locale, Translations> = {
  pl: {
    common: {
      siteName: "BiznesLot.info",
      siteDescription: "Portal o prawach pasażerów lotniczych w podróżach służbowych",
      readMore: "Czytaj więcej",
      learnMore: "Dowiedz się więcej",
      backToHome: "Powrót do strony głównej",
      articles: "Artykuły",
      author: "O autorze",
    },
    nav: {
      home: "Start",
      yourRights: "Twoje prawa",
      canceledFlight: "Anulowany lot",
      cancelledFlight: "Anulowany lot",
      delayedFlight: "Opóźniony lot",
      employerCompensation: "Pracodawca a odszkodowanie",
      ticketRights: "Bilet firmowy - prawa",
      compensation: "Odszkodowanie",
      businessCompensation: "Odszkodowanie lot służbowy",
      about: "O autorze",
      articles: "Artykuły",
    },
    cta: {
      checkCompensation: "Sprawdź odszkodowanie",
    },
    home: {
      hero: {
        title: "Poznaj swoje prawa podczas podróży służbowych",
        subtitle: "Kompleksowy przewodnik po prawach pasażerów lotniczych w kontekście delegacji i podróży biznesowych.",
        cta1: "Poznaj swoje prawa",
        cta2: "Anulowany lot w delegacji",
      },
      intro: {
        title: "Dlaczego warto znać swoje prawa?",
        description: "Podróże służbowe to nie tylko wyzwania logistyczne, ale także prawne. Poznaj swoje uprawnienia i dowiedz się, jak skutecznie dochodzić swoich praw w przypadku problemów z lotami.",
      },
      features: {
        title: "Co znajdziesz na BiznesLot.info?",
        feature1: {
          title: "Pracodawca a odszkodowanie",
          description: "Dowiedz się, kto ma prawo do odszkodowania za lot służbowy i jak prawidłowo rozliczyć rekompensatę z pracodawcą.",
        },
        feature2: {
          title: "Anulowany lub opóźniony lot",
          description: "Poznaj swoje prawa w przypadku anulowanego lub opóźnionego lotu podczas delegacji służbowej.",
        },
        feature3: {
          title: "Bilet firmowy - Twoje prawa",
          description: "Sprawdź, jakie masz uprawnienia jako pasażer posiadający bilet wykupiony przez pracodawcę.",
        },
      },
      cta: {
        title: "Gotowy, by poznać swoje prawa?",
        description: "Zacznij od przeczytania naszego kompleksowego przewodnika po prawach pasażerów w podróżach służbowych.",
        button: "Poznaj swoje prawa",
      },
    },
    footer: {
      tagline: "Twój przewodnik po prawach pasażerów w podróżach służbowych",
      rights: "Wszelkie prawa zastrzeżone.",
      madeWith: "Stworzone z",
    },
  },
  en: {
    common: {
      siteName: "BusinessFlight.info",
      siteDescription: "Portal about passenger rights in business travel",
      readMore: "Read more",
      learnMore: "Learn more",
      backToHome: "Back to home",
      articles: "Articles",
      author: "About the author",
    },
    nav: {
      home: "Home",
      yourRights: "Your rights",
      canceledFlight: "Canceled flight",
      cancelledFlight: "Cancelled flight",
      delayedFlight: "Delayed flight",
      employerCompensation: "Employer & compensation",
      ticketRights: "Corporate ticket rights",
      compensation: "Compensation",
      businessCompensation: "Business flight compensation",
      about: "About",
      articles: "Articles",
    },
    cta: {
      checkCompensation: "Check compensation",
    },
    home: {
      hero: {
        title: "Know Your Rights During Business Travel",
        subtitle: "Comprehensive guide to airline passenger rights in the context of business trips and corporate travel.",
        cta1: "Know your rights",
        cta2: "Canceled business flight",
      },
      intro: {
        title: "Why should you know your rights?",
        description: "Business travel brings not only logistical challenges but also legal ones. Learn about your entitlements and how to effectively claim your rights in case of flight issues.",
      },
      features: {
        title: "What you'll find on BusinessFlight.info?",
        feature1: {
          title: "Employer & Compensation",
          description: "Learn who is entitled to compensation for a business flight and how to properly settle the reimbursement with your employer.",
        },
        feature2: {
          title: "Canceled or Delayed Flight",
          description: "Know your rights in case of a canceled or delayed flight during a business trip.",
        },
        feature3: {
          title: "Corporate Ticket Rights",
          description: "Check what entitlements you have as a passenger with a ticket purchased by your employer.",
        },
      },
      cta: {
        title: "Ready to know your rights?",
        description: "Start by reading our comprehensive guide to passenger rights in business travel.",
        button: "Know your rights",
      },
    },
    footer: {
      tagline: "Your guide to passenger rights in business travel",
      rights: "All rights reserved.",
      madeWith: "Made with",
    },
  },
};

export function getTranslations(locale: Locale): Translations {
  return translations[locale];
}