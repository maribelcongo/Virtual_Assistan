import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      /* Navbar */
      navbar: {
        home: "Home",
        about: "About Me",
        services: "Services",
        work: "Work with Me",
        contact: "Contact",
      },

      /* Home */
      home: {
        role: "Virtual Assistant & Frontend Developer",
        summary:
          "I help entrepreneurs and businesses manage their workload by handling administrative tasks and customer service remotely, so they can focus on growing their business.",
        button: "Learn more about me",
      },

      /* About */
      about: {
        title: "About Me",
        text1:
          "I am a Virtual Assistant with experience in administrative support and remote customer service. My goal is to help people and businesses optimize their time and increase productivity by delegating administrative tasks and automating projects.",
        text2:
          "I specialize in organizing processes, managing communications, and keeping everything in order so my clients can focus on growing their business. Every project is an opportunity to bring efficiency, clarity, and trust.",
      },

      /* Services */
      services: {
        title: "My Services",
        subtitle:
          "These are the services I offer as a Virtual Assistant and Frontend Developer to help you save time and grow your business.",
        virtual: {
          title: "Virtual Assistance",
          item1: {
            title: "Email Management",
            text: "Organizing inboxes, replying emails, scheduling appointments and reminders.",
          },
          item2: {
            title: "Calendar Management",
            text: "Managing schedules, meetings, travel arrangements, and reminders.",
          },
          item3: {
            title: "Task Coordination (Trello/Notion)",
            text: "Supervising and organizing your projects to ensure smooth workflow.",
          },
          item4: {
            title: "Research & Data Collection",
            text: "Online research, data gathering, and creating clear and useful reports.",
          },
          item5: {
            title: "Customer Support",
            text: "Responding to inquiries via email, live chat or phone, and solving issues.",
          },
          item6: {
            title: "Administrative Support",
            text: "Creating and editing documents, preparing presentations, and transcribing files.",
          },
        },
        social: {
          title: "Social Media Management",
          item1: {
            title: "Content Design & Editing",
            text: "Creating attractive posts in Canva, tailored to your brand.",
          },
          item2: {
            title: "Post Scheduling",
            text: "Organizing an editorial calendar and automatic posting on social media.",
          },
          item3: {
            title: "Community Engagement",
            text: "Responding to comments and messages, encouraging audience interaction.",
          },
          item4: {
            title: "Metrics Analysis",
            text: "Monitoring results to optimize strategies and improve reach.",
          },
        },
        frontend: {
          title: "Front-End Development",
          item1: {
            title: "HTML, CSS, JS & React",
            text: "Building dynamic and visually appealing web pages.",
          },
          item2: {
            title: "Firebase Integration & Performance",
            text: "Connecting databases and improving site speed and efficiency.",
          },
          item3: {
            title: "Responsive & Modern Design",
            text: "Perfect adaptation for mobile, tablet, and desktop with professional aesthetics.",
          },
          item4: {
            title: "UX Focused on Conversion",
            text: "Intuitive structure and navigation to increase interaction and results.",
          },
        },
      },

      /* Work */
      work: {
        title: "Why work with me",
        subtitle:
          "I’m Maribel, Virtual Assistant and Frontend Developer, committed to providing solutions that help your business grow. I’m always learning new tools to offer you the best quality service.",
        card1: {
          title: "Responsibility",
          text: "I meet deadlines and deliver quality work, ensuring reliable results.",
        },
        card2: {
          title: "Attention to detail",
          text: "I take care of every detail so your project is perfect, without errors or oversights.",
        },
        card3: {
          title: "Clear communication",
          text: "I keep constant contact and explain everything simply and effectively.",
        },
        card4: {
          title: "Commitment",
          text: "I get involved in your project as if it were mine, always seeking the best results.",
        },
      },

      /* Contact */
      contact: {
        name: "Maribel Congo",
        role: "Virtual Assistant & Frontend Developer",
        text: "My goal is to help you optimize your time, improve productivity, and provide digital solutions that grow your business.",
        title: "Contact Me",
      },
    },
  },

  es: {
    translation: {
      /* Navbar */
      navbar: {
        home: "Inicio",
        about: "Sobre mí",
        services: "Mis servicios",
        work: "Trabaja conmigo",
        contact: "Contacto",
      },

      /* Home */
      home: {
        role: "Asistente Virtual & Desarrolladora Frontend",
        summary:
          "Ayudo a emprendedores y empresas a liberar su carga de trabajo gestionando tareas administrativas y atención al cliente de manera remota, para que puedan enfocarse en hacer crecer su negocio.",
        button: "Conóceme más",
      },

      /* About */
      about: {
        title: "Sobre mí",
        text1:
          "Soy una Asistente Virtual con experiencia en soporte administrativo y atención al cliente de manera remota. Mi objetivo es ayudar a personas y empresas a optimizar su tiempo y aumentar su productividad mediante la delegación de tareas administrativas y la automatización de proyectos.",
        text2:
          "Me especializo en organizar procesos, gestionar comunicaciones y mantener todo en orden para que mis clientes puedan enfocarse en hacer crecer su negocio. Cada proyecto es una oportunidad para aportar eficiencia, claridad y confianza.",
      },

      /* Services */
      services: {
        title: "Mis Servicios",
        subtitle:
          "Estos son los servicios que ofrezco como Asistente Virtual y Desarrolladora Front-End para ayudarte a ahorrar tiempo y hacer crecer tu negocio.",
        virtual: {
          title: "Asistencia Virtual",
          item1: {
            title: "Gestión de correos electrónicos",
            text: "Organización de bandejas de entrada, respuesta de correos electrónicos, programación de citas y recordatorios.",
          },
          item2: {
            title: "Administración de agenda",
            text: "Gestión de horarios, programación de reuniones, coordinación de viajes y reservas, y envío de recordatorios de citas.",
          },
          item3: {
            title: "Coordinación de tareas en Trello / Notion",
            text: "Supervisión y organización de tus proyectos para que todo fluya sin contratiempos.",
          },
          item4: {
            title: "Investigación y recopilación de datos",
            text: "Búsqueda de información en línea, recopilación de datos y elaboración de informes claros y útiles.",
          },
          item5: {
            title: "Atención al cliente",
            text: "Respuesta a consultas por correo electrónico, chat en vivo o teléfono, seguimiento de reclamos y resolución de problemas.",
          },
          item6: {
            title: "Soporte administrativo",
            text: "Creación y edición de documentos, preparación de presentaciones y transcripción de archivos.",
          },
        },
        social: {
          title: "Gestión de Redes Sociales",
          item1: {
            title: "Diseño y edición de contenido visual",
            text: "Creación de publicaciones atractivas en Canva, adaptadas a tu marca.",
          },
          item2: {
            title: "Programación de publicaciones",
            text: "Organización de un calendario editorial y publicación automática en redes.",
          },
          item3: {
            title: "Seguimiento de mensajes y comunidad",
            text: "Respuesta a comentarios y mensajes, fomentando la interacción con tu audiencia.",
          },
          item4: {
            title: "Análisis de métricas y rendimiento",
            text: "Monitoreo de resultados para optimizar estrategias y mejorar alcance.",
          },
        },
        frontend: {
          title: "Desarrollo Front-End",
          item1: {
            title: "Desarrollo con HTML, CSS, JavaScript y React",
            text: "Construcción de páginas web dinámicas y atractivas visualmente.",
          },
          item2: {
            title: "Integración con Firebase y optimización de rendimiento",
            text: "Conexión con bases de datos y mejora de velocidad y eficiencia del sitio.",
          },
          item3: {
            title: "Diseño responsive y moderno",
            text: "Adaptación perfecta a móviles, tablets y escritorio con estética profesional.",
          },
          item4: {
            title: "Experiencia de usuario enfocada en conversión",
            text: "Estructura y navegación intuitiva para aumentar la interacción y resultados.",
          },
        },
      },

      /* Work */
      work: {
        title: "Por qué trabajar conmigo",
        subtitle:
          "Soy Maribel, Asistente Virtual y Desarrolladora Front-End, comprometida en aportar soluciones que hagan crecer tu negocio. Siempre me mantengo en constante aprendizaje, adquiriendo nuevas herramientas para brindarte un servicio de la mejor calidad.",
        card1: {
          title: "Responsabilidad",
          text: "Cumplo los plazos y entrego trabajo de calidad, garantizando resultados confiables.",
        },
        card2: {
          title: "Atención al detalle",
          text: "Cuido cada detalle para que tu proyecto quede perfecto, sin errores ni descuidos.",
        },
        card3: {
          title: "Comunicación clara",
          text: "Mantengo un contacto constante y explico todo de manera simple y efectiva.",
        },
        card4: {
          title: "Compromiso",
          text: "Me involucro en tu proyecto como si fuera mío, buscando siempre los mejores resultados.",
        },
      },

      /* Contact */
      contact: {
        name: "Maribel Congo",
        role: "Asistente Virtual & Desarrolladora Front-End",
        text: "Mi objetivo es ayudarte a optimizar tu tiempo, mejorar tu productividad y aportar soluciones digitales que hagan crecer tu negocio.",
        title: "Contáctame",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "es",
  interpolation: { escapeValue: false },
});

export default i18n;
