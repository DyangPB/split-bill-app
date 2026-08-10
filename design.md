<!-- Processing - Desktop (No Sidebar) -->
<!DOCTYPE html><html class="light" lang="en" style=""><head>
<meta charset="utf-8">
<meta content="width=device-width, initial-scale=1.0" name="viewport">
<title>Reading Receipt - SPLIT BILL</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "outline-variant": "#c5c5d9",
                        "on-secondary-container": "#fffbff",
                        "on-tertiary-fixed": "#231b00",
                        "on-tertiary": "#ffffff",
                        "tertiary-container": "#cba800",
                        "error-container": "#ffdad6",
                        "on-primary-container": "#c8ccff",
                        "surface-container": "#eeeeee",
                        "secondary": "#b40064",
                        "secondary-fixed": "#ffd9e3",
                        "inverse-surface": "#303030",
                        "tertiary-fixed-dim": "#ebc300",
                        "inverse-on-surface": "#f1f1f1",
                        "on-error-container": "#93000a",
                        "secondary-fixed-dim": "#ffb0ca",
                        "surface-tint": "#3346ee",
                        "surface-container-lowest": "#ffffff",
                        "inverse-primary": "#bdc2ff",
                        "on-tertiary-container": "#4d3e00",
                        "on-error": "#ffffff",
                        "surface-container-low": "#f3f3f3",
                        "surface-dim": "#dadada",
                        "secondary-container": "#e1007f",
                        "primary": "#001dcd",
                        "surface": "#f9f9f9",
                        "on-background": "#1b1b1b",
                        "tertiary": "#715d00",
                        "primary-container": "#2b3fe8",
                        "on-surface-variant": "#444656",
                        "error": "#ba1a1a",
                        "surface-variant": "#e2e2e2",
                        "outline": "#757687",
                        "surface-bright": "#f9f9f9",
                        "on-secondary-fixed-variant": "#8d004e",
                        "on-primary-fixed-variant": "#0824d7",
                        "on-primary-fixed": "#000965",
                        "on-secondary": "#ffffff",
                        "primary-fixed-dim": "#bdc2ff",
                        "primary-fixed": "#dfe0ff",
                        "background": "#f9f9f9",
                        "on-secondary-fixed": "#3e001f",
                        "surface-container-highest": "#e2e2e2",
                        "on-surface": "#1b1b1b",
                        "tertiary-fixed": "#ffe177",
                        "on-primary": "#ffffff",
                        "surface-container-high": "#e8e8e8",
                        "on-tertiary-fixed-variant": "#554500"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "full": "9999px"
                    },
                    "spacing": {
                        "gutter": "24px",
                        "offset-shadow-sm": "4px",
                        "unit": "8px",
                        "card-padding": "24px",
                        "margin": "32px",
                        "offset-shadow-md": "5px",
                        "offset-shadow-lg": "8px"
                    },
                    "fontFamily": {
                        "headline-lg": ["Montserrat", "sans-serif"],
                        "label-caps": ["Montserrat", "sans-serif"],
                        "body-md": ["Space Grotesk", "sans-serif"],
                        "headline-xl": ["Montserrat", "sans-serif"],
                        "headline-lg-mobile": ["Montserrat", "sans-serif"],
                        "body-lg": ["Space Grotesk", "sans-serif"],
                        "money-lg": ["Montserrat", "sans-serif"]
                    },
                    "fontSize": {
                        "headline-lg": ["40px", { "lineHeight": "1.1", "letterSpacing": "-0.01em", "fontWeight": "900" }],
                        "label-caps": ["14px", { "lineHeight": "1.0", "letterSpacing": "0.15em", "fontWeight": "700" }],
                        "body-md": ["16px", { "lineHeight": "1.5", "fontWeight": "500" }],
                        "headline-xl": ["64px", { "lineHeight": "1.0", "letterSpacing": "-0.02em", "fontWeight": "900" }],
                        "headline-lg-mobile": ["32px", { "lineHeight": "1.1", "fontWeight": "900" }],
                        "body-lg": ["18px", { "lineHeight": "1.5", "fontWeight": "500" }],
                        "money-lg": ["24px", { "fontWeight": "900" }]
                    }
                }
            }
        };
    </script>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;900&amp;family=Space+Grotesk:wght@500&amp;display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet">
