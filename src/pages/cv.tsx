import { Helmet } from 'react-helmet-async';
import CV from '../components/CV';

const CVPage = () => {
  return (
    <div className="bg-dark min-h-screen">
      <Helmet>
        <title>Guilherme Barbosa - Currículo</title>
        <meta name="description" content="Currículo de Guilherme Barbosa - Desenvolvedor Web Fullstack" />
      </Helmet>
      <main className="container mx-auto px-4 py-8">
        <CV />
      </main>
    </div>
  );
};

export default CVPage;
