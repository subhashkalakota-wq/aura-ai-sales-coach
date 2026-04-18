export type DealStage = "Discovery" | "Demo" | "Proposal" | "Negotiation" | "Closed Won";
export type Urgency = "High" | "Medium" | "Low";
export type Status = "Active" | "Pending" | "In Pipeline";

export interface Customer {
  id: string;
  name: string;
  company: string;
  avatar: string;
  email: string;
  status: Status;
  urgency: Urgency;
  value: number;
  stage: DealStage;
  probability: number;
  lastContact: string;
  recommendation: string;
}

export interface AIAlert {
  id: string;
  type: "risk" | "opportunity" | "info";
  title: string;
  body: string;
  customer: string;
  time: string;
}

export interface InboxMessage {
  id: string;
  from: string;
  company: string;
  subject: string;
  preview: string;
  time: string;
  date: string;
  urgency: Urgency;
  unread: boolean;
  folder: "inbox" | "sent";
}

export const customers: Customer[] = [
  { id: "c1", name: "Sarah Chen", company: "Acme Corp", avatar: "SC", email: "sarah@acme.com", status: "Active", urgency: "High", value: 248000, stage: "Negotiation", probability: 78, lastContact: "2h ago", recommendation: "Send SOC2 report — security review is the last blocker." },
  { id: "c2", name: "Marcus Webb", company: "Northwind Labs", avatar: "MW", email: "m.webb@northwind.io", status: "Active", urgency: "High", value: 184500, stage: "Proposal", probability: 64, lastContact: "Yesterday", recommendation: "Schedule technical review with their CTO this week." },
  { id: "c3", name: "Elena Rodríguez", company: "Helix Systems", avatar: "ER", email: "elena@helix.co", status: "Pending", urgency: "Medium", value: 92000, stage: "Demo", probability: 45, lastContact: "3d ago", recommendation: "Re-engage — competitor (Salesforce) just sent them a quote." },
  { id: "c4", name: "Jin Park", company: "Vertex AI", avatar: "JP", email: "jin@vertex.ai", status: "In Pipeline", urgency: "Low", value: 56000, stage: "Discovery", probability: 22, lastContact: "1w ago", recommendation: "Send case study on similar AI-first deployment." },
  { id: "c5", name: "Priya Anand", company: "Quill & Ink", avatar: "PA", email: "priya@quill.co", status: "Active", urgency: "Medium", value: 128000, stage: "Proposal", probability: 58, lastContact: "5h ago", recommendation: "Follow up on pricing question — proposal opened 4 times." },
  { id: "c6", name: "Owen Bryce", company: "Lumen Health", avatar: "OB", email: "owen@lumen.health", status: "Pending", urgency: "Low", value: 38000, stage: "Discovery", probability: 18, lastContact: "2w ago", recommendation: "Cold — recommend monthly check-in cadence." },
];

export const alerts: AIAlert[] = [
  { id: "a1", type: "risk", title: "Competitor surge detected", body: "Helix Systems received a quote from Salesforce 3h ago.", customer: "Helix Systems", time: "12m ago" },
  { id: "a2", type: "opportunity", title: "High intent signal", body: "Sarah Chen opened your proposal 4 times today.", customer: "Acme Corp", time: "34m ago" },
  { id: "a3", type: "risk", title: "Engagement drop", body: "No reply from Marcus Webb in 6 days. Last touch had positive sentiment.", customer: "Northwind Labs", time: "2h ago" },
  { id: "a4", type: "opportunity", title: "Champion identified", body: "Priya Anand forwarded your proposal to her CFO.", customer: "Quill & Ink", time: "5h ago" },
];

export const pipelineData = [
  { week: "W1", value: 1.2, deals: 18 },
  { week: "W2", value: 1.6, deals: 22 },
  { week: "W3", value: 1.4, deals: 19 },
  { week: "W4", value: 2.1, deals: 28 },
  { week: "W5", value: 1.9, deals: 24 },
  { week: "W6", value: 2.6, deals: 31 },
  { week: "W7", value: 3.1, deals: 36 },
];

export const stageData = [
  { stage: "Discovery", count: 12, value: 380 },
  { stage: "Demo", count: 8, value: 520 },
  { stage: "Proposal", count: 6, value: 740 },
  { stage: "Negotiation", count: 4, value: 620 },
  { stage: "Closed", count: 9, value: 1140 },
];

export const inbox: InboxMessage[] = [
  { id: "i1", from: "Sarah Chen", company: "Acme Corp", subject: "Need API access this week — urgent", preview: "Hi, our engineering lead needs sandbox API access by Thursday so we can…", time: "10:42 AM", date: "Today", urgency: "High", unread: true, folder: "inbox" },
  { id: "i2", from: "Elena Rodríguez", company: "Helix Systems", subject: "Comparing options — quick question", preview: "Hey — we're evaluating a few platforms. Could you share how you handle…", time: "9:18 AM", date: "Today", urgency: "High", unread: true, folder: "inbox" },
  { id: "i3", from: "Marcus Webb", company: "Northwind Labs", subject: "Re: Proposal feedback", preview: "Thanks for sending this over. Generally aligned but have a couple of…", time: "Yesterday", date: "Yesterday", urgency: "Medium", unread: false, folder: "inbox" },
  { id: "i4", from: "Owen Bryce", company: "Lumen Health", subject: "Following up next quarter", preview: "Hey, things are tight on budget this quarter but we'd love to revisit in…", time: "2d ago", date: "2 days", urgency: "Low", unread: false, folder: "inbox" },
  { id: "s1", from: "You → Sarah Chen", company: "Acme Corp", subject: "Meeting invite — Wed 2pm", preview: "Confirming our sync for Wednesday. Google Meet link attached…", time: "Yesterday", date: "Yesterday", urgency: "Medium", unread: false, folder: "sent" },
  { id: "s2", from: "You → Priya Anand", company: "Quill & Ink", subject: "Tailored proposal v2", preview: "Hi Priya, attaching the revised proposal with the discount we discussed…", time: "2d ago", date: "2 days", urgency: "Medium", unread: false, folder: "sent" },
];
