'use client';

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';

import { client } from 'src/app/[locale]/utils/client';
import { PostSanity } from 'src/types/SanityPost';
import { CourseSanity } from 'src/types/SanityCourse';
import { SeminarioSanity } from 'src/types/SanitySeminario';
import { _members, _courses, _brandsColor, _coursePosts } from 'src/_mock';

import ElearningTeam from '../team/elearning-team';
import ElearningNewsletter from '../elearning-newsletter';
import ElearningOurClients from '../elearning-our-clients';
import ElearningLandingHero from '../landing/elearning-landing-hero';
import ElearningLatestPosts from '../../blog/elearning/elearning-latest-posts';
import ElearningLandingFeaturedCourses from '../landing/elearning-landing-featured-courses';
import ElearningLandingFeaturedSeminarios from '../landing/elearning-landing-featured-seminarios';

// ----------------------------------------------------------------------

export default function ElearningLandingView({
  courses,
  posts,
  seminarios,
  locale,
}: {
  courses: CourseSanity[];
  posts: PostSanity[];
  seminarios: SeminarioSanity[];
  locale?: string;
}) {
  const [isMounted, setIsMounted] = useState<boolean>(false); // to prevent hydration errors
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const { data: session, status } = useSession();
  if (status === 'authenticated') {
    console.log('Sesión  iniciada');
  }
  console.log('From elearning', session, status);

  if (!isMounted) return null;
  return (
    <>
      <ElearningLandingHero locale={locale} />

      <ElearningOurClients brands={_brandsColor} />

      <ElearningLandingFeaturedCourses courses={courses} />

      <ElearningTeam members={_members.slice(0, 4)} />

      <ElearningLandingFeaturedSeminarios locale={locale} seminarios={seminarios} />

      {/* <ElearningTestimonial testimonials={_testimonials} /> */}

      <ElearningLatestPosts locale={locale} posts={posts.slice(0, 4)} />

      <ElearningNewsletter />
    </>
  );
}
