import type { Metadata } from 'next';

import { socials } from '@/config/navigation.config';

const email = socials.find(social => social.name.includes('email'))?.href;
if (!email) throw new Error('Email not found');

const Imprint = () => {
  return (
    <main className="px-container prose-custom mx-auto !max-w-container pb-24 pt-12">
      <h1>Imprint</h1>
      <p>Information pursuant to § 5 TMG:</p>
      <p>
        Konstantin Münster
        <br />
        Rissener Landstr. 225A
        <br />
        22559 Hamburg
        <br />
        Germany
      </p>
      <p>
        <a href={email}>{email?.replace('mailto:', '')}</a>
      </p>
      <hr />
      <p>
        <strong>Liability for Contents</strong>
      </p>
      <p>
        As service providers, we are liable for own contents of these websites
        according to Sec. 7, paragraph 1 German Telemedia Act (TMG). However,
        according to Sec. 8 to 10 German Telemedia Act (TMG), service providers
        are not obligated to permanently monitor submitted or stored information
        or to search for evidences that indicate illegal activities. Legal
        obligations to removing information or to blocking the use of
        information remain unchallenged. In this case, liability is only
        possible at the time of knowledge about a specific violation of law.
        Illegal contents will be removed immediately at the time we get
        knowledge of them.
      </p>
      <p>
        <strong>Liability for Links</strong>
      </p>
      <p>
        Our offer includes links to external third party websites. We have no
        influence on the contents of those websites, therefore we cannot
        guarantee for those contents. Providers or administrators of linked
        websites are always responsible for their own contents. The linked
        websites had been checked for possible violations of law at the time of
        the establishment of the link. Illegal contents were not detected at the
        time of the linking. A permanent monitoring of the contents of linked
        websites cannot be imposed without reasonable indications that there has
        been a violation of law. Illegal links will be removed immediately at
        the time we get knowledge of them.
      </p>
    </main>
  );
};

/** EXPORTS */

export const metadata: Metadata = {
  title: 'Imprint',
  description: undefined,
  robots: {
    follow: false,
    index: false,
  },
};

export default Imprint;
