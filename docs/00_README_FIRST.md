# Documentation package — how to use

This folder contains **Markdown** documentation for the **Bus Booking (MERN)** project. Markdown is the standard format for technical writing in repositories; you can convert it to **Microsoft Word** (`.docx`) or **PDF** for submission.

## About “100+ pages”

A genuine hundred-page manual usually combines:

1. **Core technical manual** (this repo: multiple chapters on architecture, APIs, database, workflows).
2. **Screenshot volume** — export one screenshot per page (Home, Booking, Search results, Seat map, Payment, Ticket, Profile, My bookings, Login, Register, etc.). Twelve screens × multiple states can add **30–50 pages** quickly when pasted as full-page images in Word.
3. **Appendices** — test logs, meeting notes, data dictionary printouts, signed approval forms (you add from your college process).

Use `docs/scripts/merge-to-docx.sh` (requires [Pandoc](https://pandoc.org/)) to merge all chapters into one `.docx`. Adjust **font size**, **line spacing**, and **page breaks** in Word to match your college’s minimum page requirement.

## Suggested screenshots (see `appendices/C_screenshot_capture_guide.md`)

Place image files under `docs/screenshots/` and embed them in a dedicated chapter or paste into Word after conversion.

## Chapters (read `DOCUMENTATION_INDEX.md`)

---

*Version note: generated to match the codebase structure; adjust URLs, credentials, and deployment targets for your environment.*
