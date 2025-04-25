export function Introduction() {
  return (
    <section
      id="introducao"
      className="flex w-full shrink-0 flex-col items-center justify-between gap-5 pt-10 md:flex-row md:pt-20 lg:pt-30"
    >
      <img className="bg-textSecondary size-[220px] shrink-0 rounded-full md:size-[300px] lg:size-[320px]" />
      <div className="space-y-4 text-center lg:text-left">
        <h3 className="text-3xl font-semibold">Oi, eu sou a Aylla 👋</h3>
        <div className="space-y-2 leading-[1.6] tracking-wide md:max-w-[500px] lg:max-w-[650px]">
          <p>
            Atuo como desenvolvedora frontend e meu foco é transformar ideias em
            interfaces intuitivas, acessíveis e com boa performance. Já atuei em
            projetos web e mobile, sempre priorizando os detalhes e pensando na
            experiência de quem está do outro lado da tela.
          </p>
          <p>
            Acredito que escrever código vai além de fazer a coisa funcionar: é
            também pensar em quem vai <b>usar</b>, em quem vai{' '}
            <b>dar manutenção</b>, e no <b>impacto</b> que aquilo vai ter. Estou
            sempre buscando aprender mais sobre acessibilidade, boas práticas,
            design systems e tudo que ajude a entregar um produto coeso e
            funcional, do começo ao fim.
          </p>
        </div>
        <div>
          <p className="font-bold tracking-wide">Onde me encontrar?</p>
          <div className="flex items-center justify-center gap-4 lg:justify-start">
            <a
              href="https://github.com/AyllaChristinne"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver no GitHub"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733553.png"
                alt="GitHub"
                className="size-6"
                title="Ver no GitHub"
              />
            </a>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver no LinkedIn"
            >
              <img
                src="https://store-images.s-microsoft.com/image/apps.1719.9007199266245564.44dc7699-748d-4c34-ba5e-d04eb48f7960.abf46174-2d32-4f53-a6cd-644d5b2be452"
                alt="LinkedIn"
                className="w-6"
                title="Ver no LinkedIn"
              />
            </a>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver em Frontend Mentor"
            >
              <img
                src="https://avatars.githubusercontent.com/u/47932038?s=280&v=4"
                alt="Frontend Mentor"
                className="size-6"
                title="Ver em Frontend Mentor"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
