"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

type Jogo = {
  id: number
  nome: string
  categoria: string
  dificuldade: "Fácil" | "Médio" | "Difícil"
  descricao: string
  imagem: string
  instrucoes: string
}

const jogos: Jogo[] = [
  {
    id: 1,
    nome: "Code Breaker",
    categoria: "Programação",
    dificuldade: "Médio",
    descricao: "Quebre o código e aprenda conceitos de programação resolvendo puzzles lógicos.",
    imagem: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbWElQzMlQTclQzMlQTNvfGVufDB8fDB8fHww",
    instrucoes: "Decifre o código apresentado usando conceitos de programação. Clique nas opções corretas para avançar."
  },
  {
    id: 2,
    nome: "Network Maze",
    categoria: "Redes",
    dificuldade: "Difícil",
    descricao: "Navegue por um labirinto de redes, configurando switches e roteadores para chegar ao destino.",
    imagem: "https://img.freepik.com/premium-photo/intricate-maze-design-showcasing-complex-network-pathways-creating_988214-2582.jpg",
    instrucoes: "Configure os dispositivos de rede para estabelecer uma conexão do ponto A ao ponto B. Clique nos dispositivos para configurá-los."
  },
  {
    id: 3,
    nome: "Database Detective",
    categoria: "Banco de Dados",
    dificuldade: "Fácil",
    descricao: "Resolva mistérios usando consultas SQL para encontrar pistas em um banco de dados.",
    imagem: "https://www.detetivelira-pi.com.br/wp-content/uploads/2018/03/O-trabalho-do-detetive-particular-no-ambiente-virtual-960x523.jpg",
    instrucoes: "Escreva consultas SQL para encontrar as informações necessárias no banco de dados. Use o editor de texto para escrever suas queries."
  },
  {
    id: 4,
    nome: "Cyber Security Challenge",
    categoria: "Segurança",
    dificuldade: "Médio",
    descricao: "Proteja sistemas contra ataques virtuais e aprenda sobre segurança cibernética.",
    imagem: "https://replydam.discoveryreplymedia.com/production/19/83/2f56438c-2cbc-1d38-1202-0789f6ce0145/ed0da83a-6745-4341-9c2b-417176cf7c75.png?im=AspectCrop=(16,9)",
    instrucoes: "Identifique e corrija vulnerabilidades no sistema apresentado. Clique nas áreas suspeitas para investigar e aplicar correções."
  },
  {
    id: 5,
    nome: "AI Trainer",
    categoria: "Inteligência Artificial",
    dificuldade: "Difícil",
    descricao: "Treine uma IA para realizar tarefas específicas e aprenda sobre aprendizado de máquina.",
    imagem: "https://didatica.tech/wp-content/uploads/2019/10/artificial-intelligence-3262753_1280-1024x557.jpg",
    instrucoes: "Selecione conjuntos de dados e algoritmos para treinar seu modelo de IA. Ajuste os parâmetros para melhorar o desempenho."
  }
]

export default function GamePage() {
  const params = useParams()
  const [jogo, setJogo] = useState<Jogo | null>(null)
  const [progresso, setProgresso] = useState(0)

  useEffect(() => {
    const jogoEncontrado = jogos.find(j => j.nome.toLowerCase().replace(/\s+/g, '-') === params.slug)
    if (jogoEncontrado) {
      setJogo(jogoEncontrado)
    }
  }, [params.slug])

  const handleProgresso = () => {
    setProgresso(prev => Math.min(prev + 20, 100))
  }

  if (!jogo) {
    return <div className="container mx-auto py-10 text-center">Jogo não encontrado</div>
  }

  return (
    <div className="container mx-auto py-[150px]">
      <Link href="/games" className="flex items-center mb-6 text-primary hover:underline">
        <ArrowLeft className="mr-2" size={20} />
        Voltar para a lista de jogos
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h1 className="text-3xl font-bold mb-4">{jogo.nome}</h1>
          <img src={jogo.imagem} alt={jogo.nome} className="w-full rounded-lg mb-4" />
          <div className="flex gap-2 mb-4">
            <Badge variant="secondary">{jogo.categoria}</Badge>
            <Badge 
              variant={jogo.dificuldade === "Fácil" ? "default" : 
                      jogo.dificuldade === "Médio" ? "secondary" : "destructive"}
            >
              {jogo.dificuldade}
            </Badge>
          </div>
          <p className="mb-4">{jogo.descricao}</p>
          <h2 className="text-xl font-semibold mb-2">Instruções:</h2>
          <p>{jogo.instrucoes}</p>
        </div>
        <div className="bg-muted p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Área do Jogo</h2>
          <div className="bg-card p-4 rounded-md mb-4 h-64 flex items-center justify-center">
            <p className="text-center text-muted-foreground">
              Simulação do jogo ainda não disponível. Tente novamente outra hora.
            </p>
          </div>
          <div className="mb-4">
            <Progress value={progresso} className="w-full" />
            <p className="text-sm text-muted-foreground mt-2">Progresso: {progresso}%</p>
          </div>
          <Button disabled onClick={handleProgresso} className="w-full">
            Avançar no Jogo
          </Button>
        </div>
      </div>
    </div>
  )
}