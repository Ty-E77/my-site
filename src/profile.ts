/**
 * ═══════════════════════════════════════════════════════════════════════
 *  YOUR PROFILE — this is the main file you edit. (The other one is
 *  src/theme.ts, where you pick your look.)
 * ═══════════════════════════════════════════════════════════════════════
 *
 * Everything here flows automatically to:
 *   - /api/whoami and /api/profile  (what the course platform reads)
 *   - your home page and /about     (what humans read)
 *
 * Because both pages and APIs read from THIS one object, they can never
 * disagree, and "pages match the API" is one of the graded checks.
 *
 * Fill in every field, replace the placeholder photo, and you're done.
 */

export const profile = {
  /** Your name as you want it to appear everywhere. */
  displayName: "TyShawn Elzey",

  /** Your UD email — must match the one you signed into the course with. */
  email: "tyshawn@udel.edu",

  /** Where you're from. Shows on your roster card and /about. */
  hometown: "Magnolia, Delaware",

  /**
   * 2 to 4 fun facts (the grader checks the count!). Real ones: they're
   * how classmates find something to say hello about.
   */
  funFacts: [
    "I love to game and my favorite game right now is Valorant!",
    "I love chick-fil-a!!!",
    "I love to run!!",
    "My favoirte TV show of all time is Game of Thrones!!"
  ],

  /** One decision you're proud of, in a sentence. */
  decisionImProudOf:
    "I am proud that I chose to do the 4 + 1 program at the University of Delaware and that I will be graduating in May 2027.",

  /**
   * Your photo. Replace public/photo.svg with a real photo of you
   * (e.g. put photo.jpg in the public/ folder and change this to "/photo.jpg").
   * It must be a real image file: the grader fetches it and checks.
   */
  photoPath: "/photo.jpg",

  /**
   * Who can see your roster card:
   *   "class"          — your classmates and the professor (recommended)
   *   "professor-only" — just the professor
   */
  rosterVisibility: "class" as "class" | "professor-only",

  /** A one-line tagline for your home page. Make it yours. */
  tagline: "Turning complex data into clear business moves.",

  /**
   * A short bio for your home page: two or three sentences, written like
   * a person, not a resume. What are you studying? What do you care about?
   */
  bio: "I am a Business Analytics graduate student at the University of Delaware with a strong passion for data and problem-solving. I aspire to become a data analyst, using data-driven insights to help businesses make informed decisions. I enjoy learning new things, developing new skills, and continuously challenging myself to grow both personally and professionally.",

  /**
   * Your GitHub repo URL. The course platform reads this from /api/health to
   * verify you have ≥ 5 commits spread over days (not one bulk dump).
   * Example: "https://github.com/your-username/your-repo"
   */
  repoUrl: "https://github.com/Ty-E77/my-site",
};
