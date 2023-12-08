'use client';

import { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import Iconify from 'src/components/iconify';
import { useBoolean } from 'src/hooks/use-boolean';
import { CourseSanity } from 'src/types/SanityCourse';
import { ICourseFiltersProps } from 'src/types/course';

import Translate from 'src/app/[locale]/sections/Translate';
import ElearningNewsletter from '../elearning-newsletter';
import ElearningFilters from '../filters/elearning-filters';
import ElearningCourseList from '../list/elearning-course-list';

// ----------------------------------------------------------------------

// console.log('hola', _courses)

export default function ElearningCoursesView({ courses }: { courses: CourseSanity[] }) {
  const defaultValues = {
    filterDuration: [],
    filterCategories: [],
    filterRating: null,
    filterFee: [],
    filterLevel: [],
    filterLanguage: [],
  };
  const [isMounted, setIsMounted] = useState<boolean>(false); // to prevent hydration errors
  const [filters, setFilters] = useState<ICourseFiltersProps>(defaultValues);
  const mobileOpen = useBoolean();
  if (filters.filterCategories.length > 0) {
    courses = courses.filter((course) => filters.filterCategories.includes(course.category));
  }
  const loading = useBoolean(true);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const fakeLoading = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      loading.onFalse();
    };
    fakeLoading();
  }, [loading]);

  if (!isMounted) return null;

  return (
    <>
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{
            py: 5,
            px: 11,
          }}
        >
          <Typography variant="h2">
            <Translate section="courses" text="Nuestro Club" />
          </Typography>

          <Button
            color="inherit"
            variant="contained"
            startIcon={<Iconify icon="carbon:filter" width={18} />}
            onClick={mobileOpen.onTrue}
            sx={{
              display: { md: 'none' },
            }}
          >
            <Translate section="courses" text="Filtros" />
          </Button>
        </Stack>

        <Stack direction={{ xs: 'column', md: 'row' }}>
          {/* <ElearningFilters
            open={mobileOpen.value}
            onClose={mobileOpen.onFalse}
            filters={filters}
            setFilters={setFilters}
          /> */}

          <Box
            sx={{
              flexGrow: 1,
              pl: { md: 10 },
              pr: { md: 10 },
              width: { md: `calc(100% - ${280}px)` },
            }}
          >
            <ElearningCourseList courses={courses} loading={loading.value} />
          </Box>
        </Stack>
      </Container>

      <ElearningNewsletter />
    </>
  );
}
