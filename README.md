<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# AI Show - Propagační web

Webová aplikace pro akci "Tři roky s ChatGPT: Jak jsme se naučili nedělat si starosti (a milovat AI)"

## 🚀 Deploy na Vercel (Doporučeno)

Nejjednodušší způsob, jak aplikaci nasadit online:

1. **Push kódu na GitHub** (již hotovo ✅)

2. **Import do Vercel:**
   - Jděte na [vercel.com](https://vercel.com)
   - Klikněte na "New Project"
   - Importujte tento GitHub repozitář

3. **Nastavte environment variables:**
   - V Vercel projektu jděte do Settings → Environment Variables
   - Přidejte: `GEMINI_API_KEY` s vaším API klíčem z [Google AI Studio](https://aistudio.google.com/app/apikey)

4. **Deploy!**
   - Vercel automaticky nasadí aplikaci
   - Každý push na main větev automaticky re-deployuje

## 💻 Lokální vývoj

**Prerequisites:** Node.js 18+

1. Nainstalujte závislosti:
   ```bash
   npm install
   ```

2. Vytvořte `.env.local` soubor (zkopírujte z `.env.example`):
   ```bash
   cp .env.example .env.local
   ```

3. Nastavte `GEMINI_API_KEY` v `.env.local`:
   ```
   GEMINI_API_KEY=your_api_key_here
   ```

4. Spusťte vývojový server:
   ```bash
   npm run dev
   ```

## 🔒 Bezpečnost

- API klíč je **bezpečně uložen na serveru** (Vercel serverless funkce)
- Frontend volá `/api/chat` endpoint, nikdy neobsahuje API klíč
- `.env` soubory jsou v `.gitignore` a nikdy se necommitují

## 🛠️ Technologie

- **React 19** + **TypeScript**
- **Vite** - build tool
- **Google Gemini API** - AI chatbot
- **Vercel** - hosting a serverless funkce
- **Lucide React** - ikony
