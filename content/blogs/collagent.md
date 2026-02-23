---
title: "Road to Collagent"
date: "2026-02-22"
description: "Building an agentic AI layer that unifies Canvas, institutional websites, campus events, career resources, and more into a single conversational interface for students."
draft: false
---

Somewhere right now, a college student is trying to figure out when finals week starts. They open their university's student portal. It redirects to a login page. They authenticate, click through three navigation menus, land on the academic calendar, and scroll past two semesters of dates they don't care about to find the one they do. Total time: four minutes. Cognitive cost: one more reason to not bother checking next time.

This is not a technology problem. Universities have the data. They have calendars, course catalogs, assignment systems, event listings, career portals, advising tools. The problem is that all of it lives in separate systems, behind separate logins, designed by separate committees, none of which talk to each other. The student is the integration layer. And they're not great at it. Not because they're lazy, but because nobody is great at being a human API gateway between twelve disconnected services.

I'm building Collagent: a conversational AI agent that sits on top of a university's entire digital ecosystem. One chat interface. You ask it when finals are, it tells you. You ask what's due this week across all your classes, it checks Canvas, and gives you a prioritized list. You ask about career fairs, it searches your institution's event listings. The agent has the tools. You get the answers.

A fair objection: doesn't this just atrophy the student's executive function? If an agent handles the operational overhead, do students lose the muscle for managing complexity themselves? Maybe. But AI is already on track to be embedded in every workplace and workflow students will enter after graduation. The executive function worth developing isn't "remember to check six portals before Tuesday." It's critical thinking, creative problem-solving, and deep domain knowledge. Collagent doesn't remove the hard parts of being a student. It removes the tedious ones so there's more room for the hard parts.

## The Landscape: Solving the Wrong Half

Before getting into architecture, it's worth understanding what already exists in this space. A lot of money is flowing into AI for higher education, and almost none of it is going where students actually need it.

The big funded players (Element451 at $175M, Ocelot at $117M, Mainstay) are all institution-facing platforms. They're CRM and enrollment marketing tools. Students are the *object* of engagement, not the user. The university buys the software. The admissions office configures the chatbot. The student receives a nudge text about FAFSA deadlines they didn't ask for.

