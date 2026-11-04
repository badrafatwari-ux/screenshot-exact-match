/** Structured comparisons of political systems and frequently confused concepts. */

export interface Comparison {
  id: string;
  title: string;
  blurb: string;
  headers: string[];
  rows: string[][];
}

export const COMPARISONS: Comparison[] = [
  {
    id: "democracy-republic",
    title: "Democracy vs. Republic",
    blurb: "These terms describe different questions: who rules (democracy) and what kind of state it is (republic). Most modern states are both.",
    headers: ["Aspect", "Democracy", "Republic"],
    rows: [
      ["Core meaning", "Rule by the people (demos + kratos)", "A state that is not ruled by a monarch (res publica — 'public matter')"],
      ["Focus", "How decisions get made", "Who the head of state is / constitutional form"],
      ["Range", "Direct (assembly votes) or representative", "Can be democratic (Indonesia, France) or authoritarian ('people's republics')"],
      ["Key mechanism", "Elections, referendums, accountability", "Elected leadership + constitutional structure"],
      ["Common confusion", "Assumed to equal unlimited majority rule", "Assumed to equal 'conservative' — it is a neutral structural term"],
    ],
  },
  {
    id: "oligarchy-plutocracy",
    title: "Oligarchy vs. Plutocracy",
    blurb: "Both are rule by the few; they differ in what qualifies the few.",
    headers: ["Aspect", "Oligarchy", "Plutocracy"],
    rows: [
      ["Core meaning", "Rule by a few (oligos + arkhein)", "Rule by the wealthy (ploutos + kratos)"],
      ["Basis of power", "Any select attribute: family, military, party, wealth", "Specifically money and economic control"],
      ["Examples", "Military juntas, party oligarchies, royal courts", "Systems where campaign finance or media ownership dominates policy"],
      ["Relation", "Parent category", "One type of oligarchy"],
      ["Modern signal", "Narrow circle decides behind closed doors", "Policy tracks donor and business interests over median voters"],
    ],
  },
  {
    id: "authoritarian-totalitarian",
    title: "Authoritarianism vs. Totalitarianism",
    blurb: "Totalitarianism is an extreme subset of authoritarianism that seeks control of everything, not just politics.",
    headers: ["Aspect", "Authoritarianism", "Totalitarianism"],
    rows: [
      ["Goal of the regime", "Keep power; society may continue privately", "Transform society and the person entirely"],
      ["Sphere of control", "Political: parties, elections, dissent", "Political, economic, cultural, religious, family, thought"],
      ["Ideology", "Optional; often thin or pragmatic", "Mandatory, total, explains everything"],
      ["Pluralism", "Some tolerated (business, church, tribes)", "None; all organized life is party-led"],
      ["Historic cases", "Military regimes, sultanistic rule", "Nazi Germany, Stalinist USSR, Khmer Rouge Cambodia"],
    ],
  },
  {
    id: "presidential-parliamentary",
    title: "Presidential vs. Parliamentary Systems",
    blurb: "Two dominant ways of organizing the executive–legislature relationship.",
    headers: ["Aspect", "Presidential", "Parliamentary"],
    rows: [
      ["Head of government", "President, separately elected, fixed term", "Prime minister, chosen by and answerable to parliament"],
      ["Executive survival", "Serves full term regardless of legislature", "Falls if it loses a confidence vote"],
      ["Legislation", "Veto power; divided government possible", "Cabinet usually controls the legislative agenda"],
      ["Accountability", "Between branches (checks and balances)", "Continuous: daily question time, no-confidence votes"],
      ["Examples", "Indonesia (post-2004), the United States, Brazil", "United Kingdom, Japan, India, Malaysia"],
    ],
  },
  {
    id: "socialism-communism",
    title: "Socialism vs. Communism",
    blurb: "Related but distinct: socialism is an economic-organizing idea with many democratic versions; communism names both Marx's predicted end-state and the 20th-century party systems that claimed it.",
    headers: ["Aspect", "Socialism", "Communism"],
    rows: [
      ["Core idea", "Collective or public ownership of key industries plus redistribution", "Classless, stateless society with common ownership (Marx's theory)"],
      ["Political route", "Elections, unions, reformism (social democracy)", "Historically: revolution led by a vanguard party"],
      ["Modern practice", "Nordic welfare states, mixed economies", "One-party systems: USSR, China (with markets), Cuba, Vietnam"],
      ["Markets", "Usually retained and regulated", "Theory abolishes them; practice varies widely"],
      ["Common confusion", "Equated with any government spending", "Equated with socialism though they diverge in means and ends"],
    ],
  },
  {
    id: "direct-representative",
    title: "Direct vs. Representative Democracy",
    blurb: "Who casts the deciding vote: everyone, or elected delegates?",
    headers: ["Aspect", "Direct democracy", "Representative democracy"],
    rows: [
      ["Decision-making", "Citizens vote on laws themselves", "Citizens elect officials who decide for them"],
      ["Scale", "Workable in small communities; modern use via referendums", "Scales to millions; everyday governance"],
      ["Examples", "Ancient Athens; Swiss referendums; local musyawarah forums", "Almost all modern nation-states"],
      ["Risks", "Majority swings, low deliberation, voter overload", "Elitism, distance from voters, capture by interests"],
      ["Hybrids", "Switzerland mixes both; Indonesia's village musyawarah blends consultation and representation", "Recall, referendums, and citizens' assemblies add direct elements"],
    ],
  },
  {
    id: "unitary-federal",
    title: "Unitary vs. Federal Systems",
    blurb: "Where sovereignty sits between the center and the regions.",
    headers: ["Aspect", "Unitary", "Federal"],
    rows: [
      ["Power source", "Central government delegates to regions", "Constitution divides power; regions hold their own"],
      ["Constitutional status", "Regions exist at the center's discretion", "Regions constitutionally protected (amendment usually needs both)"],
      ["Uniformity", "One law nationwide", "Local variation in law and services"],
      ["Examples", "Indonesia (nominally unitary with broad autonomy), Japan, France", "United States, Germany, India, Malaysia"],
      ["Trade-off", "Consistency and cohesion vs. distance from local needs", "Local responsiveness vs. complexity and duplication"],
    ],
  },
  {
    id: "monarchy-types",
    title: "Types of Monarchy",
    blurb: "Monarchies range from ceremonial to absolute; what varies is how much real power the crown keeps.",
    headers: ["Aspect", "Absolute monarchy", "Constitutional monarchy"],
    rows: [
      ["Royal power", "Sovereign rules directly, limited mainly by custom", "Crown reigns but does not rule; elected government governs"],
      ["Legal basis", "Divine right or dynastic law", "Constitution binds the monarch"],
      ["Examples", "Saudi Arabia, Brunei (historically: most kingdoms)", "United Kingdom, Japan, Netherlands, Malaysia's rotating kingship"],
      ["Succession", "Hereditary, decisive", "Hereditary, symbolic"],
      ["Watch-outs", "No institutional checks on the ruler", "Can coexist with real authoritarian power elsewhere in the system"],
    ],
  },
  {
    id: "hard-soft-power",
    title: "Hard Power vs. Soft Power",
    blurb: "Joseph Nye's distinction between coercing and attracting.",
    headers: ["Aspect", "Hard power", "Soft power"],
    rows: [
      ["Mechanism", "Force and payment: military, sanctions, aid", "Attraction: culture, values, institutions, credibility"],
      ["Currency", "Carrots and sticks", "Legitimacy and appeal"],
      ["Examples", "Invasions, blockades, conditional loans", "Cultural exports, exchange programs, diplomatic reputation"],
      ["Limits", "Costly, breeds resentment, can backfire", "Slow, indirect, hard to control"],
      ["Combined use", "'Smart power' mixes both based on context"],
    ],
  },
  {
    id: "corruption-types",
    title: "Forms of Corruption",
    blurb: "Corruption is not one thing; distinguishing forms helps identify remedies.",
    headers: ["Form", "What it is", "Typical remedy"],
    rows: [
      ["Petty bribery", "Small payments to access routine services", "Simplification, digitization, service monitoring"],
      ["Grand corruption", "High officials diverting contracts, licenses, or budgets", "Independent audit institutions, prosecutorial independence"],
      ["Cronyism", "Favoring loyal associates in appointments and deals", "Transparent procurement, competitive tendering"],
      ["Nepotism", "Family advantage in office or contracts", "Conflict-of-interest rules, asset disclosure"],
      ["State capture", "Private interests rewrite the rules themselves", "Campaign-finance transparency, judicial independence"],
      ["Electoral manipulation", "Buying votes, gerrymandering, media capture", "Election monitoring, fair districting, plural media"],
    ],
  },
];

export function findComparison(id: string): Comparison | undefined {
  return COMPARISONS.find((c) => c.id === id);
}
