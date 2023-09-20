import { SeminarioSanity } from 'src/types/SanitySeminario';
import ElearningSeminariosView from 'src/sections/_elearning/view/elearning-seminarios-view';

import { client } from '../utils/client';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'Próximos seminarios',
};

export const revalidate = 60;

export default async function ElearningSeminariosPage({ params }: any) {
  const getAllSeminarios = async () => {
    try {
      const seminarios: SeminarioSanity[] = await client.fetch(`*[_type == "seminario"]`);
      console.log('fetched Seminarios from sanity');
      return seminarios;
    } catch (error) {
      console.error('Error fetching seminarios from Sanity:', error.message);
      return [];
    }
  };

  const seminarios = await getAllSeminarios();
  return <ElearningSeminariosView locale={params.locale} seminarios={seminarios} />;
}
