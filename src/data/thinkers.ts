/** Influential political thinkers — educational reference data. Politically neutral. */

export interface Thinker {
  id: string;
  name: string;
  years: string;
  region: string;
  tradition: string;
  bio: string;
  context: string;
  ideas: { title: string; body: string }[];
  contributions: string[];
  criticisms: string[];
  quote?: string;
}

export const THINKERS: Thinker[] = [
  {
    id: "plato",
    name: "Plato",
    years: "c. 428–348 BCE",
    region: "Athens, Greece",
    tradition: "Classical philosophy",
    bio: "A student of Socrates and teacher of Aristotle, Plato founded the Academy and wrote dialogues that still anchor Western political philosophy.",
    context:
      "Writing after Athens executed Socrates and lost the Peloponnesian War, Plato saw democracy as the mob rule that killed his teacher — and asked what knowledge should govern instead.",
    ideas: [
      {
        title: "Rule of the wise (philosopher-kings)",
        body: "In The Republic, Plato argues that those who understand the Forms — especially Justice — should govern, selected and trained over decades rather than elected.",
      },
      {
        title: "Justice as harmony",
        body: "A just city mirrors a just soul: each part (rulers, guardians, producers) performs its proper function without overstepping.",
      },
      {
        title: "Critique of democracy",
        body: "He compares democracy to a ship where everyone claims the helm, and describes its slide toward demagoguery and tyranny in Republic Book VIII.",
      },
    ],
    contributions: [
      "Founded the systematic study of ideal political order",
      "Introduced rule by knowledge and merit over rule by birth or numbers",
      "Provided the classic early critique of democratic rhetoric and faction",
    ],
    criticisms: [
      "Karl Popper (The Open Society, 1945) read Plato as the ancestor of totalitarianism: rule by an unaccountable elite.",
      "His 'noble lie' justifying the class system conflicts with modern equality before the law.",
    ],
    quote: "The punishment which the wise suffer who refuse to take part in government, is to live under the government of worse men.",
  },
  {
    id: "aristotle",
    name: "Aristotle",
    years: "384–322 BCE",
    region: "Athens, Greece",
    tradition: "Classical philosophy",
    bio: "Plato's student and Alexander's tutor, Aristotle mapped the constitutions of Greek cities and wrote Politics, the first comparative study of regimes.",
    context:
      "He studied 158 constitutions of Greek city-states, treating politics empirically as well as philosophically — an ancestor of modern political science.",
    ideas: [
      {
        title: "Humans as political animals",
        body: "People flourish only in a polis; politics is not a necessary evil but the arena of the good life.",
      },
      {
        title: "The six-fold regime typology",
        body: "Rule by one, few, or many — each in a common-interest form (monarchy, aristocracy, polity) or self-interest form (tyranny, oligarchy, democracy).",
      },
      {
        title: "Polity and the middle class",
        body: "The stable regime mixes elements of oligarchy and democracy and rests on a large middle class — an early theory of political moderation.",
      },
    ],
    contributions: [
      "First comparative typology of political regimes",
      "Connected regime stability to class structure and rule of law",
      "Grounded political authority in human flourishing, not divine right",
    ],
    criticisms: [
      "He defended slavery and the subordination of women as 'natural', claims modern thought rejects outright.",
      "His city-state scale politics no longer matches nation-states.",
    ],
  },
  {
    id: "hobbes",
    name: "Thomas Hobbes",
    years: "1588–1679",
    region: "England",
    tradition: "Social contract theory",
    bio: "Writing amid the English Civil War, Hobbes produced Leviathan (1651), the most rigorous early statement of why authority is necessary.",
    context:
      "Civil war, regicide, and religious strife convinced Hobbes that without an overwhelming sovereign, society collapses into violent competition.",
    ideas: [
      {
        title: "The state of nature as a war of all against all",
        body: "Without common power, life is 'solitary, poor, nasty, brutish, and short' — rational individuals authorize a sovereign to escape it.",
      },
      {
        title: "Absolute sovereignty",
        body: "The sovereign's authority must be undivided; splitting it, Hobbes argued, recreates the conditions of civil war.",
      },
      {
        title: "Order before liberty",
        body: "Security is the precondition of every other good; the social contract trades unlimited freedom for peace.",
      },
    ],
    contributions: [
      "Founded modern social contract reasoning from individual self-interest",
      "Reframed legitimacy as authorization by the governed, not divine right",
      "Anticipated modern security-state debates about order vs. liberty",
    ],
    criticisms: [
      "Locke and later liberals argued people retain rights the sovereign cannot touch.",
      "Critics note Hobbes leaves no peaceful way to remove a tyrant short of collapse.",
    ],
    quote: "Covenants, without the sword, are but words.",
  },
  {
    id: "locke",
    name: "John Locke",
    years: "1632–1704",
    region: "England",
    tradition: "Liberalism, social contract",
    bio: "Locke's Two Treatises of Government (1689) supplied the vocabulary of natural rights, consent, and limited government for centuries of constitutional politics.",
    context:
      "Writing after the Glorious Revolution, Locke justified overthrowing a king who violated rights — directly refuting Hobbes's absolutism and Filmer's divine right.",
    ideas: [
      {
        title: "Natural rights",
        body: "Life, liberty, and property exist before government; government is created to protect them.",
      },
      {
        title: "Government by consent",
        body: "Legitimate authority rests on the consent of the governed, exercised through elected legislatures.",
      },
      {
        title: "The right of revolution",
        body: "When rulers breach trust and violate rights, the people may dissolve the government and build another.",
      },
    ],
    contributions: [
      "Intellectual foundation of liberal constitutionalism and limited government",
      "Direct influence on the American Declaration of Independence",
      "Separation of legislative and executive power as an early checks-and-balances idea",
    ],
    criticisms: [
      "His property theory has been criticized as licensing colonial dispossession and vast inequality.",
      "Feminist scholars note his contract excluded women from full political standing.",
    ],
    quote: "Wherever law ends, tyranny begins.",
  },
  {
    id: "rousseau",
    name: "Jean-Jacques Rousseau",
    years: "1712–1778",
    region: "Geneva / France",
    tradition: "Social contract, republicanism",
    bio: "Rousseau's The Social Contract (1762) opens with the famous problem: how to be free while living under law made by all.",
    context:
      "Reacting against inequality and court society, Rousseau argued civilization had corrupted natural equality and sought principles for legitimate self-rule.",
    ideas: [
      {
        title: "The general will",
        body: "Legitimate law expresses the general will — the common interest — not the sum of private interests.",
      },
      {
        title: "Popular sovereignty",
        body: "Sovereignty belongs to the people collectively and cannot be represented fully; laws must be made by those they bind.",
      },
      {
        title: "Freedom through law",
        body: "Obedience to a law we prescribe to ourselves is freedom; chains we consent to as co-legislators do not enslave us.",
      },
    ],
    contributions: [
      "Cornerstone of democratic theory and popular sovereignty",
      "Influenced the French Revolution and modern participatory democracy",
      "Sharpened the critique of inequality as political, not just economic, corruption",
    ],
    criticisms: [
      "History shows 'speaking for the general will' can justify suppressing dissent — the road to democratic despotism.",
      "His suspicion of representation sits uneasily with modern large-scale democracies.",
    ],
    quote: "Man is born free, and everywhere he is in chains.",
  },
  {
    id: "montesquieu",
    name: "Montesquieu",
    years: "1689–1755",
    region: "France",
    tradition: "Enlightenment constitutionalism",
    bio: "In The Spirit of the Laws (1748), Montesquieu compared governments across history and geography to explain why liberty survives in some states and dies in others.",
    context:
      "An aristocratic observer of absolutist France and of England's post-1688 balance of powers, he sought institutional design that prevents power from concentrating.",
    ideas: [
      {
        title: "Separation of powers",
        body: "Liberty requires that legislative, executive, and judicial power be held by different hands so power checks power.",
      },
      {
        title: "Laws must fit their society",
        body: "Government should suit a people's climate, economy, customs, and size — an early comparative, sociological view of institutions.",
      },
    ],
    contributions: [
      "Direct inspiration for the U.S. Constitution's tripartite structure",
      "Framework for modern checks and balances in constitutions worldwide, including Indonesia's post-1999 amendments debates",
    ],
    criticisms: [
      "His climate theory of national character is scientifically unfounded.",
      "Rigid three-branch separation can paralyze government; hybrids (semi-presidential France) blur his categories.",
    ],
  },
  {
    id: "burke",
    name: "Edmund Burke",
    years: "1729–1797",
    region: "Ireland / England",
    tradition: "Conservatism",
    bio: "Burke's Reflections on the Revolution in France (1790) founded modern conservative thought as a defense of inherited institutions against radical redesign.",
    context:
      "A Whig parliamentarian who backed the American colonists' grievances yet recoiled from the French Revolution's attempt to rebuild society from abstract first principles.",
    ideas: [
      {
        title: "Society as a partnership across generations",
        body: "Institutions embody accumulated wisdom; the living are trustees for the dead and the unborn, not sovereign designers.",
      },
      {
        title: "Change through preservation",
        body: "Reform should be prudent, incremental, and attentive to circumstance — 'a state without the means of some change is without the means of its conservation.'",
      },
    ],
    contributions: [
      "Articulated the conservative disposition: respect for tradition, prudence, and organic community",
      "Early critique of revolutionary ideology and majoritarian enthusiasm",
    ],
    criticisms: [
      "Critics see defense of privilege and resistance to justified change; Paine answered him with The Rights of Man.",
      "His empiricism can shade into accepting injustice because it is established.",
    ],
  },
  {
    id: "marx",
    name: "Karl Marx",
    years: "1818–1883",
    region: "Germany / England",
    tradition: "Socialism, critical theory",
    bio: "Marx analyzed industrial capitalism as a system of class exploitation and argued that political power ultimately reflects who controls production.",
    context:
      "Observing the industrial revolution's factories, child labor, and slums, Marx sought a scientific account of how capitalism works and why it generates conflict.",
    ideas: [
      {
        title: "Historical materialism",
        body: "The economic 'base' of production shapes the political-legal 'superstructure'; history moves through class struggles.",
      },
      {
        title: "Surplus value and exploitation",
        body: "Profit arises because workers produce more value than they are paid; ownership of capital confers political leverage.",
      },
      {
        title: "Ideology as distortion",
        body: "Ruling ideas legitimize ruling-class interests; critical analysis unmasks them.",
      },
    ],
    contributions: [
      "Transformed the study of class, inequality, and political economy",
      "Inspired labor movements, welfare states, and revolutions — with radically divergent outcomes",
    ],
    criticisms: [
      "Predictions of capitalism's collapse and proletarian revolution did not materialize as theorized.",
      "States built in his name became authoritarian; whether that follows from his theory or betrays it is a contested interpretation.",
    ],
  },
  {
    id: "mill",
    name: "John Stuart Mill",
    years: "1806–1873",
    region: "Britain",
    tradition: "Liberalism",
    bio: "Mill's On Liberty (1859) gave liberalism its classic defense of individual freedom of thought and action against social as well as state control.",
    context:
      "Raised as a utilitarian prodigy and later an MP, Mill argued between laissez-faire and emerging socialism, and championed women's suffrage in Parliament.",
    ideas: [
      {
        title: "The harm principle",
        body: "Power over anyone, individually or collectively, is justified only to prevent harm to others — not for their 'own good'.",
      },
      {
        title: "Marketplace of ideas",
        body: "Even false opinions are valuable to suppress-free debate: truth survives contest, and silenced truth is lost.",
      },
      {
        title: "Development of the individual",
        body: "Diversity, education, and participation cultivate capable citizens; Mill later linked this to plural voting by competence (a much-criticized elitism).",
      },
    ],
    contributions: [
      "Canonical defense of free speech and toleration",
      "The Subjection of Women: an early liberal-feminist landmark",
      "Bridge between utilitarian ethics and constitutional liberalism",
    ],
    criticisms: [
      "His competence-weighted voting conflicts with political equality.",
      "Later thinkers ask whether the harm principle can really handle hate speech, monopolies, and structural harm.",
    ],
  },
  {
    id: "rawls",
    name: "John Rawls",
    years: "1921–2002",
    region: "United States",
    tradition: "Political liberalism, justice theory",
    bio: "A Theory of Justice (1971) revived normative political philosophy by asking what principles free and equal people would choose behind a 'veil of ignorance'.",
    context:
      "Writing against Cold-War-era utilitarianism and post-war welfare debates, Rawls sought a fair basis for distributing liberty and wealth in a pluralistic society.",
    ideas: [
      {
        title: "The veil of ignorance",
        body: "Choose society's rules without knowing your class, talents, or fate — fairness by construction.",
      },
      {
        title: "Two principles of justice",
        body: "Equal basic liberties for all; social and economic inequalities arranged to benefit the least advantaged (the difference principle) under fair opportunity.",
      },
      {
        title: "Political, not metaphysical",
        body: "In Political Liberalism he argues principles must be acceptable to citizens holding different 'comprehensive doctrines' — the idea of overlapping consensus.",
      },
    ],
    contributions: [
      "Restarted academic political philosophy and set the terms of modern justice debates",
      "Framework for thinking about welfare, education, and fair equality of opportunity",
    ],
    criticisms: [
      "Nozick replied that self-ownership bars the taxation Rawls permits.",
      "Communitarians (Sandel, Walzer) argue the disembodied chooser behind the veil is a fiction.",
    ],
  },
  {
    id: "weber",
    name: "Max Weber",
    years: "1864–1920",
    region: "Germany",
    tradition: "Sociology of politics",
    bio: "Weber gave social science its core political concepts: legitimacy types, the modern state's monopoly of legitimate force, and bureaucracy.",
    context:
      "Writing amid Germany's industrialization and the rise of mass parties, he asked how authority works and what bureaucratic modernity does to freedom.",
    ideas: [
      {
        title: "Three types of legitimate authority",
        body: "Traditional (custom), charismatic (personal devotion), and legal-rational (offices and rules) — most modern states rest on the last.",
      },
      {
        title: "The state as monopoly of legitimate violence",
        body: "The modern state is the institution that successfully claims the exclusive right to enforce order in a territory.",
      },
      {
        title: "Iron cage of bureaucracy",
        body: "Rationalized administration is efficient but can entrap citizens in rule-bound machinery; politics requires leaders to give it direction.",
      },
    ],
    contributions: [
      "Conceptual toolkit of modern political science: legitimacy, statehood, bureaucracy, charisma",
      "Analysis of how Protestant ethics shaped capitalism remains a classic (and contested) thesis",
    ],
    criticisms: [
      "His elitist view of party leadership and wartime nationalism draw criticism.",
      "Critics argue charisma and legitimacy are harder to measure than his typology implies.",
    ],
  },
  {
    id: "arendt",
    name: "Hannah Arendt",
    years: "1906–1975",
    region: "Germany / United States",
    tradition: "Political theory",
    bio: "Arendt analyzed totalitarianism, revolution, and the fragility of public freedom, insisting that politics is action in public among plural equals.",
    context:
      "A German-Jewish refugee from Nazism, she reported on the Eichmann trial and sought to explain how ordinary systems produce extraordinary evil.",
    ideas: [
      {
        title: "The banality of evil",
        body: "Eichmann's evil was thoughtlessness within a bureaucratic machine — not monstrous passion, but failure to judge.",
      },
      {
        title: "Totalitarianism's anatomy",
        body: "Ideology plus terror plus atomized masses destroys the space between people where politics lives.",
      },
      {
        title: "Public freedom and council life",
        body: "Freedom appears when citizens act and speak together in public — she admired revolutionary councils and civil disobedience as political speech.",
      },
    ],
    contributions: [
      "Classic analysis of totalitarianism and of how rights fail the stateless",
      "Vocabulary for thinking about judgment, plurality, and public space",
    ],
    criticisms: [
      "Her sharp line between the social and the political has been challenged as artificially narrow.",
      "Her Eichmann essays sparked lasting controversy about responsibility of victims' communities' representation.",
    ],
  },
  {
    id: "victoria",
    name: "Sutan Sjahrir",
    years: "1909–1966",
    region: "Indonesia",
    tradition: "Democratic socialism",
    bio: "Indonesia's first prime minister and a key independence figure, Sjahrir argued for a humane, pluralist socialism rooted in Indonesian conditions.",
    context:
      "Writing from Dutch prison camps in the 1930s–40s, he shaped the nationalist movement's intellectual wing and led negotiations during the revolution.",
    ideas: [
      {
        title: "Socialism as moral humanism",
        body: "In his prison letters (Renasiasi dan Revolusi), socialism means human dignity and solidarity, not state ownership for its own sake.",
      },
      {
        title: "Defense of pluralism",
        body: "He resisted both colonial rule and later authoritarian consolidation, insisting on parliamentary democracy for Indonesia.",
      },
    ],
    contributions: [
      "Early articulation of democratic socialism in Southeast Asia",
      "Representative of the constitutionalist strand in Indonesian politics that re-emerged after 1998",
    ],
    criticisms: [
      "Critics argued his parliamentary ideal underestimated the economic and institutional challenges of the new republic.",
    ],
  },
];

export function findThinker(id: string): Thinker | undefined {
  return THINKERS.find((t) => t.id === id);
}
