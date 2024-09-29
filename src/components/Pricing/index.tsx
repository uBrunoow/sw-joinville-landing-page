'use client'
import { useState } from 'react'
import SectionTitle from '../Common/SectionTitle'
import OfferList from './OfferList'
import PricingBox from './PricingBox'

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true)

  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Preços Simples e Acessíveis"
          paragraph="Existem muitas variações de passagens de Lorem Ipsum disponíveis, mas a maioria sofreu alguma forma de alteração."
          center
          width="665px"
        />

        <div className="w-full">
          <div className="mb-8 flex justify-center md:mb-12 lg:mb-16">
            <span
              onClick={() => setIsMonthly(true)}
              className={`${
                isMonthly
                  ? 'pointer-events-none text-primary'
                  : 'text-dark dark:text-white'
              } mr-4 cursor-pointer text-base font-semibold`}
            >
              Mensal
            </span>
            <div
              onClick={() => setIsMonthly(!isMonthly)}
              className="flex cursor-pointer items-center"
            >
              <div className="relative">
                <div className="h-5 w-14 rounded-full bg-[#1D2144] shadow-inner"></div>
                <div
                  className={`${
                    isMonthly ? '' : 'translate-x-full'
                  } shadow-switch-1 absolute left-0 top-[-4px] flex h-7 w-7 items-center justify-center rounded-full bg-primary transition`}
                >
                  <span className="active h-4 w-4 rounded-full bg-white"></span>
                </div>
              </div>
            </div>
            <span
              onClick={() => setIsMonthly(false)}
              className={`${
                isMonthly
                  ? 'text-dark dark:text-white'
                  : 'pointer-events-none text-primary'
              } ml-4 cursor-pointer text-base font-semibold`}
            >
              Anual
            </span>
          </div>
        </div>

        <div className=" gap-x-8 gap-y-10 flex items-center justify-center">
          {/* <PricingBox
            packageName="Lite"
            price={isMonthly ? '0' : '0'}
            duration={isMonthly ? 'mês' : 'ano'}
            subtitle="Experimente nosso plano Lite gratuitamente e descubra como a gamificação pode transformar seu aprendizado."
          >
            <OfferList text="Acesso a Módulos Básicos de TI" status="active" />
            <OfferList text="Certificados Limitados" status="active" />
            <OfferList text="Desafios de Nível Básico" status="active" />
            <OfferList text="Suporte por Email" status="active" />
            <OfferList text="Sem Acesso a Competição entre Alunos" status="inactive" />
            <OfferList text="Acesso a Comunidade Exclusiva" status="inactive" />
          </PricingBox> */}
          
          <PricingBox
            packageName="Basic"
            price={isMonthly ? '49,90' : '525,88'}
            duration={isMonthly ? 'mês/aluno' : 'ano/aluno'}
            subtitle="Tenha acesso a mais conteúdos e gamifique seu aprendizado com o plano Basic."
          >
            <OfferList text="Acesso a Todos os Módulos de TI" status="active" />
            <OfferList text="Certificados Ilimitados" status="active" />
            <OfferList text="Desafios de Nível Intermediário" status="active" />
            <OfferList text="Participação em Rankings" status="active" />
            <OfferList text="Acesso a Competição entre Alunos" status="active" />
            <OfferList text="Acesso a Comunidade Exclusiva" status="inactive" />
          </PricingBox>
          
          {/* <PricingBox
            packageName="Plus"
            price={isMonthly ? '199,90' : '2398,80'}
            duration={isMonthly ? 'mês' : 'ano'}
            subtitle="Desbloqueie todos os recursos com o plano Plus e acelere seu aprendizado com máxima gamificação."
          >
            <OfferList text="Acesso a Todos os Módulos Avançados de TI" status="active" />
            <OfferList text="Certificados Ilimitados e Personalizados" status="active" />
            <OfferList text="Desafios de Nível Avançado" status="active" />
            <OfferList text="Participação em Rankings Nacionais" status="active" />
            <OfferList text="Acesso a Competição entre Alunos e Universidades" status="active" />
            <OfferList text="Acesso a Comunidade Exclusiva com Mentorias" status="active" />
          </PricingBox> */}
        </div>



      </div>

      <div className="absolute bottom-0 left-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  )
}

export default Pricing
