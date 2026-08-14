export const WHATSAPP_NUMBER = "5512991098683";
export const WHATSAPP_DEFAULT_MESSAGE =
  "Olá, tenho interesse em fazer negócio com a Octobit Junior.";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_DEFAULT_MESSAGE
)}`;

export const INSTAGRAM_URL =
  "https://www.instagram.com/octobitjr?igsh=MWp5M2t0bnJlajRyeQ==";
export const LINKEDIN_URL =
  "https://www.linkedin.com/company/octobit-empresa-j%C3%BAnior-usp/";
// TODO: original site never set a real contact e-mail (href="" on the footer icon) — fill in before launch.
export const CONTACT_EMAIL = "";

export const NAV_LINKS = [
  { href: "/#home", label: "Home" },
  { href: "/#servicos", label: "Serviços" },
  { href: "/#sobre", label: "Sobre" },
  // Equipe: temporariamente removida do menu — conteúdo da equipe ainda será atualizado.
  { href: "/#contato", label: "Contato" },
];
