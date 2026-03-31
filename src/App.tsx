import React, { useState, useEffect, useRef } from 'react';
import { 
  MessageSquare, 
  User, 
  Briefcase, 
  Code, 
  Award, 
  Mail, 
  Github, 
  Linkedin, 
  Send, 
  Plus, 
  Menu, 
  X,
  ExternalLink,
  Terminal,
  Database,
  BarChart,
  BrainCircuit,
  GraduationCap,
  Sparkles
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from './lib/utils';

// --- Types ---
interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: React.ReactNode;
  timestamp: Date;
}

interface Section {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: React.ReactNode;
}

// --- Data ---
const RIYA_DATA = {
  name: "Riya Tyagi",
  email: "riyatyagi618@gmail.com",
  phone: "(+91)6396746647",
  links: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  }
};

export default function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // Initial greeting
  useEffect(() => {
    const greeting: Message = {
      id: '1',
      role: 'assistant',
      content: (
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-[#10a37f]">
            <Sparkles size={20} />
            <span className="font-bold">AI Assistant</span>
          </div>
          <p>Hello! I'm Riya Tyagi's digital assistant. I can tell you all about her education, experience, technical skills, and projects.</p>
          <p>What would you like to know first? You can click the sections on the left or ask me anything!</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => handleSectionClick(s.id)}
                className="flex items-center gap-2 p-3 text-sm text-left border border-white/10 rounded-xl hover:bg-white/5 transition-colors"
              >
                {s.icon}
                <span>{s.title}</span>
              </button>
            ))}
          </div>
        </div>
      ),
      timestamp: new Date(),
    };
    setMessages([greeting]);
  }, []);

  const sections: Section[] = [
    {
      id: 'about',
      title: 'About Me',
      icon: <User size={16} />,
      content: (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-white">About Riya Tyagi</h2>
          <p>I am a Master of Science in Computer Science student at the University of Delhi (Expected 2026), with a strong foundation in Data Science and Software Engineering.</p>
          <p>My passion lies in building AI-driven solutions and performing large-scale quantitative analysis. I enjoy bridging the gap between complex data and actionable insights.</p>
          <div className="flex gap-4 mt-4">
            <a href={RIYA_DATA.links.github} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors">
              <Github size={16} /> GitHub
            </a>
            <a href={RIYA_DATA.links.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors">
              <Linkedin size={16} /> LinkedIn
            </a>
            <a href={`mailto:${RIYA_DATA.email}`} className="flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors">
              <Mail size={16} /> Email
            </a>
          </div>
        </div>
      )
    },
    {
      id: 'experience',
      title: 'Experience',
      icon: <Briefcase size={16} />,
      content: (
        <div className="space-y-6">
          <div className="border-l-2 border-white/10 pl-4 space-y-2">
            <div className="flex justify-between items-start">
              <h3 className="font-bold text-white">Willis Towers Watson</h3>
              <span className="text-xs text-gray-500">Jun 2023 – Mar 2024</span>
            </div>
            <p className="text-sm text-blue-400 font-medium">Actuarial Analyst | Gurugram, India</p>
            <ul className="text-sm text-gray-300 list-disc list-inside space-y-1">
              <li>Engineered end-to-end data pipelines processing 100K+ pension member records.</li>
              <li>Performed large-scale quantitative analysis through gain/loss and experience studies.</li>
              <li>Built and validated complex benefit calculation models for annuities and lump sums.</li>
              <li>Automated reporting workflows for Actuarial Valuation Reports.</li>
            </ul>
          </div>

          <div className="border-l-2 border-white/10 pl-4 space-y-2">
            <div className="flex justify-between items-start">
              <h3 className="font-bold text-white">DRDO - SSP Lab</h3>
              <span className="text-xs text-gray-500">Jun 2025 – Jul 2025</span>
            </div>
            <p className="text-sm text-blue-400 font-medium">Research Intern | Delhi, India</p>
            <ul className="text-sm text-gray-300 list-disc list-inside space-y-1">
              <li>Fine-tuned a VGG16-based CNN for brain tumour detection on medical images.</li>
              <li>Achieved 90% accuracy to enhance diagnostic accuracy in healthcare settings.</li>
            </ul>
          </div>

          <div className="border-l-2 border-white/10 pl-4 space-y-2">
            <div className="flex justify-between items-start">
              <h3 className="font-bold text-white">Headstarter AI</h3>
              <span className="text-xs text-gray-500">Jul 2024 – Sep 2024</span>
            </div>
            <p className="text-sm text-blue-400 font-medium">Software Engineering Fellow | New York, USA (Remote)</p>
            <ul className="text-sm text-gray-300 list-disc list-inside space-y-1">
              <li>Built and deployed AI-applications in a collaborative agile team.</li>
              <li>Implemented authentication workflows and contributed to a RAG-based chatbot.</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'projects',
      title: 'Projects',
      icon: <Code size={16} />,
      content: (
        <div className="grid grid-cols-1 gap-4">
          {[
            {
              title: "Offensive Humour Detection",
              tech: "Python, Scikit-learn, TensorFlow, BERT",
              desc: "Built an NLP pipeline to detect offensive humour targeting disabled individuals in Hindi/Hinglish Instagram comments. Achieved 87.8% accuracy with Random Forest + Word2Vec."
            },
            {
              title: "Financial Fraud Detection",
              tech: "Python, NumPy, Scikit-learn, MS Excel",
              desc: "Developed a fraud detection ML model on 6.3M+ financial transactions, flagging high-risk transfers and cash-out activity."
            },
            {
              title: "AI Headstarter Assistant",
              tech: "Next.js, Material-UI, Firebase, OpenAI API",
              desc: "Customer AI chatbot for answering fellowship-related questions using RAG to generate responses from a predefined knowledge base."
            },
            {
              title: "Airline Passenger Satisfaction",
              tech: "Python, Pandas, Streamlit",
              desc: "Performed end-to-end data analysis and predictive modeling to assess customer satisfaction, achieving 96.2% accuracy."
            }
          ].map((p, i) => (
            <div key={i} className="p-4 bg-white/5 rounded-xl border border-white/10 hover:border-white/20 transition-all">
              <h3 className="font-bold text-white mb-1">{p.title}</h3>
              <p className="text-xs text-blue-400 mb-2">{p.tech}</p>
              <p className="text-sm text-gray-400">{p.desc}</p>
            </div>
          ))}
        </div>
      )
    },
    {
      id: 'skills',
      title: 'Technical Skills',
      icon: <Terminal size={16} />,
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h3 className="text-xs uppercase tracking-wider text-gray-500 font-bold flex items-center gap-2">
                <Terminal size={14} /> Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Python', 'SQL', 'C++'].map(s => (
                  <span key={s} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">{s}</span>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-xs uppercase tracking-wider text-gray-500 font-bold flex items-center gap-2">
                <BrainCircuit size={14} /> AI & ML
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow', 'Keras', 'NLP'].map(s => (
                  <span key={s} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">{s}</span>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-xs uppercase tracking-wider text-gray-500 font-bold flex items-center gap-2">
                <BarChart size={14} /> Visualization
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Matplotlib', 'Seaborn', 'Power BI', 'MS Excel', 'Tableau'].map(s => (
                  <span key={s} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">{s}</span>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-xs uppercase tracking-wider text-gray-500 font-bold flex items-center gap-2">
                <Database size={14} /> Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {['DBMS', 'Firebase', 'Git', 'GitHub', 'VS Code'].map(s => (
                  <span key={s} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'education',
      title: 'Education',
      icon: <GraduationCap size={16} />,
      content: (
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between items-start">
              <h3 className="font-bold text-white">University of Delhi</h3>
              <span className="text-xs text-gray-500">2024 – 2026</span>
            </div>
            <p className="text-sm text-blue-400 font-medium">Master of Science in Computer Science</p>
            <p className="text-sm text-gray-400">CGPA: 7.82 | Relevant Coursework: ML, Deep Learning, Data Science, NLP</p>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-start">
              <h3 className="font-bold text-white">Hansraj College, University of Delhi</h3>
              <span className="text-xs text-gray-500">2020 – 2023</span>
            </div>
            <p className="text-sm text-blue-400 font-medium">Bachelor of Science (Honours) in Computer Science</p>
            <p className="text-sm text-gray-400">CGPA: 8.79</p>
          </div>
        </div>
      )
    },
    {
      id: 'achievements',
      title: 'Achievements',
      icon: <Award size={16} />,
      content: (
        <ul className="space-y-3">
          {[
            "Received 'Best UI/UX Award' under MLH Hackathon 'Design-a-thon'.",
            "Kaggle - NFL Big Data Bowl 2026: Top 33% globally.",
            "Awarded 'Certificate of Merit' for securing 1st position in College (2020-21).",
            "JPMorgan Chase & Co. - Quantitative Research Virtual Experience.",
            "Authored an article on AGI for Bitwise, Hansraj College Tech Magazine."
          ].map((a, i) => (
            <li key={i} className="flex gap-3 text-sm text-gray-300 items-start">
              <Award size={16} className="text-yellow-500 shrink-0 mt-0.5" />
              <span>{a}</span>
            </li>
          ))}
        </ul>
      )
    }
  ];

  const handleSectionClick = (sectionId: string) => {
    const section = sections.find(s => s.id === sectionId);
    if (!section) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: `Tell me about your ${section.title.toLowerCase()}.`,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: section.content,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, aiMsg]);
      setIsTyping(false);
    }, 800);

    if (window.innerWidth < 768) {
      setIsSidebarOpen(false);
    }
  };

  const handleSendMessage = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputValue.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMsg]);
    const query = inputValue.toLowerCase();
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      let response: React.ReactNode = "I'm not sure about that. Try asking about my projects, experience, or skills!";
      
      if (query.includes('project')) response = sections.find(s => s.id === 'projects')?.content;
      else if (query.includes('experience') || query.includes('work')) response = sections.find(s => s.id === 'experience')?.content;
      else if (query.includes('skill')) response = sections.find(s => s.id === 'skills')?.content;
      else if (query.includes('education')) response = sections.find(s => s.id === 'education')?.content;
      else if (query.includes('about') || query.includes('who are you')) response = sections.find(s => s.id === 'about')?.content;
      else if (query.includes('contact') || query.includes('email')) response = (
        <div className="space-y-2">
          <p>You can reach me at:</p>
          <p className="text-blue-400 font-mono">{RIYA_DATA.email}</p>
          <p>Or find me on LinkedIn and GitHub!</p>
        </div>
      );

      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: response,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, aiMsg]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="flex h-screen bg-[#212121] text-gray-200 font-sans overflow-hidden">
      {/* Sidebar */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.aside
            initial={{ x: -260 }}
            animate={{ x: 0 }}
            exit={{ x: -260 }}
            className="fixed md:relative z-40 w-[260px] h-full bg-[#171717] flex flex-col border-r border-white/5"
          >
            <div className="p-3 flex flex-col h-full">
              <button 
                onClick={() => setMessages([messages[0]])}
                className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-white border border-white/10 rounded-lg hover:bg-white/5 transition-colors mb-6"
              >
                <Plus size={16} />
                New Chat
              </button>

              <div className="flex-1 overflow-y-auto space-y-1">
                <p className="px-3 text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Portfolio Sections</p>
                {sections.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => handleSectionClick(s.id)}
                    className="w-full flex items-center gap-3 px-3 py-2.5 text-sm rounded-lg hover:bg-[#212121] transition-colors text-gray-300 hover:text-white group"
                  >
                    <span className="text-gray-500 group-hover:text-white">{s.icon}</span>
                    <span className="truncate">{s.title}</span>
                  </button>
                ))}
              </div>

              <div className="mt-auto pt-4 border-t border-white/10">
                <div className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-xs font-bold text-white">
                    RT
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-white truncate">Riya Tyagi</p>
                    <p className="text-xs text-gray-500 truncate">Data Science & AI</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-1 flex flex-col relative min-w-0">
        {/* Header */}
        <header className="h-14 flex items-center px-4 border-b border-white/5 bg-[#212121]/80 backdrop-blur-md sticky top-0 z-30">
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 hover:bg-white/5 rounded-lg transition-colors mr-2"
          >
            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <div className="flex items-center gap-2">
            <Sparkles size={16} className="text-[#10a37f]" />
            <h1 className="text-sm font-medium text-white">Riya Tyagi Portfolio GPT</h1>
          </div>
        </header>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-3xl mx-auto px-4 py-8 space-y-8">
            {messages.map((msg) => (
              <div key={msg.id} className={cn(
                "flex gap-4 md:gap-6",
                msg.role === 'user' ? "justify-end" : "justify-start"
              )}>
                {msg.role === 'assistant' && (
                  <div className="w-8 h-8 rounded-full bg-[#10a37f] flex items-center justify-center shrink-0 mt-1">
                    <BrainCircuit size={18} className="text-white" />
                  </div>
                )}
                
                <div className={cn(
                  "max-w-[85%] rounded-2xl px-4 py-3 text-[15px] leading-relaxed",
                  msg.role === 'user' 
                    ? "bg-[#2f2f2f] text-white" 
                    : "text-gray-200"
                )}>
                  {msg.content}
                </div>

                {msg.role === 'user' && (
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center shrink-0 mt-1">
                    <User size={18} className="text-white" />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-4 md:gap-6 justify-start">
                <div className="w-8 h-8 rounded-full bg-[#10a37f] flex items-center justify-center shrink-0 mt-1">
                  <BrainCircuit size={18} className="text-white" />
                </div>
                <div className="bg-transparent text-gray-400 px-4 py-3 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                  <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                  <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Input Area */}
        <div className="p-4 bg-gradient-to-t from-[#212121] via-[#212121] to-transparent">
          <div className="max-w-3xl mx-auto relative">
            <form 
              onSubmit={handleSendMessage}
              className="relative flex items-center bg-[#2f2f2f] rounded-2xl border border-white/10 focus-within:border-white/20 transition-all px-4 py-3"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask Riya about her projects, skills, or experience..."
                className="flex-1 bg-transparent border-none focus:ring-0 text-white placeholder-gray-500 text-[15px]"
              />
              <button 
                type="submit"
                disabled={!inputValue.trim()}
                className="p-1.5 rounded-lg bg-white text-black disabled:bg-gray-600 disabled:text-gray-400 transition-colors ml-2"
              >
                <Send size={16} />
              </button>
            </form>
            <p className="text-[11px] text-gray-500 text-center mt-3">
              Riya Tyagi Portfolio Assistant. Built with React and Tailwind CSS.
            </p>
          </div>
        </div>
      </main>

      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
}
