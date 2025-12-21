import React from 'react';
import { Calendar, MapPin, Ticket, Clock, Star, Brain, Zap, Heart, Bot } from 'lucide-react';
import { SectionTitle } from './components/SectionTitle';
import { InfoCard } from './components/InfoCard';
import { ChatWidget } from './components/ChatWidget';

const App: React.FC = () => {
  const ticketLinkPraha = "https://goout.net/cs/listky/jak-jsme-se-naucili-nedelat-si-starosti-a-milovat-ai/pbfjb/";
  const ticketLinkBrno = "https://goout.net/cs/listky/jak-jsme-se-naucili-nedelat-si-starosti-a-milovat-ai/pbfjb/";

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
              
              <h1 className="text-4xl md:text-6xl font-comic leading-none text-white drop-shadow-[4px_4px_0_rgba(0,0,0,1)]">
                JAK JSME SE NAUČILI <br/>
                <span className="text-pop-yellow">NEDĚLAT SI STAROSTI</span><br/>
                <span className="text-white">(A MILOVAT AI)</span>
              </h1>

              <h2 className="text-lg md:text-xl font-bold bg-white inline-block px-2 py-1 border-2 border-pop-black text-pop-black">
                Co všechno potřebujete, chcete i nechcete vědět o AI v roce 2026
              </h2>

              <p className="text-lg text-white font-medium max-w-lg leading-relaxed drop-shadow-md">
                Po vyprodané premiéře 25. listopadu 2025 přinášíme reprízy AI show Senty a Miloše Čermákových, vždy aktualizované o nové věci i trendy.
              </p>

              <div className="pt-4 flex gap-4 flex-wrap">
                <a
                  href={ticketLinkPraha}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-pop-red text-white font-comic text-xl px-6 py-3 border-4 border-pop-black shadow-hard hover:scale-105 hover:-rotate-1 transition-transform"
                >
                  PRAHA 27.1.
                </a>
                <a
                  href={ticketLinkBrno}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-pop-yellow text-pop-black font-comic text-xl px-6 py-3 border-4 border-pop-black shadow-hard hover:scale-105 hover:rotate-1 transition-transform"
                >
                  BRNO 29.1.
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
          <h3 className="font-comic text-3xl text-center mb-8 drop-shadow-[2px_2px_0_rgba(255,255,255,0.8)]">REPRÍZY 2026</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Praha */}
            <div className="bg-white p-6 border-4 border-pop-black shadow-hard">
              <h4 className="font-comic text-2xl mb-4 text-pop-blue">PRAHA</h4>
              <div className="grid grid-cols-2 gap-4">
                <InfoCard
                  label="Kdy"
                  value="27. ledna 2026"
                  subValue="Pondělí"
                  icon={<Calendar size={28} />}
                  bgColor="bg-stone-100"
                  rotate=""
                />
                <InfoCard
                  label="Čas"
                  value="19:00"
                  subValue="Start Show"
                  icon={<Clock size={28} />}
                  bgColor="bg-pop-blue"
                  rotate="text-white"
                />
                <InfoCard
                  label="Kde"
                  value="Kino Atlas"
                  subValue="Praha"
                  icon={<MapPin size={28} />}
                  bgColor="bg-stone-100"
                  rotate=""
                />
                <InfoCard
                  label="Cena"
                  value="390 / 490 Kč"
                  subValue="Vstupenky v prodeji"
                  icon={<Ticket size={28} />}
                  bgColor="bg-pop-red"
                  rotate="text-white"
                />
              </div>
            </div>
            {/* Brno */}
            <div className="bg-white p-6 border-4 border-pop-black shadow-hard">
              <h4 className="font-comic text-2xl mb-4 text-pop-red">BRNO</h4>
              <div className="grid grid-cols-2 gap-4">
                <InfoCard
                  label="Kdy"
                  value="29. ledna 2026"
                  subValue="Středa"
                  icon={<Calendar size={28} />}
                  bgColor="bg-stone-100"
                  rotate=""
                />
                <InfoCard
                  label="Čas"
                  value="18:00"
                  subValue="Start Show"
                  icon={<Clock size={28} />}
                  bgColor="bg-pop-red"
                  rotate="text-white"
                />
                <InfoCard
                  label="Kde"
                  value="TBA"
                  subValue="Brno"
                  icon={<MapPin size={28} />}
                  bgColor="bg-stone-100"
                  rotate=""
                />
                <InfoCard
                  label="Cena"
                  value="390 / 490 Kč"
                  subValue="Vstupenky v prodeji"
                  icon={<Ticket size={28} />}
                  bgColor="bg-pop-blue"
                  rotate="text-white"
                />
              </div>
            </div>
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
                <span className="font-bold">30. listopadu 2022</span> představila tehdy skoro neznámá společnost OpenAI produkt jménem
                <span className="bg-pop-blue text-white px-1">ChatGPT</span>. Za 5 dní získal první milión uživatelů a změnil svět.
              </p>
              <p className="mt-4">
                <span className="font-bold">25. listopadu 2025</span> jsme odpremiérovali vyprodanou AI show v Kině Atlas.
                Teď přinášíme reprízy – aktualizované o nejnovější trendy a zjištění z roku 2026.
              </p>
              <p className="mt-4 font-bold text-xl">
                Máme ambici ukázat, co jsme se o AI, o světě ... a možná hlavně o sobě samotných dozvěděli.
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
            VSTUPENKY
          </h2>
          <p className="text-white text-xl font-bold mb-12">390 Kč (standard) / 490 Kč (VIP)</p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Praha */}
            <div className="bg-white p-8 border-4 border-pop-black shadow-hard relative overflow-hidden group cursor-pointer hover:-translate-y-2 transition-transform">
              <div className="absolute top-0 right-0 bg-pop-blue text-white text-xs font-bold px-2 py-1 border-l-2 border-b-2 border-pop-black">PRAHA</div>
              <h3 className="font-comic text-3xl mb-2">27. LEDNA 2026</h3>
              <p className="text-gray-600 mb-2">Kino Atlas | 19:00</p>
              <p className="text-sm text-gray-500 mb-6">Pondělí</p>
              <a
                href={ticketLinkPraha}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-pop-blue text-white font-bold py-3 hover:bg-blue-600 text-center border-2 border-pop-black"
              >
                KOUPIT LÍSTKY
              </a>
            </div>

            {/* Brno */}
            <div className="bg-pop-yellow p-8 border-4 border-pop-black shadow-hard relative overflow-hidden group cursor-pointer hover:-translate-y-2 transition-transform">
              <div className="absolute top-0 right-0 bg-pop-red text-white text-xs font-bold px-2 py-1 border-l-2 border-b-2 border-pop-black">BRNO</div>
              <h3 className="font-comic text-3xl mb-2">29. LEDNA 2026</h3>
              <p className="text-pop-black mb-2 font-medium">TBA | 18:00</p>
              <p className="text-sm text-gray-700 mb-6">Středa</p>
              <a
                href={ticketLinkBrno}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-pop-red text-white font-bold py-3 border-2 border-pop-black hover:bg-red-600 text-center"
              >
                KOUPIT LÍSTKY
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-pop-black text-white py-8 border-t-4 border-white">
        <div className="container mx-auto px-4 text-center">
          <p className="font-comic tracking-wider opacity-80">© 2025 AI Show Senta & Miloš. Design inspirován pop-artem.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;