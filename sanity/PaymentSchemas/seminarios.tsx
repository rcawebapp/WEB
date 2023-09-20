export const scheduledseminars =  {
    name: "scheduledseminars",
    title: "Scheduled Seminars",
    type: "document",
    fields: [
      {
        name: "email",
        title: "Email",
        type: "string",
      },
      {
        name: "seminario_slugs",
        title: "Seminar Slugs",
        type: "array",
        of: [
          {
            type: "string",
          },
        ],
      },
    ],
  };