<style>
        body { background-color: #f9f9f9; }
        .hard-shadow-sm { box-shadow: 4px 4px 0px 0px #000000; }
        .hard-shadow-md { box-shadow: 5px 5px 0px 0px #000000; }
        .hard-shadow-lg { box-shadow: 8px 8px 0px 0px #000000; }
        .border-thick { border: 3px solid #000000; }
        .bg-cyan { background-color: #00D9E1; }
        .bg-hotpink { background-color: #FF2D95; }
        .bg-yellow { background-color: #FFD400; }
        .rotate-1 { transform: rotate(1.5deg); }
        .rotate-minus-1 { transform: rotate(-1.5deg); }
    </style>
</head>
<body class="bg-background text-on-background font-body-md min-h-screen flex flex-col">
<!-- TopNavBar -->
<header class="bg-white sticky top-0 w-full z-50 border-on-background shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] border-b-4"><nav class="max-w-7xl mx-auto px-gutter py-4 flex items-center justify-between">
  <div class="flex items-center">
    <div class="relative">
      <span class="font-headline-lg-mobile text-[24px] font-extrabold text-primary">SPLIT BILL</span>
      <div class="absolute -bottom-1 left-0 w-full h-1 bg-secondary decoration-secondary"></div>
    </div>
  </div>
  <div class="flex items-center space-x-6">
    <a href="#" class="flex items-center space-x-2 bg-primary text-white px-4 py-2 border-thick hard-shadow-sm">
      <span class="material-symbols-outlined">qr_code_scanner</span>
      <span class="font-label-caps font-bold">SCAN</span>
    </a>
    <a href="#" class="flex items-center space-x-2 text-on-background hover:text-secondary">
      <span class="material-symbols-outlined">list_alt</span>
      <span class="font-label-caps font-bold">ITEMS</span>
    </a>
    <a href="#" class="flex items-center space-x-2 text-on-background hover:text-secondary">
      <span class="material-symbols-outlined">groups</span>
      <span class="font-label-caps font-bold">PEOPLE</span>
    </a>
    <a href="#" class="flex items-center space-x-2 text-on-background hover:text-secondary">
      <span class="material-symbols-outlined">handshake</span>
      <span class="font-label-caps font-bold">ASSIGN</span>
    </a>
    <a href="#" class="flex items-center space-x-2 text-on-background hover:text-secondary">
      <span class="material-symbols-outlined">receipt_long</span>
      <span class="font-label-caps font-bold">BILL</span>
    </a>
  </div>
</nav></header>
<!-- Main Content -->
<main class="flex-grow flex flex-col items-center justify-center p-gutter md:p-margin max-w-7xl mx-auto w-full">
<div class="text-center mb-12">
<h1 class="font-headline-xl text-[72px] font-bold leading-tight mb-4">Reading your receipt...</h1>
<p class="font-headline-lg text-[18px] text-on-surface-variant">This usually takes a few seconds.</p>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-4xl">
<!-- Receipt Thumbnail -->
<div class="flex justify-center items-center">
<div class="bg-[#FFFDF5] border-thick hard-shadow-lg p-6 rotate-1 w-full max-w-sm relative">
<!-- Squiggle Decoration -->
<div class="absolute -top-6 -left-6 z-[-1] text-secondary">
<svg height="60" viewBox="0 0 100 100" width="60">
<path d="M10,50 Q25,20 40,50 T70,50 T100,50" fill="none" stroke="currentColor" stroke-width="8"></path>
</svg>
</div>
<div class="bg-cover bg-center w-full h-80 border-thick" data-alt="A slightly crumpled, long paper restaurant receipt placed on a flat, bright yellow surface. The receipt has standard black thermal printed text, mostly unreadable blocks of lines simulating items and prices. The lighting is bright and even, casting a sharp, hard shadow from the receipt onto the yellow surface, fitting a bold, high-contrast pop-art aesthetic." style="background-image: url(&quot;https://lh3.googleusercontent.com/aida-public/AB6AXuDroTZDekCEr2-kVP6c6cHt7WhmgNAV7uaFg-DZqX_xttlzsyhRulIATjvpfXmu8obo2lOljtrD_Ln46YcOwgNkObHl-1RovX78C-aVbuMtrvJvFbPKvvy4b38-266xBMaNWF_p_FmsmtxdPE0n3-i7NBz1Om77Bh_qKxFlBLc56fnwqliYg7M--Od1qqnCUITPi1bvRs1AcxnIKHEmQneoCBQkNbae5RoNw51BItkcZTa7-8dl6xlGIQ&quot;);"></div>
<div class="mt-4 flex justify-between items-center border-t-[3px] border-black pt-4">
<span class="font-label-caps text-label-caps bg-yellow px-2 border-thick hard-shadow-sm -rotate-3">SCAN 001</span>
<span class="material-symbols-outlined text-4xl">receipt</span>
</div>
</div>
</div>
<!-- Checklist -->
<div class="flex flex-col justify-center space-y-6">
<!-- Row 1: Done -->
<div class="flex items-center space-x-4 bg-surface-container border-thick hard-shadow-md p-4 rotate-minus-1">
<div class="w-10 h-10 rounded-full border-thick bg-hotpink flex items-center justify-center flex-shrink-0">
<span class="material-symbols-outlined text-white font-bold" data-weight="fill">check</span>
</div>
<div class="flex-grow">
<p class="text-label-caps line-through opacity-70 text-[16px] font-headline-lg">Scanning image quality</p>
</div>
</div>
<!-- Row 2: Active -->
<div class="flex items-center space-x-4 bg-white border-thick hard-shadow-md p-4 rotate-1 relative z-10">
<div class="w-10 h-10 rounded-full border-thick bg-cyan flex items-center justify-center flex-shrink-0 animate-spin">
<span class="material-symbols-outlined text-black font-bold">sync</span>
</div>
<div class="flex-grow">
<p class="text-label-caps font-bold text-[16px] font-headline-lg">Extracting line items &amp; prices</p>
</div>
<!-- Processing Indicator line -->
<div class="absolute bottom-0 left-0 h-[3px] bg-cyan w-1/2 animate-pulse"></div>
</div>
<!-- Row 3: Pending -->
<div class="flex items-center space-x-4 bg-surface-container-low border-thick hard-shadow-sm p-4 rotate-minus-1 opacity-60">
<div class="w-10 h-10 rounded-full border-thick bg-surface flex items-center justify-center flex-shrink-0">
<span class="material-symbols-outlined text-outline">hourglass_empty</span>
</div>
<div class="flex-grow">
<p class="text-label-caps text-[16px] font-headline-lg">Identifying tax, service &amp; discounts</p>
</div>
</div>
<!-- Row 4: Pending -->
<div class="flex items-center space-x-4 bg-surface-container-low border-thick hard-shadow-sm p-4 rotate-1 opacity-60">
<div class="w-10 h-10 rounded-full border-thick bg-surface flex items-center justify-center flex-shrink-0">
<span class="material-symbols-outlined text-outline">hourglass_empty</span>
</div>
<div class="flex-grow">
<p class="text-label-caps text-[16px] font-headline-lg">Preparing your split sheet</p>
</div>
</div>
</div>
</div>
</main>
<!-- Footer -->
<footer class="bg-tertiary-fixed dark:bg-tertiary-fixed-dim w-full mt-auto border-t-4 border-on-background">
<div class="w-full py-8 px-gutter flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto">
<div class="font-label-caps text-on-tertiary-fixed mb-4 md:mb-0 hover:italic">© 2026 SPLIT BILL SHADY PROJECT</div>
<div class="flex space-x-6">
<a class="font-body-md text-body-md text-on-tertiary-fixed hover:text-secondary hover:italic" href="#">Terms</a>
<a class="font-body-md text-body-md text-on-tertiary-fixed hover:text-secondary hover:italic" href="#">Privacy</a>
<a class="font-body-md text-body-md text-on-tertiary-fixed hover:text-secondary hover:italic" href="#">Support</a>
</div>
</div>
</footer>


</body></html>

<!-- People - Desktop (No Sidebar) -->
<!DOCTYPE html><html class="light" lang="en" style=""><head>
<meta charset="utf-8">
<meta content="width=device-width, initial-scale=1.0" name="viewport">
<title>Split Bill - People</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;900&amp;family=Space+Grotesk:wght@500&amp;display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet">
<script id="tailwind-config">
        tailwind.config = {
          darkMode: "class",
          theme: {
            extend: {
              "colors": {
                      "outline-variant": "#c5c5d9",
                      "on-secondary-container": "#fffbff",
                      "on-tertiary-fixed": "#231b00",
                      "on-tertiary": "#ffffff",
                      "tertiary-container": "#cba800",
                      "error-container": "#ffdad6",
                      "on-primary-container": "#c8ccff",
                      "surface-container": "#eeeeee",
                      "secondary": "#b40064",
                      "secondary-fixed": "#ffd9e3",
                      "inverse-surface": "#303030",
                      "tertiary-fixed-dim": "#ebc300",
                      "inverse-on-surface": "#f1f1f1",
                      "on-error-container": "#93000a",
                      "secondary-fixed-dim": "#ffb0ca",
                      "surface-tint": "#3346ee",
                      "surface-container-lowest": "#ffffff",
                      "inverse-primary": "#bdc2ff",
                      "on-tertiary-container": "#4d3e00",
                      "on-error": "#ffffff",
                      "surface-container-low": "#f3f3f3",
                      "surface-dim": "#dadada",
                      "secondary-container": "#e1007f",
                      "primary": "#001dcd",
                      "surface": "#f9f9f9",
                      "on-background": "#1b1b1b",
                      "tertiary": "#715d00",
                      "primary-container": "#2b3fe8",
                      "on-surface-variant": "#444656",
                      "error": "#ba1a1a",
                      "surface-variant": "#e2e2e2",
                      "outline": "#757687",
                      "surface-bright": "#f9f9f9",
                      "on-secondary-fixed-variant": "#8d004e",
                      "on-primary-fixed-variant": "#0824d7",
                      "on-primary-fixed": "#000965",
                      "on-secondary": "#ffffff",
                      "primary-fixed-dim": "#bdc2ff",
                      "primary-fixed": "#dfe0ff",
                      "background": "#f9f9f9",
                      "on-secondary-fixed": "#3e001f",
                      "surface-container-highest": "#e2e2e2",
                      "on-surface": "#1b1b1b",
                      "tertiary-fixed": "#ffe177",
                      "on-primary": "#ffffff",
                      "surface-container-high": "#e8e8e8",
                      "on-tertiary-fixed-variant": "#554500",
                      
                      "memphis-blue": "#2B3FE8",
                      "memphis-cream": "#FFFDF5",
                      "memphis-cyan": "#00D9E1",
                      "memphis-pink": "#FF2D95",
                      "memphis-yellow": "#FFD400",
                      "memphis-tomato": "#FF4500"
              },
              "borderRadius": {
                      "DEFAULT": "0.25rem",
                      "lg": "0.5rem",
                      "xl": "0.75rem",
                      "full": "9999px"
              },
              "spacing": {
                      "gutter": "24px",
                      "offset-shadow-sm": "4px",
                      "unit": "8px",
                      "card-padding": "24px",
                      "margin": "32px",
                      "offset-shadow-md": "5px",
                      "offset-shadow-lg": "8px"
              },
              "fontFamily": {
                      "headline-lg": [
                              "Montserrat"
                      ],
                      "label-caps": [
                              "Montserrat"
                      ],
                      "body-md": [
                              "Space Grotesk"
                      ],
                      "headline-xl": [
                              "Montserrat"
                      ],
                      "headline-lg-mobile": [
                              "Montserrat"
                      ],
                      "body-lg": [
                              "Space Grotesk"
                      ],
                      "money-lg": [
                              "Montserrat"
                      ]
              },
              "fontSize": {
                      "headline-lg": [
                              "40px",
                              {
                                      "lineHeight": "1.1",
                                      "letterSpacing": "-0.01em",
                                      "fontWeight": "900"
                              }
                      ],
                      "label-caps": [
                              "14px",
                              {
                                      "lineHeight": "1.0",
                                      "letterSpacing": "0.15em",
                                      "fontWeight": "700"
                              }
                      ],
                      "body-md": [
                              "16px",
                              {
                                      "lineHeight": "1.5",
                                      "fontWeight": "500"
                              }
                      ],
                      "headline-xl": [
                              "64px",
                              {
                                      "lineHeight": "1.0",
                                      "letterSpacing": "-0.02em",
                                      "fontWeight": "900"
                              }
                      ],
                      "headline-lg-mobile": [
                              "32px",
                              {
                                      "lineHeight": "1.1",
                                      "fontWeight": "900"
                              }
                      ],
                      "body-lg": [
                              "18px",
                              {
                                      "lineHeight": "1.5",
                                      "fontWeight": "500"
                              }
                      ],
                      "money-lg": [
                              "24px",
                              {
                                      "fontWeight": "900"
                              }
                      ]
              }
            }
          }
        }
    </script>
<style>
        body {
            background-color: #FFFDF5;
            background-image: 
                radial-gradient(#1b1b1b 1px, transparent 1px),
                radial-gradient(#1b1b1b 1px, transparent 1px);
            background-size: 40px 40px;
            background-position: 0 0, 20px 20px;
            /* opacity: 0.1 for the dots, using rgba in gradients wasn't fully working, using a pseudo element instead */
            position: relative;
        }
        body::before {
            content: '';
            position: fixed;
            top: 0; left: 0; width: 100%; height: 100%;
            background-color: #FFFDF5;
            z-index: -2;
        }
        body::after {
            content: '';
            position: fixed;
            top: 0; left: 0; width: 100%; height: 100%;
            background-image: 
                radial-gradient(#1b1b1b 2px, transparent 2px);
            background-size: 32px 32px;
            opacity: 0.05;
            z-index: -1;
            pointer-events: none;
        }

        /* Memphis Hard Shadows & Outlines */
        .memphis-border {
            border: 3px solid #1b1b1b;
        }
        .memphis-shadow-sm {
            box-shadow: 4px 4px 0px 0px #1b1b1b;
        }
        .memphis-shadow-md {
            box-shadow: 5px 5px 0px 0px #1b1b1b;
        }
        .memphis-shadow-lg {
            box-shadow: 8px 8px 0px 0px #1b1b1b;
        }
        
        .memphis-btn {
            transition: all 0.1s ease;
        }
        .memphis-btn:active {
            transform: translate(3px, 3px);
            box-shadow: 2px 2px 0px 0px #1b1b1b !important;
        }

        .memphis-card {
            background-color: #FFFDF5;
            border: 3px solid #1b1b1b;
            box-shadow: 5px 5px 0px 0px #1b1b1b;
            transform: rotate(-1.5deg);
        }
        .memphis-card-alt {
            transform: rotate(1.5deg);
        }
        
        .memphis-input:focus {
            outline: none;
            box-shadow: inset 0 0 0 4px #FFD400, 4px 4px 0px 0px #1b1b1b;
        }

        /* Geometric Background Shapes */
        .shape-squiggle {
            position: absolute;
            width: 150px;
            height: 150px;
            background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 50 Q 25 10 40 50 T 70 50 T 100 50' stroke='%231b1b1b' stroke-width='4' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
            background-repeat: repeat-x;
            opacity: 0.1;
            pointer-events: none;
        }
        
        .shape-dots-block {
            position: absolute;
            width: 100px;
            height: 100px;
            background-image: radial-gradient(#1b1b1b 3px, transparent 3px);
            background-size: 16px 16px;
            opacity: 0.2;
            pointer-events: none;
        }
    </style>
</head>
<body class="text-on-background overflow-x-hidden min-h-screen flex flex-col">
<!-- TOP NAV -->
<nav class="sticky top-0 w-full z-50 bg-surface dark:bg-surface border-b-4 border-on-background shadow-[0px_5px_0px_0px_rgba(0,0,0,1)] flex justify-between items-center px-gutter py-4">
<div class="flex items-center gap-8">
<div class="font-headline-lg-mobile text-headline-lg-mobile text-primary font-black memphis-border p-2 bg-memphis-yellow shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] inline-block transform -rotate-2">
            SPLIT BILL
        </div>
<ul class="hidden md:flex gap-4 font-label-caps text-label-caps items-center"><li class="">
<a class="flex items-center gap-2 px-3 py-2 memphis-border rounded-lg text-on-surface hover:bg-secondary-container hover:text-on-secondary-container bg-white memphis-shadow-sm transition-transform hover:skew-x-1" href="#">
<span class="material-symbols-outlined text-sm" style="font-variation-settings: 'FILL' 1;">qr_code_scanner</span> SCAN
                </a>
</li>
<li class="">
<a class="flex items-center gap-2 px-3 py-2 memphis-border rounded-lg text-on-surface hover:bg-secondary-container hover:text-on-secondary-container bg-white memphis-shadow-sm transition-transform hover:skew-x-1" href="#">
<span class="material-symbols-outlined text-sm" style="font-variation-settings: 'FILL' 1;">list_alt</span> ITEMS
                </a>
</li>
<li class="transform translate-y-[-2px]">
<a class="flex items-center gap-2 px-3 py-2 rounded-lg bg-primary text-on-primary border-4 border-on-background -rotate-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-transform hover:skew-x-1" href="#">
<span class="material-symbols-outlined text-sm" style="font-variation-settings: 'FILL' 1;">groups</span> PEOPLE
                </a>
</li>
<li class="">
<a class="flex items-center gap-2 px-3 py-2 memphis-border rounded-lg text-on-surface hover:bg-secondary-container hover:text-on-secondary-container bg-white memphis-shadow-sm transition-transform hover:skew-x-1" href="#">
<span class="material-symbols-outlined text-sm" style="font-variation-settings: 'FILL' 1;">handshake</span> ASSIGN
                </a>
</li>
<li class="">
<a class="flex items-center gap-2 px-3 py-2 memphis-border rounded-lg text-on-surface hover:bg-secondary-container hover:text-on-secondary-container bg-white memphis-shadow-sm transition-transform hover:skew-x-1" href="#">
<span class="material-symbols-outlined text-sm" style="font-variation-settings: 'FILL' 1;">receipt_long</span> BILL
                </a>
</li></ul>
</div>
<div class="flex items-center gap-4">

<button class="md:hidden memphis-border p-2 bg-memphis-yellow memphis-shadow-sm memphis-btn rounded">
<span class="material-symbols-outlined font-black">menu</span>
</button>
</div>
</nav>
<!-- MAIN CANVAS -->
<main class="flex-1 p-gutter md:p-margin pb-32 md:pb-margin relative overflow-hidden flex flex-col min-h-screen max-w-7xl mx-auto w-full">
<!-- Decorative bg elements -->
<div class="shape-dots-block top-20 right-10 transform rotate-12"></div>
<div class="shape-dots-block bottom-40 left-10 transform -rotate-12 bg-memphis-pink opacity-30"></div>
<!-- Header Section -->
<header class="mb-12 relative z-10">
<div class="inline-block transform -rotate-1 mb-4">
<h2 class="font-headline-xl text-headline-xl text-on-background bg-memphis-cyan px-4 py-2 memphis-border memphis-shadow-md">Who's In?</h2>
</div>
<br>
<div class="inline-block transform rotate-1">
<p class="font-body-lg text-body-lg bg-white px-3 py-1 memphis-border memphis-shadow-sm font-bold">Add everyone splitting this bill</p>
</div>
</header>
<!-- Input Section -->
<section class="max-w-2xl w-full mx-auto mb-16 relative z-10">
<div class="flex flex-col sm:flex-row gap-4 items-end bg-white p-card-padding memphis-border memphis-shadow-lg transform rotate-1 rounded-xl">
<div class="flex-1 w-full">
<label class="block font-label-caps text-label-caps mb-2 pl-2">FRIEND'S NAME</label>
<input class="w-full h-14 px-4 font-body-lg text-body-lg rounded-2xl memphis-border memphis-shadow-sm memphis-input bg-white" placeholder="e.g. Alex" type="text">
</div>
<button class="h-14 px-8 font-label-caps text-label-caps bg-memphis-pink text-white rounded-2xl memphis-border memphis-shadow-md memphis-btn whitespace-nowrap">
                    ADD
                </button>
</div>
<!-- Recent Splits Pills -->
<div class="mt-8 transform -rotate-1">
<p class="font-label-caps text-label-caps mb-4 bg-memphis-yellow inline-block px-2 py-1 memphis-border">FROM RECENT SPLITS</p>
<div class="flex flex-wrap gap-3">
<button class="px-4 py-2 rounded-full memphis-border memphis-shadow-sm bg-memphis-cream hover:bg-memphis-cyan font-body-md text-body-md font-bold transition-colors">
                        + Sarah
                    </button>
<button class="px-4 py-2 rounded-full memphis-border memphis-shadow-sm bg-memphis-cream hover:bg-memphis-cyan font-body-md text-body-md font-bold transition-colors">
                        + Alex
                    </button>
<button class="px-4 py-2 rounded-full memphis-border memphis-shadow-sm bg-memphis-cream hover:bg-memphis-cyan font-body-md text-body-md font-bold transition-colors">
                        + Budi
                    </button>
<button class="px-4 py-2 rounded-full memphis-border memphis-shadow-sm bg-memphis-cream hover:bg-memphis-cyan font-body-md text-body-md font-bold transition-colors">
                        + Chloe
                    </button>
</div>
</div>
</section>
<!-- Added People Grid -->
<section class="w-full relative z-10 flex-grow">
<h3 class="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg mb-8">ADDED (4)</h3>
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
<!-- Person Card 1 (You) -->
<div class="bg-white p-4 rounded-xl memphis-border memphis-shadow-md transform -rotate-1 flex items-center justify-between relative group hover:rotate-0 transition-transform">
<div class="flex items-center gap-4">
<div class="w-16 h-16 rounded-full memphis-border bg-memphis-yellow overflow-hidden shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
<img class="w-full h-full object-cover" data-alt="A brightly lit, stylized pop-art portrait of a user profile avatar smiling. Solid bright yellow background. Bold black outlines and flat comic-book colors, fitting a 1980s Memphis Milano aesthetic. High contrast." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyyJdLPt3MPsaTN9qhsk9ppu_ODvaFMPHFePxqdEDMe8u8M3nncCEncPtt_pCr9A3UGKohw1fRGur8gigj-li3RXyD6OAhFNtO9gB54D4dB5Y5WO5BB8ZJDsRyI5LQtHyjlCEhnSJyI6DSy_f4DuDdo3D5WcMzUWXT0PaESedOfQxziZszVX8P9bhvsn_LULDcIhUq_0iYrH3JGhFKApCj3LN7SZO7yT8BkeZCtNSDbxDHcREo9tSo6Q">
</div>
<div>
<p class="font-headline-lg-mobile text-body-lg font-bold leading-none mb-1">You</p>
<p class="font-label-caps text-[10px] text-outline">OWNER</p>
</div>
</div>
<!-- Cannot remove self usually, so no remove button -->
</div>
<!-- Person Card 2 -->
<div class="bg-white p-4 rounded-xl memphis-border memphis-shadow-md transform rotate-2 flex items-center justify-between relative group hover:rotate-0 transition-transform">
<div class="flex items-center gap-4">
<div class="w-16 h-16 rounded-full memphis-border bg-memphis-cyan overflow-hidden shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center">
<span class="font-headline-lg-mobile text-headline-lg-mobile">S</span>
</div>
<div>
<p class="font-headline-lg-mobile text-body-lg font-bold leading-none mb-1">Sarah</p>
</div>
</div>
<button class="w-10 h-10 rounded-full bg-memphis-tomato text-white memphis-border shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center memphis-btn hover:bg-red-600">
<span class="material-symbols-outlined font-bold">close</span>
</button>
</div>
<!-- Person Card 3 -->
<div class="bg-white p-4 rounded-xl memphis-border memphis-shadow-md transform -rotate-2 flex items-center justify-between relative group hover:rotate-0 transition-transform">
<div class="flex items-center gap-4">
<div class="w-16 h-16 rounded-full memphis-border bg-memphis-pink overflow-hidden shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center text-white">
<span class="font-headline-lg-mobile text-headline-lg-mobile">A</span>
</div>
<div>
<p class="font-headline-lg-mobile text-body-lg font-bold leading-none mb-1">Alex</p>
</div>
</div>
<button class="w-10 h-10 rounded-full bg-memphis-tomato text-white memphis-border shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center memphis-btn hover:bg-red-600">
<span class="material-symbols-outlined font-bold">close</span>
</button>
</div>
<!-- Person Card 4 -->
<div class="bg-white p-4 rounded-xl memphis-border memphis-shadow-md transform rotate-1 flex items-center justify-between relative group hover:rotate-0 transition-transform">
<div class="flex items-center gap-4">
<div class="w-16 h-16 rounded-full memphis-border bg-[#cba800] overflow-hidden shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center text-white">
<span class="font-headline-lg-mobile text-headline-lg-mobile">B</span>
</div>
<div>
<p class="font-headline-lg-mobile text-body-lg font-bold leading-none mb-1">Budi</p>
</div>
</div>
<button class="w-10 h-10 rounded-full bg-memphis-tomato text-white memphis-border shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center memphis-btn hover:bg-red-600">
<span class="material-symbols-outlined font-bold">close</span>
</button>
</div>
</div>
</section>
<!-- Bottom Action Area -->
<div class="mt-16 w-full flex justify-end pb-8 relative z-10">
<button class="bg-memphis-blue text-white font-headline-lg-mobile text-body-lg px-8 py-4 rounded-xl memphis-border memphis-shadow-lg memphis-btn flex items-center gap-4 hover:bg-primary-container">
                Next — Assign Items
                <span class="material-symbols-outlined text-3xl">arrow_forward</span>
</button>
</div>
<!-- JSON FOOTER: Footer -->
<footer class="w-full mt-auto py-8 px-gutter flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto bg-tertiary-fixed dark:bg-tertiary-fixed-dim border-t-4 border-on-background flat z-10 relative memphis-border transform rotate-1 rounded-lg">
<div class="font-label-caps text-on-tertiary-fixed mb-4 md:mb-0 bg-white px-2 py-1 memphis-border">© 2026 SPLIT BILL SHADY PROJECT</div>
<ul class="flex gap-6 font-body-md text-body-md text-on-tertiary-fixed">
<li class=""><a class="text-on-tertiary-fixed hover:text-secondary hover:italic transition-all font-bold" href="#">Terms</a></li>
<li class=""><a class="text-on-tertiary-fixed hover:text-secondary hover:italic transition-all font-bold" href="#">Privacy</a></li>
<li class=""><a class="text-on-tertiary-fixed hover:text-secondary hover:italic transition-all font-bold" href="#">Support</a></li>
</ul>
</footer>
</main>
<!-- BOTTOM NAV MOBILE (Hidden on MD) - Stepper representation for mobile -->
<nav class="md:hidden fixed bottom-0 w-full z-50 bg-surface border-t-4 border-on-background shadow-[0px_-5px_0px_0px_rgba(0,0,0,1)] flex justify-around items-center py-2 px-1"><a class="flex flex-col items-center p-2 text-on-surface" href="#">
<span class="material-symbols-outlined text-2xl">qr_code_scanner</span>
<span class="text-[10px] font-bold mt-1 uppercase">Scan</span>
</a>
<a class="flex flex-col items-center p-2 text-on-surface" href="#">
<span class="material-symbols-outlined text-2xl">list_alt</span>
<span class="text-[10px] font-bold mt-1 uppercase">Items</span>
</a>
<a class="flex flex-col items-center p-2 text-on-primary bg-primary rounded-lg memphis-border memphis-shadow-sm transform -translate-y-2" href="#">
<span class="material-symbols-outlined text-2xl">groups</span>
<span class="text-[10px] font-bold mt-1 uppercase">People</span>
</a>
<a class="flex flex-col items-center p-2 text-on-surface" href="#">
<span class="material-symbols-outlined text-2xl">handshake</span>
<span class="text-[10px] font-bold mt-1 uppercase">Assign</span>
</a>
<a class="flex flex-col items-center p-2 text-on-surface" href="#">
<span class="material-symbols-outlined text-2xl">receipt_long</span>
<span class="text-[10px] font-bold mt-1 uppercase">Bill</span>
</a></nav>


</body></html>

<!-- Landing - Desktop (No Sidebar) -->
<!DOCTYPE html><html lang="en" style=""><head>
<meta charset="utf-8">
<meta content="width=device-width, initial-scale=1.0" name="viewport">
<title>SPLIT BILL</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "outline-variant": "#c5c5d9",
                        "on-secondary-container": "#fffbff",
                        "on-tertiary-fixed": "#231b00",
                        "on-tertiary": "#ffffff",
                        "tertiary-container": "#cba800",
                        "error-container": "#ffdad6",
                        "on-primary-container": "#c8ccff",
                        "surface-container": "#eeeeee",
                        "secondary": "#b40064",
                        "secondary-fixed": "#ffd9e3",
                        "inverse-surface": "#303030",
                        "tertiary-fixed-dim": "#ebc300",
                        "inverse-on-surface": "#f1f1f1",
                        "on-error-container": "#93000a",
                        "secondary-fixed-dim": "#ffb0ca",
                        "surface-tint": "#3346ee",
                        "surface-container-lowest": "#ffffff",
                        "inverse-primary": "#bdc2ff",
                        "on-tertiary-container": "#4d3e00",
                        "on-error": "#ffffff",
                        "surface-container-low": "#f3f3f3",
                        "surface-dim": "#dadada",
                        "secondary-container": "#e1007f",
                        "primary": "#001dcd",
                        "surface": "#f9f9f9",
                        "on-background": "#1b1b1b",
                        "tertiary": "#715d00",
                        "primary-container": "#2b3fe8",
                        "on-surface-variant": "#444656",
                        "error": "#ba1a1a",
                        "surface-variant": "#e2e2e2",
                        "outline": "#757687",
                        "surface-bright": "#f9f9f9",
                        "on-secondary-fixed-variant": "#8d004e",
                        "on-primary-fixed-variant": "#0824d7",
                        "on-primary-fixed": "#000965",
                        "on-secondary": "#ffffff",
                        "primary-fixed-dim": "#bdc2ff",
                        "primary-fixed": "#dfe0ff",
                        "background": "#FFFDF5",
                        "on-secondary-fixed": "#3e001f",
                        "surface-container-highest": "#e2e2e2",
                        "on-surface": "#1b1b1b",
                        "tertiary-fixed": "#ffe177",
                        "on-primary": "#ffffff",
                        "surface-container-high": "#e8e8e8",
                        "on-tertiary-fixed-variant": "#554500",
                        "memphis-cream": "#FFFDF5",
                        "memphis-blue": "#2B3FE8",
                        "memphis-cyan": "#00D9E1",
                        "memphis-pink": "#FF2D95",
                        "memphis-yellow": "#FFD400",
                    },
                    "borderRadius": {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "full": "9999px"
                    },
                    "spacing": {
                        "gutter": "24px",
                        "offset-shadow-sm": "4px",
                        "unit": "8px",
                        "card-padding": "24px",
                        "margin": "32px",
                        "offset-shadow-md": "5px",
                        "offset-shadow-lg": "8px"
                    },
                    "fontFamily": {
                        "headline-lg": ["Montserrat"],
                        "label-caps": ["Montserrat"],
                        "body-md": ["Space Grotesk"],
                        "headline-xl": ["Montserrat"],
                        "headline-lg-mobile": ["Montserrat"],
                        "body-lg": ["Space Grotesk"],
                        "money-lg": ["Montserrat"]
                    },
                    "fontSize": {
                        "headline-lg": ["40px", { "lineHeight": "1.1", "letterSpacing": "-0.01em", "fontWeight": "900" }],
                        "label-caps": ["14px", { "lineHeight": "1.0", "letterSpacing": "0.15em", "fontWeight": "700" }],
                        "body-md": ["16px", { "lineHeight": "1.5", "fontWeight": "500" }],
                        "headline-xl": ["64px", { "lineHeight": "1.0", "letterSpacing": "-0.02em", "fontWeight": "900" }],
                        "headline-lg-mobile": ["32px", { "lineHeight": "1.1", "fontWeight": "900" }],
                        "body-lg": ["18px", { "lineHeight": "1.5", "fontWeight": "500" }],
                        "money-lg": ["24px", { "fontWeight": "900" }]
                    }
                }
            }
        }
    </script>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;900&amp;family=Space+Grotesk:wght@500&amp;display=swap" rel="stylesheet">
<style>
        body { background-color: #FFFDF5; }
        .hard-shadow { box-shadow: 5px 5px 0px 0px rgba(0,0,0,1); }
        .hard-shadow-lg { box-shadow: 8px 8px 0px 0px rgba(0,0,0,1); }
        .hard-outline { border: 3px solid #000; }
        .hover-press:hover { transform: translate(3px, 3px); box-shadow: 2px 2px 0px 0px rgba(0,0,0,1); transition: all 0.1s ease-in-out; }
    </style>
</head>
<body class="font-body-md text-on-surface">
<!-- TopNavBar -->
<nav class="bg-background dark:bg-background sticky top-0 w-full z-50 border-b-4 border-on-background shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]">
<div class="flex justify-between items-center px-gutter py-4 flex-grow">
<div class="font-headline-lg-mobile text-headline-lg-mobile font-headline-lg text-primary border-b-4 border-secondary decoration-secondary">
            SPLIT BILL
        </div>
<div class="hidden md:flex items-center gap-6 flex-grow justify-center px-4"><!-- Scan -->
<a class="flex items-center gap-2 font-label-caps text-label-caps text-on-surface hover:text-primary transition-colors" href="#">
<span class="material-symbols-outlined">qr_code_scanner</span>
<span class="">SCAN</span>
</a>
<!-- Items (Active) -->
<a class="flex items-center gap-2 font-label-caps text-label-caps bg-primary text-on-primary pm-outline px-4 py-2 -rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:skew-x-1 transition-transform" href="#">
<span class="material-symbols-outlined">list_alt</span>
<span class="">ITEMS</span>
</a>
<!-- People -->
<a class="flex items-center gap-2 font-label-caps text-label-caps text-on-surface hover:text-primary transition-colors" href="#">
<span class="material-symbols-outlined">groups</span>
<span class="">PEOPLE</span>
</a>
<!-- Assign -->
<a class="flex items-center gap-2 font-label-caps text-label-caps text-on-surface hover:text-primary transition-colors" href="#">
<span class="material-symbols-outlined">handshake</span>
<span class="">ASSIGN</span>
</a>
<!-- Bill -->
<a class="flex items-center gap-2 font-label-caps text-label-caps text-on-surface hover:text-primary transition-colors" href="#">
<span class="material-symbols-outlined">receipt_long</span>
<span class="">BILL</span>
</a></div>

<div class="flex items-center gap-4"></div></div>
</nav>
<!-- Hero -->
<section class="max-w-7xl mx-auto px-gutter py-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative overflow-hidden">
<!-- Left Col -->
<div class="relative z-10 flex flex-col items-start gap-8">
<h1 class="font-headline-xl text-headline-xl text-on-background">
                Split the bill <br>
<span class="text-memphis-pink relative inline-block">
                    together.
                    <svg class="absolute -bottom-4 left-0 w-full" height="12" preserveAspectRatio="none" viewBox="0 0 100 12" xmlns="http://www.w3.org/2000/svg">
<path d="M0 6 Q 25 0, 50 6 T 100 6" fill="none" stroke="#00D9E1" stroke-width="4"></path>
</svg>
</span>
</h1>
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-md">
                Snap the receipt, let AI read it, assign to anyone, done.
            </p>
<button class="bg-memphis-pink text-white font-label-caps text-label-caps px-8 py-4 hard-outline hard-shadow-lg -rotate-1 hover-press flex items-center gap-2">
                Start Splitting 
                <span class="material-symbols-outlined">arrow_forward</span>
</button>
</div>
<!-- Right Col (Collage) -->
<div class="relative min-h-[500px]">
<!-- Decorative Elements -->
<div class="absolute top-10 right-10 w-16 h-16 bg-memphis-yellow rounded-full hard-outline hard-shadow"></div>
<div class="absolute bottom-20 left-0 w-20 h-20 border-t-8 border-l-8 border-memphis-cyan rounded-tl-full rotate-45"></div>
<svg class="absolute top-1/2 -right-10 w-24 h-24" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
<path d="M10 50 L30 10 L50 90 L70 10 L90 50" fill="none" stroke="#FF2D95" stroke-linecap="round" stroke-width="8"></path>
</svg>
<!-- Phone Frame -->
<div class="absolute right-20 top-20 w-64 h-[400px] bg-white hard-outline hard-shadow-lg rounded-xl overflow-hidden rotate-2 z-20 flex flex-col">
<div class="h-10 border-b-3 border-black flex items-center px-4 justify-between bg-memphis-yellow">
<span class="font-label-caps text-xs">Total</span>
<span class="font-money-lg text-lg">$142.50</span>
</div>
<div class="p-4 flex-1 bg-white" data-alt="A stylized, close-up abstract view of a crumpled restaurant receipt. The lighting is bright and even, highlighting the texture of the paper. Memphis-style design elements are faintly visible in the background. The mood is modern and slightly chaotic, reflecting the act of dining out." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBar1ycgP3d9cLXJKrMOh1seescnxWpMtIiY9A4Mhu9YsNsXlIizfA5S9XYHPPcnA4UxF5SQjUcV_i3cQoVvsXGi7w16WjfockISf_v3V85CgKpdjKHbITU0c-CAJGJc2vvR_gH0LPHPW8LWp_0jBAyXFIPiK4Qu8LtQIOVRh_7O_LZrZtuNhKax7UjYm33N9_23udzHapNiySJaVoGuFb5bLUN7_TpYTow8LuXvBH9ZumI1oPRRUt8aw')">
</div>
</div>
<!-- Card Frame -->
<div class="absolute left-10 bottom-10 w-56 h-40 bg-memphis-cyan hard-outline hard-shadow-lg rounded-lg -rotate-3 z-30 p-4 flex flex-col justify-between">
<div class="w-10 h-10 bg-white rounded-full border-2 border-black flex items-center justify-center">
<span class="material-symbols-outlined">person</span>
</div>
<div>
<div class="font-label-caps text-black">Sarah Owes</div>
<div class="font-money-lg text-black text-2xl">$42.00</div>
</div>
</div>
</div>
</section>
<!-- How It Works -->
<section class="w-full py-24 px-gutter border-y-4 border-on-background relative" style="background-image: radial-gradient(rgb(0, 0, 0) 1px, transparent 1px); background-size: 20px 20px; background-color: rgb(243, 243, 243);">
  <div class="max-w-7xl mx-auto relative z-10">
    <div class="inline-block bg-memphis-yellow hard-outline hard-shadow px-6 py-2 mb-16 rotate-1">
      <h2 class="font-headline-lg text-headline-lg text-black">How it works</h2>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
      <!-- Step 1 -->
      <div class="relative pt-8">
        <div class="absolute top-0 left-4 w-12 h-12 bg-memphis-blue text-white rounded-full flex items-center justify-center font-headline-lg text-xl hard-outline z-20">1</div>
        <div class="bg-white p-6 hard-outline hard-shadow-lg rounded-xl flex flex-col gap-4 min-h-[280px]">
          <span class="material-symbols-outlined text-4xl text-memphis-blue">document_scanner</span>
          <h3 class="font-headline-lg-mobile text-2xl text-on-background">Scan Receipt</h3>
          <p class="font-body-md text-on-surface-variant">Snap a photo. Our AI reads the line items and prices instantly.</p>
        </div>
      </div>
      <!-- Step 2 -->
      <div class="relative pt-8">
        <div class="absolute top-0 left-4 w-12 h-12 bg-memphis-pink text-white rounded-full flex items-center justify-center font-headline-lg text-xl hard-outline z-20">2</div>
        <div class="bg-white p-6 hard-outline hard-shadow-lg rounded-xl flex flex-col gap-4 min-h-[280px]">
          <span class="material-symbols-outlined text-4xl text-memphis-pink">group</span>
          <h3 class="font-headline-lg-mobile text-2xl text-on-background">Add People</h3>
          <p class="font-body-md text-on-surface-variant">Select friends from your contacts or add them temporarily.</p>
        </div>
      </div>
      <!-- Step 3 -->
      <div class="relative pt-8">
        <div class="absolute top-0 left-4 w-12 h-12 bg-[#715d00] text-white rounded-full flex items-center justify-center font-headline-lg text-xl hard-outline z-20">3</div>
        <div class="bg-white p-6 hard-outline hard-shadow-lg rounded-xl flex flex-col gap-4 min-h-[280px]">
          <span class="material-symbols-outlined text-4xl text-[#715d00]">list_alt</span>
          <h3 class="font-headline-lg-mobile text-2xl text-on-background">Assign Items</h3>
          <p class="font-body-md text-on-surface-variant">Drag and drop burgers, beers, and sides to who ordered them.</p>
        </div>
      </div>
      <!-- Step 4 -->
      <div class="relative pt-8">
        <div class="absolute top-0 left-4 w-12 h-12 bg-memphis-blue text-white rounded-full flex items-center justify-center font-headline-lg text-xl hard-outline z-20">4</div>
        <div class="bg-white p-6 hard-outline hard-shadow-lg rounded-xl flex flex-col gap-4 min-h-[280px]">
          <span class="material-symbols-outlined text-4xl text-memphis-blue">payments</span>
          <h3 class="font-headline-lg-mobile text-2xl text-on-background">Settle Up</h3>
          <p class="font-body-md text-on-surface-variant">Send Venmo or CashApp requests with one tap. Done.</p>
        </div>
      </div>
    </div>
  </div>
</section>
<!-- Features -->
<section class="max-w-7xl mx-auto px-gutter py-24">
<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
<!-- Feature 1 -->
<div class="bg-white p-8 hard-outline hard-shadow-lg flex items-start gap-6 rotate-1">
<div class="p-4 bg-memphis-cyan hard-outline rounded-xl">
<span class="material-symbols-outlined text-4xl">document_scanner</span>
</div>
<div>
<h3 class="font-headline-lg-mobile text-headline-lg-mobile mb-2">AI Scanning</h3>
<p class="font-body-md text-on-surface-variant">Instantly reads any receipt format, extracting items and prices perfectly.</p>
</div>
</div>
<!-- Feature 2 -->
<div class="bg-white p-8 hard-outline hard-shadow-lg flex items-start gap-6 -rotate-1">
<div class="p-4 bg-memphis-pink hard-outline rounded-xl">
<span class="material-symbols-outlined text-4xl text-white">checklist</span>
</div>
<div>
<h3 class="font-headline-lg-mobile text-headline-lg-mobile mb-2">Assign Items</h3>
<p class="font-body-md text-on-surface-variant">Tap an item, tap a person. Splitting shared apps is just as easy.</p>
</div>
</div>
<!-- Feature 3 -->
<div class="bg-white p-8 hard-outline hard-shadow-lg flex items-start gap-6 -rotate-2">
<div class="p-4 bg-memphis-yellow hard-outline rounded-xl">
<span class="material-symbols-outlined text-4xl">calculate</span>
</div>
<div>
<h3 class="font-headline-lg-mobile text-headline-lg-mobile mb-2">Tax/Service</h3>
<p class="font-body-md text-on-surface-variant">Automatically prorates tax and tip based on each person's subtotal.</p>
</div>
</div>
<!-- Feature 4 -->
<div class="bg-white p-8 hard-outline hard-shadow-lg flex items-start gap-6 rotate-2">
<div class="p-4 bg-memphis-blue hard-outline rounded-xl">
<span class="material-symbols-outlined text-4xl text-white">picture_as_pdf</span>
</div>
<div>
<h3 class="font-headline-lg-mobile text-headline-lg-mobile mb-2">Export PDF</h3>
<p class="font-body-md text-on-surface-variant">Generate clean, detailed breakdowns to send via text or email.</p>
</div>
</div>
</div>
</section>
<!-- Footer -->
<footer class="bg-black text-memphis-cream border-t-4 border-on-background relative overflow-hidden mt-24">
<!-- Background Motifs -->
<svg class="absolute top-10 left-10 w-20 h-20 opacity-20" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
<circle cx="50" cy="50" fill="none" r="40" stroke="#FFD400" stroke-dasharray="10 10" stroke-width="8"></circle>
</svg>
<svg class="absolute bottom-10 right-10 w-32 h-32 opacity-20" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
<path d="M10 90 L50 10 L90 90 Z" fill="none" stroke="#FF2D95" stroke-width="8"></path>
</svg>
<div class="w-full py-8 px-gutter flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto relative z-10">
<div class="font-label-caps text-label-caps mb-4 md:mb-0">© 2026 SPLIT BILL SHADY PROJECT</div>
<div class="flex gap-6">
<a class="font-body-md text-body-md hover:text-memphis-cyan hover:italic transition-all" href="#">Terms</a>
<a class="font-body-md text-body-md hover:text-memphis-cyan hover:italic transition-all" href="#">Privacy</a>
<a class="font-body-md text-body-md hover:text-memphis-cyan hover:italic transition-all" href="#">Support</a>
</div>
</div>
</footer>


</body></html>

<!-- Scan Receipt - Desktop -->
<!DOCTYPE html><html class="light" lang="en" style=""><head>
<meta charset="utf-8">
<meta content="width=device-width, initial-scale=1.0" name="viewport">
<title>Split Bill - Scan Receipt</title>
<!-- Material Symbols -->
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet">
<!-- Google Fonts: Space Grotesk & Montserrat -->
<link href="https://fonts.googleapis.com" rel="preconnect">
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect">
<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&amp;family=Space+Grotesk:wght@300..700&amp;display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet">
<!-- Tailwind CSS -->
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<!-- Tailwind Configuration -->
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "outline-variant": "#c5c5d9",
                        "on-secondary-container": "#fffbff",
                        "on-tertiary-fixed": "#231b00",
                        "on-tertiary": "#ffffff",
                        "tertiary-container": "#cba800",
                        "error-container": "#ffdad6",
                        "on-primary-container": "#c8ccff",
                        "surface-container": "#eeeeee",
                        "secondary": "#b40064",
                        "secondary-fixed": "#ffd9e3",
                        "inverse-surface": "#303030",
                        "tertiary-fixed-dim": "#ebc300",
                        "inverse-on-surface": "#f1f1f1",
                        "on-error-container": "#93000a",
                        "secondary-fixed-dim": "#ffb0ca",
                        "surface-tint": "#3346ee",
                        "surface-container-lowest": "#ffffff",
                        "inverse-primary": "#bdc2ff",
                        "on-tertiary-container": "#4d3e00",
                        "on-error": "#ffffff",
                        "surface-container-low": "#f3f3f3",
                        "surface-dim": "#dadada",
                        "secondary-container": "#e1007f",
                        "primary": "#001dcd",
                        "surface": "#f9f9f9",
                        "on-background": "#1b1b1b",
                        "tertiary": "#715d00",
                        "primary-container": "#2b3fe8",
                        "on-surface-variant": "#444656",
                        "error": "#ba1a1a",
                        "surface-variant": "#e2e2e2",
                        "outline": "#757687",
                        "surface-bright": "#f9f9f9",
                        "on-secondary-fixed-variant": "#8d004e",
                        "on-primary-fixed-variant": "#0824d7",
                        "on-primary-fixed": "#000965",
                        "on-secondary": "#ffffff",
                        "primary-fixed-dim": "#bdc2ff",
                        "primary-fixed": "#dfe0ff",
                        "background": "#f9f9f9",
                        "on-secondary-fixed": "#3e001f",
                        "surface-container-highest": "#e2e2e2",
                        "on-surface": "#1b1b1b",
                        "tertiary-fixed": "#ffe177",
                        "on-primary": "#ffffff",
                        "surface-container-high": "#e8e8e8",
                        "on-tertiary-fixed-variant": "#554500"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "full": "9999px"
                    },
                    "spacing": {
                        "gutter": "24px",
                        "offset-shadow-sm": "4px",
                        "unit": "8px",
                        "card-padding": "24px",
                        "margin": "32px",
                        "offset-shadow-md": "5px",
                        "offset-shadow-lg": "8px"
                    },
                    "fontFamily": {
                        "headline-lg": ["Montserrat"],
                        "label-caps": ["Montserrat"],
                        "body-md": ["Space Grotesk"],
                        "headline-xl": ["Montserrat"],
                        "headline-lg-mobile": ["Montserrat"],
                        "body-lg": ["Space Grotesk"],
                        "money-lg": ["Montserrat"]
                    },
                    "fontSize": {
                        "headline-lg": ["40px", { "lineHeight": "1.1", "letterSpacing": "-0.01em", "fontWeight": "900" }],
                        "label-caps": ["14px", { "lineHeight": "1.0", "letterSpacing": "0.15em", "fontWeight": "700" }],
                        "body-md": ["16px", { "lineHeight": "1.5", "fontWeight": "500" }],
                        "headline-xl": ["64px", { "lineHeight": "1.0", "letterSpacing": "-0.02em", "fontWeight": "900" }],
                        "headline-lg-mobile": ["32px", { "lineHeight": "1.1", "fontWeight": "900" }],
                        "body-lg": ["18px", { "lineHeight": "1.5", "fontWeight": "500" }],
                        "money-lg": ["24px", { "fontWeight": "900" }]
                    }
                }
            }
        }
    </script>
<style>
        /* Memphis Milano / Postmodern CSS Resets & Utilities */
        body {
            background-color: #FFFDF5; /* Cream background typical of Memphis style */
            background-image: 
                radial-gradient(#c5c5d9 1px, transparent 1px),
                radial-gradient(#c5c5d9 1px, transparent 1px);
            background-size: 40px 40px;
            background-position: 0 0, 20px 20px;
        }

        .memphis-card {
            background-color: #FFFDF5;
            border: 3px solid #1b1b1b;
            box-shadow: 5px 5px 0px 0px #1b1b1b;
            transform: rotate(-1.5deg);
            transition: all 0.2s ease;
        }

        .memphis-card:hover {
            transform: rotate(0deg) translate(-2px, -2px);
            box-shadow: 8px 8px 0px 0px #1b1b1b;
        }

        .memphis-button-primary {
            background-color: #2B3FE8; /* Cobalt Blue */
            color: #ffffff;
            border: 3px solid #1b1b1b;
            box-shadow: 5px 5px 0px 0px #1b1b1b;
            transition: all 0.1s ease;
        }

        .memphis-button-primary:active {
            transform: translate(3px, 3px);
            box-shadow: 2px 2px 0px 0px #1b1b1b;
        }

        .memphis-button-secondary {
            background-color: #FF2D95; /* Hot Pink */
            color: #ffffff;
            border: 3px solid #1b1b1b;
            box-shadow: 5px 5px 0px 0px #1b1b1b;
            transition: all 0.1s ease;
        }

        .memphis-button-secondary:active {
            transform: translate(3px, 3px);
            box-shadow: 2px 2px 0px 0px #1b1b1b;
        }

        .memphis-chip-cyan {
            background-color: #00D9E1;
            border: 3px solid #1b1b1b;
            box-shadow: 4px 4px 0px 0px #1b1b1b;
            transform: rotate(-3deg);
        }

        .memphis-dropzone {
            border: 4px dashed #1b1b1b;
            background-color: rgba(255, 212, 0, 0.1); /* Sunshine Yellow tint */
            transition: all 0.3s ease;
        }
        
        .memphis-dropzone.dragover {
            background-color: #FFD400; /* Sunshine Yellow */
            transform: scale(1.02);
            border-style: solid;
        }

        /* Nav specific overrides */
        .nav-node-active {
            background-color: #FFD400;
            border: 3px solid #1b1b1b;
            box-shadow: 4px 4px 0px 0px #1b1b1b;
            transform: rotate(2deg);
        }
        
        .nav-node-inactive {
            border: 3px solid transparent;
            opacity: 0.6;
        }
    </style>
</head>
<body class="min-h-screen text-on-background font-body-md overflow-x-hidden selection:bg-secondary selection:text-on-secondary">
<!-- JSON Component: TopNavBar (Desktop Shell) -->
<nav class="bg-background dark:bg-background sticky top-0 w-full z-50 border-b-4 border-on-background shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]">
<div class="flex justify-between items-center px-gutter py-4 flex-grow">
<div class="font-headline-lg-mobile text-headline-lg-mobile font-headline-lg text-primary border-b-4 border-secondary decoration-secondary">
            SPLIT BILL
        </div>
<div class="hidden md:flex items-center gap-6 flex-grow justify-center px-4"><!-- Scan (Active) -->
<a class="flex items-center gap-2 font-label-caps text-label-caps bg-primary text-on-primary pm-outline px-4 py-2 -rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:skew-x-1 transition-transform" href="#">
<span class="material-symbols-outlined">qr_code_scanner</span>
<span class="">SCAN</span>
</a>
<!-- Items -->
<a class="flex items-center gap-2 font-label-caps text-label-caps text-on-surface hover:text-primary transition-colors" href="#">
<span class="material-symbols-outlined">list_alt</span>
<span class="">ITEMS</span>
</a>
<!-- People -->
<a class="flex items-center gap-2 font-label-caps text-label-caps text-on-surface hover:text-primary transition-colors" href="#">
<span class="material-symbols-outlined">groups</span>
<span class="">PEOPLE</span>
</a>
<!-- Assign -->
<a class="flex items-center gap-2 font-label-caps text-label-caps text-on-surface hover:text-primary transition-colors" href="#">
<span class="material-symbols-outlined">handshake</span>
<span class="">ASSIGN</span>
</a>
<!-- Bill -->
<a class="flex items-center gap-2 font-label-caps text-label-caps text-on-surface hover:text-primary transition-colors" href="#">
<span class="material-symbols-outlined">receipt_long</span>
<span class="">BILL</span>
</a></div>

<div class="flex items-center gap-4"></div></div>
</nav>
<!-- Main Content Area -->
<main class="max-w-7xl mx-auto px-gutter py-margin grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-12">
<!-- Header Section -->
<div class="lg:col-span-12 mb-8">
<h1 class="font-headline-xl text-headline-xl text-on-background mb-4 drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                Scan Receipt
            </h1>
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl bg-tertiary-fixed inline-block px-4 py-2 border-3 border-on-background transform rotate-1">
                Drop a receipt, snap one, or type it in. We don't judge how you split.
            </p>
</div>
<!-- Left Column: Primary Actions -->
<div class="lg:col-span-8 flex flex-col gap-8">
<!-- Drag and Drop Zone -->
<div class="memphis-dropzone rounded-xl h-80 flex flex-col items-center justify-center p-8 relative overflow-hidden group cursor-pointer" id="dropzone">
<!-- Decorative background elements -->
<div class="absolute -top-10 -left-10 w-32 h-32 bg-secondary rounded-full opacity-20 blur-xl"></div>
<div class="absolute -bottom-10 -right-10 w-40 h-40 bg-primary rounded-full opacity-20 blur-xl"></div>
<span class="material-symbols-outlined text-[80px] text-primary mb-6 group-hover:scale-110 transition-transform duration-300 drop-shadow-[3px_3px_0px_rgba(0,0,0,1)]" style="font-variation-settings: 'FILL' 1;">
                    receipt_long
                </span>
<h2 class="font-headline-lg-mobile text-headline-lg-mobile text-center mb-2">
                    Drag your receipt here
                </h2>
<p class="font-body-md text-body-md text-on-surface-variant text-center">
                    JPG, PNG, PDF up to 10MB
                </p>
<!-- Hidden file input -->
<input accept="image/*,.pdf" class="hidden" id="fileInput" type="file">
</div>
<!-- Alternative Actions -->
<div class="flex flex-col sm:flex-row items-center gap-6 justify-center">
<span class="font-label-caps text-label-caps text-outline bg-surface-variant px-3 py-1 rounded-full border-2 border-on-background">OR</span>
</div>
<div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
<!-- Take Photo Button -->
<button class="memphis-button-primary font-label-caps text-label-caps py-4 px-6 rounded-xl flex items-center justify-center gap-3 w-full">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">photo_camera</span>
                    TAKE A PHOTO
                </button>
<!-- Manual Entry Button -->
<button class="bg-surface border-3 border-on-background shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] font-label-caps text-label-caps py-4 px-6 rounded-xl flex items-center justify-center gap-3 w-full hover:bg-surface-variant transition-colors active:translate-y-[2px] active:translate-x-[2px] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
<span class="material-symbols-outlined">edit_square</span>
                    ENTER MANUALLY
                </button>
</div>
</div>
<!-- Right Rail: Tips -->
<aside class="lg:col-span-4">
<div class="memphis-card p-6 rounded-xl flex flex-col gap-6 relative z-10">
<!-- Decorative Pin -->
<div class="absolute -top-4 -right-4 w-8 h-8 bg-secondary rounded-full border-3 border-on-background shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] z-20"></div>
<div class="flex items-center gap-3 border-b-3 border-on-background pb-4">
<span class="memphis-chip-cyan px-3 py-1 rounded-full font-label-caps text-label-caps inline-flex items-center gap-2">
<span class="material-symbols-outlined text-sm">lightbulb</span>
                        PRO TIPS
                    </span>
</div>
<ul class="flex flex-col gap-4">
<li class="flex items-start gap-4">
<div class="w-10 h-10 rounded-lg bg-tertiary-fixed border-3 border-on-background flex items-center justify-center shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transform -rotate-2">
<span class="text-xl">🔍</span>
</div>
<div>
<h3 class="font-bold text-on-background">Readable Lines</h3>
<p class="font-body-md text-sm text-on-surface-variant">Ensure prices and items are clear.</p>
</div>
</li>
<li class="flex items-start gap-4">
<div class="w-10 h-10 rounded-lg bg-[#FFD400] border-3 border-on-background flex items-center justify-center shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transform rotate-3">
<span class="text-xl">🚫</span>
</div>
<div>
<h3 class="font-bold text-on-background">No Blurry Photos</h3>
<p class="font-body-md text-sm text-on-surface-variant">Hold steady. We can't read magic eye puzzles.</p>
</div>
</li>
<li class="flex items-start gap-4">
<div class="w-10 h-10 rounded-lg bg-secondary-fixed border-3 border-on-background flex items-center justify-center shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transform -rotate-1">
<span class="text-xl">📄</span>
</div>
<div>
<h3 class="font-bold text-on-background">Flatten Folds</h3>
<p class="font-body-md text-sm text-on-surface-variant">Smooth out the paper before snapping.</p>
</div>
</li>
<li class="flex items-start gap-4">
<div class="w-10 h-10 rounded-lg bg-primary-fixed border-3 border-on-background flex items-center justify-center shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transform rotate-2">
<span class="text-xl">☀️</span>
</div>
<div>
<h3 class="font-bold text-on-background">Good Lighting</h3>
<p class="font-body-md text-sm text-on-surface-variant">Avoid harsh shadows over the totals.</p>
</div>
</li>
</ul>
</div>
<!-- Decorative Squiggle under card -->
<div class="mt-8 opacity-50 flex justify-center hidden md:flex">
<svg fill="none" height="40" viewBox="0 0 200 40" width="200" xmlns="http://www.w3.org/2000/svg">
<path d="M5 20C20 5 30 35 45 20C60 5 70 35 85 20C100 5 110 35 125 20C140 5 150 35 165 20C180 5 190 35 195 20" stroke="#1b1b1b" stroke-linecap="round" stroke-width="4"></path>
</svg>
</div>
</aside>
</main>
<!-- Footer Component -->
<footer class="bg-tertiary-fixed dark:bg-tertiary-fixed-dim w-full mt-auto border-t-4 border-on-background">
<div class="w-full py-8 px-gutter flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto">
<div class="font-label-caps text-label-caps text-on-tertiary-fixed mb-4 md:mb-0">
                © 2026 SPLIT BILL SHADY PROJECT</div>
<nav class="flex gap-6">
<a class="font-body-md text-body-md text-on-tertiary-fixed hover:text-secondary hover:italic transition-all" href="#">Terms</a>
<a class="font-body-md text-body-md text-on-tertiary-fixed hover:text-secondary hover:italic transition-all" href="#">Privacy</a>
<a class="font-body-md text-body-md text-on-tertiary-fixed hover:text-secondary hover:italic transition-all" href="#">Support</a>
</nav>
</div>
</footer>
<script>
        // Simple drag and drop visual feedback
        const dropzone = document.getElementById('dropzone');
        const fileInput = document.getElementById('fileInput');

        dropzone.addEventListener('dragover', (e) => {
            e.preventDefault();
            dropzone.classList.add('dragover');
        });

        dropzone.addEventListener('dragleave', (e) => {
            e.preventDefault();
            dropzone.classList.remove('dragover');
        });

        dropzone.addEventListener('drop', (e) => {
            e.preventDefault();
            dropzone.classList.remove('dragover');
            // Handle file drop logic here
            console.log('File dropped');
        });

        dropzone.addEventListener('click', () => {
            fileInput.click();
        });
    </script>




</body></html>

<!-- Assign Items - Desktop (No Sidebar) -->
<!DOCTYPE html><html class="light" lang="en" style=""><head>
<meta charset="utf-8">
<meta content="width=device-width, initial-scale=1.0" name="viewport">
<title>Split Bill - Assign Items</title>
<!-- Material Symbols -->
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet">
<!-- Google Fonts -->
<link href="https://fonts.googleapis.com" rel="preconnect">
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect">
<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&amp;family=Space+Grotesk:wght@300..700&amp;display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet">
<!-- Tailwind CSS -->
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<!-- Tailwind Configuration -->
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                            "outline-variant": "#c5c5d9",
                            "on-secondary-container": "#fffbff",
                            "on-tertiary-fixed": "#231b00",
                            "on-tertiary": "#ffffff",
                            "tertiary-container": "#cba800",
                            "error-container": "#ffdad6",
                            "on-primary-container": "#c8ccff",
                            "surface-container": "#eeeeee",
                            "secondary": "#b40064",
                            "secondary-fixed": "#ffd9e3",
                            "inverse-surface": "#303030",
                            "tertiary-fixed-dim": "#ebc300",
                            "inverse-on-surface": "#f1f1f1",
                            "on-error-container": "#93000a",
                            "secondary-fixed-dim": "#ffb0ca",
                            "surface-tint": "#3346ee",
                            "surface-container-lowest": "#ffffff",
                            "inverse-primary": "#bdc2ff",
                            "on-tertiary-container": "#4d3e00",
                            "on-error": "#ffffff",
                            "surface-container-low": "#f3f3f3",
                            "surface-dim": "#dadada",
                            "secondary-container": "#e1007f",
                            "primary": "#001dcd",
                            "surface": "#f9f9f9",
                            "on-background": "#1b1b1b",
                            "tertiary": "#715d00",
                            "primary-container": "#2b3fe8",
                            "on-surface-variant": "#444656",
                            "error": "#ba1a1a",
                            "surface-variant": "#e2e2e2",
                            "outline": "#757687",
                            "surface-bright": "#f9f9f9",
                            "on-secondary-fixed-variant": "#8d004e",
                            "on-primary-fixed-variant": "#0824d7",
                            "on-primary-fixed": "#000965",
                            "on-secondary": "#ffffff",
                            "primary-fixed-dim": "#bdc2ff",
                            "primary-fixed": "#dfe0ff",
                            "background": "#f9f9f9",
                            "on-secondary-fixed": "#3e001f",
                            "surface-container-highest": "#e2e2e2",
                            "on-surface": "#1b1b1b",
                            "tertiary-fixed": "#ffe177",
                            "on-primary": "#ffffff",
                            "surface-container-high": "#e8e8e8",
                            "on-tertiary-fixed-variant": "#554500"
                    },
                    "borderRadius": {
                            "DEFAULT": "0.25rem",
                            "lg": "0.5rem",
                            "xl": "0.75rem",
                            "full": "9999px"
                    },
                    "spacing": {
                            "gutter": "24px",
                            "offset-shadow-sm": "4px",
                            "unit": "8px",
                            "card-padding": "24px",
                            "margin": "32px",
                            "offset-shadow-md": "5px",
                            "offset-shadow-lg": "8px"
                    },
                    "fontFamily": {
                            "headline-lg": [
                                    "Montserrat"
                            ],
                            "label-caps": [
                                    "Montserrat"
                            ],
                            "body-md": [
                                    "Space Grotesk"
                            ],
                            "headline-xl": [
                                    "Montserrat"
                            ],
                            "headline-lg-mobile": [
                                    "Montserrat"
                            ],
                            "body-lg": [
                                    "Space Grotesk"
                            ],
                            "money-lg": [
                                    "Montserrat"
                            ]
                    },
                    "fontSize": {
                            "headline-lg": [
                                    "40px",
                                    {
                                            "lineHeight": "1.1",
                                            "letterSpacing": "-0.01em",
                                            "fontWeight": "900"
                                    }
                            ],
                            "label-caps": [
                                    "14px",
                                    {
                                            "lineHeight": "1.0",
                                            "letterSpacing": "0.15em",
                                            "fontWeight": "700"
                                    }
                            ],
                            "body-md": [
                                    "16px",
                                    {
                                            "lineHeight": "1.5",
                                            "fontWeight": "500"
                                    }
                            ],
                            "headline-xl": [
                                    "64px",
                                    {
                                            "lineHeight": "1.0",
                                            "letterSpacing": "-0.02em",
                                            "fontWeight": "900"
                                    }
                            ],
                            "headline-lg-mobile": [
                                    "32px",
                                    {
                                            "lineHeight": "1.1",
                                            "fontWeight": "900"
                                    }
                            ],
                            "body-lg": [
                                    "18px",
                                    {
                                            "lineHeight": "1.5",
                                            "fontWeight": "500"
                                    }
                            ],
                            "money-lg": [
                                    "24px",
                                    {
                                            "fontWeight": "900"
                                    }
                            ]
                    }
                },
            },
        }
    </script>
<style>
        /* Memphis Milano specific styles for structural needs not covered by tailwind config directly */
        .memphis-shadow {
            box-shadow: 5px 5px 0px 0px rgba(0,0,0,1);
        }
        .memphis-shadow-sm {
            box-shadow: 4px 4px 0px 0px rgba(0,0,0,1);
        }
        .memphis-shadow-lg {
            box-shadow: 8px 8px 0px 0px rgba(0,0,0,1);
        }
        .memphis-outline {
            border: 3px solid #1b1b1b;
        }
        
        /* Checkbox styling */
        .memphis-checkbox-input:checked + .memphis-checkbox-box {
            background-color: #FF2D95; /* Hot Pink */
            border-color: #1b1b1b;
        }
        .memphis-checkbox-input:checked + .memphis-checkbox-box::after {
            content: '×';
            color: white;
            font-size: 24px;
            font-weight: 900;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
            width: 100%;
            line-height: 0;
            transform: translateY(-1px);
        }

        /* Memphis Pattern Background */
        .memphis-pattern-bg {
            background-color: #f9f9f9;
            background-image: 
                radial-gradient(#c5c5d9 2px, transparent 2px),
                radial-gradient(#c5c5d9 2px, transparent 2px);
            background-size: 32px 32px;
            background-position: 0 0, 16px 16px;
        }
        
        .yellow-highlight {
            background-color: #FFD400; /* Sunshine Yellow */
        }
    </style>
</head>
<body class="bg-background text-on-background font-body-md memphis-pattern-bg min-h-screen">
<!-- TopNavBar -->
<nav class="sticky top-0 w-full z-50 bg-background dark:bg-background border-b-4 border-on-background shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] flex justify-between items-center px-gutter py-4">
<div class="max-w-7xl mx-auto w-full flex justify-between items-center">
<div class="font-headline-lg text-primary border-b-4 border-secondary decoration-secondary flex items-center gap-2">
            SPLIT BILL
            <svg fill="none" height="20" viewBox="0 0 40 20" width="40" xmlns="http://www.w3.org/2000/svg">
<path d="M2 10L10 2L18 18L26 2L34 18" stroke="#FF2D95" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"></path>
</svg>
</div>
<div class="hidden md:flex gap-6 items-center font-label-caps text-label-caps"><a class="font-label-caps text-label-caps text-on-background opacity-70 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all" href="#">SCAN</a>
<a class="font-label-caps text-label-caps text-on-background opacity-70 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all" href="#">ITEMS</a>
<a class="font-label-caps text-label-caps text-on-background opacity-70 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all" href="#">PEOPLE</a>
<a class="bg-primary text-on-primary px-4 py-2 rounded-DEFAULT memphis-outline shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] -rotate-1 hover:translate-x-1 transition-transform font-label-caps text-label-caps" href="#">ASSIGN</a>
<a class="font-label-caps text-label-caps text-on-background opacity-70 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all" href="#">BILL</a></div>

<div class="flex items-center">
<span class="material-symbols-outlined text-primary text-3xl">account_circle</span>
</div>
</div>
</nav>
<!-- Main Content Area -->
<main class="p-8 flex flex-col xl:flex-row gap-8 max-w-7xl w-full mx-auto">
<!-- Left Area: Header & Matrix -->
<div class="flex-grow flex flex-col gap-8 w-full">
<!-- Header section -->
<header class="bg-[#FFFDF5] p-6 rounded-lg memphis-outline memphis-shadow rotate-[1.5deg] relative z-10">
<h1 class="font-headline-xl text-headline-xl text-primary break-words">Assign the Item</h1>
<p class="font-body-lg text-body-lg text-on-surface-variant mt-2 border-l-4 border-secondary pl-4">Check off who ordered each item</p>
<!-- Unassigned Alert (Simulated) -->
<div class="absolute -top-4 -right-4 bg-error text-on-error px-4 py-2 rounded-full font-label-caps text-label-caps memphis-outline memphis-shadow-sm -rotate-3 flex items-center gap-2">
<span class="material-symbols-outlined text-sm" data-icon="warning">warning</span>
                    2 Items Unassigned
                </div>
</header>
<!-- Matrix Container -->
<div class="bg-[#FFFDF5] rounded-xl memphis-outline memphis-shadow -rotate-[1.5deg] p-card-padding overflow-x-auto relative z-0 w-full">
<table class="w-full min-w-[800px] text-left border-collapse">
<thead>
<tr>
<th class="pb-6 w-1/3 border-b-[3px] border-on-background">
<span class="font-label-caps text-label-caps text-on-surface-variant">ITEM</span>
</th>
<th class="pb-6 border-b-[3px] border-on-background text-center">
<div class="flex flex-col items-center gap-2">
<div class="w-10 h-10 bg-[#00D9E1] rounded-full memphis-outline memflex items-center justify-center font-label-caps text-label-caps text-on-background">S</div>
<span class="font-label-caps text-label-caps">Sarah</span>
</div>
</th>
<th class="pb-6 border-b-[3px] border-on-background text-center">
<div class="flex flex-col items-center gap-2">
<div class="w-10 h-10 bg-[#FF2D95] rounded-full memphis-outline memflex items-center justify-center font-label-caps text-label-caps text-on-error">M</div>
<span class="font-label-caps text-label-caps">Mike</span>
</div>
</th>
<th class="pb-6 border-b-[3px] border-on-background text-center">
<div class="flex flex-col items-center gap-2">
<div class="w-10 h-10 yellow-highlight rounded-full memphis-outline memflex items-center justify-center font-label-caps text-label-caps text-on-background">J</div>
<span class="font-label-caps text-label-caps">Jen</span>
</div>
</th>
<th class="pb-6 border-b-[3px] border-on-background text-center">
<span class="font-label-caps text-label-caps text-on-surface-variant">QUICK</span>
</th>
</tr>
</thead>
<tbody>
<!-- Row 1 -->
<tr class="border-b-[3px] border-on-background hover:bg-surface-container transition-colors">
<td class="py-4">
<div class="font-body-md font-bold">Spicy Tuna Roll</div>
<div class="font-money-lg text-money-lg text-secondary mt-1">$14.00</div>
</td>
<td class="text-center py-4">
<label class="inline-flex cursor-pointer relative">
<input checked="" class="memphis-checkbox-input sr-only" type="checkbox">
<div class="memphis-checkbox-box w-8 h-8 bg-white memphis-outline memphis-shadow-sm transition-colors rounded-sm flex items-center justify-center"></div>
</label>
</td>
<td class="text-center py-4">
<label class="inline-flex cursor-pointer relative">
<input class="memphis-checkbox-input sr-only" type="checkbox">
<div class="memphis-checkbox-box w-8 h-8 bg-white memphis-outline memphis-shadow-sm transition-colors rounded-sm flex items-center justify-center"></div>
</label>
</td>
<td class="text-center py-4">
<label class="inline-flex cursor-pointer relative">
<input class="memphis-checkbox-input sr-only" type="checkbox">
<div class="memphis-checkbox-box w-8 h-8 bg-white memphis-outline memphis-shadow-sm transition-colors rounded-sm flex items-center justify-center"></div>
</label>
</td>
<td class="text-center py-4">
<button class="px-3 py-1 bg-white memphis-outline rounded-full font-label-caps text-label-caps text-xs hover:bg-[#FFD400] transition-colors memphis-shadow-sm rotate-2">ALL</button>
</td>
</tr>
<!-- Row 2 -->
<tr class="border-b-[3px] border-on-background bg-error-container/20">
<td class="py-4 relative">
<div class="font-body-md font-bold flex items-center gap-2">
                                    Edamame
                                    <span class="w-3 h-3 bg-error rounded-full block" title="Unassigned"></span>
</div>
<div class="font-money-lg text-money-lg text-secondary mt-1">$6.00</div>
</td>
<td class="text-center py-4">
<label class="inline-flex cursor-pointer relative">
<input class="memphis-checkbox-input sr-only" type="checkbox">
<div class="memphis-checkbox-box w-8 h-8 bg-white memphis-outline memphis-shadow-sm transition-colors rounded-sm flex items-center justify-center"></div>
</label>
</td>
<td class="text-center py-4">
<label class="inline-flex cursor-pointer relative">
<input class="memphis-checkbox-input sr-only" type="checkbox">
<div class="memphis-checkbox-box w-8 h-8 bg-white memphis-outline memphis-shadow-sm transition-colors rounded-sm flex items-center justify-center"></div>
</label>
</td>
<td class="text-center py-4">
<label class="inline-flex cursor-pointer relative">
<input class="memphis-checkbox-input sr-only" type="checkbox">
<div class="memphis-checkbox-box w-8 h-8 bg-white memphis-outline memphis-shadow-sm transition-colors rounded-sm flex items-center justify-center"></div>
</label>
</td>
<td class="text-center py-4">
<button class="px-3 py-1 bg-white memphis-outline rounded-full font-label-caps text-label-caps text-xs hover:bg-[#FFD400] transition-colors memphis-shadow-sm -rotate-2">ALL</button>
</td>
</tr>
<!-- Row 3 -->
<tr class="border-b-[3px] border-on-background hover:bg-surface-container transition-colors">
<td class="py-4">
<div class="font-body-md font-bold">Rainbow Roll</div>
<div class="font-money-lg text-money-lg text-secondary mt-1">$18.50</div>
</td>
<td class="text-center py-4">
<label class="inline-flex cursor-pointer relative">
<input checked="" class="memphis-checkbox-input sr-only" type="checkbox">
<div class="memphis-checkbox-box w-8 h-8 bg-white memphis-outline memphis-shadow-sm transition-colors rounded-sm flex items-center justify-center"></div>
</label>
</td>
<td class="text-center py-4">
<label class="inline-flex cursor-pointer relative">
<input checked="" class="memphis-checkbox-input sr-only" type="checkbox">
<div class="memphis-checkbox-box w-8 h-8 bg-white memphis-outline memphis-shadow-sm transition-colors rounded-sm flex items-center justify-center"></div>
</label>
</td>
<td class="text-center py-4">
<label class="inline-flex cursor-pointer relative">
<input checked="" class="memphis-checkbox-input sr-only" type="checkbox">
<div class="memphis-checkbox-box w-8 h-8 bg-white memphis-outline memphis-shadow-sm transition-colors rounded-sm flex items-center justify-center"></div>
</label>
</td>
<td class="text-center py-4">
<button class="px-3 py-1 bg-[#FFD400] memphis-outline rounded-full font-label-caps text-label-caps text-xs transition-colors memphis-shadow-sm rotate-1">ALL</button>
</td>
</tr>
<!-- Row 4 -->
<tr class="hover:bg-surface-container transition-colors">
<td class="py-4">
<div class="font-body-md font-bold">Asahi (Large)</div>
<div class="font-money-lg text-money-lg text-secondary mt-1">$9.00</div>
</td>
<td class="text-center py-4">
<label class="inline-flex cursor-pointer relative">
<input class="memphis-checkbox-input sr-only" type="checkbox">
<div class="memphis-checkbox-box w-8 h-8 bg-white memphis-outline memphis-shadow-sm transition-colors rounded-sm flex items-center justify-center"></div>
</label>
</td>
<td class="text-center py-4">
<label class="inline-flex cursor-pointer relative">
<input checked="" class="memphis-checkbox-input sr-only" type="checkbox">
<div class="memphis-checkbox-box w-8 h-8 bg-white memphis-outline memphis-shadow-sm transition-colors rounded-sm flex items-center justify-center"></div>
</label>
</td>
<td class="text-center py-4">
<label class="inline-flex cursor-pointer relative">
<input class="memphis-checkbox-input sr-only" type="checkbox">
<div class="memphis-checkbox-box w-8 h-8 bg-white memphis-outline memphis-shadow-sm transition-colors rounded-sm flex items-center justify-center"></div>
</label>
</td>
<td class="text-center py-4">
<button class="px-3 py-1 bg-white memphis-outline rounded-full font-label-caps text-label-caps text-xs hover:bg-[#FFD400] transition-colors memphis-shadow-sm rotate-3">ALL</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
<!-- Right Rail: Live Running Totals -->

</main>
<!-- Footer -->
<footer class="w-full py-8 px-gutter flex flex-col md:flex-row justify-between items-center bg-tertiary-fixed dark:bg-tertiary-fixed-dim border-t-4 border-on-background mt-auto font-body-md text-body-md">
<div class="max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-center px-4">
<div class="font-label-caps text-on-tertiary-fixed mb-4 md:mb-0">© 2026 SPLIT BILL SHADY PROJECT</div>
<div class="flex gap-6">
<a class="text-on-tertiary-fixed hover:text-secondary hover:italic transition-all" href="#">Terms</a>
<a class="text-on-tertiary-fixed hover:text-secondary hover:italic transition-all" href="#">Privacy</a>
<a class="text-on-tertiary-fixed hover:text-secondary hover:italic transition-all" href="#">Support</a>
</div>
</div>
</footer>






</body></html>

<!-- Check Items - Desktop (No Sidebar) -->
<!DOCTYPE html><html lang="en" style=""><head>
<meta charset="utf-8">
<meta content="width=device-width, initial-scale=1.0" name="viewport">
<title>Check Items - SPLIT BILL</title>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;900&amp;family=Space+Grotesk:wght@500&amp;display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet">
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "outline-variant": "#c5c5d9",
                        "on-secondary-container": "#fffbff",
                        "on-tertiary-fixed": "#231b00",
                        "on-tertiary": "#ffffff",
                        "tertiary-container": "#cba800",
                        "error-container": "#ffdad6",
                        "on-primary-container": "#c8ccff",
                        "surface-container": "#eeeeee",
                        "secondary": "#b40064",
                        "secondary-fixed": "#ffd9e3",
                        "inverse-surface": "#303030",
                        "tertiary-fixed-dim": "#ebc300",
                        "inverse-on-surface": "#f1f1f1",
                        "on-error-container": "#93000a",
                        "secondary-fixed-dim": "#ffb0ca",
                        "surface-tint": "#3346ee",
                        "surface-container-lowest": "#ffffff",
                        "inverse-primary": "#bdc2ff",
                        "on-tertiary-container": "#4d3e00",
                        "on-error": "#ffffff",
                        "surface-container-low": "#f3f3f3",
                        "surface-dim": "#dadada",
                        "secondary-container": "#e1007f",
                        "primary": "#001dcd",
                        "surface": "#f9f9f9",
                        "on-background": "#1b1b1b",
                        "tertiary": "#715d00",
                        "primary-container": "#2b3fe8",
                        "on-surface-variant": "#444656",
                        "error": "#ba1a1a",
                        "surface-variant": "#e2e2e2",
                        "outline": "#757687",
                        "surface-bright": "#f9f9f9",
                        "on-secondary-fixed-variant": "#8d004e",
                        "on-primary-fixed-variant": "#0824d7",
                        "on-primary-fixed": "#000965",
                        "on-secondary": "#ffffff",
                        "primary-fixed-dim": "#bdc2ff",
                        "primary-fixed": "#dfe0ff",
                        "background": "#f9f9f9",
                        "on-secondary-fixed": "#3e001f",
                        "surface-container-highest": "#e2e2e2",
                        "on-surface": "#1b1b1b",
                        "tertiary-fixed": "#ffe177",
                        "on-primary": "#ffffff",
                        "surface-container-high": "#e8e8e8",
                        "on-tertiary-fixed-variant": "#554500"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "full": "9999px"
                    },
                    "spacing": {
                        "gutter": "24px",
                        "offset-shadow-sm": "4px",
                        "unit": "8px",
                        "card-padding": "24px",
                        "margin": "32px",
                        "offset-shadow-md": "5px",
                        "offset-shadow-lg": "8px"
                    },
                    "fontFamily": {
                        "headline-lg": ["Montserrat"],
                        "label-caps": ["Montserrat"],
                        "body-md": ["Space Grotesk"],
                        "headline-xl": ["Montserrat"],
                        "headline-lg-mobile": ["Montserrat"],
                        "body-lg": ["Space Grotesk"],
                        "money-lg": ["Montserrat"]
                    },
                    "fontSize": {
                        "headline-lg": ["40px", { "lineHeight": "1.1", "letterSpacing": "-0.01em", "fontWeight": "900" }],
                        "label-caps": ["14px", { "lineHeight": "1.0", "letterSpacing": "0.15em", "fontWeight": "700" }],
                        "body-md": ["16px", { "lineHeight": "1.5", "fontWeight": "500" }],
                        "headline-xl": ["64px", { "lineHeight": "1.0", "letterSpacing": "-0.02em", "fontWeight": "900" }],
                        "headline-lg-mobile": ["32px", { "lineHeight": "1.1", "fontWeight": "900" }],
                        "body-lg": ["18px", { "lineHeight": "1.5", "fontWeight": "500" }],
                        "money-lg": ["24px", { "fontWeight": "900" }]
                    }
                }
            }
        }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .material-symbols-outlined.fill-icon {
            font-variation-settings: 'FILL' 1;
        }
        
        /* Memphis / Postmodern Styles */
        .pm-outline { border: 3px solid #1b1b1b; }
        .pm-shadow-sm { box-shadow: 4px 4px 0px 0px #1b1b1b; }
        .pm-shadow-md { box-shadow: 5px 5px 0px 0px #1b1b1b; }
        .pm-shadow-lg { box-shadow: 8px 8px 0px 0px #1b1b1b; }
        
        .pm-hover-press:active {
            transform: translate(3px, 3px);
            box-shadow: 2px 2px 0px 0px #1b1b1b !important;
        }
        
        .pm-card-rotate-1 { transform: rotate(1.5deg); }
        .pm-card-rotate-2 { transform: rotate(-1.5deg); }
        
        /* Accent Colors matching Memphis style */
        .bg-hot-pink { background-color: #FF2D95; }
        .bg-electric-cyan { background-color: #00D9E1; }
        .bg-sunshine-yellow { background-color: #FFD400; }
        .bg-cobalt-blue { background-color: #2B3FE8; }
        .text-hot-pink { color: #FF2D95; }
        .text-sunshine-yellow { color: #FFD400; }
        
        /* Checkbox customization */
        input[type="checkbox"].pm-checkbox {
            appearance: none;
            width: 24px;
            height: 24px;
            border: 3px solid #1b1b1b;
            border-radius: 0;
            background-color: white;
            cursor: pointer;
            position: relative;
        }
        input[type="checkbox"].pm-checkbox:checked {
            background-color: #00D9E1;
        }
        input[type="checkbox"].pm-checkbox:checked::after {
            content: "";
            position: absolute;
            left: 5px;
            top: 1px;
            width: 8px;
            height: 14px;
            border: solid #1b1b1b;
            border-width: 0 3px 3px 0;
            transform: rotate(45deg);
        }
    </style>
</head>
<body class="bg-background text-on-background min-h-screen flex flex-col overflow-x-hidden font-body-md">
<!-- TopNavBar -->
<nav class="sticky top-0 w-full z-50 bg-background border-b-4 border-on-background shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] px-gutter py-4 flex justify-between items-center">
<div class="font-headline-lg-mobile text-headline-lg-mobile font-headline-lg text-primary border-b-4 border-secondary decoration-secondary">
            SPLIT BILL
        </div>
<div class="hidden md:flex items-center gap-6 flex-grow justify-center px-4"><!-- Scan -->
<a class="flex items-center gap-2 font-label-caps text-label-caps text-on-surface hover:text-primary transition-colors" href="#">
<span class="material-symbols-outlined">qr_code_scanner</span>
<span class="">SCAN</span>
</a>
<!-- Items (Active) -->
<a class="flex items-center gap-2 font-label-caps text-label-caps bg-primary text-on-primary pm-outline px-4 py-2 -rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:skew-x-1 transition-transform" href="#">
<span class="material-symbols-outlined">list_alt</span>
<span class="">ITEMS</span>
</a>
<!-- People -->
<a class="flex items-center gap-2 font-label-caps text-label-caps text-on-surface hover:text-primary transition-colors" href="#">
<span class="material-symbols-outlined">groups</span>
<span class="">PEOPLE</span>
</a>
<!-- Assign -->
<a class="flex items-center gap-2 font-label-caps text-label-caps text-on-surface hover:text-primary transition-colors" href="#">
<span class="material-symbols-outlined">handshake</span>
<span class="">ASSIGN</span>
</a>
<!-- Bill -->
<a class="flex items-center gap-2 font-label-caps text-label-caps text-on-surface hover:text-primary transition-colors" href="#">
<span class="material-symbols-outlined">receipt_long</span>
<span class="">BILL</span>
</a></div>
<div class="flex items-center gap-4">


</div>
</nav>
<!-- Main Canvas -->
<main class="flex-grow p-gutter pt-8 md:pt-margin relative">
<!-- Background decorative elements -->
<div class="fixed top-20 right-40 w-32 h-32 bg-hot-pink rounded-full -z-10 opacity-20 filter blur-xl mix-blend-multiply"></div>
<div class="fixed bottom-40 left-80 w-64 h-64 bg-electric-cyan rounded-full -z-10 opacity-20 filter blur-xl mix-blend-multiply"></div>
<!-- Header -->
<header class="mb-12 max-w-4xl mx-auto pm-card-rotate-1 text-center">
<h1 class="font-headline-xl text-headline-xl text-on-background tracking-tighter uppercase relative inline-block">
<span class="relative z-10">Check Items</span>
<span class="absolute bottom-1 left-0 w-full h-4 bg-electric-cyan -z-0 pm-outline"></span>
</h1>
<p class="font-body-lg text-body-lg text-on-surface-variant mt-4 bg-white inline-block px-4 py-2 pm-outline pm-shadow-sm -rotate-1">
                Fix anything the AI got wrong, then set your charges
            </p>
</header>
<div class="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
<!-- LEFT COLUMN: Item Table -->
<div class="flex-grow w-full lg:w-2/3">
<div class="bg-surface-container-lowest pm-outline pm-shadow-lg p-card-padding relative">
<!-- Decorative header bar -->
<div class="absolute top-0 left-0 w-full h-4 bg-on-background"></div>
<div class="mt-6">
<!-- Table Header (Hidden on small mobile, visible md+) -->
<div class="hidden md:grid grid-cols-12 gap-4 pb-4 border-b-4 border-on-background mb-4 font-label-caps text-label-caps">
<div class="col-span-1"></div>
<div class="col-span-5">Item Name</div>
<div class="col-span-2 text-center">Qty</div>
<div class="col-span-2 text-right">Unit (Rp)</div>
<div class="col-span-2 text-right">Total</div>
</div>
<!-- Row 1 -->
<div class="grid grid-cols-12 gap-2 md:gap-4 items-center bg-white p-3 mb-4 pm-outline pm-shadow-sm pm-card-rotate-1 pm-hover-press transition-all cursor-text group relative">
<div class="col-span-2 md:col-span-1 flex justify-center">
<span class="material-symbols-outlined text-outline group-hover:text-secondary cursor-pointer">drag_indicator</span>
</div>
<div class="col-span-10 md:col-span-5">
<input class="w-full bg-transparent border-none p-0 font-body-lg text-body-lg focus:ring-0 focus:outline-none font-bold" type="text" value="Nasi Goreng Spesial">
</div>
<div class="col-span-6 md:col-span-2 flex justify-center items-center gap-2 mt-2 md:mt-0">
<button class="w-8 h-8 rounded-full bg-surface-container pm-outline flex items-center justify-center hover:bg-secondary-fixed active:bg-secondary"><span class="material-symbols-outlined text-sm">remove</span></button>
<span class="font-body-md font-bold w-6 text-center">2</span>
<button class="w-8 h-8 rounded-full bg-surface-container pm-outline flex items-center justify-center hover:bg-secondary-fixed active:bg-secondary"><span class="material-symbols-outlined text-sm">add</span></button>
</div>
<div class="col-span-3 md:col-span-2 text-right mt-2 md:mt-0">
<input class="w-full bg-transparent border-none p-0 font-body-md text-body-md text-right focus:ring-0 focus:outline-none font-bold" type="text" value="45.000">
</div>
<div class="col-span-3 md:col-span-2 text-right mt-2 md:mt-0 font-money-lg text-money-lg text-primary">
                                90.000
                            </div>
</div>
<!-- Row 2 -->
<div class="grid grid-cols-12 gap-2 md:gap-4 items-center bg-white p-3 mb-4 pm-outline pm-shadow-sm pm-card-rotate-2 pm-hover-press transition-all cursor-text group relative">
<div class="col-span-2 md:col-span-1 flex justify-center">
<span class="material-symbols-outlined text-outline group-hover:text-secondary cursor-pointer">drag_indicator</span>
</div>
<div class="col-span-10 md:col-span-5">
<input class="w-full bg-transparent border-none p-0 font-body-lg text-body-lg focus:ring-0 focus:outline-none font-bold" type="text" value="Es Teh Manis">
</div>
<div class="col-span-6 md:col-span-2 flex justify-center items-center gap-2 mt-2 md:mt-0">
<button class="w-8 h-8 rounded-full bg-surface-container pm-outline flex items-center justify-center hover:bg-secondary-fixed active:bg-secondary"><span class="material-symbols-outlined text-sm">remove</span></button>
<span class="font-body-md font-bold w-6 text-center">3</span>
<button class="w-8 h-8 rounded-full bg-surface-container pm-outline flex items-center justify-center hover:bg-secondary-fixed active:bg-secondary"><span class="material-symbols-outlined text-sm">add</span></button>
</div>
<div class="col-span-3 md:col-span-2 text-right mt-2 md:mt-0">
<input class="w-full bg-transparent border-none p-0 font-body-md text-body-md text-right focus:ring-0 focus:outline-none font-bold" type="text" value="10.000">
</div>
<div class="col-span-3 md:col-span-2 text-right mt-2 md:mt-0 font-money-lg text-money-lg text-primary">
                                30.000
                            </div>
</div>
<!-- Row 3 -->
<div class="grid grid-cols-12 gap-2 md:gap-4 items-center bg-white p-3 mb-4 pm-outline pm-shadow-sm pm-card-rotate-1 pm-hover-press transition-all cursor-text group relative border-l-8 border-l-hot-pink">
<!-- Alert icon for AI uncertainty -->
<div class="absolute -left-3 -top-3 w-6 h-6 bg-sunshine-yellow rounded-full pm-outline flex items-center justify-center">
<span class="material-symbols-outlined text-[14px]">priority_high</span>
</div>
<div class="col-span-2 md:col-span-1 flex justify-center">
<span class="material-symbols-outlined text-outline group-hover:text-secondary cursor-pointer">drag_indicator</span>
</div>
<div class="col-span-10 md:col-span-5">
<input class="w-full bg-transparent border-none p-0 font-body-lg text-body-lg focus:ring-0 focus:outline-none font-bold text-hot-pink" type="text" value="Ayam Bakar Madu">
</div>
<div class="col-span-6 md:col-span-2 flex justify-center items-center gap-2 mt-2 md:mt-0">
<button class="w-8 h-8 rounded-full bg-surface-container pm-outline flex items-center justify-center hover:bg-secondary-fixed active:bg-secondary"><span class="material-symbols-outlined text-sm">remove</span></button>
<span class="font-body-md font-bold w-6 text-center">1</span>
<button class="w-8 h-8 rounded-full bg-surface-container pm-outline flex items-center justify-center hover:bg-secondary-fixed active:bg-secondary"><span class="material-symbols-outlined text-sm">add</span></button>
</div>
<div class="col-span-3 md:col-span-2 text-right mt-2 md:mt-0">
<input class="w-full bg-transparent border-none p-0 font-body-md text-body-md text-right focus:ring-0 focus:outline-none font-bold" type="text" value="55.000">
</div>
<div class="col-span-3 md:col-span-2 text-right mt-2 md:mt-0 font-money-lg text-money-lg text-primary">
                                55.000
                            </div>
</div>
</div>
<!-- Add Item Button -->
<button class="mt-6 w-full py-4 bg-surface border-4 border-dashed border-on-background text-on-background font-label-caps text-label-caps hover:bg-electric-cyan transition-colors flex items-center justify-center gap-2 group">
<span class="material-symbols-outlined group-hover:rotate-90 transition-transform">add_circle</span>
                        ADD ITEM
                    </button>
</div>
</div>
<!-- RIGHT COLUMN: Summary Card -->
<div class="w-full lg:w-1/3">
<div class="sticky top-24">
<div class="bg-white pm-outline pm-shadow-lg p-0 relative overflow-hidden -rotate-1">
<!-- Geometric header -->
<div class="h-4 w-full flex">
<div class="w-1/3 h-full bg-hot-pink"></div>
<div class="w-1/3 h-full bg-electric-cyan"></div>
<div class="w-1/3 h-full bg-cobalt-blue"></div>
</div>
<div class="p-card-padding">
<h2 class="font-headline-lg-mobile text-headline-lg-mobile mb-6 pb-2 border-b-4 border-on-background inline-block">Summary</h2>
<div class="space-y-4">
<!-- Subtotal -->
<div class="flex justify-between items-center font-body-lg text-body-lg font-bold">
<span class="">Subtotal</span>
<span class="">Rp 175.000</span>
</div>
<!-- Discount Toggle -->
<div class="flex justify-between items-center py-2 border-b-2 border-dashed border-outline-variant">
<div class="flex items-center gap-2">
<label class="font-body-md text-body-md">Discount</label>
<!-- Custom Memphis Toggle -->
<div class="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
<input checked="" class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-hot-pink border-3 border-on-background appearance-none cursor-pointer z-10 pm-shadow-sm transition-transform duration-200 peer" id="toggle-discount" name="toggle" type="checkbox" style="transform: translateX(100%);">
<label class="toggle-label block overflow-hidden h-6 rounded-full bg-white border-3 border-on-background cursor-pointer" for="toggle-discount"></label>
</div>
</div>
<input class="w-24 text-right bg-surface-container p-1 pm-outline font-body-md text-body-md text-secondary focus:bg-white focus:ring-0" type="text" value="- 15.000">
</div>
<!-- Tax -->
<div class="flex justify-between items-center py-2">
<div class="flex items-center gap-2">
<span class="font-body-md text-body-md">Tax (VAT)</span>
<span class="bg-electric-cyan text-on-background font-label-caps text-[10px] px-2 py-1 pm-outline -rotate-3 uppercase">Detected</span>
</div>
<div class="flex items-center gap-2">
<span class="text-xs font-bold bg-surface p-1 pm-outline">11%</span>
<span class="font-body-md text-body-md">Rp 17.600</span>
</div>
</div>
<!-- Service Charge -->
<div class="flex justify-between items-center py-2">
<div class="flex items-center gap-2">
<span class="font-body-md text-body-md">Service</span>
<span class="bg-electric-cyan text-on-background font-label-caps text-[10px] px-2 py-1 pm-outline -rotate-3 uppercase">Detected</span>
</div>
<div class="flex items-center gap-2">
<span class="text-xs font-bold bg-surface p-1 pm-outline">5%</span>
<span class="font-body-md text-body-md">Rp 8.000</span>
</div>
</div>
<!-- Round Up Toggle -->
<div class="flex justify-between items-center py-2 border-t-4 border-on-background mt-4 pt-4">
<label class="flex items-center gap-3 cursor-pointer">
<input checked="" class="pm-checkbox" type="checkbox">
<span class="font-body-md text-body-md font-bold">Round up to nearest 1.000</span>
</label>
</div>
</div>
</div>
<!-- Grand Total Area -->
<div class="bg-sunshine-yellow p-card-padding border-t-4 border-on-background mt-4 relative">
<!-- ZigZag motif pattern (CSS) -->
<div class="absolute top-0 right-0 w-16 h-full opacity-30" style="background-image: linear-gradient(135deg, #1b1b1b 25%, transparent 25%), linear-gradient(225deg, #1b1b1b 25%, transparent 25%), linear-gradient(45deg, #1b1b1b 25%, transparent 25%), linear-gradient(315deg, #1b1b1b 25%, #FFD400 25%); background-position: 10px 0, 10px 0, 0 0, 0 0; background-size: 20px 20px; background-repeat: repeat;"></div>
<div class="relative z-10">
<div class="font-label-caps text-label-caps mb-2 text-on-background">GRAND TOTAL</div>
<div class="font-headline-lg text-headline-lg text-on-background tracking-tighter">
                                    Rp 186.000
                                </div>
</div>
</div>
</div>
<!-- Primary Action Button -->
<button class="w-full mt-8 bg-cobalt-blue text-white font-label-caps text-label-caps py-4 px-6 pm-outline pm-shadow-md pm-hover-press pm-card-rotate-1 flex items-center justify-between group transition-all">
<span class="text-lg">NEXT — WHO'S IN? (PEOPLE)</span>
<span class="material-symbols-outlined text-2xl group-hover:translate-x-2 transition-transform bg-white text-cobalt-blue rounded-full p-1 pm-outline">arrow_forward</span>
</button>
</div>
</div>
</div>
</main>
<!-- Mobile Bottom Navigation (Visible on mobile, hidden on md+) -->
<nav class="md:hidden sticky bottom-0 w-full bg-surface border-t-4 border-on-background flex justify-around items-center py-2 z-50"><!-- Scan -->
<a class="flex flex-col items-center p-2 text-on-surface hover:text-primary" href="#">
<span class="material-symbols-outlined mb-1">qr_code_scanner</span>
<span class="font-label-caps text-[10px]">SCAN</span>
</a>
<!-- Items (Active) -->
<a class="flex flex-col items-center p-2 text-on-primary bg-primary rounded-lg -mt-4 pm-outline pm-shadow-sm pb-1 px-3" href="#">
<span class="material-symbols-outlined mb-1">list_alt</span>
<span class="font-label-caps text-[10px]">ITEMS</span>
</a>
<!-- People -->
<a class="flex flex-col items-center p-2 text-on-surface hover:text-primary" href="#">
<span class="material-symbols-outlined mb-1">groups</span>
<span class="font-label-caps text-[10px]">PEOPLE</span>
</a>
<!-- More menu indicator -->
<a class="flex flex-col items-center p-2 text-on-surface hover:text-primary" href="#">
<span class="material-symbols-outlined mb-1">more_horiz</span>
<span class="font-label-caps text-[10px]">MORE</span>
</a></nav>
<!-- Custom toggle script for memphis style checkbox -->
<script>
        document.addEventListener('DOMContentLoaded', function() {
            const toggleInputs = document.querySelectorAll('.toggle-checkbox');
            toggleInputs.forEach(input => {
                input.addEventListener('change', function() {
                    if(this.checked) {
                        this.style.transform = 'translateX(100%)';
                    } else {
                        this.style.transform = 'translateX(0)';
                    }
                });
                
                // Init state
                if(input.checked) {
                    input.style.transform = 'translateX(100%)';
                }
            });
        });
    </script>


<footer class="w-full bg-sunshine-yellow border-t-4 border-on-background py-6 px-gutter mt-12 relative overflow-hidden">
    <div class="absolute top-0 left-0 w-full h-1 bg-on-background opacity-10"></div>
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 relative z-10">
        <div class="font-label-caps text-label-caps font-bold text-on-background">© 2026 SPLIT BILL SHADY PROJECT</div>
        <div class="flex gap-6 font-label-caps text-[12px] uppercase">
            <a href="#" class="hover:text-secondary transition-colors underline decoration-2">Terms of Service</a>
            <a href="#" class="hover:text-secondary transition-colors underline decoration-2">Privacy Policy</a>
        </div>
    </div>
    <!-- Decorative Memphis dots -->
    <div class="absolute -bottom-4 -right-4 w-16 h-16 opacity-20" style="background-image: radial-gradient(#1b1b1b 2px, transparent 2px); background-size: 8px 8px;"></div>
</footer></body></html>

<!-- Manual Entry - Desktop (No Sidebar) -->
<!DOCTYPE html><html lang="en" style=""><head>
<meta charset="utf-8">
<meta content="width=device-width, initial-scale=1.0" name="viewport">
<title>Manual Entry - Split Bill</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;900&amp;family=Space+Grotesk:wght@500&amp;display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet">
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
                    "secondary-container": "#e1007f",
                    "on-tertiary-fixed": "#231b00",
                    "surface-container-highest": "#e2e2e2",
                    "tertiary-fixed": "#ffe177",
                    "surface-container-low": "#f3f3f3",
                    "on-primary-fixed": "#000965",
                    "surface-container-lowest": "#ffffff",
                    "secondary": "#b40064",
                    "surface-container-high": "#e8e8e8",
                    "error": "#ba1a1a",
                    "tertiary": "#715d00",
                    "outline": "#757687",
                    "surface-dim": "#dadada",
                    "primary-container": "#2b3fe8",
                    "on-error-container": "#93000a",
                    "primary-fixed-dim": "#bdc2ff",
                    "surface-variant": "#e2e2e2",
                    "on-primary": "#ffffff",
                    "tertiary-container": "#cba800",
                    "on-secondary-fixed": "#3e001f",
                    "on-tertiary-fixed-variant": "#554500",
                    "surface": "#f9f9f9",
                    "inverse-surface": "#303030",
                    "error-container": "#ffdad6",
                    "surface-tint": "#3346ee",
                    "inverse-primary": "#bdc2ff",
                    "on-secondary-container": "#fffbff",
                    "on-primary-container": "#c8ccff",
                    "on-secondary": "#ffffff",
                    "tertiary-fixed-dim": "#ebc300",
                    "on-secondary-fixed-variant": "#8d004e",
                    "surface-bright": "#f9f9f9",
                    "background": "#f9f9f9",
                    "primary-fixed": "#dfe0ff",
                    "secondary-fixed": "#ffd9e3",
                    "outline-variant": "#c5c5d9",
                    "secondary-fixed-dim": "#ffb0ca",
                    "on-primary-fixed-variant": "#0824d7",
                    "on-surface-variant": "#444656",
                    "primary": "#001dcd",
                    "on-background": "#1b1b1b",
                    "on-surface": "#1b1b1b",
                    "on-tertiary": "#ffffff",
                    "on-error": "#ffffff",
                    "surface-container": "#eeeeee",
                    "inverse-on-surface": "#f1f1f1",
                    "on-tertiary-container": "#4d3e00"
            },
            "borderRadius": {
                    "DEFAULT": "0.25rem",
                    "lg": "0.5rem",
                    "xl": "0.75rem",
                    "full": "9999px"
            },
            "spacing": {
                    "margin": "32px",
                    "gutter": "24px",
                    "offset-shadow-sm": "4px",
                    "offset-shadow-lg": "8px",
                    "unit": "8px",
                    "card-padding": "24px",
                    "offset-shadow-md": "5px"
            },
            "fontFamily": {
                    "body-md": [
                            "Space Grotesk"
                    ],
                    "body-lg": [
                            "Space Grotesk"
                    ],
                    "label-caps": [
                            "Montserrat"
                    ],
                    "money-lg": [
                            "Montserrat"
                    ],
                    "headline-lg": [
                            "Montserrat"
                    ],
                    "headline-lg-mobile": [
                            "Montserrat"
                    ],
                    "headline-xl": [
                            "Montserrat"
                    ]
            },
            "fontSize": {
                    "body-md": [
                            "16px",
                            {
                                    "lineHeight": "1.5",
                                    "fontWeight": "500"
                            }
                    ],
                    "body-lg": [
                            "18px",
                            {
                                    "lineHeight": "1.5",
                                    "fontWeight": "500"
                            }
                    ],
                    "label-caps": [
                            "14px",
                            {
                                    "lineHeight": "1.0",
                                    "letterSpacing": "0.15em",
                                    "fontWeight": "700"
                            }
                    ],
                    "money-lg": [
                            "24px",
                            {
                                    "fontWeight": "900"
                            }
                    ],
                    "headline-lg": [
                            "40px",
                            {
                                    "lineHeight": "1.1",
                                    "letterSpacing": "-0.01em",
                                    "fontWeight": "900"
                            }
                    ],
                    "headline-lg-mobile": [
                            "32px",
                            {
                                    "lineHeight": "1.1",
                                    "fontWeight": "900"
                            }
                    ],
                    "headline-xl": [
                            "64px",
                            {
                                    "lineHeight": "1.0",
                                    "letterSpacing": "-0.02em",
                                    "fontWeight": "900"
                            }
                    ]
            }
    },
        },
      }
    </script>
<style>
        /* Memphis Memphis Patterns & Rules */
        .hard-shadow { box-shadow: 5px 5px 0px 0px #000; }
        .hard-shadow-hover:hover { box-shadow: 2px 2px 0px 0px #000; transform: translate(3px, 3px); }
        .hard-shadow-lg { box-shadow: 8px 8px 0px 0px #000; }
        .border-thick { border: 3px solid #000; }
        
        /* Subtle Squiggle Background Pattern */
        .bg-pattern {
            background-image: radial-gradient(#000 1px, transparent 1px);
            background-size: 20px 20px;
            background-color: #f9f9f9;
        }

        /* Memphis Accent Elements */
        .memphis-shape-1 {
            position: absolute;
            width: 50px;
            height: 50px;
            background-color: #00D9E1;
            border: 3px solid #000;
            border-radius: 50%;
            z-index: -1;
        }
        .memphis-shape-2 {
            position: absolute;
            width: 60px;
            height: 60px;
            background-color: #FF2D95;
            border: 3px solid #000;
            clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
            z-index: -1;
        }
    </style>
</head>
<body class="bg-pattern min-h-screen flex flex-col font-body-md text-on-background overflow-x-hidden">
<!-- Decorative Shapes -->
<div class="memphis-shape-1 top-20 left-10 hidden md:block"></div>
<div class="memphis-shape-2 bottom-40 right-10 hidden md:block rotate-12"></div>
<div class="memphis-shape-1 top-1/2 right-20 hidden lg:block" style="background-color: #FFD400; border-radius: 0; width: 40px; height: 40px; transform: rotate(-15deg);"></div>
<!-- TopNavBar -->
<nav class="bg-background dark:bg-background sticky top-0 w-full z-50 border-b-4 border-on-background shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]">
<div class="flex justify-between items-center px-gutter py-4 flex-grow max-w-7xl mx-auto">
<div class="font-headline-lg-mobile text-headline-lg-mobile font-headline-lg text-primary border-b-4 border-secondary decoration-secondary font-bold">
            SPLIT BILL
        </div>
<div class="hidden md:flex items-center gap-6 flex-grow justify-center px-4"><!-- Scan -->
<a class="flex items-center gap-2 font-label-caps text-label-caps text-on-surface hover:text-primary transition-colors" href="#">
<span class="material-symbols-outlined">qr_code_scanner</span>
<span class="">SCAN</span>
</a>
<!-- Items (Active) -->
<a class="flex items-center gap-2 font-label-caps text-label-caps bg-primary text-on-primary border-thick px-4 py-2 -rotate-1 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:skew-x-1 transition-transform" href="#">
<span class="material-symbols-outlined">list_alt</span>
<span class="">ITEMS</span>
</a>
<!-- People -->
<a class="flex items-center gap-2 font-label-caps text-label-caps text-on-surface hover:text-primary transition-colors" href="#">
<span class="material-symbols-outlined">groups</span>
<span class="">PEOPLE</span>
</a>
<!-- Assign -->
<a class="flex items-center gap-2 font-label-caps text-label-caps text-on-surface hover:text-primary transition-colors" href="#">
<span class="material-symbols-outlined">handshake</span>
<span class="">ASSIGN</span>
</a>
<!-- Bill -->
<a class="flex items-center gap-2 font-label-caps text-label-caps text-on-surface hover:text-primary transition-colors" href="#">
<span class="material-symbols-outlined">receipt_long</span>
<span class="">BILL</span>
</a></div>

<div class="flex items-center gap-4"></div></div>
</nav>
<!-- SideNavBar & Main Content Wrapper -->
<div class="flex flex-1 w-full max-w-7xl mx-auto">
<!-- SideNavBar (Hidden on Mobile) -->
<!-- Main Content Area -->
<main class="flex-1 p-gutter w-full relative z-10 flex flex-col items-center justify-start pt-12 md:pt-20">
<!-- Header -->
<div class="w-full max-w-3xl mb-12 transform">
<h1 class="font-headline-xl text-headline-xl text-on-background uppercase tracking-tighter font-black font-bold" style="font-size: clamp(48px, 8vw, 72px);">
                    MANUAL ENTRY
                </h1>
<div class="h-2 w-32 bg-[#FF2D95] border-thick mt-4 hard-shadow"></div>
</div>
<!-- Form Card -->
<div class="w-full max-w-3xl bg-[#FFFDF5] border-thick hard-shadow-lg p-card-padding transform relative">
<!-- Corner Tape Decorative -->
<div class="absolute -top-4 -left-4 w-12 h-6 bg-[#00D9E1] border-thick transform -rotate-12"></div>
<div class="absolute -bottom-4 -right-4 w-12 h-6 bg-[#FFD400] border-thick transform rotate-12"></div>
<!-- Items Container -->
<div class="space-y-6" id="items-container">
<!-- Item Row 1 -->
<div class="flex flex-col md:flex-row gap-4 items-end pb-6 border-b-[3px] border-black">
<div class="flex-1 w-full">
<label class="block font-label-caps text-label-caps text-on-background mb-2 uppercase font-bold">Item Name</label>
<input class="w-full h-14 px-4 bg-white border-thick rounded-2xl focus:outline-none focus:ring-0 focus:border-[#FFD400] focus:shadow-[inset_4px_4px_0_0_#FFD400] transition-shadow font-body-lg text-body-lg font-bold" placeholder="e.g. Spicy Marg" type="text">
</div>
<div class="w-full md:w-48">
<label class="block font-label-caps text-label-caps text-on-background mb-2 uppercase font-bold">Price</label>
<div class="relative">

<input class="w-full h-14 pl-10 pr-4 bg-white border-thick rounded-2xl focus:outline-none focus:ring-0 focus:border-[#FFD400] focus:shadow-[inset_4px_4px_0_0_#FFD400] transition-shadow font-money-lg text-money-lg font-bold" placeholder="0.00" type="number">
</div>
</div>
<button class="h-14 w-14 bg-error text-on-error border-thick rounded-xl flex items-center justify-center hard-shadow hard-shadow-hover transform">
<span class="material-symbols-outlined">delete</span>
</button>
</div>
<!-- Item Row 2 -->
<div class="flex flex-col md:flex-row gap-4 items-end pb-6 border-b-[3px] border-black">
<div class="flex-1 w-full">
<label class="block font-label-caps text-label-caps text-on-background mb-2 uppercase font-bold">Item Name</label>
<input class="w-full h-14 px-4 bg-white border-thick rounded-2xl focus:outline-none focus:ring-0 focus:border-[#FFD400] focus:shadow-[inset_4px_4px_0_0_#FFD400] transition-shadow font-body-lg text-body-lg font-bold" placeholder="e.g. Nachos" type="text">
</div>
<div class="w-full md:w-48">
<label class="block font-label-caps text-label-caps text-on-background mb-2 uppercase font-bold">Price</label>
<div class="relative">

<input class="w-full h-14 pl-10 pr-4 bg-white border-thick rounded-2xl focus:outline-none focus:ring-0 focus:border-[#FFD400] focus:shadow-[inset_4px_4px_0_0_#FFD400] transition-shadow font-money-lg text-money-lg font-bold" placeholder="0.00" type="number">
</div>
</div>
<button class="h-14 w-14 bg-error text-on-error border-thick rounded-xl flex items-center justify-center hard-shadow hard-shadow-hover transform">
<span class="material-symbols-outlined">delete</span>
</button>
</div>
</div>
<!-- Add Action -->
<div class="mt-8 flex justify-center">
<button class="flex items-center gap-2 bg-[#00D9E1] text-on-background px-6 py-3 border-thick rounded-full font-label-caps text-label-caps hard-shadow hard-shadow-hover transform font-bold">
<span class="material-symbols-outlined">add</span>
                        ADD ITEM
                    </button>
</div>
<!-- Total Display -->
<div class="mt-8 space-y-6">
  <div class="flex flex-col md:flex-row gap-4 items-end pb-6 border-b-[3px] border-black">
    <div class="flex-1 w-full">
      <label class="block font-label-caps text-label-caps text-on-background mb-2 uppercase font-bold">Tax (%)</label>
      <input type="number" class="w-full h-14 px-4 bg-white border-thick rounded-2xl focus:outline-none focus:ring-0 focus:border-[#FFD400] focus:shadow-[inset_4px_4px_0_0_#FFD400] transition-shadow font-body-lg text-body-lg font-bold" placeholder="0">
    </div>
    <div class="flex-1 w-full">
      <label class="block font-label-caps text-label-caps text-on-background mb-2 uppercase font-bold">Service (%)</label>
      <input type="number" class="w-full h-14 px-4 bg-white border-thick rounded-2xl focus:outline-none focus:ring-0 focus:border-[#FFD400] focus:shadow-[inset_4px_4px_0_0_#FFD400] transition-shadow font-body-lg text-body-lg font-bold" placeholder="0">
    </div>
  </div>
  <div class="flex items-center gap-4 py-4">
    <label class="flex items-center cursor-pointer group font-bold">
      <div class="relative">
        <input type="checkbox" class="sr-only peer font-bold">
        <div class="w-14 h-8 bg-white border-thick rounded-full peer-checked:bg-[#00D9E1] transition-colors"></div>
        <div class="absolute left-1 top-1 w-6 h-6 bg-black rounded-full transition-transform peer-checked:translate-x-6"></div>
      </div>
      <span class="ml-4 font-label-caps text-label-caps text-on-background uppercase">Round up to nearest $1</span>
    </label>
  </div>
</div><div class="mt-12 p-6 bg-[#FFD400] border-thick transform flex justify-between items-center">
<span class="font-headline-lg text-headline-lg font-black font-bold">TOTAL</span>
<span class="font-money-lg text-headline-lg font-black font-bold">0.00</span>
</div>
</div>
<!-- Next Action -->
<div class="w-full max-w-3xl mt-12 flex justify-end">
<button class="bg-[#2B3FE8] text-white px-12 py-6 border-thick font-headline-lg-mobile text-headline-lg-mobile hard-shadow hard-shadow-hover transition-all flex items-center gap-4 group font-bold">
                    NEXT
                    <span class="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
</button>
</div>
</main>
</div>
<!-- Footer -->
<footer class="bg-tertiary-fixed dark:bg-tertiary-fixed-dim text-on-tertiary-fixed font-body-md text-body-md w-full mt-auto border-t-4 border-on-background py-8 px-gutter flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto z-50 relative">
<div class="font-label-caps text-on-tertiary-fixed mb-4 md:mb-0">
            © 2026 SPLIT BILL SHADY PROJECT
        </div>
<div class="flex gap-6">
<a class="text-on-tertiary-fixed hover:text-secondary hover:italic transition-all" href="#">Terms</a>
<a class="text-on-tertiary-fixed hover:text-secondary hover:italic transition-all" href="#">Privacy</a>
<a class="text-on-tertiary-fixed hover:text-secondary hover:italic transition-all" href="#">Support</a>
</div>
</footer>
<!-- BottomNavBar (Visible only on Mobile for primary destination mapping) -->
<!-- Suppressed on this page as per Semantic Shell Mandate (Linear/Transactional intent) -->












</body></html>

<!-- The Bill - Updated Footer (No Currency) -->
<!DOCTYPE html><html lang="en" style=""><head>
<meta charset="utf-8">
<meta content="width=device-width, initial-scale=1.0" name="viewport">
<title>Split Bill - The Bill</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;900&amp;family=Space+Grotesk:wght@500&amp;display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet">
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
                    "outline-variant": "#c5c5d9",
                    "on-secondary-container": "#fffbff",
                    "on-tertiary-fixed": "#231b00",
                    "on-tertiary": "#ffffff",
                    "tertiary-container": "#cba800",
                    "error-container": "#ffdad6",
                    "on-primary-container": "#c8ccff",
                    "surface-container": "#eeeeee",
                    "secondary": "#b40064",
                    "secondary-fixed": "#ffd9e3",
                    "inverse-surface": "#303030",
                    "tertiary-fixed-dim": "#ebc300",
                    "inverse-on-surface": "#f1f1f1",
                    "on-error-container": "#93000a",
                    "secondary-fixed-dim": "#ffb0ca",
                    "surface-tint": "#3346ee",
                    "surface-container-lowest": "#ffffff",
                    "inverse-primary": "#bdc2ff",
                    "on-tertiary-container": "#4d3e00",
                    "on-error": "#ffffff",
                    "surface-container-low": "#f3f3f3",
                    "surface-dim": "#dadada",
                    "secondary-container": "#e1007f",
                    "primary": "#001dcd",
                    "surface": "#f9f9f9",
                    "on-background": "#1b1b1b",
                    "tertiary": "#715d00",
                    "primary-container": "#2b3fe8",
                    "on-surface-variant": "#444656",
                    "error": "#ba1a1a",
                    "surface-variant": "#e2e2e2",
                    "outline": "#757687",
                    "surface-bright": "#f9f9f9",
                    "on-secondary-fixed-variant": "#8d004e",
                    "on-primary-fixed-variant": "#0824d7",
                    "on-primary-fixed": "#000965",
                    "on-secondary": "#ffffff",
                    "primary-fixed-dim": "#bdc2ff",
                    "primary-fixed": "#dfe0ff",
                    "background": "#FDF6E3",
                    "on-secondary-fixed": "#3e001f",
                    "surface-container-highest": "#e2e2e2",
                    "on-surface": "#1b1b1b",
                    "tertiary-fixed": "#ffe177",
                    "on-primary": "#ffffff",
                    "surface-container-high": "#e8e8e8",
                    "on-tertiary-fixed-variant": "#554500"
            },
            "borderRadius": {
                    "DEFAULT": "0.25rem",
                    "lg": "0.5rem",
                    "xl": "0.75rem",
                    "full": "9999px"
            },
            "spacing": {
                    "gutter": "24px",
                    "offset-shadow-sm": "4px",
                    "unit": "8px",
                    "card-padding": "24px",
                    "margin": "32px",
                    "offset-shadow-md": "5px",
                    "offset-shadow-lg": "8px"
            },
            "fontFamily": {
                    "headline-lg": ["Montserrat"],
                    "label-caps": ["Montserrat"],
                    "body-md": ["Space Grotesk"],
                    "headline-xl": ["Montserrat"],
                    "headline-lg-mobile": ["Montserrat"],
                    "body-lg": ["Space Grotesk"],
                    "money-lg": ["Montserrat"]
            },
            "fontSize": {
                    "headline-lg": ["40px", {"lineHeight": "1.1", "letterSpacing": "-0.01em", "fontWeight": "900"}],
                    "label-caps": ["14px", {"lineHeight": "1.0", "letterSpacing": "0.15em", "fontWeight": "700"}],
                    "body-md": ["16px", {"lineHeight": "1.5", "fontWeight": "500"}],
                    "headline-xl": ["64px", {"lineHeight": "1.0", "letterSpacing": "-0.02em", "fontWeight": "900"}],
                    "headline-lg-mobile": ["32px", {"lineHeight": "1.1", "fontWeight": "900"}],
                    "body-lg": ["18px", {"lineHeight": "1.5", "fontWeight": "500"}],
                    "money-lg": ["24px", {"fontWeight": "900"}]
            }
          }
        }
      }
    </script>
<style>
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        /* Hide scrollbar for a cleaner look in the main area while keeping functionality */
        ::-webkit-scrollbar { width: 12px; }
        ::-webkit-scrollbar-track { background: #f9f9f9; border-left: 3px solid #1b1b1b; }
        ::-webkit-scrollbar-thumb { background: #b40064; border: 3px solid #1b1b1b; }
        
        .memphis-pattern {
            background-image: radial-gradient(#1b1b1b 15%, transparent 16%), radial-gradient(#1b1b1b 15%, transparent 16%);
            background-size: 20px 20px;
            background-position: 0 0, 10px 10px;
            opacity: 0.05;
        }
    </style>
</head>
<body class="bg-background text-on-background font-body-md h-screen flex flex-col selection:bg-secondary selection:text-on-secondary min-h-screen">
<!-- TopNavBar (Used here as a Mobile Stepper / Desktop top anchor) -->
<nav class="bg-background dark:bg-background sticky top-0 w-full z-50 border-b-4 border-on-background shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]">
<div class="flex justify-between items-center px-gutter py-4 flex-grow">
<div class="font-headline-lg-mobile text-headline-lg-mobile font-headline-lg text-primary border-b-4 border-secondary decoration-secondary">
            SPLIT BILL
        </div>
<div class="hidden md:flex items-center gap-6 flex-grow justify-center px-4"><!-- Scan -->
<a class="flex items-center gap-2 font-label-caps text-label-caps text-on-surface hover:text-primary transition-colors" href="#">
<span class="material-symbols-outlined">qr_code_scanner</span>
<span class="">SCAN</span>
</a>
<!-- Items -->
<a class="flex items-center gap-2 font-label-caps text-label-caps text-on-surface hover:text-primary transition-colors" href="#">
<span class="material-symbols-outlined">list_alt</span>
<span class="">ITEMS</span>
</a>
<!-- People -->
<a class="flex items-center gap-2 font-label-caps text-label-caps text-on-surface hover:text-primary transition-colors" href="#">
<span class="material-symbols-outlined">groups</span>
<span class="">PEOPLE</span>
</a>
<!-- Assign -->
<a class="flex items-center gap-2 font-label-caps text-label-caps text-on-surface hover:text-primary transition-colors" href="#">
<span class="material-symbols-outlined">handshake</span>
<span class="">ASSIGN</span>
</a>
<!-- Bill (Active) -->
<a class="flex items-center gap-2 font-label-caps text-label-caps bg-primary text-on-primary pm-outline px-4 py-2 -rotate-1 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:skew-x-1 transition-transform" href="#">
<span class="material-symbols-outlined">receipt_long</span>
<span class="">BILL</span>
</a></div>

<div class="flex items-center gap-4"></div></div>
</nav>
<!-- Mobile Stepper Overlay (Shows only on small screens below header if needed, but per design keeping it top nav) -->

<!-- Main Content Canvas -->
<main class="flex-1 flex flex-col relative bg-[#FDF6E3]">
<div class="absolute inset-0 memphis-pattern pointer-events-none"></div>
<!-- Content Area -->
<div class="flex-1 w-full max-w-[1120px] mx-auto p-gutter md:p-margin relative z-10 pb-24">
<!-- Page Header -->
<div class="mb-12 relative rotate-1 inline-block">
<div class="absolute inset-0 bg-secondary-fixed translate-x-3 translate-y-3 border-[3px] border-on-background -z-10"></div>
<div class="bg-surface border-[3px] border-on-background p-6 shadow-[5px_5px_0px_0px_rgba(27,27,27,1)]">
<h1 class="font-headline-xl text-headline-xl text-on-background mb-2">The Bill&nbsp;</h1>
<p class="font-body-lg text-body-lg text-on-surface-variant font-bold border-t-[3px] border-on-background pt-2">Share each person's total, or send the whole summary.</p>
</div>
</div>
<!-- Main Layout Grid -->
<div class="grid grid-cols-1 xl:grid-cols-12 gap-margin items-start">
<!-- Left Column: Person Cards (2-across grid) -->
<div class="xl:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
<!-- Person Card 1 -->
<article class="bg-surface border-[3px] border-on-background shadow-[5px_5px_0px_0px_rgba(27,27,27,1)] p-card-padding -rotate-1 relative flex flex-col h-full hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(27,27,27,1)] transition-all">
<!-- Decorative Pin -->
<div class="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-secondary-container border-[3px] border-on-background shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] z-10"></div>
<div class="flex items-center gap-4 mb-6 border-b-[3px] border-on-background pb-4">
<img class="w-16 h-16 rounded-full border-[3px] border-on-background object-cover shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]" data-alt="A stylized 2D graphic avatar of a woman with bright pink hair, heavy black linework, flat electric cyan background, pop-art aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFFCDtAhfc_fDxFHwXFjwZdn8zSxkfY-hMDSonPUQ8ivAjwxsIssCR00FphImrxDss2Bl4_Ij93r5cliH8F5hHF3LN-03DfuL30Wzx57g6uYagB9cJEN1snGuuOsAx9jjEscgPHUWwt2i3LiF49RoylnuPNgrjtIOG2oURIOBV6UawoTvB9SgSxSDVHP91E_qcVGAj68AzubP8OcoHW8wVZJrXq42OwPe4zG-3ejM8I3T5qQgeLxRIMQ">
<h3 class="font-headline-lg-mobile text-headline-lg-mobile text-on-background uppercase tracking-tight">Sarah J.</h3>
</div>
<ul class="flex flex-col flex-1 gap-0 mb-6 font-body-md font-bold">
<li class="flex justify-between py-3 border-b-[3px] border-on-background border-dashed">
<span class="">Spicy Tuna Roll</span>
<span class="font-money-lg text-money-lg">14.50</span>
</li>
<li class="flex justify-between py-3 border-b-[3px] border-on-background border-dashed">
<span class="">Asahi (x2)</span>
<span class="font-money-lg text-money-lg">12.00</span>
</li>
<li class="flex justify-between py-3 border-b-[3px] border-on-background border-dashed text-on-surface-variant">
<span class="">Tax &amp; Service (18%)</span>
<span class="font-money-lg text-money-lg">4.77</span>
</li>
</ul>
<div class="bg-tertiary-fixed border-[3px] border-on-background p-4 flex justify-between items-center mb-6 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] rotate-2">
<span class="font-label-caps text-label-caps uppercase text-on-background">Total</span>
<span class="font-money-lg text-[32px] font-black tracking-tighter text-on-background">31.27</span>
</div>
<button class="mt-auto w-full bg-surface border-[3px] border-on-background py-3 font-label-caps text-label-caps uppercase text-on-background shadow-[4px_4px_0px_0px_rgba(27,27,27,1)] hover:bg-primary-fixed hover:shadow-[2px_2px_0px_0px_rgba(27,27,27,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center justify-center gap-2">
<span class="material-symbols-outlined">content_copy</span>
                            Copy Bill
                        </button>
</article>
<!-- Person Card 2 -->
<article class="bg-surface border-[3px] border-on-background shadow-[5px_5px_0px_0px_rgba(27,27,27,1)] p-card-padding rotate-1 relative flex flex-col h-full hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(27,27,27,1)] transition-all">
<!-- Decorative Pin -->
<div class="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-primary-fixed border-[3px] border-on-background shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] z-10"></div>
<div class="flex items-center gap-4 mb-6 border-b-[3px] border-on-background pb-4">
<img class="w-16 h-16 rounded-full border-[3px] border-on-background object-cover shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]" data-alt="A stylized 2D graphic avatar of a man with geometric glasses, heavy black linework, flat bright yellow background, pop-art aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXxDB96MRA2X60uA2iQExILo49OVRJbfAav3LGlIFRG42PqGnr0aW_-XZbkKUu6o2IYpaOk4W2wmIeAhtNMFCUDvoWqwDmV5L0c1iEOzVZZTmh7cWFvnZxcYDJK7T8h_THkVrCGChgwv_n1DGhKo7vBuh9VKONY1XWttZ9-faVmqom5CdPjL35Yr5jrepLKghnQ8TVOhgBBWQs7sXT81wLuhnMWkbR2azuyBYBB1m4RTydHjAGfiAaPQ">
<h3 class="font-headline-lg-mobile text-headline-lg-mobile text-on-background uppercase tracking-tight">Marcus T.</h3>
</div>
<ul class="flex flex-col flex-1 gap-0 mb-6 font-body-md font-bold">
<li class="flex justify-between py-3 border-b-[3px] border-on-background border-dashed">
<span class="">Dragon Roll</span>
<span class="font-money-lg text-money-lg">18.00</span>
</li>
<li class="flex justify-between py-3 border-b-[3px] border-on-background border-dashed">
<span class="">Miso Soup</span>
<span class="font-money-lg text-money-lg">4.00</span>
</li>
<li class="flex justify-between py-3 border-b-[3px] border-on-background border-dashed text-on-surface-variant">
<span class="">Tax &amp; Service (18%)</span>
<span class="font-money-lg text-money-lg">3.96</span>
</li>
</ul>
<div class="bg-tertiary-fixed border-[3px] border-on-background p-4 flex justify-between items-center mb-6 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] -rotate-1">
<span class="font-label-caps text-label-caps uppercase text-on-background">Total</span>
<span class="font-money-lg text-[32px] font-black tracking-tighter text-on-background">25.96</span>
</div>
<button class="mt-auto w-full bg-surface border-[3px] border-on-background py-3 font-label-caps text-label-caps uppercase text-on-background shadow-[4px_4px_0px_0px_rgba(27,27,27,1)] hover:bg-primary-fixed hover:shadow-[2px_2px_0px_0px_rgba(27,27,27,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center justify-center gap-2">
<span class="material-symbols-outlined">content_copy</span>
                            Copy Bill
                        </button>
</article>
<!-- Person Card 3 -->
<article class="bg-surface border-[3px] border-on-background shadow-[5px_5px_0px_0px_rgba(27,27,27,1)] p-card-padding -rotate-2 relative flex flex-col h-full hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(27,27,27,1)] transition-all">
<div class="flex items-center gap-4 mb-6 border-b-[3px] border-on-background pb-4">
<div class="w-16 h-16 rounded-full border-[3px] border-on-background bg-secondary-container flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
<span class="font-headline-lg-mobile text-on-secondary-container">E</span>
</div>
<h3 class="font-headline-lg-mobile text-headline-lg-mobile text-on-background uppercase tracking-tight">Elena</h3>
</div>
<ul class="flex flex-col flex-1 gap-0 mb-6 font-body-md font-bold">
<li class="flex justify-between py-3 border-b-[3px] border-on-background border-dashed">
<span class="">Sashimi Platter</span>
<span class="font-money-lg text-money-lg">32.00</span>
</li>
<li class="flex justify-between py-3 border-b-[3px] border-on-background border-dashed text-on-surface-variant">
<span class="">Tax &amp; Service (18%)</span>
<span class="font-money-lg text-money-lg">5.76</span>
</li>
</ul>
<div class="bg-tertiary-fixed border-[3px] border-on-background p-4 flex justify-between items-center mb-6 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] rotate-1">
<span class="font-label-caps text-label-caps uppercase text-on-background">Total</span>
<span class="font-money-lg text-[32px] font-black tracking-tighter text-on-background">37.76</span>
</div>
<button class="mt-auto w-full bg-surface border-[3px] border-on-background py-3 font-label-caps text-label-caps uppercase text-on-background shadow-[4px_4px_0px_0px_rgba(27,27,27,1)] hover:bg-primary-fixed hover:shadow-[2px_2px_0px_0px_rgba(27,27,27,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center justify-center gap-2">
<span class="material-symbols-outlined">content_copy</span>
                            Copy Bill
                        </button>
</article>
</div>
<!-- Right Rail: Sticky Actions -->
<div class="xl:col-span-4 xl:sticky xl:top-8 flex flex-col gap-6">
<!-- Grand Total Card -->
<div class="bg-tertiary-fixed border-[3px] border-on-background shadow-[8px_8px_0px_0px_rgba(27,27,27,1)] p-8 rotate-1">
<h2 class="font-label-caps text-label-caps uppercase text-on-background mb-4 flex items-center gap-2">
<span class="material-symbols-outlined">receipt</span>
                            Grand Total
                        </h2>
<div class="font-headline-xl text-[72px] font-black tracking-tighter text-on-background leading-none mb-6">94.99</div>
<div class="flex justify-between items-center border-t-[3px] border-on-background pt-4 font-body-md font-bold">
<span class="">Subtotal</span>
<span class="">80.50</span>
</div>
<div class="flex justify-between items-center font-body-md font-bold text-on-surface-variant mt-2">
<span class="">Total Tax &amp; Tip</span>
<span class="">14.49</span>
</div>
</div>
<!-- Primary Action -->
<button class="w-full bg-primary-container text-on-primary border-[3px] border-on-background shadow-[5px_5px_0px_0px_rgba(27,27,27,1)] hover:shadow-[2px_2px_0px_0px_rgba(27,27,27,1)] hover:translate-x-[3px] hover:translate-y-[3px] p-5 text-center font-label-caps text-label-caps uppercase transition-all flex items-center justify-center gap-3">
<span class="material-symbols-outlined font-bold">ios_share</span>
                        Share everyone's totals
                    </button>
<!-- Secondary Actions Container -->
<div class="flex flex-col gap-4 mt-2">
<button class="w-full bg-surface border-[3px] border-on-background p-4 text-center font-label-caps text-label-caps uppercase text-on-background hover:bg-secondary-fixed shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all flex items-center justify-center gap-3">
<span class="material-symbols-outlined">picture_as_pdf</span>
                            Download PDF
                        </button>
<button class="w-full bg-[#FDF6E3] border-[3px] border-on-background border-dashed p-4 text-center font-label-caps text-label-caps uppercase text-on-background hover:bg-surface-variant transition-all flex items-center justify-center gap-3">
<span class="material-symbols-outlined">restart_alt</span>
                            Start a New Split
                        </button>
</div>
</div>
</div>
</div>
<!-- Footer (from JSON) -->
<footer class="w-full mt-auto bg-tertiary-fixed dark:bg-tertiary-fixed-dim border-t-4 border-on-background py-8 px-gutter flex flex-col md:flex-row justify-between items-center max-w-[1120px] mx-auto z-10 border-x-4 border-on-background">
<div class="font-label-caps text-label-caps text-on-tertiary-fixed uppercase font-bold mb-4 md:mb-0 font-black">© 2026 SPLIT BILL SHADY PROJECT</div>
<ul class="flex gap-6 font-body-md text-body-md">
<li class=""><a class="text-on-tertiary-fixed hover:text-secondary hover:italic transition-all" href="#">Terms</a></li>
<li class=""><a class="text-on-tertiary-fixed hover:text-secondary hover:italic transition-all" href="#">Privacy</a></li>
<li class=""><a class="text-on-tertiary-fixed hover:text-secondary hover:italic transition-all" href="#">Support</a></li>
</ul>
</footer>
</main>








</body></html>