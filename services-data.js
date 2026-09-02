/* Shared service/price data for Salon One — the single source of truth
   consumed by both services.html (full price list) and index.html
   (homepage booking section), so the two never drift out of sync. */
var TIERS = ['Stylist', 'Senior', 'Director', 'Artistic Dir.'];

var CATEGORIES = [
  { slug: 'cuts', name: 'Hair Cuts & Styling', tiered: true,
    photos: [{ src: 'https://salonone.co.nz/wp-content/uploads/2025/03/Haircuts.jpg', alt: 'Haircuts & styling at Salon One' }],
    copy: '<p>Kick off your hair transformation with a 15-minute consultation for just $20 — redeemable against any hair service you book.</p><p>Our pricing is tailored to the time and care your style deserves, with additional charges for specialist treatments like straightening, GHD curls, or managing thick hair. Love the idea of a weekly blow wave or set? Give us a call and ask about a discounted rate just for you.</p>',
    services: [
      { name: "1st Visit Haircut", prices: ["$110","$115","$125","$135"] },
      { name: "Female Cut & Blow Wave", prices: ["$95","$105","$115","$120"] },
      { name: "Female Cut & Dry", prices: ["$90","$95","$100","$105"] },
      { name: "Female Re-Style, from", prices: ["$106","$115","$125","$135"] },
      { name: "Fringe Trim", prices: ["$25","$30","$30","$30"] },
      { name: "Male Clipper Cut", prices: ["$25","$29","$37","$40"] },
      { name: "Male Cut", prices: ["$50","$55","$60","$65"] },
      { name: "Male Re-Style, from", prices: ["$75","$85","$95","$106"] },
      { name: "Rough Dry", prices: ["$30","$30","$32","$34"] },
      { name: "Child's Dry Cut", detail: "Under 12, depends on length", prices: ["$45","$50","$55","$60"] },
      { name: "Child's Re-Shape", detail: "Under 12, depends on length", prices: ["$80","$90","$100","$110"] }
    ],
    note: "Extra time is charged in 15-minute increments — ask your stylist for a quote if your style needs more." },

  { slug: 'perms', name: 'Perms', tiered: true,
    services: [
      { name: "Long Hair Perm", detail: "Price may vary depending on length", prices: ["$245","$265","$280","$300"] },
      { name: "Short Hair Perm", prices: ["$175","$195","$200","$215"] },
      { name: "Top Hair Perm", prices: ["$160","$170","$180","$190"] }
    ] },

  { slug: 'extensions', name: 'Hair Extensions', tiered: false,
    copy: '<p>Create hair length &amp; body in an instant! Ready for a bold change or frustrated with waiting for your hair to grow? Transform your look instantly with premium hair extensions that add luscious length and vibrant volume.</p><p>Your stylist will tailor a shampoo and conditioner regimen to extend their life — steering clear of silicone and alcohol-based products. For best results, use a loop brush to minimise shedding and protect your new, radiant style.</p>',
    note: "Client-supplied, or we can order in at additional cost. Consultation required — please book yours in.",
    services: [
      { name: "Hair Extension Removal", flat: "Consultation required" },
      { name: "Hair Extension Install", flat: "Consultation required" },
      { name: "Re-Tape Extensions", flat: "Consultation required" },
      { name: "Bead Installation", flat: "Consultation required" },
      { name: "Bead Removal", flat: "Consultation required" }
    ] },

  { slug: 'colour', name: 'Hair Colour', tiered: true,
    photos: [{ src: 'https://salonone.co.nz/wp-content/uploads/2025/03/Hair-Colouring.jpg', alt: 'Hair colouring at Salon One' }],
    copy: '<p>We specialise in modern, on-trend hair colouring designed to suit your lifestyle as much as your look. From effortless lived-in blondes to beautifully soft grey blending, our expert colourists create seamless, dimensional results that grow out gracefully and require minimal upkeep.</p><p>We’re known for our low-maintenance techniques — soft balayage, seamless blends, and custom toning that keeps hair looking fresh between visits. Looking for something bolder? We also create rich, head-turning shades, from glossy coppers to bespoke statement colours.</p>',
    services: [
      { name: "T-Section — Panel Work", prices: ["$106","$115","$126","$130"] },
      { name: "T-Section — Tint Re-touch", prices: ["$80","$90","$91","$101"] },
      { name: "1–10 Foils — Panel", prices: ["$50","$60","$70","$75"] },
      { name: "T-Section Foils", prices: ["$106","$115","$126","$130"] },
      { name: "1/2 Head Foils — Short", prices: ["$125","$135","$145","$160"] },
      { name: "1/2 Head Foils — Long", prices: ["$135","$150","$165","$175"] },
      { name: "Full Head Foils — Short", prices: ["$151","$161","$171","$181"] },
      { name: "Full Head Foils — Long", prices: ["$165","$179","$191","$204"] },
      { name: "Re-touch (Root)", prices: ["$87","$94","$104","$114"] },
      { name: "Tint Medium", prices: ["$111","$126","$136","$146"] },
      { name: "Tint Long", prices: ["$129","$139","$149","$161"] },
      { name: "Tint — X-Long or Thick Hair", prices: ["P.O.A","P.O.A","P.O.A","P.O.A"] },
      { name: "Toner 30gm / Gloss Colour", prices: ["$65","$65","$70","$70"] },
      { name: "Creative Colour", detail: "Ombre, Bleach & Tone, Balayage — consultation required", prices: ["from $151","from $161","from $171","from $181"] }
    ],
    note: "Extra product used beyond standard usage is charged per 20g as applicable." },

  { slug: 'ghd', name: 'GHD Curls & Finishing', tiered: 'mixed',
    note: "Timing depends on length and thickness.",
    services: [
      { name: "GHD Curls — 1 hr", prices: ["$101","$118","$139","$149"] },
      { name: "GHD Curls — 45 mins", prices: ["$90","$101","$107","$115"] },
      { name: "GHD Curls (Beachy or Glam) — 30 mins", flat: "$65" },
      { name: "Sleek & Straight — 30 mins", flat: "$74" },
      { name: "Basic Braid — 30 mins", flat: "$74" },
      { name: "Lunch Time Blowdry — 30 mins", detail: "Mon–Fri, 12–3pm. Long or thick hair incurs an extra charge", flat: "$74" }
    ] },

  { slug: 'smooth', name: 'Smooth Filler & Permanent Straightening', tiered: false,
    note: "Free consultation — call 07 571 2183.",
    services: [
      { name: "Short Hair", flat: "POA" },
      { name: "Long Hair", flat: "POA" }
    ] },

  { slug: 'packages', name: 'Hair Packages', tiered: true,
    note: "Treatment Blow Wave Package — extra long or thick hair may incur an additional charge.",
    services: [
      { name: "Short Hair", prices: ["$120","$120","$130","$140"] },
      { name: "Long Hair", prices: ["$135","$135","$140","$150"] }
    ] },

  { slug: 'sets', name: 'Hair Sets, Grey Blending & Balayage', tiered: 'mixed',
    photos: [{ src: 'https://salonone.co.nz/wp-content/uploads/2026/04/Grey-hair-packages-2.jpg', alt: 'Grey blending hair colour packages' }],
    copy: '<h3>T-Section Grey Blending</h3><p>A subtle refresh through the part line and hairline to softly blend greys and add brightness where it’s most visible.</p><h3>Half Head Grey Blending</h3><p>Foils through the top, sides and crown to diffuse greys while creating soft dimension and brightness.</p><h3>Full Head Grey Blending</h3><p>Full head foils to seamlessly blend greys throughout the hair for a soft, multi-tonal finish.</p><h3>Grey Blending Root Melt</h3><p>A customised root melt designed to softly blend and blur greys at the root, creating a seamless, polished finish, plus a blow wave.</p><h3>Balayage / Lived-In Blonde & Brunette</h3><p>A customised, low-maintenance colour for a soft, lived-in result with seamless dimension and natural grow-out — includes a tint retouch, ½ head of foils, personalised toner, and a professional blow wave.</p><h3>Not sure what to book?</h3><ul><li><b>T-Section</b> — a quick refresh through your part line and face frame.</li><li><b>Half Head</b> — a noticeable refresh with soft blending and dimension.</li><li><b>Full Head</b> — a full transformation with maximum blending and brightness.</li><li><b>Root Melt</b> — soft root coverage with a natural, seamless grow-out.</li><li><b>Balayage / Lived-In Colour</b> — brighter, dimensional colour with a more noticeable change while still low maintenance.</li></ul>',
    services: [
      { name: "Hair Set", prices: ["$75","$85","$95","$104"] }
    ],
    pairNote: "Set package prices — additional product or time required to achieve your desired result may incur an extra charge.",
    pairServices: [
      { name: "T-Section Grey Blending Foils + Toner + Blow Wave", pair: ["$250","$260"] },
      { name: "Half Head Grey Blending Foils + Toner + Blow Wave", pair: ["$280","$295"] },
      { name: "Full Head Grey Blending Foils + Toner + Blow Wave", pair: ["$300","$325"] },
      { name: "Grey Blending Root Melt & Blow Wave Package", pair: ["$150","$160"] },
      { name: "Balayage / Lived-In Blonde & Brunette Package", detail: "Half Head Foils + Toner + Blow Wave", pair: ["$360","$380"] }
    ] },

  { slug: 'treatments', name: 'Hair Treatments', tiered: false,
    photos: [
      { src: 'https://salonone.co.nz/wp-content/uploads/2025/08/SP-spray-luxury-triple-treatment.jpg', alt: 'SP Spray Luxury Triple Treatment' },
      { src: 'https://salonone.co.nz/wp-content/uploads/2025/08/Lipid-Booster-Single.jpg', alt: 'Lipid Booster Single treatment' },
      { src: 'https://salonone.co.nz/wp-content/uploads/2025/08/SP-Foam-And-Mask.jpg', alt: 'SP Foam and Mask treatment' },
      { src: 'https://salonone.co.nz/wp-content/uploads/2025/08/SP-Foam.jpg', alt: 'SP Foam treatment' },
      { src: 'https://salonone.co.nz/wp-content/uploads/2025/08/Nioxin-Dermabrasion.jpg', alt: 'Nioxin Dermabrasion Treatment' },
      { src: 'https://salonone.co.nz/wp-content/uploads/2025/08/Toner-Treatment.jpg', alt: 'Toner Treatment' }
    ],
    copy: '<p><em>Indulge your hair with our premium in-salon treatment range designed to restore, protect and transform.</em></p><h3>SP Spray Luxury Triple Treatment</h3><p>Moisture, smoothing, anti-frizz — customised to your hair needs. Our team’s number one go-to treatment.</p><h3>Lipid Booster Single</h3><p>Ideal for hair that’s damaged or severely compromised — penetrates deep into the hair fibre to rebuild and reinforce from within.</p><h3>SP Foam and Mask</h3><p>A luxurious dual treatment that reconditions both hair and scalp, delivering intense hydration without weighing hair down.</p><h3>SP Foam</h3><p>A luxurious emulsion foam treatment that delivers deep reconditioning — renewed, revitalised, beautifully soft.</p><h3>Nioxin Dermabrasion Treatment</h3><p>Think of it as a facial for your scalp — removes buildup and accelerates scalp surface regeneration by up to 34%. Recommended every 30–45 days.</p><h3>Toner Treatment</h3><p>Zero-damage, temporary colour-depositing masks that refresh, maintain, or transform your hair colour between salon visits.</p>',
    services: [
      { name: "SP Spray Luxury Triple Treatment", flat: "$70" },
      { name: "Lipid Booster Single", flat: "$58" },
      { name: "SP Foam and Mask", flat: "$60" },
      { name: "SP Foam", flat: "$35" },
      { name: "Nioxin Dermabrasion Treatment", flat: "$70" },
      { name: "Toner Treatment", flat: "$35" }
    ] },

  { slug: 'waxing', name: 'Waxing', tiered: false,
    copy: '<p>Salon One offers a full range of waxing and hair removal services for both men and women — book an appointment and get silky smooth skin in an instant.</p><h3>Benefits of professional waxing</h3><ul><li><b>Longer-lasting smoothness</b> — weeks of beautifully smooth skin, far beyond what shaving offers.</li><li><b>Finer hair regrowth</b> — with consistent waxing, hair often grows back softer and finer over time.</li><li><b>Gentle exfoliation</b> — the waxing process naturally exfoliates, leaving skin incredibly soft.</li><li><b>Freedom from daily hassle</b> — no more razor burn, nicks, or daily shaving.</li></ul>',
    services: [
      { name: "Nostril or Ear Wax", flat: "$30" },
      { name: "Lip Wax", flat: "$21" },
      { name: "Chin Wax", flat: "$24" },
      { name: "Facial Wax", detail: "Inc. brows, lip, chin", flat: "$55" },
      { name: "Under Arm Wax — 30 mins", flat: "$42" },
      { name: "1/2 Arm Wax — 15 mins", flat: "$40" },
      { name: "3/4 Leg Wax — 45 mins", flat: "$60" },
      { name: "Half Leg Wax — 30 mins", flat: "$55" },
      { name: "Full Leg Wax — 45–60 mins", flat: "$75" },
      { name: "Bikini Wax — 30 mins", flat: "$56" },
      { name: "Extended Bikini Wax — 30 mins", flat: "$60" },
      { name: "1st Brazilian Wax", flat: "$80" },
      { name: "4-Weekly Brazilian Wax — 45 mins", flat: "$70" },
      { name: "Men's Back Wax", flat: "$55" },
      { name: "Men's 1/2 Leg Wax", flat: "$75" },
      { name: "Men's Full Leg Wax — 45–60 mins", flat: "$85" },
      { name: "Men's Chest Wax — 30 mins", flat: "$75" },
      { name: "Men's Chest & Stomach Wax — 60 mins", flat: "$90" }
    ] },

  { slug: 'wax-packages', name: 'Wax Packages', tiered: false,
    services: [
      { name: "Half Upper Leg & Bikini — 30 mins", flat: "$72" },
      { name: "Half Upper Leg & Extended Bikini — 30 mins", flat: "$91" },
      { name: "Under Arm & Half Lower Leg — 30 mins", flat: "$69" }
    ] },

  { slug: 'facials', name: 'Facials & Peels', tiered: false,
    copy: '<p>Our highly skilled beauty therapists can assist with all your skin concerns — dull or lifeless skin, ageing, pigmentation, sun damage, sensitivity, acne, and dryness. We use the Aspect skincare range, an active Cosmeceutical range giving instant results, always free of parabens, sulphates, and synthetic fragrance.</p><p><em>Please arrive 15 minutes prior to your appointment to fill out our consultation form.</em></p><h3>Probiotic Facial</h3><p>Relaxes stressed skin, clarifies problematic skin, refines skin appearance.</p><h3>Hydrating Facial</h3><p>Deep hydration, boosts radiance, anti-ageing benefits.</p><h3>Lux Facial</h3><p>Instant hydration and vitamin boost, ultimate nutrition, infusion for ageing or dehydrated skin.</p><h3>Adashiko Kirei Facial</h3><p>(“Kirei” is the Japanese word for clean + beautiful.) Consciously curated to nourish skin with the world’s finest pure collagen and advanced skin-loving ingredients — stimulates new collagen production, reduces fine lines, lightens and brightens skin tone.</p><h3>Professional Peels</h3><p>Advanced Aspect skin peels using clinically proven formulations for dullness, congestion, fine lines and pigmentation.</p><ul><li><b>Lacto Botanical Peel</b> (60 min) — gentle lactic-acid treatment for dry, sensitive or first-time peel clients; a course of 6 is recommended.</li><li><b>Salicylic Peel</b> — for oily, congested or acne-prone skin; also available as a pigmentation-focused variant for evening skin tone.</li><li><b>Timeless Peel</b> (30 min) — dramatically reduces visible ageing, fine lines and pore visibility; requires 2 weeks’ skin prep beforehand.</li></ul>',
    note: "All peels require a consultation before booking — call 07 571 2183.",
    services: [
      { name: "Jungle Brew Peel", detail: "Consultation required", flat: "$150" },
      { name: "Lacto Botanical Peel", detail: "Consultation required", flat: "$140" },
      { name: "Pigment Peel", detail: "Consultation required", flat: "$150" },
      { name: "Luxe Facial — 60 mins", flat: "$145" },
      { name: "Luxe Eye & Scalp Treatment — 30 mins", flat: "$60" },
      { name: "Probiotic Facial — 45 mins", flat: "$100" },
      { name: "Refine Facial — 45 mins", flat: "$100" },
      { name: "Hydrating Facial", flat: "$100" },
      { name: "Dermaplaning", flat: "$90" },
      { name: "Facial Add-on to Dermaplaning", flat: "$60" },
      { name: "Timeless Peel — 30 mins", detail: "Requires 2 weeks' skin prep beforehand", flat: "Ask in salon" },
      { name: "Adashiko Kirei Facial", flat: "Ask in salon" },
      { name: "Salicylic Peel", detail: "For oily, congested or acne-prone skin", flat: "Ask in salon" }
    ] },

  { slug: 'beauty-packages', name: 'Beauty Packages', tiered: false,
    photos: [{ src: 'https://salonone.co.nz/wp-content/uploads/2025/03/Beauty-Facial-e1742389647573.jpg', alt: 'Beauty facial package' }],
    copy: '<h3>Smooth It Out Package</h3><p>Dermaplaning + 20% lacto peel — non-invasive exfoliation using a sterile surgical blade to gently remove dead skin cells and fine vellus hair, for instantly smoother, brighter skin.</p><h3>Fresh Facial</h3><p>A 45-minute customised facial plus eye trio (brow shape, brow tint, lash tint) using professional-grade Aspect product tailored to your skin’s needs.</p><h3>Wax Package</h3><p>Half a leg wax (lower or upper), Brazilian or extended bikini, underarm wax or brow tint, and eyebrow or lip wax — all in one visit.</p><h3>Brow Lamination</h3><p>Smooths and lifts brow hair into a fuller, more defined shape; results last 6–8 weeks.</p><h3>Eyeworks Package</h3><p>Lash lift &amp; tint plus brow lamination &amp; tint, for a complete eye enhancement in one appointment.</p>',
    services: [
      { name: "Smooth It Out Package", detail: "RRP $220", flat: "$160" },
      { name: "Fresh Facial — 75 mins", detail: "Includes: 45-min facial, eyelash tint, brow wax & tint, scalp massage · RRP $157", flat: "$120" },
      { name: "Wax Package — 1hr15", detail: "Half leg + Brazilian/extended bikini + underarm + brow or lip wax · RRP $179", flat: "$150" },
      { name: "Eyeworks Package — 75 mins", detail: "Includes: lash lift & tint, brow lamination & tint", flat: "$180" }
    ] },

  { slug: 'nails', name: 'Pedicure & Manicures', tiered: false,
    photos: [
      { src: 'https://salonone.co.nz/wp-content/uploads/2025/06/Manicure-1.jpg', alt: 'Manicure at Salon One' },
      { src: 'https://salonone.co.nz/wp-content/uploads/2025/06/Manicure-2.jpg', alt: 'Manicure detail' },
      { src: 'https://salonone.co.nz/wp-content/uploads/2025/06/Manicure-3.jpg', alt: 'Manicure detail' },
      { src: 'https://salonone.co.nz/wp-content/uploads/2025/06/Manicure-4.jpg', alt: 'Manicure detail' },
      { src: 'https://salonone.co.nz/wp-content/uploads/2025/06/Pedicures-group-image-e1750000893625.png', alt: 'Pedicure treatments' }
    ],
    copy: '<h3>With Nail Artist in Residence — Hannah</h3><p>Treat your hands to shaping, buffing, cuticle treatment, and flawless polish application. Services include: Gel Nail Polish, Gel Polish Soak Off/Re-apply, Indulgent Manicure, Nail Shape, Nail Shape &amp; Polish, and Nail Art.</p><h3>Pedicures</h3><p>Give your hardworking feet the ultimate pampering — soothing soaks, meticulous nail care, and callus softening leave feet feeling incredibly soft, smooth, and refreshed, complete with perfectly polished toes.</p>',
    note: "Nail services are provided in-salon by Hannah, our resident nail artist — enquire in salon or by phone for her current pricing.",
    services: [
      { name: "With Hannah — Nail Artist in Residence", flat: "Ask in salon" }
    ] },

  { slug: 'eyes', name: 'Eye Treatments', tiered: false,
    photos: [
      { src: 'https://salonone.co.nz/wp-content/uploads/2025/06/Eyes-Brows-1-e1749997730879.jpg', alt: 'Eyes and brows treatment' },
      { src: 'https://salonone.co.nz/wp-content/uploads/2025/06/Eyes-Brows-2-e1749997691133.jpg', alt: 'Eyes and brows treatment' },
      { src: 'https://salonone.co.nz/wp-content/uploads/2025/06/Eyes-Brows-3-e1749997666724.jpg', alt: 'Eyes and brows treatment' },
      { src: 'https://salonone.co.nz/wp-content/uploads/2025/06/Eyes-Brows-4-e1749997631267.jpg', alt: 'Eyes and brows treatment' }
    ],
    copy: '<h3>Lash Lifts</h3><p>Beautiful lashes curled to perfection using the revolutionary ‘Click System’ — a quick, simple procedure with none of the fuss of old-style perming rods.</p><h3>Eyebrow & Eyelash Tinting</h3><p>A quick, painless process that enhances and beautifies your eyes instantly — ideal if you’re short on time, can’t wear makeup, wear contacts, or swim regularly.</p>',
    services: [
      { name: "Eyebrow Tint", flat: "$27" },
      { name: "Eyebrow Tint & Shape", flat: "$40" },
      { name: "Eye Lash Tint", flat: "$38" },
      { name: "Lash & Brow Tint", flat: "$50" },
      { name: "Eye Lash Tint & Brow Shape", flat: "$50" },
      { name: "Eye Lash Lift w/ Tint", flat: "$99" },
      { name: "Brow Lamination — 45 mins", detail: "Includes: brow shape & stain", flat: "$99" },
      { name: "Eye Trio", detail: "Lash Tint w/ Eyebrow Tint & Shape", flat: "$62" }
    ] },

  { slug: 'wedding-hair', name: 'Wedding Hair', tiered: true,
    photos: [{ src: 'https://salonone.co.nz/wp-content/uploads/2025/07/Wedding-Hair-Makeup-e1752405359315.jpg', alt: 'Wedding hair and makeup' }],
    copy: '<p><em>Where style meets “I Do.”</em> Our team of highly trained stylists are experts in elegant bridal updos and timeless wedding hairstyles, designed to complement your individual style and vision.</p><p>Whether you’re the bride, a bridesmaid, mother of the bride, or part of the wider wedding party — we’re here to make everyone look and feel their best. We can also style the groom and best man for a polished, photo-ready finish.</p><h3>We’re proud to offer</h3><ul><li>Bespoke bridal hairstyling &amp; makeup</li><li>Hair &amp; makeup for the wedding party</li><li>Personalised consultations and trials</li><li>Professional-grade, skin-friendly products</li></ul>',
    services: [
      { name: "Bride Hair Up, from", prices: ["$128","$139","$160","$172"] },
      { name: "Bridesmaid Hair Up, from", prices: ["$108","$118","$139","$149"] },
      { name: "Flower Girls Hair Up", detail: "Under 12yrs", prices: ["$76","$86","$96","$103"] },
      { name: "Bride Hair Up Trial", detail: "Director / Artistic Director only", prices: ["—","—","$120","$130"] }
    ] },

  { slug: 'wedding-makeup', name: 'Wedding Makeup', tiered: false,
    services: [
      { name: "Bride — Wedding Makeup", flat: "from $130" },
      { name: "Bridesmaid — Wedding Makeup", flat: "from $100" },
      { name: "Mother of the Bride — Wedding Makeup", flat: "from $100" },
      { name: "Wedding Makeup Trial", flat: "from $85" }
    ] },

  { slug: 'occasion-makeup', name: 'Balls & Special Occasion Makeup', tiered: false,
    copy: '<p>Whether you’re attending a ball, formal, gala, or any special occasion, our team of expert stylists is here to bring your vision to life.</p><h3>Our services include</h3><ul><li><b>Elegant Upstyles</b> — sophisticated, classic, or modern, suited to your outfit and event.</li><li><b>Blow-Drys and Glam Waves</b> — polished, flowing styles with maximum shine and movement.</li><li><b>Event Makeup</b> — flawless application, from natural beauty to full glam.</li><li><b>Consultations and Trials</b> — for anyone not sure what they want yet.</li><li><b>Group Bookings</b> — special packages for group appointments.</li></ul>',
    services: [
      { name: "Special Occasion Make-Up", flat: "from $95" },
      { name: "Full Glam & Festival Make-Up, from", flat: "$150" },
      { name: "Make-Up & Eyelash Flares, from", flat: "$130" },
      { name: "Makeup Lesson", flat: "from $75" },
      { name: "Makeup Trial", flat: "from $85" }
    ] }
];
