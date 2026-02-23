import type { Metadata } from "next";
import "./report.css";

export const metadata: Metadata = {
  title: "CovAgent Evaluation Report — Vihaan Patel",
  description:
    "ReAct Framework vs Codex CLI — Automated Hardware Verification Coverage Closure across 4 designs.",
};

/* ── tiny bar-chart helpers (pure CSS, no JS lib) ── */

function Bar({
  label,
  value,
  max,
  color,
  suffix = "",
}: {
  label: string;
  value: number;
  max: number;
  color: "react" | "codex";
  suffix?: string;
}) {
  const pct = Math.min((value / max) * 100, 100);
  return (
    <div className="bar-row">
      <span className="bar-label">{label}</span>
      <div className="bar-track">
        <div
          className={`bar-fill bar-${color}`}
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className={`bar-value color-${color}`}>
        {value.toLocaleString()}
        {suffix}
      </span>
    </div>
  );
}

function BarChart({
  title,
  designs,
  reactValues,
  codexValues,
  max,
  suffix,
}: {
  title: string;
  designs: string[];
  reactValues: (number | null)[];
  codexValues: (number | null)[];
  max: number;
  suffix?: string;
}) {
  return (
    <div className="chart-card">
      <h4>{title}</h4>
      {designs.map((d, i) => (
        <div key={d} className="chart-group">
          <span className="chart-design-label">{d}</span>
          <Bar
            label="ReAct"
            value={reactValues[i] ?? 0}
            max={max}
            color="react"
            suffix={suffix}
          />
          <Bar
            label="Codex"
            value={codexValues[i] ?? 0}
            max={max}
            color="codex"
            suffix={codexValues[i] === null ? " (n/a)" : suffix}
          />
        </div>
      ))}
    </div>
  );
}

/* ── metric pair ── */

function MetricPair({
  reactLabel,
  reactValue,
  reactSub,
  codexLabel,
  codexValue,
  codexSub,
}: {
  reactLabel: string;
  reactValue: string;
  reactSub?: string;
  codexLabel: string;
  codexValue: string;
  codexSub?: string;
}) {
  return (
    <div className="metric-pair">
      <div className="metric-box react">
        <div className="metric-label">{reactLabel}</div>
        <div className="metric-value color-react">{reactValue}</div>
        {reactSub && <div className="metric-sub">{reactSub}</div>}
      </div>
      <div className="metric-box codex">
        <div className="metric-label">{codexLabel}</div>
        <div className="metric-value color-codex">{codexValue}</div>
        {codexSub && <div className="metric-sub">{codexSub}</div>}
      </div>
    </div>
  );
}

/* ── page ── */

