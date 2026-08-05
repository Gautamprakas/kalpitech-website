# Photo drop-in guide

The site is wired to automatically pick up real photos once you add them —
no code changes needed. Just save files with these **exact names** in the
folders below (JPG or PNG, landscape/portrait both fine — they'll be cropped
to fit).

## public/images/hero/
- `yamuna-1.jpg` — main hero shot (Yamuna riverfront), used on the homepage
- `kalpi-town-1.jpg` — used on the About page

## public/images/places/ (2-3 photos per location)
- `chaurasi-gumbad-1.jpg`, `chaurasi-gumbad-2.jpg`, `chaurasi-gumbad-3.jpg`
- `lanka-minar-1.jpg`, `lanka-minar-2.jpg`, `lanka-minar-3.jpg`
- `ved-vyas-temple-1.jpg`, `ved-vyas-temple-2.jpg`, `ved-vyas-temple-3.jpg`
- `surya-mandir-1.jpg`, `surya-mandir-2.jpg`, `surya-mandir-3.jpg`
- `kalpi-fort-1.jpg`, `kalpi-fort-2.jpg`, `kalpi-fort-3.jpg`
- `yamuna-ghat-1.jpg`, `yamuna-ghat-2.jpg`, `yamuna-ghat-3.jpg`

## public/images/people/ (1 photo per person)
- `ved-vyas.jpg`
- `raja-birbal.jpg`
- `virendra-shah.jpg`

To add more personalities (with real photos, Instagram/Facebook links),
edit `src/data/people.js` — add an entry with a new `id`, save the photo as
`public/images/people/<id>.jpg`, and set `instagram`/`facebook` to the real
profile URLs once you have them.

## public/images/food/ (1-2 photos per restaurant/stay)
- `surya-dhaba-1.jpg`, `surya-dhaba-2.jpg`
- `balkishan-sweets-1.jpg`, `balkishan-sweets-2.jpg`
- `vinayak-restaurant-1.jpg`, `vinayak-restaurant-2.jpg`
- `bundelkhand-dhaba-1.jpg`, `bundelkhand-dhaba-2.jpg`
- `kya-khaoge-ji-1.jpg`, `kya-khaoge-ji-2.jpg`
- `baba-non-veg-1.jpg`, `baba-non-veg-2.jpg`
- `hotel-shree-hari-1.jpg`
- `hotel-regency-1.jpg`
- `hotel-amber-1.jpg`
- `rampura-palace-1.jpg`, `rampura-palace-2.jpg`

Until a photo exists at a given path, that slot shows a styled placeholder
(gradient + icon) instead of a broken image — the site always looks
finished, even before photos are added.

To add/rename locations later, edit `src/data/places.js` and
`src/data/food.js` — each entry's `images` array is the list of expected
file paths.
