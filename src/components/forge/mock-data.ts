export type StudyBlock = {
  id: string;
  subject: string;
  start: string;
  end: string;
  reason: string;
  type: "study" | "class" | "rest" | "meal" | "travel";
};

export const subjects = [
  {
    id: "s1",
    name: "Biology",
    priority: 5,
    weakness: 4,
    progress: 58,
    exam: "2026-05-12",
    studyHours: 7,
  },
  {
    id: "s2",
    name: "Mathematics",
    priority: 4,
    weakness: 3,
    progress: 72,
    exam: "2026-05-21",
    studyHours: 5,
  },
  {
    id: "s3",
    name: "Chemistry",
    priority: 4,
    weakness: 5,
    progress: 41,
    exam: "2026-05-19",
    studyHours: 8,
  },
];

export const weeklyEvents: StudyBlock[] = [
  {
    id: "e1",
    subject: "Biology Revision",
    start: "2026-05-11T07:30:00",
    end: "2026-05-11T09:00:00",
    reason: "High priority — exam in 4 days",
    type: "study",
  },
  {
    id: "e2",
    subject: "Math Class",
    start: "2026-05-11T10:00:00",
    end: "2026-05-11T11:30:00",
    reason: "Fixed class",
    type: "class",
  },
  {
    id: "e3",
    subject: "Lunch",
    start: "2026-05-11T12:30:00",
    end: "2026-05-11T13:00:00",
    reason: "Energy recovery",
    type: "meal",
  },
  {
    id: "e4",
    subject: "Chemistry Problem Set",
    start: "2026-05-11T16:00:00",
    end: "2026-05-11T17:15:00",
    reason: "Weakness level high",
    type: "study",
  },
  {
    id: "e5",
    subject: "Commute",
    start: "2026-05-12T08:00:00",
    end: "2026-05-12T08:45:00",
    reason: "Travel buffer",
    type: "travel",
  },
  {
    id: "e6",
    subject: "Deep Focus Math",
    start: "2026-05-12T19:00:00",
    end: "2026-05-12T20:30:00",
    reason: "Adaptive scheduling after missed block",
    type: "study",
  },
  {
    id: "e7",
    subject: "Rest",
    start: "2026-05-13T21:00:00",
    end: "2026-05-13T22:00:00",
    reason: "Burnout prevention",
    type: "rest",
  },
];
