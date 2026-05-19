# o projektu

ovo je fajl o projektu gde cemo kreirati sajt sa blogom

## Komande

- `npm run dev` — pokretanje razvojnog servera na http://localhost:3000
- `npm run build` — produkcioni build
- `npm run start` — pokretanje produkcionog builda
- `npm run lint` — pokretanje ESLint-a

## Arhitektura

Next.js 16 App Router projekat sa TypeScript-om, Tailwind CSS v4 i React 19.

**Važno:** Ovo je Next.js 16.x koji ima izmene koje nisu kompatibilne sa starijim verzijama. Pre pisanja bilo kog Next.js-specifičnog koda, proveriti `node_modules/next/dist/docs/` za aktuelne API konvencije.

### Struktura
- `src/app/` — App Router stranice i layouti
  - `layout.tsx` — root layout (Geist font, metadata)
  - `page.tsx` — početna stranica
  - `globals.css` — Tailwind importi i CSS promenljive za teme
- `public/` — statički resursi

### Ključne konvencije
- Import alias: `@/*` mapira na `src/*`
- Tailwind v4: koristi `@import "tailwindcss"` u CSS-u (bez `tailwind.config.js`)
- Tamni mod putem CSS media query-ja `prefers-color-scheme` sa CSS promenljivima definisanim u `globals.css`
