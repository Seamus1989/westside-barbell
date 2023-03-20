export enum HeavyExercises {
  // eslint-disable-next-line sonarjs/no-duplicate-string
  'Heavy upper body' = 'Heavy upper body',
  // eslint-disable-next-line sonarjs/no-duplicate-string
  'Heavy lower body' = 'Heavy lower body',
}

export enum DynamicExercises {
  // eslint-disable-next-line sonarjs/no-duplicate-string
  'Dynamic lower body' = 'Dynamic lower body',
  // eslint-disable-next-line sonarjs/no-duplicate-string
  'Dynamic upper body' = 'Dynamic upper body',
}

const heavy: {
  [key in HeavyExercises]: {
    mainExercise: {
      description: string;
      exercises: {
        name: string;
        note: string;
      }[];
    };
    specialityExercise: {
      description: string;
      exercises: {
        name: string;
        note: string;
      }[];
    };
    completionExercises: string[];
  };
} = {
  [HeavyExercises['Heavy upper body']]: {
    mainExercise: {
      description:
        'Heavy upper body, work to a 1-3 rep max. Pyramid upwards to maximal weight. Rotate exercises every 2-3 weeks.',
      exercises: [
        {
          name: 'Bench press',
          note: 'Each time make sure you use different grip positions. Try using boards or chains and keep it changing.',
        },
        {
          name: 'Incline bench press',
          // eslint-disable-next-line sonarjs/no-duplicate-string
          note: 'Each time make sure you use different grip positions.',
        },
        {
          name: 'DB press',
          note: 'Each time make sure you use different angles. Keep it in the 3-5 rep range.',
        },
        {
          name: 'Decline Press.',
          note: 'Each time make sure you use different grip positions.',
        },
      ],
    },
    specialityExercise: {
      description:
        // eslint-disable-next-line sonarjs/no-duplicate-string
        'Pick two or three specialty exercises to strengthen weak muscles. Rotate new exercises in every three weeks or so to avoid accommodation. Focus more on Intensity than Volume on this day. 3 sets, 10 reps.',
      exercises: [
        {
          name: 'DB press',
          note: 'Each time make sure you use different angles, including decline.',
        },
        {
          name: 'Williams Press',
          note: '3 sets of 15 reps with a moderate to heavy weight.',
        },
        {
          name: 'Barbell rows',
          note: 'Each time make sure you use different grip positions.',
        },
        {
          name: 'Skull crushers.',
          note: "Alternate DB's, tricep bar, EZ bar.",
        },
        {
          name: 'Close grip barbell bench press.',
          note: 'You can mix this up by using different angles (incline, decline, flat).',
        },
        {
          name: 'JM press',
          note: 'Watch a video to make sure you do this correctly.',
        },
        {
          name: 'Lat pull downs.',
          note: 'You can mix this up by using different bars and grip positions.',
        },
      ],
    },
    completionExercises: [
      'Triceps Extension - cables overhead – 100 reps if not chosen on this day for a special exercise',
      // eslint-disable-next-line sonarjs/no-duplicate-string
      'Dumbbell Side Bends – 3 sets of 10 reps each side with heavy weight',
      // eslint-disable-next-line sonarjs/no-duplicate-string
      'Side Planks – 3 sets of 30 seconds each side',
      // eslint-disable-next-line sonarjs/no-duplicate-string
      'Pull ups – 3 sets of 10 reps',
      'Standing Sit-up – 3 sets of 25 reps, or Hanging Knee Raise or Straight Leg Raise – 3 sets of 10-15 reps',
    ],
  },
  [HeavyExercises['Heavy lower body']]: {
    mainExercise: {
      description:
        'Work up to 1 rep max on any of these exercises with exception of Good Mornings, never less than 3- 5 reps',
      exercises: [
        // Good Morning (any variations for 3-5 rep max, NEVER 1 rep max for this exercise)
        {
          name: 'Squat',
          note: 'Try different leg positions, narrow, wide, sumo, etc. Use a box if needed.',
        },
        {
          name: 'Zercher Squat',
          note: 'Use a rack and watch a video on form. If in doubt try 3-5 rep range weight.',
        },
        {
          name: 'Alternatve Bar Squat',
          note: 'Bow Bar, Cambered Squat Bar etc.',
        },
        {
          name: 'Sumo Deadlift standing on a 2” or 4” rubber mat.',
          note: '',
        },
        {
          name: 'Good Morning',
          note: 'Any variations for 3-5 rep max, NEVER 1 rep max for this exercise',
        },
      ],
    },
    specialityExercise: {
      description:
        'Specialty Exercise to strength weak muscles *Note: Focus more on Intensity than Volume on this day. Pick two or three specialty exercises to strengthen weak muscles. Rotate new exercises in every three weeks or so to avoid accommodation. 3 sets, 10 reps.',
      exercises: [
        {
          name: 'Deadlift.',
          note: '70% of 1 rep max. Continuously for one minute.',
        },
        {
          name: 'Romainian Deadlift.',
          note: '70% of 1 rep max. Continuously for one minute.',
        },
        {
          name: 'Lunge.',
          note: 'Walking or stationary. 3 sets of 10 reps each leg. Can also mix angles etc.',
        },
        {
          name: 'Leg curls.',
          // eslint-disable-next-line sonarjs/no-duplicate-string
          note: 'Make each set progressive in weight. Encourage higher weights each workout.',
        },
        {
          name: 'Leg press.',
          note: 'Make each set progressive in weight. Encourage higher weights each workout.',
        },
        {
          name: 'Leg Extensions.',
          note: 'Make each set progressive in weight. Encourage higher weights each workout.',
        },
      ],
    },
    completionExercises: [
      'Dumbbell Side Bends – 3 sets of 10 reps each side with heavy weight',
      'Side Planks – 3 sets of 30 seconds each side',
      // eslint-disable-next-line sonarjs/no-duplicate-string
      'Reverse Hypers. 3-5 sets of 10-15 reps (If you dont have a machine use body weight on a flat bench).',
      'Pull ups – 3 sets of 10 reps',
      // eslint-disable-next-line sonarjs/no-duplicate-string
      'Standing Sit-up – 3 sets of 25 reps',
      // eslint-disable-next-line sonarjs/no-duplicate-string
      'Hanging Knee Raise or Straight Leg Raise – 3 sets of 10-15 reps',
    ],
  },
};

