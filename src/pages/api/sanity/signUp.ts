import { signUpHandler } from 'next-auth-sanity';

import { client } from 'src/app/[locale]/utils/client';

export default signUpHandler(client);
