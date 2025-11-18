import { GoogleGenAI } from "@google/genai";

const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.warn("API Key not found in environment variables");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const askAIHost = async (question: string): Promise<string> => {
  const ai = getClient();
  if (!ai) return "Omlouvám se, ale nemám k dispozici svůj AI mozek (chybí API klíč).";

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: question,
      config: {
        systemInstruction: `Jsi AI asistent pro akci "AI Show: Tři roky s ChatGPT" moderovanou Sentou a Milošem Čermákovými. 
        
        Informace o akci:
        - Název: Tři roky s ChatGPT: Jak jsme se naučili nedělat si starosti (a milovat AI)
        - Kdy: 25. listopadu (úterý), 19:00
        - Kde: Kino Atlas
        - Cena: 390/490 Kč
        - Obsah: 33 zjištění o AI, 2 hodinová show.
        
        Tón komunikace: Vtipný, mírně sarkastický (jako Miloš Čermák) nebo nadšený a chytrý (jako Senta). Odpovídej česky, stručně a vyzývej lidi, aby přišli.`,
      }
    });
    
    return response.text || "AI mlčí... asi přemýšlí o smyslu života.";
  } catch (error) {
    console.error("Error calling Gemini:", error);
    return "Něco se pokazilo v matrixu. Zkuste to prosím později.";
  }
};