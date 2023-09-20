import { SeminarioSanity } from 'src/types/SanitySeminario';
import ElearningScheduledSeminarsView from 'src/sections/_elearning/view/elearning-scheduledseminars-view';

import { client } from '../utils/client';
import { getSessionServer } from '../utils/getCurrentUser';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'Seminarios programados',
};

export const revalidate = 60;

export default async function ElearningScheduledSeminarsPage() {
  const session = await getSessionServer();
  const email = session?.user?.email;

  const getAllSeminarios = async () => {
    if (!session) {
      return []
    }
    const query = `*[_type == "scheduledseminars" && email == $email][0]`;
    const scheduledseminarsDoc = await client.fetch(query, { email });

    if (scheduledseminarsDoc) {
      const seminarioSlugs = scheduledseminarsDoc.seminario_slugs || [];

      // Step 2: Loop over the "seminario_slugs" array and query the database for each course
      const seminariosPromises = seminarioSlugs.map(async (seminarioSlug: string) => {
        const seminarioQuery = `*[_type == "seminario" && id == $seminarioSlug][0]`;
        const seminario = await client.fetch(seminarioQuery, { seminarioSlug });
        return seminario;
      });

      // Step 3: Create an array containing all the course details
      const seminarios = await Promise.all(seminariosPromises);
      return seminarios;
      // Now the 'allSeminarios' array contains details of all seminarios related to the user's email
    }
    console.log("No 'scheduledseminarsDoc' document found for the provided email.");
    return [];
  };

  const seminarios = await getAllSeminarios();

  return <ElearningScheduledSeminarsView seminarios={seminarios} />;
}
