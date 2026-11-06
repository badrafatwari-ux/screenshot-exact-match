import type { Lesson, Module, QuizQuestion } from "@/data/types";

type LessonSource = {
  title: string;
  level: Lesson["level"];
  minutes: number;
  objectives: [string, string, string];
  intro: string;
  sections: [{ heading: string; body: [string, string] }, { heading: string; body: [string, string] }, { heading: string; body: [string, string] }];
  terms: [[string, string], [string, string], [string, string]];
  examples: [[string, string], [string, string]];
  takeaways: [string, string, string];
  questions: [
    { question: string; answer: string; wrong: [string, string, string]; explanation: string },
    { question: string; answer: string; wrong: [string, string, string]; explanation: string },
  ];
  trueFalse: { question: string; answer: boolean; explanation: string };
  matching: [{ left: string; right: string }, { left: string; right: string }, { left: string; right: string }];
};

type ModuleSource = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  lessons: [LessonSource, LessonSource, LessonSource];
};

function slug(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function makeLesson(moduleNumber: number, source: LessonSource, index: number): Lesson {
  const quiz: QuizQuestion[] = source.questions.map((item, questionIndex) => ({
    id: `m${moduleNumber}l${index + 1}q${questionIndex + 1}`,
    type: "mc",
    question: item.question,
    options: [item.answer, ...item.wrong].map((label, optionIndex) => ({
      label,
      feedback: optionIndex === 0 ? `Correct — ${item.explanation}` : `Not quite. ${item.explanation}`,
    })),
    correctIndex: 0,
    explanation: item.explanation,
  }));
  quiz.push({
    id: `m${moduleNumber}l${index + 1}q3`,
    type: "tf",
    question: source.trueFalse.question,
    options: [
      { label: "True", feedback: source.trueFalse.answer ? source.trueFalse.explanation : `Not quite. ${source.trueFalse.explanation}` },
      { label: "False", feedback: source.trueFalse.answer ? `Not quite. ${source.trueFalse.explanation}` : source.trueFalse.explanation },
    ],
    correctIndex: source.trueFalse.answer ? 0 : 1,
    explanation: source.trueFalse.explanation,
  });
  quiz.push({
    id: `m${moduleNumber}l${index + 1}q4`,
    type: "matching",
    question: "Match each concept to its meaning.",
    pairs: source.matching,
    explanation: "These distinctions are useful lenses for comparing institutions and political arguments.",
  });

  return {
    id: `${moduleNumber}-${index + 1}-${slug(source.title)}`,
    title: source.title,
    level: source.level,
    minutes: source.minutes,
    objectives: source.objectives,
    intro: source.intro,
    sections: source.sections.map((section, sectionIndex) => ({
      heading: section.heading,
      body: section.body,
      ...(sectionIndex === 1
        ? { callout: { title: "A question to carry forward", body: source.takeaways[2] } }
        : {}),
    })),
    keyTerms: source.terms.map(([term, definition]) => ({ term, definition })),
    examples: source.examples.map(([title, body]) => ({ title, body })),
    takeaways: source.takeaways,
    quiz,
  };
}

const SOURCES: ModuleSource[] = [
  {
    id: "political-systems",
    title: "Political Systems",
    tagline: "How authority is organized and constrained",
    description: "Compare democratic, monarchical, oligarchic, authoritarian, totalitarian, theocratic, and hybrid systems by asking who rules, how leaders are selected, and what limits their power.",
    lessons: [
      {
        title: "Democracy, Republics, and Monarchy",
        level: "beginner",
        minutes: 13,
        objectives: ["Distinguish direct from representative democracy", "Explain what a republic adds to popular government", "Compare elective and hereditary monarchy"],
        intro: "Political labels are useful only when we know what they describe. Democracy concerns popular influence over binding decisions; a republic concerns public authority exercised through laws and institutions rather than treated as a ruler's private property.",
        sections: [
          { heading: "Democracy has more than one form", body: ["In a direct democracy, citizens decide policy themselves, as in a referendum or a small assembly. In a representative democracy, voters select officials who deliberate and decide for a larger population. Most present-day democracies are representative, but may use direct votes for particular questions.", "Elections are important but not sufficient. Meaningful competition, broad participation, civil liberties, reliable information, and the possibility of replacing incumbents help make popular choice consequential. Democratic institutions differ in how they balance majority rule with protections for individuals and minorities."] },
          { heading: "A republic is not a synonym", body: ["A republic places public office and law above the personal ownership of a ruler. It can be democratic or undemocratic: some republics hold competitive elections, while others restrict them. A constitutional monarchy can also be democratic when elected institutions govern and a monarch's role is limited by law.", "Monarchy describes succession through a royal line or a monarchic office. Absolute monarchs exercise extensive governing authority; constitutional monarchs may be ceremonial. The title alone tells us less than the rules that determine who makes policy and who can hold them accountable."] },
          { heading: "Look at rules and practice", body: ["To classify a system, examine the actual routes into office, the reach of opposition, and whether legal limits bind rulers in practice. A written constitution can promise elections while barriers make competition ineffective; conversely, institutions can evolve through custom as well as text.", "Comparative political scientists treat regime categories as tools, not moral report cards. Each label raises follow-up questions about inclusion, accountability, stability, rights, and the distribution of influence."] },
        ],
        terms: [["Direct democracy", "Citizens vote on policy themselves rather than delegating every decision to representatives."], ["Republic", "A political order in which public authority is governed by law and institutions, not owned as a ruler's private property."], ["Constitutional monarchy", "A monarchy whose powers are limited by constitutional rules and commonly exercised through elected government."]],
        examples: [["A citizens' referendum", "A country may let voters decide a constitutional question directly while representatives continue to make ordinary laws."], ["A parliamentary monarchy", "An elected parliament and cabinet may govern while a monarch performs mainly ceremonial duties under constitutional convention."]],
        takeaways: ["Democracy describes popular influence; a republic describes the public and legal character of authority.", "Elections matter most when competition, rights, participation, and accountability make them meaningful.", "Judge a system by who can govern and what constraints work in practice, not its official name."],
        questions: [
          { question: "What distinguishes direct democracy from representative democracy?", answer: "Citizens decide policies themselves rather than choosing representatives to decide", wrong: ["A monarch inherits the executive office", "Courts rather than citizens make all public decisions", "Political parties are prohibited"], explanation: "The key distinction is whether citizens vote directly on decisions or delegate most decisions to elected officials." },
          { question: "Which statement about republics is accurate?", answer: "A republic can be democratic or undemocratic", wrong: ["Every republic must have a monarch", "Republics never use elections", "Republic means direct democracy only"], explanation: "Republic describes public, law-governed authority; it does not by itself guarantee competitive democracy." },
        ],
        trueFalse: { question: "Every country called a republic is necessarily a democracy.", answer: false, explanation: "The formal label republic does not establish that elections are competitive or that political rights are protected." },
        matching: [{ left: "Direct democracy", right: "Citizens vote on policy directly" }, { left: "Republic", right: "Public authority organized under law" }, { left: "Constitutional monarchy", right: "Royal office limited by constitutional rules" }],
      },
      {
        title: "Oligarchy, Dictatorship, and Authoritarian Rule",
        level: "intermediate",
        minutes: 15,
        objectives: ["Define oligarchy and identify concentrated rule", "Distinguish authoritarianism from totalitarianism", "Recognize hybrid systems that combine elections with restrictions"],
        intro: "A system can hold elections and still concentrate power. Understanding nondemocratic rule requires looking beyond ballots to the real organization of competition, coercion, and access to information.",
        sections: [
          { heading: "Small-group rule", body: ["Oligarchy means political power is concentrated in a relatively small group. The group may be military officers, a party leadership, wealthy families, business interests, or an alliance among them. Oligarchy describes who effectively rules; it does not tell us by itself how that group gained power or what policies it prefers.", "A dictatorship is commonly used for rule in which one leader or a narrow leadership exercises power without effective constitutional accountability. In practice, personal dictatorships often depend on party networks, security institutions, and elite bargains rather than one person's will alone."] },
          { heading: "Authoritarianism and totalitarianism", body: ["Authoritarian regimes restrict political competition and participation, but may leave parts of social and economic life outside direct state control. Their leaders can rely on coercion, patronage, or claims of order and performance; the mix varies across cases and over time.", "Totalitarianism is a more demanding concept, generally associated with an effort to reshape society through an official ideology, mass mobilization, and extensive control over organizations and public life. Scholars debate its scope, so it is best used for systems that approach this broad ambition rather than as a synonym for any harsh government."] },
          { heading: "Hybrid regimes and evidence", body: ["Hybrid regimes combine electoral institutions with serious constraints on fair competition: opposition may face selective legal pressure, media access may be unequal, or state resources may be used to entrench incumbents. The presence of an election is evidence about procedure, not proof that voters can freely change power.", "Assess concrete indicators over time: can opposition organize, publish, campaign, win, and take office? Are courts and election administrators independent enough to enforce rules? Comparing multiple indicators avoids treating one event or label as the whole story."] },
        ],
        terms: [["Oligarchy", "Rule or decisive influence concentrated in a small group."], ["Authoritarianism", "A form of rule with limited political pluralism and weak public accountability."], ["Hybrid regime", "A political system combining elections with substantial restrictions that undermine fair competition."]],
        examples: [["A dominant-party election", "Opposition candidates may appear on the ballot while unequal media access and state pressure make competition substantially uneven."], ["Elite bargaining", "A coalition of security leaders and business owners can influence policy even when one figure occupies the top office."]],
        takeaways: ["Oligarchy identifies concentrated rule; authoritarianism describes restricted political pluralism.", "Totalitarianism implies an unusually extensive effort to organize and control social life.", "Ask whether opposition can compete and transfer power, not merely whether elections occur."],
        questions: [
          { question: "What is the central feature of oligarchy?", answer: "Political power is concentrated in a relatively small group", wrong: ["Every adult votes directly on all laws", "A monarch has only ceremonial duties", "Courts appoint every legislator"], explanation: "Oligarchy describes concentration of effective power among a small group, regardless of its composition." },
          { question: "Why can a system with elections still be classified as hybrid?", answer: "Restrictions may prevent elections from providing fair and meaningful competition", wrong: ["All hybrid systems have no constitution", "Elections always make every system fully democratic", "A hybrid system must have two monarchs"], explanation: "Elections can coexist with barriers to organizing, campaigning, informing voters, or taking office." },
        ],
        trueFalse: { question: "Authoritarianism and totalitarianism mean exactly the same thing.", answer: false, explanation: "Totalitarianism is generally used for a more extensive project of ideological and social control than authoritarianism." },
        matching: [{ left: "Oligarchy", right: "Power concentrated in a small group" }, { left: "Authoritarianism", right: "Restricted political pluralism" }, { left: "Hybrid regime", right: "Elections with substantial competition barriers" }],
      },
      {
        title: "Theocracy and Hybrid Political Orders",
        level: "advanced",
        minutes: 14,
        objectives: ["Explain theocratic authority without reducing it to one model", "Compare religious and secular sources of political legitimacy", "Use multiple indicators to classify mixed systems"],
        intro: "Religious traditions and political authority intersect in many different ways. Theocracy is a useful term for systems where religious authority has a formal governing role, but it should not obscure differences in institutions, interpretation, and everyday practice.",
        sections: [
          { heading: "Religious authority in government", body: ["A theocracy is usually understood as rule justified through divine authority or exercised by religious officials. Cases differ: religious law may shape constitutional interpretation, clerics may hold formal vetoes, or religious institutions may directly govern. The term does not imply that all citizens share one belief or that religious rules are applied uniformly.", "Many states combine religious references with elected institutions, civil law, and courts. Others are officially secular yet have strong religious influence in political debate. A careful comparison separates constitutional status, who interprets religious rules, which institutions enforce them, and how much room citizens have to disagree."] },
          { heading: "Legitimacy and pluralism", body: ["Political legitimacy is the belief that rule is rightful, not simply the capacity to compel obedience. Claims of legitimacy can draw on elections, tradition, religious commitments, revolutionary histories, legal procedures, or policy performance. Several sources may operate at once and may reinforce or challenge one another.", "Pluralism asks whether multiple organizations and worldviews can participate. Protecting freedom of religion includes both the freedom to practice and the freedom not to be governed by a single imposed belief. Institutional arrangements that manage disagreement vary, and should be evaluated by their actual protections and accountability."] },
          { heading: "Classify with care", body: ["Rather than force a binary label, describe the observable arrangement: what role do religious authorities have, who can challenge their decisions, and how are offices filled? This approach also helps distinguish a religiously influenced democracy from clerical rule or an officially secular but coercive regime.", "Hybrid classifications are snapshots, not permanent identities. Constitutional amendments, social movements, court decisions, or leadership changes can alter how authority works. Comparing cases over time is more informative than treating one label as an explanation."] },
        ],
        terms: [["Theocracy", "A political order in which religious authority or divine law has a formal governing role."], ["Legitimacy", "The belief that a political authority has a rightful claim to rule."], ["Pluralism", "The presence and political participation of multiple groups, interests, or viewpoints."]],
        examples: [["Constitutional religious courts", "A constitution may grant religious courts jurisdiction over specified matters while other courts apply civil law."], ["Secular law, religious debate", "A formally secular legislature may still debate laws in response to religious organizations and citizens' beliefs."]],
        takeaways: ["Theocracy describes a relationship between religious and governing authority, not one uniform institutional model.", "Legitimacy can rest on several sources at once, including law, tradition, elections, or faith.", "Describe institutional powers and protections before assigning a single regime label."],
        questions: [
          { question: "What is the most careful way to assess whether a system is theocratic?", answer: "Examine the formal governing role of religious authority and how decisions are enforced", wrong: ["Assume any religious citizen makes the state a theocracy", "Check only whether the country holds elections", "Use the official name of the country as sufficient evidence"], explanation: "The label should be grounded in the actual constitutional and institutional role of religious authority." },
          { question: "What does political legitimacy refer to?", answer: "A belief that an authority has a rightful claim to govern", wrong: ["The number of government departments", "The use of force regardless of public belief", "The absence of political disagreement"], explanation: "Legitimacy concerns perceived rightfulness; it is distinct from the capacity to compel obedience." },
        ],
        trueFalse: { question: "A formally secular state can still have influential religious participation in political debate.", answer: true, explanation: "Secular constitutional rules do not prevent religious groups or beliefs from influencing public debate." },
        matching: [{ left: "Theocracy", right: "Religious authority has formal governing power" }, { left: "Legitimacy", right: "Perceived rightfulness of rule" }, { left: "Pluralism", right: "Multiple groups and views can participate" }],
      },
    ],
  },
  {
    id: "power-distribution",
    title: "Power and Its Distribution",
    tagline: "Who can decide, influence, and check authority",
    description: "Study political authority, separation of powers, the executive, legislature and judiciary, federalism, decentralization, checks and balances, and formal and informal influence.",
    lessons: [
      {
        title: "Authority, Legitimacy, and Power",
        level: "beginner", minutes: 12,
        objectives: ["Distinguish power from authority", "Identify common sources of legitimacy", "Recognize agenda-setting and informational power"],
        intro: "Power is not limited to commands or force. It also includes setting agendas, shaping what people believe possible, and controlling access to decisions. Political analysis asks how these capacities are acquired, used, and contested.",
        sections: [
          { heading: "Several faces of power", body: ["A simple definition describes power as the ability of one actor to influence another's actions. Power can be visible when a law is passed, less visible when some issues never reach the agenda, or subtle when norms shape what people regard as realistic. These forms can overlap.", "Resources matter but do not automatically produce influence. Money, expertise, organization, public trust, legal authority, and control of information can each help actors affect outcomes. Their impact depends on rules and on the ability of others to resist, negotiate, or build alternatives."] },
          { heading: "Authority and legitimacy", body: ["Authority is power recognized as rightful within a community or institution. A judge's order, for example, may be obeyed because the office is accepted as legitimate, not because the judge can personally compel everyone. Legitimacy reduces the need for constant coercion, though acceptance can be uneven.", "Sociologist Max Weber distinguished traditional, charismatic, and legal-rational bases of authority. These are analytical types, not exclusive boxes: a modern leader may invoke constitutional procedure, national tradition, and personal popularity at once. Each source can face challenges when promises, rules, or performance fail."] },
          { heading: "Map relationships, not just offices", body: ["To map power, ask who has formal decision rights, who controls the agenda, who supplies information, who can veto, and who bears the consequences. A policy may be shaped by officials, professional associations, businesses, unions, community groups, and citizens before it reaches a vote.", "Power is relational and issue-specific. A group influential in environmental regulation may have little influence over monetary policy. Naming the issue, time period, and decision stage makes a claim about power testable rather than vague."] },
        ],
        terms: [["Power", "The capacity to influence decisions, actions, or the range of choices available."], ["Authority", "Power regarded as rightful within a political or social institution."], ["Agenda-setting", "Influence over which issues are considered for public or official decision."]],
        examples: [["A licensing board", "A board's legal authority may be accepted because its procedures are established, even when applicants dislike a particular decision."], ["An issue kept off the agenda", "A committee chair can exercise influence by declining to schedule a hearing, before any public vote takes place."]],
        takeaways: ["Power includes direct decisions, agenda control, and the shaping of available choices.", "Authority is power accepted as rightful; legitimacy can have several sources.", "Specify the issue and decision stage when describing who has influence."],
        questions: [
          { question: "Which example best illustrates agenda-setting power?", answer: "A committee leader decides which proposals receive a hearing", wrong: ["A citizen reads a published budget", "A court clerk files a public record", "A voter casts a ballot in an election"], explanation: "Agenda-setting determines which issues receive consideration before a final decision is made." },
          { question: "What distinguishes authority from power in general?", answer: "Authority is power viewed as rightful", wrong: ["Authority never affects behavior", "Power is always exercised by force", "Authority exists only in monarchies"], explanation: "Authority is power whose claim to rule is recognized as legitimate." },
        ],
        trueFalse: { question: "Political influence can be exercised before a formal vote occurs.", answer: true, explanation: "Actors may shape agendas, information, and alternatives before a proposal reaches a vote." },
        matching: [{ left: "Authority", right: "Power accepted as rightful" }, { left: "Agenda-setting", right: "Influence over which issues get considered" }, { left: "Legal-rational authority", right: "Authority grounded in rules and offices" }],
      },
      {
        title: "Separation of Powers and Checks",
        level: "intermediate", minutes: 14,
        objectives: ["Describe legislative, executive, and judicial roles", "Explain how checks and balances operate", "Distinguish formal checks from informal accountability"],
        intro: "Concentrating public authority in one institution can make decisions quick, but also makes abuse harder to prevent. Separation of powers divides responsibilities and creates opportunities to review, challenge, or constrain decisions.",
        sections: [
          { heading: "Different functions", body: ["Legislatures debate and enact laws, approve budgets, and often oversee the executive. Executives administer law, coordinate government, and may propose policy. Courts resolve legal disputes and interpret law within the authority their constitutional system grants them.", "These functions overlap: executives may veto legislation, legislatures may confirm appointments, and courts may review whether public acts comply with a constitution. The precise design differs between countries, and the same formal power can be strong or weak depending on appointment rules and political practice."] },
          { heading: "Checks and balances", body: ["A check gives one institution a way to limit another. Examples include legislative oversight, judicial review, executive vetoes, confirmation requirements, and impeachment procedures. The goal is not to eliminate disagreement but to make unilateral action more difficult and expose decisions to scrutiny.", "Checks can also create delay, bargaining costs, or deadlock. Whether those are safeguards or dysfunction depends on context: a slow process may protect rights, but failure to pass a budget can interrupt essential services. Institutional design involves trade-offs, not a universally perfect arrangement."] },
          { heading: "Accountability beyond branches", body: ["Elections, independent media, auditors, civil society, and public access to records also hold officials accountable. They are not substitutes for constitutional checks, but can reveal misuse and increase the cost of ignoring rules.", "A written rule is only a starting point. Ask who can invoke a check, what evidence is public, whether the decision-maker can be removed, and whether institutions have the resources and independence to act. De facto practice can diverge from a constitution's text."] },
        ],
        terms: [["Separation of powers", "The allocation of governing functions among institutions so no single body holds all authority."], ["Checks and balances", "Institutional powers that allow branches to constrain or review one another."], ["Judicial review", "The authority of courts to assess whether laws or government actions comply with higher law."]],
        examples: [["Budget oversight", "A legislature may question ministers and review spending records to ensure an executive follows appropriations."], ["Constitutional review", "A court can be asked to decide whether a law exceeds constitutional limits, subject to that country's rules."]],
        takeaways: ["Legislatures, executives, and courts have distinct but often overlapping roles.", "Checks can restrain power while also creating bargaining costs or deadlock.", "Effective accountability depends on institutions' practical independence and capacity."],
        questions: [
          { question: "What is a central purpose of checks and balances?", answer: "Allow institutions to constrain or review one another", wrong: ["Remove every disagreement from policymaking", "Give courts responsibility for all administration", "Guarantee that every policy passes quickly"], explanation: "Checks provide ways to scrutinize and limit unilateral exercises of authority." },
          { question: "Which activity is most typically a legislative function?", answer: "Debating and enacting laws while overseeing public spending", wrong: ["Adjudicating a specific criminal trial", "Administering every ministry directly", "Interpreting the constitution in every dispute"], explanation: "Legislatures make law and commonly approve budgets and oversee the executive." },
        ],
        trueFalse: { question: "Checks and balances can make decisions slower as well as constrain power.", answer: true, explanation: "Additional review and bargaining protect against unilateral action but can also add delay." },
        matching: [{ left: "Legislature", right: "Enacts laws and oversees spending" }, { left: "Executive", right: "Administers law and coordinates government" }, { left: "Judiciary", right: "Resolves legal disputes and interprets law" }],
      },
      {
        title: "Federalism, Decentralization, and Informal Power",
        level: "advanced", minutes: 16,
        objectives: ["Distinguish federalism from administrative decentralization", "Weigh local autonomy against national coordination", "Identify informal political influence"],
        intro: "Power can be distributed not only among branches but across territories and between formal institutions and informal networks. This lesson connects constitutional structure to the less visible relationships that shape policy.",
        sections: [
          { heading: "Sharing authority across territory", body: ["Federalism constitutionally divides governing authority between a national government and territorial units such as states or provinces. Each level has protected responsibilities, though the exact division and areas of overlap vary. Courts or negotiated procedures may settle disputes between levels.", "Decentralization is broader: a central government can delegate responsibilities or budgets to local offices without constitutionally entrenching their autonomy. Delegation may improve local responsiveness, but if the center can withdraw it at will, local authority is less secure than in a federation."] },
          { heading: "Trade-offs in scale", body: ["Local decision-making can reflect distinct needs, make officials easier to reach, and allow policy experimentation. It can also create unequal services between regions, local elite capture, or coordination problems when issues cross boundaries. National action can pool resources and set common standards but may overlook local knowledge.", "Indonesia's constitutional recognition of regions and its post-1998 decentralization illustrate that territorial governance changes over time. Regional autonomy can alter service delivery and local political competition; its effects depend on fiscal capacity, oversight, and the responsibilities assigned to each level."] },
          { heading: "Formal and informal networks", body: ["Formal power is attached to defined offices and rules. Informal power operates through personal relationships, party discipline, professional expertise, wealth, social norms, or control of access. Informal networks may coordinate action efficiently, but can also bypass transparency or exclude people without connections.", "A complete map therefore follows both the organizational chart and the actual path of a decision. Ask who drafts proposals, supplies data, negotiates privately, funds campaigns, and can delay implementation. These questions make hidden influence more observable without assuming that every relationship is improper."] },
        ],
        terms: [["Federalism", "Constitutional division of governing authority between national and territorial governments."], ["Decentralization", "Transfer of administrative, fiscal, or political responsibilities away from a central government."], ["Informal power", "Influence exercised through relationships, norms, resources, or networks outside official rules."]],
        examples: [["Regional school policy", "A national curriculum standard may coexist with regional authority over staffing and local implementation."], ["A policy network", "Officials may rely on professional associations for technical advice; transparent access helps distinguish expertise from privileged influence."]],
        takeaways: ["Federalism constitutionally protects more than one level of government; decentralization can be delegated.", "Local responsiveness and national equality or coordination can pull in different directions.", "Formal charts miss influence exercised through networks, expertise, money, or access."],
        questions: [
          { question: "What best distinguishes federalism from ordinary administrative decentralization?", answer: "Federalism constitutionally divides authority across levels of government", wrong: ["Federalism always abolishes local governments", "Decentralization can only occur in monarchies", "Federalism means every policy is decided by referendum"], explanation: "Federal systems protect a territorial division of authority in constitutional arrangements." },
          { question: "What is a possible trade-off of decentralizing public services?", answer: "Local responsiveness may improve while regional inequalities grow", wrong: ["All local knowledge disappears", "National standards become impossible in every case", "No official can be held accountable"], explanation: "Local tailoring may come with uneven fiscal capacity and service quality across regions." },
        ],
        trueFalse: { question: "Informal influence can matter even when formal responsibilities are clearly written down.", answer: true, explanation: "Access, networks, resources, and expertise can shape decisions alongside legal authority." },
        matching: [{ left: "Federalism", right: "Constitutional territorial division of authority" }, { left: "Decentralization", right: "Transfer of responsibilities from the center" }, { left: "Informal power", right: "Influence through networks outside official rules" }],
      },
    ],
  },
  {
    id: "elites-oligarchy",
    title: "Political Elites and Oligarchy",
    tagline: "How concentrated wealth and access shape decisions",
    description: "Explore oligarchy, plutocracy, political dynasties, elite theory, lobbying, nepotism, cronyism, state capture, and the political consequences of wealth concentration.",
    lessons: [
      {
        title: "Elites, Oligarchy, and Plutocracy",
        level: "beginner", minutes: 13,
        objectives: ["Define political elite and oligarchy", "Distinguish oligarchy from plutocracy", "Explain why wealth does not automatically equal political control"],
        intro: "Every large society has people with more access, resources, or expertise than others. The analytical question is when unequal influence becomes concentrated rule, and what institutions can make that influence accountable.",
        sections: [
          { heading: "What is an elite?", body: ["Political elites are people who occupy positions of unusual influence in government, parties, business, media, the military, or organized civil society. The term describes a position in a network of decision-making; it does not prove that an individual is competent, corrupt, or unified with other elites.", "Elite theory studies how a relatively small set of actors can shape decisions in complex organizations. Elections may replace officeholders while influence persists through expertise, party organization, wealth, or administrative continuity. Researchers test these claims by tracing access and decisions rather than assuming a hidden group controls everything."] },
          { heading: "Oligarchy versus plutocracy", body: ["Oligarchy is rule or decisive political influence concentrated among a few. Plutocracy is a more specific idea: political power is concentrated because of wealth. A wealthy donor may have access without controlling outcomes; evidence is needed to establish the connection between resources and decisions.", "The concepts can overlap but are not identical. A military council may be oligarchic without being plutocratic. A wealthy business group can wield plutocratic influence through campaign funding, media ownership, or direct office-holding, but the strength of that influence varies with laws and countervailing organizations."] },
          { heading: "Measure influence carefully", body: ["Useful evidence includes who meets decision-makers, whose proposals enter legislation, which groups receive public contracts, and whether policy changes after contributions or lobbying. A correlation between wealth and a favorable policy does not by itself prove causation; shared preferences, public opinion, or technical arguments may also matter.", "Look for mechanisms and alternatives: did money purchase access, provide expertise, mobilize voters, or finance a campaign? Did an independent institution review the choice? Careful analysis distinguishes unequal influence from a specific claim of capture or bribery."] },
        ],
        terms: [["Political elite", "Actors occupying positions that provide unusually strong access to political decisions."], ["Oligarchy", "Rule or decisive political influence concentrated among a small group."], ["Plutocracy", "A system or pattern in which wealth is a principal source of political power."]],
        examples: [["A military council", "A small group of senior officers can exercise oligarchic rule even if its members are not wealthy business owners."], ["Campaign access", "Large donors may gain meetings with officials, but tracing influence requires evidence about proposals and resulting decisions."]],
        takeaways: ["Elite describes unusual access or influence; it does not itself imply misconduct.", "Plutocracy links political power specifically to wealth; oligarchy is broader.", "Use evidence and causal mechanisms before concluding that money controlled a policy."],
        questions: [
          { question: "How does plutocracy differ from oligarchy?", answer: "Plutocracy identifies wealth as a principal basis of political power", wrong: ["Plutocracy means government by judges", "Oligarchy always requires elections", "Oligarchy describes only hereditary monarchs"], explanation: "Oligarchy refers broadly to concentrated rule; plutocracy points specifically to wealth-based power." },
          { question: "What evidence best supports a claim that a group influenced a policy?", answer: "A traceable mechanism connecting access or resources to the decision", wrong: ["A public rumor that the group is powerful", "The group's wealth alone", "The fact that the policy benefits someone"], explanation: "Causal claims require evidence about how influence operated and alternative explanations." },
        ],
        trueFalse: { question: "Every oligarchy is necessarily a plutocracy.", answer: false, explanation: "A small ruling group may be military or party-based rather than wealthy; plutocracy is the wealth-centered form." },
        matching: [{ left: "Elite", right: "Actor with unusual access or influence" }, { left: "Oligarchy", right: "Power concentrated among a few" }, { left: "Plutocracy", right: "Power based principally on wealth" }],
      },
      {
        title: "Political Dynasties, Nepotism, and Cronyism",
        level: "intermediate", minutes: 14,
        objectives: ["Distinguish family political continuity from nepotism", "Define cronyism and patronage", "Evaluate transparency and merit safeguards"],
        intro: "Political families and personal networks can create continuity and accumulated experience, but also raise questions about fair access and public accountability. Similar outcomes can arise from different processes, so distinctions matter.",
        sections: [
          { heading: "Dynasties and democratic choice", body: ["A political dynasty exists when several members of one family hold public office across time or across offices. A family connection is not, by itself, proof of illegal conduct: candidates may win open elections and voters may value their experience or name recognition.", "The concern is structural: inherited visibility, financing, networks, and party support can make entry harder for other candidates. Rules that limit conflicts of interest, promote transparent nominations, and support fair competition address the process without presuming that every relative is unqualified."] },
          { heading: "Nepotism and cronyism", body: ["Nepotism means favoring relatives in appointments or access, especially where public duties should be assigned fairly. Cronyism means favoring friends or close associates. Both can undermine competence and equal treatment when personal loyalty replaces transparent, relevant criteria.", "Patronage is the distribution of jobs or benefits by political actors in exchange for support. Patronage can create networks of loyalty, but may also politicize public service and divert resources. Distinguish a lawful political appointment from a civil-service post that is meant to be filled impartially."] },
          { heading: "Safeguards and trade-offs", body: ["Open hiring criteria, conflict-of-interest declarations, independent audits, competitive elections, and reviewable appointment processes make favoritism easier to detect. Safeguards need enforcement; a formal rule that cannot be investigated may not change incentives.", "A fair assessment asks who had a right to the position, what qualifications were required, how candidates were compared, and whether the decision was disclosed. This is more informative than assuming either that family ties are always corrupt or that electoral success resolves every concern."] },
        ],
        terms: [["Political dynasty", "A family whose members repeatedly hold political office or exercise political influence."], ["Nepotism", "Favoritism toward relatives in appointments or access."], ["Cronyism", "Favoritism toward friends or close associates, often in public appointments or contracts."]],
        examples: [["Transparent civil-service hiring", "Publishing qualifications and scores helps show whether an appointment followed relevant criteria rather than personal ties."], ["Family name recognition", "A relative of a popular officeholder may win an election fairly while benefiting from greater name recognition and networks."]],
        takeaways: ["A political dynasty is not automatically proof of nepotism or illegality.", "Nepotism favors relatives; cronyism favors friends; patronage exchanges benefits for political support.", "Transparent criteria and independent review help protect fair access to public positions."],
        questions: [
          { question: "Which term refers specifically to favoritism toward relatives?", answer: "Nepotism", wrong: ["Federalism", "Judicial review", "Pluralism"], explanation: "Nepotism is preferential treatment of relatives in appointments or access." },
          { question: "Why is a political dynasty alone insufficient evidence of corruption?", answer: "Family members may win open elections without proof of an improper appointment or exchange", wrong: ["Family ties are prohibited in all political systems", "Elections eliminate every form of unequal access", "Corruption can only occur in courts"], explanation: "The family pattern raises questions about competition and access, but the specific process still needs evidence." },
        ],
        trueFalse: { question: "Cronyism refers to favoritism toward close friends or associates.", answer: true, explanation: "Cronyism is favoritism toward friends or close associates, unlike nepotism which centers on relatives." },
        matching: [{ left: "Nepotism", right: "Favoritism toward relatives" }, { left: "Cronyism", right: "Favoritism toward friends or associates" }, { left: "Patronage", right: "Benefits distributed in exchange for political support" }],
      },
      {
        title: "Lobbying, State Capture, and Wealth Concentration",
        level: "advanced", minutes: 17,
        objectives: ["Explain legitimate and problematic forms of lobbying", "Identify indicators of state capture", "Connect economic concentration with unequal political voice"],
        intro: "Organized interests routinely try to shape public policy. The challenge is to distinguish participation and expertise from privileged access that makes public institutions answer primarily to narrow interests.",
        sections: [
          { heading: "Lobbying and representation", body: ["Lobbying is organized communication with officials intended to influence policy. It can provide technical information, represent workers or communities, and alert lawmakers to consequences. Interest groups are not inherently illegitimate; political systems differ in who can organize and gain a hearing.", "Influence becomes more unequal when some groups can maintain full-time advocates, fund campaigns, or threaten to move investment while others lack time and access. Disclosure rules, public consultations, and balanced expertise can make advocacy more visible, though transparency alone does not equalize resources."] },
          { heading: "State capture", body: ["State capture describes a pattern in which powerful private or political actors shape laws, regulations, or enforcement to serve narrow interests at the expense of broader public purposes. It can occur through repeated conflicts of interest, tailored exemptions, procurement favoritism, or control over oversight institutions.", "Capture is a stronger claim than ordinary lobbying or a single favorable policy. Analysts look for systematic patterns, hidden exchanges, institutional weakening, and beneficiaries. Independent journalism, competitive markets, disclosure, audits, and enforceable conflict rules can help reveal and resist capture."] },
          { heading: "Concentrated wealth and voice", body: ["When wealth is highly concentrated, its owners can more easily fund political communication, legal advocacy, and repeated access. That does not mean every wealthy person agrees or that money determines every outcome; it means the capacity to participate can be distributed unequally.", "Countervailing institutions include unions, civic associations, public-interest groups, universal public services, and rules limiting conflicts. Evaluating reforms requires asking whether they improve fair access while preserving rights to expression and association."] },
        ],
        terms: [["Lobbying", "Organized communication with public officials intended to influence policy."], ["State capture", "Systematic shaping of public rules or enforcement by narrow interests for private benefit."], ["Conflict of interest", "A situation where private interests could improperly influence a public duty."]],
        examples: [["Public consultation", "An open process can invite residents, business groups, and worker organizations to submit evidence on a proposed rule."], ["Procurement oversight", "Publishing bids and contract awards allows auditors and the public to identify repeated favoritism or tailored requirements."]],
        takeaways: ["Lobbying can provide information and representation, but access and resources are uneven.", "State capture is a systematic pattern, not simply a policy one group likes.", "Disclosure, independent oversight, and broad participation help make influence accountable."],
        questions: [
          { question: "What makes state capture a stronger claim than ordinary lobbying?", answer: "It describes systematic shaping of rules or enforcement for narrow private benefit", wrong: ["It means any citizen writes to a representative", "It refers only to a change in government", "It requires that no laws exist"], explanation: "Capture concerns a repeated pattern that bends public institutions toward private interests." },
          { question: "What can lobbying contribute to policymaking?", answer: "Information and representation of organized interests", wrong: ["A guarantee that each group has equal resources", "A replacement for constitutional rules", "Proof that every policy is corrupt"], explanation: "Lobbying can inform officials, though unequal access and conflicts require safeguards." },
        ],
        trueFalse: { question: "A policy benefiting one industry by itself proves state capture.", answer: false, explanation: "A single outcome is not enough; capture requires evidence of systematic influence and institutional distortion." },
        matching: [{ left: "Lobbying", right: "Organized advocacy to influence officials" }, { left: "State capture", right: "Public rules shaped systematically for narrow benefit" }, { left: "Conflict of interest", right: "Private interest could improperly affect public duty" }],
      },
    ],
  },
  {
    id: "political-ideologies",
    title: "Political Ideologies",
    tagline: "The values and assumptions beneath policy debates",
    description: "Understand liberalism, conservatism, socialism, communism, nationalism, fascism, anarchism, social democracy, and environmentalism as diverse and changing traditions.",
    lessons: [
      {
        title: "Liberalism and Conservatism",
        level: "beginner", minutes: 14,
        objectives: ["Describe liberal commitments to rights and constitutional limits", "Recognize variation within conservatism", "Compare traditions without reducing them to slogans"],
        intro: "Ideologies are families of arguments about authority, freedom, equality, community, and change. They are not fixed checklists: traditions differ across countries and are reinterpreted by political movements.",
        sections: [
          { heading: "Liberal traditions", body: ["Liberalism places strong emphasis on individual rights, consent, legal equality, and limits on arbitrary authority. Classical liberal traditions often stress property, free exchange, and a limited state; social liberal traditions argue that public action can secure the conditions people need to exercise freedom meaningfully.", "These strands share some commitments but disagree about regulation, redistribution, and the state's positive responsibilities. Liberal democratic institutions commonly include constitutional rights, competitive elections, and protections for dissent, though historical liberalism did not always extend equal rights to everyone."] },
          { heading: "Conservative traditions", body: ["Conservatism often emphasizes continuity, social institutions, inherited practices, public order, and caution about rapid change. Some conservatives defend markets and limited government; others support an active state to protect community, religion, or national industry.", "Conservative politics is context-dependent: what counts as preserving tradition changes with history. Critics ask whether appeals to order protect unequal arrangements; defenders argue that institutions embody experience and that rapid redesign can have unintended consequences. Both are arguments to examine, not definitions of every conservative voter."] },
          { heading: "Compare specific principles", body: ["A useful comparison asks how each argument defines freedom, what it thinks threatens social order, and which institution should respond. Two people with the same ideological label may answer differently because they prioritize different rights or face different political conditions.", "Policy positions can cross ideological boundaries. A movement may support economic intervention for national security while opposing it for social welfare. Treat labels as maps of recurring ideas, then check the actual argument and policy context."] },
        ],
        terms: [["Liberalism", "A family of traditions emphasizing individual rights, consent, legal equality, and limits on arbitrary authority."], ["Classical liberalism", "A liberal strand emphasizing individual liberty, private property, and limited government."], ["Conservatism", "A family of traditions emphasizing continuity, social institutions, order, and caution about rapid change."]],
        examples: [["Speech and public safety", "A debate about protest rules may pit liberal protection of expression against arguments about public order, while each side may invoke both values."], ["Social insurance", "Some liberal arguments view benefits as enabling real freedom; some conservative arguments support them as preserving community and family stability."]],
        takeaways: ["Ideologies are diverse traditions, not exact labels for every person or policy.", "Liberal arguments often center rights and limits; conservative arguments often stress continuity and social order.", "Compare the underlying principle and context rather than relying on a slogan."],
        questions: [
          { question: "Which concern is commonly central to liberal political traditions?", answer: "Individual rights and limits on arbitrary authority", wrong: ["Ending all constitutional rules", "Making hereditary office the sole source of power", "Prohibiting political disagreement"], explanation: "Liberal traditions commonly emphasize rights, consent, legal equality, and restraints on arbitrary rule." },
          { question: "Why should ideology labels be used cautiously?", answer: "Traditions vary across contexts and contain internal disagreements", wrong: ["Each label has one identical policy program worldwide", "Labels always reveal a person's motives", "Political movements never change"], explanation: "Ideological families are internally diverse and change across historical settings." },
        ],
        trueFalse: { question: "All conservatives support exactly the same economic role for government.", answer: false, explanation: "Conservatives differ on markets, welfare, national industry, and the role of public authority." },
        matching: [{ left: "Liberalism", right: "Rights, consent, and limits on arbitrary power" }, { left: "Conservatism", right: "Continuity and caution about rapid change" }, { left: "Social liberalism", right: "Public action can enable meaningful freedom" }],
      },
      {
        title: "Socialism, Communism, and Social Democracy",
        level: "intermediate", minutes: 16,
        objectives: ["Distinguish public ownership from social protection", "Explain social-democratic use of markets and welfare", "Recognize historical diversity within socialist movements"],
        intro: "The words socialism and communism carry very different meanings across movements and periods. Careful comparison asks who owns productive resources, how economic decisions are made, and what political institutions protect rights.",
        sections: [
          { heading: "Socialist traditions", body: ["Socialism is a broad family of traditions seeking greater social or collective control over economic resources and a reduction of class-based inequality. Some strands favor public ownership, worker cooperatives, or democratic planning; others emphasize strong labor rights and public services within a market economy.", "The tradition includes democratic and authoritarian movements, revolutionary and gradual approaches, and different theories of equality. It is inaccurate to treat every policy such as public healthcare as socialism in the same sense as comprehensive public ownership, or to assume all socialist governments have followed one model."] },
          { heading: "Communism in theory and history", body: ["In Marxist theory, communism names a future classless society in which productive property is held in common and the state, understood as an instrument of class rule, eventually withers away. Political parties that called themselves communist governed states with very different institutions and often concentrated authority in a party-state.", "That gap between theoretical claims and historical regimes is central to debate. Critics emphasize coercion and one-party rule; defenders or revisionists distinguish historical outcomes from the emancipatory ideal. A clear explanation states which meaning—philosophical, party-political, or historical—is being discussed."] },
          { heading: "Social democracy and mixed economies", body: ["Social democracy generally accepts a market economy while using democratic government, collective bargaining, regulation, and social programs to reduce insecurity and inequality. Its scope ranges from modest safety nets to extensive universal services, depending on political coalitions and fiscal capacity.", "Mixed economies combine private firms, public services, regulation, and public ownership in varying proportions. The relevant questions are who makes decisions, who bears risks, and how people can challenge them—not whether a country fits a pure theoretical model."] },
        ],
        terms: [["Socialism", "A broad family of traditions seeking greater social or collective control over economic resources."], ["Communism", "In Marxist theory, a classless society with common ownership; also a label used by diverse historical parties and states."], ["Social democracy", "A democratic political tradition combining markets with regulation, labor protections, and social provision."]],
        examples: [["Universal healthcare", "A public health system can exist within a market economy and does not by itself establish comprehensive public ownership."], ["Worker cooperative", "A firm owned and governed by its workers illustrates one form of collective ownership within a wider economy."]],
        takeaways: ["Socialism is a broad and historically diverse family, not one economic blueprint.", "Communism can refer to a theoretical ideal, political movement, or historical state; specify the meaning.", "Social democracy typically combines markets with democratic regulation and social provision."],
        questions: [
          { question: "What is a common feature of social democracy?", answer: "Combining a market economy with democratic regulation and social programs", wrong: ["Abolishing every election", "Prohibiting all private businesses", "Replacing all laws with party decrees"], explanation: "Social-democratic traditions generally use democratic institutions to shape markets and provide social protection." },
          { question: "Why is it useful to specify the meaning of communism?", answer: "The term can describe a theoretical ideal, a movement, or historical states", wrong: ["It has only one meaning in every debate", "It refers only to a type of monarchy", "It has no historical uses"], explanation: "The same word is used for distinct philosophical, political, and historical references." },
        ],
        trueFalse: { question: "A public healthcare program alone proves that an economy is communist.", answer: false, explanation: "Public services can operate in mixed market economies and do not establish common ownership of production." },
        matching: [{ left: "Socialism", right: "Broad traditions of social or collective economic control" }, { left: "Social democracy", right: "Markets combined with democratic social protections" }, { left: "Mixed economy", right: "Combination of private, public, and regulated activity" }],
      },
      {
        title: "Nationalism, Fascism, Anarchism, and Environmentalism",
        level: "advanced", minutes: 17,
        objectives: ["Explain nationalism's focus on political community", "Identify core features commonly associated with fascism", "Compare anarchist and environmental political arguments"],
        intro: "Some ideologies focus less on markets than on nationhood, hierarchy, state authority, or the relationship between society and nature. Understanding their core claims helps distinguish them from the ways opponents use the labels rhetorically.",
        sections: [
          { heading: "Nation and national self-determination", body: ["Nationalism holds that a nation—a community understood through shared history, culture, language, or civic membership—should have political recognition or self-government. Civic nationalisms define membership through shared citizenship; ethnic nationalisms stress ancestry or culture, though real movements can mix these principles.", "National self-determination has supported anti-colonial independence and democratic participation, but nationalist projects have also excluded minorities or advanced territorial claims. The central question is who is included in the nation and how national belonging is reconciled with equal citizenship."] },
          { heading: "Fascism and authoritarian ultranationalism", body: ["Fascism is commonly associated with authoritarian ultranationalism, a leader-centered movement, political violence, rejection of liberal pluralism, and a vision of national rebirth. Historical fascist movements arose in specific conditions and differed, so scholars debate definitions and boundaries.", "The term is often used as a general insult, which weakens analysis. A more precise claim identifies the features being compared, the historical evidence, and relevant differences. Not every dictatorship or nationalist movement is fascist, even when it shares one characteristic."] },
          { heading: "Anarchism and environmental thought", body: ["Anarchist traditions question whether centralized coercive authority is necessary or legitimate, and explore voluntary association, mutual aid, and self-governance. They are diverse; some focus on labor, others on community organization or individual autonomy. Critics ask how a society would resolve conflict and protect vulnerable people without state institutions.", "Environmentalism argues that political and economic decisions must account for ecological limits and intergenerational effects. Green political traditions connect sustainability to democracy, justice, and local participation in different ways. Environmental politics is not one complete economic ideology; it can reshape arguments across the left-right spectrum."] },
        ],
        terms: [["Nationalism", "The view that a nation should have political recognition, unity, or self-government."], ["Fascism", "An authoritarian ultranationalist political tradition associated with hierarchy, mass mobilization, and rejection of liberal pluralism."], ["Anarchism", "A family of traditions questioning centralized coercive authority and exploring voluntary self-governance."]],
        examples: [["Independence movement", "A population may mobilize around national self-determination while debating whether citizenship should include all residents equally."], ["Intergenerational climate policy", "Rules limiting pollution can be defended as protecting future people who cannot participate in today's decisions."]],
        takeaways: ["Nationalism can support self-determination or exclusion depending on how membership is defined.", "Fascism is a specific historical and analytical category, not a synonym for any disliked policy.", "Anarchist and environmental traditions raise distinct questions about authority and ecological responsibility."],
        questions: [
          { question: "What question is central to evaluating a nationalist movement?", answer: "Who is included in the nation and how self-government is organized", wrong: ["Whether every citizen must own a farm", "Whether courts can never review laws", "How to eliminate all cultural differences"], explanation: "Membership and the relationship between national identity and equal citizenship are central issues." },
          { question: "Why is the label fascism best used with specific criteria?", answer: "The term has an analytical historical meaning and is also used loosely as an insult", wrong: ["It describes every government that holds elections", "It has no historical reference", "It refers only to environmental policy"], explanation: "Naming the features and evidence prevents a contested category from becoming a vague epithet." },
        ],
        trueFalse: { question: "Every nationalist movement defines membership in the same way.", answer: false, explanation: "Movements differ between civic, ethnic, and mixed understandings of national belonging." },
        matching: [{ left: "Nationalism", right: "Political recognition or self-government for a nation" }, { left: "Anarchism", right: "Questions centralized coercive authority" }, { left: "Environmentalism", right: "Emphasizes ecological limits and future consequences" }],
      },
    ],
  },
  {
    id: "democracy-elections",
    title: "Democracy and Elections",
    tagline: "How representation, voting, and accountability work",
    description: "Explore direct and representative democracy, voting systems, parties, campaigns, participation, majority rule, minority rights, and political accountability.",
    lessons: [
      {
        title: "Representation and Political Parties",
        level: "beginner", minutes: 13,
        objectives: ["Explain why representative institutions are used", "Describe how parties organize political choice", "Identify representation trade-offs"],
        intro: "In large societies, citizens usually delegate many decisions to representatives. Representation links public preferences to policy, but no representative can simply mirror every view in a diverse community.",
        sections: [
          { heading: "What representatives do", body: ["Representatives make laws, oversee government, and communicate public concerns to institutions. They may act as delegates who closely follow constituents' preferences, trustees who use their judgment, or a combination that changes with the issue and electoral promise.", "Representation can be geographic, partisan, descriptive, or substantive. A legislature may include people from different regions and backgrounds yet still fail to advance some groups' interests; conversely, a representative can advocate for a group they do not personally resemble. Each dimension asks a different question."] },
          { heading: "Parties organize choices", body: ["Political parties recruit candidates, combine policy proposals, coordinate legislative action, and offer voters a recognizable choice. They reduce the complexity of many separate issues, but can also discipline members and encourage polarized competition.", "Party systems differ: some countries have two dominant parties, others have many parties that form coalitions. Electoral rules, social divisions, and political history shape these patterns. Parties are organizations with internal disagreements, not perfectly unified blocks."] },
          { heading: "Responsiveness and accountability", body: ["Elections create an opportunity to reward or replace officials, but voters have limited time and information. Between elections, public hearings, constituency services, independent media, party competition, and legislative oversight can provide additional channels of accountability.", "Ask whether representatives have incentives to listen to all constituents or mainly to organized supporters. Campaign promises are signals, not guarantees: legislatures bargain, budgets constrain, and unexpected events change priorities. Evaluating representation requires looking at both responsiveness and institutional capacity."] },
        ],
        terms: [["Representation", "The process through which officials act or speak on behalf of citizens."], ["Political party", "An organization that seeks public office and coordinates candidates, voters, and policy proposals."], ["Coalition government", "A government formed by multiple parties that cooperate to command legislative support."]],
        examples: [["Constituency service", "An elected official helps a resident navigate a public agency, creating a link beyond campaign season."], ["Coalition negotiations", "Parties may combine programs after an election to form a governing majority, requiring compromise among voters' choices."]],
        takeaways: ["Representation can be geographic, descriptive, partisan, or substantive.", "Parties simplify political choices and coordinate action while introducing their own trade-offs.", "Accountability operates between elections as well as at the ballot box."],
        questions: [
          { question: "What is one central function of political parties?", answer: "Organizing candidates, voters, and policy proposals", wrong: ["Replacing every public institution", "Guaranteeing that all voters agree", "Removing the need for elections"], explanation: "Parties coordinate political choice and collective action in elections and legislatures." },
          { question: "What does substantive representation ask?", answer: "Whether officials advance the interests or concerns of represented people", wrong: ["Whether the legislature has a constitution", "Whether representatives share a surname", "Whether a country has a national flag"], explanation: "Substantive representation concerns whose interests are acted upon, not only who holds office." },
        ],
        trueFalse: { question: "Political parties are always internally unified organizations.", answer: false, explanation: "Parties coordinate action but contain factions, disagreements, and shifting coalitions." },
        matching: [{ left: "Delegate", right: "Representative closely follows constituents' preferences" }, { left: "Trustee", right: "Representative uses independent judgment" }, { left: "Coalition", right: "Parties cooperate to form a governing majority" }],
      },
      {
        title: "Voting Systems and Campaigns",
        level: "intermediate", minutes: 15,
        objectives: ["Compare plurality and proportional representation", "Explain how electoral rules affect party systems", "Assess campaign information and access"],
        intro: "Ballots translate preferences into seats, but different rules can produce different outcomes from the same votes. Electoral systems shape incentives for candidates, parties, and voters.",
        sections: [
          { heading: "Plurality and proportional rules", body: ["In a single-member plurality district, the candidate with the most votes wins, even without a majority. This rule is simple and ties a representative to a locality, but votes for losing candidates do not contribute to representation in that district and smaller parties can struggle.", "Proportional representation allocates seats to parties roughly in relation to their vote share, often through party lists or multi-member districts. It can broaden representation and encourage coalition building, but may give voters less direct control over individual representatives. Thresholds and district size affect the balance."] },
          { heading: "Mixed systems and strategic choices", body: ["Some systems combine local district representatives with proportional seats. Others use ranked ballots or runoffs. Each design defines a different way to express preferences and prevent a candidate from winning with limited support.", "Electoral rules affect strategic voting: people may support a preferred candidate or choose a less preferred one thought more likely to win. Campaigns adapt by targeting districts, building coalitions, and framing issues. The rules do not mechanically determine outcomes; political context matters too."] },
          { heading: "Campaign fairness", body: ["Campaigns inform voters through debates, policy platforms, canvassing, and media. Their quality depends on reliable information and opportunities for candidates to reach the public. Spending limits, disclosure, public financing, and media access rules aim to manage unequal resources in different ways.", "Evaluate a campaign claim by checking its evidence, source, context, and what has been omitted. Election integrity also depends on clear procedures, independent administration, secure ballot handling, and accessible remedies for disputes."] },
        ],
        terms: [["Plurality system", "An electoral rule where the candidate with the most votes wins, even without a majority."], ["Proportional representation", "A system allocating seats to parties in approximate proportion to their vote share."], ["Electoral threshold", "A minimum vote share required for a party to receive representation under some systems."]],
        examples: [["Same votes, different seats", "A party with 20 percent of votes spread evenly across districts may win few plurality seats but a similar share under proportional rules."], ["Ranked-choice ballot", "Voters rank candidates and later preferences may be counted if no candidate meets the required threshold initially."]],
        takeaways: ["Electoral formulas convert votes into representation in different ways.", "Plurality can strengthen local accountability; proportional rules can represent smaller parties more fully.", "Fair elections depend on access, administration, information, and review as well as ballot counting."],
        questions: [
          { question: "How does proportional representation generally allocate seats?", answer: "Roughly in relation to parties' vote shares", wrong: ["Only to the candidate with the most votes in each district", "By hereditary succession", "By random selection of all legislators"], explanation: "Proportional systems aim to make party seat shares correspond more closely to their vote shares." },
          { question: "What is a likely feature of single-member plurality elections?", answer: "The top-vote candidate can win without receiving a majority", wrong: ["Every party receives seats exactly equal to vote share", "Voters always rank all candidates", "No candidate is tied to a district"], explanation: "Plurality requires more votes than any rival, not necessarily more than half of all votes." },
        ],
        trueFalse: { question: "Electoral rules can affect how parties and voters behave.", answer: true, explanation: "Rules shape campaign strategy, party coordination, and voters' incentives." },
        matching: [{ left: "Plurality", right: "Most votes in a district wins" }, { left: "Proportional representation", right: "Seats roughly track vote share" }, { left: "Electoral threshold", right: "Minimum vote share for representation" }],
      },
      {
        title: "Participation, Majority Rule, and Minority Rights",
        level: "advanced", minutes: 16,
        objectives: ["Identify forms of participation beyond voting", "Explain why majority rule needs institutional limits", "Connect minority rights to democratic legitimacy"],
        intro: "Democracy is more than a periodic count of votes. Participation, fair competition, protection of rights, and the ability to hold leaders accountable determine whether citizens can shape collective decisions over time.",
        sections: [
          { heading: "Many ways to participate", body: ["Citizens participate by voting, attending public meetings, joining organizations, contacting officials, volunteering, protesting, petitioning, or serving on local boards. Different channels demand different resources and carry different risks, so participation rates can reflect unequal time, money, safety, and access.", "Participation can influence policy even without direct control. A public hearing may surface local knowledge; a movement can make an overlooked issue politically costly to ignore. Institutions decide which forms are recognized and how officials must respond."] },
          { heading: "Majority rule and constraints", body: ["Majority rule offers a practical way to decide when citizens disagree, but a majority can use power to restrict future competition or the rights of unpopular groups. Constitutional limits, independent courts, divided authority, and guaranteed civil liberties aim to prevent a temporary majority from monopolizing government.", "Safeguards can raise hard questions about who interprets rights and how to balance them against urgent public needs. Democratic systems debate these questions openly and provide procedures for review, rather than assuming either unrestricted majority rule or unlimited judicial power is unproblematic."] },
          { heading: "Inclusion sustains legitimacy", body: ["Rights to speech, association, conscience, and equal treatment help people organize and contest decisions. Minority rights protect individuals and groups from exclusion and preserve the possibility that today's minority may persuade a future majority.", "Democratic legitimacy is strengthened when people can lose a decision yet remain safe, represented, and able to try again under fair rules. Accountability therefore includes protecting the conditions of future competition, not only counting the current majority."] },
        ],
        terms: [["Political participation", "Actions through which people seek to influence political decisions or outcomes."], ["Minority rights", "Protections that prevent numerical majorities from denying basic rights to less numerous groups."], ["Accountability", "Obligations and mechanisms allowing officials to explain decisions and face consequences for misconduct or failure."]],
        examples: [["A local public hearing", "Residents can present evidence about a proposed transit route and ask officials to respond to concerns."], ["Protecting opposition speech", "Allowing a losing side to organize and criticize government preserves the possibility of peaceful electoral change."]],
        takeaways: ["Voting is one of many forms of political participation.", "Majority decisions need rights and procedures that protect future competition.", "People must be able to lose a vote without losing basic safety, voice, or equal status."],
        questions: [
          { question: "Why do democracies protect minority rights?", answer: "To prevent majorities from denying basic rights and blocking future competition", wrong: ["To make elections unnecessary", "To ensure every policy has unanimous support", "To give one group permanent control"], explanation: "Rights protect equal participation and the possibility of changing political majorities peacefully." },
          { question: "Which is a form of political participation beyond voting?", answer: "Organizing a petition or attending a public hearing", wrong: ["Reading a private diary", "Changing a personal meal preference", "Using a household appliance"], explanation: "Participation includes organized efforts to influence public decisions, not only ballots." },
        ],
        trueFalse: { question: "A democratic majority should be able to eliminate all future political competition.", answer: false, explanation: "Democracy depends on preserving rights and fair procedures that allow future disagreement and change." },
        matching: [{ left: "Political participation", right: "Actions seeking to influence public decisions" }, { left: "Minority rights", right: "Protections against exclusion by a majority" }, { left: "Accountability", right: "Mechanisms to explain and answer for public decisions" }],
      },
    ],
  },
  {
    id: "government-institutions",
    title: "Government and Institutions",
    tagline: "The rules, offices, and public services behind policy",
    description: "Learn about constitutions, presidential and parliamentary systems, bureaucracy, public administration, ministries, public policy, and the rule of law.",
    lessons: [
      {
        title: "Constitutions and the Rule of Law",
        level: "beginner", minutes: 13,
        objectives: ["Describe what constitutions establish", "Explain rule of law and due process", "Distinguish constitutional text from practice"],
        intro: "A constitution is a framework for public authority: it allocates powers, defines procedures, and may protect rights. Its importance depends not only on what the text says but on whether institutions and people can enforce it.",
        sections: [
          { heading: "Constitutional structure", body: ["Constitutions typically establish offices, set procedures for making law, and define relationships among levels and branches of government. They may also declare rights and provide amendment procedures. Some are contained in one document; others rely on statutes, court decisions, and conventions.", "Constitutional rules coordinate political expectations. They can make government more predictable by clarifying who may act, but no text anticipates every conflict. Interpretation and political practice determine how rules apply to new circumstances."] },
          { heading: "Rule of law", body: ["The rule of law means public power is exercised under publicly known rules, applied through fair procedures, and subject to independent review. Officials as well as citizens are bound by law. It differs from rule by law, where legal instruments may be used mainly to control people without constraining rulers.", "Due process requires fair procedures before government deprives a person of liberty, property, or rights. Notice, impartial hearings, reasons for decisions, and an opportunity to challenge evidence are common elements, though precise guarantees differ among legal systems."] },
          { heading: "Text and practice", body: ["A constitution may promise rights while enforcement is weak, or institutions may develop conventions that are not written in a single document. Assessing constitutional government means examining access to courts, compliance with judgments, transparency, and whether officials face consequences for violations.", "Amendments can correct outdated rules but may also be used to weaken checks. The amendment process often requires broader support than ordinary legislation to balance adaptability with stability. Citizens can analyze both the procedure used and the substantive changes made."] },
        ],
        terms: [["Constitution", "A framework of fundamental rules that organizes public authority and may protect rights."], ["Rule of law", "The principle that public power is governed by known rules and fair procedures that bind officials too."], ["Due process", "Procedural protections that require fair treatment before government deprives a person of protected interests."]],
        examples: [["Administrative appeal", "A resident denied a permit can ask an independent body to review the decision and its legal basis."], ["Constitutional amendment", "A supermajority and regional approval requirement can make fundamental changes more deliberate than ordinary laws."]],
        takeaways: ["Constitutions allocate authority and establish procedures; their form varies.", "Rule of law requires rules to constrain officials as well as citizens.", "Constitutional text matters through practical enforcement and institutional compliance."],
        questions: [
          { question: "What is central to the rule of law?", answer: "Public officials as well as citizens are bound by known rules and fair procedures", wrong: ["Only ordinary citizens must follow laws", "Every public decision is made by referendum", "Government can disregard court judgments"], explanation: "The rule of law means authority is constrained by rules that apply to officials too." },
          { question: "What does due process generally protect?", answer: "Fair procedures before government deprives someone of protected interests", wrong: ["A guarantee that every case ends in victory", "A rule that courts write all budgets", "A ban on administrative decisions"], explanation: "Due process concerns the fairness and reviewability of procedures, not guaranteed outcomes." },
        ],
        trueFalse: { question: "A constitution's written promises always guarantee effective protection in practice.", answer: false, explanation: "Rights depend on institutions, access, enforcement, and official compliance as well as text." },
        matching: [{ left: "Constitution", right: "Fundamental framework organizing public authority" }, { left: "Rule of law", right: "Known rules constrain officials and citizens" }, { left: "Due process", right: "Fair procedures before deprivation of rights" }],
      },
      {
        title: "Presidential and Parliamentary Government",
        level: "intermediate", minutes: 14,
        objectives: ["Compare executive selection in presidential and parliamentary systems", "Explain confidence and removal procedures", "Identify coalition and separation trade-offs"],
        intro: "Constitutions organize the relationship between executives and legislatures in different ways. Presidential and parliamentary systems are common ideal types, but real governments also include hybrid arrangements.",
        sections: [
          { heading: "Presidential design", body: ["In a presidential system, the president is selected separately from the legislature, often for a fixed term. The branches have distinct electoral mandates, and the president usually leads the executive. Separate elections can create independent checks but also produce divided government.", "Fixed terms can provide continuity, while removal procedures such as impeachment are usually reserved for specified misconduct or incapacity. The exact scope of executive authority depends on constitutional text, legislative powers, judicial review, and party control."] },
          { heading: "Parliamentary design", body: ["In a parliamentary system, the government is formed from the legislature and must retain its confidence. A prime minister and cabinet can usually be replaced when they lose legislative support, through a confidence vote, party change, or election under the system's rules.", "This arrangement can make it easier to align executive and legislative action when a governing party has a majority. In coalition systems, multiple parties negotiate policy and share cabinet positions; coalition agreements make compromise explicit but can take time to form."] },
          { heading: "Hybrid systems and trade-offs", body: ["Semi-presidential systems combine a separately elected president with a prime minister responsible to a legislature. The allocation of authority between them can depend on constitutional rules and which political forces control each office.", "No model guarantees stability or accountability. Presidential separation can create deadlock; parliamentary confidence can produce frequent government changes. Evaluate real incentives, party structure, appointment authority, and limits on emergency powers rather than assuming a system works from its label."] },
        ],
        terms: [["Presidential system", "A system where a separately selected president leads the executive for a constitutionally defined term."], ["Parliamentary system", "A system where the executive government depends on the confidence of the legislature."], ["Vote of confidence", "A legislative vote determining whether a government retains support to continue governing."]],
        examples: [["Divided government", "A president and legislature controlled by different parties may need to negotiate budgets and appointments."], ["Coalition agreement", "Several parties can set common policy commitments before forming a parliamentary cabinet."]],
        takeaways: ["Presidential executives are selected separately; parliamentary governments depend on legislative confidence.", "Each design has distinct accountability, continuity, and coordination trade-offs.", "Hybrid systems and party dynamics make constitutional labels only a starting point."],
        questions: [
          { question: "What is a defining feature of parliamentary government?", answer: "The executive must retain the legislature's confidence", wrong: ["The president is always elected separately", "Courts appoint the cabinet for life", "The legislature cannot question ministers"], explanation: "A parliamentary government remains in office through continued legislative support." },
          { question: "What can be a consequence of separately elected branches in a presidential system?", answer: "Different electoral mandates can create checks or political deadlock", wrong: ["The legislature automatically disappears", "No executive policy is possible", "A coalition is constitutionally impossible"], explanation: "Separate mandates can constrain executive action but may also complicate agreement." },
        ],
        trueFalse: { question: "Every parliamentary government has only one political party.", answer: false, explanation: "Many parliamentary systems use coalition governments formed by multiple parties." },
        matching: [{ left: "Presidential system", right: "Executive selected separately for a defined term" }, { left: "Parliamentary system", right: "Executive depends on legislative confidence" }, { left: "Coalition", right: "Multiple parties share government through agreement" }],
      },
      {
        title: "Bureaucracy, Public Administration, and Policy",
        level: "advanced", minutes: 16,
        objectives: ["Explain how public administration implements policy", "Distinguish political direction from professional administration", "Trace how implementation can change policy outcomes"],
        intro: "A law does not implement itself. Ministries, agencies, local offices, and public employees turn broad decisions into services, rules, inspections, and daily interactions with the public.",
        sections: [
          { heading: "The administrative state", body: ["Bureaucracies are organizations with specialized roles, procedures, and records. Professional administration can preserve expertise and continuity across political transitions. Rules also create accountability by requiring consistent treatment and documented reasons.", "Bureaucratic systems can become slow, fragmented, or hard for residents to navigate. Administrative burden—learning requirements, completing forms, and complying with procedures—can discourage people from accessing services even when they qualify."] },
          { heading: "From policy to implementation", body: ["Public policy passes through agenda setting, design, adoption, implementation, and evaluation. Administrators interpret regulations, allocate staff, procure services, and respond to local conditions. Their discretion is necessary when rules cannot specify every case, but must be guided by law and oversight.", "Implementation gaps arise when funding, staffing, coordination, or information is inadequate. A program's measured outcomes may differ from legislative intent because frontline conditions vary or residents face obstacles. Evaluating both the rule and its delivery reveals where change may help."] },
          { heading: "Accountable professional service", body: ["Civil-service protections can support competence and reduce partisan hiring, while elected leaders set priorities and remain answerable for policy. The balance differs across systems. Transparent appointments, performance review, audits, public complaints, and legislative oversight can address misuse without discarding expertise.", "A useful policy analysis follows the chain from a public problem to an official decision, budget, implementing agency, and observed result. Ask who has authority at each point and what evidence would show whether the service reached its intended users."] },
        ],
        terms: [["Public administration", "The organization and practice of carrying out government laws, programs, and services."], ["Bureaucracy", "An organization structured through specialized offices, procedures, and defined responsibilities."], ["Implementation", "The process of turning adopted public policy into operational actions and services."]],
        examples: [["School meal program", "A national entitlement still depends on local procurement, staffing, eligibility rules, and accessible application procedures."], ["Inspection standards", "An agency may use professional discretion to prioritize inspections while publishing criteria and reviewing outcomes."]],
        takeaways: ["Administration turns laws into services through organizations and professional staff.", "Implementation depends on resources, discretion, coordination, and administrative burden.", "Trace policy from decision through delivery to evaluate its real effect."],
        questions: [
          { question: "Why is public administration necessary after a law is passed?", answer: "Agencies must translate general rules into services and operational decisions", wrong: ["Legislatures stop existing after elections", "Courts automatically deliver every service", "Laws implement themselves without people or resources"], explanation: "Implementation requires organizations, staff, budgets, procedures, and decisions." },
          { question: "What is an implementation gap?", answer: "A difference between a policy's intended design and how it operates in practice", wrong: ["A gap between two election districts", "A constitutional amendment", "A private contract with no public role"], explanation: "Resources, capacity, coordination, or local conditions can separate intent from delivery." },
        ],
        trueFalse: { question: "Frontline administrators sometimes exercise discretion when applying broad rules to individual cases.", answer: true, explanation: "Rules cannot anticipate every circumstance, so bounded administrative judgment is often necessary." },
        matching: [{ left: "Public administration", right: "Carrying out public programs and services" }, { left: "Implementation", right: "Turning policy into operational action" }, { left: "Administrative burden", right: "Learning, compliance, and access costs for a service" }],
      },
    ],
  },
  {
    id: "political-manipulation",
    title: "Political Problems and Manipulation",
    tagline: "Recognize corruption, propaganda, and abuses of power",
    description: "Study corruption, propaganda, misinformation, disinformation, polarization, populism, censorship, and institutional safeguards against abuse of power.",
    lessons: [
      {
        title: "Corruption, Bribery, and Accountability",
        level: "beginner", minutes: 13,
        objectives: ["Define corruption as misuse of entrusted power", "Distinguish bribery, embezzlement, and conflicts of interest", "Identify accountability and prevention mechanisms"],
        intro: "Corruption is not just a personal flaw; it is also shaped by incentives, discretion, opacity, and weak enforcement. Clear concepts help identify misconduct without treating every unpopular decision as corrupt.",
        sections: [
          { heading: "What counts as corruption?", body: ["Corruption commonly means misuse of entrusted public or private power for improper private gain. Bribery exchanges a benefit for an official act; embezzlement diverts resources entrusted to someone; extortion uses coercion to obtain a benefit. Definitions in law vary, so legal conclusions require jurisdiction-specific evidence.", "A conflict of interest is a risk condition, not proof of corruption. It occurs when private interests could improperly influence a public duty. Disclosure, recusal, independent review, and clear rules help manage conflicts before they become actual misconduct."] },
          { heading: "Why corruption persists", body: ["Opportunities grow when decisions are discretionary but hidden, procurement is concentrated, oversight is weak, or people fear retaliation for reporting. Low pay may be part of an institutional story but does not alone explain corruption; rules, norms, enforcement, and incentives also matter.", "Corruption imposes costs beyond stolen funds. It can reduce trust, distort public priorities, raise the price of services, and deny equal access. These effects are difficult to measure because corrupt arrangements are deliberately concealed."] },
          { heading: "Prevention and accountability", body: ["Independent auditors, transparent budgets, competitive procurement, protected reporting channels, investigative journalism, and impartial courts can make misconduct easier to detect and sanction. Each tool has limits: disclosure is useful only if information is accessible and someone can act on it.", "A fair investigation separates allegation, evidence, and legal finding. Preserving due process protects accused people and strengthens public confidence in enforcement. Citizens can ask who investigated, what evidence is public, which rules apply, and whether similar cases receive similar treatment."] },
        ],
        terms: [["Corruption", "Misuse of entrusted power for improper private benefit."], ["Bribery", "Offering or receiving a benefit to improperly influence an official act."], ["Conflict of interest", "A situation where private interests could improperly affect a public responsibility."]],
        examples: [["Open contracting", "Publishing tender rules, bids, awards, and contract changes helps auditors and residents follow public spending."], ["Recusal", "An official with a financial interest in a decision may disclose it and step aside from the decision process."]],
        takeaways: ["Corruption involves misuse of entrusted power; distinguish specific forms such as bribery and embezzlement.", "A conflict of interest creates risk but does not alone prove corrupt conduct.", "Transparency needs independent enforcement, protected reporting, and fair procedures."],
        questions: [
          { question: "What is bribery?", answer: "A benefit exchanged to improperly influence an official act", wrong: ["A lawful public hearing", "A published budget", "An administrative appeal"], explanation: "Bribery involves an improper exchange intended to influence a decision or action." },
          { question: "Why is a conflict of interest not automatically proof of corruption?", answer: "It signals a risk that can be managed before improper conduct occurs", wrong: ["Private interests never influence public duties", "All conflicts are legally required", "Corruption cannot involve officials"], explanation: "A conflict is a condition requiring disclosure or safeguards, not a finding that misconduct occurred." },
        ],
        trueFalse: { question: "An allegation of corruption should be treated as a proven legal finding.", answer: false, explanation: "Fair process distinguishes allegation from evidence and a legal determination." },
        matching: [{ left: "Bribery", right: "Improper benefit exchanged for influence" }, { left: "Embezzlement", right: "Misuse of resources entrusted to someone" }, { left: "Recusal", right: "Stepping aside to manage a conflict" }],
      },
      {
        title: "Propaganda, Misinformation, and Disinformation",
        level: "intermediate", minutes: 15,
        objectives: ["Distinguish false information by intent and process", "Recognize persuasive propaganda techniques", "Verify claims using source and evidence checks"],
        intro: "Political communication can inform, persuade, or mislead. A striking claim is not automatically false, and an accurate fact can be presented selectively; careful evaluation checks both evidence and framing.",
        sections: [
          { heading: "Different information problems", body: ["Misinformation is false or inaccurate information shared without necessarily intending harm. Disinformation is false information deliberately created or spread to deceive. Malinformation uses genuine information in a harmful context, such as exposing private data. Intent is difficult to establish from a single post.", "Propaganda is organized persuasive communication designed to mobilize support or opposition. It can contain true, false, or selective claims. The term describes a communication strategy and does not by itself tell us whether every statement is inaccurate."] },
          { heading: "Persuasion and distortion", body: ["Common techniques include emotional imagery, repetition, scapegoating, false dilemmas, selective statistics, and presenting popularity as proof. These techniques can appear in political messages from many sources. Their presence signals a reason to inspect evidence rather than automatic proof of deception.", "Context matters. A statistic without a denominator, date, comparison group, or method may create a false impression even if the number itself is correct. Images and video can be authentic but old, edited, or unrelated to the event being discussed."] },
          { heading: "A verification routine", body: ["Pause before sharing, identify the exact claim, and find its original source. Check the date, author, evidence, and whether independent sources with relevant expertise confirm it. Reverse-image search or archived copies can help trace media origins when available.", "Separate what is known from what is inferred. A source's political position does not settle whether a claim is true; neither does a confident tone. When evidence is incomplete, say so and avoid overstating certainty."] },
        ],
        terms: [["Misinformation", "False or inaccurate information shared without necessarily intending to deceive."], ["Disinformation", "False information deliberately created or spread to mislead."], ["Propaganda", "Organized persuasive communication intended to shape political attitudes or action."]],
        examples: [["Old video, new caption", "Authentic footage from an earlier protest can be recirculated with a caption falsely claiming it shows an event today."], ["A selective percentage", "A campaign may cite a change in reported cases without noting that population size or reporting rules also changed."]],
        takeaways: ["Misinformation and disinformation differ by intent, which can be hard to establish.", "Propaganda can use true or false claims and should be analyzed by technique and evidence.", "Trace claims to original sources and check dates, context, methods, and independent confirmation."],
        questions: [
          { question: "What distinguishes disinformation from misinformation?", answer: "Disinformation is deliberately created or spread to deceive", wrong: ["Disinformation is always an accurate statistic", "Misinformation can only appear in newspapers", "Misinformation is always intentional"], explanation: "Intent to mislead is the defining distinction, though it can be difficult to verify." },
          { question: "What is a useful first step when checking a viral claim?", answer: "Identify the exact claim and trace it to its original source", wrong: ["Share it immediately to ask friends", "Assume a confident speaker is correct", "Judge only whether the claim supports your view"], explanation: "Source tracing lets you evaluate context, evidence, and whether the claim changed in circulation." },
        ],
        trueFalse: { question: "Propaganda must always consist entirely of false statements.", answer: false, explanation: "Propaganda is organized persuasion and can use true, false, or selective information." },
        matching: [{ left: "Misinformation", right: "False information not necessarily shared to deceive" }, { left: "Disinformation", right: "False information deliberately spread to mislead" }, { left: "Propaganda", right: "Organized political persuasion" }],
      },
      {
        title: "Polarization, Populism, Censorship, and Abuse",
        level: "advanced", minutes: 17,
        objectives: ["Distinguish ideological from affective polarization", "Describe populism as a political style or ideology", "Identify forms of censorship and institutional erosion"],
        intro: "Political conflict becomes dangerous when opponents are treated as illegitimate, information channels narrow, or leaders weaken the rules that constrain them. These concepts help diagnose patterns without treating disagreement itself as a problem.",
        sections: [
          { heading: "Polarization and populism", body: ["Ideological polarization is distance between political positions; affective polarization is dislike and distrust of opposing groups. A society can disagree strongly on policy while maintaining respect for opponents, or show intense hostility even where policy differences are modest.", "Populism frames politics as a struggle between a virtuous people and a corrupt elite. It can mobilize excluded groups and challenge unresponsive institutions; critics warn that populist leaders may claim to represent the only authentic people and portray opponents, courts, or media as illegitimate. The term covers varied movements."] },
          { heading: "Censorship and information control", body: ["Censorship restricts expression or access to information through law, coercion, licensing, ownership pressure, internet shutdowns, or informal intimidation. Governments may justify some limits for privacy, safety, or national security; necessity, proportionality, and independent review help distinguish tailored protections from suppression of criticism.", "Information control can be formal or indirect. Threats against journalists, strategic lawsuits, ownership concentration, and exclusion from public information can chill speech even without a published ban. Documenting the method and the affected voices makes the analysis precise."] },
          { heading: "Abuse and institutional erosion", body: ["Abuse of power can occur through selective law enforcement, emergency powers used beyond necessity, attacks on independent oversight, or efforts to change electoral rules for partisan advantage. Institutional erosion is often gradual: each step may appear legal while weakening future checks.", "Resilience comes from independent institutions, professional norms, open information, and public commitment to fair procedures. Evaluate concrete actions: what authority was used, who reviewed it, whether similar cases are treated alike, and whether the decision can be reversed or challenged."] },
        ],
        terms: [["Affective polarization", "Hostility or distrust between political groups, beyond differences over policy."], ["Populism", "A political approach framing conflict between a virtuous people and a corrupt elite."], ["Censorship", "Restriction or suppression of expression or access to information by authorities or powerful actors."]],
        examples: [["Election rule changes", "A change to district boundaries or ballot access should be evaluated for its process, evidence, and effects on fair competition."], ["Emergency restriction", "A temporary safety measure can be assessed for legal basis, necessity, time limits, and independent review."]],
        takeaways: ["Policy disagreement differs from hostility that treats opponents as illegitimate.", "Populism can mobilize neglected groups and can also challenge pluralist safeguards.", "Analyze restrictions and institutional change by authority, evidence, proportionality, and review."],
        questions: [
          { question: "What does affective polarization describe?", answer: "Hostility or distrust between political groups", wrong: ["A formal division of legislative seats", "A constitutional amendment", "The difference between two tax rates"], explanation: "Affective polarization concerns feelings and social distance across political groups." },
          { question: "What helps evaluate a claimed emergency restriction on rights?", answer: "Its legal basis, necessity, time limit, and independent review", wrong: ["Whether the restriction is popular", "Whether it has no end date", "Whether the executive approved itself"], explanation: "Reviewability and proportionality help distinguish a targeted measure from arbitrary suppression." },
        ],
        trueFalse: { question: "Every populist movement has the same ideology and policy program.", answer: false, explanation: "Populism is a contested and varied approach that can attach to different ideological programs." },
        matching: [{ left: "Affective polarization", right: "Hostility between political groups" }, { left: "Populism", right: "People-versus-elite political framing" }, { left: "Censorship", right: "Restriction of expression or information" }],
      },
    ],
  },
  {
    id: "international-politics",
    title: "International Politics",
    tagline: "Power, cooperation, conflict, and global institutions",
    description: "Understand diplomacy, geopolitics, international relations, global power distribution, international organizations, war, peace, soft power, and hard power.",
    lessons: [
      {
        title: "Diplomacy, Power, and Geopolitics",
        level: "beginner", minutes: 13,
        objectives: ["Describe diplomacy and international relations", "Distinguish hard, soft, and economic power", "Explain how geography shapes political strategy"],
        intro: "Countries interact through negotiation, trade, institutions, public communication, and sometimes force. International politics studies these relationships while recognizing that states are not the only influential actors.",
        sections: [
          { heading: "Diplomacy and international relations", body: ["Diplomacy is the practice of communicating and negotiating among governments and other international actors. It includes treaties, summits, embassies, mediation, and crisis communication. Diplomacy can prevent misunderstandings, but agreements still depend on the parties' incentives and capacity to carry them out.", "International relations includes interactions among states, international organizations, firms, and transnational movements. Analysts study cooperation and conflict using different theories: some stress security competition, others institutions, economic ties, norms, or domestic politics. No single framework explains every case."] },
          { heading: "Hard, soft, and economic power", body: ["Hard power uses coercive tools such as military force or threats. Soft power attracts or persuades through culture, values, education, and perceived legitimacy. Economic power can work through investment, trade access, aid, sanctions, or control of important supply chains.", "These tools often operate together and can have unintended effects. Sanctions may pressure leaders but also harm civilians; military presence may deter aggression but increase tensions. Assess goals, costs, credibility, and likely responses rather than assuming a tool automatically works."] },
          { heading: "Geography and strategy", body: ["Geopolitics examines how location, terrain, resources, borders, and access to routes affect political relationships. Islands, mountain ranges, ports, and energy corridors can shape security and trade choices, but geography does not dictate policy on its own.", "Technology, alliances, domestic priorities, and historical memory change how states interpret geography. A strategic location can become a bridge for cooperation as well as a source of competition, depending on rules and diplomacy."] },
        ],
        terms: [["Diplomacy", "Communication and negotiation among governments and other international actors."], ["Hard power", "Influence through coercion or threats, especially military force."], ["Soft power", "Influence through attraction, persuasion, culture, or perceived legitimacy."]],
        examples: [["Maritime passage", "States may negotiate access to a shipping route because it matters for trade and national security."], ["Student exchanges", "Educational and cultural exchanges can build relationships and familiarity without coercive pressure."]],
        takeaways: ["Diplomacy negotiates relationships; international relations includes many state and non-state actors.", "Hard, soft, and economic power can reinforce or undermine one another.", "Geography shapes incentives but does not determine a country's choices."],
        questions: [
          { question: "Which is an example of soft power?", answer: "Attracting international partners through culture and educational exchange", wrong: ["Threatening a military attack", "Imposing a naval blockade", "Seizing territory by force"], explanation: "Soft power works through attraction and persuasion rather than coercion." },
          { question: "What does geopolitics examine?", answer: "How geography and spatial factors shape political relationships", wrong: ["Only domestic election campaigns", "The rules of a single court trial", "Personal preferences unrelated to place"], explanation: "Location, terrain, resources, and routes influence strategic relationships." },
        ],
        trueFalse: { question: "Geography alone determines a state's foreign policy.", answer: false, explanation: "Geography matters, but technology, institutions, alliances, and domestic politics also shape policy." },
        matching: [{ left: "Diplomacy", right: "International communication and negotiation" }, { left: "Hard power", right: "Coercion or threat" }, { left: "Soft power", right: "Attraction and persuasion" }],
      },
      {
        title: "International Organizations and Global Cooperation",
        level: "intermediate", minutes: 15,
        objectives: ["Explain why states create international institutions", "Distinguish intergovernmental from nongovernmental organizations", "Assess the limits of international enforcement"],
        intro: "Countries create institutions to coordinate on problems that cross borders. These institutions can reduce uncertainty and pool expertise, but they rely on member states and do not operate like a single world government.",
        sections: [
          { heading: "Why institutions form", body: ["International organizations can provide meeting forums, monitoring, shared standards, technical assistance, and procedures for resolving disputes. They help governments exchange information and make commitments more credible when cooperation benefits more than one state.", "Institutions reflect bargaining among members. Voting rules, funding, membership, and enforcement authority can give some states more influence than others. A rule may be formally equal while resources and agenda control remain uneven."] },
          { heading: "Different organizations", body: ["Intergovernmental organizations are created by states through agreements and have government members. Nongovernmental organizations are independent organizations—such as humanitarian, professional, or advocacy groups—that may operate across borders and influence policy without being states.", "Organizations vary in scope. Some focus on security or trade; others coordinate health, labor, education, finance, or environmental policy. Their mandates define what they can do, and their effectiveness depends on expertise, resources, member cooperation, and public trust."] },
          { heading: "Cooperation without world government", body: ["International law and agreements create obligations, but enforcement is decentralized. States may comply because they expect reciprocity, value reputation, face domestic legal requirements, or depend on continued cooperation—not only because of sanctions.", "Disputes about compliance are political as well as legal. Consider who monitors, what evidence is available, what remedies exist, and whether powerful members face the same constraints. The absence of a world government does not mean international rules are irrelevant, but it affects how they work."] },
        ],
        terms: [["Intergovernmental organization", "An organization established by states through an agreement and composed primarily of government members."], ["International law", "Rules and obligations that govern relations among states and other recognized actors."], ["Multilateralism", "Cooperation among multiple countries through shared rules or institutions."]],
        examples: [["Public health reporting", "Countries can share disease data through common procedures to detect cross-border outbreaks earlier."], ["Trade dispute process", "An agreed panel can review whether a member's trade measure follows negotiated commitments."]],
        takeaways: ["International organizations coordinate information, standards, negotiation, and dispute processes.", "They are created and constrained by member agreements, resources, and power differences.", "International rules can matter without a centralized world government."],
        questions: [
          { question: "Why do states create international organizations?", answer: "To coordinate, share information, and manage problems that cross borders", wrong: ["To abolish every national government", "To ensure all states have identical interests", "To eliminate diplomacy"], explanation: "Institutions help states cooperate and manage shared problems through agreed procedures." },
          { question: "What distinguishes an intergovernmental organization?", answer: "It is established by states and has government members", wrong: ["It consists only of private firms", "It has no agreed mandate", "It always commands a global army"], explanation: "Intergovernmental bodies are created by agreements among governments." },
        ],
        trueFalse: { question: "International institutions operate exactly like a centralized world government.", answer: false, explanation: "They have defined mandates and rely on member cooperation rather than a single global sovereign." },
        matching: [{ left: "Intergovernmental organization", right: "Organization established by states" }, { left: "Multilateralism", right: "Cooperation among multiple countries" }, { left: "International law", right: "Rules governing international relations" }],
      },
      {
        title: "War, Peace, Security, and Global Power",
        level: "advanced", minutes: 17,
        objectives: ["Distinguish deterrence, collective security, and diplomacy", "Explain competing approaches to international conflict", "Assess power shifts without treating them as inevitable"],
        intro: "War and peace are shaped by security concerns, domestic choices, alliances, institutions, and misperception. Political science offers frameworks for analyzing these forces, not formulas that predict every conflict.",
        sections: [
          { heading: "Security dilemmas and deterrence", body: ["A security dilemma arises when one state's defensive measures appear threatening to another, prompting reciprocal buildup. Each may feel less secure even though neither originally sought conflict. Communication, arms-control arrangements, and verification can reduce uncertainty but require political commitment.", "Deterrence seeks to prevent action by making expected costs seem greater than potential gains. It depends on capability, credibility, and communication. Threats can fail if they are not believed, and they can increase danger if leaders misread intentions or lose a path to de-escalation."] },
          { heading: "Collective security and peacebuilding", body: ["Collective security treats threats to peace as a shared concern and relies on coordinated responses through institutions or coalitions. In practice, members may disagree about evidence, responsibility, and the costs of action. Selective enforcement can weaken trust in the system.", "Peacebuilding extends beyond ending direct fighting. It may involve rebuilding institutions, addressing displacement, supporting justice, and creating conditions for political inclusion. These efforts are difficult and contested; durable peace depends on local participation as well as international resources."] },
          { heading: "Shifts in global power", body: ["Global power is distributed unevenly across military capacity, economic production, technology, alliances, diplomacy, and cultural influence. A state can be powerful in one domain and constrained in another. Measuring power requires specifying the goal and context.", "Claims that a new power balance will inevitably produce war are too simple. Choices, institutions, economic interdependence, domestic politics, and leaders' perceptions all matter. Historical comparisons can suggest mechanisms, but they do not make future outcomes certain."] },
        ],
        terms: [["Security dilemma", "A cycle where defensive measures by one state increase another's fear and provoke countermeasures."], ["Deterrence", "An effort to prevent action by convincing an actor that its expected costs will outweigh benefits."], ["Collective security", "An arrangement where states treat threats to peace as a shared responsibility."]],
        examples: [["Military exercise notification", "Advance notice and observers can reduce the chance that a routine exercise is mistaken for preparation for attack."], ["Post-conflict peacebuilding", "Local mediation, public services, and accountable institutions can support stability after a ceasefire."]],
        takeaways: ["Security measures can reassure one state and alarm another, creating a security dilemma.", "Deterrence depends on credible communication and can carry escalation risks.", "Power shifts do not mechanically cause war; political decisions and institutions matter."],
        questions: [
          { question: "What is a security dilemma?", answer: "A cycle where one state's defensive steps increase another's insecurity", wrong: ["A dispute over domestic school policy", "A guaranteed path to peace", "A law that abolishes borders"], explanation: "Defensive measures can be interpreted as threatening and trigger reciprocal responses." },
          { question: "What does deterrence attempt to do?", answer: "Prevent an action by making its expected costs seem too high", wrong: ["Guarantee a conflict will never occur", "Replace communication with secrecy", "Eliminate all military capability"], explanation: "Deterrence relies on communicating credible costs, but is not guaranteed to work." },
        ],
        trueFalse: { question: "A shift in global power inevitably causes war.", answer: false, explanation: "War depends on choices and conditions; power transitions do not determine a single outcome." },
        matching: [{ left: "Security dilemma", right: "Reciprocal fear from defensive measures" }, { left: "Deterrence", right: "Preventing action through expected costs" }, { left: "Collective security", right: "Shared response to threats to peace" }],
      },
    ],
  },
  {
    id: "everyday-politics",
    title: "Politics in Everyday Life",
    tagline: "Connect public decisions to the costs and services around you",
    description: "Explore taxes, inflation, employment, education, healthcare, subsidies, public infrastructure, individual rights, and how government decisions shape daily life.",
    lessons: [
      {
        title: "Taxes, Budgets, and Public Services",
        level: "beginner", minutes: 13,
        objectives: ["Explain why governments tax and spend", "Read a budget as a set of public choices", "Recognize trade-offs in revenue and services"],
        intro: "Taxes finance shared services and shape incentives, while budgets reveal which priorities governments choose to fund. Public finance links abstract political decisions to roads, schools, healthcare, safety, and household resources.",
        sections: [
          { heading: "Why taxes exist", body: ["Governments collect taxes to fund public goods and services, redistribute resources, stabilize the economy, and support institutions. Income, consumption, property, and business activity can all be taxed. Each tax has different effects on households, firms, and incentives.", "A tax's legal payer is not always the person who ultimately bears its economic cost. Businesses may pass some costs to consumers, workers, or owners depending on market conditions. Distributional analysis asks who pays relative to income and who benefits from the spending it supports."] },
          { heading: "Budgets make priorities visible", body: ["A public budget estimates revenue and authorizes spending for a period. It allocates resources among services, investment, debt payments, and transfers. Budget choices are constrained by past commitments, economic conditions, legal duties, and political bargaining.", "Budgets can be read by comparing planned and actual spending, program outcomes, and who receives benefits. A large appropriation does not guarantee an effective service if delivery is weak; a small line item may still matter greatly to a vulnerable group."] },
          { heading: "Trade-offs and accountability", body: ["Tax cuts may leave households with more disposable income but reduce revenue unless spending or borrowing changes. Increased spending can expand services or investment but requires revenue, borrowing, or reprioritization. The trade-off depends on the policy's design and economic circumstances.", "Citizens can follow budget proposals, hearings, audits, and service results. Asking where money comes from, where it goes, who benefits, and how success is measured turns a budget debate into concrete questions."] },
        ],
        terms: [["Taxation", "Compulsory public revenue collected under law to fund government and public purposes."], ["Public budget", "A plan estimating government revenue and authorizing spending for a specified period."], ["Public good", "A good that is difficult to exclude people from using and whose use by one person does not greatly reduce availability to others."]],
        examples: [["Street lighting", "A city may fund shared lighting because individual households cannot efficiently provide a connected public network street by street."], ["Budget audit", "Comparing an approved school budget with actual spending can reveal delays, savings, or unexplained costs."]],
        takeaways: ["Taxes finance services and can distribute costs and benefits differently.", "Budgets reveal priorities but spending amounts alone do not establish outcomes.", "Follow revenue, allocation, delivery, and evaluation to assess public finance."],
        questions: [
          { question: "What does a public budget primarily do?", answer: "Estimates revenue and authorizes spending for a period", wrong: ["Guarantees every program succeeds", "Sets all private wages", "Replaces the constitution"], explanation: "Budgets plan and authorize public resources, while outcomes depend on implementation." },
          { question: "Why might the person legally paying a tax not bear all of its economic cost?", answer: "Some costs can be shifted to consumers, workers, or owners", wrong: ["Taxes have no economic effects", "All taxes are voluntary", "Tax incidence is set only by election results"], explanation: "Market conditions determine how tax costs are shared beyond the legal remitter." },
        ],
        trueFalse: { question: "An approved budget amount alone proves that a public service was delivered effectively.", answer: false, explanation: "Delivery, access, quality, and outcomes must also be assessed." },
        matching: [{ left: "Taxation", right: "Public revenue collected under law" }, { left: "Budget", right: "Plan authorizing revenue and spending" }, { left: "Audit", right: "Review of records and use of public resources" }],
      },
      {
        title: "Inflation, Employment, and Economic Policy",
        level: "intermediate", minutes: 15,
        objectives: ["Define inflation and distinguish it from a price level", "Explain government and central-bank policy roles", "Identify groups affected differently by economic change"],
        intro: "Economic conditions are shaped by markets and public institutions. Inflation, employment, and wages affect daily security, but these outcomes have multiple causes and policy responses involve trade-offs.",
        sections: [
          { heading: "Understanding inflation", body: ["Inflation is a sustained increase in the general level of prices over time, which reduces the purchasing power of money. A price rise in one product is not by itself economy-wide inflation. Measures track a basket of goods and services, but household experiences vary with what people buy.", "Inflation can reflect demand growing faster than supply, higher production costs, supply disruptions, or monetary conditions, often interacting. Identifying a cause requires evidence across sectors and time; a single price change rarely supports a complete explanation."] },
          { heading: "Policy tools and institutions", body: ["Central banks may use interest rates and other tools to influence credit and demand, with mandates and independence varying by country. Governments use taxes, spending, transfers, regulation, and investment to affect demand and productive capacity.", "Policy acts with delays and uncertainty. Raising rates can reduce demand and inflation pressure but also slow hiring and borrowing; subsidies may ease costs for some households but require funding and can affect supply incentives. The design and timing matter."] },
          { heading: "Employment and distribution", body: ["Employment levels reflect demand, skills, technology, investment, public policy, and global conditions. A national unemployment rate can hide differences by age, region, disability, or sector. Job quality, security, hours, and wages matter alongside whether someone is employed.", "Economic policy distributes risks and benefits. A worker with savings experiences inflation differently from someone on a fixed income; a borrower and a saver may respond differently to interest-rate changes. Evaluating policy asks whose problem it addresses and who may bear side effects."] },
        ],
        terms: [["Inflation", "A sustained increase in the general price level that reduces money's purchasing power."], ["Monetary policy", "Central-bank actions influencing money, credit, interest rates, and economic conditions."], ["Fiscal policy", "Government decisions about taxation, spending, and borrowing that affect the economy."]],
        examples: [["Food-price shock", "A supply disruption can raise food prices even while prices for other categories change more slowly."], ["Rate increase", "Higher interest rates may ease inflation pressure but make mortgages and business borrowing more expensive."]],
        takeaways: ["Inflation is a broad price trend, not a single product becoming more expensive.", "Monetary and fiscal tools have delays, uncertain effects, and distributional consequences.", "Average economic indicators can hide sharply different household experiences."],
        questions: [
          { question: "What is inflation?", answer: "A sustained increase in the general level of prices", wrong: ["Any one product becoming more expensive", "A decline in every wage", "A government budget surplus"], explanation: "Inflation measures broad price changes over time, not a single item." },
          { question: "What is one possible trade-off of raising interest rates?", answer: "It may reduce demand pressure while making borrowing more costly", wrong: ["It guarantees no one loses a job", "It immediately lowers every price", "It removes the need for fiscal policy"], explanation: "Tighter monetary conditions can curb demand but also slow borrowing and economic activity." },
        ],
        trueFalse: { question: "A national unemployment rate reveals every group's employment experience equally well.", answer: false, explanation: "National averages can conceal differences by region, age, sector, and other conditions." },
        matching: [{ left: "Inflation", right: "Sustained rise in general prices" }, { left: "Monetary policy", right: "Central-bank influence on money and credit" }, { left: "Fiscal policy", right: "Taxing, spending, and borrowing decisions" }],
      },
      {
        title: "Education, Healthcare, Infrastructure, and Rights",
        level: "advanced", minutes: 16,
        objectives: ["Explain how policy design shapes access to services", "Compare universal and targeted programs", "Connect infrastructure and rights to everyday citizenship"],
        intro: "Public decisions shape the opportunities people can use: a school nearby, a clinic they can afford, a safe road, or a legal right they can enforce. Outcomes depend on policy design and delivery as much as stated goals.",
        sections: [
          { heading: "Service access and design", body: ["Education and healthcare can be provided through public institutions, private providers, or mixed systems. Governments influence access through funding, standards, insurance rules, workforce policy, and protections against discrimination. These arrangements create different incentives and responsibilities.", "Universal programs are available to broad populations, while targeted programs focus on groups meeting eligibility criteria. Universal access can reduce stigma and simplify coverage; targeted support can concentrate limited resources but may exclude people through complex paperwork or strict thresholds."] },
          { heading: "Infrastructure and collective benefits", body: ["Transport, water, energy, and communications infrastructure connect people to work, education, and markets. These networks often require large initial investment, long planning horizons, and coordination across communities, making public decisions central even when private providers participate.", "Infrastructure choices distribute benefits and burdens. A new road may shorten some commutes while displacing residents or increasing pollution. Consultation, environmental assessment, fair compensation, and maintenance budgets affect who benefits over the asset's lifetime."] },
          { heading: "Rights in everyday life", body: ["Rights are meaningful when people can understand them, access institutions, and seek remedies. Labor protections, privacy, equal treatment, and freedom of expression can shape a person's interaction with employers, schools, health systems, and public agencies.", "Policy evaluation connects rules to lived experience: who can use the service, what barriers remain, how quality varies, and whether complaints lead to correction. Community evidence is valuable alongside statistics, but both should be gathered and interpreted carefully."] },
        ],
        terms: [["Universal program", "A public benefit or service broadly available without narrow income-based eligibility."], ["Targeted program", "A benefit or service restricted to people meeting specified eligibility criteria."], ["Public infrastructure", "Long-lived physical or digital systems that support shared economic and social activity."]],
        examples: [["School meal eligibility", "A targeted meal program may direct resources to low-income pupils but require families to prove eligibility."], ["Transit investment", "A new bus corridor can improve access to jobs, while route design and fares determine who benefits most."]],
        takeaways: ["Service outcomes depend on funding, eligibility, delivery, and accessible procedures.", "Universal and targeted programs each have strengths and exclusion risks.", "Infrastructure and enforceable rights shape practical opportunities in daily life."],
        questions: [
          { question: "What is a possible advantage of a universal service?", answer: "Broad access can reduce stigma and simplify eligibility", wrong: ["It guarantees identical outcomes for all users", "It removes the need for funding", "It excludes every person with a high income"], explanation: "Universal design can make access straightforward, though costs and service capacity still matter." },
          { question: "Why evaluate infrastructure beyond its construction cost?", answer: "Its benefits, burdens, maintenance, and access are distributed over time", wrong: ["Infrastructure never affects communities", "Only private individuals use roads", "A completed project requires no maintenance"], explanation: "Long-lived projects shape access and impose costs throughout their operating life." },
        ],
        trueFalse: { question: "A public right is effective even when people cannot access a remedy for its violation.", answer: false, explanation: "Practical protection depends on access to institutions and meaningful remedies." },
        matching: [{ left: "Universal program", right: "Broadly available public benefit" }, { left: "Targeted program", right: "Benefit limited by eligibility criteria" }, { left: "Infrastructure", right: "Long-lived systems supporting shared activity" }],
      },
    ],
  },
  {
    id: "critical-thinking",
    title: "Critical Political Thinking",
    tagline: "Evaluate arguments and evidence independently",
    description: "Build media literacy, recognize logical fallacies and bias, assess statistics, fact-check claims, and form independent political judgments.",
    lessons: [
      {
        title: "Arguments, Evidence, and Logical Fallacies",
        level: "beginner", minutes: 13,
        objectives: ["Separate claims, reasons, and evidence", "Recognize common reasoning errors", "Build a fair version of a political argument"],
        intro: "Political arguments often mix facts, causal explanations, and values. Separating these pieces makes disagreement easier to understand and helps identify what evidence could change a conclusion.",
        sections: [
          { heading: "Anatomy of an argument", body: ["A claim states what someone wants us to accept. Reasons connect it to supporting premises, and evidence provides observations or data. A conclusion may still depend on unstated assumptions about fairness, risk, or which outcomes matter most.", "Ask whether the evidence supports the specific claim, whether important alternatives were considered, and whether the reasoning applies consistently. A political conclusion can be value-based without being arbitrary; values should be stated so people can assess them directly."] },
          { heading: "Common reasoning errors", body: ["A straw man misrepresents an opponent's position; ad hominem attacks the person rather than the argument; a false dilemma presents two options as exhaustive when others exist. A slippery-slope argument predicts a chain of events without showing why each step follows.", "Correlation does not establish causation: two trends can move together because of a third factor or coincidence. Avoid labeling every weak argument a fallacy; explain the missing premise or evidence. Some arguments are valid in form but rely on false or unsupported premises."] },
          { heading: "Disagree with precision", body: ["State the strongest reasonable version of a position before criticizing it. Distinguish factual disagreement from differences in values, and ask what observation could change each side's mind. This practice reduces misrepresentation and exposes genuine points of conflict.", "When an argument includes several claims, evaluate them separately. One factual mistake does not automatically refute every conclusion, and one correct statistic does not prove a broader policy position without a reasoned link."] },
        ],
        terms: [["Premise", "A reason or assumption offered in support of an argument's conclusion."], ["Straw man", "A distortion of an opponent's position that makes it easier to attack."], ["Correlation", "A statistical relationship between variables that does not alone establish causation."]],
        examples: [["False dilemma", "A debate framed as 'choose safety or freedom' may ignore policies that protect both to different degrees."], ["Correlation and policy", "A town with more police and more reported crime may have higher reporting, different population, or other causes; the association alone is not causal proof."]],
        takeaways: ["Separate claims, premises, evidence, and values in a political argument.", "Name the reasoning gap rather than using fallacy labels as insults.", "Correlation alone does not show that one factor caused another."],
        questions: [
          { question: "What is a false dilemma?", answer: "Presenting two choices as exhaustive when other options may exist", wrong: ["Using a statistic with a clear source", "A conclusion supported by several reasons", "A policy that receives unanimous support"], explanation: "A false dilemma narrows the available options without justification." },
          { question: "What can be concluded from correlation alone?", answer: "That two variables are statistically associated, not necessarily causally linked", wrong: ["That one variable caused the other", "That the relationship is morally fair", "That no other explanation exists"], explanation: "Causation requires a design or evidence that addresses alternative explanations." },
        ],
        trueFalse: { question: "A strong political critique should represent the opposing argument accurately.", answer: true, explanation: "Accurate representation lets us test the actual reasoning rather than a distorted version." },
        matching: [{ left: "Premise", right: "Reason supporting a conclusion" }, { left: "Straw man", right: "Distorted version of an opponent's argument" }, { left: "False dilemma", right: "Unjustified presentation of only two options" }],
      },
      {
        title: "Media Literacy, Bias, and Fact-Checking",
        level: "intermediate", minutes: 15,
        objectives: ["Evaluate source credibility and evidence quality", "Distinguish bias from factual falsity", "Use a repeatable claim-checking process"],
        intro: "Media literacy is not simply choosing trusted outlets. It is the practice of examining how a claim was produced, what evidence supports it, and what a source may not show.",
        sections: [
          { heading: "Source and evidence", body: ["Identify who created a message, when it appeared, what evidence is linked, and whether the source has direct access to the information. Expertise matters most when it is relevant to the claim and supported by transparent methods.", "Primary documents can reveal original language but require context; secondary reporting can provide interpretation and verification. Compare independent sources, while remembering that several outlets may repeat the same original report rather than independently confirm it."] },
          { heading: "Bias and framing", body: ["Bias is a systematic inclination in selection or interpretation; it does not automatically mean a statement is false. A report may accurately describe an event yet emphasize different facts, use loaded language, or omit relevant comparisons.", "Compare headlines with the full source, inspect which voices are quoted, and ask whether the same standard is applied to allies and opponents. Readers also have confirmation biases: information that fits existing beliefs can feel more credible than it deserves."] },
          { heading: "Check claims, not identities", body: ["Break a broad statement into checkable claims, then seek the closest available evidence. For numbers, locate the original dataset, definition, time period, sample, and uncertainty. For quotes, find the full speech or document rather than a cropped excerpt.", "Fact-checking can produce a range of outcomes: supported, contradicted, missing context, or unresolved. Being willing to update a belief when evidence changes is a strength, not a concession to an opposing side."] },
        ],
        terms: [["Media literacy", "The ability to access, analyze, evaluate, and create media messages critically."], ["Source bias", "A systematic tendency in how a source selects or interprets information."], ["Primary source", "An original record or direct evidence from the event, person, or process being studied."]],
        examples: [["A poll headline", "Check the question wording, sample, field dates, and margin of error before treating a survey as a precise forecast."], ["A cropped quotation", "Finding the full transcript may show whether an excerpt changes the speaker's meaning or surrounding context."]],
        takeaways: ["Assess the source's access, expertise, evidence, and method for the specific claim.", "Bias can shape selection and framing without making every statement false.", "Check original data and context, then report uncertainty honestly."],
        questions: [
          { question: "What should you inspect when evaluating a poll?", answer: "Question wording, sample, field dates, and uncertainty", wrong: ["Only whether the result matches your expectation", "The color of the website", "Whether the poll has a dramatic headline"], explanation: "Method details show what a poll measured and how precisely it can be interpreted." },
          { question: "Does source bias automatically prove a claim is false?", answer: "No; the specific evidence and method still need to be examined", wrong: ["Yes, every claim from a biased source is false", "Yes, unless the source is anonymous", "No, because sources can never be biased"], explanation: "Bias affects selection and interpretation, but truth depends on evidence for each claim." },
        ],
        trueFalse: { question: "Several outlets repeating one original report necessarily provide independent confirmation.", answer: false, explanation: "Multiple reports can depend on the same source, so trace where the information originated." },
        matching: [{ left: "Primary source", right: "Original record or direct evidence" }, { left: "Source bias", right: "Systematic selection or interpretation tendency" }, { left: "Field dates", right: "When a poll's responses were collected" }],
      },
      {
        title: "Statistics, Fact-Checking, and Independent Judgment",
        level: "advanced", minutes: 17,
        objectives: ["Interpret rates, denominators, and comparisons", "Recognize uncertainty and misleading visualizations", "Form a reasoned judgment while remaining open to revision"],
        intro: "Statistics can clarify political questions but can also mislead when definitions, scales, and comparison groups are hidden. Independent judgment combines numerical care with explicit values and transparent uncertainty.",
        sections: [
          { heading: "Read the measure", body: ["Ask what is counted, how it is defined, and who is included. A rate uses a denominator; a raw count does not. Per-capita comparisons, age-adjusted rates, and totals answer different questions, so choose the measure that matches the claim.", "Look for base rates and absolute as well as relative change. A 50 percent increase can mean a rise from two cases to three or from two million to three million. Both are mathematically true but have different practical significance."] },
          { heading: "Uncertainty and visual choices", body: ["Samples produce estimates, not perfect knowledge. Confidence intervals, margins of error, missing data, and measurement error affect what can be inferred. A result that is statistically distinguishable may still be small or not important for a policy decision.", "Charts can mislead through truncated axes, unequal intervals, selective dates, or missing comparison groups. Inspect labels and scales; if possible, recreate the comparison from the underlying data. A visualization is an argument about what to notice."] },
          { heading: "Independent political judgment", body: ["A reasoned judgment makes its factual assumptions, values, and uncertainty visible. Ask what outcome matters, who bears costs, which alternatives exist, and what evidence would alter your view. The same evidence can support different choices when people weigh values differently.", "Keep conclusions proportional to evidence. Separate what is established, what is a plausible interpretation, and what remains unknown. Revisit conclusions when new evidence arrives and apply similar standards to claims from every political side."] },
        ],
        terms: [["Denominator", "The reference quantity used to calculate a rate or proportion."], ["Base rate", "The underlying frequency of an event in the relevant population."], ["Confidence interval", "A range generated by a statistical method to express uncertainty around an estimate."]],
        examples: [["Crime rate comparison", "Comparing raw incidents between cities can mislead when population sizes differ; rates per resident answer a different question."], ["Truncated chart axis", "A graph beginning at 95 instead of zero can make a small change appear visually dramatic."]],
        takeaways: ["Check definitions, denominators, base rates, and absolute as well as relative changes.", "Statistical uncertainty and chart design affect what a result can support.", "Make values and uncertainty explicit, and update conclusions when evidence changes."],
        questions: [
          { question: "Why is a denominator important when interpreting a rate?", answer: "It shows the population or quantity against which a count is compared", wrong: ["It proves a policy caused the result", "It removes all measurement error", "It is another word for a headline"], explanation: "The denominator determines the scale and meaning of a rate or proportion." },
          { question: "What can a truncated chart axis do?", answer: "Make a modest difference appear larger visually", wrong: ["Guarantee the data are false", "Remove uncertainty from a sample", "Change the underlying measured values"], explanation: "A restricted scale can exaggerate visual differences without changing the data themselves." },
        ],
        trueFalse: { question: "A statistically detectable effect is automatically large enough to matter for policy.", answer: false, explanation: "Statistical detectability and practical importance are separate questions." },
        matching: [{ left: "Denominator", right: "Reference quantity for a rate" }, { left: "Base rate", right: "Underlying frequency in a population" }, { left: "Confidence interval", right: "Range expressing estimate uncertainty" }],
      },
    ],
  },
];

function makeExam(moduleNumber: number, lessons: Lesson[]): QuizQuestion[] {
  const questions: QuizQuestion[] = [];
  for (const [lessonIndex, lesson] of lessons.entries()) {
    const first = lesson.quiz[0];
    if (first) questions.push({ ...first, id: `m${moduleNumber}ex${questions.length + 1}` });
  }
  const lastLesson = lessons.at(-1);
  const truth = lastLesson?.quiz.find((question) => question.type === "tf");
  const matching = lessons[0]?.quiz.find((question) => question.type === "matching");
  if (truth) questions.push({ ...truth, id: `m${moduleNumber}ex${questions.length + 1}` });
  if (matching) questions.push({ ...matching, id: `m${moduleNumber}ex${questions.length + 1}` });
  return questions;
}

export const REMAINING_MODULES: Module[] = SOURCES.map((source, index) => {
  const number = index + 3;
  const lessons = source.lessons.map((lesson, lessonIndex) => makeLesson(number, lesson, lessonIndex));
  return {
    id: source.id,
    number,
    title: source.title,
    tagline: source.tagline,
    description: source.description,
    lessons,
    exam: makeExam(number, lessons),
  };
});