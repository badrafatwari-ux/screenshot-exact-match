import type { Module } from "@/data/types";

export const m02: Module = {
  id: "political-philosophy",
  number: 2,
  title: "Political Philosophy",
  tagline: "The big questions: who should rule, and why?",
  description:
    "Meet the thinkers who shaped how we justify power — from Plato's ideal city to the social contract, and from Marx's critique to modern debates about justice, liberty, and equality.",
  lessons: [
    {
      id: "ancient-foundations",
      title: "Ancient Foundations: Plato and Aristotle",
      level: "beginner",
      minutes: 14,
      objectives: [
        "Explain Plato's critique of democracy and his idea of rule by the wise",
        "Summarize Aristotle's classification of regimes and his defense of political community",
        "Use the ancient debate to analyze modern arguments about expertise and popular rule",
      ],
      intro:
        "Western political thought begins in Athens, a direct democracy that executed its most famous philosopher. The quarrel between Socrates and the Assembly is still our quarrel: should the many rule, or the knowledgeable few?",
      sections: [
        {
          heading: "Plato and the rule of knowledge",
          body: [
            "In 'The Republic,' Plato answered with a sharp claim: politics is a craft like medicine or navigation, and the person who steers the ship should be the one who understands the sea. He imagined a city ruled by philosopher-kings — rulers selected and trained for decades in mathematics, logic, and the pursuit of truth — because the many, he argued, are swayed by appetite and flattery rather than knowledge. Democracy, in his telling, is the regime that promotes whoever is most charming.",
            "Plato wrote after Athens had executed Socrates and suffered defeat in war, and his bitterness shows. Critics then and now note the danger in his cure: rule by the 'wise' is rule without accountability, and whoever defines wisdom controls the city. Plato himself, failing to teach a real ruler in Syracuse, learned how far philosophy was from power. Still, his challenge endures: every democracy must decide how much to trust popular judgment.",
          ],
          callout: {
            title: "A lens you can use today",
            body: "When experts and public opinion conflict — on vaccines, budgets, or climate policy — you are reliving the Plato-versus-Athens debate. The useful question is not who is right but: what process lets knowledge and accountability both matter?",
          },
        },
        {
          heading: "Aristotle's realism",
          body: [
            "Aristotle, Plato's student, was more forgiving of ordinary people. In 'Politics' he classified regimes by who rules and in whose interest: monarchy and tyranny (one), aristocracy and oligarchy (few), polity and democracy (many). Each good form — ruling for the common good — has a corrupt twin that rules for its own side. His insight was psychological: any group in power can turn its office into privilege, so no form is safe by design alone.",
            "Aristotle called humans 'political animals': we flourish only in a polis, a community that deliberates about the good life, not just markets goods. He also observed a democratic truth often credited to modern theory — when many ordinary people pool their judgments, the aggregate can exceed any single expert, the way potluck dinners can beat one chef. His recipe for stability was a large, contented middle class, neither desperate nor domineering.",
          ],
          table: {
            headers: ["Who rules", "For the common good", "For the rulers' own interest"],
            rows: [
              ["One", "Monarchy", "Tyranny"],
              ["Few", "Aristocracy", "Oligarchy"],
              ["Many", "Polity (mixed rule)", "Democracy (unrestrained majority)"],
            ],
          },
        },
      ],
      keyTerms: [
        { term: "Philosopher-kings", definition: "Plato's ideal rulers, selected and trained for wisdom rather than elected." },
        { term: "Polity", definition: "Aristotle's preferred regime: the many governing through law for the common good." },
        { term: "Common good", definition: "The shared benefit of the political community, as distinct from any faction's interest." },
      ],
      examples: [
        {
          title: "Singapore and the expert state",
          body: "Singapore's governing elite is recruited for academic merit and paid like executives. Supporters see Plato's meritocracy working; critics see unaccountable power. Both are arguing with Athens in the background.",
        },
        {
          title: "Citizens' assemblies",
          body: "Ireland and France have convened randomly selected citizens to weigh complex questions. The design is Aristotelian: trust pooled judgment, but structure the deliberation so it stays informed.",
        },
      ],
      takeaways: [
        "Plato distrusted untrained public opinion; Aristotle saw wisdom in pooled ordinary judgment.",
        "Aristotle's regime classification turns on who rules and in whose interest.",
        "The ancient debate maps directly onto modern fights over expertise versus popular will.",
      ],
      quiz: [
        {
          id: "m2l1q1",
          type: "mc",
          question: "Why did Plato favor rule by philosopher-kings?",
          options: [
            { label: "Because they were born to wealth", feedback: "Birth mattered little to Plato; training did." },
            { label: "Because politics requires knowledge, like any craft", feedback: "Correct — the ship of state needs a navigator who knows the sea.", },
            { label: "Because the gods appointed them", feedback: "Plato's argument was rational, not theological." },
            { label: "Because armies would obey only them", feedback: "Plato argued from knowledge, not force." },
          ],
          correctIndex: 1,
          explanation: "Plato treated ruling as expertise; a democracy of opinions seemed as unsafe as a ship crewed by passengers.",
        },
        {
          id: "m2l1q2",
          type: "tf",
          question: "Aristotle believed ordinary citizens pooling their judgments can outperform individual experts.",
          options: [
            { label: "True", feedback: "Right — Aristotle valued the aggregated judgment of the many." },
            { label: "False", feedback: "Actually he did: his potluck analogy anticipates modern 'wisdom of crowds' research." },
          ],
          correctIndex: 0,
          explanation: "For Aristotle the many, properly assembled, could judge as well as or better than any one person.",
        },
        {
          id: "m2l1q3",
          type: "mc",
          question: "In Aristotle's classification, rule by the few in the rulers' own interest is called:",
          options: [
            { label: "Aristocracy", feedback: "Aristocracy is rule by the few for the common good." },
            { label: "Polity", feedback: "Polity is rule by the many for the common good." },
            { label: "Oligarchy", feedback: "Correct — oligarchy is the corrupt form of rule by the few." },
            { label: "Tyranny", feedback: "Tyranny is the corrupt form of rule by one." },
          ],
          correctIndex: 2,
          explanation: "Aristotle named each regime twice: its just form and its self-serving corruption.",
        },
        {
          id: "m2l1q4",
          type: "matching",
          question: "Match each thinker to their core idea.",
          pairs: [
            { left: "Plato", right: "Rule by the wise" },
            { left: "Aristotle", right: "Humans are political animals" },
            { left: "Socrates", right: "Questioning Athens cost him his life" },
          ],
          explanation: "These three anchor classical political thought: idealism, realism, and the price of dissent.",
        },
      ],
    },
    {
      id: "social-contract",
      title: "The Social Contract: Hobbes, Locke, and Rousseau",
      level: "intermediate",
      minutes: 16,
      objectives: [
        "Explain the state-of-nature device and what each philosopher concluded from it",
        "Distinguish Hobbesian, Lockean, and Rousseauian answers to why government exists",
        "Apply the contract lens to modern questions of consent and revolt",
      ],
      intro:
        "Seventeenth-century Europe was torn by religious wars and revolutions. Thinkers asked a radical question: without a king imposed by God, why should anyone obey a government at all? Their answer — a contract — still underwrites our ideas of consent, rights, and legitimate revolt.",
      sections: [
        {
          heading: "Hobbes: order first",
          body: [
            "Thomas Hobbes imagined life without government — the 'state of nature' — and saw a war of all against all: no industry, no trust, 'continual fear and danger of violent death.' Rational people, he argued in 'Leviathan' (1651), would surrender their liberty to an absolute sovereign in exchange for peace. Better a strong ruler than a life where anyone may kill you.",
            "Hobbes's logic has unsettled implications he accepted: the sovereign is above the law, since law needs an enforcer above itself. Yet he planted a dangerous seed — government exists for the subjects' protection. If the sovereign cannot even keep peace, the contract fails, and subjects owe it nothing. Modern security states cite Hobbes; so, sometimes, do revolutionaries.",
          ],
          callout: {
            title: "The trade-off he forces us to see",
            body: "Every society trades some liberty for security. Hobbes says trade almost everything. The modern debate over emergency powers, surveillance, and policing is the Hobbesian bargain renegotiated.",
          },
        },
        {
          heading: "Locke: government by consent",
          body: [
            "John Locke, writing after England's Glorious Revolution (1688), imagined a milder nature: free and roughly equal people, each holding natural rights to life, liberty, and property simply by being human. Government's whole purpose is to protect those rights. Because people are the source of rights, only their consent can authorize a state — and when a state systematically violates rights, citizens may resist and replace it.",
            "Locke's fingerprints are all over modern constitutionalism: limited government, property rights, religious tolerance, and the American Declaration of Independence, which quotes his logic nearly verbatim. His unresolved question haunts democracies: if actual people never signed anything, how much does 'tacit consent' really obligate? Still, the principle that power flows from the governed, not from God or blood, is Locke's enduring gift.",
          ],
        },
        {
          heading: "Rousseau: the general will",
          body: [
            "Jean-Jacques Rousseau pushed the contract further. Humans in nature were free and good; society's inequality corrupted them. Legitimate government therefore must express the 'general will' — the common interest of the people as a whole — rather than the sum of private wants. Law, properly made, is the people legislating to itself; to obey it is to remain free.",
            "Rousseau inspired both democratic participation and, in darker readings, totalitarian democracy: if the general will is sovereign, dissenters can be branded as having 'been mistaken about' it. He also tied politics to equality, arguing that no citizen is truly free under a regime of extreme inequality. That argument — that liberty and equality rise or fall together — is now the dividing line between liberal and social-democratic traditions.",
          ],
        },
      ],
      keyTerms: [
        { term: "State of nature", definition: "The thought experiment of human life before any government." },
        { term: "Natural rights", definition: "Locke's rights to life, liberty, and property held prior to government." },
        { term: "General will", definition: "Rousseau's term for the common interest as distinct from private preferences." },
      ],
      examples: [
        {
          title: "Locke in the Declaration of Independence",
          body: "Jefferson's 'life, liberty, and the pursuit of happiness,' and the clause that governments may be 'altered or abolished' when they violate rights, translate Locke into revolutionary law.",
        },
        {
          title: "Hobbes in emergency powers",
          body: "After disasters and terror attacks, states expand surveillance and policing 'for security.' That is the Hobbesian trade-off offered again — and the debate is about where to stop.",
        },
      ],
      takeaways: [
        "All three used the state of nature to ask what justifies government.",
        "Hobbes prioritized order; Locke, rights and consent; Rousseau, collective self-rule and equality.",
        "The right of revolution is the contract's enforcement clause.",
      ],
      quiz: [
        {
          id: "m2l2q1",
          type: "mc",
          question: "Which philosopher argued that without government life is 'solitary, poor, nasty, brutish, and short'?",
          options: [
            { label: "Locke", feedback: "Locke's state of nature was comparatively peaceful." },
            { label: "Hobbes", feedback: "Correct — 'Leviathan' opens with this bleak assessment." },
            { label: "Rousseau", feedback: "Rousseau actually romanticized pre-societal humans." },
            { label: "Aristotle", feedback: "Aristotle never used the contract device." },
          ],
          correctIndex: 1,
          explanation: "Hobbes's war of all against all is the rationale for absolute sovereignty.",
        },
        {
          id: "m2l2q2",
          type: "mc",
          question: "For Locke, the primary purpose of government is to:",
          options: [
            { label: "Promote virtue through religion", feedback: "Locke argued for tolerance, not moral supervision." },
            { label: "Protect natural rights to life, liberty, and property", feedback: "Correct — government exists solely for rights-protection." },
            { label: "Express the general will", feedback: "That is Rousseau's standard." },
            { label: "Guarantee peace at any cost", feedback: "That is Hobbes's priority, not Locke's." },
          ],
          correctIndex: 1,
          explanation: "If government fails to protect rights, the people may replace it — Locke's revolutionary conclusion.",
        },
        {
          id: "m2l2q3",
          type: "tf",
          question: "Rousseau believed obeying laws that express the general will keeps citizens free.",
          options: [
            { label: "True", feedback: "Right — for Rousseau, self-imposed law is the definition of freedom." },
            { label: "False", feedback: "This is precisely his paradox: law made by the people binds the people freely." },
          ],
          correctIndex: 0,
          explanation: "Rousseau's 'forced to be free' paradox shows the danger in his theory when the general will is claimed by rulers.",
        },
        {
          id: "m2l2q4",
          type: "matching",
          question: "Match each contract thinker to their key concept.",
          pairs: [
            { left: "Hobbes", right: "Absolute sovereign for peace" },
            { left: "Locke", right: "Natural rights and consent" },
            { left: "Rousseau", right: "The general will" },
          ],
          explanation: "Order, rights, and collective self-rule — three answers to one question: why obey?",
        },
      ],
    },
    {
      id: "marx-justice-equality",
      title: "Marx and the Modern Debate on Justice, Liberty, and Equality",
      level: "advanced",
      minutes: 18,
      objectives: [
        "Summarize Marx's critique of capitalism and its historical influence",
        "Explain Rawls's veil of ignorance and Nozick's libertarian reply",
        "Distinguish liberty from and against equality in contemporary policy debates",
      ],
      intro:
        "Nineteenth- and twentieth-century political philosophy sharpened an old conflict: how much equality does justice require, and how much liberty may we insist on before equality becomes tyranny?",
      sections: [
        {
          heading: "Marx: history and exploitation",
          body: [
            "Karl Marx argued that every society's politics grows from its economic 'base': who owns production shapes who holds power. Capitalism, he claimed, survives by appropriating workers' surplus value — profit is systematic exploitation, not fair exchange. He predicted its internal crises would drive workers to seize the means of production, creating a classless society in which, eventually, the state itself would 'wither away.'",
            "Regimes calling themselves Marxist achieved party-state control rather than liberation — a gap between theory and practice that critics treat as a refutation and defenders as betrayal. But Marx changed politics everywhere: labor rights, welfare states, and anticolonial movements all answered his analysis of inequality. Reading him remains necessary because his central question persists — how much power should follow ownership?",
          ],
          callout: {
            title: "Interpretation, not verdict",
            body: "Whether Marx was wrong about prediction, right about diagnosis, or both is a contested scholarly judgment. Treat claims that 'Marx proved' or 'Marx was disproved' as positions in an argument, not settled facts.",
          },
        },
        {
          heading: "Rawls versus Nozick",
          body: [
            "In 1971 John Rawls revived contract thinking. Imagine choosing society's rules behind a 'veil of ignorance' — not knowing whether you'll be rich or poor, talented or disabled. He argued rational people would secure equal basic liberties for all, allow inequality only when it benefits the least advantaged (the 'difference principle'), and guarantee fair opportunity. A just society, in short, is one you'd accept without knowing your place in it.",
            "Robert Nozick answered from the right: rights are so strong that any state beyond basic protection is coercion. Redistributing wealth 'forces' taxpayers to labor for others, he argued in 'Anarchy, State, and Utopia' — taxation of earnings is 'on a par with forced labor.' The Rawls–Nozick exchange still frames every budget fight: welfare expansion versus tax cuts, regulation versus market freedom.",
          ],
          table: {
            headers: ["Question", "Rawls (liberal egalitarian)", "Nozick (libertarian)"],
            rows: [
              ["What is justice?", "Fairness chosen behind the veil of ignorance", "Respecting each person's rights"],
              ["When is inequality acceptable?", "Only if it helps the least advantaged", "Whenever it arises from voluntary exchange"],
              ["Role of the state", "Guarantee liberties, opportunity, and a floor", "Night-watchman: defense, police, courts only"],
            ],
          },
        },
        {
          heading: "Liberty and equality in tension",
          body: [
            "Isaiah Berlin distinguished 'negative liberty' (freedom from interference) from 'positive liberty' (the real capacity to act). A formal right to sue is thin comfort without access to a lawyer; a free market is thin freedom without means to enter it. Egalitarians argue liberty without resources is hollow; libertarians reply that pursuing equality by force erodes the liberty everyone shares.",
            "Modern politics lives in this tension. Progressive taxation, universal services, inheritance rules, and school funding are all positions along the Rawls–Nozick line. Political literacy means recognizing the underlying question — what do we owe each other? — beneath the slogans.",
          ],
        },
      ],
      keyTerms: [
        { term: "Surplus value", definition: "Marx's term for the value workers produce beyond what they are paid." },
        { term: "Veil of ignorance", definition: "Rawls's device: choose principles without knowing your place in society." },
        { term: "Difference principle", definition: "Rawls's rule: inequality is just only when it benefits the worst off." },
        { term: "Negative / positive liberty", definition: "Berlin's distinction between freedom from interference and real capacity to act." },
      ],
      examples: [
        {
          title: "A progressive income tax",
          body: "A Rawlsian defends steep top rates if they fund the worst-off's schools and healthcare; a Nozickian objects that earned income is being taken. Same policy, opposite underlying principles.",
        },
        {
          title: "Indonesia's land-reform debates",
          body: "Post-independence land redistribution proposals pitted equality and historical justice against property rights — the same Rawls–Nozick axis in Southeast Asian form.",
        },
      ],
      takeaways: [
        "Marx tied political power to economic ownership; his predictions failed, his diagnosis endures.",
        "Rawls asks what rules you would choose not knowing your place; Nozick asks what rights no majority may violate.",
        "Most real policy disputes are positions between liberty-first and equality-first principles.",
      ],
      quiz: [
        {
          id: "m2l3q1",
          type: "mc",
          question: "Rawls's 'veil of ignorance' asks you to design society:",
          options: [
            { label: "As if you were its wisest citizen", feedback: "Rawls abstracts from virtue, not ignorance of merit." },
            { label: "Without knowing your future position in it", feedback: "Correct — fairness means rules you'd accept from anywhere in the distribution." },
            { label: "Through majority vote", feedback: "Rawls is testing principles, not procedures." },
            { label: "With private property abolished", feedback: "Rawls permits property and markets under his principles." },
          ],
          correctIndex: 1,
          explanation: "The veil strips knowledge of your class, talents, and fate so chosen principles are fair to everyone.",
        },
        {
          id: "m2l3q2",
          type: "tf",
          question: "Nozick argued that redistributive taxation is justified when it helps the least advantaged.",
          options: [
            { label: "True", feedback: "That is Rawls's difference principle, not Nozick's view." },
            { label: "False", feedback: "Correct — Nozick held that rights against seizure limit redistribution regardless of its benefits." },
          ],
          correctIndex: 1,
          explanation: "Nozick's libertarianism treats self-ownership as limiting what even good outcomes can justify.",
        },
        {
          id: "m2l3q3",
          type: "mc",
          question: "Marx's concept of 'surplus value' refers to:",
          options: [
            { label: "The interest paid on capital", feedback: "Marx focused on production, not finance." },
            { label: "Value workers create beyond their wages", feedback: "Correct — profit, in his account, comes from unpaid labor time." },
            { label: "The profit of small businesses", feedback: "Marx's category concerns wage labor generally." },
            { label: "Government revenue from tariffs", feedback: "Surplus value belongs to his labor theory of value." },
          ],
          correctIndex: 1,
          explanation: "Exploitation, for Marx, is structural: profit exists because workers are paid less than they produce.",
        },
        {
          id: "m2l3q4",
          type: "mc",
          question: "Isaiah Berlin's 'positive liberty' means:",
          options: [
            { label: "Freedom from government interference", feedback: "That is negative liberty." },
            { label: "The real capacity and resources to act on choices", feedback: "Correct — positive liberty asks not 'is anyone stopping you?' but 'can you actually do it?'" },
            { label: "Freedom of the press", feedback: "That is one civil liberty, negative in form." },
            { label: "National self-determination", feedback: "Berlin used the term for individual capacity, not statehood." },
          ],
          correctIndex: 1,
          explanation: "The negative/positive distinction explains why equality claims are also liberty claims.",
        },
      ],
    },
  ],
  exam: [
    {
      id: "m2ex1",
      type: "mc",
      question: "Which pairing of philosopher and core claim is correct?",
      options: [
        { label: "Plato — pooled judgment of the many is wise", feedback: "That is closer to Aristotle." },
        { label: "Locke — absolute sovereign secures peace", feedback: "That is Hobbes." },
        { label: "Aristotle — humans flourish in political community", feedback: "Correct — Aristotle's 'political animals' thesis." },
        { label: "Hobbes — natural rights precede government", feedback: "That is Locke." },
      ],
      correctIndex: 2,
      explanation: "Each thinker's signature claim: Plato (rule by the wise), Aristotle (political animals), Hobbes (sovereign for peace), Locke (natural rights).",
    },
    {
      id: "m2ex2",
      type: "mc",
      question: "The right of revolution is most directly grounded in:",
      options: [
        { label: "Plato's philosopher-kings", feedback: "Plato offered no such right." },
        { label: "Locke's consent-based government", feedback: "Correct — if consent is withdrawn after rights violations, resistance is justified." },
        { label: "Hobbes's absolute sovereignty", feedback: "Hobbes limited revolt to cases of sheer survival failure." },
        { label: "Rawls's veil of ignorance", feedback: "Rawls addresses institutions, not revolt." },
      ],
      correctIndex: 1,
      explanation: "Locke's contract makes government conditional: breach of trust releases the people's obligation.",
    },
    {
      id: "m2ex3",
      type: "tf",
      question: "Rousseau's theory has been read both as a charter for participation and as a path to democratic despotism.",
      options: [
        { label: "True", feedback: "Right — scholars note both uses, depending on who claims to speak for the general will." },
        { label: "False", feedback: "This duality is a standard scholarly judgment on Rousseau's legacy." },
      ],
      correctIndex: 0,
      explanation: "When a ruler claims to embody the general will, Rousseau's freedom-through-law can justify suppressing dissent.",
    },
    {
      id: "m2ex4",
      type: "matching",
      question: "Match the concept to its philosopher.",
      pairs: [
        { left: "Difference principle", right: "Rawls" },
        { left: "State of nature", right: "Hobbes" },
        { left: "Surplus value", right: "Marx" },
      ],
      explanation: "Modern justice theory (Rawls), contract theory's baseline (Hobbes), and Marxist economics (Marx).",
    },
    {
      id: "m2ex5",
      type: "mc",
      question: "A society guarantees free speech but has no public schooling, so most citizens cannot read ballots. Berlin would say this society is strong in:",
      options: [
        { label: "Negative liberty, weak in positive liberty", feedback: "Correct — no one interferes, but few can exercise the freedom meaningfully." },
        { label: "Positive liberty, weak in negative liberty", feedback: "Reversed: interference is absent; capacity is missing." },
        { label: "Both", feedback: "Only negative liberty is strong here." },
        { label: "Neither", feedback: "Formal non-interference is precisely negative liberty." },
      ],
      correctIndex: 0,
      explanation: "Berlin's distinction exposes the gap between formal freedom and effective freedom.",
    },
    {
      id: "m2ex6",
      type: "mc",
      question: "Which claim is a contested interpretation rather than an established fact?",
      options: [
        { label: "Hobbes wrote Leviathan in 1651", feedback: "A verifiable publication fact." },
        { label: "Marx's analysis of capitalism was ultimately correct", feedback: "Correct — this is a contested scholarly judgment, not a fact." },
        { label: "Rawls published A Theory of Justice in 1971", feedback: "A verifiable publication fact." },
        { label: "Locke influenced the Declaration of Independence", feedback: "Broadly documented, though interpretations vary in degree." },
      ],
      correctIndex: 1,
      explanation: "Distinguishing dates and influence from contested evaluations is a core academic skill.",
    },
  ],
};
