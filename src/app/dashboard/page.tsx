import Breadcrumb from '@/components/Common/Breadcrumb'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

type Aluno = {
  id: number
  nome: string
  pontuacao: number
  avatar: string
}

const alunos: Aluno[] = [
  {
    id: 1,
    nome: 'Maria Silva',
    pontuacao: 95,
    avatar: '/placeholder.svg?height=32&width=32',
  },
  {
    id: 2,
    nome: 'João Santos',
    pontuacao: 92,
    avatar: '/placeholder.svg?height=32&width=32',
  },
  {
    id: 3,
    nome: 'Ana Oliveira',
    pontuacao: 88,
    avatar: '/placeholder.svg?height=32&width=32',
  },
  {
    id: 4,
    nome: 'Pedro Costa',
    pontuacao: 85,
    avatar: '/placeholder.svg?height=32&width=32',
  },
  {
    id: 5,
    nome: 'Carla Ferreira',
    pontuacao: 82,
    avatar: '/placeholder.svg?height=32&width=32',
  },
]

export default function RankingAlunos() {
  const alunosOrdenados = [...alunos].sort((a, b) => b.pontuacao - a.pontuacao)

  return (
    <div className="pb-10">
    <Breadcrumb
      pageName="Ranking de Alunos"
      description="Confira o desempenho dos alunos e veja quem está no topo do ranking. Acompanhe o progresso e celebre as conquistas!"
      />
    <div className="container mx-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Posição</TableHead>
            <TableHead>Aluno</TableHead>
            <TableHead className="text-right">Pontuação</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {alunosOrdenados.map((aluno, index) => (
            <TableRow key={aluno.id}>
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell>
                <div className="flex items-center">
                  <Avatar className="mr-2 h-8 w-8">
                    <AvatarImage
                      src={aluno.avatar}
                      alt={`Avatar de ${aluno.nome}`}
                    />
                    <AvatarFallback>
                      {aluno.nome.substring(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                  {aluno.nome}
                </div>
              </TableCell>
              <TableCell className="text-right">{aluno.pontuacao}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
    </div>
  )
}
