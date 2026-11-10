# Changelog

The current version is shown in the bottom-right corner of the app.

## v1.18
- Poster background palette (colour version only): small palette in the bottom-right on desktop, and under ⋯ on phones; 8 soft presets plus a rainbow picker for any colour. The wheel's tints blend with the chosen background, and exports use it too

## v1.17
- cloudflare-worker.js upgraded to FLUX.2 [klein] 4B (better prompt following), with automatic fallback to Flux Schnell; accepts picture sizes
- Collage requests now send the picture size for each tile
- One-click demo links: #collage-demo (desktop) and #collage-demo-phone build the example collage automatically

## v1.16
- AI collage rebuilt:
  - Pictures now show the goal itself (objects, place, activity) instead of generic portraits; goals are no longer quoted, so no stray text
  - Cartoon style by default; storybook, 3D animated, watercolour and realistic photo also available
  - All pictures are blended into one seamless collage with soft, overlapping edges (no more separate polaroids)
  - ⚙ next to each collage item in the Export menu opens the settings: style, editable prompt (with reset), optional life area names

## v1.15
- Fixed the gap in the "Show Example" label and capitalised Example

## v1.14
- AI collage connected to the free Cloudflare Workers AI picture service: fast, no sign-in, three pictures made at a time

## v1.13
- Dedicated phone tour (12 steps) covering the close-up wheel, area arrows, ring tabs, text box, Next/Back, title/signature/date, Whole poster, example, Export and More
- Goals, Steps and Feelings colour-coded (blue, orange, pink) on phone tabs and text box, and on the desktop editor labels
- Phone buttons coloured: area arrows match the area colour, Next is green, Fill in / Whole poster switch is blue

## v1.12
- New phone interface (desktop unchanged):
  - "Fill in" view: a close-up of the current slice that turns as you move around the wheel, with one text box at a time
  - Goals / Steps / Feelings tabs, Next and Back, ‹ › to change area, swipe the wheel to jump between areas, tap a ring to go straight to it
  - "Whole poster" view shows everything at a glance; tapping a slice jumps back to filling it in
  - Title, signature and date links under the card
  - Output format and colour choices moved into the ⋯ menu on phones
  - First-time phone visitors start with the Phone output format
- Tour adapts to phone or desktop

## v1.11
- Exported files are named after the person (signed name, or the name in a title like "Maria’s Goals") and include the size, e.g. grant-rogers-goal-wheel-desktop-1920x1080.png
- Export and ⋯ menus sit slightly lower, with a gap below the top bar

## v1.10
- The editing window hides while the Export (or ⋯) menu is open and comes back when it closes
- Example wheel is titled "Sam’s Goals"
- Shorter first tour step

## v1.9
- Each Export item (desktop wallpaper, phone wallpaper, AI collage desktop, AI collage phone) has a ▾ to pick its size: common PC screen sizes, popular iPhone, Samsung and Pixel models, or a custom size
- Phone layout now adapts to any phone shape, and the phone preview matches the chosen phone
- Removed the duplicate "This is an example" banner above the poster

## v1.8
- Poster fills much more of the screen and sits right next to the editing window
- Editing window is always open on desktop (Hobbies → Goals selected at the start); no close button
- Enter on the last ring moves to the next area
- Example mode shows a short note in the editing window
- Added cloudflare-worker.js: free AI picture service (Cloudflare Workers AI) for the collage

## v1.7
- Larger wheel, legend, signature and date on both desktop and phone; phone wheel moved up
- Removed the "Update on" reminder text
- Toolbar: "✓ Get started" and "Show example" on the left; output format, colour/black & white, Export and ⋯ on the right
- "Colours" label removed
- Version label moved to the bottom-right corner

## v1.6
- "Getting started" (green) replaces "Show me how" and sits far left, followed by Output format, Colours and Show example
- Colour-coded toolbar controls
- The poster no longer moves when the section editor opens
- Tour highlights each part of the wheel in its own arc shape
- AI collage rebuilt: one picture per goal, arranged as a polaroid-style collage, generated from the Export menu (desktop or phone)
- Removed the PDF export, the separate collage button and the hint text under the poster

## v1.5
- Generate AI collage is now one click: no sign-in, the picture appears with a Download button for desktop (landscape) or phone (portrait)
- New cog next to the button (and in the collage window) for style, wording and generator settings
- Puter generators (GPT Image 2, Nano Banana Pro) remain as optional higher-quality choices

## v1.4
- Version number shown in the app

## v1.3
- "Show example" tick box with a filled-in sample wheel (your own wheel is never overwritten)

## v1.2
- "Show me how" guided tour
- Upload a picture of your signature (background removed automatically)
- Life areas can no longer be removed; missing original areas are restored
- Export menu: desktop wallpaper, phone wallpaper, A4 PDF (landscape for Desktop, portrait for Phone)
- Legend headings GOALS, STEPS, FEELINGS; colour legend matches the wheel
- Area names 20% larger

## v1.1
- Single-screen layout with a top toolbar
- Editors open only when you click a part of the poster
- Compact A4-shaped desktop poster; neutral legend

## v1.0
- First release: goal wheel with curved text, colour and black-and-white styles, wallpaper and PDF downloads, AI collage
