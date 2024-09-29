'use client'
import { useState } from 'react'
import SectionTitle from '../Common/SectionTitle'
import OfferList from './OfferList'
import PricingBox from './PricingBox'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'


import { google } from 'googleapis';
import Link from 'next/link'


// AKfycbzTW1tpoR2SBNSe7LJiMITGEbJ3CZWvA9FldEncS0C7i1J_wl-U5A1LuqbhyPvE8Olcfw
// https://script.google.com/macros/s/AKfycbzTW1tpoR2SBNSe7LJiMITGEbJ3CZWvA9FldEncS0C7i1J_wl-U5A1LuqbhyPvE8Olcfw/exec

// async function handler(req, res) {
//   if (req.method === 'POST') {
//     const { nome, email } = req.body;

//     const auth = new google.auth.GoogleAuth({
//       credentials: {
//         client_email: process.env.GOOGLE_CLIENT_EMAIL,
//         private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
//       },
//       scopes: ['https://www.googleapis.com/auth/spreadsheets'],
//     });

//     const sheets = google.sheets({ version: 'v4', auth });

//     const spreadsheetId = process.env.SPREADSHEET_ID;
//     const range = 'Sheet1!A:C'; // Ajuste o intervalo conforme necessário

//     await sheets.spreadsheets.values.append({
//       spreadsheetId,
//       range,
//       valueInputOption: 'RAW',
//       requestBody: {
//         values: [[nome, email]],
//       },
//     });

//     res.status(200).json({ message: 'Dados enviados com sucesso!' });
//   } else {
//     res.status(405).json({ message: 'Método não permitido' });
//   }
// }

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true)
  const [formData, setFormData] = useState({ nome: '', email: ''})

  // const handleChange = (e) => {
  //   const { name, value } = e.target
  //   setFormData((prevData) => ({ ...prevData, [name]: value }))
  // }

  // const handleSubmit = async (e) => {
  //   e.preventDefault()
  //   const response = await fetch('https://script.google.com/macros/s/AKfycbzTW1tpoR2SBNSe7LJiMITGEbJ3CZWvA9FldEncS0C7i1J_wl-U5A1LuqbhyPvE8Olcfw/exec', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(formData),
  //   })
  //   const result = await response.json()
  //   alert(result.message)
  // }

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
        </div>
      </div>

      <div className='pt-[150px] px-[100px] flex items-center justify-center flex-col'>
        {/* <SectionTitle
          title="Entre em contato conosco"
          paragraph="Faça seu orçamento personalizado inserindo o seu nome e o seu e-mail e entraremos em contato."
          center
          width="665px"
        /> */}

<h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
Entre em contato conosco
        </h2>
        <p className="text-base !leading-relaxed text-body-color md:text-lg">
        Faça seu orçamento personalizado inserindo o seu nome e o seu e-mail e entraremos em contato.        </p>

        <form className="flex w-full flex-col items-center justify-center gap-5">
          {/* <div className="w-full max-w-lg">
            <label>Nome</label>
            <Input
              type="text"
              name="nome"
              value={formData.nome}
              // onChange={handleChange}
              className="h-[45px] border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
              placeholder="Digite seu nome"
            />
          </div>
          <div className="w-full max-w-lg">
            <label>Email</label>
            <Input
              type="email"
              name="email"
              value={formData.email}
              // onChange={handleChange}
              className="h-[45px] border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
              placeholder="Digite seu email"
            />
          </div> */}
          <Link href={"https://forms.gle/h72rMzBwdYF9wMfj7"}  target="_blank" className="mt-4 h-[45px] rounded text-center bg-primary w-full max-w-lg px-4 py-2 text-white">
            Entrar em contato
          </Link>
        </form>
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