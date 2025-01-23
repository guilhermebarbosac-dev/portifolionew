import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { FilePdf, Image } from '@phosphor-icons/react';

const CV = () => {
  const handleDownloadPDF = async () => {
    const cvElement = document.getElementById('cv-content');
    if (!cvElement) return;

    // Capture with higher quality
    const canvas = await html2canvas(cvElement, {
      scale: 2,
      useCORS: true,
      logging: false,
      allowTaint: true,
      backgroundColor: '#ffffff'
    });

    // Create PDF with A4 dimensions
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a3',
      compress: true
    });

    const imgData = canvas.toDataURL('image/png');

    // A4 dimensions in mm
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    // Calculate scaling
    const widthRatio = pdfWidth / canvas.width;
    const heightRatio = pdfHeight / canvas.height;
    const ratio = Math.min(widthRatio, heightRatio);

    // Calculate dimensions to maintain aspect ratio
    const scaledWidth = canvas.width * ratio;
    const scaledHeight = canvas.height * ratio;

    // Center the image
    const x = (pdfWidth - scaledWidth) / 2;
    const y = (pdfHeight - scaledHeight) / 2;

    // Add image to PDF
    pdf.addImage(imgData, 'PNG', x, y, scaledWidth, scaledHeight, undefined, 'FAST');
    
    pdf.save('guilherme-barbosa-cv.pdf');
  };

  const handleDownloadJPG = async () => {
    const cvElement = document.getElementById('cv-content');
    if (!cvElement) return;

    const canvas = await html2canvas(cvElement, { scale: 2 });
    const link = document.createElement('a');
    link.download = 'guilherme-barbosa-cv.jpg';
    link.href = canvas.toDataURL('image/jpeg', 2);
    link.click();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Download buttons */}
        <div className="flex justify-end gap-4 mb-8">
          <button
            onClick={handleDownloadPDF}
            className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition"
          >
            <FilePdf size={24} />
            Download PDF
          </button>
          <button
            onClick={handleDownloadJPG}
            className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition"
          >
            <Image size={24} />
            Download JPG
          </button>
        </div>

        {/* CV Content */}
        <div id="cv-content" className="bg-white rounded-xl shadow-xl overflow-hidden">
          {/* Header with curved design */}
          <div className="relative bg-gray-800 h-64 rounded-br-[100px]">
            <div className="absolute bottom-0 flex items-end gap-20">
              <img
                src="images/profile.png"
                alt="Guilherme Barbosa"
                className="w-[35vh] h-[25vh]"
              />
              <div className="flex flex-col mb-12 gap-2 text-center">
                <h1 className="text-4xl font-bold text-white">Guilherme Barbosa Caetano</h1>
                <p className="text-2xl text-white/90">Desenvolvedor Web Fullstack</p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-3 gap-4 p-4 pt-1">
            {/* Left column */}
            <div className="col-span-1 space-y-6">
              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3 border-b-2 border-gray-600 pb-2">
                  Contato
                </h2>
                <div className="space-y-1">
                  <p className="text-gray-700"> (34) 99883-3438</p>
                  <p className="text-gray-700">guilhermebarbosa19@gmail.com</p>
                  <p className="text-gray-700">Conceição das Alagoas</p>
                  <p className="text-gray-700">https://acesse.one/yJGAS</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3 border-b-2 border-gray-600 pb-2">
                  Habilidades
                </h2>
                <div className="grid grid-cols-2 gap-1">
                  <div className="col-span-2">
                    <h3 className="font-medium text-gray-800 mb-2">Desenvolvimento</h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-gray-600 h-2 rounded-full" style={{ width: '90%' }}></div>
                        </div>
                        <span className="text-sm text-gray-600">React</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-gray-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                        </div>
                        <span className="text-sm text-gray-600">TypeScript</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-gray-600 h-2 rounded-full" style={{ width: '80%' }}></div>
                        </div>
                        <span className="text-sm text-gray-600">Node.js</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3 border-b-2 border-gray-600 pb-2">  
                  Idiomas
                </h2>
                <div className="space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Português</span>
                    <span className="text-sm text-gray-600">Nativo</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Inglês</span>
                    <span className="text-sm text-gray-600">B1 - Intermediário</span>
                  </div>
                </div>
              </section>
            </div>

            {/* Right column */}
            <div className="col-span-2 space-y-6">
              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3 border-b-2 border-gray-600 pb-2">
                  Experiência Profissional
                </h2>
                <div className="space-y-3">
                  <div className="relative pl-6 border-l-2 border-gray-600">
                    <div className="absolute w-3 h-3 bg-gray-600 rounded-full -left-[7px] top-0"></div>
                    <h3 className="text-lg font-semibold text-gray-900">Analista de QA</h3>
                    <p className="text-gray-600 font-medium">Easyjur Software Jurídico</p>
                    <p className="text-sm text-gray-600 mb-2">06/2023 - atual</p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>Realização de testes automatizados e manuais do produto de gestão jurídica</li>
                      <li>Análise de BUGS para abertura e gestão de qualidade das atividades dos desenvolvedores utilizando a ferramenta JIRA</li>
                      <li>SELECTS e UPDATES dentro do banco de dados Work Production</li>
                      <li>Realização de testes em endpoints e webhooks utilizando a ferramenta Postman</li>
                      <li>Desenvolvimento de testes automatizados em Node.js utilizando a ferramenta Cypress</li>
                    </ul>
                  </div>

                  <div className="relative pl-6 border-l-2 border-gray-600">
                    <div className="absolute w-3 h-3 bg-gray-600 rounded-full -left-[7px] top-0"></div>
                    <h3 className="text-lg font-semibold text-gray-900">Analista de Suporte Técnico JR</h3>
                    <p className="text-gray-600 font-medium">DeltaSucroenergia S/A</p>
                    <p className="text-sm text-gray-600 mb-2">01/2019 - 01/2021</p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>Atendimento como Help Desk, atendimento a todas as demandas da área de suporte técnico</li>
                      <li>Manutenção e bom funcionamento de todos computadores da empresa</li>
                      <li>Validação de conversores de fibra óptica</li>
                      <li>Configuração e gerenciamento de Switchs e Roteadores CISCO</li>
                      <li>Monitoramento de toda estrutura de rede por software</li>
                      <li>Criação de escopo de novas instalações de redes utilizando CISCO PACKET TRACER e VISIO</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3 border-b-2 border-gray-600 pb-2">
                  Formação Acadêmica
                </h2>
                <div className="pl-6 relative border-l-2 border-gray-600">
                  <div className="absolute w-3 h-3 bg-gray-600 rounded-full -left-[7px] top-0"></div>
                  <h3 className="text-lg font-semibold text-gray-900">Graduação em Sistemas de Informações</h3>
                  <p className="text-gray-600 font-medium">ESTÁCIO</p>
                  <p className="text-sm text-gray-600">12/2024</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3 border-b-2 border-gray-600 pb-2">
                  Certificações
                </h2>
                <div className="grid grid-cols-2 gap-2 text-center">
                  <div className="flex flex-col gap-1 bg-gray-50 p-2 rounded-lg text-sm">
                    <h3 className="font-medium text-gray-900">Desenvolvimento Web</h3>
                    <p className="text-sm text-gray-700">JavaScript, TypeScript e Angular</p>
                    <span className="text-sm text-white bg-gray-600 rounded-2xl p-1">UDEMY</span>
                  </div>
                  <div className="flex flex-col gap-1 bg-gray-50 p-2 rounded-lg text-sm">
                    <h3 className="font-medium text-gray-900">React & Next.js</h3>
                    <p className="text-sm text-gray-700">Curso Completo com Projetos</p>
                    <span className="text-sm text-white bg-gray-600 rounded-2xl p-1">UDEMY</span>
                  </div>
                  <div className="flex flex-col gap-1 bg-gray-50 p-2 rounded-lg text-sm">
                    <h3 className="font-medium text-gray-900">Node.js</h3>
                    <p className="text-sm text-gray-700">Do Zero a Maestria com Projetos</p>
                    <span className="text-sm text-white bg-gray-600 rounded-2xl p-1">UDEMY</span>
                  </div>
                  <div className="flex flex-col gap-1 bg-gray-50 p-2 rounded-lg text-sm">
                    <h3 className="font-medium text-gray-900">Testes Automáticos</h3>
                    <p className="text-sm text-gray-700">Curso Completo de Teste de Software</p>
                    <span className="text-sm text-white bg-gray-600 rounded-2xl p-1">UDEMY</span>
                  </div>
                  <div className="flex flex-col gap-1 bg-gray-50 p-2 rounded-lg text-sm">
                    <h3 className="font-medium text-gray-900">PHP Avançado</h3>
                    <p className="text-sm text-gray-700">Curso Completo de PHP com projetos reais</p>
                    <span className="text-sm text-white bg-gray-600 rounded-2xl p-1">UDEMY</span>
                  </div>
                  <div className="flex flex-col gap-1 bg-gray-50 p-2 rounded-lg text-sm">
                    <h3 className="font-medium text-gray-900">UI/UX Design com Adobe XD</h3>
                    <p className="text-sm text-gray-700">Curso Completo de UI/UX Design</p>
                    <span className="text-sm text-white bg-gray-600 rounded-2xl p-1">UDEMY</span>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CV;
