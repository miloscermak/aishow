// Frontend service - calls secure backend API instead of directly calling Gemini
export const askAIHost = async (question: string): Promise<string> => {
  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ question }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      return errorData.error || "Něco se pokazilo v matrixu. Zkuste to prosím později.";
    }

    const data = await response.json();
    return data.response || "AI mlčí... asi přemýšlí o smyslu života.";

  } catch (error) {
    console.error("Error calling API:", error);
    return "Něco se pokazilo v matrixu. Zkuste to prosím později.";
  }
};