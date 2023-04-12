import Head from "next/head";
import styles from "@/styles/home.module.scss";
import { ToastContainer, toast } from "react-toastify";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import axios from "axios";
import Image from "next/image";
import Logo from "../assets/logotipo2.png";
import WhatsappLogo from "../assets/whatsapplogo.svg";
import Background from "../assets/background-page.jpg";
import { MdSupervisorAccount } from "react-icons/md";
import {
  HiDesktopComputer,
  HiBookOpen,
  HiPhone,
  HiMail,
  HiClock,
} from "react-icons/hi";
import { FaChevronCircleDown, FaChevronCircleUp } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { FaUserTie } from "react-icons/fa";

export default function Home() {
  interface IForm {
    name: string;
    email: string;
    phone: string;
    text: string;
  }

  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    email: yup.string().required("Campo obrigatório").email("Email inválido"),
    phone: yup.string().required("Campo obrigatório"),
    text: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>({
    resolver: yupResolver(schema),
  });

  const submit = handleSubmit(async (payload) => {
    const id = toast.loading("enviando o email");
    try {
      const response = await axios.post("api/send-email", payload);
      console.log(response.data);
      toast.update(id, {
        render: "email enviado!",
        type: "success",
        isLoading: false,
        autoClose: 2000,
      });
    } catch (err: any) {
      toast.update(id, {
        render: "Falha ao enviar email",
        type: "error",
        isLoading: false,
        autoClose: 2000,
      });
      console.error(err.message);
    }
  });

  return (
    <>
      <Head>
        <title>Lopes Fragoso Advogados</title>
        <meta
          name="descrição"
          content="Lopes e Fragoso Advogados é um escritório especializado na defesa do consumidor em face de contratos bancários abusivos. Atendemos de forma 100% online, trazendo conforto e segurança para o cliente, pois acreditamos na facilidade do acesso à justiça! "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="advogado em defesa do consumidor, juros absurdos, advogado,cobrança judicial, bloqueio de conta bancária, ordem judicial, bloqueio de conta"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ToastContainer />
      <div className={styles.container}>
        <div className={styles.header}>
          <Image
            className={styles.image}
            src={Logo}
            alt="logotipo"
            quality={100}
            // sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
          />
        </div>
        <div className={styles.whatsappContact}>
          <p>Teve sua conta bancária bloqueada? Nós podemos ajudar!</p>
          <p>
            Não perca o acesso ao seu dinheiro: saiba como se defender e
            desbloquear sua conta bancária após um bloqueio judicial.
          </p>
          <a href="https://api.whatsapp.com/send?phone=5592982562581&text=Estou%20com%20problemas%20com%20d%C3%ADvida%20de%20conta%20corrente%20(Cart%C3%A3o%20de%20Cr%C3%A9dito,%20Cheque%20Especial%20eEmpr%C3%A9stimos),%20pode%20me%20ajudar??">
            <button>
              Mandar mensagem
              <Image
                src={WhatsappLogo}
                alt="Imagem do ícone do whatsapp"
                height={26}
              />
            </button>
          </a>
        </div>
        <div className={styles.about}>
          <Image
            src={Background}
            alt="imagem que representa um atendimento jurídico"
            quality={100}
          />
          <div className={styles.title}>
            <h1>Sobre</h1>
            <div className={styles.grayLine}></div>
          </div>
          <p>
            Lopes e Fragoso Advogados é um escritório especializado em defender
            pessoas físicas e jurídicas em casos de bloqueio de contas bancárias
            por ordem judicial. Nossa equipe é formada por advogados experientes
            e comprometidos em fornecer o melhor serviço, desde o primeiro
            contato até a resolução do problema. Trabalhamos de forma
            interdisciplinar para encontrar a melhor solução para o seu caso.
            Além disso, atendemos totalmente online, o que proporciona conforto
            e segurança ao cliente. Acreditamos que o acesso à justiça deve ser
            fácil e descomplicado, por isso nos dedicamos a oferecer uma
            experiência de atendimento de qualidade. Conte conosco para proteger
            seus direitos e ajudá-lo a recuperar o acesso ao seu dinheiro.
          </p>
        </div>
        <div className={styles.FAQ}>
          <h1>
            Perguntas <br /> Frequentes
          </h1>
          <div className={styles.grayLine}></div>

          <Accordion
            question="Por que minha conta bancária foi bloqueada por ordem judicial?"
            answer="Porque uma ordem judicial determinou o bloqueio de seus bens, incluindo sua
conta bancária, como parte de um processo judicial, podendo ser relativo a
dívidas, processos trabalhistas, dívidas fiscais entre outras."
          />
          <Accordion
            question="É possível contestar ou recorrer contra uma ordem de bloqueio de conta
            bancária por ordem judicial?"
            answer="Sim, é possível contestar ou recorrer contra uma ordem de bloqueio de conta 
            bancária por ordem judicial. Para isso, é necessário buscar a ajuda de um 
            advogado para analisar o caso e tomar as medidas cabíveis para contestar ou 
            recorrer a decisão judicial."
          />
          <Accordion
            question=" Quanto tempo pode durar o bloqueio da minha conta bancária por ordem 
            judicial?"
            answer="O tempo de bloqueio varia de acordo com o caso. Em alguns casos, pode durar 
            algumas semanas ou meses, depende também da rapidez que você procurar sua 
            defesa, em alguns casos, o juiz pode até determinar a transferência dos valores 
            para uma conta judicial, o que ficará mais dificil de recuperar os valores."
          />
        </div>
        <div className={styles.help}>
          <p>Recebeu cobrança pelo cartório ou escritório jurídico?</p>
          <p>Defesa em execução de dívidas?</p>
          <p>Enfrentando cobrança judicial? Podemos ajudar!</p>
          <a href="https://api.whatsapp.com/send?phone=5592982562581&text=Estou%20com%20problemas%20com%20d%C3%ADvida%20de%20conta%20corrente%20(Cart%C3%A3o%20de%20Cr%C3%A9dito,%20Cheque%20Especial%20eEmpr%C3%A9stimos),%20pode%20me%20ajudar??">
            <button>
              Mandar mensagem
              <Image
                src={WhatsappLogo}
                height={26}
                alt="Imagem do ícone do whatsapp"
              />
            </button>
          </a>
        </div>
        <div className={styles.whatMakesUsDifferent}>
          <h1>Nossos diferenciais</h1>
          <div className={styles.grayLine}></div>
          <div className={styles.differentHeader}>
            <FaUserTie size={50} />
            <p>Atendimento 100% online e humanizados.</p>
          </div>
          <div className={styles.differentHeader}>
            <HiDesktopComputer size={50} />
            <p>Uso de tecnologia para uma melhor entrega do serviço.</p>
          </div>
          <div className={styles.differentHeader}>
            <MdSupervisorAccount size={50} />
            <p>Equipe capacitada desde atendimento à conclusão do processo.</p>
          </div>
          <div className={styles.differentHeader}>
            <HiBookOpen size={50} />
            <p>Envio mensal de relatórios ao cliente.</p>
          </div>
        </div>
        <div className={styles.contact}>
          <h1>Contato</h1>
          <form onSubmit={submit}>
            <input type="text" placeholder="Nome" {...register("name")} />
            {errors.name && <small>{errors.name.message}</small>}
            <input type="email" placeholder="Email" {...register("email")} />
            {errors.email && <small>{errors.email.message}</small>}
            <input type="tel" placeholder="Telefone" {...register("phone")} />
            {errors.phone && <small>{errors.phone.message}</small>}
            <textarea placeholder="Mensagem" {...register("text")} />
            {errors.text && <small>{errors.text.message}</small>}
            <button type="submit">Enviar</button>
          </form>
        </div>
        <div className={styles.informations}>
          <figure className={styles.header}>
            <Image src={Logo} alt="logotipo" height={100} />
          </figure>
          <h1>Informações</h1>
          <div className={styles.infoGroup}>
            <div className={styles.info}>
              <HiPhone size={30} />
              <p>(92) 9 8256-2581</p>
            </div>
            <div className={styles.info}>
              <HiMail size={30} />
              <p>victoreduardoadv@outlook.com</p>
            </div>
            <div className={styles.info}>
              <HiClock size={30} />
              <p>segunda a sexta das 9h às 19h</p>
            </div>
            <div className={styles.info}>
              <MdLocationPin size={30} />
              <p>
                Escritório sediado em Manaus-AM. <br />
                <strong> Atendimento online para todo brasil.</strong>
              </p>
            </div>
          </div>
        </div>
        <p></p>
      </div>
    </>
  );
}

const Accordion = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isAccordionVisible, setIsAccordionVisible] = useState(false);

  return (
    <div
      className={styles.accordion}
      onClick={() => setIsAccordionVisible(!isAccordionVisible)}
    >
      <div className={styles.question}>
        <p>{question}</p>
        {isAccordionVisible ? (
          <FaChevronCircleUp className={styles.arrowIcon} size={20} />
        ) : (
          <FaChevronCircleDown className={styles.arrowIcon} size={20} />
        )}
      </div>
      {isAccordionVisible ? <p className={styles.answer}>{answer}</p> : null}
    </div>
  );
};
