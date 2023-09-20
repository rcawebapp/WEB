'use client';

import { useEffect, useState } from 'react';
import { _members, _coursePosts, _brandsColor, _testimonials } from 'src/_mock';

import ElearningTeam from '../team/elearning-team';
import ElearningAbout from '../about/elearning-about';
import ElearningNewsletter from '../elearning-newsletter';
import ElearningOurClients from '../elearning-our-clients';
import ElearningAboutHero from '../about/elearning-about-hero';
import ElearningTestimonial from '../testimonial/elearning-testimonial';
import ElearningTeamAboutSimple from '../team/elearning-team-about-simple';
import ElearningAboutCoreValues from '../about/elearning-about-core-values';
import ElearningLatestPosts from '../../blog/elearning/elearning-latest-posts';

// ----------------------------------------------------------------------
export default function ElearningAboutView() {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <ElearningAboutHero />

      {/* <TeamElearningAbout members={_members} /> */}
      <ElearningTeamAboutSimple members={_members.slice(0, 4)} />

      <ElearningAboutCoreValues />

      <ElearningAbout />

      <ElearningOurClients brands={_brandsColor} />

      {/* <ElearningTestimonial testimonials={_testimonials} /> */}

      <ElearningLatestPosts posts={_coursePosts.slice(0, 4)} />

      <ElearningNewsletter />
    </>
  );
}
