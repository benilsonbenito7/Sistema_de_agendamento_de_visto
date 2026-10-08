import Link from "next/link"

export default function Home() {

  return (
    <main>
      <h1>VisaLink</h1>
      <p>Sistema de agendamento de visto</p>

      <Link href="/login">Entrar</Link>
      <Link href="/register">Criar Conta</Link>

    </main>

  );

}
