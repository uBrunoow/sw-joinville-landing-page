"use client"

import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Breadcrumb from "@/components/Common/Breadcrumb"

type Jogo = {
  id: number
  nome: string
  categoria: string
  dificuldade: "Fácil" | "Médio" | "Difícil"
  descricao: string
  imagem: string
}

const jogos: Jogo[] = [
  {
    id: 1,
    nome: "Code Breaker",
    categoria: "Programação",
    dificuldade: "Médio",
    descricao: "Quebre o código e aprenda conceitos de programação resolvendo puzzles lógicos.",
    imagem: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbWElQzMlQTclQzMlQTNvfGVufDB8fDB8fHww"
  },
  {
    id: 2,
    nome: "Network Maze",
    categoria: "Redes",
    dificuldade: "Difícil",
    descricao: "Navegue por um labirinto de redes, configurando switches e roteadores para chegar ao destino.",
    imagem: "https://img.freepik.com/premium-photo/intricate-maze-design-showcasing-complex-network-pathways-creating_988214-2582.jpg"
  },
  {
    id: 3,
    nome: "Database Detective",
    categoria: "Banco de Dados",
    dificuldade: "Fácil",
    descricao: "Resolva mistérios usando consultas SQL para encontrar pistas em um banco de dados.",
    imagem: "https://www.detetivelira-pi.com.br/wp-content/uploads/2018/03/O-trabalho-do-detetive-particular-no-ambiente-virtual-960x523.jpg"
  },
  {
    id: 4,
    nome: "Cyber Security Challenge",
    categoria: "Segurança",
    dificuldade: "Médio",
    descricao: "Proteja sistemas contra ataques virtuais e aprenda sobre segurança cibernética.",
    imagem: "https://replydam.discoveryreplymedia.com/production/19/83/2f56438c-2cbc-1d38-1202-0789f6ce0145/ed0da83a-6745-4341-9c2b-417176cf7c75.png?im=AspectCrop=(16,9)"
  },
  {
    id: 5,
    nome: "AI Trainer",
    categoria: "Inteligência Artificial",
    dificuldade: "Difícil",
    descricao: "Treine uma IA para realizar tarefas específicas e aprenda sobre aprendizado de máquina.",
    imagem: "https://didatica.tech/wp-content/uploads/2019/10/artificial-intelligence-3262753_1280-1024x557.jpg"
  }
]

export default function JogosTICards() {
  return (
    <div className="pb-10">
            <Breadcrumb
        pageName="Jogos Interativos de TI"
        description="Explore uma variedade de jogos interativos de TI e aprenda de forma divertida e envolvente. Desafie suas habilidades e amplie seus conhecimentos!"
        />
    <div className="container mx-auto ">
      {/* <h1 className="text-3xl font-bold mb-6 text-center">Jogos Interativos de TI</h1> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jogos.map((jogo) => (
          <Card key={jogo.id} className="flex flex-col">
            <CardHeader>
              <img src={jogo.imagem} alt={jogo.nome} className="w-full h-32 object-cover rounded-t-lg" />
              <CardTitle className="mt-2">{jogo.nome}</CardTitle>
              <div className="flex gap-2 mt-2">
                <Badge variant="secondary">{jogo.categoria}</Badge>
                <Badge 
                  variant={jogo.dificuldade === "Fácil" ? "default" : 
                          jogo.dificuldade === "Médio" ? "secondary" : "destructive"}
                >
                  {jogo.dificuldade}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>{jogo.descricao}</CardDescription>
            </CardContent>
            <CardFooter className="mt-auto">
              <Link href={`/games/${jogo.nome.toLowerCase().replace(/\s+/g, '-')}`} className="w-full">
                <Button className="w-full">Jogar</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
    </div>
  )
}