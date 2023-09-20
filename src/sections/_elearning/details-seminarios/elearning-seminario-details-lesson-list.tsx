import { useState, useCallback } from 'react';

import Typography from '@mui/material/Typography';

import { useBoolean } from 'src/hooks/use-boolean';
import { ISeminarioLessonProp } from 'src/types/course';

import ElearningSeminarioDetailsLessonItem from './elearning-seminario-details-lesson-item';
import ElearningSeminarioDetailsLessonsDialog from './elearning-seminario-details-lessons-dialog';

// ----------------------------------------------------------------------

type Props = {
  lessons: ISeminarioLessonProp[];
};

export default function ElearningSeminarioDetailsLessonList({ lessons }: Props) {
  const videoPlay = useBoolean();

  const [expanded, setExpanded] = useState<string | false>(false);

  const [selectedLesson, setSelectedLesson] = useState<ISeminarioLessonProp | null>(null);

  const handleReady = useCallback(() => {
    setTimeout(() => videoPlay.onTrue(), 500);
  }, [videoPlay]);

  const handleSelectedLesson = useCallback((lesson: ISeminarioLessonProp) => {
    if (lesson.unLocked) {
      setSelectedLesson(lesson);
    }
  }, []);

  const handleClose = useCallback(() => {
    setSelectedLesson(null);
    videoPlay.onFalse();
  }, [videoPlay]);

  const handleExpandedLesson = useCallback(
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    },
    []
  );

  return (
    <div>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Lecciones
      </Typography>


{lessons.map((lesson) => (
        <ElearningSeminarioDetailsLessonItem
          key={lesson.id}
          lesson={lesson}
          expanded={expanded === lesson.id}
          onExpanded={handleExpandedLesson(lesson.id)}
          selected={selectedLesson?.id === lesson.id}
          onSelected={() => {
            handleSelectedLesson(lesson);
          }}
        />
      ))}

      <ElearningSeminarioDetailsLessonsDialog
        lessons={lessons}
        selectedLesson={selectedLesson}
        onSelectedLesson={(lesson) => setSelectedLesson(lesson)}
        open={!!selectedLesson?.unLocked}
        onClose={handleClose}
        playing={videoPlay.value}
        onReady={handleReady}
        onEnded={videoPlay.onFalse}
        onPlay={videoPlay.onTrue}
        onPause={videoPlay.onFalse}
      />
    </div>
  );
}
