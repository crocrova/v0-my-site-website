export interface Prospect {
  nombre: string;
  nicho: string;
  ciudad: string;
  rating: number;
  resenas: number;
  telefono: string;
  tiene_web: string;
  calidad_web: string;
  web_status: string;
  website: string;
  google_maps: string;
  tipo_presencia_digital: string;
  fit_llamada_manana: string;
  contacto_probable: string;
  observacion_clave: string;
  beneficio_principal: string;
  apertura_1linea: string;
  cta_sugerido: string;
  objecion_probable: string;
  respuesta_breve: string;
  fortalezas: string[];
  problemas: string[];
  beneficios: string[];
  horario_nota: string;
  horario_grupo: number;
  horario_label: string;
  prioridad_manana_orden: number;
  score: number;
}

export const prospects: Prospect[] = [
  {
    "nombre": "Restaurante Ñekas",
    "nicho": "cafe",
    "ciudad": "CSL",
    "rating": 4.9,
    "resenas": 376,
    "telefono": "+52 624 218 4510",
    "tiene_web": "no",
    "calidad_web": "sin web",
    "web_status": "NO TIENE WEB",
    "website": "",
    "google_maps": "https://www.google.com/maps/place/?q=place_id:ChIJ_4mbOPRKr4YRwo5WBPbUc7Y",
    "tipo_presencia_digital": "sin web",
    "fit_llamada_manana": "alto",
    "contacto_probable": "gerente o dueño (preguntar por encargado)",
    "observacion_clave": "Con 376 reseñas y 4.9⭐ ya tienen reputación — pero sin web no la están capitalizando en Google.",
    "beneficio_principal": "Menú digital + reservaciones = más mesas llenas.",
    "apertura_1linea": "Hola, revisé su presencia digital y vi una oportunidad clara de mejora.",
    "cta_sugerido": "¿Te puedo mandar un análisis breve y una propuesta por WhatsApp?",
    "objecion_probable": "No necesitamos web, nos va bien con redes.",
    "respuesta_breve": "Entiendo, las redes funcionan bien. Pero cada turista que busca en Google y no los encuentra se va a otro lado. La web no reemplaza redes — las complementa.",
    "fortalezas": [
      "Rating excepcional (4.9⭐)",
      "376 reseñas = buena reputación"
    ],
    "problemas": [
      "Sin sitio web — invisible en búsquedas de Google",
      "Depende 100% de redes y Maps"
    ],
    "beneficios": [
      "Menú digital accesible 24/7",
      "Reservaciones directas sin intermediarios",
      "Turistas lo encuentran ANTES de llegar a Cabo"
    ],
    "horario_nota": "⚠️ PENDIENTE — cierran 2pm, llamar temprano",
    "horario_grupo": 2,
    "horario_label": "☀️ MEDIODÍA (11am-2pm)",
    "prioridad_manana_orden": 1,
    "score": 67.05498680261049
  },
  {
    "nombre": "Barbershop The Scissors Cabo San Lucas",
    "nicho": "barber shop",
    "ciudad": "CSL",
    "rating": 4.8,
    "resenas": 452,
    "telefono": "+52 624 220 9208",
    "tiene_web": "no",
    "calidad_web": "web muy básica",
    "web_status": "SOLO REDES (sin web propia)",
    "website": "https://www.facebook.com/barberiathescissors",
    "google_maps": "https://www.google.com/maps/place/?q=place_id:ChIJuTCbFfdKr4YR1gibC5b4Y9c",
    "tipo_presencia_digital": "solo redes",
    "fit_llamada_manana": "alto",
    "contacto_probable": "dueño o encargado directo",
    "observacion_clave": "Solo redes sociales con 452 reseñas. Una web propia les daría presencia en Google y canal directo.",
    "beneficio_principal": "Galería de cortes + agenda por WhatsApp = más clientes nuevos.",
    "apertura_1linea": "Hola, revisé su presencia digital y vi una oportunidad clara de mejora.",
    "cta_sugerido": "¿Te puedo mandar un análisis breve y una propuesta por WhatsApp?",
    "objecion_probable": "No tenemos presupuesto.",
    "respuesta_breve": "Entiendo. Arrancamos desde $900 USD y en 10 días tienen su sitio. Es una inversión que se paga sola con los primeros clientes que llegan por Google.",
    "fortalezas": [
      "Rating excepcional (4.8⭐)",
      "452 reseñas = buena reputación"
    ],
    "problemas": [
      "Sin sitio web propio — solo redes sociales",
      "No aparece en búsquedas de Google"
    ],
    "beneficios": [
      "Galería de trabajos que genera confianza",
      "Agenda de citas online / WhatsApp directo",
      "Se diferencia del 90% de barberías sin web"
    ],
    "horario_nota": "⚠️ PENDIENTE — llamar 4pm",
    "horario_grupo": 3,
    "horario_label": "🌤️ TARDE (3-6pm)",
    "prioridad_manana_orden": 2,
    "score": 72.34567446319471
  },
  {
    "nombre": "Las Guacamayas Cabo San Lucas",
    "nicho": "restaurant",
    "ciudad": "CSL",
    "rating": 4.4,
    "resenas": 2273,
    "telefono": "+52 624 120 7804",
    "tiene_web": "no",
    "calidad_web": "web muy básica",
    "web_status": "SOLO REDES (sin web propia)",
    "website": "http://www.facebook.com/tacosguacamayas",
    "google_maps": "https://www.google.com/maps/place/?q=place_id:ChIJYaDPb-VKr4YRfZPuS6AJHi8",
    "tipo_presencia_digital": "solo redes",
    "fit_llamada_manana": "alto",
    "contacto_probable": "gerente o dueño (preguntar por encargado)",
    "observacion_clave": "2273 reseñas y solo redes sociales. Dependen 100% de Instagram/Maps — un sitio propio les da control.",
    "beneficio_principal": "Menú digital + reservaciones = más mesas llenas.",
    "apertura_1linea": "Hola, revisé su presencia digital y vi una oportunidad clara de mejora.",
    "cta_sugerido": "¿Te puedo mandar un análisis breve y una propuesta por WhatsApp?",
    "objecion_probable": "No tenemos presupuesto.",
    "respuesta_breve": "Entiendo. Arrancamos desde $900 USD y en 10 días tienen su sitio. Es una inversión que se paga sola con los primeros clientes que llegan por Google.",
    "fortalezas": [
      "Rating sólido (4.4⭐)",
      "2,273 reseñas = negocio muy establecido"
    ],
    "problemas": [
      "Sin sitio web propio — solo redes sociales",
      "No aparece en búsquedas de Google"
    ],
    "beneficios": [
      "Menú digital accesible 24/7",
      "Reservaciones directas sin intermediarios",
      "Turistas lo encuentran ANTES de llegar a Cabo"
    ],
    "horario_nota": "⚠️ PENDIENTE — marcar después de las 4pm",
    "horario_grupo": 3,
    "horario_label": "🌤️ TARDE (3-6pm)",
    "prioridad_manana_orden": 3,
    "score": 72.00696562495119
  },
  {
    "nombre": "La Casa Country CSL",
    "nicho": "restaurant",
    "ciudad": "CSL",
    "rating": 4.7,
    "resenas": 1209,
    "telefono": "+52 624 151 9070",
    "tiene_web": "no",
    "calidad_web": "sin web",
    "web_status": "NO TIENE WEB",
    "website": "",
    "google_maps": "https://www.google.com/maps/place/?q=place_id:ChIJhy34GftKr4YReHNt0eBSY5k",
    "tipo_presencia_digital": "sin web",
    "fit_llamada_manana": "alto",
    "contacto_probable": "gerente o dueño (preguntar por encargado)",
    "observacion_clave": "Tienen 1209 reseñas y 4.7⭐ pero CERO presencia web. Cada búsqueda de 'restaurant' en Cabo donde no aparecen es dinero perdido.",
    "beneficio_principal": "Menú digital + reservaciones = más mesas llenas.",
    "apertura_1linea": "Hola, revisé su presencia digital y vi una oportunidad clara de mejora.",
    "cta_sugerido": "¿Te puedo mandar un análisis breve y una propuesta por WhatsApp?",
    "objecion_probable": "No necesitamos web, nos va bien con redes.",
    "respuesta_breve": "Entiendo, las redes funcionan bien. Pero cada turista que busca en Google y no los encuentra se va a otro lado. La web no reemplaza redes — las complementa.",
    "fortalezas": [
      "Buen rating (4.7⭐)",
      "1,209 reseñas = negocio muy establecido"
    ],
    "problemas": [
      "Sin sitio web — invisible en búsquedas de Google",
      "Depende 100% de redes y Maps"
    ],
    "beneficios": [
      "Menú digital accesible 24/7",
      "Reservaciones directas sin intermediarios",
      "Turistas lo encuentran ANTES de llegar a Cabo"
    ],
    "horario_nota": "⚠️ PENDIENTE — llamar en la mañana temprano",
    "horario_grupo": 3,
    "horario_label": "🌤️ TARDE (3-6pm)",
    "prioridad_manana_orden": 4,
    "score": 71.35847959788953
  },
  {
    "nombre": "Agua Salada",
    "nicho": "restaurant",
    "ciudad": "CSL",
    "rating": 4.5,
    "resenas": 1657,
    "telefono": "+52 624 144 4665",
    "tiene_web": "no",
    "calidad_web": "sin web",
    "web_status": "NO TIENE WEB",
    "website": "",
    "google_maps": "https://www.google.com/maps/place/?q=place_id:ChIJUw2IMeRKr4YR4PHGs_MFnpI",
    "tipo_presencia_digital": "sin web",
    "fit_llamada_manana": "alto",
    "contacto_probable": "gerente o dueño (preguntar por encargado)",
    "observacion_clave": "Tienen 1657 reseñas y 4.5⭐ pero CERO presencia web. Cada búsqueda de 'restaurant' en Cabo donde no aparecen es dinero perdido.",
    "beneficio_principal": "Menú digital + reservaciones = más mesas llenas.",
    "apertura_1linea": "Hola, revisé su presencia digital y vi una oportunidad clara de mejora.",
    "cta_sugerido": "¿Te puedo mandar un análisis breve y una propuesta por WhatsApp?",
    "objecion_probable": "No necesitamos web, nos va bien con redes.",
    "respuesta_breve": "Entiendo, las redes funcionan bien. Pero cada turista que busca en Google y no los encuentra se va a otro lado. La web no reemplaza redes — las complementa.",
    "fortalezas": [
      "Buen rating (4.5⭐)",
      "1,657 reseñas = negocio muy establecido"
    ],
    "problemas": [
      "Sin sitio web — invisible en búsquedas de Google",
      "Depende 100% de redes y Maps"
    ],
    "beneficios": [
      "Menú digital accesible 24/7",
      "Reservaciones directas sin intermediarios",
      "Turistas lo encuentran ANTES de llegar a Cabo"
    ],
    "horario_nota": "⚠️ PENDIENTE — no contestó ayer, reintentar",
    "horario_grupo": 3,
    "horario_label": "🌤️ TARDE (3-6pm)",
    "prioridad_manana_orden": 5,
    "score": 71.35743807841953
  },
  {
    "nombre": "Aqua Spa Cabo | Masajes",
    "nicho": "spa",
    "ciudad": "SJC",
    "rating": 5,
    "resenas": 162,
    "telefono": "+52 624 110 3312",
    "tiene_web": "no",
    "calidad_web": "web muy básica",
    "web_status": "SOLO REDES (sin web propia)",
    "website": "https://www.facebook.com/share/1enfyabx9c",
    "google_maps": "Ver mapa",
    "tipo_presencia_digital": "solo redes",
    "fit_llamada_manana": "alto",
    "contacto_probable": "dueño o encargado directo",
    "observacion_clave": "Solo redes sociales con 162 reseñas. Una web propia les daría presencia en Google y canal directo.",
    "beneficio_principal": "Más confianza profesional = más citas de pacientes.",
    "apertura_1linea": "Hola, revisé su presencia digital y vi una oportunidad clara de mejora.",
    "cta_sugerido": "¿Te puedo mandar un análisis breve y una propuesta por WhatsApp?",
    "objecion_probable": "No tenemos presupuesto.",
    "respuesta_breve": "Entiendo. Arrancamos desde $900 USD y en 10 días tienen su sitio. Es una inversión que se paga sola con los primeros clientes que llegan por Google.",
    "fortalezas": [
      "Rating excepcional (5.0⭐)",
      "162 reseñas = base de clientes activa"
    ],
    "problemas": [
      "Sin sitio web propio — solo redes sociales",
      "No aparece en búsquedas de Google"
    ],
    "beneficios": [
      "Genera confianza médica profesional",
      "Pacientes internacionales lo encuentran en Google",
      "Agenda de citas + info de tratamientos"
    ],
    "horario_nota": "",
    "horario_grupo": 1,
    "horario_label": "🌅 MAÑANA (8-11am)",
    "prioridad_manana_orden": 6,
    "score": 68.43798167616191
  },
  {
    "nombre": "Consultorio Dental Dra. Mariana Garduño",
    "nicho": "dental clinic",
    "ciudad": "CSL",
    "rating": 5,
    "resenas": 153,
    "telefono": "+52 624 122 4499",
    "tiene_web": "no",
    "calidad_web": "sin web",
    "web_status": "NO TIENE WEB",
    "website": "",
    "google_maps": "https://www.google.com/maps/place/?q=place_id:ChIJNVuBMIc1r4YRxCgKWXR2-nw",
    "tipo_presencia_digital": "sin web",
    "fit_llamada_manana": "alto",
    "contacto_probable": "recepción → pedir hablar con doctor/dueño",
    "observacion_clave": "Con 153 reseñas y 5.0⭐ ya tienen reputación — pero sin web no la están capitalizando en Google.",
    "beneficio_principal": "Más confianza profesional = más citas de pacientes.",
    "apertura_1linea": "Hola, revisé su presencia digital y vi una oportunidad clara de mejora.",
    "cta_sugerido": "¿Te puedo mandar un análisis breve y una propuesta por WhatsApp?",
    "objecion_probable": "No necesitamos web, nos va bien con redes.",
    "respuesta_breve": "Entiendo, las redes funcionan bien. Pero cada turista que busca en Google y no los encuentra se va a otro lado. La web no reemplaza redes — las complementa.",
    "fortalezas": [
      "Rating excepcional (5.0⭐)",
      "153 reseñas = base de clientes activa"
    ],
    "problemas": [
      "Sin sitio web — invisible en búsquedas de Google",
      "Depende 100% de redes y Maps"
    ],
    "beneficios": [
      "Genera confianza médica profesional",
      "Pacientes internacionales lo encuentran en Google",
      "Agenda de citas + info de tratamientos"
    ],
    "horario_nota": "",
    "horario_grupo": 1,
    "horario_label": "🌅 MAÑANA (8-11am)",
    "prioridad_manana_orden": 7,
    "score": 68.15218960696217
  },
  {
    "nombre": "Dr Gilberto Inzunza Salazar Surgeon Anti-aging Wellness & Hair Transplant FUE",
    "nicho": "cosmetic surgeon",
    "ciudad": "SJC",
    "rating": 5,
    "resenas": 141,
    "telefono": "+52 624 220 3700",
    "tiene_web": "no",
    "calidad_web": "web muy básica",
    "web_status": "SOLO REDES (sin web propia)",
    "website": "https://instagram.com/drgilbertoinzunzas?r=nametag",
    "google_maps": "Ver mapa",
    "tipo_presencia_digital": "solo redes",
    "fit_llamada_manana": "alto",
    "contacto_probable": "recepción → pedir hablar con doctor/dueño",
    "observacion_clave": "Solo redes sociales con 141 reseñas. Una web propia les daría presencia en Google y canal directo.",
    "beneficio_principal": "Más confianza profesional = más citas de pacientes.",
    "apertura_1linea": "Hola, revisé su presencia digital y vi una oportunidad clara de mejora.",
    "cta_sugerido": "¿Te puedo mandar un análisis breve y una propuesta por WhatsApp?",
    "objecion_probable": "No tenemos presupuesto.",
    "respuesta_breve": "Entiendo. Arrancamos desde $900 USD y en 10 días tienen su sitio. Es una inversión que se paga sola con los primeros clientes que llegan por Google.",
    "fortalezas": [
      "Rating excepcional (5.0⭐)",
      "141 reseñas = base de clientes activa"
    ],
    "problemas": [
      "Sin sitio web propio — solo redes sociales",
      "No aparece en búsquedas de Google"
    ],
    "beneficios": [
      "Genera confianza médica profesional",
      "Pacientes internacionales lo encuentran en Google",
      "Agenda de citas + info de tratamientos"
    ],
    "horario_nota": "",
    "horario_grupo": 1,
    "horario_label": "🌅 MAÑANA (8-11am)",
    "prioridad_manana_orden": 8,
    "score": 67.74379945189085
  },
  {
    "nombre": "Dr. David Mejia Camacho",
    "nicho": "cosmetic surgeon",
    "ciudad": "CSL",
    "rating": 5,
    "resenas": 358,
    "telefono": "+52 624 105 0404",
    "tiene_web": "sí",
    "calidad_web": "web desactualizada",
    "web_status": "WEB DESACTUALIZADA",
    "website": "http://pediatramejia.com",
    "google_maps": "https://www.google.com/maps/place/?q=place_id:ChIJXaDUfftKr4YRt2PdvsHKtik",
    "tipo_presencia_digital": "web propia desactualizada",
    "fit_llamada_manana": "alto",
    "contacto_probable": "recepción → pedir hablar con doctor/dueño",
    "observacion_clave": "Su web está desactualizada. Da una primera impresión que no corresponde con sus 5.0⭐ y 358 reseñas.",
    "beneficio_principal": "Más confianza profesional = más citas de pacientes.",
    "apertura_1linea": "Hola, revisé su presencia digital y vi una oportunidad clara de mejora.",
    "cta_sugerido": "¿Te puedo mandar un análisis breve y una propuesta por WhatsApp?",
    "objecion_probable": "Ya tenemos web.",
    "respuesta_breve": "Sí, vi su web. El tema es que no refleja las 5.0⭐ que tienen. Un turista ve la web y no siente la misma experiencia. Un rediseño cambia eso.",
    "fortalezas": [
      "Rating excepcional (5.0⭐)",
      "358 reseñas = buena reputación"
    ],
    "problemas": [
      "Web desactualizada — da mala primera impresión",
      "Info incorrecta o incompleta"
    ],
    "beneficios": [
      "Genera confianza médica profesional",
      "Pacientes internacionales lo encuentran en Google",
      "Agenda de citas + info de tratamientos"
    ],
    "horario_nota": "",
    "horario_grupo": 1,
    "horario_label": "🌅 MAÑANA (8-11am)",
    "prioridad_manana_orden": 9,
    "score": 67.4026649320035
  },
  {
    "nombre": "Zafíro Spa",
    "nicho": "spa",
    "ciudad": "SJC",
    "rating": 4.8,
    "resenas": 114,
    "telefono": "+52 624 157 9539",
    "tiene_web": "no",
    "calidad_web": "sin web",
    "web_status": "NO TIENE WEB",
    "website": "",
    "google_maps": "Ver mapa",
    "tipo_presencia_digital": "sin web",
    "fit_llamada_manana": "alto",
    "contacto_probable": "dueño o encargado directo",
    "observacion_clave": "Con 114 reseñas y 4.8⭐ ya tienen reputación — pero sin web no la están capitalizando en Google.",
    "beneficio_principal": "Más confianza profesional = más citas de pacientes.",
    "apertura_1linea": "Hola, revisé su presencia digital y vi una oportunidad clara de mejora.",
    "cta_sugerido": "¿Te puedo mandar un análisis breve y una propuesta por WhatsApp?",
    "objecion_probable": "No necesitamos web, nos va bien con redes.",
    "respuesta_breve": "Entiendo, las redes funcionan bien. Pero cada turista que busca en Google y no los encuentra se va a otro lado. La web no reemplaza redes — las complementa.",
    "fortalezas": [
      "Rating excepcional (4.8⭐)",
      "114 reseñas = base de clientes activa"
    ],
    "problemas": [
      "Sin sitio web — invisible en búsquedas de Google",
      "Depende 100% de redes y Maps"
    ],
    "beneficios": [
      "Genera confianza médica profesional",
      "Pacientes internacionales lo encuentran en Google",
      "Agenda de citas + info de tratamientos"
    ],
    "horario_nota": "",
    "horario_grupo": 1,
    "horario_label": "🌅 MAÑANA (8-11am)",
    "prioridad_manana_orden": 10,
    "score": 65.73375255229358
  },
  {
    "nombre": "Ronival",
    "nicho": "real estate agency",
    "ciudad": "CSL",
    "rating": 4.9,
    "resenas": 270,
    "telefono": "+52 624 227 5766",
    "tiene_web": "sí",
    "calidad_web": "sin web",
    "web_status": "SOLO REDES (sin web propia)",
    "website": "http://www.findmexicohouses.com",
    "google_maps": "https://www.google.com/maps/place/?q=place_id:ChIJZZYSDC5Lr4YR_LAKHMp4prU",
    "tipo_presencia_digital": "solo redes",
    "fit_llamada_manana": "alto",
    "contacto_probable": "directo al dueño/socio",
    "observacion_clave": "Solo redes sociales con 270 reseñas. Una web propia les daría presencia en Google y canal directo.",
    "beneficio_principal": "Catálogo profesional = leads calificados desde Google.",
    "apertura_1linea": "Hola, revisé su presencia digital y vi una oportunidad clara de mejora.",
    "cta_sugerido": "¿Te puedo mandar un análisis breve y una propuesta por WhatsApp?",
    "objecion_probable": "No tenemos presupuesto.",
    "respuesta_breve": "Entiendo. Arrancamos desde $900 USD y en 10 días tienen su sitio. Es una inversión que se paga sola con los primeros clientes que llegan por Google.",
    "fortalezas": [
      "Rating excepcional (4.9⭐)",
      "270 reseñas = base de clientes activa"
    ],
    "problemas": [
      "Sin sitio web propio — solo redes sociales",
      "No aparece en búsquedas de Google"
    ],
    "beneficios": [
      "Catálogo de propiedades profesional",
      "Leads calificados desde Google",
      "Credibilidad para compradores internacionales"
    ],
    "horario_nota": "",
    "horario_grupo": 1,
    "horario_label": "🌅 MAÑANA (8-11am)",
    "prioridad_manana_orden": 11,
    "score": 65.43226759909204
  },
  {
    "nombre": "San Lucas Dental Medic",
    "nicho": "dental clinic",
    "ciudad": "CSL",
    "rating": 5,
    "resenas": 86,
    "telefono": "+52 624 130 1398",
    "tiene_web": "no",
    "calidad_web": "sin web",
    "web_status": "NO TIENE WEB",
    "website": "",
    "google_maps": "https://www.google.com/maps/place/?q=place_id:ChIJgVNDSN9Lr4YROCSq5oJGQkI",
    "tipo_presencia_digital": "sin web",
    "fit_llamada_manana": "alto",
    "contacto_probable": "recepción → pedir hablar con doctor/dueño",
    "observacion_clave": "5.0⭐ con 86 reseñas y sin web. Una web profesional les daría credibilidad inmediata.",
    "beneficio_principal": "Más confianza profesional = más citas de pacientes.",
    "apertura_1linea": "Hola, revisé su presencia digital y vi una oportunidad clara de mejora.",
    "cta_sugerido": "¿Te puedo mandar un análisis breve y una propuesta por WhatsApp?",
    "objecion_probable": "No necesitamos web, nos va bien con redes.",
    "respuesta_breve": "Entiendo, las redes funcionan bien. Pero cada turista que busca en Google y no los encuentra se va a otro lado. La web no reemplaza redes — las complementa.",
    "fortalezas": [
      "Rating excepcional (5.0⭐)",
      "86 reseñas = en crecimiento"
    ],
    "problemas": [
      "Sin sitio web — invisible en búsquedas de Google",
      "Depende 100% de redes y Maps"
    ],
    "beneficios": [
      "Genera confianza médica profesional",
      "Pacientes internacionales lo encuentran en Google",
      "Agenda de citas + info de tratamientos"
    ],
    "horario_nota": "",
    "horario_grupo": 1,
    "horario_label": "🌅 MAÑANA (8-11am)",
    "prioridad_manana_orden": 12,
    "score": 65.27173648126754
  },
  {
    "nombre": "Dr. José Contreras Ruiz. Dermatólogo en Los Cabos",
    "nicho": "dermatologist",
    "ciudad": "CSL",
    "rating": 4.9,
    "resenas": 78,
    "telefono": "+52 624 135 9285",
    "tiene_web": "no",
    "calidad_web": "sin web",
    "web_status": "NO TIENE WEB",
    "website": "",
    "google_maps": "https://www.google.com/maps/place/?q=place_id:ChIJP9tzjUdLr4YRfFg-fZuds4E",
    "tipo_presencia_digital": "sin web",
    "fit_llamada_manana": "alto",
    "contacto_probable": "recepción → pedir hablar con doctor/dueño",
    "observacion_clave": "4.9⭐ con 78 reseñas y sin web. Una web profesional les daría credibilidad inmediata.",
    "beneficio_principal": "Más confianza profesional = más citas de pacientes.",
    "apertura_1linea": "Hola, revisé su presencia digital y vi una oportunidad clara de mejora.",
    "cta_sugerido": "¿Te puedo mandar un análisis breve y una propuesta por WhatsApp?",
    "objecion_probable": "No necesitamos web, nos va bien con redes.",
    "respuesta_breve": "Entiendo, las redes funcionan bien. Pero cada turista que busca en Google y no los encuentra se va a otro lado. La web no reemplaza redes — las complementa.",
    "fortalezas": [
      "Rating excepcional (4.9⭐)",
      "78 reseñas"
    ],
    "problemas": [
      "Sin sitio web — invisible en Google",
      "Depende de redes y Maps"
    ],
    "beneficios": [
      "Genera confianza médica profesional",
      "Pacientes internacionales lo encuentran",
      "Agenda de citas + info de tratamientos"
    ],
    "horario_nota": "",
    "horario_grupo": 1,
    "horario_label": "🌅 MAÑANA (8-11am)",
    "prioridad_manana_orden": 13,
    "score": 51.347873250779
  },
  {
    "nombre": "Drift San Jose del Cabo",
    "nicho": "hotel",
    "ciudad": "SJC",
    "rating": 4.5,
    "resenas": 335,
    "telefono": "+1 864-863-7438",
    "tiene_web": "sí",
    "calidad_web": "sin web",
    "web_status": "SOLO REDES (sin web propia)",
    "website": "https://drifthotels.co/sanjose",
    "google_maps": "Ver mapa",
    "tipo_presencia_digital": "solo redes",
    "fit_llamada_manana": "alto",
    "contacto_probable": "recepción → gerente general",
    "observacion_clave": "Solo redes sociales con 335 reseñas. Una web propia les daría presencia en Google y canal directo.",
    "beneficio_principal": "Reservaciones directas sin comisión de OTAs.",
    "apertura_1linea": "Hola, revisé su presencia digital y vi una oportunidad clara de mejora.",
    "cta_sugerido": "¿Te puedo mandar un análisis breve y una propuesta por WhatsApp?",
    "objecion_probable": "No tenemos presupuesto.",
    "respuesta_breve": "Entiendo. Arrancamos desde $900 USD y en 10 días tienen su sitio. Es una inversión que se paga sola con los primeros clientes que llegan por Google.",
    "fortalezas": [
      "Buen rating (4.5⭐)",
      "335 reseñas = reputación establecida"
    ],
    "problemas": [
      "Sin sitio web propio — solo redes sociales",
      "No aparece en búsquedas de Google"
    ],
    "beneficios": [
      "Reservaciones directas sin comisión OTAs",
      "Galería profesional",
      "Control de imagen y precios"
    ],
    "horario_nota": "",
    "horario_grupo": 1,
    "horario_label": "🌅 MAÑANA (8-11am)",
    "prioridad_manana_orden": 14,
    "score": 51.163587393212794
  },
  {
    "nombre": "Dr. Marco Antonio Ramírez López, Dermatólogo",
    "nicho": "dermatologist",
    "ciudad": "CSL",
    "rating": 4.9,
    "resenas": 187,
    "telefono": "+52 624 169 3221",
    "tiene_web": "sí",
    "calidad_web": "web muy básica",
    "web_status": "WEB MUY BÁSICA",
    "website": "https://www.doctoralia.com.mx/marco-antonio-ramirez-lopez/dermatologo/san-jose-del-cabo?utm_source=google&utm_medium=gmb&utm_campaign=102642&utm_content=website",
    "google_maps": "https://www.google.com/maps/place/?q=place_id:ChIJpRDMDH5br4YR37jOR4opSEQ",
    "tipo_presencia_digital": "web propia básica",
    "fit_llamada_manana": "alto",
    "contacto_probable": "recepción → pedir hablar con doctor/dueño",
    "observacion_clave": "Su web es muy básica — no refleja las 4.9⭐ que realmente tienen. Un turista ve la web y no siente la misma experiencia.",
    "beneficio_principal": "Más confianza profesional = más citas de pacientes.",
    "apertura_1linea": "Hola, revisé su presencia digital y vi una oportunidad clara de mejora.",
    "cta_sugerido": "¿Te puedo mandar un análisis breve y una propuesta por WhatsApp?",
    "objecion_probable": "Ya tenemos web.",
    "respuesta_breve": "Sí, vi su web. El tema es que no refleja las 4.9⭐ que tienen. Un turista ve la web y no siente la misma experiencia. Un rediseño cambia eso.",
    "fortalezas": [
      "Rating excepcional (4.9⭐)",
      "187 reseñas = reputación establecida"
    ],
    "problemas": [
      "Web no refleja la calidad real del negocio",
      "Pierde credibilidad vs competencia"
    ],
    "beneficios": [
      "Genera confianza médica profesional",
      "Pacientes internacionales lo encuentran",
      "Agenda de citas + info de tratamientos"
    ],
    "horario_nota": "",
    "horario_grupo": 1,
    "horario_label": "🌅 MAÑANA (8-11am)",
    "prioridad_manana_orden": 15,
    "score": 50.63243222258748
  },
  {
    "nombre": "DENT-ALL",
    "nicho": "dental clinic",
    "ciudad": "SJC",
    "rating": 4.9,
    "resenas": 67,
    "telefono": "+52 951 272 9804",
    "tiene_web": "no",
    "calidad_web": "web muy básica",
    "web_status": "SOLO REDES (sin web propia)",
    "website": "https://www.facebook.com/dent-all-san-jos%c3%a9-del-cabo-100211032582263",
    "google_maps": "Ver mapa",
    "tipo_presencia_digital": "solo redes",
    "fit_llamada_manana": "alto",
    "contacto_probable": "recepción → pedir hablar con doctor/dueño",
    "observacion_clave": "Solo operan por redes. Con 4.9⭐ merecen una presencia web profesional.",
    "beneficio_principal": "Más confianza profesional = más citas de pacientes.",
    "apertura_1linea": "Hola, revisé su presencia digital y vi una oportunidad clara de mejora.",
    "cta_sugerido": "¿Te puedo mandar un análisis breve y una propuesta por WhatsApp?",
    "objecion_probable": "No tenemos presupuesto.",
    "respuesta_breve": "Entiendo. Arrancamos desde $900 USD y en 10 días tienen su sitio. Es una inversión que se paga sola con los primeros clientes que llegan por Google.",
    "fortalezas": [
      "Rating excepcional (4.9⭐)",
      "67 reseñas"
    ],
    "problemas": [
      "Sin sitio web propio — solo redes sociales",
      "No aparece en búsquedas de Google"
    ],
    "beneficios": [
      "Genera confianza médica profesional",
      "Pacientes internacionales lo encuentran",
      "Agenda de citas + info de tratamientos"
    ],
    "horario_nota": "",
    "horario_grupo": 1,
    "horario_label": "🌅 MAÑANA (8-11am)",
    "prioridad_manana_orden": 16,
    "score": 50.60299383501574
  },
  {
    "nombre": "Medano Massages",
    "nicho": "spa",
    "ciudad": "CSL",
    "rating": 4.7,
    "resenas": 76,
    "telefono": "+52 624 144 4645",
    "tiene_web": "no",
    "calidad_web": "web muy básica",
    "web_status": "SOLO REDES (sin web propia)",
    "website": "https://www.facebook.com/share/1c2fi3l8ga",
    "google_maps": "https://www.google.com/maps/place/?q=place_id:ChIJJT2Y0adLr4YR3OOhbUREnGM",
    "tipo_presencia_digital": "solo redes",
    "fit_llamada_manana": "alto",
    "contacto_probable": "dueño o encargado directo",
    "observacion_clave": "Solo operan por redes. Con 4.7⭐ merecen una presencia web profesional.",
    "beneficio_principal": "Más confianza profesional = más citas de pacientes.",
    "apertura_1linea": "Hola, revisé su presencia digital y vi una oportunidad clara de mejora.",
    "cta_sugerido": "¿Te puedo mandar un análisis breve y una propuesta por WhatsApp?",
    "objecion_probable": "No tenemos presupuesto.",
    "respuesta_breve": "Entiendo. Arrancamos desde $900 USD y en 10 días tienen su sitio. Es una inversión que se paga sola con los primeros clientes que llegan por Google.",
    "fortalezas": [
      "Buen rating (4.7⭐)",
      "76 reseñas"
    ],
    "problemas": [
      "Sin sitio web propio — solo redes sociales",
      "No aparece en búsquedas de Google"
    ],
    "beneficios": [
      "Reservaciones online de tratamientos",
      "Galería que transmite la experiencia",
      "Paquetes y precios visibles"
    ],
    "horario_nota": "",
    "horario_grupo": 1,
    "horario_label": "🌅 MAÑANA (8-11am)",
    "prioridad_manana_orden": 17,
    "score": 50.35444669934576
  },
  {
    "nombre": "Advanced Cabo Dentistry - Dentist Cabo San Lucas",
    "nicho": "dental clinic",
    "ciudad": "SJC",
    "rating": 4.7,
    "resenas": 215,
    "telefono": "+52 624 279 0024",
    "tiene_web": "sí",
    "calidad_web": "web muy básica",
    "web_status": "WEB MUY BÁSICA",
    "website": "https://advancedcabodentistry.com",
    "google_maps": "Ver mapa",
    "tipo_presencia_digital": "web propia básica",
    "fit_llamada_manana": "alto",
    "contacto_probable": "recepción → pedir hablar con doctor/dueño",
    "observacion_clave": "Su web es muy básica — no refleja las 4.7⭐ que realmente tienen. Un turista ve la web y no siente la misma experiencia.",
    "beneficio_principal": "Más confianza profesional = más citas de pacientes.",
    "apertura_1linea": "Hola, revisé su presencia digital y vi una oportunidad clara de mejora.",
    "cta_sugerido": "¿Te puedo mandar un análisis breve y una propuesta por WhatsApp?",
    "objecion_probable": "Ya tenemos web.",
    "respuesta_breve": "Sí, vi su web. El tema es que no refleja las 4.7⭐ que tienen. Un turista ve la web y no siente la misma experiencia. Un rediseño cambia eso.",
    "fortalezas": [
      "Buen rating (4.7⭐)",
      "215 reseñas = reputación establecida"
    ],
    "problemas": [
      "Web no refleja la calidad real del negocio",
      "Pierde credibilidad vs competencia"
    ],
    "beneficios": [
      "Genera confianza médica profesional",
      "Pacientes internacionales lo encuentran",
      "Agenda de citas + info de tratamientos"
    ],
    "horario_nota": "",
    "horario_grupo": 1,
    "horario_label": "🌅 MAÑANA (8-11am)",
    "prioridad_manana_orden": 18,
    "score": 50.24199873220002
  },
  {
    "nombre": "Lands End Cabo Massage",
    "nicho": "spa",
    "ciudad": "CSL",
    "rating": 4.7,
    "resenas": 72,
    "telefono": "+52 624 143 2680",
    "tiene_web": "no",
    "calidad_web": "web muy básica",
    "web_status": "SOLO REDES (sin web propia)",
    "website": "https://www.facebook.com/landsendcabomassage",
    "google_maps": "https://www.google.com/maps/place/?q=place_id:ChIJKbbQJeNKr4YRoa0lSallqYw",
    "tipo_presencia_digital": "solo redes",
    "fit_llamada_manana": "alto",
    "contacto_probable": "dueño o encargado directo",
    "observacion_clave": "Solo operan por redes. Con 4.7⭐ merecen una presencia web profesional.",
    "beneficio_principal": "Más confianza profesional = más citas de pacientes.",
    "apertura_1linea": "Hola, revisé su presencia digital y vi una oportunidad clara de mejora.",
    "cta_sugerido": "¿Te puedo mandar un análisis breve y una propuesta por WhatsApp?",
    "objecion_probable": "No tenemos presupuesto.",
    "respuesta_breve": "Entiendo. Arrancamos desde $900 USD y en 10 días tienen su sitio. Es una inversión que se paga sola con los primeros clientes que llegan por Google.",
    "fortalezas": [
      "Buen rating (4.7⭐)",
      "72 reseñas"
    ],
    "problemas": [
      "Sin sitio web propio — solo redes sociales",
      "No aparece en búsquedas de Google"
    ],
    "beneficios": [
      "Reservaciones online de tratamientos",
      "Galería que transmite la experiencia",
      "Paquetes y precios visibles"
    ],
    "horario_nota": "",
    "horario_grupo": 1,
    "horario_label": "🌅 MAÑANA (8-11am)",
    "prioridad_manana_orden": 19,
    "score": 50.10033075937546
  },
  {
    "nombre": "THE FACE PROJECT",
    "nicho": "cosmetic surgeon",
    "ciudad": "CSL",
    "rating": 4.7,
    "resenas": 65,
    "telefono": "+52 624 110 6482",
    "tiene_web": "no",
    "calidad_web": "sin web",
    "web_status": "NO TIENE WEB",
    "website": "",
    "google_maps": "https://www.google.com/maps/place/?q=place_id:ChIJbTWinkFLr4YRvilhnYck0V8",
    "tipo_presencia_digital": "sin web",
    "fit_llamada_manana": "alto",
    "contacto_probable": "recepción → pedir hablar con doctor/dueño",
    "observacion_clave": "4.7⭐ con 65 reseñas y sin web. Una web profesional les daría credibilidad inmediata.",
    "beneficio_principal": "Más confianza profesional = más citas de pacientes.",
    "apertura_1linea": "Hola, revisé su presencia digital y vi una oportunidad clara de mejora.",
    "cta_sugerido": "¿Te puedo mandar un análisis breve y una propuesta por WhatsApp?",
    "objecion_probable": "No necesitamos web, nos va bien con redes.",
    "respuesta_breve": "Entiendo, las redes funcionan bien. Pero cada turista que busca en Google y no los encuentra se va a otro lado. La web no reemplaza redes — las complementa.",
    "fortalezas": [
      "Buen rating (4.7⭐)",
      "65 reseñas"
    ],
    "problemas": [
      "Sin sitio web — invisible en Google",
      "Depende de redes y Maps"
    ],
    "beneficios": [
      "Genera confianza médica profesional",
      "Pacientes internacionales lo encuentran",
      "Agenda de citas + info de tratamientos"
    ],
    "horario_nota": "",
    "horario_grupo": 1,
    "horario_label": "🌅 MAÑANA (8-11am)",
    "prioridad_manana_orden": 20,
    "score": 49.61962016850949
  },
  {
    "nombre": "Hotel Casa Natalia",
    "nicho": "boutique hotel",
    "ciudad": "SJC",
    "rating": 4.5,
    "resenas": 218,
    "telefono": "+52 624 146 7100",
    "tiene_web": "sí",
    "calidad_web": "sin web",
    "web_status": "SOLO REDES (sin web propia)",
    "website": "http://casanatalia.com",
    "google_maps": "Ver mapa",
    "tipo_presencia_digital": "solo redes",
    "fit_llamada_manana": "alto",
    "contacto_probable": "recepción → gerente general",
    "observacion_clave": "Solo redes sociales con 218 reseñas. Una web propia les daría presencia en Google y canal directo.",
    "beneficio_principal": "Reservaciones directas sin comisión de OTAs.",
    "apertura_1linea": "Hola, revisé su presencia digital y vi una oportunidad clara de mejora.",
    "cta_sugerido": "¿Te puedo mandar un análisis breve y una propuesta por WhatsApp?",
    "objecion_probable": "No tenemos presupuesto.",
    "respuesta_breve": "Entiendo. Arrancamos desde $900 USD y en 10 días tienen su sitio. Es una inversión que se paga sola con los primeros clientes que llegan por Google.",
    "fortalezas": [
      "Buen rating (4.5⭐)",
      "218 reseñas = reputación establecida"
    ],
    "problemas": [
      "Sin sitio web propio — solo redes sociales",
      "No aparece en búsquedas de Google"
    ],
    "beneficios": [
      "Reservaciones directas sin comisión OTAs",
      "Galería profesional",
      "Control de imagen y precios"
    ],
    "horario_nota": "",
    "horario_grupo": 1,
    "horario_label": "🌅 MAÑANA (8-11am)",
    "prioridad_manana_orden": 21,
    "score": 49.2302277825509
  },
  {
    "nombre": "Bocanegra Spa",
    "nicho": "medical spa",
    "ciudad": "CSL",
    "rating": 5,
    "resenas": 36,
    "telefono": "+52 624 182 0515",
    "tiene_web": "no",
    "calidad_web": "web muy básica",
    "web_status": "SOLO REDES (sin web propia)",
    "website": "https://www.instagram.com/bocanegra.spa?igsh=ahb0c3kxbdzhczdv&utm_source=qr",
    "google_maps": "https://www.google.com/maps/place/?q=place_id:ChIJ5Qas8JhLr4YRtrHln8KK-qU",
    "tipo_presencia_digital": "solo redes",
    "fit_llamada_manana": "alto",
    "contacto_probable": "dueño o encargado directo",
    "observacion_clave": "Solo operan por redes. Con 5.0⭐ merecen una presencia web profesional.",
    "beneficio_principal": "Más confianza profesional = más citas de pacientes.",
    "apertura_1linea": "Hola, revisé su presencia digital y vi una oportunidad clara de mejora.",
    "cta_sugerido": "¿Te puedo mandar un análisis breve y una propuesta por WhatsApp?",
    "objecion_probable": "No tenemos presupuesto.",
    "respuesta_breve": "Entiendo. Arrancamos desde $900 USD y en 10 días tienen su sitio. Es una inversión que se paga sola con los primeros clientes que llegan por Google.",
    "fortalezas": [
      "Rating excepcional (5.0⭐)",
      "36 reseñas"
    ],
    "problemas": [
      "Sin sitio web propio — solo redes sociales",
      "No aparece en búsquedas de Google"
    ],
    "beneficios": [
      "Reservaciones online de tratamientos",
      "Galería que transmite la experiencia",
      "Paquetes y precios visibles"
    ],
    "horario_nota": "",
    "horario_grupo": 1,
    "horario_label": "🌅 MAÑANA (8-11am)",
    "prioridad_manana_orden": 22,
    "score": 47.917594692280545
  },
  {
    "nombre": "Collection O Casa Bella Hotel Boutique, Cabo San Lucas",
    "nicho": "boutique hotel",
    "ciudad": "CSL",
    "rating": 4.8,
    "resenas": 103,
    "telefono": "+52 612 980 0709",
    "tiene_web": "sí",
    "calidad_web": "sin web",
    "web_status": "SOLO REDES (sin web propia)",
    "website": "https://www.oyorooms.com/155999",
    "google_maps": "https://www.google.com/maps/place/?q=place_id:ChIJYfpZpPFKr4YRP0cB07wnjvY",
    "tipo_presencia_digital": "solo redes",
    "fit_llamada_manana": "alto",
    "contacto_probable": "recepción → gerente general",
    "observacion_clave": "Solo redes sociales con 103 reseñas. Una web propia les daría presencia en Google y canal directo.",
    "beneficio_principal": "Reservaciones directas sin comisión de OTAs.",
    "apertura_1linea": "Hola, revisé su presencia digital y vi una oportunidad clara de mejora.",
    "cta_sugerido": "¿Te puedo mandar un análisis breve y una propuesta por WhatsApp?",
    "objecion_probable": "No tenemos presupuesto.",
    "respuesta_breve": "Entiendo. Arrancamos desde $900 USD y en 10 días tienen su sitio. Es una inversión que se paga sola con los primeros clientes que llegan por Google.",
    "fortalezas": [
      "Rating excepcional (4.8⭐)",
      "103 reseñas = reputación establecida"
    ],
    "problemas": [
      "Sin sitio web propio — solo redes sociales",
      "No aparece en búsquedas de Google"
    ],
    "beneficios": [
      "Reservaciones directas sin comisión OTAs",
      "Galería profesional",
      "Control de imagen y precios"
    ],
    "horario_nota": "",
    "horario_grupo": 1,
    "horario_label": "🌅 MAÑANA (8-11am)",
    "prioridad_manana_orden": 23,
    "score": 47.246699143502255
  },
  {
    "nombre": "The Desert Spa",
    "nicho": "medical spa",
    "ciudad": "CSL",
    "rating": 4.8,
    "resenas": 100,
    "telefono": "+52 800 062 1658",
    "tiene_web": "sí",
    "calidad_web": "sin web",
    "web_status": "SOLO REDES (sin web propia)",
    "website": "https://villadelarco.com/desert-spa?partner=6513&utm_source=gmblisting&utm_medium=organic",
    "google_maps": "https://www.google.com/maps/place/?q=place_id:ChIJrznDJgJLr4YRo3_yINsds2c",
    "tipo_presencia_digital": "solo redes",
    "fit_llamada_manana": "alto",
    "contacto_probable": "dueño o encargado directo",
    "observacion_clave": "Solo redes sociales con 100 reseñas. Una web propia les daría presencia en Google y canal directo.",
    "beneficio_principal": "Más confianza profesional = más citas de pacientes.",
    "apertura_1linea": "Hola, revisé su presencia digital y vi una oportunidad clara de mejora.",
    "cta_sugerido": "¿Te puedo mandar un análisis breve y una propuesta por WhatsApp?",
    "objecion_probable": "No tenemos presupuesto.",
    "respuesta_breve": "Entiendo. Arrancamos desde $900 USD y en 10 días tienen su sitio. Es una inversión que se paga sola con los primeros clientes que llegan por Google.",
    "fortalezas": [
      "Rating excepcional (4.8⭐)",
      "100 reseñas = reputación establecida"
    ],
    "problemas": [
      "Sin sitio web propio — solo redes sociales",
      "No aparece en búsquedas de Google"
    ],
    "beneficios": [
      "Reservaciones online de tratamientos",
      "Galería que transmite la experiencia",
      "Paquetes y precios visibles"
    ],
    "horario_nota": "",
    "horario_grupo": 1,
    "horario_label": "🌅 MAÑANA (8-11am)",
    "prioridad_manana_orden": 24,
    "score": 47.10481689274284
  },
  {
    "nombre": "Yajaira Spa",
    "nicho": "spa",
    "ciudad": "SJC",
    "rating": 4.7,
    "resenas": 38,
    "telefono": "+52 624 168 5432",
    "tiene_web": "no",
    "calidad_web": "web muy básica",
    "web_status": "SOLO REDES (sin web propia)",
    "website": "https://m.facebook.com/profile/edit/infotab/section/forms/?info_surface=rn_self_about&section=contact-info&cb=1673211757#",
    "google_maps": "Ver mapa",
    "tipo_presencia_digital": "solo redes",
    "fit_llamada_manana": "alto",
    "contacto_probable": "dueño o encargado directo",
    "observacion_clave": "Solo operan por redes. Con 4.7⭐ merecen una presencia web profesional.",
    "beneficio_principal": "Más confianza profesional = más citas de pacientes.",
    "apertura_1linea": "Hola, revisé su presencia digital y vi una oportunidad clara de mejora.",
    "cta_sugerido": "¿Te puedo mandar un análisis breve y una propuesta por WhatsApp?",
    "objecion_probable": "No tenemos presupuesto.",
    "respuesta_breve": "Entiendo. Arrancamos desde $900 USD y en 10 días tienen su sitio. Es una inversión que se paga sola con los primeros clientes que llegan por Google.",
    "fortalezas": [
      "Buen rating (4.7⭐)",
      "38 reseñas"
    ],
    "problemas": [
      "Sin sitio web propio — solo redes sociales",
      "No aparece en búsquedas de Google"
    ],
    "beneficios": [
      "Reservaciones online de tratamientos",
      "Galería que transmite la experiencia",
      "Paquetes y precios visibles"
    ],
    "horario_nota": "",
    "horario_grupo": 1,
    "horario_label": "🌅 MAÑANA (8-11am)",
    "prioridad_manana_orden": 25,
    "score": 47.09665495071401
  },
  {
    "nombre": "Luxury apartment Torres De San José",
    "nicho": "real estate agency",
    "ciudad": "SJC",
    "rating": 4.7,
    "resenas": 37,
    "telefono": "+52 624 117 9050",
    "tiene_web": "no",
    "calidad_web": "web muy básica",
    "web_status": "SOLO REDES (sin web propia)",
    "website": "https://www.facebook.com/marketplace/item/367572111466516/?ref=whatsapp_share_message",
    "google_maps": "Ver mapa",
    "tipo_presencia_digital": "solo redes",
    "fit_llamada_manana": "alto",
    "contacto_probable": "directo al dueño/socio",
    "observacion_clave": "Solo operan por redes. Con 4.7⭐ merecen una presencia web profesional.",
    "beneficio_principal": "Catálogo profesional = leads calificados desde Google.",
    "apertura_1linea": "Hola, revisé su presencia digital y vi una oportunidad clara de mejora.",
    "cta_sugerido": "¿Te puedo mandar un análisis breve y una propuesta por WhatsApp?",
    "objecion_probable": "No tenemos presupuesto.",
    "respuesta_breve": "Entiendo. Arrancamos desde $900 USD y en 10 días tienen su sitio. Es una inversión que se paga sola con los primeros clientes que llegan por Google.",
    "fortalezas": [
      "Buen rating (4.7⭐)",
      "37 reseñas"
    ],
    "problemas": [
      "Sin sitio web propio — solo redes sociales",
      "No aparece en búsquedas de Google"
    ],
    "beneficios": [
      "Catálogo de propiedades profesional",
      "Leads calificados desde Google",
      "Credibilidad para compradores internacionales"
    ],
    "horario_nota": "",
    "horario_grupo": 1,
    "horario_label": "🌅 MAÑANA (8-11am)",
    "prioridad_manana_orden": 26,
    "score": 46.97131418942786
  },
  {
    "nombre": "Belleza Latina Los Cabos | Bótox · Fillers · Endolyse · Bioestimuladores · Co2 Fraccionado",
    "nicho": "medical spa",
    "ciudad": "CSL",
    "rating": 5,
    "resenas": 76,
    "telefono": "+52 800 400 5556",
    "tiene_web": "sí",
    "calidad_web": "web muy básica",
    "web_status": "WEB MUY BÁSICA",
    "website": "https://bellezalatina.life",
    "google_maps": "https://www.google.com/maps/place/?q=place_id:ChIJ-ek2-RFLr4YRjNQH57R208M",
    "tipo_presencia_digital": "web propia básica",
    "fit_llamada_manana": "alto",
    "contacto_probable": "dueño o encargado directo",
    "observacion_clave": "Su web es muy básica — no refleja las 5.0⭐ que realmente tienen. Un turista ve la web y no siente la misma experiencia.",
    "beneficio_principal": "Más confianza profesional = más citas de pacientes.",
    "apertura_1linea": "Hola, revisé su presencia digital y vi una oportunidad clara de mejora.",
    "cta_sugerido": "¿Te puedo mandar un análisis breve y una propuesta por WhatsApp?",
    "objecion_probable": "Ya tenemos web.",
    "respuesta_breve": "Sí, vi su web. El tema es que no refleja las 5.0⭐ que tienen. Un turista ve la web y no siente la misma experiencia. Un rediseño cambia eso.",
    "fortalezas": [
      "Rating excepcional (5.0⭐)",
      "76 reseñas"
    ],
    "problemas": [
      "Web no refleja la calidad real del negocio",
      "Pierde credibilidad vs competencia"
    ],
    "beneficios": [
      "Reservaciones online de tratamientos",
      "Galería que transmite la experiencia",
      "Paquetes y precios visibles"
    ],
    "horario_nota": "",
    "horario_grupo": 1,
    "horario_label": "🌅 MAÑANA (8-11am)",
    "prioridad_manana_orden": 27,
    "score": 46.65366670143165
  },
  {
    "nombre": "Elite Beauty Zone",
    "nicho": "nail salon",
    "ciudad": "SJC",
    "rating": 4.9,
    "resenas": 250,
    "telefono": "+52 624 142 5513",
    "tiene_web": "no",
    "calidad_web": "web muy básica",
    "web_status": "SOLO REDES (sin web propia)",
    "website": "https://m.facebook.com/elitebeautyzone",
    "google_maps": "Ver mapa",
    "tipo_presencia_digital": "solo redes",
    "fit_llamada_manana": "alto",
    "contacto_probable": "dueño o encargado directo",
    "observacion_clave": "Solo redes sociales con 250 reseñas. Una web propia les daría presencia en Google y canal directo.",
    "beneficio_principal": "Galería + agenda online = más clientes nuevos.",
    "apertura_1linea": "Hola, revisé su presencia digital y vi una oportunidad clara de mejora.",
    "cta_sugerido": "¿Te puedo mandar un análisis breve y una propuesta por WhatsApp?",
    "objecion_probable": "No tenemos presupuesto.",
    "respuesta_breve": "Entiendo. Arrancamos desde $900 USD y en 10 días tienen su sitio. Es una inversión que se paga sola con los primeros clientes que llegan por Google.",
    "fortalezas": [
      "Rating excepcional (4.9⭐)",
      "250 reseñas = base de clientes activa"
    ],
    "problemas": [
      "Sin sitio web propio — solo redes sociales",
      "No aparece en búsquedas de Google"
    ],
    "beneficios": [
      "Galería de trabajos que genera confianza",
      "Agenda de citas online",
      "Se diferencia de competencia sin web"
    ],
    "horario_nota": "",
    "horario_grupo": 2,
    "horario_label": "☀️ MEDIODÍA (11am-2pm)",
    "prioridad_manana_orden": 28,
    "score": 70.05515849752501
  },
  {
    "nombre": "Zamir Landeros Photo Studio Los Cabos Wedding & Family Photographer Videographer",
    "nicho": "wedding photographer",
    "ciudad": "SJC",
    "rating": 5,
    "resenas": 211,
    "telefono": "+52 667 311 8683",
    "tiene_web": "no",
    "calidad_web": "sin web",
    "web_status": "NO TIENE WEB",
    "website": "",
    "google_maps": "Ver mapa",
    "tipo_presencia_digital": "sin web",
    "fit_llamada_manana": "alto",
    "contacto_probable": "preguntar por el encargado",
    "observacion_clave": "Con 211 reseñas y 5.0⭐ ya tienen reputación — pero sin web no la están capitalizando en Google.",
    "beneficio_principal": "Portafolio profesional que vende solo.",
    "apertura_1linea": "Hola, revisé su presencia digital y vi una oportunidad clara de mejora.",
    "cta_sugerido": "¿Te puedo mandar un análisis breve y una propuesta por WhatsApp?",
    "objecion_probable": "No necesitamos web, nos va bien con redes.",
    "respuesta_breve": "Entiendo, las redes funcionan bien. Pero cada turista que busca en Google y no los encuentra se va a otro lado. La web no reemplaza redes — las complementa.",
    "fortalezas": [
      "Rating excepcional (5.0⭐)",
      "211 reseñas = base de clientes activa"
    ],
    "problemas": [
      "Sin sitio web — invisible en búsquedas de Google",
      "Depende 100% de redes y Maps"
    ],
    "beneficios": [
      "Portafolio profesional que vende solo",
      "SEO para 'wedding photographer Cabo'",
      "Formulario de cotización integrado"
    ],
    "horario_nota": "",
    "horario_grupo": 2,
    "horario_label": "☀️ MEDIODÍA (11am-2pm)",
    "prioridad_manana_orden": 29,
    "score": 69.75929066738033
  },
  {
    "nombre": "624 Beauty Lounge - Salón de Belleza & Spa",
    "nicho": "nail salon",
    "ciudad": "CSL",
    "rating": 5,
    "resenas": 175,
    "telefono": "+52 624 241 8431",
    "tiene_web": "no",
    "calidad_web": "web muy básica",
    "web_status": "SOLO REDES (sin web propia)",
    "website": "https://www.instagram.com/624_beautylounge",
    "google_maps": "https://www.google.com/maps/place/?q=place_id:ChIJIefl47pLr4YRjRLCsVz3yNM",
    "tipo_presencia_digital": "solo redes",
    "fit_llamada_manana": "alto",
    "contacto_probable": "dueño o encargado directo",
    "observacion_clave": "Solo redes sociales con 175 reseñas. Una web propia les daría presencia en Google y canal directo.",
    "beneficio_principal": "Galería + agenda online = más clientes nuevos.",
    "apertura_1linea": "Hola, revisé su presencia digital y vi una oportunidad clara de mejora.",
    "cta_sugerido": "¿Te puedo mandar un análisis breve y una propuesta por WhatsApp?",
    "objecion_probable": "No tenemos presupuesto.",
    "respuesta_breve": "Entiendo. Arrancamos desde $900 USD y en 10 días tienen su sitio. Es una inversión que se paga sola con los primeros clientes que llegan por Google.",
    "fortalezas": [
      "Rating excepcional (5.0⭐)",
      "175 reseñas = base de clientes activa"
    ],
    "problemas": [
      "Sin sitio web propio — solo redes sociales",
      "No aparece en búsquedas de Google"
    ],
    "beneficios": [
      "Galería de trabajos que genera confianza",
      "Agenda de citas online",
      "Se diferencia de competencia sin web"
    ],
    "horario_nota": "",
    "horario_grupo": 2,
    "horario_label": "☀️ MEDIODÍA (11am-2pm)",
    "prioridad_manana_orden": 30,
    "score": 68.82392986961757
  },
  {
    "nombre": "Papillon Yachts Rental",
    "nicho": "tour operator",
    "ciudad": "CSL",
    "rating": 5,
    "resenas": 1260,
    "telefono": "+52 624 174 3459",
    "tiene_web": "sí",
    "calidad_web": "sin web",
    "web_status": "SOLO REDES (sin web propia)",
    "website": "https://www.papillonyachts.com",
    "google_maps": "https://www.google.com/maps/place/?q=place_id:ChIJFRK8bRlLr4YRkINdboFg4_8",
    "tipo_presencia_digital": "solo redes",
    "fit_llamada_manana": "alto",
    "contacto_probable": "oficina → dueño u operador",
    "observacion_clave": "1260 reseñas y solo redes sociales. Dependen 100% de Instagram/Maps — un sitio propio les da control.",
    "beneficio_principal": "Booking directo = más reservaciones sin comisión.",
    "apertura_1linea": "Hola, revisé su presencia digital y vi una oportunidad clara de mejora.",
    "cta_sugerido": "¿Te puedo mandar un análisis breve y una propuesta por WhatsApp?",
    "objecion_probable": "No tenemos presupuesto.",
    "respuesta_breve": "Entiendo. Arrancamos desde $900 USD y en 10 días tienen su sitio. Es una inversión que se paga sola con los primeros clientes que llegan por Google.",
    "fortalezas": [
      "Rating excepcional (5.0⭐)",
      "1,260 reseñas = negocio muy establecido"
    ],
    "problemas": [
      "Sin sitio web propio — solo redes sociales",
      "No aparece en búsquedas de Google"
    ],
    "beneficios": [
      "Booking directo sin comisión de plataformas",
      "Galería + testimonios que venden la experiencia",
      "SEO para turistas buscando actividades en Cabo"
    ],
    "horario_nota": "",
    "horario_grupo": 2,
    "horario_label": "☀️ MEDIODÍA (11am-2pm)",
    "prioridad_manana_orden": 31,
    "score": 68.69433499972762
  },
  {
    "nombre": "Casasola Cafe & Brunch",
    "nicho": "cafe",
    "ciudad": "CSL",
    "rating": 4.7,
    "resenas": 1430,
    "telefono": "+52 624 143 4616",
    "tiene_web": "sí",
    "calidad_web": "sin web",
    "web_status": "SOLO REDES (sin web propia)",
    "website": "http://www.casasolacafe.com",
    "google_maps": "https://www.google.com/maps/place/?q=place_id:ChIJaRzpLPBKr4YREV2NCGPvv5g",
    "tipo_presencia_digital": "solo redes",
    "fit_llamada_manana": "alto",
    "contacto_probable": "gerente o dueño (preguntar por encargado)",
    "observacion_clave": "1430 reseñas y solo redes sociales. Dependen 100% de Instagram/Maps — un sitio propio les da control.",
    "beneficio_principal": "Menú digital + reservaciones = más mesas llenas.",
    "apertura_1linea": "Hola, revisé su presencia digital y vi una oportunidad clara de mejora.",
    "cta_sugerido": "¿Te puedo mandar un análisis breve y una propuesta por WhatsApp?",
    "objecion_probable": "No tenemos presupuesto.",
    "respuesta_breve": "Entiendo. Arrancamos desde $900 USD y en 10 días tienen su sitio. Es una inversión que se paga sola con los primeros clientes que llegan por Google.",
    "fortalezas": [
      "Buen rating (4.7⭐)",
      "1,430 reseñas = negocio muy establecido"
    ],
    "problemas": [
      "Sin sitio web propio — solo redes sociales",
      "No aparece en búsquedas de Google"
    ],
    "beneficios": [
      "Menú digital accesible 24/7",
      "Reservaciones directas sin intermediarios",
      "Turistas lo encuentran ANTES de llegar a Cabo"
    ],
    "horario_nota": "",
    "horario_grupo": 2,
    "horario_label": "☀️ MEDIODÍA (11am-2pm)",
    "prioridad_manana_orden": 32,
    "score": 67.14751969929358
  },
  {
    "nombre": "Colucci Café",
    "nicho": "cafe",
    "ciudad": "CSL",
    "rating": 4.3,
    "resenas": 503,
    "telefono": "+52 624 172 5848",
    "tiene_web": "no",
    "calidad_web": "sin web",
    "web_status": "NO TIENE WEB",
    "website": "",
    "google_maps": "https://www.google.com/maps/place/?q=place_id:ChIJA43SundKr4YRrrU7kwHEfHo",
    "tipo_presencia_digital": "sin web",
    "fit_llamada_manana": "alto",
    "contacto_probable": "gerente o dueño (preguntar por encargado)",
    "observacion_clave": "Tienen 503 reseñas y 4.3⭐ pero CERO presencia web. Cada búsqueda de 'cafe' en Cabo donde no aparecen es dinero perdido.",
    "beneficio_principal": "Menú digital + reservaciones = más mesas llenas.",
    "apertura_1linea": "Hola, revisé su presencia digital y vi una oportunidad clara de mejora.",
    "cta_sugerido": "¿Te puedo mandar un análisis breve y una propuesta por WhatsApp?",
    "objecion_probable": "No necesitamos web, nos va bien con redes.",
    "respuesta_breve": "Entiendo, las redes funcionan bien. Pero cada turista que busca en Google y no los encuentra se va a otro lado. La web no reemplaza redes — las complementa.",
    "fortalezas": [
      "Rating sólido (4.3⭐)",
      "503 reseñas = buena reputación"
    ],
    "problemas": [
      "Sin sitio web — invisible en búsquedas de Google",
      "Depende 100% de redes y Maps"
    ],
    "beneficios": [
      "Menú digital accesible 24/7",
      "Reservaciones directas sin intermediarios",
      "Turistas lo encuentran ANTES de llegar a Cabo"
    ],
    "horario_nota": "",
    "horario_grupo": 2,
    "horario_label": "☀️ MEDIODÍA (11am-2pm)",
    "prioridad_manana_orden": 33,
    "score": 64.74853773142888
  },
  {
    "nombre": "Hoboken Nails 2",
    "nicho": "nail salon",
    "ciudad": "CSL",
    "rating": 4.6,
    "resenas": 108,
    "telefono": "+52 624 688 9685",
    "tiene_web": "no",
    "calidad_web": "sin web",
    "web_status": "NO TIENE WEB",
    "website": "",
    "google_maps": "https://www.google.com/maps/place/?q=place_id:ChIJZ7GSJYhLr4YR_K3_lh8-wcA",
    "tipo_presencia_digital": "sin web",
    "fit_llamada_manana": "alto",
    "contacto_probable": "dueño o encargado directo",
    "observacion_clave": "Con 108 reseñas y 4.6⭐ ya tienen reputación — pero sin web no la están capitalizando en Google.",
    "beneficio_principal": "Galería + agenda online = más clientes nuevos.",
    "apertura_1linea": "Hola, revisé su presencia digital y vi una oportunidad clara de mejora.",
    "cta_sugerido": "¿Te puedo mandar un análisis breve y una propuesta por WhatsApp?",
    "objecion_probable": "No necesitamos web, nos va bien con redes.",
    "respuesta_breve": "Entiendo, las redes funcionan bien. Pero cada turista que busca en Google y no los encuentra se va a otro lado. La web no reemplaza redes — las complementa.",
    "fortalezas": [
      "Buen rating (4.6⭐)",
      "108 reseñas = base de clientes activa"
    ],
    "problemas": [
      "Sin sitio web — invisible en búsquedas de Google",
      "Depende 100% de redes y Maps"
    ],
    "beneficios": [
      "Galería de trabajos que genera confianza",
      "Agenda de citas online",
      "Se diferencia de competencia sin web"
    ],
    "horario_nota": "",
    "horario_grupo": 2,
    "horario_label": "☀️ MEDIODÍA (11am-2pm)",
    "prioridad_manana_orden": 34,
    "score": 64.53780364477142
  },
  {
    "nombre": "The Cabo Bakery",
    "nicho": "bakery",
    "ciudad": "CSL",
    "rating": 4.4,
    "resenas": 405,
    "telefono": "+52 624 121 6467",
    "tiene_web": "no",
    "calidad_web": "web muy básica",
    "web_status": "SOLO REDES (sin web propia)",
    "website": "https://www.facebook.com/share/18rzdmr69f",
    "google_maps": "https://www.google.com/maps/place/?q=place_id:ChIJqYiYDvxKr4YRcShuxKj3wxI",
    "tipo_presencia_digital": "solo redes",
    "fit_llamada_manana": "alto",
    "contacto_probable": "gerente o dueño (preguntar por encargado)",
    "observacion_clave": "Solo redes sociales con 405 reseñas. Una web propia les daría presencia en Google y canal directo.",
    "beneficio_principal": "Menú digital + reservaciones = más mesas llenas.",
    "apertura_1linea": "Hola, revisé su presencia digital y vi una oportunidad clara de mejora.",
    "cta_sugerido": "¿Te puedo mandar un análisis breve y una propuesta por WhatsApp?",
    "objecion_probable": "No tenemos presupuesto.",
    "respuesta_breve": "Entiendo. Arrancamos desde $900 USD y en 10 días tienen su sitio. Es una inversión que se paga sola con los primeros clientes que llegan por Google.",
    "fortalezas": [
      "Rating sólido (4.4⭐)",
      "405 reseñas = buena reputación"
    ],
    "problemas": [
      "Sin sitio web propio — solo redes sociales",
      "No aparece en búsquedas de Google"
    ],
    "beneficios": [
      "Menú digital accesible 24/7",
      "Reservaciones directas sin intermediarios",
      "Turistas lo encuentran ANTES de llegar a Cabo"
    ],
    "horario_nota": "",
    "horario_grupo": 2,
    "horario_label": "☀️ MEDIODÍA (11am-2pm)",
    "prioridad_manana_orden": 35,
    "score": 64.41710309526877
  },
  {
    "nombre": "B Nails",
    "nicho": "nail salon",
    "ciudad": "SJC",
    "rating": 4.7,
    "resenas": 92,
    "telefono": "+52 624 224 9186",
    "tiene_web": "no",
    "calidad_web": "web muy básica",
    "web_status": "SOLO REDES (sin web propia)",
    "website": "https://instagram.com/bere_estrada_nails?igshid=ymmymta2m2y=",
    "google_maps": "Ver mapa",
    "tipo_presencia_digital": "solo redes",
    "fit_llamada_manana": "alto",
    "contacto_probable": "dueño o encargado directo",
    "observacion_clave": "Solo operan por redes. Con 4.7⭐ merecen una presencia web profesional.",
    "beneficio_principal": "Galería + agenda online = más clientes nuevos.",
    "apertura_1linea": "Hola, revisé su presencia digital y vi una oportunidad clara de mejora.",
    "cta_sugerido": "¿Te puedo mandar un análisis breve y una propuesta por WhatsApp?",
    "objecion_probable": "No tenemos presupuesto.",
    "respuesta_breve": "Entiendo. Arrancamos desde $900 USD y en 10 días tienen su sitio. Es una inversión que se paga sola con los primeros clientes que llegan por Google.",
    "fortalezas": [
      "Buen rating (4.7⭐)",
      "92 reseñas = en crecimiento"
    ],
    "problemas": [
      "Sin sitio web propio — solo redes sociales",
      "No aparece en búsquedas de Google"
    ],
    "beneficios": [
      "Galería de trabajos que genera confianza",
      "Agenda de citas online",
      "Se diferencia de competencia sin web"
    ],
    "horario_nota": "",
    "horario_grupo": 2,
    "horario_label": "☀️ MEDIODÍA (11am-2pm)",
    "prioridad_manana_orden": 36,
    "score": 64.25240631213049
  },
  {
    "nombre": "Malvarrosa restaurant",
    "nicho": "cafe",
    "ciudad": "SJC",
    "rating": 4.7,
    "resenas": 759,
    "telefono": "+52 624 123 7023",
    "tiene_web": "sí",
    "calidad_web": "sin web",
    "web_status": "SOLO REDES (sin web propia)",
    "website": "https://www.malvarrosarestaurant.com",
    "google_maps": "Ver mapa",
    "tipo_presencia_digital": "solo redes",
    "fit_llamada_manana": "alto",
    "contacto_probable": "gerente o dueño (preguntar por encargado)",
    "observacion_clave": "759 reseñas y solo redes sociales. Dependen 100% de Instagram/Maps — un sitio propio les da control.",
    "beneficio_principal": "Menú digital + reservaciones = más mesas llenas.",
    "apertura_1linea": "Hola, revisé su presencia digital y vi una oportunidad clara de mejora.",
    "cta_sugerido": "¿Te puedo mandar un análisis breve y una propuesta por WhatsApp?",
    "objecion_probable": "No tenemos presupuesto.",
    "respuesta_breve": "Entiendo. Arrancamos desde $900 USD y en 10 días tienen su sitio. Es una inversión que se paga sola con los primeros clientes que llegan por Google.",
    "fortalezas": [
      "Buen rating (4.7⭐)",
      "759 reseñas = buena reputación"
    ],
    "problemas": [
      "Sin sitio web propio — solo redes sociales",
      "No aparece en búsquedas de Google"
    ],
    "beneficios": [
      "Menú digital accesible 24/7",
      "Reservaciones directas sin intermediarios",
      "Turistas lo encuentran ANTES de llegar a Cabo"
    ],
    "horario_nota": "",
    "horario_grupo": 2,
    "horario_label": "☀️ MEDIODÍA (11am-2pm)",
    "prioridad_manana_orden": 37,
    "score": 64.17040835375946
  },
  {
    "nombre": "IL SALON BARBER SHOP CARIBE",
    "nicho": "barber shop",
    "ciudad": "CSL",
    "rating": 4.9,
    "resenas": 740,
    "telefono": "+52 624 173 2262",
    "tiene_web": "no",
    "calidad_web": "sin web",
    "web_status": "NO TIENE WEB",
    "website": "",
    "google_maps": "https://www.google.com/maps/place/?q=place_id:ChIJ2RcOz2pLr4YRJ-4HA-Y0wT4",
    "tipo_presencia_digital": "sin web",
    "fit_llamada_manana": "alto",
    "contacto_probable": "dueño o encargado directo",
    "observacion_clave": "Tienen 740 reseñas y 4.9⭐ pero CERO presencia web. Cada búsqueda de 'barber shop' en Cabo donde no aparecen es dinero perdido.",
    "beneficio_principal": "Galería de cortes + agenda por WhatsApp = más clientes nuevos.",
    "apertura_1linea": "Hola, revisé su presencia digital y vi una oportunidad clara de mejora.",
    "cta_sugerido": "¿Te puedo mandar un análisis breve y una propuesta por WhatsApp?",
    "objecion_probable": "No necesitamos web, nos va bien con redes.",
    "respuesta_breve": "Entiendo, las redes funcionan bien. Pero cada turista que busca en Google y no los encuentra se va a otro lado. La web no reemplaza redes — las complementa.",
    "fortalezas": [
      "Rating excepcional (4.9⭐)",
      "740 reseñas = buena reputación"
    ],
    "problemas": [
      "Sin sitio web — invisible en búsquedas de Google",
      "Depende 100% de redes y Maps"
    ],
    "beneficios": [
      "Galería de trabajos que genera confianza",
      "Agenda de citas online / WhatsApp directo",
      "Se diferencia del 90% de barberías sin web"
    ],
    "horario_nota": "",
    "horario_grupo": 3,
    "horario_label": "🌤️ TARDE (3-6pm)",
    "prioridad_manana_orden": 38,
    "score": 75.37258591237125
  },
  {
    "nombre": "IL SALON BARBER SHOP LOMAS DEL SOL",
    "nicho": "barber shop",
    "ciudad": "CSL",
    "rating": 4.9,
    "resenas": 500,
    "telefono": "+52 624 167 4661",
    "tiene_web": "no",
    "calidad_web": "web muy básica",
    "web_status": "SOLO REDES (sin web propia)",
    "website": "https://www.facebook.com/il-salon-peluqueria-unisex-105907858108554",
    "google_maps": "https://www.google.com/maps/place/?q=place_id:ChIJuR0h-8JLr4YRzeuy3oCgKwI",
    "tipo_presencia_digital": "solo redes",
    "fit_llamada_manana": "alto",
    "contacto_probable": "dueño o encargado directo",
    "observacion_clave": "500 reseñas y solo redes sociales. Dependen 100% de Instagram/Maps — un sitio propio les da control.",
    "beneficio_principal": "Galería de cortes + agenda por WhatsApp = más clientes nuevos.",
    "apertura_1linea": "Hola, revisé su presencia digital y vi una oportunidad clara de mejora.",
    "cta_sugerido": "¿Te puedo mandar un análisis breve y una propuesta por WhatsApp?",
    "objecion_probable": "No tenemos presupuesto.",
    "respuesta_breve": "Entiendo. Arrancamos desde $900 USD y en 10 días tienen su sitio. Es una inversión que se paga sola con los primeros clientes que llegan por Google.",
    "fortalezas": [
      "Rating excepcional (4.9⭐)",
      "500 reseñas = buena reputación"
    ],
    "problemas": [
      "Sin sitio web propio — solo redes sociales",
      "No aparece en búsquedas de Google"
    ],
    "beneficios": [
      "Galería de trabajos que genera confianza",
      "Agenda de citas online / WhatsApp directo",
      "Se diferencia del 90% de barberías sin web"
    ],
    "horario_nota": "",
    "horario_grupo": 3,
    "horario_label": "🌤️ TARDE (3-6pm)",
    "prioridad_manana_orden": 39,
    "score": 73.45157968226874
  },
  {
    "nombre": "Sunset Monalisa",
    "nicho": "restaurant",
    "ciudad": "CSL",
    "rating": 4.5,
    "resenas": 2474,
    "telefono": "+52 624 105 8970",
    "tiene_web": "sí",
    "calidad_web": "sin web",
    "web_status": "SOLO REDES (sin web propia)",
    "website": "https://www.sunsetmonalisa.com",
    "google_maps": "https://www.google.com/maps/place/?q=place_id:ChIJI5CgxnBLr4YRfVbGnryOSU8",
    "tipo_presencia_digital": "solo redes",
    "fit_llamada_manana": "alto",
    "contacto_probable": "gerente o dueño (preguntar por encargado)",
    "observacion_clave": "2474 reseñas y solo redes sociales. Dependen 100% de Instagram/Maps — un sitio propio les da control.",
    "beneficio_principal": "Menú digital + reservaciones = más mesas llenas.",
    "apertura_1linea": "Hola, revisé su presencia digital y vi una oportunidad clara de mejora.",
    "cta_sugerido": "¿Te puedo mandar un análisis breve y una propuesta por WhatsApp?",
    "objecion_probable": "No tenemos presupuesto.",
    "respuesta_breve": "Entiendo. Arrancamos desde $900 USD y en 10 días tienen su sitio. Es una inversión que se paga sola con los primeros clientes que llegan por Google.",
    "fortalezas": [
      "Buen rating (4.5⭐)",
      "2,474 reseñas = negocio muy establecido"
    ],
    "problemas": [
      "Sin sitio web propio — solo redes sociales",
      "No aparece en búsquedas de Google"
    ],
    "beneficios": [
      "Menú digital accesible 24/7",
      "Reservaciones directas sin intermediarios",
      "Turistas lo encuentran ANTES de llegar a Cabo"
    ],
    "horario_nota": "",
    "horario_grupo": 3,
    "horario_label": "🌤️ TARDE (3-6pm)",
    "prioridad_manana_orden": 40,
    "score": 68.16116198828595
  },
  {
    "nombre": "THE CLASSIC BARBERÍA Y SALON",
    "nicho": "barber shop",
    "ciudad": "SJC",
    "rating": 4.8,
    "resenas": 176,
    "telefono": "+52 624 199 0470",
    "tiene_web": "no",
    "calidad_web": "sin web",
    "web_status": "NO TIENE WEB",
    "website": "",
    "google_maps": "Ver mapa",
    "tipo_presencia_digital": "sin web",
    "fit_llamada_manana": "alto",
    "contacto_probable": "dueño o encargado directo",
    "observacion_clave": "Con 176 reseñas y 4.8⭐ ya tienen reputación — pero sin web no la están capitalizando en Google.",
    "beneficio_principal": "Galería de cortes + agenda por WhatsApp = más clientes nuevos.",
    "apertura_1linea": "Hola, revisé su presencia digital y vi una oportunidad clara de mejora.",
    "cta_sugerido": "¿Te puedo mandar un análisis breve y una propuesta por WhatsApp?",
    "objecion_probable": "No necesitamos web, nos va bien con redes.",
    "respuesta_breve": "Entiendo, las redes funcionan bien. Pero cada turista que busca en Google y no los encuentra se va a otro lado. La web no reemplaza redes — las complementa.",
    "fortalezas": [
      "Rating excepcional (4.8⭐)",
      "176 reseñas = base de clientes activa"
    ],
    "problemas": [
      "Sin sitio web — invisible en búsquedas de Google",
      "Depende 100% de redes y Maps"
    ],
    "beneficios": [
      "Galería de trabajos que genera confianza",
      "Agenda de citas online / WhatsApp directo",
      "Se diferencia del 90% de barberías sin web"
    ],
    "horario_nota": "",
    "horario_grupo": 3,
    "horario_label": "🌤️ TARDE (3-6pm)",
    "prioridad_manana_orden": 41,
    "score": 67.81832317618313
  },
  {
    "nombre": "David_barbercuts 🦈🐋🐙",
    "nicho": "barber shop",
    "ciudad": "CSL",
    "rating": 5,
    "resenas": 108,
    "telefono": "+52 772 158 2412",
    "tiene_web": "no",
    "calidad_web": "sin web",
    "web_status": "NO TIENE WEB",
    "website": "",
    "google_maps": "https://www.google.com/maps/place/?q=place_id:ChIJi0uy_cxLr4YRKHHNV5po7sQ",
    "tipo_presencia_digital": "sin web",
    "fit_llamada_manana": "alto",
    "contacto_probable": "dueño o encargado directo",
    "observacion_clave": "Con 108 reseñas y 5.0⭐ ya tienen reputación — pero sin web no la están capitalizando en Google.",
    "beneficio_principal": "Galería de cortes + agenda por WhatsApp = más clientes nuevos.",
    "apertura_1linea": "Hola, revisé su presencia digital y vi una oportunidad clara de mejora.",
    "cta_sugerido": "¿Te puedo mandar un análisis breve y una propuesta por WhatsApp?",
    "objecion_probable": "No necesitamos web, nos va bien con redes.",
    "respuesta_breve": "Entiendo, las redes funcionan bien. Pero cada turista que busca en Google y no los encuentra se va a otro lado. La web no reemplaza redes — las complementa.",
    "fortalezas": [
      "Rating excepcional (5.0⭐)",
      "108 reseñas = base de clientes activa"
    ],
    "problemas": [
      "Sin sitio web — invisible en búsquedas de Google",
      "Depende 100% de redes y Maps"
    ],
    "beneficios": [
      "Galería de trabajos que genera confianza",
      "Agenda de citas online / WhatsApp directo",
      "Se diferencia del 90% de barberías sin web"
    ],
    "horario_nota": "",
    "horario_grupo": 3,
    "horario_label": "🌤️ TARDE (3-6pm)",
    "prioridad_manana_orden": 42,
    "score": 66.4106561356211
  },
  {
    "nombre": "Salón Romina",
    "nicho": "beauty salon",
    "ciudad": "CSL",
    "rating": 4.9,
    "resenas": 103,
    "telefono": "+52 668 130 8387",
    "tiene_web": "no",
    "calidad_web": "sin web",
    "web_status": "NO TIENE WEB",
    "website": "",
    "google_maps": "https://www.google.com/maps/place/?q=place_id:ChIJSYZGDcxLr4YRz4OBJhfqmns",
    "tipo_presencia_digital": "sin web",
    "fit_llamada_manana": "alto",
    "contacto_probable": "dueño o encargado directo",
    "observacion_clave": "Con 103 reseñas y 4.9⭐ ya tienen reputación — pero sin web no la están capitalizando en Google.",
    "beneficio_principal": "Galería + agenda online = más clientes nuevos.",
    "apertura_1linea": "Hola, revisé su presencia digital y vi una oportunidad clara de mejora.",
    "cta_sugerido": "¿Te puedo mandar un análisis breve y una propuesta por WhatsApp?",
    "objecion_probable": "No necesitamos web, nos va bien con redes.",
    "respuesta_breve": "Entiendo, las redes funcionan bien. Pero cada turista que busca en Google y no los encuentra se va a otro lado. La web no reemplaza redes — las complementa.",
    "fortalezas": [
      "Rating excepcional (4.9⭐)",
      "103 reseñas = base de clientes activa"
    ],
    "problemas": [
      "Sin sitio web — invisible en búsquedas de Google",
      "Depende 100% de redes y Maps"
    ],
    "beneficios": [
      "Galería de trabajos que genera confianza",
      "Agenda de citas online",
      "Se diferencia de competencia sin web"
    ],
    "horario_nota": "",
    "horario_grupo": 3,
    "horario_label": "🌤️ TARDE (3-6pm)",
    "prioridad_manana_orden": 43,
    "score": 65.71017204232521
  },
  {
    "nombre": "CIEN ESTILOS SALON DE BELLEZA",
    "nicho": "beauty salon",
    "ciudad": "SJC",
    "rating": 4.9,
    "resenas": 97,
    "telefono": "+52 624 142 3766",
    "tiene_web": "no",
    "calidad_web": "sin web",
    "web_status": "NO TIENE WEB",
    "website": "",
    "google_maps": "Ver mapa",
    "tipo_presencia_digital": "sin web",
    "fit_llamada_manana": "alto",
    "contacto_probable": "dueño o encargado directo",
    "observacion_clave": "4.9⭐ con 97 reseñas y sin web. Una web profesional les daría credibilidad inmediata.",
    "beneficio_principal": "Galería + agenda online = más clientes nuevos.",
    "apertura_1linea": "Hola, revisé su presencia digital y vi una oportunidad clara de mejora.",
    "cta_sugerido": "¿Te puedo mandar un análisis breve y una propuesta por WhatsApp?",
    "objecion_probable": "No necesitamos web, nos va bien con redes.",
    "respuesta_breve": "Entiendo, las redes funcionan bien. Pero cada turista que busca en Google y no los encuentra se va a otro lado. La web no reemplaza redes — las complementa.",
    "fortalezas": [
      "Rating excepcional (4.9⭐)",
      "97 reseñas = en crecimiento"
    ],
    "problemas": [
      "Sin sitio web — invisible en búsquedas de Google",
      "Depende 100% de redes y Maps"
    ],
    "beneficios": [
      "Galería de trabajos que genera confianza",
      "Agenda de citas online",
      "Se diferencia de competencia sin web"
    ],
    "horario_nota": "",
    "horario_grupo": 3,
    "horario_label": "🌤️ TARDE (3-6pm)",
    "prioridad_manana_orden": 44,
    "score": 65.41608379466658
  },
  {
    "nombre": "Lousant Salon",
    "nicho": "beauty salon",
    "ciudad": "SJC",
    "rating": 4.5,
    "resenas": 108,
    "telefono": "+52 624 123 5824",
    "tiene_web": "no",
    "calidad_web": "sin web",
    "web_status": "NO TIENE WEB",
    "website": "",
    "google_maps": "Ver mapa",
    "tipo_presencia_digital": "sin web",
    "fit_llamada_manana": "alto",
    "contacto_probable": "dueño o encargado directo",
    "observacion_clave": "Con 108 reseñas y 4.5⭐ ya tienen reputación — pero sin web no la están capitalizando en Google.",
    "beneficio_principal": "Galería + agenda online = más clientes nuevos.",
    "apertura_1linea": "Hola, revisé su presencia digital y vi una oportunidad clara de mejora.",
    "cta_sugerido": "¿Te puedo mandar un análisis breve y una propuesta por WhatsApp?",
    "objecion_probable": "No necesitamos web, nos va bien con redes.",
    "respuesta_breve": "Entiendo, las redes funcionan bien. Pero cada turista que busca en Google y no los encuentra se va a otro lado. La web no reemplaza redes — las complementa.",
    "fortalezas": [
      "Buen rating (4.5⭐)",
      "108 reseñas = base de clientes activa"
    ],
    "problemas": [
      "Sin sitio web — invisible en búsquedas de Google",
      "Depende 100% de redes y Maps"
    ],
    "beneficios": [
      "Galería de trabajos que genera confianza",
      "Agenda de citas online",
      "Se diferencia de competencia sin web"
    ],
    "horario_nota": "",
    "horario_grupo": 3,
    "horario_label": "🌤️ TARDE (3-6pm)",
    "prioridad_manana_orden": 45,
    "score": 64.06959052205899
  },
  {
    "nombre": "Cock’s Cantina",
    "nicho": "cocktail bar",
    "ciudad": "CSL",
    "rating": 4.7,
    "resenas": 288,
    "telefono": "+52 55 2564 5996",
    "tiene_web": "no",
    "calidad_web": "sin web",
    "web_status": "NO TIENE WEB",
    "website": "",
    "google_maps": "https://www.google.com/maps/place/?q=place_id:ChIJc2G16_xKr4YRxgIN18u09no",
    "tipo_presencia_digital": "sin web",
    "fit_llamada_manana": "alto",
    "contacto_probable": "preguntar por el encargado",
    "observacion_clave": "Con 288 reseñas y 4.7⭐ ya tienen reputación — pero sin web no la están capitalizando en Google.",
    "beneficio_principal": "Menú digital + reservaciones = más mesas llenas.",
    "apertura_1linea": "Hola, revisé su presencia digital y vi una oportunidad clara de mejora.",
    "cta_sugerido": "¿Te puedo mandar un análisis breve y una propuesta por WhatsApp?",
    "objecion_probable": "No necesitamos web, nos va bien con redes.",
    "respuesta_breve": "Entiendo, las redes funcionan bien. Pero cada turista que busca en Google y no los encuentra se va a otro lado. La web no reemplaza redes — las complementa.",
    "fortalezas": [
      "Buen rating (4.7⭐)",
      "288 reseñas = base de clientes activa"
    ],
    "problemas": [
      "Sin sitio web — invisible en búsquedas de Google",
      "Depende 100% de redes y Maps"
    ],
    "beneficios": [
      "Menú digital accesible 24/7",
      "Reservaciones directas sin intermediarios",
      "Turistas lo encuentran ANTES de llegar a Cabo"
    ],
    "horario_nota": "",
    "horario_grupo": 4,
    "horario_label": "🌙 NOCHE (6-8pm)",
    "prioridad_manana_orden": 46,
    "score": 64.61591425663894
  },
  {
    "nombre": "Garage Coffee & Bar",
    "nicho": "cocktail bar",
    "ciudad": "SJC",
    "rating": 4.2,
    "resenas": 551,
    "telefono": "+52 624 123 2842",
    "tiene_web": "no",
    "calidad_web": "web muy buena",
    "web_status": "NO TIENE WEB",
    "website": "",
    "google_maps": "Ver mapa",
    "tipo_presencia_digital": "sin web",
    "fit_llamada_manana": "alto",
    "contacto_probable": "preguntar por el encargado",
    "observacion_clave": "Tienen 551 reseñas y 4.2⭐ pero CERO presencia web. Cada búsqueda de 'cocktail bar' en Cabo donde no aparecen es dinero perdido.",
    "beneficio_principal": "Menú digital + reservaciones = más mesas llenas.",
    "apertura_1linea": "Hola, revisé su presencia digital y vi una oportunidad clara de mejora.",
    "cta_sugerido": "¿Te puedo mandar un análisis breve y una propuesta por WhatsApp?",
    "objecion_probable": "No necesitamos web, nos va bien con redes.",
    "respuesta_breve": "Entiendo, las redes funcionan bien. Pero cada turista que busca en Google y no los encuentra se va a otro lado. La web no reemplaza redes — las complementa.",
    "fortalezas": [
      "Rating sólido (4.2⭐)",
      "551 reseñas = buena reputación"
    ],
    "problemas": [
      "Sin sitio web — invisible en búsquedas de Google",
      "Depende 100% de redes y Maps"
    ],
    "beneficios": [
      "Menú digital accesible 24/7",
      "Reservaciones directas sin intermediarios",
      "Turistas lo encuentran ANTES de llegar a Cabo"
    ],
    "horario_nota": "",
    "horario_grupo": 4,
    "horario_label": "🌙 NOCHE (6-8pm)",
    "prioridad_manana_orden": 47,
    "score": 64.50928619844224
  },
  {
    "nombre": "Medano Hotel and Spa",
    "nicho": "hotel",
    "ciudad": "CSL",
    "rating": 4.5,
    "resenas": 869,
    "telefono": "+52 624 104 9660",
    "tiene_web": "sí",
    "calidad_web": "web muy básica",
    "web_status": "WEB MUY BÁSICA",
    "website": "http://www.medanocabo.com",
    "google_maps": "https://www.google.com/maps/place/?q=place_id:ChIJX2c7YfxKr4YRyvbR3fSsWYc",
    "tipo_presencia_digital": "web propia básica",
    "fit_llamada_manana": "medio",
    "contacto_probable": "recepción → gerente general",
    "observacion_clave": "Su web es muy básica — no refleja las 4.5⭐ que realmente tienen. Un turista ve la web y no siente la misma experiencia.",
    "beneficio_principal": "Reservaciones directas sin comisión de OTAs.",
    "apertura_1linea": "Hola, revisé su presencia digital y vi una oportunidad clara de mejora.",
    "cta_sugerido": "¿Te puedo mandar un análisis breve y una propuesta por WhatsApp?",
    "objecion_probable": "Ya tenemos web.",
    "respuesta_breve": "Sí, vi su web. El tema es que no refleja las 4.5⭐ que tienen. Un turista ve la web y no siente la misma experiencia. Un rediseño cambia eso.",
    "fortalezas": [
      "Buen rating (4.5⭐)",
      "869 reseñas = reputación establecida"
    ],
    "problemas": [
      "Web no refleja la calidad real del negocio",
      "Pierde credibilidad vs competencia"
    ],
    "beneficios": [
      "Reservaciones directas sin comisión OTAs",
      "Galería profesional",
      "Control de imagen y precios"
    ],
    "horario_nota": "",
    "horario_grupo": 1,
    "horario_label": "🌅 MAÑANA (8-11am)",
    "prioridad_manana_orden": 48,
    "score": 55.453044063694264
  },
  {
    "nombre": "Cabo Vista Hotel",
    "nicho": "hotel",
    "ciudad": "CSL",
    "rating": 4.6,
    "resenas": 656,
    "telefono": "+52 624 143 5756",
    "tiene_web": "sí",
    "calidad_web": "web muy básica",
    "web_status": "WEB MUY BÁSICA",
    "website": "https://www.cabovistahotel.com",
    "google_maps": "https://www.google.com/maps/place/?q=place_id:ChIJsTnW0fFKr4YR2uljRTyr6Xc",
    "tipo_presencia_digital": "web propia básica",
    "fit_llamada_manana": "medio",
    "contacto_probable": "recepción → gerente general",
    "observacion_clave": "Su web es muy básica — no refleja las 4.6⭐ que realmente tienen. Un turista ve la web y no siente la misma experiencia.",
    "beneficio_principal": "Reservaciones directas sin comisión de OTAs.",
    "apertura_1linea": "Hola, revisé su presencia digital y vi una oportunidad clara de mejora.",
    "cta_sugerido": "¿Te puedo mandar un análisis breve y una propuesta por WhatsApp?",
    "objecion_probable": "Ya tenemos web.",
    "respuesta_breve": "Sí, vi su web. El tema es que no refleja las 4.6⭐ que tienen. Un turista ve la web y no siente la misma experiencia. Un rediseño cambia eso.",
    "fortalezas": [
      "Buen rating (4.6⭐)",
      "656 reseñas = reputación establecida"
    ],
    "problemas": [
      "Web no refleja la calidad real del negocio",
      "Pierde credibilidad vs competencia"
    ],
    "beneficios": [
      "Reservaciones directas sin comisión OTAs",
      "Galería profesional",
      "Control de imagen y precios"
    ],
    "horario_nota": "",
    "horario_grupo": 1,
    "horario_label": "🌅 MAÑANA (8-11am)",
    "prioridad_manana_orden": 49,
    "score": 54.836339629142806
  },
  {
    "nombre": "El Encanto Inn & Suites",
    "nicho": "hotel",
    "ciudad": "SJC",
    "rating": 4.3,
    "resenas": 371,
    "telefono": "+52 624 142 0388",
    "tiene_web": "sí",
    "calidad_web": "web muy básica",
    "web_status": "WEB MUY BÁSICA",
    "website": "http://www.elencantoinn.com",
    "google_maps": "Ver mapa",
    "tipo_presencia_digital": "web propia básica",
    "fit_llamada_manana": "medio",
    "contacto_probable": "recepción → gerente general",
    "observacion_clave": "Su web es muy básica — no refleja las 4.3⭐ que realmente tienen. Un turista ve la web y no siente la misma experiencia.",
    "beneficio_principal": "Reservaciones directas sin comisión de OTAs.",
    "apertura_1linea": "Hola, revisé su presencia digital y vi una oportunidad clara de mejora.",
    "cta_sugerido": "¿Te puedo mandar un análisis breve y una propuesta por WhatsApp?",
    "objecion_probable": "Ya tenemos web.",
    "respuesta_breve": "Sí, vi su web. El tema es que no refleja las 4.3⭐ que tienen. Un turista ve la web y no siente la misma experiencia. Un rediseño cambia eso.",
    "fortalezas": [
      "Rating sólido (4.3⭐)",
      "371 reseñas = reputación establecida"
    ],
    "problemas": [
      "Web no refleja la calidad real del negocio",
      "Pierde credibilidad vs competencia"
    ],
    "beneficios": [
      "Reservaciones directas sin comisión OTAs",
      "Galería profesional",
      "Control de imagen y precios"
    ],
    "horario_nota": "",
    "horario_grupo": 1,
    "horario_label": "🌅 MAÑANA (8-11am)",
    "prioridad_manana_orden": 50,
    "score": 50.43966886921197
  },
  {
    "nombre": "Blarney Castle Inn",
    "nicho": "hotel",
    "ciudad": "CSL",
    "rating": 4.8,
    "resenas": 166,
    "telefono": "+52 624 143 2160",
    "tiene_web": "sí",
    "calidad_web": "web muy básica",
    "web_status": "WEB MUY BÁSICA",
    "website": "https://www.blarneycastleinncabo.com",
    "google_maps": "https://www.google.com/maps/place/?q=place_id:ChIJfdzLAO1Kr4YRHBFBFKKmqfs",
    "tipo_presencia_digital": "web propia básica",
    "fit_llamada_manana": "medio",
    "contacto_probable": "recepción → gerente general",
    "observacion_clave": "Su web es muy básica — no refleja las 4.8⭐ que realmente tienen. Un turista ve la web y no siente la misma experiencia.",
    "beneficio_principal": "Reservaciones directas sin comisión de OTAs.",
    "apertura_1linea": "Hola, revisé su presencia digital y vi una oportunidad clara de mejora.",
    "cta_sugerido": "¿Te puedo mandar un análisis breve y una propuesta por WhatsApp?",
    "objecion_probable": "Ya tenemos web.",
    "respuesta_breve": "Sí, vi su web. El tema es que no refleja las 4.8⭐ que tienen. Un turista ve la web y no siente la misma experiencia. Un rediseño cambia eso.",
    "fortalezas": [
      "Rating excepcional (4.8⭐)",
      "166 reseñas = reputación establecida"
    ],
    "problemas": [
      "Web no refleja la calidad real del negocio",
      "Pierde credibilidad vs competencia"
    ],
    "beneficios": [
      "Reservaciones directas sin comisión OTAs",
      "Galería profesional",
      "Control de imagen y precios"
    ],
    "horario_nota": "",
    "horario_grupo": 1,
    "horario_label": "🌅 MAÑANA (8-11am)",
    "prioridad_manana_orden": 51,
    "score": 49.53754138411141
  },
  {
    "nombre": "Los Milagros Hotel",
    "nicho": "boutique hotel",
    "ciudad": "CSL",
    "rating": 4.6,
    "resenas": 147,
    "telefono": "+52 624 143 4566",
    "tiene_web": "sí",
    "calidad_web": "web muy básica",
    "web_status": "WEB MUY BÁSICA",
    "website": "",
    "google_maps": "https://www.google.com/maps/place/?q=place_id:ChIJ6UlbY-VKr4YRkaIBWlV4TjQ",
    "tipo_presencia_digital": "web propia básica",
    "fit_llamada_manana": "medio",
    "contacto_probable": "recepción → gerente general",
    "observacion_clave": "Su web es muy básica — no refleja las 4.6⭐ que realmente tienen. Un turista ve la web y no siente la misma experiencia.",
    "beneficio_principal": "Reservaciones directas sin comisión de OTAs.",
    "apertura_1linea": "Hola, revisé su presencia digital y vi una oportunidad clara de mejora.",
    "cta_sugerido": "¿Te puedo mandar un análisis breve y una propuesta por WhatsApp?",
    "objecion_probable": "Ya tenemos web.",
    "respuesta_breve": "Sí, vi su web. El tema es que no refleja las 4.6⭐ que tienen. Un turista ve la web y no siente la misma experiencia. Un rediseño cambia eso.",
    "fortalezas": [
      "Buen rating (4.6⭐)",
      "147 reseñas = reputación establecida"
    ],
    "problemas": [
      "Web no refleja la calidad real del negocio",
      "Pierde credibilidad vs competencia"
    ],
    "beneficios": [
      "Reservaciones directas sin comisión OTAs",
      "Galería profesional",
      "Control de imagen y precios"
    ],
    "horario_nota": "",
    "horario_grupo": 1,
    "horario_label": "🌅 MAÑANA (8-11am)",
    "prioridad_manana_orden": 52,
    "score": 47.955989899182185
  },
  {
    "nombre": "Hotel Posada Señor Mañana",
    "nicho": "hotel",
    "ciudad": "SJC",
    "rating": 4.2,
    "resenas": 226,
    "telefono": "+52 624 142 1372",
    "tiene_web": "sí",
    "calidad_web": "web muy básica",
    "web_status": "WEB MUY BÁSICA",
    "website": "http://www.senormanana.com",
    "google_maps": "Ver mapa",
    "tipo_presencia_digital": "web propia básica",
    "fit_llamada_manana": "medio",
    "contacto_probable": "recepción → gerente general",
    "observacion_clave": "Su web es muy básica — no refleja las 4.2⭐ que realmente tienen. Un turista ve la web y no siente la misma experiencia.",
    "beneficio_principal": "Reservaciones directas sin comisión de OTAs.",
    "apertura_1linea": "Hola, revisé su presencia digital y vi una oportunidad clara de mejora.",
    "cta_sugerido": "¿Te puedo mandar un análisis breve y una propuesta por WhatsApp?",
    "objecion_probable": "Ya tenemos web.",
    "respuesta_breve": "Sí, vi su web. El tema es que no refleja las 4.2⭐ que tienen. Un turista ve la web y no siente la misma experiencia. Un rediseño cambia eso.",
    "fortalezas": [
      "Rating sólido (4.2⭐)",
      "226 reseñas = reputación establecida"
    ],
    "problemas": [
      "Web no refleja la calidad real del negocio",
      "Pierde credibilidad vs competencia"
    ],
    "beneficios": [
      "Reservaciones directas sin comisión OTAs",
      "Galería profesional",
      "Control de imagen y precios"
    ],
    "horario_nota": "",
    "horario_grupo": 1,
    "horario_label": "🌅 MAÑANA (8-11am)",
    "prioridad_manana_orden": 53,
    "score": 47.76624699694361
  },
  {
    "nombre": "Suites Lomboy & Plaza",
    "nicho": "hotel",
    "ciudad": "SJC",
    "rating": 4.7,
    "resenas": 104,
    "telefono": "+52 624 210 7471",
    "tiene_web": "sí",
    "calidad_web": "web muy básica",
    "web_status": "WEB MUY BÁSICA",
    "website": "http://www.suiteslomboy.com",
    "google_maps": "Ver mapa",
    "tipo_presencia_digital": "web propia básica",
    "fit_llamada_manana": "medio",
    "contacto_probable": "recepción → gerente general",
    "observacion_clave": "Su web es muy básica — no refleja las 4.7⭐ que realmente tienen. Un turista ve la web y no siente la misma experiencia.",
    "beneficio_principal": "Reservaciones directas sin comisión de OTAs.",
    "apertura_1linea": "Hola, revisé su presencia digital y vi una oportunidad clara de mejora.",
    "cta_sugerido": "¿Te puedo mandar un análisis breve y una propuesta por WhatsApp?",
    "objecion_probable": "Ya tenemos web.",
    "respuesta_breve": "Sí, vi su web. El tema es que no refleja las 4.7⭐ que tienen. Un turista ve la web y no siente la misma experiencia. Un rediseño cambia eso.",
    "fortalezas": [
      "Buen rating (4.7⭐)",
      "104 reseñas = reputación establecida"
    ],
    "problemas": [
      "Web no refleja la calidad real del negocio",
      "Pierde credibilidad vs competencia"
    ],
    "beneficios": [
      "Reservaciones directas sin comisión OTAs",
      "Galería profesional",
      "Control de imagen y precios"
    ],
    "horario_nota": "",
    "horario_grupo": 1,
    "horario_label": "🌅 MAÑANA (8-11am)",
    "prioridad_manana_orden": 54,
    "score": 46.82863722596446
  },
  {
    "nombre": "Hotel Boutique Plaza Doradas",
    "nicho": "boutique hotel",
    "ciudad": "SJC",
    "rating": 4.3,
    "resenas": 157,
    "telefono": "+52 624 142 0710",
    "tiene_web": "sí",
    "calidad_web": "web desactualizada",
    "web_status": "WEB DESACTUALIZADA",
    "website": "https://www.hotelboutiqueplazadoradas.com/index.html",
    "google_maps": "Ver mapa",
    "tipo_presencia_digital": "web propia desactualizada",
    "fit_llamada_manana": "medio",
    "contacto_probable": "recepción → gerente general",
    "observacion_clave": "Su web está desactualizada. Da una primera impresión que no corresponde con sus 4.3⭐ y 157 reseñas.",
    "beneficio_principal": "Reservaciones directas sin comisión de OTAs.",
    "apertura_1linea": "Hola, revisé su presencia digital y vi una oportunidad clara de mejora.",
    "cta_sugerido": "¿Te puedo mandar un análisis breve y una propuesta por WhatsApp?",
    "objecion_probable": "Ya tenemos web.",
    "respuesta_breve": "Sí, vi su web. El tema es que no refleja las 4.3⭐ que tienen. Un turista ve la web y no siente la misma experiencia. Un rediseño cambia eso.",
    "fortalezas": [
      "Rating sólido (4.3⭐)",
      "157 reseñas = reputación establecida"
    ],
    "problemas": [
      "Web desactualizada — da mala primera impresión",
      "Info incorrecta o incompleta"
    ],
    "beneficios": [
      "Reservaciones directas sin comisión OTAs",
      "Galería profesional",
      "Control de imagen y precios"
    ],
    "horario_nota": "",
    "horario_grupo": 1,
    "horario_label": "🌅 MAÑANA (8-11am)",
    "prioridad_manana_orden": 55,
    "score": 46.74185696299772
  },
  {
    "nombre": "San Lucero Restaurant & Wine Bar",
    "nicho": "bakery",
    "ciudad": "CSL",
    "rating": 4.8,
    "resenas": 1165,
    "telefono": "+52 624 192 6776",
    "tiene_web": "sí",
    "calidad_web": "web muy básica",
    "web_status": "WEB MUY BÁSICA",
    "website": "http://www.sanlucero.com",
    "google_maps": "https://www.google.com/maps/place/?q=place_id:ChIJiZFEgwhLr4YRpH6fdv9AEx4",
    "tipo_presencia_digital": "web propia básica",
    "fit_llamada_manana": "medio",
    "contacto_probable": "gerente o dueño (preguntar por encargado)",
    "observacion_clave": "Su web es muy básica — no refleja las 4.8⭐ que realmente tienen. Un turista ve la web y no siente la misma experiencia.",
    "beneficio_principal": "Menú digital + reservaciones = más mesas llenas.",
    "apertura_1linea": "Hola, revisé su presencia digital y vi una oportunidad clara de mejora.",
    "cta_sugerido": "¿Te puedo mandar un análisis breve y una propuesta por WhatsApp?",
    "objecion_probable": "Ya tenemos web.",
    "respuesta_breve": "Sí, vi su web. El tema es que no refleja las 4.8⭐ que tienen. Un turista ve la web y no siente la misma experiencia. Un rediseño cambia eso.",
    "fortalezas": [
      "Rating excepcional (4.8⭐)",
      "1,165 reseñas = negocio muy establecido"
    ],
    "problemas": [
      "Web no refleja la calidad real del negocio",
      "Pierde credibilidad vs competencia"
    ],
    "beneficios": [
      "Menú digital accesible 24/7",
      "Reservaciones directas sin intermediarios",
      "Turistas lo encuentran ANTES de llegar a Cabo"
    ],
    "horario_nota": "",
    "horario_grupo": 2,
    "horario_label": "☀️ MEDIODÍA (11am-2pm)",
    "prioridad_manana_orden": 56,
    "score": 66.89028655679904
  },
  {
    "nombre": "Sea Sports In Cabo",
    "nicho": "tour operator",
    "ciudad": "CSL",
    "rating": 5,
    "resenas": 833,
    "telefono": "+52 624 155 0051",
    "tiene_web": "sí",
    "calidad_web": "web muy básica",
    "web_status": "WEB MUY BÁSICA",
    "website": "https://seasportsincabo.my.canva.site",
    "google_maps": "https://www.google.com/maps/place/?q=place_id:ChIJCwX1tuRKr4YRM7UuEXU1E18",
    "tipo_presencia_digital": "web propia básica",
    "fit_llamada_manana": "medio",
    "contacto_probable": "oficina → dueño u operador",
    "observacion_clave": "Su web es muy básica — no refleja las 5.0⭐ que realmente tienen. Un turista ve la web y no siente la misma experiencia.",
    "beneficio_principal": "Booking directo = más reservaciones sin comisión.",
    "apertura_1linea": "Hola, revisé su presencia digital y vi una oportunidad clara de mejora.",
    "cta_sugerido": "¿Te puedo mandar un análisis breve y una propuesta por WhatsApp?",
    "objecion_probable": "Ya tenemos web.",
    "respuesta_breve": "Sí, vi su web. El tema es que no refleja las 5.0⭐ que tienen. Un turista ve la web y no siente la misma experiencia. Un rediseño cambia eso.",
    "fortalezas": [
      "Rating excepcional (5.0⭐)",
      "833 reseñas = buena reputación"
    ],
    "problemas": [
      "Web no refleja la calidad real del negocio",
      "Pierde credibilidad vs competencia"
    ],
    "beneficios": [
      "Booking directo sin comisión de plataformas",
      "Galería + testimonios que venden la experiencia",
      "SEO para turistas buscando actividades en Cabo"
    ],
    "horario_nota": "",
    "horario_grupo": 2,
    "horario_label": "☀️ MEDIODÍA (11am-2pm)",
    "prioridad_manana_orden": 57,
    "score": 66.62516821083422
  },
  {
    "nombre": "G-Force Adventures",
    "nicho": "tour operator",
    "ciudad": "CSL",
    "rating": 4.8,
    "resenas": 867,
    "telefono": "+52 624 143 2199",
    "tiene_web": "sí",
    "calidad_web": "web muy básica",
    "web_status": "WEB MUY BÁSICA",
    "website": "https://gforcetours.com",
    "google_maps": "https://www.google.com/maps/place/?q=place_id:ChIJ9Z9ydelKr4YRuysYRUz2MIE",
    "tipo_presencia_digital": "web propia básica",
    "fit_llamada_manana": "medio",
    "contacto_probable": "oficina → dueño u operador",
    "observacion_clave": "Su web es muy básica — no refleja las 4.8⭐ que realmente tienen. Un turista ve la web y no siente la misma experiencia.",
    "beneficio_principal": "Booking directo = más reservaciones sin comisión.",
    "apertura_1linea": "Hola, revisé su presencia digital y vi una oportunidad clara de mejora.",
    "cta_sugerido": "¿Te puedo mandar un análisis breve y una propuesta por WhatsApp?",
    "objecion_probable": "Ya tenemos web.",
    "respuesta_breve": "Sí, vi su web. El tema es que no refleja las 4.8⭐ que tienen. Un turista ve la web y no siente la misma experiencia. Un rediseño cambia eso.",
    "fortalezas": [
      "Rating excepcional (4.8⭐)",
      "867 reseñas = buena reputación"
    ],
    "problemas": [
      "Web no refleja la calidad real del negocio",
      "Pierde credibilidad vs competencia"
    ],
    "beneficios": [
      "Booking directo sin comisión de plataformas",
      "Galería + testimonios que venden la experiencia",
      "SEO para turistas buscando actividades en Cabo"
    ],
    "horario_nota": "",
    "horario_grupo": 2,
    "horario_label": "☀️ MEDIODÍA (11am-2pm)",
    "prioridad_manana_orden": 58,
    "score": 65.4721870885466
  },
  {
    "nombre": "Ruba's Bakery & Bistro",
    "nicho": "bakery",
    "ciudad": "CSL",
    "rating": 4.6,
    "resenas": 962,
    "telefono": "+52 624 225 3221",
    "tiene_web": "sí",
    "calidad_web": "web muy básica",
    "web_status": "WEB MUY BÁSICA",
    "website": "http://www.rubas.mx",
    "google_maps": "https://www.google.com/maps/place/?q=place_id:ChIJswS6XihRr4YRE97oUL35M24",
    "tipo_presencia_digital": "web propia básica",
    "fit_llamada_manana": "medio",
    "contacto_probable": "gerente o dueño (preguntar por encargado)",
    "observacion_clave": "Su web es muy básica — no refleja las 4.6⭐ que realmente tienen. Un turista ve la web y no siente la misma experiencia.",
    "beneficio_principal": "Menú digital + reservaciones = más mesas llenas.",
    "apertura_1linea": "Hola, revisé su presencia digital y vi una oportunidad clara de mejora.",
    "cta_sugerido": "¿Te puedo mandar un análisis breve y una propuesta por WhatsApp?",
    "objecion_probable": "Ya tenemos web.",
    "respuesta_breve": "Sí, vi su web. El tema es que no refleja las 4.6⭐ que tienen. Un turista ve la web y no siente la misma experiencia. Un rediseño cambia eso.",
    "fortalezas": [
      "Buen rating (4.6⭐)",
      "962 reseñas = buena reputación"
    ],
    "problemas": [
      "Web no refleja la calidad real del negocio",
      "Pierde credibilidad vs competencia"
    ],
    "beneficios": [
      "Menú digital accesible 24/7",
      "Reservaciones directas sin intermediarios",
      "Turistas lo encuentran ANTES de llegar a Cabo"
    ],
    "horario_nota": "",
    "horario_grupo": 2,
    "horario_label": "☀️ MEDIODÍA (11am-2pm)",
    "prioridad_manana_orden": 59,
    "score": 64.59746647306224
  },
  {
    "nombre": "EcoCat Catamaran Tours",
    "nicho": "tour operator",
    "ciudad": "CSL",
    "rating": 4.7,
    "resenas": 794,
    "telefono": "+52 624 157 4685",
    "tiene_web": "sí",
    "calidad_web": "web muy básica",
    "web_status": "WEB MUY BÁSICA",
    "website": "http://caboecotours.com",
    "google_maps": "https://www.google.com/maps/place/?q=place_id:ChIJU5WNKuRKr4YRfZFUfLU0wt4",
    "tipo_presencia_digital": "web propia básica",
    "fit_llamada_manana": "medio",
    "contacto_probable": "oficina → dueño u operador",
    "observacion_clave": "Su web es muy básica — no refleja las 4.7⭐ que realmente tienen. Un turista ve la web y no siente la misma experiencia.",
    "beneficio_principal": "Booking directo = más reservaciones sin comisión.",
    "apertura_1linea": "Hola, revisé su presencia digital y vi una oportunidad clara de mejora.",
    "cta_sugerido": "¿Te puedo mandar un análisis breve y una propuesta por WhatsApp?",
    "objecion_probable": "Ya tenemos web.",
    "respuesta_breve": "Sí, vi su web. El tema es que no refleja las 4.7⭐ que tienen. Un turista ve la web y no siente la misma experiencia. Un rediseño cambia eso.",
    "fortalezas": [
      "Buen rating (4.7⭐)",
      "794 reseñas = buena reputación"
    ],
    "problemas": [
      "Web no refleja la calidad real del negocio",
      "Pierde credibilidad vs competencia"
    ],
    "beneficios": [
      "Booking directo sin comisión de plataformas",
      "Galería + testimonios que venden la experiencia",
      "SEO para turistas buscando actividades en Cabo"
    ],
    "horario_nota": "",
    "horario_grupo": 2,
    "horario_label": "☀️ MEDIODÍA (11am-2pm)",
    "prioridad_manana_orden": 60,
    "score": 64.38229226786154
  },
  {
    "nombre": "Café Cabo Plaza Copan",
    "nicho": "cafe",
    "ciudad": "CSL",
    "rating": 4.3,
    "resenas": 1345,
    "telefono": "+52 624 105 1245",
    "tiene_web": "sí",
    "calidad_web": "web muy básica",
    "web_status": "WEB MUY BÁSICA",
    "website": "https://g.co/kgs/6pb49d",
    "google_maps": "https://www.google.com/maps/place/?q=place_id:ChIJT1jjqv5Kr4YRva5i4fDrp4k",
    "tipo_presencia_digital": "web propia básica",
    "fit_llamada_manana": "medio",
    "contacto_probable": "gerente o dueño (preguntar por encargado)",
    "observacion_clave": "Su web es muy básica — no refleja las 4.3⭐ que realmente tienen. Un turista ve la web y no siente la misma experiencia.",
    "beneficio_principal": "Menú digital + reservaciones = más mesas llenas.",
    "apertura_1linea": "Hola, revisé su presencia digital y vi una oportunidad clara de mejora.",
    "cta_sugerido": "¿Te puedo mandar un análisis breve y una propuesta por WhatsApp?",
    "objecion_probable": "Ya tenemos web.",
    "respuesta_breve": "Sí, vi su web. El tema es que no refleja las 4.3⭐ que tienen. Un turista ve la web y no siente la misma experiencia. Un rediseño cambia eso.",
    "fortalezas": [
      "Rating sólido (4.3⭐)",
      "1,345 reseñas = negocio muy establecido"
    ],
    "problemas": [
      "Web no refleja la calidad real del negocio",
      "Pierde credibilidad vs competencia"
    ],
    "beneficios": [
      "Menú digital accesible 24/7",
      "Reservaciones directas sin intermediarios",
      "Turistas lo encuentran ANTES de llegar a Cabo"
    ],
    "horario_nota": "",
    "horario_grupo": 2,
    "horario_label": "☀️ MEDIODÍA (11am-2pm)",
    "prioridad_manana_orden": 61,
    "score": 63.97784195575454
  },
  {
    "nombre": "Cabo Wabo Cantina",
    "nicho": "cocktail bar",
    "ciudad": "CSL",
    "rating": 4.4,
    "resenas": 6636,
    "telefono": "+52 624 143 1188",
    "tiene_web": "sí",
    "calidad_web": "web muy básica",
    "web_status": "WEB MUY BÁSICA",
    "website": "http://www.cabowabocantina.com",
    "google_maps": "https://www.google.com/maps/place/?q=place_id:ChIJh-tOmuVKr4YR-xU38u6Vqrg",
    "tipo_presencia_digital": "web propia básica",
    "fit_llamada_manana": "medio",
    "contacto_probable": "preguntar por el encargado",
    "observacion_clave": "Su web es muy básica — no refleja las 4.4⭐ que realmente tienen. Un turista ve la web y no siente la misma experiencia.",
    "beneficio_principal": "Menú digital + reservaciones = más mesas llenas.",
    "apertura_1linea": "Hola, revisé su presencia digital y vi una oportunidad clara de mejora.",
    "cta_sugerido": "¿Te puedo mandar un análisis breve y una propuesta por WhatsApp?",
    "objecion_probable": "Ya tenemos web.",
    "respuesta_breve": "Sí, vi su web. El tema es que no refleja las 4.4⭐ que tienen. Un turista ve la web y no siente la misma experiencia. Un rediseño cambia eso.",
    "fortalezas": [
      "Rating sólido (4.4⭐)",
      "6,636 reseñas = negocio muy establecido"
    ],
    "problemas": [
      "Web no refleja la calidad real del negocio",
      "Pierde credibilidad vs competencia"
    ],
    "beneficios": [
      "Menú digital accesible 24/7",
      "Reservaciones directas sin intermediarios",
      "Turistas lo encuentran ANTES de llegar a Cabo"
    ],
    "horario_nota": "",
    "horario_grupo": 4,
    "horario_label": "🌙 NOCHE (6-8pm)",
    "prioridad_manana_orden": 62,
    "score": 71.72116446576548
  },
  {
    "nombre": "Waldorf Astoria Los Cabos Pedregal",
    "nicho": "hotel",
    "ciudad": "CSL",
    "rating": 4.8,
    "resenas": 1945,
    "telefono": "+52 624 163 4300",
    "tiene_web": "sí",
    "calidad_web": "sin web",
    "web_status": "SOLO REDES (sin web propia)",
    "website": "https://www.waldorfastorialoscabospedregal.com/?seo_id=gmb-amer-wa-sjdwawa&y_source=1_mtqxmzu3ndytnze1lwxvy2f0aw9ulndlynnpdgu%3d",
    "google_maps": "https://www.google.com/maps/place/?q=place_id:ChIJCYgqW1JLr4YRfz0sT0h46B0",
    "tipo_presencia_digital": "solo redes",
    "fit_llamada_manana": "bajo",
    "contacto_probable": "recepción → gerente general",
    "observacion_clave": "1945 reseñas y solo redes sociales. Dependen 100% de Instagram/Maps — un sitio propio les da control.",
    "beneficio_principal": "Reservaciones directas sin comisión de OTAs.",
    "apertura_1linea": "Hola, revisé su presencia digital y vi una oportunidad clara de mejora.",
    "cta_sugerido": "¿Te puedo mandar un análisis breve y una propuesta por WhatsApp?",
    "objecion_probable": "No tenemos presupuesto.",
    "respuesta_breve": "Entiendo. Arrancamos desde $900 USD y en 10 días tienen su sitio. Es una inversión que se paga sola con los primeros clientes que llegan por Google.",
    "fortalezas": [
      "Rating excepcional (4.8⭐)",
      "1,945 reseñas = negocio muy establecido"
    ],
    "problemas": [
      "Sin sitio web propio — solo redes sociales",
      "No aparece en búsquedas de Google"
    ],
    "beneficios": [
      "Reservaciones directas sin comisión de OTAs",
      "Galería profesional que compite con Booking/Expedia",
      "Control total de su imagen y precios"
    ],
    "horario_nota": "",
    "horario_grupo": 1,
    "horario_label": "🌅 MAÑANA (8-11am)",
    "prioridad_manana_orden": 63,
    "score": 69.35048282905223
  },
  {
    "nombre": "Hotel Tesoro",
    "nicho": "hotel",
    "ciudad": "CSL",
    "rating": 4.3,
    "resenas": 4038,
    "telefono": "+52 624 173 9336",
    "tiene_web": "sí",
    "calidad_web": "web muy básica",
    "web_status": "WEB MUY BÁSICA",
    "website": "https://tesoroloscabos.com",
    "google_maps": "https://www.google.com/maps/place/?q=place_id:ChIJ37QWDIpcMYQROEF4_EyUYq4",
    "tipo_presencia_digital": "web propia básica",
    "fit_llamada_manana": "bajo",
    "contacto_probable": "recepción → gerente general",
    "observacion_clave": "Su web es muy básica — no refleja las 4.3⭐ que realmente tienen. Un turista ve la web y no siente la misma experiencia.",
    "beneficio_principal": "Reservaciones directas sin comisión de OTAs.",
    "apertura_1linea": "Hola, revisé su presencia digital y vi una oportunidad clara de mejora.",
    "cta_sugerido": "¿Te puedo mandar un análisis breve y una propuesta por WhatsApp?",
    "objecion_probable": "Ya tenemos web.",
    "respuesta_breve": "Sí, vi su web. El tema es que no refleja las 4.3⭐ que tienen. Un turista ve la web y no siente la misma experiencia. Un rediseño cambia eso.",
    "fortalezas": [
      "Rating sólido (4.3⭐)",
      "4,038 reseñas = negocio muy establecido"
    ],
    "problemas": [
      "Web no refleja la calidad real del negocio",
      "Pierde credibilidad vs competencia"
    ],
    "beneficios": [
      "Reservaciones directas sin comisión de OTAs",
      "Galería profesional que compite con Booking/Expedia",
      "Control total de su imagen y precios"
    ],
    "horario_nota": "",
    "horario_grupo": 1,
    "horario_label": "🌅 MAÑANA (8-11am)",
    "prioridad_manana_orden": 64,
    "score": 68.70507063515296
  },
  {
    "nombre": "The Cape, A Thompson Hotel, by Hyatt",
    "nicho": "boutique hotel",
    "ciudad": "CSL",
    "rating": 4.7,
    "resenas": 1757,
    "telefono": "+1 844-778-4322",
    "tiene_web": "sí",
    "calidad_web": "sin web",
    "web_status": "SOLO REDES (sin web propia)",
    "website": "https://www.hyatt.com/thompson-hotels/en-us/cslth-the-cape?src=corp_lclb_google_seo_cslth&utm_source=google&utm_medium=organic&utm_campaign=lmr",
    "google_maps": "https://www.google.com/maps/place/?q=place_id:ChIJ_UEptnBLr4YRJUI7AaOet3g",
    "tipo_presencia_digital": "solo redes",
    "fit_llamada_manana": "bajo",
    "contacto_probable": "recepción → gerente general",
    "observacion_clave": "1757 reseñas y solo redes sociales. Dependen 100% de Instagram/Maps — un sitio propio les da control.",
    "beneficio_principal": "Reservaciones directas sin comisión de OTAs.",
    "apertura_1linea": "Hola, revisé su presencia digital y vi una oportunidad clara de mejora.",
    "cta_sugerido": "¿Te puedo mandar un análisis breve y una propuesta por WhatsApp?",
    "objecion_probable": "No tenemos presupuesto.",
    "respuesta_breve": "Entiendo. Arrancamos desde $900 USD y en 10 días tienen su sitio. Es una inversión que se paga sola con los primeros clientes que llegan por Google.",
    "fortalezas": [
      "Buen rating (4.7⭐)",
      "1,757 reseñas = negocio muy establecido"
    ],
    "problemas": [
      "Sin sitio web propio — solo redes sociales",
      "No aparece en búsquedas de Google"
    ],
    "beneficios": [
      "Reservaciones directas sin comisión de OTAs",
      "Galería profesional que compite con Booking/Expedia",
      "Control total de su imagen y precios"
    ],
    "horario_nota": "",
    "horario_grupo": 1,
    "horario_label": "🌅 MAÑANA (8-11am)",
    "prioridad_manana_orden": 65,
    "score": 68.11540651447936
  },
  {
    "nombre": "Marina Fiesta Resort & Spa",
    "nicho": "hotel",
    "ciudad": "CSL",
    "rating": 4.4,
    "resenas": 1933,
    "telefono": "+52 624 145 6020",
    "tiene_web": "sí",
    "calidad_web": "web muy básica",
    "web_status": "WEB MUY BÁSICA",
    "website": "https://www.marinafiestaresort.com",
    "google_maps": "https://www.google.com/maps/place/?q=place_id:ChIJs-nShORKr4YRHvKueqG0Gyc",
    "tipo_presencia_digital": "web propia básica",
    "fit_llamada_manana": "bajo",
    "contacto_probable": "recepción → gerente general",
    "observacion_clave": "Su web es muy básica — no refleja las 4.4⭐ que realmente tienen. Un turista ve la web y no siente la misma experiencia.",
    "beneficio_principal": "Reservaciones directas sin comisión de OTAs.",
    "apertura_1linea": "Hola, revisé su presencia digital y vi una oportunidad clara de mejora.",
    "cta_sugerido": "¿Te puedo mandar un análisis breve y una propuesta por WhatsApp?",
    "objecion_probable": "Ya tenemos web.",
    "respuesta_breve": "Sí, vi su web. El tema es que no refleja las 4.4⭐ que tienen. Un turista ve la web y no siente la misma experiencia. Un rediseño cambia eso.",
    "fortalezas": [
      "Rating sólido (4.4⭐)",
      "1,933 reseñas = negocio muy establecido"
    ],
    "problemas": [
      "Web no refleja la calidad real del negocio",
      "Pierde credibilidad vs competencia"
    ],
    "beneficios": [
      "Reservaciones directas sin comisión de OTAs",
      "Galería profesional que compite con Booking/Expedia",
      "Control total de su imagen y precios"
    ],
    "horario_nota": "",
    "horario_grupo": 1,
    "horario_label": "🌅 MAÑANA (8-11am)",
    "prioridad_manana_orden": 66,
    "score": 66.29404530851666
  },
  {
    "nombre": "Seven Crown Express & Suites",
    "nicho": "hotel",
    "ciudad": "CSL",
    "rating": 4,
    "resenas": 1544,
    "telefono": "+52 624 143 7790",
    "tiene_web": "sí",
    "calidad_web": "web muy básica",
    "web_status": "WEB MUY BÁSICA",
    "website": "http://www.sevencrownbykavia.com",
    "google_maps": "https://www.google.com/maps/place/?q=place_id:ChIJtYYV8vtKr4YRwLMSjmM6Fyw",
    "tipo_presencia_digital": "web propia básica",
    "fit_llamada_manana": "bajo",
    "contacto_probable": "recepción → gerente general",
    "observacion_clave": "Su web es muy básica — no refleja las 4.0⭐ que realmente tienen. Un turista ve la web y no siente la misma experiencia.",
    "beneficio_principal": "Reservaciones directas sin comisión de OTAs.",
    "apertura_1linea": "Hola, revisé su presencia digital y vi una oportunidad clara de mejora.",
    "cta_sugerido": "¿Te puedo mandar un análisis breve y una propuesta por WhatsApp?",
    "objecion_probable": "Ya tenemos web.",
    "respuesta_breve": "Sí, vi su web. El tema es que no refleja las 4.0⭐ que tienen. Un turista ve la web y no siente la misma experiencia. Un rediseño cambia eso.",
    "fortalezas": [
      "Rating sólido (4.0⭐)",
      "1544 reseñas = reputación establecida"
    ],
    "problemas": [
      "Web no refleja la calidad real del negocio",
      "Pierde credibilidad vs competencia"
    ],
    "beneficios": [
      "Reservaciones directas sin comisión OTAs",
      "Galería profesional",
      "Control de imagen y precios"
    ],
    "horario_nota": "",
    "horario_grupo": 1,
    "horario_label": "🌅 MAÑANA (8-11am)",
    "prioridad_manana_orden": 67,
    "score": 54.36852692233889
  },
  {
    "nombre": "Comfort Inn & Suites Los Cabos",
    "nicho": "hotel",
    "ciudad": "CSL",
    "rating": 4,
    "resenas": 1193,
    "telefono": "+52 624 173 9340",
    "tiene_web": "sí",
    "calidad_web": "web muy básica",
    "web_status": "WEB MUY BÁSICA",
    "website": "https://www.choicehotels.com/es-mx/baja-california-sur/cabo-san-lucas/comfort-inn-hotels/mx096",
    "google_maps": "https://www.google.com/maps/place/?q=place_id:ChIJGWFb0YpKr4YRWoj2rPlSv1Y",
    "tipo_presencia_digital": "web propia básica",
    "fit_llamada_manana": "bajo",
    "contacto_probable": "recepción → gerente general",
    "observacion_clave": "Su web es muy básica — no refleja las 4.0⭐ que realmente tienen. Un turista ve la web y no siente la misma experiencia.",
    "beneficio_principal": "Reservaciones directas sin comisión de OTAs.",
    "apertura_1linea": "Hola, revisé su presencia digital y vi una oportunidad clara de mejora.",
    "cta_sugerido": "¿Te puedo mandar un análisis breve y una propuesta por WhatsApp?",
    "objecion_probable": "Ya tenemos web.",
    "respuesta_breve": "Sí, vi su web. El tema es que no refleja las 4.0⭐ que tienen. Un turista ve la web y no siente la misma experiencia. Un rediseño cambia eso.",
    "fortalezas": [
      "Rating sólido (4.0⭐)",
      "1193 reseñas = reputación establecida"
    ],
    "problemas": [
      "Web no refleja la calidad real del negocio",
      "Pierde credibilidad vs competencia"
    ],
    "beneficios": [
      "Reservaciones directas sin comisión OTAs",
      "Galería profesional",
      "Control de imagen y precios"
    ],
    "horario_nota": "",
    "horario_grupo": 1,
    "horario_label": "🌅 MAÑANA (8-11am)",
    "prioridad_manana_orden": 68,
    "score": 53.33690568839167
  },
  {
    "nombre": "Hotel Riu Palace Cabo San Lucas",
    "nicho": "hotel",
    "ciudad": "CSL",
    "rating": 4.4,
    "resenas": 14505,
    "telefono": "+52 624 146 7160",
    "tiene_web": "sí",
    "calidad_web": "web muy buena",
    "web_status": "TIENE WEB (web buena)",
    "website": "https://www.riu.com/en/hotel/mexico/los-cabos/hotel-riu-palace-cabo-san-lucas?utm_source=google&utm_medium=organic&utm_campaign=my_business&utm_content=xcl",
    "google_maps": "https://www.google.com/maps/place/?q=place_id:ChIJa_kUhQhLr4YRkSJwhGQishw",
    "tipo_presencia_digital": "web buena",
    "fit_llamada_manana": "bajo",
    "contacto_probable": "recepción → gerente general",
    "observacion_clave": "Su presencia digital tiene oportunidades claras con 4.4⭐ y 14505 reseñas.",
    "beneficio_principal": "Reservaciones directas sin comisión de OTAs.",
    "apertura_1linea": "Hola, revisé su presencia digital y vi una oportunidad clara de mejora.",
    "cta_sugerido": "¿Te puedo mandar un análisis breve y una propuesta por WhatsApp?",
    "objecion_probable": "No tenemos presupuesto.",
    "respuesta_breve": "Entiendo. Arrancamos desde $900 USD y en 10 días tienen su sitio. Es una inversión que se paga sola con los primeros clientes que llegan por Google.",
    "fortalezas": [
      "Rating sólido (4.4⭐)",
      "14505 reseñas = reputación establecida"
    ],
    "problemas": [
      "Web existe pero puede no reflejar marca local",
      "Oportunidad de rediseño premium"
    ],
    "beneficios": [
      "Reservaciones directas sin comisión OTAs",
      "Galería profesional",
      "Control de imagen y precios"
    ],
    "horario_nota": "",
    "horario_grupo": 1,
    "horario_label": "🌅 MAÑANA (8-11am)",
    "prioridad_manana_orden": 69,
    "score": 52.16189426484422
  },
  {
    "nombre": "Solmar Resort",
    "nicho": "hotel",
    "ciudad": "CSL",
    "rating": 4.5,
    "resenas": 3914,
    "telefono": "+52 624 146 7700",
    "tiene_web": "sí",
    "calidad_web": "web muy buena",
    "web_status": "TIENE WEB (web buena)",
    "website": "https://solmarresort.solmar.com/en/?partner=10859&utm_source=google&utm_medium=organic&utm_campaign=googlemybusiness",
    "google_maps": "https://www.google.com/maps/place/?q=place_id:ChIJib15d-BKr4YRvyVpandr7k0",
    "tipo_presencia_digital": "web buena",
    "fit_llamada_manana": "bajo",
    "contacto_probable": "recepción → gerente general",
    "observacion_clave": "Su presencia digital tiene oportunidades claras con 4.5⭐ y 3914 reseñas.",
    "beneficio_principal": "Reservaciones directas sin comisión de OTAs.",
    "apertura_1linea": "Hola, revisé su presencia digital y vi una oportunidad clara de mejora.",
    "cta_sugerido": "¿Te puedo mandar un análisis breve y una propuesta por WhatsApp?",
    "objecion_probable": "No tenemos presupuesto.",
    "respuesta_breve": "Entiendo. Arrancamos desde $900 USD y en 10 días tienen su sitio. Es una inversión que se paga sola con los primeros clientes que llegan por Google.",
    "fortalezas": [
      "Buen rating (4.5⭐)",
      "3914 reseñas = reputación establecida"
    ],
    "problemas": [
      "Web existe pero puede no reflejar marca local",
      "Oportunidad de rediseño premium"
    ],
    "beneficios": [
      "Reservaciones directas sin comisión OTAs",
      "Galería profesional",
      "Control de imagen y precios"
    ],
    "horario_nota": "",
    "horario_grupo": 1,
    "horario_label": "🌅 MAÑANA (8-11am)",
    "prioridad_manana_orden": 70,
    "score": 47.2254181658021
  }
];