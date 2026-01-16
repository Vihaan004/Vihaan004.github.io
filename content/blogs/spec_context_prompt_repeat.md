---
title: "spec, context, prompt, repeat"
date: "2025-10-07"
draft: false
---

As of October 8th, 2025, I am admitting myself to be a little spoiled as a programmer. Don’t get me wrong — this doesn’t mean I’m no good — but getting algorithms to create algorithms has persuaded me to embark on this self-reflection journey: to compare the programmer I dreamed of five years ago with the programmer I’m shaping into right now.

GenAI has obviously transformed the software development cycle from *plan-code-debug-deploy* to what I call *spec-context-prompt-repeat*. I find myself caught in this loop so often that I might as well get it printed on a T-shirt. SCPR is basically how I leverage (or, let’s be honest, abuse) LLMs to bring random ideas to life.

The one thing that got me to pursue engineering in the first place was the ability to improve quality of life through cool tech, to transform science and imagination into reality. This pursuit created the productivity nerd I am today, with a constant urge to maximize efficiency in every repetitive task I can identify in my life. Productivity has never been a more valuable deliverable than it is today. Pick a workflow, inject an LLM into it, call it “next-gen,” and boom — you’ve got a startup.

From many of his interviews, Sam Altman says he’s quite envious of my generation for the power that AI has placed in our hands, making this arguably the best time in human history to build a startup. I believe there are several caveats to that, but that’s a whole different conversation.

Still, my doubts haven’t stopped me from making many of my workflows deeply dependent on AI. Many of the projects I’m currently working on are being built from the ground up using the SCPR cycle. Here’s how I describe each stage:

### Spec

This is the toughest stage in the cycle, because it is the most important. If you’re relying on an LLM to build upon your imagination from scratch, it’s necessary to describe that imagination in the utmost detail. Specifications are no longer static “requirements documents”, they are living, structured expressions of intent. A good spec isn’t just what you want built; it captures *why* it matters, *how* it aligns with user needs, and *what values* drive its design.

In a world where “specifications are the new code,” the clarity and completeness of this stage determine everything downstream. The LLM can only be as good as the communication it receives. A strong spec becomes an executable artifact, one you can test, grade, and evolve with the model as your co-developer.

### Context

If “spec” defines **what** you want, context defines **where** and **why** it lives. This stage is all about feeding the model the right environmental cues: prior decisions, architectural trade-offs, known constraints, and the underlying user problem. Context is the connective tissue between your vision and the model’s reasoning.

In traditional programming, context was implicit — the developer carried it in their head or documentation. In the SCPR cycle, context is *explicitly engineered*. The richer the context, the less “lossy” the translation from idea to implementation. The goal is to minimize misalignment by giving the model enough surrounding data to reason the same way you would.

Think of context as your **alignment layer,** it keeps the model grounded in your intent, much like OpenAI’s Model Spec serves as a trust anchor for consistent behavior across models and teams.

### Prompt

Now, If spec is the blueprint and context is the environment, the prompt is the *execution command*. It’s where your intent and context meet expression. This is the stage where you communicate with the model in natural language to produce an artifact: code, documentation, design, or analysis.

But prompting is not mere instruction-giving; it’s interactive communication. Each prompt represents a hypothesis: “Given this spec and context, can the model produce what I intend?” Prompting well means understanding that you’re not programming logic anymore, you’re programming *language*. Precision here doesn’t come from syntax but from clarity and iterative feedback.

### Repeat

Every output from the model is an opportunity for reflection. You loop back, not to fix syntax errors, but to refine intent. Each repetition polishes your spec, expands your context, and sharpens your prompting technique.

This “repeat” stage is what makes SCPR *evolutionary* rather than linear. It’s not just debugging; it’s alignment tuning. You’re effectively training your personal development system (yourself and the model) through continual iteration. Over time, your specs get cleaner, your context more complete, and your prompts more expressive.

You might think that the end goal is still juicing out a final product, but from a critical perspective, it is to establish a *clarity of intention* , or in other words a shared understanding between human and machine.

## Takeaway

Here’s the big BUT: SCPR might not last forever, and that’s okay. The pace at which AI absorbs new tasks is almost unsettling; what feels like wizardry today becomes autocomplete tomorrow. With Clade 4.5, GPT-5 Codex, and the upcoming AgentKit likely stealing the spotlight at Dev Day 2025, I can’t help but wonder what’s next, maybe I should ask ChatGPT. Maybe we’re entering an era where NLP truly stands for *Natural Language Programming* rather than *Processing*. If that’s the case, then the real bottleneck won’t be code or compute, it’ll be communication. The best programmers of tomorrow might not be the ones who write the most elegant code, but the ones who can talk to machines the way good leaders talk to teams: clearly, purposefully, and with just enough sarcasm to remind them who’s still in charge.


### Inspiration

- https://www.youtube.com/watch?v=8rABwKRsec4
- https://model-spec.openai.com/2025-09-12.html
- https://ainativedev.io/news/the-most-valuable-developer-skill-in-2025-writing-code-specifications
- https://www.youtube.com/watch?v=hS1YqcewH0c
- https://github.blog/ai-and-ml/generative-ai/spec-driven-development-with-ai-get-started-with-a-new-open-source-toolkit
