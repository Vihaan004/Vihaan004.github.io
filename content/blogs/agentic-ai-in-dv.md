---
title: "Agentic AI in Hardware Design Verification"
date: "2026-01-26"
description: "Exploring the use of multi-agent AI systems to autonomously close coverage gaps in hardware verification, leveraging LLMs and LangGraph for orchestration."
draft: false
---

Chip verification is where schedules go to die. A design can be architecturally brilliant, pass every code review, and still spend months stuck in a loop of testbench refinement, coverage analysis, and "why isn't this branch getting hit?" The bottleneck isn't writing tests. It's closing coverage. Systematically exercising every line, branch, and state transition in a hardware design until the numbers say you're done.

We're building an agentic framework that does this autonomously. An AI system that reads a design specification, generates SystemVerilog testbenches, runs simulations, parses coverage reports, and iterates, all without human intervention. The goal: full code and functional coverage closure, driven by LLM-powered agents orchestrated through [LangGraph](https://docs.langchain.com/oss/python/langgraph/overview).

## Why Coverage Closure Is Hard to Automate

Coverage closure sounds mechanical: find uncovered lines, write stimulus that hits them, repeat. In practice, it's anything but. A coverage hole in a nested FSM might require a precise 12-cycle sequence of input transitions. An uncovered branch in a cryptographic core might only trigger under a specific combination of key scheduling and data alignment. Human verification engineers bring intuition, domain knowledge, and creative problem-solving to this task. They also bring time, weeks to months of it.

Prior work in LLM-assisted verification has explored assertion generation, testbench scaffolding, and stimulus creation. [ChiRAAG](https://arxiv.org/html/2402.00093v3) uses ChatGPT for iterative assertion refinement. [LLM4DV](https://arxiv.org/abs/2310.04535) demonstrated LLM-driven stimulus generation from functional coverpoints. [VerilogReader](https://arxiv.org/abs/2406.04373) approaches coverage-centric test generation by exposing design code to the LLM. But most of these efforts target narrow slices of the verification problem. Automated coverage closure from specifications, the way an engineer actually works, remains largely unaddressed.

## The Foundation: A ReAct Agent That Verifies

Our framework starts with a [ReAct (Reasoning + Acting)]((https://www.ibm.com/think/topics/react-agent)) agent built on LangGraph. The agent has access to a set of modular tools: file operations for reading specs and writing testbenches, simulation tools that compile and run designs through QuestaSim or [Verilator](https://github.com/verilator), and analysis tools that parse coverage databases and identify exactly which lines remain uncovered.

The workflow mirrors what a verification engineer does on day one. The agent reads the specification. It generates a testbench with constrained random stimulus. It compiles, simulates across multiple random seeds, and examines the coverage report. Then it reasons about what's missing. The annotated source shows which lines were hit and which weren't. The agent uses this feedback to generate a targeted testbench for the next iteration, and the loop continues until coverage is met or progress stalls.

State management is filesystem-centric. Large artifacts (testbenches, simulation logs, coverage databases) live on disk, not in the agent's context window. The LangGraph state tracks metadata: iteration count, current coverage percentage, paths to files. This keeps the agent's reasoning focused and the infrastructure scalable.

## Where One Agent Isn't Enough

A single ReAct agent works. It gets results. But it also hits ceilings. When coverage plateaus at 85%, the agent needs to reason about complex multi-module interactions, manage an increasingly long conversation history, and make strategic decisions about which coverage holes to prioritize, all within a single reasoning loop. The context window fills with simulation logs. The agent revisits failed strategies. Progress slows.

This is where multi-agent architectures become compelling. Not because they're trendy, but because hardware verification is inherently multi-role work. Real verification teams have specialists. One engineer understands the spec deeply. Another focuses on stimulus generation. A third reads coverage reports and identifies the hardest remaining holes. They coordinate, but they think differently.

We're building toward a multi-agent system that mirrors this division of labor. A specification analyst that deeply understands design intent. A stimulus generator optimized for producing diverse, high-coverage testbenches. A coverage analyst that reads annotated source and identifies the highest-value targets. An orchestrator that decides strategy: when to explore broadly versus target specific holes, when to abandon a stuck approach, when to merge coverage across attempts.

The agents share a common state through LangGraph's orchestration, but each brings a different "prior" to the problem. The stimulus generator doesn't need to understand every coverage hole in detail. It needs a clear target and the freedom to be creative. The coverage analyst doesn't generate code. It reads results and produces actionable feedback. Separation of concerns, applied to AI reasoning.

## What's Next

The multi-agent architecture opens several directions. Functional coverage (writing and closing covergroups, not just line coverage) becomes more natural when a dedicated agent can reason about coverage models independently. UVM-based testbench generation is another frontier, requiring agents that understand the UVM class hierarchy and sequencer patterns.

We're also exploring coverage-guided strategies inspired by ensemble learning: treating each agent's output as a weak learner, using coverage deltas as the loss function, and letting the orchestrator focus effort where the marginal gain is highest. The simulator is the oracle. Coverage is the ground truth. The agents debate; the tools decide.

Hardware verification has always been a human-intensive, iteration-heavy process. The hypothesis we're testing is that a well-structured team of AI agents, each with a clear role, access to the right tools, and grounded by simulator feedback, can compress that iteration cycle from weeks to hours. Not by replacing verification engineers, but by handling the mechanical grind of coverage closure so engineers can focus on what they're best at: finding the bugs that no coverage metric would catch.

## Interim Evaluation Report

We've run CovAgent's ReAct framework head-to-head against Codex CLI across 4 open-source hardware designs (ChaCha20, Ethernet MAC, TRNG, SD Card Controller). Check out this [detailed evaluation report](/works/covagent-report), it covers per-design coverage results, token efficiency, a taxonomy of residual coverage holes, and analysis of where LLM-driven stimulus generation fundamentally hits its limits.

---

*This project is part of ongoing research at Arizona State University's ADVENT Lab, under Dr. Aman Arora. Contact vpatel69@asu.edu for more information.*