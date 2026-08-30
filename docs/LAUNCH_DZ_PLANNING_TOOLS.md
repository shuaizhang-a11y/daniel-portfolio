# DZ Planning Tools — launch content

Reference copy for announcing DZ Planning Tools V1.2 on
danielshuaizhang.com. Not published anywhere automatically — draft
text for manual use.

## Short description

DZ Planning Tools is a design-technology workflow for translating
structured Rhino planning data into controlled, reviewable Revit
updates.

## One-paragraph announcement

DZ Planning Tools V1.2 is now live at danielshuaizhang.com. It's a
Revit design-technology tool that turns a Rhino-authored planning
export into an explicit, reviewable Change Plan — CREATE, UPDATE,
SKIP, OBSOLETE — before anything is published, running the actual
write as a single Revit transaction group that either completes in
full or leaves the model untouched. V1.2 is the first release
packaged for someone who isn't its author: a sample project, public
documentation, and an installer that checks its own prerequisites.
Setup and a sample project are both available to download, with
published SHA-256 checksums.

## LinkedIn post

Architectural planning often starts in Rhino, while downstream BIM
delivery needs a structured Revit model. Getting from one to the
other by hand is where duplicated modelling, unclear update status,
and coordination errors creep in.

I've been building DZ Planning Tools to close that gap: it reads a
Rhino-authored planning export, compares it against the open Revit
model, and turns the difference into an explicit plan — which floors
are new, which changed, which are unchanged, which are obsolete —
for review before anything is written. Publishing runs as a single
Revit transaction: it either completes in full or leaves the model
exactly as it was.

V1.2 is the first release built for someone other than me to install
and run — a sample project, public documentation, and a checked
installer. Setup and sample downloads, with SHA-256 checksums, are up
now.

https://danielshuaizhang.com/work/dz-planning-tools

#BIM #Revit #Rhino #ComputationalDesign #DesignTechnology