On the LMS side, Instructure (Canvas's parent company) has started embedding AI through partnerships with OpenAI and Google. Canvas now has AI-assisted grading tools. Google's Gemini LTI plugin offers personalized learning plans within courses. Useful, but trapped inside the LMS. They can help you understand your coursework. They can't tell you when the career fair is, what clubs are meeting this week, or whether your advisor has office hours tomorrow.

Then there's the grassroots signal. On GitHub, at least five independent developers have recently built MCP servers connecting LLMs to Canvas ([r-huijts](https://github.com/r-huijts/canvas-mcp), [vishalsachdev](https://github.com/vishalsachdev/canvas-mcp) with 80+ tools, [DMontgomery40](https://github.com/DMontgomery40/mcp-canvas-lms) with 54 tools). Multiple people, independently, building the same thing. That's not a coincidence. That's a pain point screaming to be addressed.

The gap: no one is building a unified, student-initiated conversational layer across *all* campus systems. Not just your LMS. Your entire university.

## Why This Actually Matters

You might read the above and think this is a convenience problem. The data says otherwise.

A [2025 survey by Pathify](https://pathify.com/news/new-survey-finds-fragmented-digital-systems-are-eroding-student-success-belonging-and-satisfaction-across-u-s-colleges-says-pathify/) found that 47% of students had missed a critical deadline because they simply didn't know it was due. Not procrastination. The information was buried in one of a dozen portals they're expected to monitor. 75% said they'd prefer a single centralized platform. 95% said they'd use one if offered.

Gloria Mark's research at UC Irvine shows that every context switch between apps and platforms costs roughly 23 minutes to fully regain deep focus. A student checking what's due this week might open Canvas, then their email for a professor's update, then the registrar's site for a date conflict, then back to Canvas for another class. Four context switches from a task that should take two minutes.

57% of students in the Pathify survey said their institution's digital experience causes them stress. For 41% of them, it negatively affects their ability to learn. The tools meant to support education are actively undermining it through poor integration.

## The Agent Architecture: Tools, Not Magic

Collagent isn't a chatbot with a personality and a knowledge base. It's an executive agent with tools. The distinction matters.

Anthropic's "[Building Effective Agents](https://www.anthropic.com/research/building-effective-agents)" guide draws a useful line: a *workflow* is an LLM following a predefined path. An *agent* dynamically decides what to do based on the situation, planning, using tools, observing results, and adjusting. Collagent is the latter. When a student asks "What do I have due this week?", the agent doesn't look up a cached answer. It reasons through a plan: get the course list from Canvas, fetch assignments for each active course, filter by due date, convert timestamps to the student's timezone, and present a summary. Each step is a tool call. Each result is real data from a real system.

The architecture is a single agent with a broad toolkit, not a swarm of specialized sub-agents. For an interactive, user-facing product, this is the right call. Multi-agent orchestration adds latency and complexity that makes sense for batch processing (like, say, automated coverage closure in hardware verification) but works against you when someone just wants a quick answer between classes.

The toolkit spans Canvas LMS (courses, assignments, grades, announcements, calendar), institutional web sources (academic calendars, program pages, financial aid info via a curated registry of verified URLs with clean extraction pipelines), web search as fallback, Google Calendar and Gmail for students who connect their accounts, course catalog search, and a persistent memory layer that tracks the student's academic interests, career goals, and preferences across conversations.

That memory layer isn't a novelty. It's what turns generic responses into contextual ones. Ask about "good electives" and the agent knows your major, your interests, and what you've already taken. The student profile persists across conversations while individual chat histories stay scoped to keep the context window manageable.

The connective tissue is [MCP](https://www.anthropic.com/news/model-context-protocol). Each integration, whether Canvas, Google Calendar, or an institutional web source, presents itself to the agent through the same protocol interface. The agent doesn't care what's behind each tool. It sees a description, calls it with parameters, and gets structured results back. Adding a new integration (Handshake for career services, a campus dining API) means writing an MCP server, not rewiring the agent's core logic.

## What I Learned

I started with a different idea. It was called Map My Major, an AI course planner that helped students map out their degree path. I pitched it to several students and friends and got consistent feedback: the planning was nice, but students wanted seamless access to *real data from their actual institution*, not generic advice. They didn't need another AI that could discuss course planning in the abstract. They needed one that could check whether CSE 310 has open seats next semester and whether it conflicts with their work schedule.

That feedback killed the original product and birthed this one. Collagent isn't an AI advisor. It's an AI integration layer. The value isn't in the intelligence of the model. It's in what the model can access.

## Where This Is Going

The current system is reactive. The student asks, the agent answers. The interesting direction is proactive intelligence. The agent knows your courses, your due dates, your calendar, your interests. It could surface things before you ask: "You have three assignments due Thursday, but your calendar is empty Wednesday afternoon. Want me to block study time?" Or: "The Society of Women Engineers is hosting a resume workshop next week, and you mentioned wanting internship help."

This is where the memory and interest system pays off. Not as a feature, but as the foundation for an agent that genuinely understands a student's context and acts on it. The shift from "tool you query" to "assistant that anticipates" is the difference between a search engine and a colleague.

I'm starting at ASU because that's where I am and that's where I can validate. But the architecture is institution-agnostic by design. Swap the source registry for another university's web properties, point Canvas at a different instance, and the same agent works. The protocol layer doesn't care which university is behind it.

Universities have spent decades building digital infrastructure that works in silos. The student experience is an afterthought, assembled from the seams between systems never designed to be used together. The hypothesis I'm testing is that an LLM with the right tools, the right protocol, and the right context can stitch those seams together. Not by replacing the systems, but by giving students a single place to talk to all of them at once.