const dynamic: {
  [key in DynamicExercises]: {
    mainExercise: string;
    secondExercise?: string;
    specialityExercise: {
      description: string;
      exercises: {
        name: string;
        note: string;
      }[];
    };
    completionExercises: string[];
  };
} = {
  [DynamicExercises['Dynamic lower body']]: {
    mainExercise: `Choose any form of box squat and add:
       Week 1 – 50%
       Week 2 – 55%
       Week 3 – 60%
       of the athlete’s 1 Rep squat max on the given exercise in straight weight, then add 25% of accommodating resistance (bands or chains) on top of the straight weight for:
       10 sets of 2 reps
       Rest only 45 seconds between sets.`,
    secondExercise:
      '6-8 sets of 2 reps of Speed Deadlifts with 50% of the Deadlift Max in straight weight and 25% of accommodating resitance (bands or chains)',
    specialityExercise: {
      description:
        'Pick two or three specialty exercises to strengthen weak muscles. Rotate new exercises in every three weeks or so to avoid accommodation. Focus more on Intensity than Volume on this day. 3 sets, 10 reps.',
      exercises: [
        {
          name: 'Hex bar shruggs',
          note: '3 sets of 10 reps. Mix up weight and rest intervals.',
        },
        {
          name: 'Walking Lunges',
          note: '3 sets of 10 reps. Mix up weight and rest intervals.',
        },
        {
          name: 'Leg curls.',
          note: 'Make each set progressive in weight. Encourage higher weights each workout.',
        },
        {
          name: 'Leg Extensions.',
          note: 'Make each set progressive in weight. Encourage higher weights each workout.',
        },
        {
          name: 'Leg Press.',
          note: 'Make each set progressive in weight. Encourage higher weights each workout.',
        },
      ],
    },
    completionExercises: [
      'Dumbbell Side Bends – 3 sets of 10 reps each side with heavy weight',
      'Side Planks – 3 sets of 30 seconds each side',
      'Reverse Hypers. 3-5 sets of 10-15 reps (If you dont have a machine use body weight on a flat bench).',
      'Standing Sit-up – 3 sets of 25 reps',
      'Hanging Knee Raise or Straight Leg Raise – 3 sets of 10-15 reps',
      'Pull ups – 3 sets of 10 reps',
    ],
  },
  [DynamicExercises['Dynamic upper body']]: {
    mainExercise: `Choose any form of Bench Press movement and add: Week 1 – 50%
        Week 2 – 55%
        Week 3 – 60%
        Of the athlete’s 1 rep bench press on the given exercise in straight weight, then add 25% of accommodating resistance (bands or chains) on top of the straight weight for 9setsof3reps
        Rest only 45 seconds Between sets.
        Change grip on the bar every 3 Sets.
        Start with a narrow grip, then a normal grip and finally a wide grip for the final three sets.`,
    secondExercise: undefined,
    specialityExercise: {
      description:
        'Pick two or three specialty exercises to strengthen weak muscles. Rotate new exercises in every three weeks or so to avoid accommodation. Focus more on Intensity than Volume on this day. 3 sets, 10 reps.',
      exercises: [
        {
          name: 'DB Press',
          note: `Dumbbell Press – 5 sets of 20 reps with moderate dumbbells. Work on all angles; Incline, Decline and Flat`,
        },
        {
          name: 'Williams Press',
          note: '3 sets of 20 reps with a moderate weight.',
        },
        {
          name: 'Bent-over Rows',
          note: '3 sets of 20 reps with a moderate weight',
        },
        {
          name: 'JM Press',
          note: '3 sets of 20 reps with moderate weight',
        },
        {
          name: 'Triceps Extension cables overhead',
          note: 'light weight 300 reps.',
        },
        {
          name: 'Lat Pulldown Bar Face Pulls',
          note: '3 sets of 25 reps',
        },
        {
          name: 'Close grip Bench Press',
          note: '5 sets of 20 reps',
        },
        {
          name: 'Wide grip Bench Press',
          note: '5 sets of 20 reps',
        },
      ],
    },
    completionExercises: [
      'Dumbbell Side Bends – 3 sets of 10 reps each side with heavy weight',
      'Side Planks – 3 sets of 30 seconds each side',
      'Pull ups – 3 sets of 10 reps',
      'Reverse Hypers. 3-5 sets of 10-15 reps (If you dont have a machine use body weight on a flat bench).',
      'Standing Sit-up – 3 sets of 25 reps',
      'Hanging Knee Raise or Straight Leg Raise – 3 sets of 10-15 reps',
    ],
  },
};

export { heavy, dynamic };
