import Box from '@mui/material/Box';
import { Divider } from '@mui/material';
import Stack from '@mui/material/Stack';
import { alpha } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import Iconify from 'src/components/iconify';
import { CourseSanity } from 'src/types/SanityCourse';

import Translate from 'src/app/[locale]/sections/Translate';
import ElearningCourseDetailsLessonList from './elearning-course-details-lesson-list';

// ----------------------------------------------------------------------

type Props = {
  course: CourseSanity;
};

export default function ElearningCourseDetailsSummary({ course }: Props) {
  return (
    <Stack spacing={5}>
      <ElearningCourseDetailsLessonList lessons={course.lessons} />

      <Stack spacing={3}>
        <Typography variant="h4">
          <Translate section="course" text="Lo que vas a aprender" />
        </Typography>

        <Stack spacing={1}>
          {course.learnList?.map((learn) => (
            <Stack key={learn} direction="row" alignItems="center">
              <Box
                sx={{
                  mr: 1.5,
                  width: 20,
                  height: 20,
                  display: 'flex',
                  borderRadius: '50%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  bgcolor: (theme) => alpha(theme?.palette?.primary?.main, 0.08),
                }}
              >
                <Iconify
                  icon="carbon:checkmark"
                  sx={{ width: 16, height: 16, color: 'primary.main' }}
                />
              </Box>
              {learn}
            </Stack>
          ))}
        </Stack>
      </Stack>

      <Divider sx={{ my: 2 }} />

      <Stack spacing={2}>
        <Typography variant="h4">
          <Translate section="course" text="Descripción" />
        </Typography>

        <Typography>{course.description}</Typography>
      </Stack>
    </Stack>
  );
}
