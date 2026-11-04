/**
 * Political Scenario Simulator — fictional, neutral decision games.
 * Players trade off economy, approval, civil liberties, and integrity.
 * No choice is framed as the ideologically correct answer; consequences are the lesson.
 */

export interface SimEffects {
  economy: number;
  approval: number;
  liberties: number;
  integrity: number;
}

export interface SimChoice {
  label: string;
  outcome: string;
  effects: SimEffects;
  tradeoff: string;
}

export interface SimStep {
  situation: string;
  prompt: string;
  choices: SimChoice[];
}

export interface SimVerdict {
  title: string;
  body: string;
  test: (e: SimEffects) => boolean;
}

export interface Scenario {
  id: string;
  role: "president" | "legislator" | "policymaker";
  title: string;
  intro: string;
  steps: SimStep[];
  verdicts: SimVerdict[];
}

export const ROLE_LABELS: Record<Scenario["role"], string> = {
  president: "As President",
  legislator: "As a Legislator",
  policymaker: "As a Policymaker",
};

export const SCENARIOS: Scenario[] = [
  {
    id: "inflation",
    role: "president",
    title: "The Fuel-Price Dilemma",
    intro:
      "You lead a developing country of 270 million. Global oil prices have doubled. The fuel subsidy — which keeps transport and food affordable — now consumes 18% of the entire state budget, money your ministries say is needed for schools, clinics, and infrastructure.",
    steps: [
      {
        situation:
          "Finance ministry briefing, week one: the subsidy will blow the budget by June. Inflation is already at 6% and the currency is under pressure. You must announce a policy on Monday.",
        prompt: "What is your opening move?",
        choices: [
          {
            label: "Cut the subsidy now and transfer cash directly to the poorest 25% of households",
            outcome:
              "Fuel prices jump 60%. Buses and motorcycles feel it within days. The transfer program reaches 40 million households but its registry is incomplete — some deserving families are missed, some recipients are not poor.",
            effects: { economy: 3, approval: -3, liberties: 0, integrity: 1 },
            tradeoff:
              "You bought fiscal stability and better targeting, at the cost of immediate hardship and the anger of those the registry failed.",
          },
          {
            label: "Keep the subsidy fully in place",
            outcome:
              "Streets stay calm; approval ticks up. But the budget gap forces cuts to school maintenance and rural clinics, and economists warn the central bank may have to raise rates into a downturn.",
            effects: { economy: -3, approval: 2, liberties: 0, integrity: 0 },
            tradeoff:
              "You preserved short-term affordability by accepting slower development spending and rising debt risk.",
          },
          {
            label: "Raise prices gradually — 10% every quarter — and delay the big cut",
            outcome:
              "Protests are manageable and economists applaud the glide path. But inflation still erodes wages, and your opponents already claim the 'slow cut' is a broken promise they will campaign on.",
            effects: { economy: 1, approval: -1, liberties: 0, integrity: 0 },
            tradeoff:
              "You spread the pain over years — a compromise that satisfies no one fully but avoids both shocks.",
          },
        ],
      },
      {
        situation:
          "Week three: after the announcement, truck drivers block the main highway into the capital. Two rounds of talks fail. Commerce is frozen in the largest port city.",
        prompt: "How do you respond to the blockade?",
        choices: [
          {
            label: "Order police to clear the highway within 24 hours",
            outcome:
              "The road reopens by dawn; business leaders thank you. Images of officers dragging drivers circulate online, and civil-society groups file complaints about excessive force.",
            effects: { economy: 1, approval: -1, liberties: -2, integrity: 0 },
            tradeoff:
              "You restored order quickly by accepting a visible cost to the right to protest.",
          },
          {
            label: "Negotiate: offer a temporary transport-fuel rebate to licensed operators",
            outcome:
              "Talks resume and the blockade lifts in four days. The rebate costs real money and economists warn it reopens a smaller subsidy hole — but unions call it a fair deal.",
            effects: { economy: -1, approval: 2, liberties: 1, integrity: 0 },
            tradeoff:
              "You chose dialogue and shared sacrifice; the price is fiscal discipline and slower reform credibility.",
          },
          {
            label: "Wait them out publicly, with no concessions and no crackdown",
            outcome:
              "After nine days hunger and lost wages break the strike from within. You look either principled or indifferent, depending on who tells the story.",
            effects: { economy: -2, approval: -1, liberties: 1, integrity: 1 },
            tradeoff:
              "You protected both liberties and the integrity of your reform — and paid for it with weeks of economic paralysis.",
          },
        ],
      },
      {
        situation:
          "Month two: your finance minister warns the targeted-transfer registry has leaked into the hands of local brokers who skim payments in three provinces. Anti-corruption investigators want to audit the program.",
        prompt: "What do you do about the leakage?",
        choices: [
          {
            label: "Order a full independent audit and publish the findings",
            outcome:
              "The report names officials in your own coalition. Markets and donors approve; two coalition partners threaten to defect, and your party chair calls it political self-harm.",
            effects: { economy: 1, approval: -1, liberties: 1, integrity: 3 },
            tradeoff:
              "You strengthened institutions at direct cost to your own coalition's short-term interests.",
          },
          {
            label: "Fix the leaks quietly through the interior ministry, no public audit",
            outcome:
              "Skimming falls in the worst provinces. Journalists ask why the numbers changed and speculate; trust in the program's honesty stays murky.",
            effects: { economy: 0, approval: 0, liberties: 0, integrity: -1 },
            tradeoff:
              "You chose quiet efficiency over transparency — plausible management, at the price of accountability.",
          },
          {
            label: "Suspend the program in the affected provinces until systems are clean",
            outcome:
              "The poorest families there lose payments for months. You signal zero tolerance for corruption — and demonstrate that the vulnerable pay for institutional failures first.",
            effects: { economy: -1, approval: -1, liberties: 0, integrity: 2 },
            tradeoff:
              "You defended integrity, and the bill landed on households least able to pay it.",
          },
        ],
      },
    ],
    verdicts: [
      {
        title: "The Gradual Reformer",
        body:
          "You balanced the budget while keeping society talking rather than boiling. Reform proceeded slower than technocrats wanted, but with fewer casualties. Many real subsidy reforms — Indonesia's in 2005 and 2008 — followed this compromise path, complete with compensation programs and negotiated resistance.",
        test: (e) => e.economy >= 1 && e.liberties >= 0 && e.approval >= -1,
      },
      {
        title: "The Resolute Technocrat",
        body:
          "You put fiscal stability and institutional integrity first and treated political pain as the price of good policy. History shows this path can work — and can also end governments before the payoff arrives. The question your society will debate for years is whether the ends justified the hardships you distributed.",
        test: (e) => e.integrity >= 3 || e.economy >= 3,
      },
      {
        title: "The Consensus Builder",
        body:
          "You consistently bought agreement with money and patience. Approval and civil liberties came through the crisis intact; the budget and the reform schedule did not. Your successors inherit both a calmer politics and a harder fiscal arithmetic.",
        test: (e) => e.approval >= 2 && e.economy <= 0,
      },
      {
        title: "The Firm Hand",
        body:
          "When order and liberty collided, you chose order — repeatedly and quickly. Roads opened and programs moved, but each decision borrowed from the same account: the trust that the state will use force lawfully. That account, once overdrawn, is hard to rebuild.",
        test: (e) => e.liberties <= -1,
      },
      {
        title: "The Survivor",
        body:
          "Your choices scattered across the board — protecting approval here, integrity there, without a consistent compass. That, more than any single policy, is what citizens will remember: a government that moved with the wind.",
        test: () => true,
      },
    ],
  },
  {
    id: "anticorruption-bill",
    role: "legislator",
    title: "The Anti-Corruption Bill",
    intro:
      "You sit in the national legislature. A landmark anti-corruption bill is on the floor: it would create an independent prosecutor's office, require all legislators and senior officials to publish their assets, and open public procurement to live online monitoring. Everyone knows some of that will land close to home.",
    steps: [
      {
        situation:
          "Your party holds 18% of seats and sits in the governing coalition. The bill's sponsor is from an opposition party. Coalition leaders want it watered down; the public wants it passed; the press is watching every vote.",
        prompt: "What is your position in the first debate?",
        choices: [
          {
            label: "Co-sponsor the bill as written and say so publicly",
            outcome:
              "Headlines call you a rare brave legislator. Your coalition leadership is furious and whispers about your committee assignments; opposition colleagues welcome a possible alliance.",
            effects: { economy: 0, approval: 2, liberties: 1, integrity: 2 },
            tradeoff:
              "You spent political capital inside your coalition to buy institutional strength.",
          },
          {
            label: "Support the principle, propose amendments to 'improve implementation'",
            outcome:
              "Your amendments would soften asset disclosure timelines and let the executive pick the prosecutor shortlist. The press calls it a gutting exercise; your leaders are satisfied.",
            effects: { economy: 0, approval: -1, liberties: 0, integrity: -2 },
            tradeoff:
              "You kept your coalition safe by trading away part of the bill's independence and transparency.",
          },
          {
            label: "Abstain and let others fight",
            outcome:
              "You avoid enemies on both sides today. A civic group publishes a 'coward's roll call' that includes your name.",
            effects: { economy: 0, approval: -1, liberties: 0, integrity: 0 },
            tradeoff:
              "You bought personal safety with public silence.",
          },
        ],
      },
      {
        situation:
          "Committee stage: the business association offers to fund your next campaign — indirectly, through a friendly foundation — if the live procurement-monitoring clause gets a five-year delay.",
        prompt: "How do you handle the offer?",
        choices: [
          {
            label: "Refuse and report the approach to the ethics committee",
            outcome:
              "The report becomes public. You are praised for integrity; your campaign treasury stays thin and some donors quietly blacklist you.",
            effects: { economy: 0, approval: 1, liberties: 1, integrity: 3 },
            tradeoff:
              "You paid for clean politics out of your own campaign account.",
          },
          {
            label: "Accept the framing but demand the delay be shortened to eighteen months",
            outcome:
              "A compromise passes committee. You tell yourself you improved a bad deal; transparency groups note that monitoring still arrives after the big contracts will have been signed.",
            effects: { economy: 1, approval: 0, liberties: 0, integrity: -1 },
            tradeoff:
              "You traded a slice of the law's power for a slice of practical progress and funding.",
          },
          {
            label: "Accept the offer fully — politics needs resources",
            outcome:
              "Your war chest fills. The clause is delayed; an investigative journalist obtains a memo within the year.",
            effects: { economy: 1, approval: -2, liberties: 0, integrity: -3 },
            tradeoff:
              "You converted public office into private funding, and the story is now a countdown.",
          },
        ],
      },
      {
        situation:
          "Final vote week: the bill is two votes short. A rival legislator offers a swap — her vote for yours on the mining-permit reform she hates, which your donors desperately want.",
        prompt: "Do you make the trade?",
        choices: [
          {
            label: "Trade: both reforms pass",
            outcome:
              "The anti-corruption bill and the mining reform both pass. Commentators can't decide whether you are a machine politician or a dealmaker who delivers — which is exactly what most real legislators are.",
            effects: { economy: 1, approval: 1, liberties: 1, integrity: 0 },
            tradeoff:
              "You used logrolling — trading support — to move two policies. Neither was passed on its merits alone.",
          },
          {
            label: "No trade; lobby wavering colleagues on the merits",
            outcome:
              "You spend sleepless days in one-on-one meetings. The bill passes by one vote. Your mining donors are furious; your district reads about it with pride.",
            effects: { economy: 0, approval: 2, liberties: 1, integrity: 2 },
            tradeoff:
              "You chose persuasion over trading, and paid your donors the price.",
          },
          {
            label: "Kill the swap and quietly work to sink the bill instead",
            outcome:
              "The bill fails by one vote. Procurement stays opaque. Your donors celebrate; the front pages name the blockers.",
            effects: { economy: 1, approval: -2, liberties: -1, integrity: -3 },
            tradeoff:
              "You chose private over public interests — the textbook definition of the problem the bill tried to solve.",
          },
        ],
      },
    ],
    verdicts: [
      {
        title: "The Institution Builder",
        body:
          "You treated the legislature's integrity as your core asset and spent popularity freely to defend it. Legislation made this way is weaker in numbers but stronger in legitimacy — and it is how professional reputations, and sometimes movements, are built.",
        test: (e) => e.integrity >= 4,
      },
      {
        title: "The Principled Maverick",
        body:
          "You crossed your own coalition repeatedly for the bill. Mavericks speed good causes and shorten their own careers; history usually remembers them kindly and their successors learn to avoid their path.",
        test: (e) => e.integrity >= 2 && e.approval >= 1,
      },
      {
        title: "The Machine Operator",
        body:
          "You treated votes as currency and interests as clients. Systems run on such traders more than on saints — but every delayed disclosure clause and dark donation is a brick in exactly the corruption problem this bill was meant to solve.",
        test: (e) => e.integrity <= -2,
      },
      {
        title: "The Incrementalist",
        body:
          "You moved the bill forward in compromised steps, trading perfection for passage. That is how most real legislation happens; the honest question is whether the compromises left the watchdog toothless.",
        test: (e) => Math.abs(e.integrity) <= 1 && Math.abs(e.approval) <= 1,
      },
      {
        title: "The Drifting Delegate",
        body:
          "Your votes traced no consistent principle — protection of self first, consequences later. Citizens may forgive disagreement; they rarely forgive blank space where a conviction should be.",
        test: () => true,
      },
    ],
  },
  {
    id: "security-liberties",
    role: "president",
    title: "Security and Civil Liberties",
    intro:
      "A series of coordinated bombings has shocked your country. Intelligence agencies ask for sweeping new powers: warrantless surveillance of suspected networks, extended detention without charge, and broad 'hate and panic' speech provisions. Public fear is high; opposition and civil-liberties groups warn the powers will outlive the emergency.",
    steps: [
      {
        situation:
          "Security council, day one: agencies present intercept evidence they say could have prevented the bombings. They want the emergency statute signed this week. Constitutional scholars warn the draft's definitions of 'subversion' are vague.",
        prompt: "Sign the emergency statute as drafted?",
        choices: [
          {
            label: "Sign it — the state must act faster than the threat",
            outcome:
              "Police gain sweeping powers within days. Early raids disrupt a planning cell and the public applauds; rights lawyers already list the vague clauses for constitutional challenge.",
            effects: { economy: 0, approval: 2, liberties: -3, integrity: -1 },
            tradeoff:
              "You bought speed and capability with due-process guarantees that may be hard to win back.",
          },
          {
            label: "Send it back with strict definitions and judicial warrants required",
            outcome:
              "The statute returns tighter: warrants, named offenses, sunset clauses. Agencies grumble that drafts take weeks. Rights groups cautiously approve.",
            effects: { economy: 0, approval: 0, liberties: -1, integrity: 2 },
            tradeoff:
              "You chose lawful precision over speed, accepting slower operational response.",
          },
          {
            label: "Use existing laws only and invest in investigative capacity instead",
            outcome:
              "You announce better forensics, more analysts, and community policing. The public asks why nothing dramatic is happening; your interior minister warns the gap is real.",
            effects: { economy: 0, approval: -1, liberties: 1, integrity: 1 },
            tradeoff:
              "You protected liberties and bet on competence rather than new power — a slower, less visible bet.",
          },
        ],
      },
      {
        situation:
          "Month one: using the new (or old) powers, police detain 40 suspects. Nine are minors. Families cannot find them for days. A leaked memo shows one regional commander used the operation to settle a personal feud.",
        prompt: "How do you handle the abuses?",
        choices: [
          {
            label: "Publicly name and prosecute the abusive commanders",
            outcome:
              "Two officers are charged. The security establishment is enraged and leaks against you begin. Rights groups call it the first real accountability in a decade.",
            effects: { economy: 0, approval: -1, liberties: 2, integrity: 3 },
            tradeoff:
              "You enforced the law against its own enforcers — the most integrity-rich, career-hostile choice available.",
          },
          {
            label: "Handle it internally; discipline quietly without charges",
            outcome:
              "Commanders are reassigned. Families of the detained receive no public answer; the precedent stands that emergency powers cost nothing when misused.",
            effects: { economy: 0, approval: 0, liberties: -1, integrity: -2 },
            tradeoff:
              "You chose institutional calm over accountability, and the lesson learned by the security services is permissive.",
          },
          {
            label: "Blame rogue elements and avoid the topic",
            outcome:
              "No one is held to account. Trust in the state's promise that these powers are safe erodes; opposition builds the next campaign around the minors.",
            effects: { economy: 0, approval: -2, liberties: -2, integrity: -2 },
            tradeoff:
              "You spent the state's credibility to avoid a fight with its security services.",
          },
        ],
      },
      {
        situation:
          "Month three: the emergency has passed. Your intelligence chief argues the powers are working and should be permanent. Your justice minister argues sunset clauses were the point and should be honored.",
        prompt: "Permanent powers or sunset?",
        choices: [
          {
            label: "Let the sunset clause expire the powers on schedule",
            outcome:
              "The statutes lapse. Agencies retain ordinary tools. The public barely notices — which is exactly what constitutional design hoped for.",
            effects: { economy: 0, approval: 0, liberties: 3, integrity: 2 },
            tradeoff:
              "You gave up tools that felt useful to keep the state's powers reversible — the heart of constitutional government.",
          },
          {
            label: "Make the powers permanent with annual judicial review",
            outcome:
              "A reasonable-sounding compromise; courts now supervise what warrants once bounded. Review works — mostly. Emergency practice quietly becomes ordinary practice.",
            effects: { economy: 0, approval: 1, liberties: -2, integrity: 0 },
            tradeoff:
              "You converted an emergency measure into standing law — the classic ratchet this field of study warns about.",
          },
          {
            label: "Expand the powers and add speech-monitoring provisions",
            outcome:
              "The state gains reach over online discourse. arrests of critics follow within months, and your legacy debate will center on a sentence about safety you gave in month one.",
            effects: { economy: 0, approval: -2, liberties: -3, integrity: -3 },
            tradeoff:
              "You chose control over the society the state exists to serve.",
          },
        ],
      },
    ],
    verdicts: [
      {
        title: "The Constitutional Guardian",
        body:
          "You repeatedly chose reversibility: strict definitions, real accountability, expiring powers. Security analysts will argue you left gaps; constitutional lawyers will cite your term for decades as the model of crisis governance.",
        test: (e) => e.liberties >= 3 && e.integrity >= 3,
      },
      {
        title: "The Balanced Steward",
        body:
          "You accepted some new power but fought to keep it defined, supervised, and accountable. That is the path most mature democracies eventually take — slower than the agencies wanted, safer than the activists feared.",
        test: (e) => e.liberties >= 0 && e.integrity >= 1 && Math.abs(e.approval) <= 1,
      },
      {
        title: "The Protector at a Cost",
        body:
          "You prioritized capability and speed, and the public felt safer for it. But every liberty point spent is a standing invitation to the next emergency to spend more — the ratchet your critics warned about is already turning.",
        test: (e) => e.liberties <= -2 && e.integrity >= -1,
      },
      {
        title: "The Accountable Commander",
        body:
          "Where others buried abuse, you prosecuted it. Your security services lost power and gained lawfulness — a trade whose value shows only over years, and which they will not thank you for.",
        test: (e) => e.integrity >= 4,
      },
      {
        title: "The Author of the Ratchet",
        body:
          "Across the crisis you moved power toward the state and away from the citizen, with each step justified by the last one's fear. This is not a caricature of tyranny; it is how ordinary, frightened, reasonable governments build one.",
        test: () => true,
      },
    ],
  },
  {
    id: "budget-priority",
    role: "policymaker",
    title: "One Budget, Three Promises",
    intro:
      "You lead the planning ministry of a province of 12 million. Unexpected revenue gives you a one-time fund worth 3% of the provincial budget. Education officials, infrastructure engineers, and hospital directors each present a case. You can fund one fully, or split it three ways.",
    steps: [
      {
        situation:
          "The presentations: schools report 30% of classrooms below standard and rising dropout in rural districts. Engineers report two bridges at end-of-life and a flood-control system overdue since the last disaster. Hospitals report a maternal-mortality spike in three districts and no obstetric specialists.",
        prompt: "Where does the money go first?",
        choices: [
          {
            label: "Full investment in schools and teachers",
            outcome:
              "Classrooms are rebuilt, teacher training funded, dropout programs expanded. Effects compound slowly — the payoff is a decade out, and hospitals keep losing mothers this year.",
            effects: { economy: 2, approval: -1, liberties: 0, integrity: 1 },
            tradeoff:
              "You chose the highest long-run return and accepted measurable suffering in the present.",
          },
          {
            label: "Full investment in infrastructure and flood control",
            outcome:
              "Bridges are replaced and the flood system built. Growth economics approve; then a preventable maternal death becomes the emblem of your priorities.",
            effects: { economy: 3, approval: -1, liberties: 0, integrity: 0 },
            tradeoff:
              "You chose visible growth assets and carried the human costs you could not fund.",
          },
          {
            label: "Targeted emergency funding for maternal health, the rest split later",
            outcome:
              "Specialists are hired, three district clinics open, mortality stabilizes within the year. The bridges and classrooms wait, and every lobbying group now knows emergencies get funded first.",
            effects: { economy: 1, approval: 2, liberties: 0, integrity: 1 },
            tradeoff:
              "You answered the loudest human need and taught every other sector that crisis is the way to your budget.",
          },
        ],
      },
      {
        situation:
          "The governor's office asks that 30% of whatever you choose flow through a contractor 'with proven capacity' — whose owner chairs the governor's reelection finance committee.",
        prompt: "How do you handle the political ask?",
        choices: [
          {
            label: "Refuse and run open competitive tenders",
            outcome:
              "Procurement is clean and slower. The governor's office stops answering your calls; your ministry's projects will fight for political support all year.",
            effects: { economy: -1, approval: 1, liberties: 0, integrity: 3 },
            tradeoff:
              "You bought clean procurement with political isolation.",
          },
          {
            label: "Compromise: the contractor bids but against real competitors",
            outcome:
              "The tender is genuinely contested and the incumbent wins one package, loses two. Auditors find the process defensible; purists call the outcome already compromised.",
            effects: { economy: 0, approval: 0, liberties: 0, integrity: -1 },
            tradeoff:
              "You kept the process legal and competitive — and kept the relationship that funds your budget line.",
          },
          {
            label: "Direct the 30% as asked; protect the rest",
            outcome:
              "The ministry's projects move fast with gubernatorial backing. An NGO files a conflict-of-interest complaint that names your signature.",
            effects: { economy: 1, approval: -1, liberties: -1, integrity: -3 },
            tradeoff:
              "You converted public funds into political access — the smallest version of the largest problem in development.",
          },
        ],
      },
      {
        situation:
          "Year-end: results are mixed. One program is underperforming badly — uptake is low because the design ignored rural distances. Cancel it and redirect, or let it run and fix quietly?",
        prompt: "What do you do with the failing program?",
        choices: [
          {
            label: "Cancel publicly, publish the evaluation, redirect funds",
            outcome:
              "Opponents call it waste; evaluators call it rare honesty. The redirection works. Officials province-wide learn that bad designs actually die.",
            effects: { economy: 1, approval: -1, liberties: 0, integrity: 3 },
            tradeoff:
              "You made failure discussable — the single strongest signal a public sector can send — at political cost.",
          },
          {
            label: "Redesign quietly with field input and report honestly next year",
            outcome:
              "The program improves to adequate. No headlines either way; your credibility with technocrats rises slightly.",
            effects: { economy: 1, approval: 0, liberties: 0, integrity: 1 },
            tradeoff:
              "You chose competence over spectacle — defensible, and less instructive to the system around you.",
          },
          {
            label: "Let it run; the cancellation optics are worse",
            outcome:
              "Funds drain for another year. The lesson learned in your ministry is that starting programs is safe, and results are optional.",
            effects: { economy: -2, approval: 0, liberties: 0, integrity: -2 },
            tradeoff:
              "You bought a quiet year with the public's money and the ministry's incentive system.",
          },
        ],
      },
    ],
    verdicts: [
      {
        title: "The Evidence Officer",
        body:
          "You treated evaluation as truth-telling, not paperwork: fund the strongest case, kill the failing design, publish both. Governments that operate this way are rare and replicable — which is the highest compliment in public administration.",
        test: (e) => e.integrity >= 4 && e.economy >= 0,
      },
      {
        title: "The Long-Run Investor",
        body:
          "You consistently chose compounding returns over visible relief. Educational economists would applaud; this year's patients and their families are the reason their applause is quiet.",
        test: (e) => e.economy >= 3,
      },
      {
        title: "The Human-First Planner",
        body:
          "When abstractions competed with a preventable death, you funded the person in front of you. Compassion governance earns loyalty — and teaches every lobby the fastest route to your desk is a crisis.",
        test: (e) => e.approval >= 2,
      },
      {
        title: "The Political Realist",
        body:
          "You kept powerful allies close and the money moving. Projects got built; the question history asks is who the projects were for, and your answers will be read through the conflict-of-interest file.",
        test: (e) => e.integrity <= -2,
      },
      {
        title: "The Balancer Without a Compass",
        body:
          "Your choices pulled in different directions without a principle you could name. Budgeting is philosophy with numbers; without one, every stakeholder writes your philosophy for you.",
        test: () => true,
      },
    ],
  },
];

export function findScenario(id: string): Scenario | undefined {
  return SCENARIOS.find((s) => s.id === id);
}
