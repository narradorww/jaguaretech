import { NextResponse } from "next/server";

export async function GET() {
  const services = {
    company: "Jaguaretech",
    description: "Estúdio de software mobile e IA",
    last_updated: new Date().toISOString(),
    capabilities: [
      {
        category: "Mobile Development",
        technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
        description: "Apps nativos e multiplataforma com foco em performance e UX.",
      },
      {
        category: "Artificial Intelligence",
        technologies: ["OpenAI", "TensorFlow", "LangChain", "Python"],
        description: "Integração de LLMs, Agentes Autônomos e Visão Computacional.",
      },
      {
        category: "Web Platforms",
        technologies: ["Next.js", "React", "Node.js", "Vercel"],
        description: "Sistemas web escaláveis, dashboards e APIs.",
      },
    ],
    availability: "Open to new projects",
    contact: "contato@jaguaretch.com.br",
  };

  return NextResponse.json(services);
}
