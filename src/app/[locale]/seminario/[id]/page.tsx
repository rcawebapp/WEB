import { client } from 'src/app/[locale]/utils/client';
import { SeminarioSanity } from 'src/types/SanitySeminario';
import ElearningSeminarioView from 'src/sections/_elearning/view/elearning-seminario-view';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'Seminarios ofrecidos por RCA Capital',
};

export const revalidate = 60;

export default async function ElearningSeminarioPage({
  params,
}: {
  params: { id: string; locale?: string };
}) {
  const getAllSeminarios = async () => {
    try {
      const seminarios: SeminarioSanity[] = await client.fetch(`*[_type == "seminario"]`);
      return seminarios;
    } catch (error) {
      console.error('Error fetching seminarios from Sanity:', error.message);
      return [];
    }
  };

  const seminarios = await getAllSeminarios();

  const seminarioId = params.id;

  const seminario: SeminarioSanity = await client.fetch(
    `*[_type == "seminario" && id == $seminarioId][0]`,
    {
      seminarioId, // Pass the courseId as a parameter in the options object
    }
  );

  return (
    <ElearningSeminarioView locale={params.locale} seminario={seminario} seminarios={seminarios} />
  );
}
