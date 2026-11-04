/**
 * Power Structure Explorer data: the three classic branches, what they do,
 * and how each checks the others. Educational, institution-generic.
 */

export interface Branch {
  id: "executive" | "legislative" | "judiciary";
  name: string;
  essence: string;
  responsibilities: string[];
  composition: string[];
  checksOn: { target: string; how: string }[];
  checkedBy: { source: string; how: string }[];
  everyday: string;
}

export const BRANCHES: Branch[] = [
  {
    id: "executive",
    name: "Executive",
    essence: "The branch that executes the law and runs the state day to day.",
    responsibilities: [
      "Enforces laws passed by the legislature",
      "Proposes policy, budgets, and legislation",
      "Directs ministries, agencies, and the civil service",
      "Conducts foreign policy and commands the armed forces (usually)",
      "Issues implementing regulations within legal limits",
    ],
    composition: [
      "Head of government (president or prime minister) and cabinet",
      "Ministries and departments staffed by civil servants",
      "Independent agencies with delegated authority (central bank, election commission)",
    ],
    checksOn: [
      { target: "Legislature", how: "Veto power (presidential systems), calling and dissolving parliament (parliamentary), proposing the budget and agenda" },
      { target: "Judiciary", how: "Appointing judges (usually with confirmation), setting courts' budgets and case backlogs" },
    ],
    checkedBy: [
      { source: "Legislature", how: "Impeachment, budget approval, oversight hearings, confirmation of appointees, no-confidence votes (parliamentary)" },
      { source: "Judiciary", how: "Judicial review of regulations and executive acts; constitutional courts striking down ultra vires action" },
      { source: "Electorate & media", how: "Elections, investigative journalism, and civil society scrutiny of abuse of power" },
    ],
    everyday: "Your driver's license, garbage collection, fuel subsidy, and embassy visa all come from the executive — the most visible branch of daily life.",
  },
  {
    id: "legislative",
    name: "Legislative",
    essence: "The branch that makes law, represents citizens, and holds the purse strings.",
    responsibilities: [
      "Debates and passes statutes and constitutional amendments",
      "Approves the national budget and taxes",
      "Oversees the executive through hearings, questions, and audits",
      "Represents constituents and aggregates societal interests",
      "Ratifies treaties and confirms major appointments (varies by system)",
    ],
    composition: [
      "Elected representatives — unicameral (one chamber, e.g. Indonesia's DPR) or bicameral (two chambers, e.g. senate + house)",
      "Committees that specialize in sectors such as finance, defense, or education",
      "Party factions and coalitions that organize voting",
    ],
    checksOn: [
      { target: "Executive", how: "Budget control, impeachment/removal, hearings and investigations, approval of appointments, no-confidence votes" },
      { target: "Judiciary", how: "Creating and restructuring courts, setting jurisdiction, confirming judges, impeachment of judges" },
    ],
    checkedBy: [
      { source: "Executive", how: "Veto, agenda-setting, and calling elections (parliamentary systems)" },
      { source: "Judiciary", how: "Striking down unconstitutional statutes" },
      { source: "Voters", how: "Elections every fixed term — the ultimate check, plus transparent procedure and press coverage of sessions" },
    ],
    everyday: "When minimum wages, tuition subsidies, or flood-infrastructure budgets are set, that is the legislature debating and voting.",
  },
  {
    id: "judiciary",
    name: "Judiciary",
    essence: "The branch that interprets the law and settles disputes, including about the constitution itself.",
    responsibilities: [
      "Applies laws to concrete cases and disputes",
      "Reviews whether laws and government acts conform to the constitution (judicial review)",
      "Protects individual rights against state and private violation",
      "Resolves disputes between branches and levels of government",
      "In some systems, adjudicates election disputes",
    ],
    composition: [
      "Courts organized by hierarchy: trial, appeal, supreme court",
      "Constitutional courts (e.g. Indonesia's Mahkamah Konstitusi) in many newer democracies",
      "Independent judicial councils or appointments commissions that shield careers from politics",
    ],
    checksOn: [
      { target: "Executive", how: "Ruling against unlawful regulations, detentions, and administrative acts" },
      { target: "Legislature", how: "Invalidating statutes that violate the constitution or rights guarantees" },
    ],
    checkedBy: [
      { source: "Legislative & executive", how: "Appointment and confirmation, budgets, jurisdiction, and (rarely, for misconduct) impeachment" },
      { source: "Professional norms", how: "Published reasoned judgments, appeals, legal profession scrutiny, and transparency of decisions" },
    ],
    everyday: "A court deciding a land dispute, restoring a blocked social-media account, or ordering an agency to pay — the judiciary is the referee citizens invoke.",
  },
];

export function findBranch(id: string): Branch | undefined {
  return BRANCHES.find((b) => b.id === id);
}
