import Typography from '@mui/material/Typography';
import Accordion, { accordionClasses } from '@mui/material/Accordion';
import AccordionSummary, { accordionSummaryClasses } from '@mui/material/AccordionSummary';

import Iconify from 'src/components/iconify';
import { ISeminarioLessonProp } from 'src/types/course';

// ----------------------------------------------------------------------

type LessonItemProps = {
  lesson: ISeminarioLessonProp;
  expanded: boolean;
  selected: boolean;
  onSelected: VoidFunction;
  onExpanded: (event: React.SyntheticEvent, isExpanded: boolean) => void;
};

export default function ElearningSeminarioDetailsLessonItem({
  lesson,
  expanded,
  selected,
  onSelected,
  onExpanded,
}: LessonItemProps) {
  const playIcon = 'carbon:locked';

  return (
    <Accordion
      expanded={expanded}
      onChange={onExpanded}
      disabled={!lesson.unLocked}
      sx={{
        [`&.${accordionClasses.expanded}`]: {
          borderRadius: 0,
        },
      }}
    >
      <AccordionSummary
        sx={{
          px: 1,
          minHeight: 64,
          [`& .${accordionSummaryClasses.content}`]: {
            p: 0,
            m: 0,
          },
          [`&.${accordionSummaryClasses.expanded}`]: {
            bgcolor: 'action.selected',
          },
        }}
      >
        <Iconify
          width={24}
          icon={!lesson.unLocked ? 'carbon:locked' : playIcon}
          onClick={onSelected}
        />

        <Typography
          variant="subtitle1"
          sx={{
            pl: 2,
            flexGrow: 1,
          }}
        >
          {lesson.title}
        </Typography>

        <Typography variant="body2">{lesson.duration} m</Typography>

        <Iconify icon={expanded ? 'carbon:chevron-down' : 'carbon:chevron-right'} sx={{ ml: 2 }} />
      </AccordionSummary>


    </Accordion>
  );
}