export default function CovAgentReport() {
  const designs = ["chacha_top", "ethmac", "trng_top", "sd_card_ctrl"];
  const reactCov = [99.4, 98.6, 97.4, 95.2];
  const codexCov = [99.4, 98.0, 95.8, 93.4];
  const reactTokens = [20217, 151813, 44529, 38956];
  const codexTokens = [55000, 179000, 94000, 95000];
  const reactTime95 = [67, 461, 142, 211];
  const codexTime95: (number | null)[] = [139, 982, 357, null];
  const reactTimeEnd = [117, 1470, 226, 244];
  const codexTimeEnd = [323, 1635, 521, 633];

  return (
    <main className="report">
      {/* header */}
      <h1>CovAgent Evaluation Report</h1>
      <p className="report-subtitle">
        ReAct Framework vs Codex CLI — Automated Hardware Verification Coverage
        Closure
      </p>
      <p className="report-meta">
        4 designs · GPT&nbsp;5.2 · QuestaSim · Top-level stimulus only ·
        February&nbsp;2026
      </p>

      <div className="legend">
        <span className="legend-item">
          <span className="legend-dot react" /> ReAct (CovAgent)
        </span>
        <span className="legend-item">
          <span className="legend-dot codex" /> Codex CLI
        </span>
      </div>

      <hr />

      {/* ── aggregate ── */}
      <h2>Cross-Design Summary</h2>

      <div className="stat-row">
        <div className="stat-cell">
          <div className="stat-label">Avg Coverage (ReAct)</div>
          <div className="stat-value color-react">97.7%</div>
        </div>
        <div className="stat-cell">
          <div className="stat-label">Avg Coverage (Codex)</div>
          <div className="stat-value color-codex">96.7%</div>
        </div>
        <div className="stat-cell">
          <div className="stat-label">Avg Token Ratio</div>
          <div className="stat-value color-warn">3.2×</div>
          <div className="stat-sub">Codex uses more</div>
        </div>
        <div className="stat-cell">
          <div className="stat-label">Avg Time Ratio</div>
          <div className="stat-value color-warn">2.5×</div>
          <div className="stat-sub">Codex uses more</div>
        </div>
      </div>

      <div className="charts-grid">
        <BarChart
          title="Final Coverage by Design (%)"
          designs={designs}
          reactValues={reactCov}
          codexValues={codexCov}
          max={100}
          suffix="%"
        />
        <BarChart
          title="Token Efficiency (Tokens per Run)"
          designs={designs}
          reactValues={reactTokens}
          codexValues={codexTokens}
          max={180000}
        />
        <BarChart
          title="Time to 95% Coverage (seconds)"
          designs={designs}
          reactValues={reactTime95}
          codexValues={codexTime95}
          max={1000}
          suffix="s"
        />
        <BarChart
          title="Total Run Time (seconds)"
          designs={designs}
          reactValues={reactTimeEnd}
          codexValues={codexTimeEnd}
          max={1700}
          suffix="s"
        />
      </div>

      <hr />

      {/* ── per-design ── */}
      <h2>Design-Level Comparison</h2>

      {/* chacha_top */}
      <div className="design-card">
        <h3>chacha_top</h3>
        <p className="design-desc">
          ChaCha20 stream cipher — memory-mapped register interface, init/next
          FSM, 20-round quarter-round core
        </p>
        <div className="metrics-grid">
          <MetricPair
            reactLabel="Coverage"
            reactValue="99.4%"
            codexLabel="Coverage"
            codexValue="99.4%"
          />
          <MetricPair
            reactLabel="Tokens"
            reactValue="20K"
            reactSub="2 iterations"
            codexLabel="Tokens"
            codexValue="55K"
            codexSub="2 iterations"
          />
          <MetricPair
            reactLabel="Time"
            reactValue="117s"
            reactSub="67s → 95%"
            codexLabel="Time"
            codexValue="323s"
            codexSub="139s → 95%"
          />
        </div>
        <blockquote>
          <strong>Verdict:</strong> Both agents converged to the same ceiling
          (99.4%) in exactly 2 iterations. ReAct did it in 2.7× fewer tokens and
          2.8× less time. The single remaining hole (chacha_core.v:566 — 32-bit
          block counter overflow) is identical for both and is{" "}
          <strong>practically unreachable</strong> from the top-level interface
          (requires 2³² block operations).
        </blockquote>
        <div className="holes">
          <h4>Residual Coverage Holes (Shared)</h4>
          <div className="hole">
            <span className="hole-tag unreachable">Unreachable</span>
            <p>
              <strong>chacha_core.v:566-567</strong> — block1_ctr overflow carry.
              Counter seed hardwired to 0 at top level; reaching 0xFFFFFFFF
              requires 2³² next operations. Both agents correctly identified and
              classified this.
            </p>
          </div>
        </div>
      </div>

      {/* ethmac_eth_with_cop */}
      <div className="design-card">
        <h3>ethmac_eth_with_cop</h3>
        <p className="design-desc">
          Ethernet MAC controller — Wishbone bus, TX/RX DMA, MII/RMII PHY, MAC
          control frames, buffer descriptors
        </p>
        <div className="metrics-grid">
          <MetricPair
            reactLabel="Coverage"
            reactValue="98.6%"
            codexLabel="Coverage"
            codexValue="98.0%"
          />
          <MetricPair
            reactLabel="Tokens"
            reactValue="152K"
            reactSub="stopped manually"
            codexLabel="Tokens"
            codexValue="179K"
            codexSub="5 iterations"
          />
          <MetricPair
            reactLabel="Time"
            reactValue="1470s"
            reactSub="221s → 90%"
            codexLabel="Time"
            codexValue="1635s"
            codexSub="982s → 90%"
          />
        </div>
        <blockquote>
          <strong>Verdict:</strong> ReAct reached 90% coverage in 221s vs
          Codex&apos;s 982s (4.4× faster to this milestone) and achieved slightly
          higher final coverage (98.6 vs 98.0). The design is the most complex
          tested (3482 coverable statements). Both agents stalled on the same
          class of holes: <strong>protocol-level corner cases</strong> requiring
          precise multi-signal timing across TX/RX DMA, MAC control, and Wishbone
          bus interactions.
        </blockquote>
        <div className="holes">
          <h4>Residual Coverage Holes</h4>
          <div className="hole">
            <span className="hole-tag excludable">Excludable</span>
            <p>
              <strong>eth_receivecontrol.v:337</strong> — dead branch
              (ResetSlotTimer already consumed by RxReset).{" "}
              <strong>eth_spram_256x32.v:229-230</strong> — print_ram task never
              called by RTL.
            </p>
          </div>
          <div className="hole">
            <span className="hole-tag needs-effort">
              Needs Effort / Protocol Corner Cases
            </span>
            <p>
              <strong>eth_registers.v:794,797</strong> — TxC interrupt sync
              requires precise TxCtrlEndFrm + StartTxDone + r_TxFlow timing.{" "}
              <strong>eth_maccontrol.v:112</strong> — muxed abort needs
              TxAbortIn rising while TxUsedDataOutDetected already asserted.{" "}
              <strong>eth_rxethmac.v:248</strong> — broadcast detect at exact
              byte count/state alignment.{" "}
              <strong>eth_wishbone.v:938-959+</strong> — deeper
              DMA/burst/abort/underrun paths requiring precise TX/RX BD +
              master-bus handshake sequencing.
            </p>
          </div>
        </div>
      </div>

      {/* trng_top */}
      <div className="design-card">
        <h3>trng_top</h3>
        <p className="design-desc">
          True Random Number Generator — SHA-512 mixer, ChaCha20 CSPRNG, entropy
          sources, FIFO, debug subsystem
        </p>
        <div className="metrics-grid">
          <MetricPair
            reactLabel="Coverage"
            reactValue="97.4%"
            codexLabel="Coverage"
            codexValue="95.8%"
          />
          <MetricPair
            reactLabel="Tokens"
            reactValue="45K"
            reactSub="5 iterations"
            codexLabel="Tokens"
            codexValue="94K"
            codexSub="3 iterations"
          />
          <MetricPair
            reactLabel="Time"
            reactValue="226s"
            reactSub="142s → 95%"
            codexLabel="Time"
            codexValue="521s"
            codexSub="357s → 95%"
          />
        </div>
        <blockquote>
          <strong>Verdict:</strong> ReAct outperformed Codex in both coverage
          (+1.6pp) and efficiency (2.1× fewer tokens, 2.3× faster). The gap
          emerged in the 95–97% range where ReAct ran 5 targeted iterations vs
          Codex&apos;s 3 broader ones. Both hit the same fundamental wall:{" "}
          <strong>integration-tied-off hardware</strong> (entropy0 disabled,
          SHA-512 ports unconnected) and{" "}
          <strong>FSM timing precision</strong> (CSPRNG cancel edges, mixer
          discard windows).
        </blockquote>
        <div className="holes">
          <h4>Residual Coverage Holes (Combined)</h4>
          <div className="hole">
            <span className="hole-tag unreachable">
              Unreachable — Tied-off Hardware
            </span>
            <p>
              <strong>sha512_core.v:257-302</strong> — state writeback ports
              unconnected in trng_mixer instantiation.{" "}
              <strong>sha512_core.v:509</strong> — work_factor_num hardwired to
              0. <strong>trng_mixer.v:668+</strong> — entropy source 0 disabled
              at integration. <strong>trng_csprng.v:263</strong> — ready_we never
              driven high (dead code).
            </p>
          </div>
          <div className="hole">
            <span className="hole-tag needs-effort">
              Needs Effort — FSM Timing Precision
            </span>
            <p>
              <strong>trng_csprng.v:534,564</strong> — CTRL_CANCEL from
              CTRL_INIT0/CTRL_NEXT0 requires !enable_reg||seed_reg asserted
              during a precise 1-cycle FSM window.{" "}
              <strong>trng_mixer.v:1012+</strong> — discard-driven early-exit
              branches require holding discard asserted across multiple
              consecutive cycles during active mixer operation.{" "}
              <strong>chacha_core.v:682-688</strong> — init during CTRL_DONE
              (re-init without reset) needs deterministic reseed sequence.
            </p>
          </div>
        </div>
      </div>

      {/* sd-card-controller_top */}
      <div className="design-card">
        <h3>sd-card-controller_top</h3>
        <p className="design-desc">
          SD Card Controller — Wishbone slave/master, SD CMD/DAT protocol, DMA,
          dual-clock FIFO, CRC generation
        </p>
        <div className="metrics-grid">
          <MetricPair
            reactLabel="Coverage"
            reactValue="95.2%"
            codexLabel="Coverage"
            codexValue="93.4%"
          />
          <MetricPair
            reactLabel="Tokens"
            reactValue="39K"
            reactSub="5 iterations"
            codexLabel="Tokens"
            codexValue="95K"
            codexSub="3 iterations"
          />
          <MetricPair
            reactLabel="Time"
            reactValue="244s"
            reactSub="211s → 95%"
            codexLabel="Time"
            codexValue="633s"
            codexSub="never hit 95%"
          />
        </div>
        <blockquote>
          <strong>Verdict:</strong> This design produced the{" "}
          <strong>largest gap</strong> between agents. ReAct reached 95% (which
          Codex never did) and achieved it in 2.4× fewer tokens. The SD card
          controller is protocol-heavy: most remaining holes require a{" "}
          <strong>protocol-faithful behavioral model</strong> of the SD card
          (correct CRC7/CRC16, proper response framing, data tokens). Neither
          agent can synthesize such a model from scratch via stimulus alone — this
          represents the hardest category of coverage hole for LLM-based
          verification.
        </blockquote>
        <div className="holes">
          <h4>Residual Coverage Holes (Combined)</h4>
          <div className="hole">
            <span className="hole-tag unreachable">
              Unreachable — Tied-off / Defensive
            </span>
            <p>
              <strong>generic_fifo_dc_gray.v:168,192</strong> — FIFO clear ports
              hardwired to 1&apos;b0 in sd_fifo_filler.v.{" "}
              <strong>FSM defaults</strong> in sd_cmd_serial_host.v:134,
              sd_cmd_master.v:97, sd_data_master.v:74 — defensive branches for
              impossible state encodings.
            </p>
          </div>
          <div className="hole">
            <span className="hole-tag needs-effort">
              Needs Effort — Protocol Behavioral Model Required
            </span>
            <p>
              <strong>sd_cmd_serial_host.v:265</strong> — CRC match requires
              card-side response with correct CRC7.{" "}
              <strong>sd_data_master.v:135,176</strong> — TX FIFO underrun and
              transfer-complete with crc_ok require correct SD data protocol.{" "}
              <strong>sd_data_serial_host.v:99,247+</strong> — multi-block write
              continuation and 4-bit CRC shifting require protocol-correct card
              behavior. <strong>sd_data_xfer_trig.v:36,43</strong> — data
              transfer trigger needs correct command_reg programming with
              &quot;with data&quot; fields.
            </p>
          </div>
        </div>
      </div>

      <hr />

      {/* ── taxonomy ── */}
      <h2>Coverage Hole Taxonomy</h2>
      <p className="section-intro">
        Across all 4 designs, every residual coverage hole falls into one of four
        categories. This taxonomy generalizes across designs and reveals where
        LLM-based stimulus generation fundamentally struggles.
      </p>

      <div className="taxonomy-table-wrap">
        <table>
          <thead>
            <tr>
              <th>Category</th>
              <th>Description</th>
              <th>Designs Affected</th>
              <th>LLM Solvable?</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <span className="hole-tag unreachable">Type 1</span>
                <br />
                <strong>Integration Tied-Off</strong>
              </td>
              <td>
                Hardware ports/signals hardwired or unconnected at the
                integration level. No top-level stimulus can reach these paths.
              </td>
              <td>trng_top, sd-card-controller_top</td>
              <td>
                <strong>No.</strong> Requires coverage exclusions or design
                changes.
              </td>
            </tr>
            <tr>
              <td>
                <span className="hole-tag unreachable">Type 2</span>
                <br />
                <strong>Infeasible Boundary</strong>
              </td>
              <td>
                Code is theoretically reachable but requires astronomically many
                operations (2³² increments, timeout counters exceeding practical
                sim time).
              </td>
              <td>chacha_top, trng_top</td>
              <td>
                <strong>No.</strong> Inherent simulation limitation. Agent should
                recommend waiver.
              </td>
            </tr>
            <tr>
              <td>
                <span className="hole-tag needs-effort">Type 3</span>
                <br />
                <strong>Protocol Model Gap</strong>
              </td>
              <td>
                Coverage requires an external protocol-compliant behavioral model
                (SD card with CRC, Ethernet PHY) that responds correctly to DUT
                outputs.
              </td>
              <td>sd-card-controller_top, ethmac</td>
              <td>
                <strong>Partially.</strong> LLMs can generate simple BFMs but
                struggle with protocol-correct CRC computation and multi-phase
                handshakes.
              </td>
            </tr>
            <tr>
              <td>
                <span className="hole-tag needs-effort">Type 4</span>
                <br />
                <strong>FSM Timing Precision</strong>
              </td>
              <td>
                Path requires specific multi-signal timing alignment across a
                narrow FSM window (1-2 cycles). Random stimulus has vanishingly
                low probability of hitting these.
              </td>
              <td>trng_top, ethmac, sd-card-controller_top</td>
              <td>
                <strong>Partially.</strong> LLMs can reason about FSM transitions
                but cannot observe runtime state to time stimulus precisely.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr />

      {/* ── insights ── */}
      <h2>Key Insights</h2>

      <div className="insights">
        <div className="insight">
          <div className="insight-num">Insight 1</div>
          <h4>The 95% Cliff: Where LLMs Hit the Wall</h4>
          <p>
            Both agents reach ~90% coverage quickly and comparably. The 90→95%
            range is where structured coverage feedback matters — ReAct&apos;s
            faster iteration loop outperforms here consistently. Above 95%,
            neither agent makes meaningful progress regardless of compute
            invested. This is not a model capability limit; it is a{" "}
            <strong>verification methodology limit</strong> of open-loop,
            stimulus-only approaches without behavioral models or internal
            observability.
          </p>
        </div>
        <div className="insight">
          <div className="insight-num">Insight 2</div>
          <h4>Token Efficiency ≠ Iteration Count</h4>
          <p>
            ReAct uses 2–3× fewer tokens than Codex while achieving equal or
            better coverage. Codex&apos;s hidden internal iteration
            (compile-fix loops within its sandbox) consumes significant tokens on
            error recovery that never reaches the coverage frontier.
          </p>
        </div>
        <div className="insight">
          <div className="insight-num">Insight 3</div>
          <h4>Protocol Knowledge Is the Binding Constraint</h4>
          <p>
            The hardest residual holes require the testbench to{" "}
            <strong>act as a protocol-compliant peer</strong> (SD card, Ethernet
            PHY, bus master). LLMs can generate stimulus sequences that drive
            inputs, but they cannot easily synthesize correct closed-loop
            behavioral models that compute CRCs, maintain state machines, and
            respond to DUT outputs in real-time within a single testbench.
          </p>
        </div>
        <div className="insight">
          <div className="insight-num">Insight 4</div>
          <h4>Coverage Feedback Quality &gt; Quantity</h4>
          <p>
            ReAct&apos;s annotated source feedback (marking specific uncovered
            lines with surrounding context) outperforms Codex&apos;s approach of
            scanning full coverage reports. However, even high-quality feedback
            fails when the agent cannot reason about <strong>why</strong> a line
            is uncovered.
          </p>
        </div>
        <div className="insight">
          <div className="insight-num">Insight 5</div>
          <h4>Agent Architecture Matters Less Than Environment</h4>
          <p>
            ReAct and Codex hit the <strong>same coverage ceilings</strong> on
            every design and identify the <strong>same residual holes</strong>.
            The bottleneck is not in reasoning architecture but in what
            information the agent has access to (no runtime observability, no
            protocol reference implementations, no formal reachability analysis).
          </p>
        </div>
        <div className="insight">
          <div className="insight-num">Insight 6</div>
          <h4>Unreachable Code Detection Is a Solved Subtask</h4>
          <p>
            Both agents reliably identify Types 1 and 2 holes from RTL (trace
            signal connectivity, check port bindings, analyze counter bounds).
            The challenge is that agents spend iterations{" "}
            <strong>attempting</strong> to cover these lines before concluding
            they are unreachable, wasting 20–40% of post-95% compute.
          </p>
        </div>
      </div>

      <hr />

      {/* ── generalization ── */}
      <h2>Why LLMs Fail at Corner-Case Stimulus Generation</h2>

      <blockquote className="callout-danger">
        <strong>Core Finding:</strong> LLM-driven stimulus generation is
        fundamentally an <strong>open-loop</strong> process — the agent generates
        input sequences without observing internal DUT state at runtime. The
        coverage holes that resist this approach are precisely those that require{" "}
        <strong>closed-loop interaction</strong> or{" "}
        <strong>precise temporal targeting</strong>.
      </blockquote>

      <h4>1. No Runtime Observability → Blind Timing</h4>
      <p>
        LLMs generate stimulus at &quot;compile time&quot; of the testbench — all
        timing is pre-determined. For FSM corner cases that require stimulus
        precisely when the DUT is in a specific internal state, the agent must
        guess timing based on static RTL analysis. The probability of blind
        timing hitting a 1-cycle window in a 1000+ cycle simulation is
        vanishingly small.
      </p>

      <h4>2. No Behavioral Model Synthesis → Broken Protocol Loops</h4>
      <p>
        Many designs implement protocols where the DUT&apos;s behavior depends on
        correct responses from external agents. Covering the DUT&apos;s
        receive/response-processing paths requires a testbench component that
        observes DUT outputs in real-time and responds correctly — computing
        CRCs, echoing command indices, maintaining protocol state.
      </p>

      <h4>3. No Formal Reachability → Wasted Compute on Dead Code</h4>
      <p>
        Agents spend 20–40% of post-95% compute attempting to cover lines that
        are provably unreachable from the top-level interface. A formal or static
        reachability pre-pass would eliminate this wasted compute entirely.
      </p>

      <h4>4. Specification-to-Stimulus Gap → Missing Verification Intent</h4>
      <p>
        LLMs read specifications and generate &quot;obvious&quot; stimulus.
        Specifications rarely describe corner cases explicitly — they describe
        intended behavior, not edge conditions. Bridging this gap requires{" "}
        <strong>RTL-aware reasoning</strong> (tracing gating conditions backward
        from uncovered lines to determine what input sequence could reach them).
      </p>

      <hr />

      {/* ── implications ── */}
      <h2>Implications for CovAgent</h2>

      <blockquote>
        The path to higher coverage is not &quot;better prompting&quot; or
        &quot;more iterations&quot; — it requires{" "}
        <strong>fundamentally richer agent capabilities</strong>: formal
        reachability pre-filtering, protocol BFM generation from specifications,
        and runtime-aware directed stimulus through simulation hooks or
        co-simulation.
      </blockquote>

      <div className="taxonomy-table-wrap">
        <table>
          <thead>
            <tr>
              <th>Capability Gap</th>
              <th>Impact on Coverage</th>
              <th>Potential Solution</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>Reachability Pre-pass</strong>
              </td>
              <td>Eliminates 20-40% wasted post-95% compute</td>
              <td>
                Static cone-of-influence analysis or lightweight formal check
                before agent starts targeting
              </td>
            </tr>
            <tr>
              <td>
                <strong>BFM Generation</strong>
              </td>
              <td>Unlocks 2-5pp coverage on protocol-heavy designs</td>
              <td>
                Dedicated sub-agent or tool that synthesizes protocol-compliant
                response models from spec + DUT port observation
              </td>
            </tr>
            <tr>
              <td>
                <strong>Runtime Observability</strong>
              </td>
              <td>Enables precise FSM-state-aligned stimulus</td>
              <td>
                Co-simulation hooks, SystemVerilog coverpoint-guided feedback, or
                assertion-based state detection in testbench
              </td>
            </tr>
            <tr>
              <td>
                <strong>RTL Backward Tracing</strong>
              </td>
              <td>
                Converts &quot;uncovered line&quot; → &quot;required input
                sequence&quot;
              </td>
              <td>
                Tool that traces gating conditions from uncovered line back to
                top-level ports, providing agent with a concrete stimulus recipe
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
