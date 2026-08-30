import { Link } from 'react-router-dom'
import useDocumentMeta from '../hooks/useDocumentMeta'
import { dzDocOrder, dzDocs } from '../data/dzDocs'

const badges = ['Revit 2025', 'Rhino 8', 'Rhino.Inside.Revit', 'Windows 11']

const workflowSteps = [
  ['Rhino', 'Planning geometry, authored and iterated.'],
  ['Structured planning data', 'A manifest exported from the Rhino model — buildings, floors, geometry.'],
  ['Analyse', 'The export is compared with the open Revit model. Writes nothing.'],
  ['Change Plan', 'CREATE / UPDATE / SKIP / OBSOLETE — one action per floor.'],
  ['Review', 'The operator reads the plan before approving it.'],
  ['Revit', 'Publish runs as one transaction group. All of it, or none of it.'],
]

const setupFields = [
  ['Project Source', 'The manifest and source model currently loaded, and whether the source reads CURRENT, CHANGED, MISSING, UNREADABLE, UNCONFIRMED or NOT SELECTED.'],
  ['Building', 'Which building, of possibly several, is selected for analysis and publish.'],
  ['Expected RVT', 'The Revit model this building is meant to publish into.'],
  ['Model State', 'Whether the open Revit document matches the building’s expected RVT.'],
  ['Freshness', 'CURRENT, STALE, NOT ANALYSED, RVT NOT ASSIGNED or one of the other states — the answer to “can I trust the last analysis?”'],
  ['Plan', 'The generated Change Plan for the selected building, once one exists.'],
  ['Changes', 'How many floors are CREATE or UPDATE in the current plan.'],
  ['Obsolete', 'How many previously published floors no longer appear in the export.'],
  ['Blockers', 'Conditions that must be resolved before a plan can be published.'],
  ['Conflicts', 'Situations the product flags rather than resolves silently.'],
  ['Next Action', 'One specific recommended next step, generated from current state. It advises — it is never itself the permission to publish.'],
]

const planActions = [
  ['CREATE', 'No such floor exists yet. One will be made.'],
  ['UPDATE', 'The floor exists and something about it differs.'],
  ['SKIP', 'The floor exists and matches. Nothing happens.'],
  ['OBSOLETE', 'A published floor no longer appears in the export — Mark Only by default, Delete only with a separate explicit confirmation.'],
]

const safetyPoints = [
  'Expected-RVT checking — a building only publishes into the Revit model it is assigned to.',
  'Source freshness — CURRENT, CHANGED, MISSING, UNREADABLE, UNCONFIRMED or NOT SELECTED, checked before a plan is trusted.',
  'Blockers and conflicts are surfaced explicitly; a plan with blockers cannot be published.',
  'Approval is checked against the world, not remembered — changing the source, the building or the manifest invalidates it, and it is re-verified at the moment of Publish.',
  'Mark Only is the default for obsolete floors; Delete is a separate, explicit, non-default confirmation.',
  'Publishing the same source twice is idempotent — a repeat run reads SKIP, not a second write.',
  'Every plan is reviewed before it is published; nothing publishes unattended.',
]

function Download({ name, filename, size, sha, href }) {
  return <div className="dz-download-card">
    <span className="eyebrow">{name}</span>
    <a className="dz-download-link" href={href} download={filename}>{filename}<span aria-hidden="true">↓</span></a>
    <span className="dz-download-size">{size}</span>
    <span className="dz-sha">SHA-256<br /><code>{sha}</code></span>
  </div>
}

