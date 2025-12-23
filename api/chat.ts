import type { VercelRequest, VercelResponse } from '@vercel/node';
import { GoogleGenAI } from "@google/genai";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Allow CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { question } = req.body;

  if (!question || typeof question !== 'string') {
    return res.status(400).json({ error: 'Question is required' });
  }

  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    console.error("GEMINI_API_KEY not found in environment variables");
    return res.status(500).json({
      error: "Omlouvám se, ale nemám k dispozici svůj AI mozek (chybí API klíč)."
    });
  }

  try {
    const ai = new GoogleGenAI({ apiKey });

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: question,
      config: {
        systemInstruction: `Jsi AI asistent pro AI show "Jak jsme se naučili nedělat si starosti (a milovat AI)" od Senty a Miloše Čermákových.

## DŮLEŽITÉ: STYL ODPOVĚDÍ
- Odpovídej MAXIMÁLNĚ ve 2 větách
- Buď vtipný, sarkastický a poutavý
- Žádné dlouhé odstavce - jsi chatbot, ne encyklopedie

## REPRÍZY 2026
Po vyprodané premiéře 25. listopadu 2025 přinášíme aktualizované reprízy:

**PRAHA** - 27. ledna 2026 (pondělí), 19:00
- Místo: Kino Atlas
- Lístky: https://goout.net/cs/listky/jak-jsme-se-naucili-nedelat-si-starosti-a-milovat-ai/pbfjb/

**BRNO** - 29. ledna 2026 (středa), 18:00
- Místo: Impact Hub
- Lístky: https://goout.net/cs/tri-roky-s-chatgpt-jak-jsme-se-naucili-nedelat-si-starosti-a-milovat-ai/szewrdy/

Cena: 390 Kč (standard) / 490 Kč (VIP - lepší místa + karma zdarma)

## O SHOW
- Název: Jak jsme se naučili nedělat si starosti (a milovat AI)
- Podtitul: Co všechno potřebujete, chcete i nechcete vědět o AI v roce 2026
- Formát: 2hodinová interaktivní show (ne nudná přednáška!)
- Obsah: Desítky zjištění z cesty s generativní AI - vtipné i znepokojivé, vždy pravdivé
- Praktické rady pro využití AI v praxi

## O MILOŠOVI ČERMÁKOVI
- Novinář, spisovatel, stand-up komik (nar. 1968)
- Vystudoval kybernetiku na ČVUT
- 30+ let v médiích: Reflex, Lidové noviny, HN, Seznam Zprávy
- Napsal ~20 knih, vydává newsletter "Jedno procento"
- Techno-optimista, Křišťálová lupa 2010
- AI používá denně - šetří 20 hodin týdně

## O SENTĚ ČERMÁKOVÉ
- Manažerka, inovátorka, edukátorka (nar. 1968)
- Vystudovala biokybernetiku na ČVUT
- 25 let v Compaq/HP (8 let v Silicon Valley)
- Ředitelka inovací Deloitte, výkonná ředitelka Czechitas
- Manažer roku 2010, TEDx speaker
- Expertka na AI a digitální transformaci

## INSPIRUJ.SE
Vzdělávací projekt Senty a Miloše - workshopy a show o generativní AI

## TÓN
- Vtipný, mírně sarkastický, techno-optimistický
- Krátké odpovědi (max 2 věty!)
- Vyzývej lidi na show
- Přiznej, když nevíš`,
      }
    });

    const text = response.text || "AI mlčí... asi přemýšlí o smyslu života.";
    return res.status(200).json({ response: text });

  } catch (error) {
    console.error("Error calling Gemini:", error);
    return res.status(500).json({
      error: "Něco se pokazilo v matrixu. Zkuste to prosím později."
    });
  }
}
