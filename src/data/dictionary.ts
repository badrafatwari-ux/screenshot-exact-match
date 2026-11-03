import type { GlossaryEntry } from "@/data/types";

/**
 * Political dictionary — 100+ essential terms.
 * Each entry: one plain sentence, a deeper explanation, a practical example.
 * Kept compact but academically grounded; fully offline.
 */
export const DICTIONARY: GlossaryEntry[] = [
  // ---------- Core ----------
  {
    term: "Politics",
    simple: "The process of deciding who gets what, when, and how in a community.",
    detailed:
      "Political scientist Harold Lasswell defined politics as the allocation of valued things — resources, rights, status — through collective decision-making. Politics exists wherever people must make binding choices together despite disagreeing about what should be done.",
    example: "A village deciding how to spend a shared budget is doing politics, even though no election is held.",
    category: "core",
  },
  {
    term: "Power",
    simple: "The ability to make others do things they would not otherwise do.",
    detailed:
      "Robert Dahl's classic definition: A has power over B to the extent that A can get B to do something B would not otherwise do. Power can rest on force, reward, legitimacy, persuasion, or control of information.",
    example: "A tax office compels payment through law; a charismatic leader moves crowds through persuasion.",
    category: "core",
  },
  {
    term: "Authority",
    simple: "Power that people recognize as rightful and are willing to obey.",
    detailed:
      "Max Weber distinguished three types of legitimate authority: traditional (custom, e.g. monarchs), charismatic (personal devotion to a leader), and legal-rational (offices and rules). Authority is power clothed in legitimacy.",
    example: "A traffic officer's command is obeyed not because of the officer's strength but because of the uniform and the law behind it.",
    category: "core",
  },
  {
    term: "Legitimacy",
    simple: "The widespread belief that a government has the right to rule.",
    detailed:
      "Legitimacy is distinct from legality and effectiveness. A regime may be legal yet widely rejected, or effective yet resented. Legitimacy lowers the cost of governing: compliant citizens need less coercion. It can be earned through performance, procedure, or tradition.",
    example: "A government that loses an election and peacefully hands over power shows its legitimacy rests on process, not on holding office.",
    category: "core",
  },
  {
    term: "Sovereignty",
    simple: "The supreme authority of a state to govern itself without external interference.",
    detailed:
      "Sovereignty has an internal face (supreme authority within the territory) and an external face (recognition by other states). Jean Bodin and later the Peace of Westphalia (1648) anchored the modern concept. It can be pooled voluntarily, as EU members do, or eroded by intervention and occupation.",
    example: "A country that sets its own laws and is recognized by the UN is sovereign; a protectorate is not fully so.",
    category: "core",
  },
  {
    term: "The state",
    simple: "A permanent institution with a government, territory, population, and the monopoly on legitimate force.",
    detailed:
      "Max Weber defined the state as the human community that successfully claims the monopoly of legitimate physical violence within a territory. The state persists across governments: administrations change, the state remains.",
    example: "Indonesia has had many presidents and regimes since 1945, but the Indonesian state continued through them all.",
    category: "core",
  },
  {
    term: "Government",
    simple: "The group of people and institutions currently running the state.",
    detailed:
      "Government is the operative part of the state at a given time — the executive, legislature, courts, and agencies in office. Governments come and go; states endure. Confusing the two is common in political rhetoric ('insulting the flag' versus criticizing ministers).",
    example: "After an election, the government changes, but the ministries, courts, and constitution of the state continue.",
    category: "core",
  },
  {
    term: "Nation",
    simple: "A community of people who feel they share a history, culture, or identity.",
    detailed:
      "Nations are 'imagined communities' (Benedict Anderson) — large groups that feel solidarity despite never meeting most of their members. A nation may or may not have its own state: stateless nations include the Kurds; some states contain many nations.",
    example: "Kurds share a national identity but are spread across Turkey, Iraq, Iran, and Syria without their own state.",
    category: "core",
  },
  {
    term: "Nation-state",
    simple: "A state whose population largely forms one nation.",
    detailed:
      "The nation-state is the classical ideal of modern politics: one people, one government, one territory. In practice almost every state is multinational, and nation-states were often built by assimilation and education rather than by pre-existing unity.",
    example: "Japan is often cited as close to a nation-state; Indonesia explicitly built one nation across hundreds of ethnic groups.",
    category: "core",
  },
  {
    term: "Political science",
    simple: "The academic study of power, government, and political behavior.",
    detailed:
      "Political science uses institutional analysis, surveys, statistics, experiments, and case studies to explain political phenomena. It distinguishes empirical questions (what happens) from normative ones (what should happen), the latter belonging partly to political philosophy.",
    example: "Studying whether compulsory voting raises turnout is empirical; arguing whether voting is a duty is normative.",
    category: "core",
  },
  // ---------- Systems ----------
  {
    term: "Democracy",
    simple: "A system where political power rests on the people, usually through free elections.",
    detailed:
      "Abraham Lincoln's formula — government of the people, by the people, for the people — captures its two demands: popular participation and popular benefit. Robert Dahl's 'polyarchy' gives measurable criteria: free and fair elections, inclusive suffrage, civil liberties, and alternative information.",
    example: "Elections alone do not make a democracy: many states hold votes that cannot change who rules.",
    category: "systems",
  },
  {
    term: "Republic",
    simple: "A state where power is held by the people through elected representatives, not a monarch.",
    detailed:
      "'Republic' comes from res publica, 'the public thing.' It contrasts with monarchy rather than with democracy — a country can be a democratic republic, an authoritarian republic, or a constitutional monarchy that is thoroughly democratic.",
    example: "The United Kingdom is a democracy but not a republic; North Korea calls itself a republic yet is neither democratic nor free.",
    category: "systems",
  },
  {
    term: "Monarchy",
    simple: "Rule by a king, queen, or emperor, usually hereditary.",
    detailed:
      "Absolute monarchies concentrate authority in the ruler; constitutional monarchies keep the monarch as a symbolic head while real power lies with elected institutions. Most surviving monarchies — Britain, Japan, the Netherlands, Spain — are of the constitutional type.",
    example: "Thailand and Morocco keep monarchs with real political weight; Sweden's king reigns but does not rule.",
    category: "systems",
  },
  {
    term: "Oligarchy",
    simple: "Rule by a small group of powerful people.",
    detailed:
      "Robert Michels' 'iron law of oligarchy' argued that large organizations inevitably develop dominant elites. Oligarchy can hide inside democratic forms: elections occur, but candidates and agendas are controlled by a narrow circle of wealth, family, or office.",
    example: "A country where a handful of families own the banks, media, and major parties is an oligarchy even if it holds elections.",
    category: "systems",
  },
  {
    term: "Plutocracy",
    simple: "Rule by the wealthy.",
    detailed:
      "Plutocracy is a subtype of oligarchy in which money itself is the title to power. It differs from corruption: the wealthy may rule legally, through campaign finance, ownership of media, or the revolving door between business and office.",
    example: "When policy reliably follows donors' interests despite majority opinion, critics call the system a plutocracy.",
    category: "systems",
  },
  {
    term: "Theocracy",
    simple: "Rule in the name of a religion, with religious law as state law.",
    detailed:
      "In a theocracy, religious texts or clergy hold supreme authority; political legitimacy flows from the divine rather than from the people. Iran's system mixes elected offices with unelected religious supervision, showing theocratic-democratic hybrids exist.",
    example: "Vatican City is a clear theocracy; Iran's Guardian Council vets all laws and candidates on religious grounds.",
    category: "systems",
  },
  {
    term: "Authoritarianism",
    simple: "Rule with limited political freedom and little accountability to citizens.",
    detailed:
      "Authoritarian regimes hold power without meaningful competition: elections are absent, managed, or meaningless. They leave much social and economic life alone as long as politics is not challenged — unlike totalitarianism, which seeks the whole person.",
    example: "Franco's Spain allowed private business and church life but crushed political opposition.",
    category: "systems",
  },
  {
    term: "Totalitarianism",
    simple: "A regime that seeks total control of politics, economy, culture, and private belief.",
    detailed:
      "Hannah Arendt and Carl Friedrich identified features: one official ideology, a single mass party, terror, media monopoly, and mobilized rather than apathetic populations. The category was built on Nazi Germany and Stalinist USSR.",
    example: "North Korea's all-encompassing ideology and surveillance of daily life is the standard modern example.",
    category: "systems",
  },
  {
    term: "Dictatorship",
    simple: "Government by one person or small group without effective constitutional limits.",
    detailed:
      "Dictatorships vary: military juntas, personalist rulers, single parties. What they share is the absence of enforceable limits — no court, election, or legislature can remove the ruler against their will.",
    example: "A general who seizes power, suspends the constitution, and rules by decree leads a dictatorship.",
    category: "systems",
  },
  {
    term: "Hybrid regime",
    simple: "A system combining democratic institutions with authoritarian practice.",
    detailed:
      "Scholars describe 'competitive authoritarianism' (Levitsky and Way): elections are real contests but the field is tilted by media control, harassment, and unequal resources. Most regimes today are hybrids rather than clean ideal types.",
    example: "A country with opposition parties and real voting, but where the incumbent controls TV and courts, is a hybrid regime.",
    category: "systems",
  },
  {
    term: "Federalism",
    simple: "A system dividing power between a national government and regional governments.",
    detailed:
      "In a federation, both levels derive authority from the constitution, neither can abolish the other, and regions usually have their own legislatures. Federalism suits large or diverse societies by letting regions handle local matters.",
    example: "Germany, the USA, and Australia are federations; Indonesia's 'Big Bang' decentralization of 2001 created a strong regional layer without formally becoming a federation.",
    category: "systems",
  },
  {
    term: "Unitary state",
    simple: "A state where one central government holds ultimate authority.",
    detailed:
      "Unitary states can still delegate powers to localities, but what the center gives the center can take back. France, Japan, and most countries are unitary; the trend in Asia has been decentralization within unitary forms.",
    example: "Indonesia's provinces and regencies exercise broad powers, yet the constitution keeps sovereignty with the unitary state.",
    category: "systems",
  },
  {
    term: "Separation of powers",
    simple: "Dividing government into legislative, executive, and judicial branches.",
    detailed:
      "Montesquieu argued liberty requires that no single body make, execute, and judge the laws. The branches are separated so each checks the others — but in parliamentary systems the legislature and executive are closely fused, showing separation is a spectrum.",
    example: "In the USA, Congress makes law, the president executes it, and courts review it; each can block the others.",
    category: "power",
  },
  {
    term: "Checks and balances",
    simple: "Each branch of government having powers to limit the others.",
    detailed:
      "The US Constitution's design lets the president veto bills, Congress override vetoes and impeach, and the Senate confirm appointments. The aim is 'ambition made to counteract ambition' (James Madison) — ambition checked by ambition.",
    example: "A court striking down a government decree is a check; a legislature confirming judges balances appointment power.",
    category: "power",
  },
  {
    term: "Constitution",
    simple: "The fundamental law setting up a state's institutions and citizens' rights.",
    detailed:
      "Constitutions may be written (Indonesia, USA) or unwritten but accumulated (UK). A constitution matters only as much as it is enforced: many states have fine texts that courts and rulers routinely ignore.",
    example: "Indonesia's 1945 Constitution defines the presidency, the legislature, and the rights of citizens.",
    category: "power",
  },
  {
    term: "Rule of law",
    simple: "The principle that everyone, including rulers, is bound by clear, equally applied law.",
    detailed:
      "Rule of law requires general, prospective, and stable rules, independent courts, and no one above the law. It is weaker than 'rule by law,' where laws exist but serve whoever wields power.",
    example: "A minister punished for corruption by ordinary courts shows rule of law; an official above prosecution does not.",
    category: "power",
  },
  // ---------- Power & elites ----------
  {
    term: "Elite theory",
    simple: "The view that every society is effectively run by a small organized minority.",
    detailed:
      "Gaetano Mosca, Vilfredo Pareto, and Robert Michels argued that elites are inevitable because organization and expertise concentrate power. Modern elite theorists study how elites circulate and whether they are accountable between elections.",
    example: "Studies showing that policy outcomes track the preferences of the wealthy more than average voters are read as elite-theory evidence.",
    category: "power",
  },
  {
    term: "Political dynasty",
    simple: "Control of public office by one family across generations.",
    detailed:
      "Dynasties convert electoral democracy into a family asset: name recognition, networks, and wealth make elections a formality. They are common in the Philippines, Indonesia, India, and many other democracies with weak party institutions.",
    example: "When a governor's spouse, children, and siblings each hold local offices, analysts speak of a political dynasty.",
    category: "power",
  },
  {
    term: "Cronyism",
    simple: "Favoring friends and associates in appointments and contracts.",
    detailed:
      "Cronyism is favoritism based on personal relationships rather than merit. It often coexists with nepotism (favoring relatives) and thrives where oversight is weak and appointments are discretionary.",
    example: "A ministry awarding construction contracts only to the minister's golf partners is cronyism.",
    category: "power",
  },
  {
    term: "Nepotism",
    simple: "Giving jobs or advantages to relatives.",
    detailed:
      "Nepotism undermines merit and public trust because office is used for family gain. Many public services forbid hiring close relatives into supervisory chains for exactly this reason.",
    example: "A mayor appointing his brother as head of procurement is textbook nepotism.",
    category: "power",
  },
  {
    term: "Lobbying",
    simple: "Organized efforts to persuade officials to adopt particular policies.",
    detailed:
      "Lobbying is legal and can inform policy, but it skews influence toward organized, wealthy interests. Democracies regulate it with registers, disclosure rules, and spending limits; effectiveness of those rules varies widely.",
    example: "A farmers' union meeting legislators to explain a subsidy bill is lobbying; so is a corporate firm's lawyers drafting amendments.",
    category: "power",
  },
  {
    term: "State capture",
    simple: "When private interests so influence the state that public policy serves them.",
    detailed:
      "The term arose from 1990s Russia, where oligarchs effectively bought regulation. State capture goes beyond corruption of individuals: it is corruption of the rule-making process itself, often legalized through lobbying and party finance.",
    example: "An industry that drafts its own regulatory law and staffs the watchdog agency has captured the state in that sector.",
    category: "power",
  },
  {
    term: "Informal power",
    simple: "Influence that operates outside official positions and rules.",
    detailed:
      "Formal power comes from office; informal power comes from money, networks, expertise, media, or street mobilization. Analysts must watch both: a legislature's formal authority may be outweighed by an unelected business council.",
    example: "An elder statesman with no post who phones ministers and gets decisions reversed exercises informal power.",
    category: "power",
  },
  {
    term: "Legitimation",
    simple: "The ways rulers try to make their rule accepted as right.",
    detailed:
      "Rulers legitimate through procedure (elections), performance (growth, order), tradition (coronation), ideology, and nationalism. When performance legitimacy fades, regimes often lean harder on nationalism or fear.",
    example: "A government that campaigns on record growth is claiming performance legitimacy.",
    category: "power",
  },
  {
    term: "Coercion",
    simple: "Forcing compliance through threats or force.",
    detailed:
      "Coercion is power's bluntest instrument and its most expensive: surveillance, police, and prisons cost money and breed resentment. Stable rule mixes coercion with legitimacy, since coercion alone invites resistance.",
    example: "Riot police clearing a protest coerce; the same state funding schools seeks consent.",
    category: "power",
  },
  // ---------- Ideology ----------
  {
    term: "Ideology",
    simple: "A connected set of ideas about how society should be organized.",
    detailed:
      "Ideologies bundle beliefs about human nature, freedom, equality, and the role of the state into policy orientations. They help people interpret events quickly, at the cost of ignoring inconvenient details.",
    example: "Someone who believes markets work best and welfare weakens effort is expressing a broadly conservative ideology.",
    category: "ideology",
  },
  {
    term: "Liberalism",
    simple: "The tradition centered on individual liberty, rights, and limited government.",
    detailed:
      "From John Locke through John Stuart Mill, liberalism defended consent of the governed, tolerance, private life, and markets — while modern liberals (T.H. Green, Rawls) added that real freedom requires social preconditions like education and healthcare.",
    example: "Free speech, free courts, and protection of minority conscience are liberal commitments across parties.",
    category: "ideology",
  },
  {
    term: "Conservatism",
    simple: "The tradition favoring inherited institutions, gradual change, and social order.",
    detailed:
      "Edmund Burke defended institutions that had stood the test of time and warned against abstract redesigns of society. Modern conservatism often combines market economics, social caution, and respect for religion and nation.",
    example: "Opposing a sweeping constitutional rewrite in favor of incremental reform is a conservative instinct.",
    category: "ideology",
  },
  {
    term: "Socialism",
    simple: "The view that major economic resources should be socially owned or controlled for equality.",
    detailed:
      "Socialism comes in democratic and revolutionary strands. Democratic socialism pursues public goals through elections and mixed economies; revolutionary socialism sought to replace capitalism outright. What unites them is the claim that inequality is a political choice, not natural law.",
    example: "A party proposing public ownership of electricity grids while keeping elections is in the democratic-socialist family.",
    category: "ideology",
  },
  {
    term: "Communism",
    simple: "The Marxist project of a classless, stateless society with common ownership.",
    detailed:
      "Marx predicted capitalism's internal contradictions would lead workers to abolish private ownership of production. States calling themselves communist actually built party-state control of the economy — which critics say contradicted the theory's promise.",
    example: "The USSR abolished most private production but created a new ruling party elite, a fact central to debates about Marxism.",
    category: "ideology",
  },
  {
    term: "Social democracy",
    simple: "Capitalism tamed by strong welfare states and worker rights through democracy.",
    detailed:
      "Social democrats accept markets and elections but use taxation, regulation, and universal services (health, education, pensions) to secure equality and security. Nordic countries are the reference case.",
    example: "Sweden's combination of free enterprise and universal healthcare is social democracy in practice.",
    category: "ideology",
  },
  {
    term: "Nationalism",
    simple: "Loyalty to one's nation and the demand that it have political self-determination.",
    detailed:
      "Nationalism can be civic (belonging defined by citizenship and values) or ethnic (defined by ancestry and culture). It built modern states and still mobilizes voters — and can harden into exclusion and conflict.",
    example: "Indonesia's founding Pancasila nationalism sought a civic identity above hundreds of ethnic identities.",
    category: "ideology",
  },
  {
    term: "Fascism",
    simple: "A far-right ideology of ultranationalism, dictatorial leader worship, and violence against enemies.",
    detailed:
      "Fascism rejects democracy and liberal rights, glorifies the nation or race as superior, and demands mass mobilization under a single leader. Mussolini's Italy and Hitler's Germany are the defining cases; scholarly debate continues on its precise definition.",
    example: "A movement demanding one leader, one party, suppression of dissent, and scapegoating of minorities displays fascist features.",
    category: "ideology",
  },
  {
    term: "Anarchism",
    simple: "The belief that society can and should organize without a coercive state.",
    detailed:
      "Anarchists from Proudhon to Kropotkin opposed hierarchy and concentrated authority, favoring voluntary cooperation, federations of local communes, and mutual aid. They differ sharply on whether violence is acceptable.",
    example: "Anarchists ran self-organized schools and militias in civil-war Spain (1936–39).",
    category: "ideology",
  },
  {
    term: "Environmentalism (politics)",
    simple: "Political thought giving ecological limits and sustainability central place.",
    detailed:
      "Green politics argues economies exist inside ecosystems, so growth must respect planetary boundaries. It spans reformist strands (green taxation, regulation) and radical ones (degrowth, deep ecology), and now shapes mainstream policy on climate.",
    example: "A carbon tax with dividends to citizens is a market-compatible environmentalist policy.",
    category: "ideology",
  },
  {
    term: "Populism",
    simple: "A style of politics claiming a virtuous 'pure people' versus a corrupt elite.",
    detailed:
      "Populism is thin-centered: it needs a host from left or right. It promises unmediated rule by the people, distrusts expert and judicial checks, and tends toward majoritarianism. It can revive participation or corrode institutions, depending on practice.",
    example: "A leader who says 'only I represent the real people; courts and journalists are the corrupt elite' is using populist framing.",
    category: "ideology",
  },
  {
    term: "Feminism (political)",
    simple: "The movement and theory seeking equal political, social, and economic standing for women.",
    detailed:
      "Political feminism spans suffrage struggles, equal-pay law, representation campaigns, and analysis of how 'private' life (marriage, care work) is structured by power. Distinct waves pursued legal equality, social equality, and intersectional inclusion.",
    example: "Winning women's suffrage in 1893 (New Zealand) was political feminism's first great legal victory.",
    category: "ideology",
  },
  {
    term: "Left and right",
    simple: "Shorthand for the main axis of ideological conflict: equality versus hierarchy.",
    detailed:
      "The terms come from the French Assembly's 1789 seating. Broadly, the left prioritizes equality and state intervention; the right prioritizes tradition, markets, and order. Many issues — corruption, freedom of speech — cross the axis, and single left–right scores flatten reality.",
    example: "A religious conservative and a secular socialist may agree on anticorruption while differing almost everywhere else.",
    category: "ideology",
  },
  // ---------- Democracy & elections ----------
  {
    term: "Suffrage",
    simple: "The right to vote.",
    detailed:
      "Suffrage was expanded in waves: propertyless men, then women, then lower ages and wider residency rights. Debates continue over prisoner voting, age limits, and whether voting should be compulsory as a civic duty.",
    example: "New Zealand extended suffrage to women in 1893; Switzerland only in 1971 federally.",
    category: "democracy",
  },
  {
    term: "Universal suffrage",
    simple: "Voting rights for all adult citizens regardless of wealth, sex, race, or class.",
    detailed:
      "Universal suffrage was the great democratic breakthrough, achieved mostly between 1890 and 1965. Even where it exists formally, barriers like registration complexity or violence can hollow it out.",
    example: "The 1965 Voting Rights Act attacked barriers that made universal suffrage theoretical for many Black Americans.",
    category: "democracy",
  },
  {
    term: "Direct democracy",
    simple: "Citizens deciding issues themselves by referendum or initiative.",
    detailed:
      "Swiss cantons and California use referendums and initiatives extensively. Direct democracy can clarify the public will on major issues but struggles with complexity, turnout, and well-funded campaigns.",
    example: "A national referendum on an independence question is direct democracy; so is a local vote on a school bond.",
    category: "democracy",
  },
  {
    term: "Representative democracy",
    simple: "Citizens electing officials who then make decisions on their behalf.",
    detailed:
      "Representation solves the scale problem of modern states. Its quality depends on electoral fairness, accountability between elections, and how faithfully representatives track constituents — debates rage about whether they should follow or use judgment.",
    example: "Voting for a parliament that then writes the tax code is representative democracy in action.",
    category: "democracy",
  },
  {
    term: "Proportional representation",
    simple: "An electoral system giving seats roughly in proportion to votes.",
    detailed:
      "PR systems (party lists, single transferable vote) favor multi-party parliaments and coalition governments. They reflect votes more accurately but can give small parties leverage and slow government formation.",
    example: "A party with 20% of votes winning about 20% of seats is proportional representation at work.",
    category: "democracy",
  },
  {
    term: "First-past-the-post",
    simple: "The winner in each district is whoever gets the most votes — no majority required.",
    detailed:
      "FPTP produces strong single-party governments and clear local accountability, but wastes votes for losers and over-rewards regionally concentrated parties. It can hand total power to a party most voters opposed.",
    example: "A party winning 35% in every district takes every seat and 100% of power under FPTP.",
    category: "democracy",
  },
  {
    term: "Gerrymandering",
    simple: "Drawing electoral district boundaries to favor one party.",
    detailed:
      "Named after Massachusetts Governor Elbridge Gerry (1812). Techniques include 'packing' opponents into few districts and 'cracking' them across many. Most democracies use independent commissions to reduce it.",
    example: "A district snaking along one road to gather opposition voters into a single seat is a gerrymander.",
    category: "democracy",
  },
  {
    term: "Political party",
    simple: "An organized group seeking power by winning elections and governing together.",
    detailed:
      "Parties recruit candidates, aggregate interests, and organize legislatures. Weak parties encourage personalism and dynasties because individual names, not programmatic platforms, win votes.",
    example: "Where parties are mere election vehicles for one person, policies flip when that person retires.",
    category: "democracy",
  },
  {
    term: "Political participation",
    simple: "Any activity intended to influence who rules or what they do.",
    detailed:
      "Participation ranges from voting, campaigning, and protest to petitions, deliberative forums, and online mobilization. Socioeconomic status strongly predicts who participates — a central equality problem for democracies.",
    example: "Joining a demonstration against a new dam is participation, as is writing to your representative.",
    category: "democracy",
  },
  {
    term: "Majority rule",
    simple: "The decision rule giving victory to more than half of votes.",
    detailed:
      "Majority rule treats voters equally and produces clear winners, but without minority rights it can become 'majority tyranny.' Constitutional democracies therefore protect speech, courts, and participation rights against transient majorities.",
    example: "A 51% majority banning a religion would violate minority rights; democracy is more than vote-counting.",
    category: "democracy",
  },
  {
    term: "Minority rights",
    simple: "Protections ensuring non-majority groups keep their freedoms and voice.",
    detailed:
      "Minority rights include individual liberties plus group protections — language, religion, representation guarantees. They are tested most sharply when a stable majority prefers to override them.",
    example: "Reserving parliamentary seats for indigenous communities protects minority voice.",
    category: "democracy",
  },
  {
    term: "Accountability",
    simple: "The obligation of officeholders to answer for their actions and face consequences.",
    detailed:
      "Accountability has electoral (voters), legal (courts), political (legislatures), and social (media, civil society) channels. Strong accountability requires multiple channels working at once; a single one is easily captured.",
    example: "An auditor-general's report leading to a minister's resignation shows vertical accountability working.",
    category: "democracy",
  },
  {
    term: "Civil society",
    simple: "Organized social life outside the state and the market — associations, unions, NGOs, faith groups.",
    detailed:
      "Tocqueville saw associations as schools of democracy. Civil society watches government, delivers services, and builds trust, but can also be captured, funded by patrons, or captured by illiberal agendas.",
    example: "A watchdog NGO publishing procurement analysis strengthens accountability without holding office.",
    category: "democracy",
  },
  {
    term: "Civil liberties",
    simple: "Personal freedoms the state must not violate — speech, conscience, assembly, due process.",
    detailed:
      "Civil liberties are the legal shield around individuals: expression, belief, association, movement, fair trial. They bind governments even when majorities would prefer otherwise, and are the first target of authoritarian consolidation.",
    example: "A court releasing a journalist arrested for criticizing a mayor defends civil liberties.",
    category: "democracy",
  },
  {
    term: "Deliberative democracy",
    simple: "A model emphasizing reasoned public discussion before decisions.",
    detailed:
      "Deliberative theorists argue that democracy improves when citizens weigh arguments together rather than merely vote. Instruments include citizens' assemblies, deliberative polls, and participatory budgeting.",
    example: "Ireland's citizens' assembly informed the 2018 abortion referendum after months of structured deliberation.",
    category: "democracy",
  },
  {
    term: "Political socialization",
    simple: "The lifelong process through which people acquire political beliefs.",
    detailed:
      "Family, school, media, peers, and formative events shape political identities. Early experience leaves durable marks — cohorts who lived through war or hyperinflation vote differently for decades.",
    example: "Voters who grew up under authoritarian rule often show distinctive attitudes toward authority and protest.",
    category: "democracy",
  },
  // ---------- Government & institutions ----------
  {
    term: "Presidential system",
    simple: "A system with a separately elected president who heads the government.",
    detailed:
      "Presidents combine head-of-state and head-of-government roles with fixed terms. The separation of powers is strong, which limits both tyranny and flexibility — divided government can produce deadlock, as American shutdowns show.",
    example: "Indonesia's directly elected president governs alongside a separately elected legislature.",
    category: "systems",
  },
  {
    term: "Parliamentary system",
    simple: "A system where the government must keep the confidence of the parliament.",
    detailed:
      "The executive (prime minister and cabinet) emerges from and answers to the legislature, which can remove it by a vote of no confidence. This fusion enables swift action and clear responsibility, at the cost of less independence between branches.",
    example: "When a UK government loses a confidence vote, an election or a new government follows.",
    category: "systems",
  },
  {
    term: "Semi-presidential system",
    simple: "A system with both a president and a prime minister sharing executive power.",
    detailed:
      "France, Portugal, and many post-communist states use the model. Power shifts with election outcomes and coalitions — 'cohabitation' occurs when the president and parliamentary majority come from rival camps.",
    example: "France's president directs foreign policy while the prime minister manages domestic day-to-day government.",
    category: "systems",
  },
  {
    term: "Legislature",
    simple: "The branch that debates and passes laws.",
    detailed:
      "Legislatures also approve budgets, oversee the executive, and represent constituencies. Unicameral parliaments have one chamber; bicameral ones (senates, houses of review) add a second for regional balance or slower revision.",
    example: "Indonesia's DPR passes laws; the DPD represents regions in a complementary chamber.",
    category: "power",
  },
  {
    term: "Executive",
    simple: "The branch that implements and administers the law — president, prime minister, cabinet, agencies.",
    detailed:
      "Modern executives dominate agendas because they command information, expertise, and speed. Legislatures and courts exist partly to slow and check this dominance, particularly on taxation and rights.",
    example: "A cabinet issuing implementing regulations for a new education act is the executive at work.",
    category: "power",
  },
  {
    term: "Judiciary",
    simple: "The branch of courts that interprets and applies the law.",
    detailed:
      "Judicial independence — secure tenure, protected budgets, transparent appointment — determines whether courts can rule against powerful parties. Constitutional courts add review of legislation against the constitution.",
    example: "Indonesia's Constitutional Court can strike laws passed by the DPR.",
    category: "power",
  },
  {
    term: "Judicial review",
    simple: "Courts' power to declare laws or actions unconstitutional.",
    detailed:
      "Established by Marbury v. Madison (1803) in the USA and now widespread. Critics worry about unelected judges vetoing elected choices; defenders reply that courts protect the constitution against transient majorities.",
    example: "A supreme court voiding a censorship law as unconstitutional exercises judicial review.",
    category: "power",
  },
  {
    term: "Bureaucracy",
    simple: "The professional administration that executes government business.",
    detailed:
      "Weber described bureaucracy as rules-based, hierarchical, merit-recruited, and impersonal — the machinery making modern governance possible. Its pathologies are red tape, rigidity, and empire-building.",
    example: "Processing passports, licenses, and taxes is bureaucracy; so is the rulebook each officer must follow.",
    category: "power",
  },
  {
    term: "Public policy",
    simple: "Government's chosen course of action on a problem, from agenda to evaluation.",
    detailed:
      "The policy cycle runs: agenda-setting, formulation, adoption, implementation, evaluation. Implementation is where good intentions often fail — street-level officials reinterpret rules, budgets thin out, and coordination breaks.",
    example: "A school nutrition program adopted with fanfare can fail if delivery budgets and logistics are never funded.",
    category: "power",
  },
  {
    term: "Public administration",
    simple: "The field and practice of running government services.",
    detailed:
      "Public administration covers organization, personnel, budgeting, procurement, and service delivery. Reform waves have included New Public Management (market-style incentives) and a newer focus on integrity and co-production with citizens.",
    example: "Digitalizing a licensing office so permits take days rather than months is public administration reform.",
    category: "power",
  },
  {
    term: "Devolution",
    simple: "Transferring powers from central to lower levels of government.",
    detailed:
      "Devolution aims to bring decisions closer to citizens and match services to local needs. It requires fiscal resources and capacity at the local level, or devolved functions become unfunded mandates.",
    example: "Indonesia's 2001 decentralization devolved most service delivery to regencies and municipalities.",
    category: "power",
  },
  {
    term: "Constituency",
    simple: "The body of voters an elected official represents.",
    detailed:
      "Constituency service — helping individuals navigate the state — is often what voters reward most, sometimes more than policy votes. The tension between national duty and local favor is permanent in representative politics.",
    example: "A legislator who intervenes to fix a veteran's pension file is serving her constituency directly.",
    category: "power",
  },
  {
    term: "Impeachment",
    simple: "The constitutional process for charging and removing top officials.",
    detailed:
      "Impeachment is a political-legal mechanism for severe misconduct: legislatures charge, and another body or process convicts. Its actual use is rare; its credible existence disciplines executives.",
    example: "Brazil's president Dilma Rousseff was removed by impeachment in 2016 over budget accounting.",
    category: "power",
  },
  {
    term: "Veto",
    simple: "The formal power to block a decision by another branch.",
    detailed:
      "Executive vetoes are the classic check on legislatures; some constitutions give legislatures override powers. Package vetoes, line-item vetoes, and suspensive vetoes vary in strength across systems.",
    example: "A president returning a bill unsigned forces parliament to pass it again with a supermajority.",
    category: "power",
  },
  // ---------- Problems & manipulation ----------
  {
    term: "Corruption",
    simple: "Abuse of entrusted power for private gain.",
    detailed:
      "Transparency International's definition spans bribery, embezzlement, nepotism, and trading in influence. Corruption taxes citizens invisibly, distorts budgets toward kickback-friendly projects, and erodes trust in every institution it touches.",
    example: "A procurement officer awarding contracts in exchange for 10% kickbacks commits grand corruption.",
    category: "power",
  },
  {
    term: "Clientelism",
    simple: "Trading goods or favors for political support, person by person.",
    detailed:
      "Clientelism turns citizens into clients: votes or loyalty exchanged for jobs, food, or protection. It undermines programmatic politics because policy promises are replaced by personal deals.",
    example: "A local boss handing out sacks of rice weeks before an election, with a list of who received them, practices clientelism.",
    category: "power",
  },
  {
    term: "Patronage",
    simple: "Using appointments and resources to reward political supporters.",
    detailed:
      "Patronage systems bind administrations to networks of obligation. Where merit systems are weak, careers depend on loyalty rather than competence, degrading the entire service.",
    example: "Filling a state enterprise's board with campaign donors is patronage.",
    category: "power",
  },
  {
    term: "Propaganda",
    simple: "Systematic persuasion designed to shape belief, often selective or deceptive.",
    detailed:
      "Propaganda works through framing, repetition, emotional symbols, and selective facts. Not all persuasion is propaganda; the label implies manipulation and asymmetry between sender and audience.",
    example: "State television airing only triumphant war footage while censoring casualties spreads propaganda.",
    category: "power",
  },
  {
    term: "Disinformation",
    simple: "False information spread deliberately to deceive.",
    detailed:
      "Disinformation differs from misinformation (falsehood shared without intent) and malinformation (true but harmful material weaponized). Social platforms accelerate all three; fact-checking and media literacy are the main counters.",
    example: "Fabricated quotes attributed to a candidate days before voting are election disinformation.",
    category: "power",
  },
  {
    term: "Misinformation",
    simple: "False or misleading information shared without deceptive intent.",
    detailed:
      "Misinformation spreads through genuine error, rumor, and biased selection. Corrections often fail to undo first impressions, which is why 'pre-bunking' — teaching manipulation techniques in advance — has become a favored tool.",
    example: "A grandparent forwarding an old, debunked health rumor sincerely is spreading misinformation.",
    category: "power",
  },
  {
    term: "Polarization",
    simple: "The division of a society into opposing political blocs with little common ground.",
    detailed:
      "Ideological polarization separates beliefs; affective polarization makes citizens dislike each other personally. Both erode the willingness to lose gracefully — the habit democracies cannot live without.",
    example: "Polls showing each bloc viewing the other as a 'threat to the nation' indicate affective polarization.",
    category: "power",
  },
  {
    term: "Censorship",
    simple: "State or platform control over what can be said or published.",
    detailed:
      "Censorship ranges from prior restraint and licensing to subtle pressure, algorithmic suppression, and self-censorship induced by fear. Democracies restrict some speech (incitement, defamation) — the fight is over where limits lie and who decides.",
    example: "Blocking a news site before an election is direct censorship; journalists' private caution afterward is self-censorship.",
    category: "power",
  },
  {
    term: "Abuse of power",
    simple: "Using office for purposes beyond its lawful and moral mandate.",
    detailed:
      "Abuse covers corruption, repression, and lawful-seeming acts aimed at private ends. Anti-abuse tools include ombudsman offices, judicial review, audit institutions, and free media.",
    example: "Directing police to investigate a personal critic is abuse of power even if each step is procedurally proper.",
    category: "power",
  },
  {
    term: "Whistleblower",
    simple: "An insider exposing wrongdoing within their own organization.",
    detailed:
      "Whistleblowers surface what oversight cannot see. Protection laws aim to shield them from retaliation; their absence turns disclosure into a personal gamble with careers and freedom.",
    example: "An official leaking proof of rigged procurement to an anti-corruption commission acts as a whistleblower.",
    category: "power",
  },
  {
    term: "Fearmongering",
    simple: "Persuading through exaggerated threats.",
    detailed:
      "Fear widens support for security measures and strongmen. Classic research after 9/11 showed threat primes raising support for restrictive policies. Healthy politics requires asking for evidence proportionate to the alarm.",
    example: "A campaign ad implying opponents will unleash crime waves uses fearmongering rather than evidence.",
    category: "power",
  },
  {
    term: "Scapegoating",
    simple: "Blaming a group for problems it did not cause.",
    detailed:
      "Scapegoating redirects frustration onto vulnerable targets — minorities, migrants, foreign countries. It offers emotional relief and simplified narratives while leaving real causes untouched.",
    example: "Blaming an ethnic minority for unemployment is scapegoating; inflation's causes are macroeconomic.",
    category: "power",
  },
  // ---------- International ----------
  {
    term: "International relations",
    simple: "The study of how states and global actors interact without a world government.",
    detailed:
      "IR's central problem is anarchy: no authority stands above states. Theories offer different answers — realism (power), liberalism (institutions and interdependence), constructivism (ideas and identity) shape whether conflict or cooperation follows.",
    example: "Explaining trade wars and alliances requires IR: who wants what, who can enforce agreements, who trusts whom.",
    category: "international",
  },
  {
    term: "Diplomacy",
    simple: "The practice of states negotiating and communicating without force.",
    detailed:
      "Diplomacy runs through ambassadors, treaties, summits, and quiet backchannels. Its methods — representation, negotiation, signaling, mediation — keep disputes soluble when war would be catastrophic.",
    example: "Months of quiet talks producing a hostage release are diplomacy succeeding invisibly.",
    category: "international",
  },
  {
    term: "Geopolitics",
    simple: "How geography shapes power and conflict between states.",
    detailed:
      "Position, resources, sea access, and chokepoints (straits, canals) drive strategy. Halford Mackinder's heartland theory and Alfred Mahan's sea-power theory remain influential, if contested, frames.",
    example: "Competition over South China Sea shipping lanes is geopolitics in action.",
    category: "international",
  },
  {
    term: "Hard power",
    simple: "Influence through military force and economic sanctions.",
    detailed:
      "Hard power compels: invasion, blockade, tariffs, aid cutoffs. It works fastest but breeds resentment and resistance, and its costs rise as targets mobilize counter-coalitions.",
    example: "Sanctions cutting a country from global banking are economic hard power.",
    category: "international",
  },
  {
    term: "Soft power",
    simple: "Influence through attraction — culture, values, and credible policies.",
    detailed:
      "Joseph Nye coined the term: getting others to want what you want. Universities, films, language, aid, and diplomatic example attract; attraction must be earned, not commanded.",
    example: "Global demand for a country's universities, films, and pop culture converts into diplomatic goodwill.",
    category: "international",
  },
  {
    term: "Balance of power",
    simple: "A distribution of strength preventing any single state from dominating.",
    detailed:
      "Balancing can be internal (armament) or external (alliances). The 19th-century European Concert is the classic managed balance; its failure preceded both world wars.",
    example: "Smaller states forming a defensive alliance to deter a regional giant are balancing.",
    category: "international",
  },
  {
    term: "International organization",
    simple: "Permanent bodies where states cooperate — the UN, WTO, ASEAN, EU.",
    detailed:
      "IOs reduce transaction costs, set standards, and monitor compliance. They possess only the power members grant them, so sovereignty remains the bedrock — cooperation is voluntary coordination, not world government.",
    example: "ASEAN's consensus rule keeps all members at the table but slows binding action.",
    category: "international",
  },
  {
    term: "Treaty",
    simple: "A binding written agreement between states.",
    detailed:
      "Treaties create obligations under international law; ratification makes them domestic law in many systems. Enforcement depends on reciprocity, reputation, and institutions rather than a global police force.",
    example: "The Paris Agreement binds signatories to climate pledges, enforced mainly through review and reputation.",
    category: "international",
  },
  {
    term: "Just war theory",
    simple: "Criteria for when war is permissible and how it may be fought.",
    detailed:
      "Jus ad bellum asks whether going to war is justified (just cause, last resort, legitimate authority); jus in bello governs conduct (discrimination, proportionality). Augustine and Aquinas seeded it; it still shapes law and debate.",
    example: "Debates over whether intervention met 'last resort' are just-war reasoning.",
    category: "international",
  },
  {
    term: "Peacekeeping",
    simple: "Deploying neutral forces to monitor ceasefires and support peace processes.",
    detailed:
      "UN peacekeeping grew from observation missions to complex multidimensional operations. Success depends on consent of the parties, impartiality, and credible force when needed.",
    example: "UN blue helmets separating armies along a ceasefire line have kept peace for decades in Cyprus.",
    category: "international",
  },
  {
    term: "Human rights",
    simple: "Rights every person holds simply by being human, above state permission.",
    detailed:
      "The 1948 Universal Declaration set the modern canon: dignity, equality, liberty, and social rights. Enforcement is uneven — global courts and treaties exist, but compliance depends heavily on domestic politics.",
    example: "A court freeing a detainee held without charge applies the human right to due process.",
    category: "international",
  },
  {
    term: "Refugee",
    simple: "A person forced to flee their country due to persecution or war.",
    detailed:
      "The 1951 Refugee Convention defines the status and the principle of non-refoulement — no return to danger. Distinctions matter: refugees flee across borders; internally displaced persons stay within theirs; migrants move by choice.",
    example: "Someone fleeing ethnic persecution to a neighboring state qualifies for refugee protection.",
    category: "international",
  },
  {
    term: "Sanctions",
    simple: "Punitive economic or diplomatic measures to change another state's behavior.",
    detailed:
      "Sanctions span targeted asset freezes to comprehensive embargoes. Evidence shows they work best with multilateral support, clear demands, and enforcement — and they often hardest-hit ordinary people, raising ethical questions.",
    example: "Coordinated sanctions freezing a leadership's overseas assets aim at behavior change, not at the population.",
    category: "international",
  },
  {
    term: "War",
    simple: "Organized armed conflict between political groups.",
    detailed:
      "Clausewitz defined war as politics continued by other means. Modern war research emphasizes duration, civil wars' recurrence, and the declining but still devastating frequency of interstate war.",
    example: "Trench warfare in 1914–18 showed how industrial capacity and alliances shape war's scale.",
    category: "international",
  },
  {
    term: "Deterrence",
    simple: "Preventing attack by threatening unacceptable retaliation.",
    detailed:
      "Deterrence requires capability, credibility, and communication. Nuclear deterrence kept great-power peace by terror of annihilation; critics note it depends on leaders' rationality remaining permanent.",
    example: "NATO's doctrine that an attack on one member draws collective response deters adventurers.",
    category: "international",
  },
  // ---------- Everyday ----------
  {
    term: "Taxation",
    simple: "Compulsory payments funding government activity.",
    detailed:
      "Taxes embody politics: who pays, how much, and for what. Debates balance efficiency (minimizing distortion), equity (ability to pay), and simplicity. 'No taxation without representation' made tax consent the seed of representative government.",
    example: "A VAT rise hitting household budgets triggers political fights over who should bear the burden.",
    category: "everyday",
  },
  {
    term: "Inflation",
    simple: "A sustained rise in the general price level, eroding money's value.",
    detailed:
      "Inflation redistributes — debtors gain, savers lose — and becomes politically explosive when it hits food and fuel. Central bank independence exists partly to keep politicians from printing money before elections.",
    example: "A 10% annual inflation halves purchasing power in about seven years, quietly.",
    category: "everyday",
  },
  {
    term: "Subsidy",
    simple: "Government support lowering the cost of a good or service.",
    detailed:
      "Subsidies protect incomes (fuel, food, farmers) but strain budgets, distort markets, and often flow disproportionately to those who consume most. Reform is politically dangerous because losses are concentrated and loud, gains diffuse.",
    example: "Fuel subsidies in many countries mostly benefit car owners rather than the poorest households.",
    category: "everyday",
  },
  {
    term: "Public goods",
    simple: "Things everyone can use, which markets underprovide — like clean air, street lighting, defense.",
    detailed:
      "Public goods are non-excludable and non-rival: my use does not consume yours, and no one can be kept out. Free-riding makes voluntary funding fail, which is why states tax to provide them.",
    example: "Lighthouses and flood defenses show the pattern: everyone benefits whether or not they paid.",
    category: "everyday",
  },
  {
    term: "Welfare state",
    simple: "Government provision of social protection — health, pensions, unemployment, education.",
    detailed:
      "Welfare states built in the 20th century socialize risks that individuals once faced alone. Designs differ: universal (Nordic), insurance-based (Bismarckian), means-tested (liberal). All face aging populations and fiscal pressure.",
    example: "Universal free healthcare regardless of income is a core welfare-state feature.",
    category: "everyday",
  },
  {
    term: "Social contract",
    simple: "The implicit agreement exchanging obedience for protection and order.",
    detailed:
      "Hobbes, Locke, and Rousseau used the contract device to justify (or limit) state power. Modern usage includes the welfare bargain: taxes and compliance in exchange for security and services.",
    example: "Citizens paying taxes and following laws, expecting schools, roads, and safety in return, enact a social contract.",
    category: "everyday",
  },
  {
    term: "Infrastructure",
    simple: "The physical systems — roads, power, water, networks — a society runs on.",
    detailed:
      "Infrastructure decisions shape economic geography for decades, making them deeply political: which region, whose district, what toll. Long asset lives mean today's choices bind future taxpayers.",
    example: "Choosing a rail line's route raises land values for some areas and isolation for others.",
    category: "everyday",
  },
  {
    term: "Public debt",
    simple: "Money government owes from borrowing to cover past deficits.",
    detailed:
      "Debt funds investment and stabilizes crises, but servicing it crowds out other spending. Sustainability depends on growth, interest rates, and currency credibility, not on a single magic ratio.",
    example: "A country borrowing at 3% interest while growing 5% can carry debt sustainably; the reverse cannot.",
    category: "everyday",
  },
  {
    term: "Universal basic services",
    simple: "Guaranteed access to essentials like health, education, water, and transport.",
    detailed:
      "Proponents argue universal provision is cheaper administratively than means-tested schemes and builds solidarity. Critics question fiscal cost and efficiency. The debate is central to modern social policy.",
    example: "Free public transit in a city's core is a universal basic service experiment.",
    category: "everyday",
  },
  {
    term: "Individual rights",
    simple: "Legal protections each person holds against the state and others.",
    detailed:
      "Rights constrain what governments may do to anyone, regardless of popularity. Generations of rights — civil, political, social, and emerging digital rights — reflect expanding views of what dignity requires.",
    example: "A constitution guaranteeing free expression gives every citizen a right the majority cannot vote away.",
    category: "everyday",
  },
  {
    term: "Government budget",
    simple: "The annual plan of expected revenues and authorized spending.",
    detailed:
      "Budgets are policy in numbers: priorities, trade-offs, and hidden choices. Legislatures' power of the purse — voting taxes and appropriations — historically preceded and anchored their other powers.",
    example: "Cutting a maintenance line to fund a new road shows budgeting as political choice.",
    category: "everyday",
  },
  {
    term: "Media literacy",
    simple: "The ability to analyze, evaluate, and create media messages critically.",
    detailed:
      "Media literacy teaches source checking, bias recognition, and manipulation techniques. Evidence suggests inoculation-style training helps people resist disinformation better than fact-by-fact correction.",
    example: "Checking an image's origin before sharing a 'breaking' photo is media literacy in practice.",
    category: "everyday",
  },
  {
    term: "Fact-checking",
    simple: "Systematic verification of public claims against evidence.",
    detailed:
      "Professional fact-checkers rate claims, document sources, and publish transparent reasoning. Limits exist: reach is small compared to rumor networks, and partisan audiences may reject unfavorable verdicts.",
    example: "A fact-check showing a politician's statistic reversed a trend corrects the public record.",
    category: "everyday",
  },
  {
    term: "Confirmation bias",
    simple: "The tendency to accept information that supports existing beliefs.",
    detailed:
      "Confirmation bias makes politics self-sealing: we search selectively, remember selectively, and argue selectively. Remedies include deliberately seeking strong opposing arguments and testing your views against the best critics.",
    example: "Reading only outlets that agree with you and dismissing the rest confirms rather than tests beliefs.",
    category: "everyday",
  },
  {
    term: "Logical fallacy",
    simple: "An argument that looks convincing but breaks a rule of valid reasoning.",
    detailed:
      "Common political fallacies: ad hominem (attack the speaker), false dilemma (only two options), straw man (refuting a caricature), slippery slope, appeal to popularity. Naming the flaw is more useful than winning the moment.",
    example: "'You're only saying that because you're rich' attacks the speaker, not the argument — ad hominem.",
    category: "everyday",
  },
  {
    term: "Political culture",
    simple: "The shared attitudes, values, and habits a population holds toward politics.",
    detailed:
      "Almond and Verba's 'civic culture' distinguished participant, subject, and parochial orientations. Culture changes slowly and shapes what institutions can achieve — new rules meet old habits.",
    example: "Where family and village elders traditionally decide, formal voting rights take generations to transform practice.",
    category: "everyday",
  },
  {
    term: "Civic education",
    simple: "Learning how government works and how to participate effectively.",
    detailed:
      "Civic education ranges from constitutional basics to practical skills: registering, petitioning, organizing, evaluating sources. Studies link quality civic education to informed voting and lower susceptibility to manipulation.",
    example: "A school mock parliament teaching how a bill becomes law is civic education.",
    category: "everyday",
  },
];
