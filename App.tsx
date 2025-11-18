import React from 'react';
import { Calendar, MapPin, Ticket, Clock, Star, Brain, Zap, Heart, Bot } from 'lucide-react';
import { SectionTitle } from './components/SectionTitle';
import { InfoCard } from './components/InfoCard';
import { ChatWidget } from './components/ChatWidget';

const App: React.FC = () => {
  const ticketLink = "https://goout.net/cs/listky/tri-roky-s-chatgpt-jak-jsme-se-naucili-nedelat-si-starosti-a-milovat-ai/spoib/";

  return (
    <div className="min-h-screen bg-stone-100 overflow-x-hidden selection:bg-pop-yellow selection:text-pop-black">
      {/* Header / Hero Section */}
      <header className="relative bg-pop-blue border-b-4 border-pop-black">
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            
            {/* Left: Text Content */}
            <div className="space-y-6 z-10">
              <div className="inline-block bg-pop-yellow px-4 py-1 border-2 border-pop-black shadow-hard-sm transform -rotate-2">
                <span className="font-bold uppercase tracking-wider text-sm">AI Show Senty a Miloše Čermákových</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-comic leading-none text-white drop-shadow-[4px_4px_0_rgba(0,0,0,1)]">
                TŘI ROKY <br/>
                <span className="text-pop-yellow">S CHATGPT</span>
              </h1>
              
              <h2 className="text-xl md:text-2xl font-bold bg-white inline-block px-2 py-1 border-2 border-pop-black text-pop-black">
                Jak jsme se naučili nedělat si starosti (a milovat AI)
              </h2>

              <p className="text-lg text-white font-medium max-w-lg leading-relaxed drop-shadow-md">
                Dvouhodinová AI show: 33 zjištění o technologii, která mění všechno.
                Přijďte se zasmát, zamyslet a pochopit, co se to vlastně děje.
              </p>

              <div className="pt-4">
                <a 
                  href={ticketLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-pop-red text-white font-comic text-2xl px-8 py-3 border-4 border-pop-black shadow-hard hover:scale-105 hover:-rotate-1 transition-transform"
                >
                  KOUPIT LÍSTEK
                </a>
              </div>
            </div>

            {/* Right: Image Area (Visualizing the comic style) */}
            <div className="relative flex justify-center">
              <div className="relative w-full max-w-md aspect-[3/4] bg-pop-yellow border-4 border-pop-black shadow-hard rotate-2 p-2">
                <img 
                  src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=1217,fit=crop/AR0l0RG907IlPZ1b/chatgpt-image-nov-5-2025-02_44_27-pm-xrizqkMuzUYaORAY.png" 
                  alt="Senta a Miloš - Pop Art Poster" 
                  className="w-full h-full object-cover border-2 border-pop-black"
                />
                {/* Overlay simulating the comic art provided in prompt */}
                <div className="absolute -bottom-6 -right-6 bg-white p-4 border-4 border-pop-black shadow-hard transform -rotate-3 z-20 max-w-[200px]">
                   <p className="font-comic text-xl leading-tight">"Může nás zničit? Nebo zachránit?"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative dots pattern */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '20px 20px' }}></div>
      </header>

      {/* Key Info Strip */}
      <section className="bg-pop-yellow py-12 border-b-4 border-pop-black relative z-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <InfoCard 
              label="Kdy" 
              value="25. listopadu" 
              subValue="Úterý"
              icon={<Calendar size={32} />} 
              bgColor="bg-white"
              rotate="-rotate-1"
            />
             <InfoCard 
              label="Čas" 
              value="19:00" 
              subValue="Start Show"
              icon={<Clock size={32} />} 
              bgColor="bg-pop-blue"
              rotate="rotate-1 text-white"
            />
             <InfoCard 
              label="Kde" 
              value="Kino Atlas" 
              subValue="Praha"
              icon={<MapPin size={32} />} 
              bgColor="bg-pop-red"
              rotate="-rotate-2 text-white"
            />
             <InfoCard 
              label="Cena" 
              value="390 / 490 Kč" 
              subValue="Vstupenky v prodeji"
              icon={<Ticket size={32} />} 
              bgColor="bg-white"
              rotate="rotate-2"
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <SectionTitle title="O ČEM TO BUDE?" />
          
          <div className="space-y-8 text-lg md:text-xl leading-relaxed text-pop-black">
            <div className="bg-white p-8 border-4 border-pop-black shadow-hard relative">
               <Star className="absolute -top-6 -left-6 text-pop-yellow w-12 h-12 fill-current stroke-black stroke-2" />
               <p>
                <span className="font-bold">Před třemi lety, 30. listopadu 2022</span>, představila tehdy skoro neznámá společnost OpenAI nový produkt. 
                Pojmenovala ho <span className="bg-pop-blue text-white px-1">ChatGPT</span> a když za 5 dní získal první milión uživatelů, 
                bylo jasné, že má potenciál změnit svět. Což se stalo.
              </p>
              <p className="mt-4 font-bold text-xl">
                A my máme ambici ukázat, co jsme se za ty tři roky dozvěděli o AI, o světě ... a možná hlavně o sobě samotných.
              </p>
            </div>

            {/* Questions Grid */}
            <div className="grid md:grid-cols-2 gap-6 mt-12">
              {[
                { icon: <Bot />, text: "Jak od AI získat to, co chceme?" },
                { icon: <Zap />, text: "Co umí nečekaně líp než my? A co hůř?" },
                { icon: <Brain />, text: "Jak se učit? K čemu AI používat, a k čemu ne?" },
                { icon: <Heart />, text: "Pomáhá, když jsme k AI zdvořilí, anebo je lepší být hrubý?" },
                { icon: <Star />, text: "Jak najít ve světě, který mění AI, smysl života?" }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 border-l-4 border-pop-black hover:bg-gray-50 transition-colors">
                  <div className="text-pop-red shrink-0 mt-1">{item.icon}</div>
                  <p className="font-bold">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="bg-pop-blue text-white p-8 border-4 border-pop-black shadow-hard transform rotate-1 mt-12">
              <p className="mb-4">
                Přineseme vám <span className="text-pop-yellow font-comic text-2xl">33 postřehů</span> z naší tříleté cesty světem generativní AI – některé vtipné, jiné znepokojivé, všechny pravdivé.
              </p>
              <p>
                Nečekejte přednášku ani workshop (i když si odnesete minimálně 33 praktických a užitečných rad), ale <span className="font-bold underline decoration-pop-yellow decoration-4">SHOW</span>. Těšíme se na vás.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* AI Chat Interaction Section */}
      <section className="bg-stone-200 py-16 border-y-4 border-pop-black">
        <div className="container mx-auto px-4 text-center">
          <SectionTitle title="NEJSTE SI JISTÍ?" color="text-pop-black" />
          <p className="text-xl mb-6 font-bold">Zeptejte se našeho AI asistenta na podrobnosti!</p>
          <ChatWidget />
        </div>
      </section>

      {/* CTA / Tickets Section */}
      <section id="tickets" className="bg-pop-red py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-7xl font-comic text-white mb-8 drop-shadow-[4px_4px_0_rgba(0,0,0,1)]">
            KINO ATLAS
          </h2>
          <p className="text-white text-2xl font-bold mb-12">25. LISTOPADU | 19:00</p>
          
          <div className="flex flex-col md:flex-row justify-center gap-8 items-center">
             <div className="bg-white p-8 border-4 border-pop-black shadow-hard w-full max-w-sm relative overflow-hidden group cursor-pointer hover:-translate-y-2 transition-transform">
                <div className="absolute top-0 right-0 bg-pop-yellow text-xs font-bold px-2 py-1 border-l-2 border-b-2 border-pop-black">STANDARD</div>
                <h3 className="font-comic text-4xl mb-2">390 Kč</h3>
                <p className="text-gray-600 mb-6">Základní vstupné</p>
                <a 
                  href={ticketLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-pop-black text-white font-bold py-3 hover:bg-gray-800 text-center"
                >
                  KOUPIT
                </a>
             </div>

             <div className="bg-pop-yellow p-8 border-4 border-pop-black shadow-hard w-full max-w-sm relative overflow-hidden group cursor-pointer hover:-translate-y-2 transition-transform scale-105">
                <div className="absolute top-0 right-0 bg-pop-red text-white text-xs font-bold px-2 py-1 border-l-2 border-b-2 border-pop-black">VIP / PODPORA</div>
                <h3 className="font-comic text-4xl mb-2">490 Kč</h3>
                <p className="text-pop-black mb-6 font-bold">Lepší místa + karma zdarma</p>
                <a 
                  href={ticketLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-pop-red text-white font-bold py-3 border-2 border-pop-black hover:bg-red-600 text-center"
                >
                  KOUPIT
                </a>
             </div>
          </div>
        </div>
      </section>

      <footer className="bg-pop-black text-white py-8 border-t-4 border-white">
        <div className="container mx-auto px-4 text-center">
          <p className="font-comic tracking-wider opacity-80">© 2024 AI Show Senta & Miloš. Design inspirován pop-artem.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;