export default function DzPlanningTools() {
  useDocumentMeta({
    title: 'DZ Planning Tools — Rhino to Revit Planning Workflow | Daniel Zhang',
    description: 'DZ Planning Tools is a Revit design-technology tool for translating structured Rhino planning data into controlled, reviewable BIM updates.',
    canonical: 'https://danielshuaizhang.com/work/dz-planning-tools',
    ogTitle: 'DZ Planning Tools — Rhino to Revit Planning Workflow',
    ogDescription: 'Controlled planning-to-Revit publishing for architectural workflows. Review before publish, always.',
  })

  return <article className="dz-page">
    <section className="dz-hero">
      <span className="eyebrow">Design Technology · BIM Automation · Rhino · Revit</span>
      <h1>DZ Planning Tools</h1>
      <p className="dz-hero-lead">Rhino planning data → controlled, reviewable Revit publishing.</p>
      <div className="dz-badges"><span className="dz-version">Version 1.2</span>{badges.map(b => <span key={b}>{b}</span>)}</div>
      <div className="dz-actions">
        <a className="dz-btn" href="/downloads/DZPlanningTools-1.2.0-Setup.exe" download>Download Installer</a>
        <a className="dz-btn dz-btn-outline" href="https://github.com/shuaizhang-a11y/daniel-portfolio/releases/download/dz-planning-tools-v1.2.0/DZPlanningTools-1.2.0-Sample.zip">Download Sample Project</a>
      </div>
      <div className="dz-actions dz-actions-secondary">
        <Link className="text-link" to="/work/dz-planning-tools/getting-started">Getting Started <span>→</span></Link>
        <Link className="text-link" to="/work/dz-planning-tools/system-requirements">System Requirements <span>→</span></Link>
      </div>
    </section>

    <section className="dz-section">
      <span className="eyebrow">Overview</span>
      <div className="dz-section-copy">
        <p>Architectural planning often begins in Rhino and other flexible design environments, while downstream BIM delivery requires structured Revit models. Manual transfer between the two creates familiar risks: duplicated modelling, inconsistent floor information, unclear update status, coordination errors, accidental destructive changes.</p>
        <p>DZ Planning Tools creates a controlled review layer between structured planning data and Revit publishing. A Rhino-authored export is analysed against the open Revit model, turned into an explicit plan, reviewed, and only then published — inside a single Revit transaction group that either completes in full or leaves the model exactly as it was.</p>
      </div>
    </section>

    <section className="dz-section">
      <span className="eyebrow">Workflow</span>
      <div className="dz-workflow">
        {workflowSteps.map(([title, text], i) => <div className="dz-workflow-step" key={title}>
          <span className="dz-workflow-index">{String(i + 1).padStart(2, '0')}</span>
          <strong>{title}</strong>
          <p>{text}</p>
        </div>)}
      </div>
    </section>

    <section className="dz-section">
      <span className="eyebrow">Project Setup</span>
      <div className="dz-section-copy"><p>Before any model change is published, the operator understands project state — what source is loaded, whether it is current, which building is selected, and what a publish would actually do.</p></div>
      <div className="dz-field-grid">
        {setupFields.map(([field, text]) => <div className="dz-field" key={field}><span>{field}</span><p>{text}</p></div>)}
      </div>
    </section>

    <section className="dz-section">
      <span className="eyebrow">Review before publish</span>
      <div className="dz-workflow dz-workflow-compact">
        {['Refresh', 'Analyse', 'Generate Change Plan', 'Review', 'Publish'].map((step, i) => <div className="dz-workflow-step" key={step}>
          <span className="dz-workflow-index">{String(i + 1).padStart(2, '0')}</span>
          <strong>{step}</strong>
        </div>)}
      </div>
      <div className="doc-table-wrap dz-plan-table">
        <table>
          <thead><tr><th>Action</th><th>Meaning</th></tr></thead>
          <tbody>{planActions.map(([action, text]) => <tr key={action}><td>{action}</td><td>{text}</td></tr>)}</tbody>
        </table>
      </div>
      <div className="dz-section-copy"><p>A publish runs as a single Revit transaction group: every stage succeeds and the group commits, or the group rolls back and the model is unchanged. There is no partial result, and nothing publishes without an explicit, re-verified approval.</p></div>
    </section>

    <section className="dz-section">
      <span className="eyebrow">Multi-building project review</span>
      <div className="dz-section-copy">
        <p>One RVT per building. Project Review can accumulate analysis and review status across multiple buildings in a project, but each building is still analysed and published individually, into its own currently-open Revit model.</p>
        <p>There is no Publish All, no automatic Revit document switching, and no shared-RVT multi-building publishing. This is deliberate: publishing several buildings into one model makes obsolete-detection ambiguous, since a floor missing from the export cannot be distinguished from a floor belonging to a building that was not published. One model per building keeps that question answerable.</p>
      </div>
    </section>

    <section className="dz-section">
      <span className="eyebrow">Safety</span>
      <ul className="dz-safety-list">{safetyPoints.map(point => <li key={point}>{point}</li>)}</ul>
    </section>

    <section className="dz-section dz-downloads-section">
      <span className="eyebrow">Download DZ Planning Tools V1.2</span>
      <div className="dz-downloads">
        <Download name="Installer" filename="DZPlanningTools-1.2.0-Setup.exe" size="11.5 MB" sha="57055976be442784e8009280456f02ec94e7e2633d4446206dbdfcfc56b595d1" href="/downloads/DZPlanningTools-1.2.0-Setup.exe" />
        <Download name="Sample Project" filename="DZPlanningTools-1.2.0-Sample.zip" size="37.2 MB" sha="b0cbbbd28750020d8028619c0ba20139d3f76b4927a1377469ce090575833a18" href="https://github.com/shuaizhang-a11y/daniel-portfolio/releases/download/dz-planning-tools-v1.2.0/DZPlanningTools-1.2.0-Sample.zip" />
      </div>
      <div className="dz-section-copy">
        <p>The installer runs a per-user check for Revit 2025, Rhino 8 and Rhino.Inside.Revit, then installs with no administrator rights required.</p>
      </div>
      <details className="dz-advanced">
        <summary>Advanced: ZIP package</summary>
        <div className="dz-downloads dz-downloads-secondary">
          <Download name="ZIP Package" filename="DZPlanningTools-1.2.0-Setup.zip" size="277 KB" sha="845429b9d85c2199c67a983d50dd68aa41aabe2dc118e0c0e55b6657eacd698d" href="/downloads/DZPlanningTools-1.2.0-Setup.zip" />
        </div>
        <p>The raw payload and Install.cmd, for offline installs or manual inspection. Most users want the installer above.</p>
      </details>
      <a className="text-link" href="/downloads/SHA256SUMS.txt">SHA256SUMS.txt <span>→</span></a>
    </section>

    <section className="dz-section">
      <span className="eyebrow">Documentation</span>
      <div className="dz-doc-grid">
        {dzDocOrder.map(slug => <Link className="dz-doc-card" to={`/work/dz-planning-tools/${slug}`} key={slug}>
          <strong>{dzDocs[slug].title}</strong>
          <p>{dzDocs[slug].intro}</p>
          <span aria-hidden="true">→</span>
        </Link>)}
      </div>
    </section>

    <section className="dz-section">
      <span className="eyebrow">System Requirements</span>
      <div className="doc-table-wrap">
        <table>
          <tbody>
            <tr><td>Operating system</td><td>Windows 11, 64-bit</td></tr>
            <tr><td>Revit</td><td>2025 (exactly this version)</td></tr>
            <tr><td>Rhino</td><td>8 (exactly this version)</td></tr>
            <tr><td>Rhino.Inside.Revit</td><td>Validated with Rhino.Inside.Revit 1.33.9347.9430</td></tr>
          </tbody>
        </table>
      </div>
      <Link className="text-link" to="/work/dz-planning-tools/known-limitations">Known limitations <span>→</span></Link>
    </section>

    <section className="dz-about">
      <p>Designed and developed by Daniel Zhang as part of an ongoing exploration of architectural computation, BIM automation and design-technology workflows.</p>
    </section>
  </article>
}
