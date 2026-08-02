# Rhea & Peeyush's Wedding — Airport Transfer Booking

Landing page for booking airport transportation for Rhea & Peeyush's wedding (December 17-20, 2026), with complimentary service on main arrival/departure dates. Part of the Cancun Concierge DMC ecosystem.

## Tech Stack

- **React 18** — single-page application
- **Vite 4** — build tooling
- **Tailwind CSS + Sass** — styling
- **SweetAlert2** — success/error dialogs
- **Stripe** — checkout (server-side via Django backend)

## Features

- Booking form with transport type, guest info, phone and hotel selection
- Fixed wedding dates (Dec 17-20, 2026) with read-only date inputs
- Free-date pricing logic: main arrival/departure dates are complimentary
- Stripe Checkout redirect for paid services, "Reserve Now" for free ones
- Post-payment success dialog via `?thanks` URL parameter
- Services section, footer with contact widgets and WhatsApp link

## Setup

```sh
npm install
npm run dev
npm run build
```

---

## Contact

Developed by [Dari Developer](https://darideveloper.com)

- 🌐 [darideveloper.com](https://darideveloper.com)
- 💬 [WhatsApp](https://api.whatsapp.com/send?phone=5214493402622)
- 📂 [View project in portfolio](https://darideveloper.com/portafolio/cancunconcierge)

---

# Boda de Rhea & Peeyush — Reserva de traslado aeroportuario

Landing page para reservar transporte aeroportuario para la boda de Rhea & Peeyush (17-20 de diciembre de 2026), con servicio de cortesía en las fechas principales de llegada/salida. Parte del ecosistema de Cancun Concierge DMC.

## Tech Stack

- **React 18** — aplicación de una sola página
- **Vite 4** — herramientas de build
- **Tailwind CSS + Sass** — estilos
- **SweetAlert2** — diálogos de éxito/error
- **Stripe** — checkout (del lado del servidor vía backend Django)

## Features

- Formulario de reserva con tipo de traslado, datos del huésped, teléfono y selección de hotel
- Fechas de boda fijas (17-20 dic 2026) con inputs de fecha de solo lectura
- Lógica de precios de cortesía: las fechas principales de llegada/salida son gratis
- Redirección a Stripe Checkout para servicios de pago, "Reserve Now" para los gratis
- Diálogo de éxito posterior al pago mediante el parámetro `?thanks`
- Sección de servicios, footer con contactos y enlace de WhatsApp

## Setup

```sh
npm install
npm run dev
npm run build
```

---

## Contacto

Desarrollado por [Dari Developer](https://darideveloper.com)

- 🌐 [darideveloper.com](https://darideveloper.com)
- 💬 [WhatsApp](https://api.whatsapp.com/send?phone=5214493402622)
- 📂 [Ver proyecto en el portafolio](https://darideveloper.com/portafolio/cancunconcierge)
