/** Educational political-history timeline. Neutral, long-term offline content. */

export interface TimelineEvent {
  year: string;
  title: string;
  body: string;
  era: "antiquity" | "medieval" | "early-modern" | "modern" | "contemporary";
}

export const ERA_LABELS: Record<TimelineEvent["era"], string> = {
  antiquity: "Antiquity",
  medieval: "Medieval",
  "early-modern": "Early Modern",
  modern: "Modern",
  contemporary: "Contemporary",
};

export const TIMELINE: TimelineEvent[] = [
  {
    year: "c. 508 BCE",
    title: "Cleisthenes founds Athenian democracy",
    body: "Reorganizing Athenian tribes, Cleisthenes gives citizens direct votes in the assembly and juries — the first recorded broad (male, citizen-only) direct democracy.",
    era: "antiquity",
  },
  {
    year: "c. 399–322 BCE",
    title: "Socrates, Plato, and Aristotle write on politics",
    body: "The trial of Socrates and the philosophical responses of his students begin the Western tradition of asking who should rule and why.",
    era: "antiquity",
  },
  {
    year: "509 BCE – 27 BCE",
    title: "The Roman Republic",
    body: "Rome develops mixed government — consuls, senate, and popular assemblies with checks on each — an enduring model for later constitutional design, though it excluded most residents.",
    era: "antiquity",
  },
  {
    year: "c. 622–632 CE",
    title: "Early Islamic political community",
    body: "The constitution of Medina and the Rashidun period establish consultative governance (shura) traditions and succession debates that shape political thought across the Islamic world.",
    era: "medieval",
  },
  {
    year: "1215",
    title: "Magna Carta",
    body: "English barons force King John to accept that royal power is bound by law — a milestone in constitutionalism, even though it protected elites first.",
    era: "medieval",
  },
  {
    year: "c. 1300–1320s",
    title: "Majapahit and early Southeast Asian statecraft",
    body: "Major insular polities such as Majapahit develop layered tribute-and-alliance governance, illustrating Southeast Asian models of authority distinct from European feudalism.",
    era: "medieval",
  },
  {
    year: "1689",
    title: "English Bill of Rights and Locke's Two Treatises",
    body: "After the Glorious Revolution, parliamentary supremacy and Locke's consent-based government become the template for limited, constitutional rule.",
    era: "early-modern",
  },
  {
    year: "1748",
    title: "Montesquieu's The Spirit of the Laws",
    body: "Separation of powers is articulated as the institutional condition of liberty, directly shaping later constitutions.",
    era: "early-modern",
  },
  {
    year: "1776–1789",
    title: "American Revolution and Constitution",
    body: "The Declaration invokes natural rights; the 1787 Constitution implements federalism, separation of powers, and judicial review — later re-founded as a full republic with the 14th–15th Amendments.",
    era: "modern",
  },
  {
    year: "1789–1799",
    title: "The French Revolution",
    body: "Ideas of popular sovereignty, citizenship, and rights erupt violently; the revolution becomes the reference case for both democratic aspiration and revolutionary terror.",
    era: "modern",
  },
  {
    year: "1800s",
    title: "Abolition, suffrage, and labor movements",
    body: "Movements against slavery, for women's suffrage, and for workers' rights expand the 'people' in popular government across the 19th century.",
    era: "modern",
  },
  {
    year: "1848",
    title: "Marx and Engels publish the Communist Manifesto",
    body: "A programmatic statement of class-struggle politics that will shape labor parties, revolutions, and Cold-War ideological conflict.",
    era: "modern",
  },
  {
    year: "1945–1950s",
    title: "Indonesian independence and the 1945 Constitution",
    body: "Indonesia proclaims independence (17 August 1945), adopts Pancasila and the 1945 Constitution, and navigates between parliamentary and presidential experimentation in its early decades.",
    era: "contemporary",
  },
  {
    year: "1948",
    title: "Universal Declaration of Human Rights",
    body: "After World War II, UN member states adopt a common standard of rights, anchoring international human-rights politics and constitutional guarantees worldwide.",
    era: "contemporary",
  },
  {
    year: "1965–1998",
    title: "Authoritarian era and New Order in Indonesia",
    body: "Centralized presidential rule shows how stability, development, and political control can be traded off; it ends with the 1998 Asian financial crisis and mass protest.",
    era: "contemporary",
  },
  {
    year: "1998–2002",
    title: "Reformasi: Indonesian constitutional amendments",
    body: "Term limits, direct presidential elections, a Constitutional Court, human-rights chapters, and regional autonomy restructure Indonesian democracy.",
    era: "contemporary",
  },
  {
    year: "1989–1991",
    title: "End of the Cold War and third wave of democratization",
    body: "The Berlin Wall falls, the USSR dissolves, and dozens of states adopt elections and constitutions — while some later drift back to hybrid authoritarianism.",
    era: "contemporary",
  },
  {
    year: "2000s–present",
    title: "Digital politics and information disorder",
    body: "Social media reshapes campaigns, protest coordination, propaganda, and fact-checking; debates over misinformation and platform power become central to democratic politics.",
    era: "contemporary",
  },
];
