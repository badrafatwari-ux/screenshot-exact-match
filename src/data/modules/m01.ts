import type { Module } from "../types";

export const m01: Module = {
  id: "understanding-politics",
  number: 1,
  title: "Understanding Politics",
  tagline: "What politics is and why it touches everyone",
  description:
    "The meaning of politics, political science as a discipline, the nature of power, and how political decisions shape everyday life.",
  lessons: [
    {
      id: "what-is-politics",
      title: "What Is Politics?",
      level: "beginner",
      minutes: 9,
      objectives: [
        "Define politics in plain language",
        "Distinguish politics from government",
        "Recognize politics in settings outside parliaments",
      ],
      intro:
        "Ask ten people what politics means and you will hear about presidents, parties, corruption, and arguments on television. Political science begins somewhere simpler: politics is how groups of people make binding collective decisions when they disagree. Wherever a community must decide who gets what, when, and how — a classroom, a village, a nation — politics is happening.",
      sections: [
        {
          heading: "A working definition",
          body: [
            "The classic definition from political scientist Harold Lasswell captures the core: politics is the process of deciding \"who gets what, when, and how.\" Scarce resources, competing values, and different visions of the good life mean that communities constantly face choices that cannot satisfy everyone. Politics is the structured way those choices are negotiated, decided, and made binding on everyone.",
            "Two elements are always present. First, collective decision-making: the decision binds the whole group, not just the people who made it. Second, disagreement or scarcity: if everyone agreed about everything and resources were unlimited, no politics would be needed. Politics exists precisely because people disagree about taxes, school rules, land use, security, and fairness — and those decisions cannot be avoided.",
            "This definition also explains why politics is inescapable rather than optional. A family deciding how to share chores, a university deciding admission rules, and a parliament deciding a budget are all doing the same fundamental thing at different scales, with different rules and stakes.",
          ],
          callout: {
            title: "Politics vs. government",
            body: "Government is the machinery: the institutions and officials with formal authority to make and enforce decisions. Politics is the activity that flows through and around that machinery: competition, persuasion, bargaining, and conflict. An election is a political event carried out through government institutions.",
          },
        },
        {
          heading: "Politics beyond the parliament",
          body: [
            "Political scientists often follow David Easton's view of politics as the \"authoritative allocation of values\" — the process by which a society decides which priorities, rights, and burdens are officially recognized. Notice how wide that net is. Workplace rules, student councils, homeowners' associations, and religious community decisions all involve authority, competing interests, and binding choices.",
            "This wider view is sometimes called the \"politics of everyday life.\" It matters for practical reasons: people who only think of politics as something done by distant elites tend to underestimate their own stake in it. Whether a local road is repaired, whether a scholarship program exists, whether workers have paid leave — these outcomes were all decided politically.",
            "At the same time, political science distinguishes this broad sense from the narrow sense of formal politics: parties, elections, legislatures, and constitutions. Most of this app focuses on formal politics because its rules are documented and teachable, but the informal politics of offices, families, and communities runs on the same logic of authority and bargaining.",
          ],
        },
        {
          heading: "What political science actually does",
          body: [
            "Political science studies these processes systematically. It asks descriptive questions (what institutions exist and how do they work?), explanatory questions (why do democracies consolidate or collapse? why do some countries curb corruption and others do not?), and evaluative questions (which arrangements best protect rights or deliver fair outcomes?).",
            "The discipline has major subfields: political theory (ideas from Plato to Rawls), comparative politics (comparing countries and systems), international relations (war, peace, trade, institutions), public administration (how policy is actually executed), and public law (constitutions and courts). Each has its own methods, from interpreting classic texts to statistical analysis of election data.",
            "Political science aims to be evidence-based and analytically neutral. That does not mean its scholars have no opinions — many do — but the discipline's standards require distinguishing what can be observed and tested from what is preferred or advocated. This app follows the same rule: we describe systems and debates, and we flag contested claims as contested.",
          ],
          callout: {
            title: "A learned habit, not a body of trivia",
            body: "The most useful output of political science is not memorized facts but a set of questions: Who decides? Who benefits? Who is excluded? What alternatives exist? What evidence would change my view? Carrying these questions into any political news story changes how you read it.",
          },
        },
        {
          heading: "Why ordinary people should care",
          body: [
            "Political decisions set the prices and rules of daily life: the tax on your salary, the interest rate your bank charges, the curriculum at your school, the safety standards on the food you buy. None of these is decided by markets alone; each rests on laws made by people you never met, acting under rules you can learn and influence.",
            "There is also a defensive reason to understand politics. History shows that rights are rarely removed in a single dramatic act; they erode through quiet rule changes, exceptions, and distractions. Citizens who understand how power works are harder to mislead and better placed to notice when the rules change.",
            "Finally, understanding politics replaces cynicism with discrimination. \"All politicians are the same\" is itself a claim that can be examined. Some governments deliver schools and vaccines; others fail to. Learning to tell the difference — and to ask what caused it — is a skill this whole app is designed to build.",
          ],
        },
      ],
      keyTerms: [
        { term: "Politics", definition: "The process by which groups make binding collective decisions amid disagreement and scarcity." },
        { term: "Government", definition: "The set of institutions and officials holding formal authority to make and enforce rules for a community." },
        { term: "Political science", definition: "The systematic study of power, government, political behavior, and collective decision-making." },
        { term: "Authoritative allocation", definition: "David Easton's phrase for politics: deciding which values and priorities a society officially recognizes and enforces." },
        { term: "Formal vs. informal politics", definition: "Formal politics operates through official institutions and rules; informal politics operates through networks, customs, and unwritten influence." },
      ],
      examples: [
        {
          title: "The village water committee",
          body: "A village has one working well and three neighborhoods that want morning access. There is no parliament here, yet the situation contains everything political: scarcity, competing claims, a decision rule, and enforcement. Whether the committee rotates schedules by lottery, by seniority, or by payment determines who benefits — and whether the community sees the rule as fair enough to obey.",
        },
        {
          title: "A school uniform policy",
          body: "When a school board debates whether to require uniforms, supporters cite equality and discipline; opponents cite cost and self-expression. The board's decision binds all families regardless of their view. This is authoritative allocation in miniature — and notice that the decision's fairness depends as much on how it was made (was there consultation?) as on what it decided.",
        },
      ],
      takeaways: [
        "Politics = binding collective decisions made amid disagreement and scarcity.",
        "Government is the machinery; politics is the activity that fills and surrounds it.",
        "Political decisions extend far beyond parliaments — into workplaces, schools, and villages.",
        "Political science studies these processes systematically and aims to separate evidence from preference.",
        "Understanding politics is practical: it changes what you can notice, question, and influence.",
      ],
      quiz: [
        {
          id: "m1l1q1",
          type: "mc",
          question: "Which phrase best captures Harold Lasswell's classic definition of politics?",
          options: [
            { label: "The art of winning elections", feedback: "Elections are one mechanism of politics, but Lasswell's definition is broader than any single mechanism." },
            { label: "Who gets what, when, and how", feedback: "Correct — Lasswell emphasized the distribution of scarce benefits among competing claims." },
            { label: "The rule of the wisest citizens", feedback: "That resembles Plato's philosopher-kings, not Lasswell's empirical definition." },
            { label: "The enforcement of moral virtue", feedback: "Some theorists define politics that way, but it is not Lasswell's formulation." },
          ],
          correctIndex: 1,
          explanation: "Lasswell's \"who gets what, when, and how\" highlights distribution under scarcity — the core of collective decision-making.",
        },
        {
          id: "m1l1q2",
          type: "tf",
          question: "Government and politics are exactly the same thing.",
          options: [
            { label: "True", feedback: "They are distinct: government is institutional machinery, politics is the broader activity." },
            { label: "False", feedback: "Correct — government is the institutional machinery; politics also happens around and outside it." },
          ],
          correctIndex: 1,
          explanation: "Politics includes competition, bargaining, and conflict wherever binding collective choices are made, whether or not a government is involved.",
        },
        {
          id: "m1l1q3",
          type: "mc",
          question: "David Easton described politics as the \"authoritative allocation of values.\" What does this emphasize?",
          options: [
            { label: "That politics is primarily about moral education", feedback: "Easton was describing decision processes, not moral instruction." },
            { label: "That societies officially decide which priorities and burdens are recognized", feedback: "Correct — \"authoritative\" means binding on everyone; \"allocation of values\" means choosing what society prizes and who bears costs." },
            { label: "That only governments have values", feedback: "Easton's point was about societal choices, not the values of governments alone." },
            { label: "That values never change once allocated", feedback: "Allocations are revisable; the phrase describes the act of binding choice, not permanence." },
          ],
          correctIndex: 1,
          explanation: "Easton's definition stresses that some decisions are binding for the whole society — that is what makes them political.",
        },
        {
          id: "m1l1q4",
          type: "mc",
          question: "A company's board decides to cut paid parental leave. Under the broad view of politics, is this political?",
          options: [
            { label: "No, because no government was involved", feedback: "The broad view of politics does not require government — only binding collective decisions amid competing interests." },
            { label: "Yes, because it is a binding decision distributing benefits among competing claims", feedback: "Correct — authority, scarcity, and competing interests are present, which makes it political in the broad sense." },
            { label: "Only if employees vote on it", feedback: "Voting is one decision procedure among many; its absence does not make a binding distribution non-political." },
            { label: "Only if it becomes a news story", feedback: "Publicity changes visibility, not the political nature of the decision." },
          ],
          correctIndex: 1,
          explanation: "The broad (Easton-style) view counts any authoritative distribution decision as political, inside firms and families as well as states.",
        },
        {
          id: "m1l1q5",
          type: "matching",
          question: "Match each concept to its description.",
          pairs: [
            { left: "Politics", right: "Binding collective decision-making amid disagreement" },
            { left: "Government", right: "Institutions with formal authority to rule" },
            { left: "Political science", right: "Systematic study of power and governance" },
          ],
          explanation: "Politics is the process, government is the machinery, and political science is the discipline that studies both.",
        },
      ],
    },
    {
      id: "power-currency",
      title: "Power: The Currency of Politics",
      level: "beginner",
      minutes: 10,
      objectives: [
        "Define power, authority, and legitimacy — and tell them apart",
        "Identify the classic sources of political power",
        "Understand why legitimacy makes rule cheaper and more stable",
      ],
      intro:
        "If politics is collective decision-making, power is what makes the decisions stick. Political scientist Robert Dahl called power the ability of A to make B do something B would not otherwise do. But power is not one thing: it appears as force, money, knowledge, votes, charisma, and law. Understanding its different forms is the first step toward analyzing any political situation.",
      sections: [
        {
          heading: "Power, authority, legitimacy",
          body: [
            "Power is the raw ability to influence outcomes — to get others to act as you want. Authority is power that others recognize as rightful: a police officer directing traffic has authority, not just power, because we accept the office they hold. Legitimacy is the broader belief that a system of rule is proper and should be obeyed.",
            "The German sociologist Max Weber distinguished three ideal types of legitimate authority. Traditional authority rests on custom and inherited status (monarchies, elders). Charismatic authority rests on the personal appeal of a leader (revolutionary founders, prophets). Legal-rational authority rests on impersonal rules and offices (modern bureaucracies and constitutional states).",
            "The distinction matters because it explains obedience. Subjects of a traditional monarch obey because it has always been so; followers of a charismatic leader obey because of the person; citizens of a legal-rational state obey the office even when they dislike the officeholder. Modern states blend all three, but legal-rational authority is their backbone.",
          ],
          callout: {
            title: "Legitimacy is an asset you can spend",
            body: "Governments with high legitimacy can raise taxes, pass unpopular reforms, and demand sacrifice at low cost. Governments that lose legitimacy must rely on payment, patronage, or force — all more expensive and less stable. This is why legitimacy is often called the most valuable political resource.",
          },
        },
        {
          heading: "Where power comes from",
          body: [
            "Political scientists identify recurring sources of power. Coercion is the ability to compel through force or the threat of it — armies, police, prisons. Wealth converts into influence through campaign donations, media ownership, and lobbying. Knowledge and expertise confer power because modern governance requires information that specialists control.",
            "Numbers confer power too: voters, protesters, and union members achieve aims through sheer coordinated scale. Legal rights formalize power — a court order or a constitutional guarantee can defeat wealth and numbers. And legitimacy itself, as we saw, is a source: a leader the population believes in can accomplish what coercion cannot.",
            "These sources trade off. Coercion is fast but breeds resistance and is costly to maintain. Wealth is versatile but can be taxed, regulated, or expropriated. Numbers are powerful when organized and powerless when fragmented — which is why organizing and coalition-building are central political activities.",
          ],
        },
        {
          heading: "Formal and informal power",
          body: [
            "Organizational charts describe formal power: who may sign, command, or veto. But real influence often flows through informal channels — seniority, networks, friendship, information, and habit. A parliament may formally decide everything, while a handful of committee chairs or party financiers informally shape what ever reaches the floor.",
            "Political scientists call this the difference between de jure (by law) and de facto (in fact) power. Confusing the two is a common analytical mistake. A constitution may grant wide powers to a legislature that, in practice, rubber-stamps decisions made elsewhere. Conversely, some actors with no formal office — media owners, party bosses, interest groups — exercise persistent de facto power.",
            "Good analysis always asks both questions: what do the rules say, and what actually happens? When the two diverge persistently, the divergence itself is a finding — it usually points to elite capture, weak institutions, or unwritten conventions that matter more than the text.",
          ],
        },
        {
          heading: "Power over, power to, and structural power",
          body: [
            "Scholars distinguish faces of power. The first face is deciding issues openly (power over the agenda of public debate). The second face, identified by Peter Bachrach and Morton Baratz, is agenda-setting: keeping certain issues off the table entirely — the powerful may never need to win an argument if the argument is never allowed to happen.",
            "The third face, from Steven Lukes, is shaping preferences themselves: influencing what people believe they want, so they do not even perceive a conflict. Propaganda, education, and media framing all operate here. Power that works by shaping desires is the hardest to detect and contest.",
            "There is also \"power to\" rather than \"power over\": the collective capacity to accomplish things — build infrastructure, respond to disasters, educate children. This productive view of power (emphasized by thinkers like Hanna Pitkin and Amy Allen) reminds us that politics is not only about domination; state capacity, the ability to actually govern, is a form of power every community needs.",
          ],
          callout: {
            title: "A lens you can apply immediately",
            body: "Take any decision you dislike — a school closure, a tax, a regulation. Ask: Who formally decided? Who set the agenda that excluded alternatives? Who shaped what people thought was possible? Working through the three faces of power turns vague frustration into sharp analysis.",
          },
        },
      ],
      keyTerms: [
        { term: "Power", definition: "The ability to make others do what they would not otherwise do (Dahl)." },
        { term: "Authority", definition: "Power recognized as rightful by those subject to it." },
        { term: "Legitimacy", definition: "The widespread belief that a system of rule is proper and deserves obedience." },
        { term: "Legal-rational authority", definition: "Weber's term for legitimacy grounded in impersonal rules and offices rather than persons or custom." },
        { term: "De jure / de facto power", definition: "Power as the law describes it versus power as actually exercised in practice." },
      ],
      examples: [
        {
          title: "The traffic officer and the general",
          body: "A traffic officer waving cars has modest coercive power but strong authority — drivers obey almost automatically. A retired general has enormous coercive capability yet no authority to direct traffic. Same power source (the state), different legitimacy attached to the office. This shows authority is attached to offices and norms, not merely to capability.",
        },
        {
          title: "Indonesia's village fund program",
          body: "When Indonesia channelled funds directly to villages (Dana Desa), formal power over spending moved from district offices to elected village heads and village assemblies. Whether the money built the planned road often depended on informal power: local landowners' influence, the quality of village oversight, and whether residents attended planning meetings. Formal design alone did not determine outcomes — informal power filled the gap.",
        },
      ],
      takeaways: [
        "Power gets compliance; authority gets accepted compliance; legitimacy makes obedience voluntary.",
        "Weber's three types of legitimate authority: traditional, charismatic, legal-rational.",
        "Power flows from coercion, wealth, knowledge, numbers, law, and legitimacy — each with trade-offs.",
        "Formal (de jure) and informal (de facto) power often diverge; the gap itself is informative.",
        "Power has three faces: deciding issues, setting agendas, and shaping what people want.",
      ],
      quiz: [
        {
          id: "m1l2q1",
          type: "mc",
          question: "Robert Dahl defined power as:",
          options: [
            { label: "The legitimate right to rule", feedback: "That defines authority, not power in Dahl's terms." },
            { label: "A getting B to do what B would not otherwise do", feedback: "Correct — Dahl's definition centers on observable behavioral influence." },
            { label: "The monopoly of legitimate violence", feedback: "That is Max Weber's definition of the state, not Dahl's definition of power." },
            { label: "Control of the means of production", feedback: "That is a Marxist conception of structural economic power." },
          ],
          correctIndex: 1,
          explanation: "Dahl's behavioral definition keeps analysis concrete: did A change B's actions, and would B have acted differently anyway?",
        },
        {
          id: "m1l2q2",
          type: "matching",
          question: "Match each type of authority to its basis.",
          pairs: [
            { left: "Traditional authority", right: "Custom and inherited status" },
            { left: "Charismatic authority", right: "Personal appeal of a leader" },
            { left: "Legal-rational authority", right: "Impersonal rules and offices" },
          ],
          explanation: "Weber's three ideal types describe why people obey: habit, person, or rule.",
        },
        {
          id: "m1l2q3",
          type: "mc",
          question: "Which example best illustrates the \"second face\" of power — agenda-setting?",
          options: [
            { label: "A mayor loses a public vote on a stadium", feedback: "That is the first face: openly deciding an issue." },
            { label: "Legislative leaders never schedule a bill for debate, so it dies silently", feedback: "Correct — blocking issues from ever being decided is the second face of power." },
            { label: "Advertising convinces citizens taxes are always bad", feedback: "That is the third face: shaping preferences themselves." },
            { label: "A court strikes down an unconstitutional law", feedback: "That is a legal check operating through institutions, not agenda control." },
          ],
          correctIndex: 1,
          explanation: "Bachrach and Baratz highlighted that keeping issues off the agenda can matter more than winning the issues that appear on it.",
        },
        {
          id: "m1l2q4",
          type: "tf",
          question: "A constitution's text always shows where real power lies.",
          options: [
            { label: "True", feedback: "Not always — de facto power can diverge sharply from de jure rules." },
            { label: "False", feedback: "Correct — formal rules may be rubber-stamped while informal actors hold real influence; the gap is itself a key analytical finding." },
          ],
          correctIndex: 1,
          explanation: "De jure and de facto power frequently diverge; analysts must compare the rules with observed practice.",
        },
        {
          id: "m1l2q5",
          type: "mc",
          question: "Why is legitimacy often described as a government's most valuable resource?",
          options: [
            { label: "It eliminates the need for elections", feedback: "Legitimacy does not replace accountability mechanisms; it complements them." },
            { label: "It lets governments pass costly or unpopular decisions cheaply and stably", feedback: "Correct — legitimate governments spend less on enforcement and resistance management." },
            { label: "It guarantees economic growth", feedback: "Legitimacy supports governance, but does not by itself determine economic outcomes." },
            { label: "It makes coercion unnecessary and illegal", feedback: "States retain lawful coercion; legitimacy reduces how much of it they must use." },
          ],
          correctIndex: 1,
          explanation: "When citizens believe rule is proper, compliance is voluntary — cheaper and more durable than paying or forcing it.",
        },
      ],
    },
    {
      id: "state-society",
      title: "The State, Government, and Society",
      level: "intermediate",
      minutes: 10,
      objectives: [
        "Define the state and its four defining features",
        "Distinguish state, government, regime, and nation",
        "Explain the relationship between state capacity and everyday governance",
      ],
      intro:
        "Words like \"state,\" \"nation,\" and \"government\" are used interchangeably in daily conversation, but political science gives each a precise meaning — and the differences matter when analyzing politics. This lesson sharpens the vocabulary and introduces the concept of state capacity: the difference between a state that governs and one that merely exists on paper.",
      sections: [
        {
          heading: "What makes a state a state",
          body: [
            "Max Weber's famous definition: a state is an organization that successfully claims the monopoly of the legitimate use of physical force within a given territory. Four features define it: a defined territory, a permanent population, a government, and — the decisive feature — sovereignty, the supreme authority to make and enforce rules without answering to a higher power internally or externally.",
            "The qualifier \"legitimate\" does real work in Weber's definition. Gangs use force; only the state may use force in a way its population accepts as rightful. When multiple actors credibly claim that legitimate right inside one territory — warlords, militias, separatist authorities — the state is failing, whatever its flag or constitution says.",
            "States are recent. For most of human history, people lived under empires, kingdoms, chiefdoms, or tribes without clear borders or monopolies of force. The modern territorial state consolidated in Europe after the Peace of Westphalia (1648) and spread worldwide, in part through colonialism, which is why many post-colonial borders cut across communities that had never been governed together.",
          ],
          callout: {
            title: "Nation is not state",
            body: "A nation is a community of people who believe they share history, language, or destiny. A state is a legal-political structure. A nation-state is where the two align closely. Many states contain many nations (India, Indonesia), and some nations have no state of their own (the Kurds, historically the Poles before 1918).",
          },
        },
        {
          heading: "State, government, regime",
          body: [
            "The government is the group of people currently running the state — ministries, cabinets, agencies. It changes with elections, coups, or reshuffles. The regime is the deeper set of rules of the political game: how power is won, who may participate, what limits exist. Regimes change rarely — through constitutional transformation, democratization, or breakdown.",
            "The state is the most durable layer: the institutions, civil service, army, and legal order that persist while governments and even regimes come and go. Japan had over thirty governments since 1945 under one regime and one state. France has lived under five republics, two empires, and two monarchies — one state, many regimes, endlessly rotating governments.",
            "Why does this vocabulary matter? Because diagnoses differ depending on the layer. A \"government crisis\" (cabinet falls) is ordinary. A \"regime crisis\" (rules of the game lose legitimacy) is dangerous. A \"state failure\" (institutions stop functioning) is catastrophic. Mislabeling one for another leads to bad predictions and bad policy.",
          ],
        },
        {
          heading: "State capacity: governing versus existing",
          body: [
            "A state can be recognized on the map and still be weak. State capacity means the ability to actually implement decisions: collect taxes, enforce contracts, run schools, register births, deliver vaccines. Political scientists often distinguish infrastructural power (the capacity to penetrate society and provide things) from despotic power (the capacity to repress). States can be high in one and low in the other.",
            "Tax collection is the classic measure. A state that taxes only easily monitored trade while missing most domestic income cannot fund schools, courts, or roads at scale. Similarly, a state whose judges are bought, or whose land registry is unreliable, cannot protect property even if its laws look excellent on paper.",
            "Capacity is also uneven within countries. Capital cities often enjoy schools, courts, and services that remote provinces lack — a pattern called center-periphery inequality. Building even capacity is one of the hardest tasks in governance, because it requires trusted officials, information, and money in exactly the places that are hardest to reach.",
          ],
        },
        {
          heading: "Civil society and the space between",
          body: [
            "Between the individual and the state lies civil society: unions, religious organizations, professional associations, neighborhood groups, charities, and independent media. These bodies aggregate interests, watch power, and provide services — they are the connective tissue that makes democracy and accountable government workable.",
            "A strong state is not the opposite of a strong society. The most capable states — in Scandinavia, Japan, Germany — combine extensive state capacity with dense civil societies and high mutual trust. Where states suppress independent organization, they may win short-term compliance while destroying the trust and information they need to govern well.",
            "For an individual learner, the practical lesson is this: politics is not only about winning state power or resisting it. Much of what makes government accountable — a union that audits, a press that investigates, an association that litigates — is built in civil society, usually slowly and by people with ordinary resources.",
          ],
        },
      ],
      keyTerms: [
        { term: "State", definition: "An organization claiming a monopoly of legitimate force over a territory and population, with sovereignty (Weber)." },
        { term: "Sovereignty", definition: "Supreme authority within a territory — no higher internal or external decision-maker." },
        { term: "Regime", definition: "The durable rules of the political game: how power is acquired and constrained." },
        { term: "State capacity", definition: "The ability of a state to actually implement decisions and deliver public functions." },
        { term: "Civil society", definition: "Organized social life outside the state and market: unions, media, associations, religious bodies." },
      ],
      examples: [
        {
          title: "France's five republics",
          body: "Since 1789, France has been a monarchy, an empire, a monarchy again, and five different republics. The French state — its ministries, courts, and administrative tradition — persisted throughout. This illustrates the layered model: the state endures while regimes and governments rotate above it.",
        },
        {
          title: "Indonesia's decentralization after 1999",
          body: "After the fall of the New Order, Indonesia devolved major powers to districts. The state's form stayed the same; the regime's rules changed dramatically (competitive elections, press freedom). Districts gained capacity unevenly — some built responsive services, others saw local elites capture new powers. A single constitutional change produced wildly different results depending on local capacity and society.",
        },
      ],
      takeaways: [
        "The state = territory + population + government + sovereignty, with a claimed monopoly of legitimate force.",
        "Nation (community) and state (structure) are different; they only coincide in nation-states.",
        "Governments change often, regimes rarely, states almost never — label crises at the right layer.",
        "State capacity — implementing decisions — matters as much as formal design for real-world outcomes.",
        "Civil society is the connective tissue that turns state power into accountable governance.",
      ],
      quiz: [
        {
          id: "m1l3q1",
          type: "mc",
          question: "Which feature does Weber treat as decisive for defining the state?",
          options: [
            { label: "A large population", feedback: "Size matters for capacity but does not define statehood." },
            { label: "The monopoly of the legitimate use of physical force", feedback: "Correct — Weber's definition hinges on lawful coercion accepted as rightful." },
            { label: "A written constitution", feedback: "Many functioning states, historically and today, lack a single written constitutional document (e.g., the UK, Israel, New Zealand)." },
            { label: "Democratic elections", feedback: "Elections define democracy, not statehood — non-democratic states are still states." },
          ],
          correctIndex: 1,
          explanation: "Weber: a state is the organization that successfully claims the monopoly of legitimate force within a territory.",
        },
        {
          id: "m1l3q2",
          type: "tf",
          question: "A nation-state is a state whose population overwhelmingly forms one nation.",
          options: [
            { label: "True", feedback: "Correct — the term describes alignment between a nation (shared identity) and a state." },
            { label: "False", feedback: "The definition is exactly that alignment — though it is an ideal type few states match perfectly." },
          ],
          correctIndex: 0,
          explanation: "Nation-state means the national community and the political structure roughly coincide — most real states contain multiple nations.",
        },
        {
          id: "m1l3q3",
          type: "mc",
          question: "A country's cabinet collapses after losing a confidence vote. Political scientists would call this a:",
          options: [
            { label: "State failure", feedback: "State failure means institutions stop functioning — a cabinet change is routine." },
            { label: "Government crisis", feedback: "Correct — the government (the team in office) changed through an ordinary constitutional procedure." },
            { label: "Regime collapse", feedback: "The rules of the game were followed, not overturned." },
            { label: "Sovereignty crisis", feedback: "Nothing here questions the state's supreme authority." },
          ],
          correctIndex: 1,
          explanation: "Layer matters: routine turnover of the government is expected under stable regimes and states.",
        },
        {
          id: "m1l3q4",
          type: "matching",
          question: "Match each layer to its turnover pattern.",
          pairs: [
            { left: "Government", right: "Changes with elections, votes, or reshuffles" },
            { left: "Regime", right: "Changes through constitutional transformation or breakdown" },
            { left: "State", right: "Persists across governments and regimes" },
          ],
          explanation: "The three layers differ in durability — and misdiagnosing a crisis at the wrong layer leads to bad analysis.",
        },
        {
          id: "m1l3q5",
          type: "mc",
          question: "A state can collect taxes at ports but not from most domestic businesses. Its main weakness is:",
          options: [
            { label: "Despotic power", feedback: "Despotic power is the capacity to repress — the scenario describes a different deficit." },
            { label: "Infrastructural (fiscal) capacity", feedback: "Correct — inability to reach and tax the domestic economy signals weak implementation capacity." },
            { label: "Sovereignty", feedback: "Sovereignty is about supreme authority, not administrative reach." },
            { label: "Legitimacy", feedback: "Legitimacy might be a contributing factor, but the described gap is a capacity gap." },
          ],
          correctIndex: 1,
          explanation: "Fiscal capacity is the classic indicator of state strength: can the state actually see into and act across its economy?",
        },
      ],
    },
    {
      id: "politics-everyday",
      title: "Politics in Everyday Life",
      level: "beginner",
      minutes: 8,
      objectives: [
        "Trace everyday costs and services back to political decisions",
        "Understand why abstention is itself a political act",
        "Identify three concrete ways individuals can engage",
      ],
      intro:
        "Politics feels distant until you notice that the price of rice, the safety of your bus, the interest on your loan, and the exam your child takes were all shaped by decisions made in rooms you never entered. This lesson connects daily life to political choice — and shows where an ordinary person's influence actually begins.",
      sections: [
        {
          heading: "Your day, decided by politics",
          body: [
            "The water from your tap reflects infrastructure budgets and utility regulation. The quality of your children's school reflects curriculum policy, teacher pay, and local administration. The safety of the food you eat reflects inspection capacity. Your commute reflects transport investment decisions made years in advance.",
            "Even markets are political. Property rights, contract enforcement, interest rates, and trade tariffs are not natural facts — they are rules, and rules are made politically. When a currency loses value or food prices spike after an export ban, the cause is usually political, even when the effects look purely economic.",
            "This is the practical meaning of \"politics is everywhere\": not that everything is partisan warfare, but that the background rules of daily life are all chosen and revisable. Recognizing this changes the question from \"why does the government affect me?\" to \"who decided this, and could it have been decided differently?\"",
          ],
        },
        {
          heading: "The price of not participating",
          body: [
            "Non-participation is also a political act — it delegates your interests to whoever shows up. When turnout is low and skewed (older, wealthier, better-connected voters participate more), policies tilt toward those groups. Studies of many democracies find measurable differences in who benefits when participation is unequal.",
            "Organized groups understand this arithmetic. An industry association with a few thousand engaged members can out-influence a scattered constituency of millions who never write, vote, or organize. The lesson is not cynicism but asymmetry: attention and organization convert into influence, and their absence converts into someone else's agenda.",
            "Note carefully: participation does not guarantee particular outcomes. Democracy offers influence over the process, not control over results. The realistic promise is that participating raises the chance your interests are considered — and that peaceful disagreement remains possible.",
          ],
        },
        {
          heading: "Three levels of engagement",
          body: [
            "Minimal engagement: vote, read two sources before believing a claim, and know your basic rights. These take little time and form the floor of democratic citizenship. Voting is the smallest lever, but it is the one that moves everything else.",
            "Intermediate engagement: follow one policy area that affects you (schools, healthcare, labor rules) deeply enough to judge claims about it; attend a public consultation; support or join an organization that monitors that area. Depth in one area beats shallow opinions about all of them.",
            "Advanced engagement: run for a school board or village council, work in civil society, publish careful analysis, or build something institutions need — data, documentation, tools. History's most durable improvements often came from citizens who mastered one narrow topic and refused to let it stay ignored.",
          ],
          callout: {
            title: "Neutral ground",
            body: "This app takes no side on any policy or party. The claim here is procedural, not ideological: decisions about collective life are better when more of the affected understand and take part in them. How you participate — and what you conclude — remains yours.",
          },
        },
        {
          heading: "From complaint to question",
          body: [
            "A practical habit for everyday political literacy: convert complaints into questions. \"The bus is always late\" becomes \"who sets the route and budget, and what would a better contract look like?\" \"Prices keep rising\" becomes \"what monetary and trade decisions shaped this, and who is accountable for them?\"",
            "Questions reveal levers. Complaints about weather lead nowhere, but questions about decisions lead to consultations, budgets, and elections — the places where influence is actually exercised. This reframing is small but real: it is the difference between being an audience and being a participant.",
            "The rest of this app builds exactly this capacity: modules on institutions show where decisions are made, modules on ideologies and problems show how arguments are constructed, and the dictionary and quizzes turn passive vocabulary into active analysis.",
          ],
        },
      ],
      keyTerms: [
        { term: "Political participation", definition: "Actions by citizens intended to influence collective decisions: voting, organizing, petitioning, running for office." },
        { term: "Turnout skew", definition: "The pattern where participation is higher among older, wealthier, and more connected groups, tilting policy attention." },
        { term: "Abstention", definition: "Choosing not to participate — which still delegates influence, typically to those who do show up." },
        { term: "Public consultation", definition: "A formal process inviting affected people to comment before a decision is finalized." },
        { term: "Policy area", definition: "A defined domain of government action, such as education, health, or transport." },
      ],
      examples: [
        {
          title: "A fuel subsidy decision",
          body: "When a government reduces fuel subsidies, bus fares, food transport costs, and family budgets all shift within weeks. The decision was made in a budget negotiation; the effects appear in every market stall. Tracing the effect back to the decision is the first step of everyday political analysis — the second is asking who decided, under what rules, and who was in the room.",
        },
        {
          title: "The local school committee",
          body: "In many countries, school committees include parent representatives with real influence over budgets and priorities. Where parents engage, decisions track their concerns; where seats go unfilled, they default to administrators or well-connected individuals. The lever exists in both cases — engagement determines who holds it.",
        },
      ],
      takeaways: [
        "Everyday costs and services — food, transport, school, safety — trace back to political decisions.",
        "Markets run on political rules: property, contracts, interest rates, and trade are chosen and revisable.",
        "Abstention is a political act that delegates your interests to others.",
        "Participation buys influence over process, not control over outcomes — realistic expectations matter.",
        "Convert complaints into questions to find the actual levers of influence.",
      ],
      quiz: [
        {
          id: "m1l4q1",
          type: "mc",
          question: "Why do low-turnout, skewed elections tend to produce skewed policy attention?",
          options: [
            { label: "Because governments punish non-voters directly", feedback: "The mechanism is subtler: politicians respond to who actually participates, not to formal punishment." },
            { label: "Because politicians respond to the groups that reliably show up", feedback: "Correct — participation is the signal politicians read; missing groups get less attention." },
            { label: "Because non-voters cannot benefit from public services", feedback: "Non-voters use public services fully; the issue is attention, not eligibility." },
            { label: "Because turnout is legally required in most countries", feedback: "Turnout is voluntary in most democracies; the skew emerges from unequal participation." },
          ],
          correctIndex: 1,
          explanation: "Political attention follows participation. Unequal turnout reliably produces unequal policy attention across many democracies.",
        },
        {
          id: "m1l4q2",
          type: "tf",
          question: "Participating in politics guarantees your preferred policy outcome.",
          options: [
            { label: "True", feedback: "No democratic process can guarantee outcomes; it guarantees a say in the process." },
            { label: "False", feedback: "Correct — participation raises the chance your interests are considered; it does not control results." },
          ],
          correctIndex: 1,
          explanation: "Democracy distributes influence over decisions, not control over outcomes — a key realism check for new learners.",
        },
        {
          id: "m1l4q3",
          type: "mc",
          question: "Which is the best example of converting a complaint into a politically useful question?",
          options: [
            { label: "\"Traffic is terrible, this city is hopeless.\"", feedback: "This is a complaint — it identifies no decision-maker or lever." },
            { label: "\"Who approves the bus routes and budget, and how can residents comment?\"", feedback: "Correct — it names the decision, the decision-maker, and a point of influence." },
            { label: "\"Politicians never fix anything.\"", feedback: "A generalization, not an analysis — it cannot be tested or acted on." },
            { label: "\"Everyone should just drive less.\"", feedback: "A personal prescription; it does not identify the political lever involved." },
          ],
          correctIndex: 1,
          explanation: "Useful political questions identify the decision, its maker, and the channel through which citizens can engage.",
        },
        {
          id: "m1l4q4",
          type: "matching",
          question: "Match each engagement level to its example.",
          pairs: [
            { left: "Minimal", right: "Voting and verifying sources before believing claims" },
            { left: "Intermediate", right: "Following one policy area and attending consultations" },
            { left: "Advanced", right: "Running for local office or building civic tools" },
          ],
          explanation: "Engagement is a ladder: each level requires more time but converts into more influence.",
        },
        {
          id: "m1l4q5",
          type: "mc",
          question: "Food prices spike after a country bans grain exports. What is the politically literate first question?",
          options: [
            { label: "\"Which party should I blame forever?\"", feedback: "Blame is an conclusion, not an analysis; the lesson is to trace the decision first." },
            { label: "\"Who made the export decision, under what rules, and who was consulted?\"", feedback: "Correct — trace the decision to its maker and process before evaluating it." },
            { label: "\"Is farming a good career?\"", feedback: "A reasonable economic question, but not the political analysis the moment calls for." },
            { label: "\"Should I stockpile rice?\"", feedback: "A personal response, not an analysis of the cause." },
          ],
          correctIndex: 1,
          explanation: "Political literacy starts with tracing effects back to decisions, then examining the decision process itself.",
        },
      ],
    },
  ],
  exam: [
    {
      id: "m1x1",
      type: "mc",
      question: "Which statement best distinguishes politics from government?",
      options: [
        { label: "Politics is legal; government is not", feedback: "Both operate within legal frameworks." },
        { label: "Government is the institutional machinery; politics is the activity of collective decision-making", feedback: "Correct — government is the machinery, politics the activity flowing through and around it." },
        { label: "Politics happens only in democracies", feedback: "Politics occurs in every system; only its rules differ." },
        { label: "Government includes civil society", feedback: "Civil society lies outside the state by definition." },
      ],
      correctIndex: 1,
      explanation: "Government is the machinery; politics is the broader process of binding collective choice.",
    },
    {
      id: "m1x2",
      type: "matching",
      question: "Match each Weberian concept to its meaning.",
      pairs: [
        { left: "Power", right: "Getting B to do what B would not otherwise do" },
        { left: "Authority", right: "Power recognized as rightful" },
        { left: "Legitimacy", right: "Belief that a system of rule deserves obedience" },
      ],
      explanation: "These three build on each other: power becomes authority when accepted as rightful, and systems are legitimate when obedience is voluntary.",
    },
    {
      id: "m1x3",
      type: "mc",
      question: "A country's rules for choosing leaders were peacefully rewritten after a national referendum. Which layer changed?",
      options: [
        { label: "Government only", feedback: "A rules change goes deeper than a cabinet reshuffle." },
        { label: "Regime", feedback: "Correct — the rules of the political game themselves changed." },
        { label: "State", feedback: "The state's institutions, territory, and monopoly of force persisted." },
        { label: "Civil society", feedback: "Civil society is not a layer of formal rule-change." },
      ],
      correctIndex: 1,
      explanation: "Regime refers to the rules of the game; constitutional referenda change the regime without dissolving the state.",
    },
    {
      id: "m1x4",
      type: "tf",
      question: "State capacity and despotic power are the same thing.",
      options: [
        { label: "True", feedback: "They are distinct: one is the capacity to implement and provide, the other the capacity to repress." },
        { label: "False", feedback: "Correct — infrastructural capacity and despotic power are independent; states can be strong in one and weak in the other." },
      ],
      correctIndex: 1,
      explanation: "A state can deliver services widely without being repressive, or repress effectively while failing to deliver anything.",
    },
    {
      id: "m1x5",
      type: "mc",
      question: "The \"third face\" of power involves:",
      options: [
        { label: "Winning open votes", feedback: "That is the first face." },
        { label: "Keeping issues off the agenda", feedback: "That is the second face." },
        { label: "Shaping what people believe they want", feedback: "Correct — Lukes's third face works through preferences, not decisions." },
        { label: "Enforcing court orders", feedback: "That is ordinary lawful coercion." },
      ],
      correctIndex: 2,
      explanation: "The three faces: deciding issues (1), setting agendas (2), shaping preferences (3).",
    },
    {
      id: "m1x6",
      type: "tf",
      question: "Abstaining from politics leaves your interests unrepresented only if you would have been represented otherwise.",
      options: [
        { label: "True", feedback: "This is the core asymmetry: influence flows to participants; abstention delegates it." },
        { label: "False", feedback: "Abstention always delegates influence to whoever participates — the delegation is automatic." },
      ],
      correctIndex: 0,
      explanation: "Non-participation is itself a political act: it hands influence to those who show up.",
    },
  ],
};
