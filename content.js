// --- GHOST-PROOF CHECK ---
if (!window.arfEngineLoaded) {
  window.arfEngineLoaded = true;

  const arfSheet = new CSSStyleSheet();

  // --- THEME DEFINITIONS ---
  const THEMES = {
    cyberpunk: `
      :root, :host { --arf-bg: #090909; --arf-surface: #1a1a24; --arf-hover: #2b1b33; --arf-text: #00ffcc; --arf-accent: #ff0055; --arf-border: #005544; --arf-scheme: dark; --arf-icon-filter: invert(1) sepia(1) hue-rotate(130deg) saturate(300%); }
    `,
    zen: `
      :root, :host { --arf-bg: #fdfdfc; --arf-surface: #ffffff; --arf-hover: #f0f0ea; --arf-text: #2c2c2c; --arf-accent: #6b8e82; --arf-border: #dcdcd6; --arf-scheme: light; --arf-icon-filter: none; }
    `,
    dark_academia: `
      :root, :host { --arf-bg: #24201e; --arf-surface: #332d2a; --arf-hover: #453c37; --arf-text: #d4c8b8; --arf-accent: #8b5a2b; --arf-border: #4a3b32; --arf-scheme: dark; --arf-icon-filter: invert(0.8) sepia(0.3) brightness(1.2); }
    `,
    elvish: `
      :root, :host { 
        --arf-bg: #08140c; 
        --arf-surface: #14301d; 
        --arf-hover: #1c4228; 
        --arf-text: #e2f0e6; 
        --arf-accent: #d4af37; 
        --arf-border: rgba(212, 175, 55, 0.4); 
        --arf-scheme: dark; 
        --arf-icon-filter: sepia(0.8) hue-rotate(15deg) saturate(200%) brightness(1.2); 
      }
      
      body {
        font-family: 'Cormorant Garamond', serif !important;
        background-image: radial-gradient(circle at center, #1c4228 0%, #08140c 100%) !important;
      }
      
      body h1, body h2, body h3, body h4, body h5, body h6 {
        font-family: 'Cinzel', serif !important;
        text-shadow: 0 0 12px rgba(212, 175, 55, 0.4) !important;
        letter-spacing: 2px !important;
      }
      
      body [role="menu"], body [role="listbox"], body [role="dialog"], body [role="tooltip"], body dialog, 
      body .dropdown-menu, body .menu, body [class*="popup"], body [class*="modal"], body [class*="panel"], 
      body [class*="drawer"], body [class*="dropdown"], body [class*="popover"] {
        border-radius: 8px 30px 8px 30px !important;
        box-shadow: 0 10px 30px rgba(0,0,0,0.8), inset 0 0 20px rgba(212, 175, 55, 0.05) !important;
        border-color: var(--arf-accent) !important;
      }
      
      body button, body input, body textarea, body select, body [role="button"], body [class*="btn"] {
        border-radius: 30px 5px 30px 5px !important;
        text-transform: uppercase !important;
        letter-spacing: 1px !important;
      }
      
      body button:hover, body [role="button"]:hover, body [class*="btn"]:hover {
        box-shadow: 0 0 25px rgba(212, 175, 55, 0.4) !important;
      }

      body::after {
        content: "" !important; position: fixed !important; top: 0 !important; left: 0 !important; width: 100vw !important; height: 100vh !important;
        pointer-events: none !important; z-index: 2147483647 !important;
        background-image: 
          url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 15c-1.1-5-6-10-15-15 0 9 5 14 15 15zm0 70c-1.1 5-6 10-15 15 0-9 5-14 15-15zm35-35c5 1.1 10 6 15 15-9 0-14-5-15-15zm-70 0c-5-1.1-10-6-15-15 9 0 14 5 15 15z' fill='%23d4af37' fill-opacity='0.03'/%3E%3C/svg%3E") !important;
        background-size: 250px 250px !important;
      }
    `,
    vaporwave: `
      :root, :host { --arf-bg: #1f0c3f; --arf-surface: #301a61; --arf-hover: #48288c; --arf-text: #00ffff; --arf-accent: #ff00c8; --arf-border: #5a2391; --arf-scheme: dark; --arf-icon-filter: invert(1) hue-rotate(45deg) brightness(1.5); }
    `,
    terminal: `
      :root, :host { --arf-bg: #000000; --arf-surface: #0a140a; --arf-hover: #142b14; --arf-text: #00ff00; --arf-accent: #00aa00; --arf-border: #004400; --arf-scheme: dark; --arf-icon-filter: invert(1) sepia(1) hue-rotate(70deg) saturate(500%) brightness(1.2); }
    `,
    solarized: `
      :root, :host { --arf-bg: #fdf6e3; --arf-surface: #eee8d5; --arf-hover: #e0d8c3; --arf-text: #657b83; --arf-accent: #268bd2; --arf-border: #d3c6a6; --arf-scheme: light; --arf-icon-filter: none; }
    `,
    glassmorphism: `
      :root, :host { 
        --arf-bg: rgba(9, 9, 11, 0.85); 
        --arf-surface: rgba(255, 255, 255, 0.05); 
        --arf-hover: rgba(255, 255, 255, 0.1); 
        --arf-text: #f8fafc; 
        --arf-accent: #8b5cf6; 
        --arf-border: rgba(255, 255, 255, 0.08); 
        --arf-scheme: dark; 
        --arf-icon-filter: none; 
      }

      /* Base Canvas Setup */
      html { background-color: #09090b !important; }
      body { background-color: transparent !important; }

      /* Animated Aurora Background */
      body::before, body::after {
        content: "" !important; 
        position: fixed !important; 
        border-radius: 50% !important; 
        filter: blur(100px) !important;
        z-index: -1 !important; 
        pointer-events: none !important; 
        animation: arf-aurora 10s infinite alternate ease-in-out !important;
      }
      body::before { 
        width: 60vw !important; height: 60vh !important; 
        background: rgba(139, 92, 246, 0.15) !important; 
        top: -10vh !important; left: -10vw !important; 
      }
      body::after { 
        width: 50vw !important; height: 50vh !important; 
        background: rgba(59, 130, 246, 0.15) !important; 
        bottom: -10vh !important; right: -10vw !important; 
        animation-delay: -5s !important; 
      }
      
      @keyframes arf-aurora { 
        0% { transform: translate(0, 0); } 
        100% { transform: translate(5vw, 5vh); } 
      }

      /* Glassmorphism Surfaces */
      header, nav, aside, dialog, [role="menu"], [role="dialog"], [class*="modal"], [class*="popup"], [class*="panel"], [class*="card"], .dropdown-menu {
        background-color: var(--arf-surface) !important;
        backdrop-filter: blur(16px) !important;
        -webkit-backdrop-filter: blur(16px) !important;
        border: 1px solid var(--arf-border) !important;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1) !important;
      }

      /* Gradient Accents for Typography */
      h1, h2, h3 {
        background: linear-gradient(135deg, var(--arf-accent), #3b82f6) !important;
        -webkit-background-clip: text !important;
        -webkit-text-fill-color: transparent !important;
        background-clip: text !important;
      }
      
      /* Glowing Interactive Elements */
      button, input, [role="button"], [class*="btn"] { 
        border-radius: 12px !important; 
        transition: all 0.3s ease !important;
      }
      button:hover, [role="button"]:hover, [class*="btn"]:hover {
        box-shadow: 0 0 15px rgba(139, 92, 246, 0.4) !important;
        border-color: var(--arf-accent) !important;
        background-color: rgba(139, 92, 246, 0.1) !important;
      }
    `
  };

  const BASE_CSS = `
    /* 1. ROOT HIJACKER & FOUNDATION */
    :root, :host { 
      color-scheme: var(--arf-scheme) !important; 
      --color-calendar-graph-day-bg: var(--arf-surface) !important;
      --color-calendar-graph-day-L1-bg: color-mix(in srgb, var(--arf-accent) 25%, var(--arf-surface)) !important;
      --color-calendar-graph-day-L2-bg: color-mix(in srgb, var(--arf-accent) 55%, var(--arf-surface)) !important;
      --color-calendar-graph-day-L3-bg: color-mix(in srgb, var(--arf-accent) 80%, var(--arf-surface)) !important;
      --color-calendar-graph-day-L4-bg: var(--arf-accent) !important;
    }

    html, body, main, article, section, header, footer, nav, aside, div, table, tbody, tr, td, th, ul, ol, li, dl, dt, dd, blockquote, figure, figcaption, form, fieldset, legend, details, summary {
      background-color: var(--arf-bg) !important;
      color: var(--arf-text) !important;
      border-color: var(--arf-border) !important;
      transition: background-color 0.2s, color 0.2s !important;
    }

    /* 2. TEXT VISIBILITY & SPECIFICITY CRUSHER */
    p, span, a, h1, h2, h3, h4, h5, h6, label, strong, em, b, i, q, s, strike, u,
    [class*="text-gray" i], [class*="text-grey" i], [class*="text-dark" i], [class*="text-light" i], [class*="text-muted" i], 
    [class*="color-fg" i], [class*="color-text" i], [class*="fg-" i] {
      background-color: transparent !important;
      color: var(--arf-text) !important;
    }
    
    h1, h2, h3, h4 { color: var(--arf-accent) !important; }
    
    a, a *, a[class], a[class] *, [class*="Link--" i], [class*="link--" i] { 
      color: var(--arf-accent) !important; 
      text-decoration: none !important; 
    }

    /* 3. UX SURFACES */
    [role="menu"], [role="listbox"], [role="dialog"], [role="tooltip"], dialog, 
    .dropdown-menu, .menu, [class*="popup"], [class*="modal"], [class*="panel"], 
    [class*="drawer"], [class*="dropdown"], [class*="popover"],
    mat-menu, mat-select, mat-dialog-container, menu {
      background-color: var(--arf-surface) !important;
      box-shadow: 0 8px 32px rgba(0,0,0,0.6) !important;
      border: 1px solid var(--arf-border) !important;
      border-radius: 8px !important;
    }

    [role="menu"] > div, [role="listbox"] > div, [role="dialog"] > div,
    mat-menu > div, mat-select > div, [class*="dropdown"] > div { 
      background-color: transparent !important; 
    }

    /* 4. INTERACTIVE & HOVER STATES */
    button, input, textarea, select, [role="button"], [class*="btn"] {
      background-color: var(--arf-surface) !important;
      color: var(--arf-text) !important;
      border: 1px solid var(--arf-border) !important;
      border-radius: 4px !important;
    }

    a:hover, button:hover, [role="button"]:hover, [class*="btn"]:hover,
    [role="menuitem"]:hover, [role="option"]:hover, [role="tab"]:hover, li:hover,
    mat-option:hover, [class*="Link--" i]:hover {
      background-color: var(--arf-hover) !important;
      color: var(--arf-text) !important;
      cursor: pointer !important;
    }
    
    a:hover *, button:hover *, [role="menuitem"]:hover *, [role="option"]:hover * {
      background-color: transparent !important;
      color: var(--arf-text) !important;
    }

    /* 5. MAXIMUM NESTED TRANSPARENCY */
    button *, a *, [role="button"] *, [class*="btn"] *, [class*="toggle"] *,
    yt-icon, yt-icon-shape, .yt-spec-icon-shape, .mw-ui-icon, .vector-menu-checkbox {
       background-color: transparent !important;
    }

    /* 6. THE LOGO & BRAND SANCTUARY */
    [class*="logo" i], [id*="logo" i], [class*="brand" i], [id*="brand" i],
    [class*="logo" i] *, [id*="logo" i] *, [class*="brand" i] *, [id*="brand" i] * {
      background-color: transparent !important;
      border-color: transparent !important;
    }

    /* 7. FIXES & ICONS */
    select { appearance: auto !important; background-image: none !important; }
    
    [class*="icon" i]::before, [class*="icon" i]::after,
    [class*="menu" i]::before, [class*="menu" i]::after,
    [class*="toggle" i]::before, [class*="toggle" i]::after {
      filter: var(--arf-icon-filter) !important;
    }

    /* 8. STATIC FADE KILLERS */
    [class*="fade" i], [class*="shadow" i][class*="bottom" i], [class*="overlay" i],
    .vector-toc::after, .vector-pinnable-element::after, .vector-menu-content::after,
    [class*="bg-gradient-to"], [class*="from-white"], [class*="via-white"], [class*="to-white"] {
      background-image: none !important; background-color: transparent !important;
      box-shadow: none !important; mask-image: none !important; -webkit-mask-image: none !important;
    }

    .arf-killed-ghost, .arf-killed-ghost::after, .arf-killed-ghost::before {
      background-image: none !important; background-color: transparent !important;
      box-shadow: none !important; mask-image: none !important; -webkit-mask-image: none !important;
    }

    /* 9. MEDIA SHIELD */
    video, iframe, canvas { background-color: transparent !important; border: none !important; }
    video { background-color: #000 !important; }
    
    .html5-video-player, .html5-video-player * { background-color: transparent !important; border-color: transparent !important; }
    .html5-video-player .ytp-popup, .html5-video-player .ytp-panel,
    .html5-video-player .ytp-settings-menu, .html5-video-player .ytp-menu,
    .html5-video-player .ytp-tooltip { background-color: var(--arf-surface) !important; border: 1px solid var(--arf-border) !important; }

    /* 10. THE DATA-VIZ ASSIMILATOR (GitHub) */
    [data-level="0"], [data-score="0"] { fill: var(--arf-surface) !important; background-color: var(--arf-surface) !important; outline: 1px solid var(--arf-border) !important; outline-offset: -1px; }
    [data-level="1"], [data-score="1"] { fill: color-mix(in srgb, var(--arf-accent) 25%, var(--arf-surface)) !important; background-color: color-mix(in srgb, var(--arf-accent) 25%, var(--arf-surface)) !important; outline: none !important; }
    [data-level="2"], [data-score="2"] { fill: color-mix(in srgb, var(--arf-accent) 55%, var(--arf-surface)) !important; background-color: color-mix(in srgb, var(--arf-accent) 55%, var(--arf-surface)) !important; outline: none !important; }
    [data-level="3"], [data-score="3"] { fill: color-mix(in srgb, var(--arf-accent) 80%, var(--arf-surface)) !important; background-color: color-mix(in srgb, var(--arf-accent) 80%, var(--arf-surface)) !important; outline: none !important; }
    [data-level="4"], [data-score="4"] { fill: var(--arf-accent) !important; background-color: var(--arf-accent) !important; box-shadow: 0 0 6px var(--arf-accent) !important; outline: none !important; }
    .svg-tip { background-color: var(--arf-surface) !important; color: var(--arf-text) !important; border: 1px solid var(--arf-border) !important; }

    /* 11. DYNAMIC HOST SANCTUARY: WHATSAPP WEB */
    body.arf-host-whatsapp div { background-color: transparent !important; border-color: transparent !important; color: var(--arf-text) !important; }
    body.arf-host-whatsapp { background-color: var(--arf-bg) !important; }
    body.arf-host-whatsapp #app, body.arf-host-whatsapp .app-wrapper-web { background-color: var(--arf-bg) !important; }
    body.arf-host-whatsapp [role="row"], body.arf-host-whatsapp [data-testid="list-item"] { background-color: var(--arf-bg) !important; border-bottom: 1px solid var(--arf-border) !important; }
    body.arf-host-whatsapp [role="row"]:hover, body.arf-host-whatsapp [data-testid="list-item"]:hover { background-color: var(--arf-hover) !important; }
    body.arf-host-whatsapp header, body.arf-host-whatsapp footer, body.arf-host-whatsapp [data-testid="compose-box"] { background-color: var(--arf-surface) !important; border: 1px solid var(--arf-border) !important; }
    body.arf-host-whatsapp [data-testid^="msg-"] > div { background-color: var(--arf-surface) !important; border: 1px solid var(--arf-border) !important; border-radius: 8px !important; }
    body.arf-host-whatsapp div[data-testid^="msg-"][data-testid*="out"] > div { background-color: color-mix(in srgb, var(--arf-accent) 15%, var(--arf-surface)) !important; }

    /* =========================================================
       12. DYNAMIC HOST SANCTUARY: PINTEREST (V21)
       ========================================================= */
    /* Destroys the dark blanket over the image pins by stripping background from ALL structural containers */
    body.arf-host-pinterest div {
      background-color: transparent !important;
      border-color: transparent !important;
    }
    
    /* Rebuild the core background safely */
    body.arf-host-pinterest { background-color: var(--arf-bg) !important; }
    
    /* Restore surface color to Modals, Headers, and Interactive Menus */
    body.arf-host-pinterest header,
    body.arf-host-pinterest [role="banner"],
    body.arf-host-pinterest [role="dialog"],
    body.arf-host-pinterest [data-test-id="sheet-content"],
    body.arf-host-pinterest [data-test-id="header-container"] {
      background-color: var(--arf-surface) !important;
    }
    
    /* Restore Buttons */
    body.arf-host-pinterest button,
    body.arf-host-pinterest [role="button"],
    body.arf-host-pinterest [class*="button" i] {
      background-color: var(--arf-surface) !important;
      color: var(--arf-text) !important;
    }

    /* Force Pinterest images to pop over everything */
    body.arf-host-pinterest img,
    body.arf-host-pinterest picture,
    body.arf-host-pinterest video {
      opacity: 1 !important;
      visibility: visible !important;
      z-index: 1 !important;
    }

    /* =========================================================
       13. DYNAMIC HOST SANCTUARY: GEMINI
       ========================================================= */
    /* 1. Fix white areas by targeting custom web components and deep layout nodes */
    body.arf-host-gemini,
    body.arf-host-gemini gemini-app,
    body.arf-host-gemini chat-app,
    body.arf-host-gemini chat-window,
    body.arf-host-gemini user-input,
    body.arf-host-gemini infinite-scroller,
    body.arf-host-gemini text-input,
    body.arf-host-gemini pwa-auth-wrapper,
    body.arf-host-gemini model-response,
    body.arf-host-gemini mat-sidenav-container,
    body.arf-host-gemini mat-sidenav-content,
    body.arf-host-gemini mat-drawer-container,
    body.arf-host-gemini mat-drawer-content,
    body.arf-host-gemini message-list,
    body.arf-host-gemini chat-thread,
    body.arf-host-gemini .main-content,
    body.arf-host-gemini [class*="background"] {
      background-color: var(--arf-bg) !important;
      color: var(--arf-text) !important;
    }

    /* 2. Fix the 3 dots in the chats archive (Black Stripe Issue) */
    body.arf-host-gemini nav a div,
    body.arf-host-gemini navigation-drawer a div,
    body.arf-host-gemini [data-test-id="conversation-list-item"] div,
    body.arf-host-gemini [class*="conversation"] div {
      background-color: transparent !important;
      background-image: none !important;
      box-shadow: none !important;
    }

    body.arf-host-gemini nav a:hover,
    body.arf-host-gemini navigation-drawer a:hover,
    body.arf-host-gemini [data-test-id="conversation-list-item"]:hover {
      background-color: var(--arf-hover) !important;
    }
    
    body.arf-host-gemini nav a:hover button,
    body.arf-host-gemini navigation-drawer a:hover button,
    body.arf-host-gemini [data-test-id="conversation-list-item"]:hover button {
      background-color: var(--arf-surface) !important;
      opacity: 1 !important;
    }

    /* 3. Eliminate persistent white gradients overlays (The "White Stripe" Fix) */
    body.arf-host-gemini [style*="linear-gradient"],
    body.arf-host-gemini [class*="gradient" i],
    body.arf-host-gemini [class*="fade" i],
    body.arf-host-gemini .bottom-gradient,
    body.arf-host-gemini .top-gradient,
    body.arf-host-gemini [class*="shadow" i]::before,
    body.arf-host-gemini [class*="shadow" i]::after,
    body.arf-host-gemini infinite-scroller::before,
    body.arf-host-gemini infinite-scroller::after {
      background-image: none !important;
      background-color: transparent !important;
      box-shadow: none !important;
    }
    
    /* 4. Fix input area contrast */
    body.arf-host-gemini rich-textarea,
    body.arf-host-gemini user-input > div {
      background-color: var(--arf-surface) !important;
    }

    /* 5. Fix Transparent Menus (Settings & Help, Overlays) */
    body.arf-host-gemini md-menu,
    body.arf-host-gemini md-list,
    body.arf-host-gemini .cdk-overlay-pane,
    body.arf-host-gemini .cdk-overlay-pane > div,
    body.arf-host-gemini .mat-mdc-menu-panel,
    body.arf-host-gemini .mat-mdc-menu-panel > div,
    body.arf-host-gemini [role="menu"],
    body.arf-host-gemini [role="menu"] > div,
    body.arf-host-gemini [role="dialog"],
    body.arf-host-gemini [role="dialog"] > div,
    body.arf-host-gemini [role="listbox"],
    body.arf-host-gemini [role="listbox"] > div {
      background-color: var(--arf-surface) !important;
      opacity: 1 !important;
    }

    /* =========================================================
       14. DYNAMIC HOST SANCTUARY: WIKIPEDIA
       ========================================================= */
    /* 1. Page Previews (Hovercards) Main Containers */
    body.arf-host-wikipedia .mwe-popups,
    body.arf-host-wikipedia .mwe-popups-container,
    body.arf-host-wikipedia .mwe-popups-extract {
      background-color: var(--arf-surface) !important;
      color: var(--arf-text) !important;
    }

    /* 2. Kill the White Fade / Stripe on Previews Text */
    body.arf-host-wikipedia .mwe-popups-extract::after,
    body.arf-host-wikipedia .mwe-popups-extract[dir='ltr']::after,
    body.arf-host-wikipedia .mwe-popups-extract[dir='rtl']::after {
      background-image: none !important;
      background-color: transparent !important;
      box-shadow: none !important;
    }

    /* 3. Fix the Popup Pointer (The little connecting arrow) */
    body.arf-host-wikipedia .mwe-popups-pointer polyline,
    body.arf-host-wikipedia .mwe-popups-pointer polygon {
      fill: var(--arf-surface) !important;
      stroke: var(--arf-border) !important;
    }

    /* =========================================================
       15. DYNAMIC HOST SANCTUARY: YOUTUBE & LIVE CHAT
       ========================================================= */
    /* Target the main app and specifically the live chat web components */
    body.arf-host-youtube,
    body.arf-host-youtube ytd-app,
    body.arf-host-youtube #page-manager,
    body.arf-host-youtube yt-live-chat-app,
    body.arf-host-youtube yt-live-chat-renderer,
    body.arf-host-youtube yt-live-chat-header-renderer,
    body.arf-host-youtube yt-live-chat-item-list-renderer,
    body.arf-host-youtube #item-scroller,
    body.arf-host-youtube #contents,
    body.arf-host-youtube yt-live-chat-message-input-renderer {
      background-color: var(--arf-bg) !important;
      color: var(--arf-text) !important;
    }

    /* Input area surfaces */
    body.arf-host-youtube yt-live-chat-message-input-renderer {
      background-color: var(--arf-surface) !important;
      border-top: 1px solid var(--arf-border) !important;
    }

    /* Individual chat messages */
    body.arf-host-youtube yt-live-chat-text-message-renderer,
    body.arf-host-youtube yt-live-chat-membership-item-renderer,
    body.arf-host-youtube yt-live-chat-paid-message-renderer {
      background-color: transparent !important;
      --yt-live-chat-paid-message-primary-color: var(--arf-surface) !important;
      --yt-live-chat-paid-message-secondary-color: var(--arf-bg) !important;
      --yt-live-chat-paid-message-header-color: var(--arf-text) !important;
    }

    /* Hover effect for messages */
    body.arf-host-youtube yt-live-chat-text-message-renderer:hover {
      background-color: var(--arf-hover) !important;
    }

    /* Make the author names stand out using the accent color */
    body.arf-host-youtube #author-name.yt-live-chat-author-chip {
      color: var(--arf-accent) !important;
    }

    /* Restore Video Player Controls (Progress Bar & Volume Slider) */
    body.arf-host-youtube .html5-video-player .ytp-progress-list { background-color: rgba(255, 255, 255, 0.2) !important; }
    body.arf-host-youtube .html5-video-player .ytp-load-progress { background-color: rgba(255, 255, 255, 0.4) !important; }
    body.arf-host-youtube .html5-video-player .ytp-play-progress { background-color: var(--arf-accent) !important; }
    body.arf-host-youtube .html5-video-player .ytp-swatch-background-color { background-color: var(--arf-accent) !important; }
    body.arf-host-youtube .html5-video-player .ytp-scrubber-button { background-color: var(--arf-accent) !important; border-color: var(--arf-accent) !important; }
    body.arf-host-youtube .html5-video-player .ytp-volume-slider-track { background-color: rgba(255, 255, 255, 0.4) !important; }
    body.arf-host-youtube .html5-video-player .ytp-volume-slider-handle { background-color: var(--arf-accent) !important; }
    body.arf-host-youtube .html5-video-player .ytp-volume-slider-handle::before { background-color: var(--arf-accent) !important; }
  `;

  let observer = null;
  let updateTimeout = null;

  function manageExternalFonts(theme) {
    const fontLinkId = 'arf-external-fonts';
    let linkEl = document.getElementById(fontLinkId);
    
    if (theme === 'elvish') {
      if (!linkEl) {
        linkEl = document.createElement('link');
        linkEl.id = fontLinkId;
        linkEl.rel = 'stylesheet';
        linkEl.href = 'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&display=swap';
        document.head.appendChild(linkEl);
      }
    } else {
      if (linkEl) {
        linkEl.remove();
      }
    }
  }

  function applyRealityFilter() {
    chrome.storage.local.get(['theme', 'immersion'], (data) => {
      try {
        const theme = data.theme || 'none';
        const immersion = data.immersion || 3;

        manageExternalFonts(theme);

        if (theme === 'none') {
          removeSheet();
          stopObserver();
          return; 
        }

        // Host tagging logic (Injects Sanctuaries for SPA Apps)
        if (window.location.hostname.includes('whatsapp.com')) document.body.classList.add('arf-host-whatsapp');
        if (window.location.hostname.includes('pinterest.')) document.body.classList.add('arf-host-pinterest');
        if (window.location.hostname.includes('gemini.google.com')) document.body.classList.add('arf-host-gemini');
        if (window.location.hostname.includes('wikipedia.org')) document.body.classList.add('arf-host-wikipedia');
        if (window.location.hostname.includes('youtube.com')) document.body.classList.add('arf-host-youtube');

        arfSheet.replaceSync(THEMES[theme] + BASE_CSS);
        applySheet();
        applyImmersionLogic(theme, immersion);
        startObserver(theme, immersion);
      } catch (error) { console.error("ARF Error:", error); }
    });
  }

  function applySheet() {
    if (!document.adoptedStyleSheets.includes(arfSheet)) {
      document.adoptedStyleSheets = [...document.adoptedStyleSheets, arfSheet];
    }
    document.querySelectorAll('*').forEach(node => {
      if (node.shadowRoot && !node.shadowRoot.adoptedStyleSheets.includes(arfSheet)) {
        node.shadowRoot.adoptedStyleSheets = [...node.shadowRoot.adoptedStyleSheets, arfSheet];
      }
    });
  }

  function removeSheet() {
    document.adoptedStyleSheets = document.adoptedStyleSheets.filter(s => s !== arfSheet);
    document.querySelectorAll('*').forEach(node => {
      if (node.shadowRoot) {
        node.shadowRoot.adoptedStyleSheets = node.shadowRoot.adoptedStyleSheets.filter(s => s !== arfSheet);
      }
    });
  }

  function applyImmersionLogic(theme, immersion) {
    try {
      const isDarkTheme = ['cyberpunk', 'dark_academia', 'vaporwave', 'terminal', 'elvish', 'glassmorphism'].includes(theme);

      // 1. Media
      document.querySelectorAll('img').forEach(el => {
        el.style.filter = 'none'; 
        if (immersion >= 3) {
          if (theme === 'cyberpunk') el.style.filter = 'contrast(120%) saturate(150%) hue-rotate(-10deg)';
          if (theme === 'zen') el.style.filter = 'grayscale(30%) sepia(20%)';
          if (theme === 'dark_academia') el.style.filter = 'sepia(50%) contrast(90%) brightness(80%)';
          if (theme === 'vaporwave') el.style.filter = 'saturate(200%) hue-rotate(45deg) contrast(110%)';
          if (theme === 'terminal') el.style.filter = 'grayscale(100%) sepia(100%) hue-rotate(70deg) saturate(300%) contrast(150%)';
          if (theme === 'elvish') el.style.filter = 'sepia(30%) contrast(110%) brightness(105%) hue-rotate(10deg) saturate(120%)';
          if (theme === 'glassmorphism') el.style.filter = 'contrast(110%) saturate(120%) brightness(90%)';
        }
      });

      // 2. THE ULTIMATE ICON ADAPTOR
      document.querySelectorAll('svg, [class*="icon" i], [class*="fa-"], .material-icons, [class*="menu" i], [class*="toggle" i], yt-icon, yt-icon-shape').forEach(icon => {
        try {
          const idClass = (icon.className || '') + ' ' + (icon.id || '') + ' ' + (icon.parentElement?.className || '') + ' ' + (icon.parentElement?.id || '');
          
          const isProtected = /(logo|brand|chart|graph|calendar|map|avatar)/i.test(idClass) || icon.hasAttribute('data-level') || icon.closest('[data-level]');
          if (isProtected) return;

          if (icon.tagName.toLowerCase() === 'svg') {
            const paths = icon.querySelectorAll('path, circle, rect, polygon');
            let uniqueColors = new Set();
            
            paths.forEach(p => {
              const fill = window.getComputedStyle(p).fill;
              if (fill !== 'none' && fill !== 'rgba(0, 0, 0, 0)') uniqueColors.add(fill);
            });

            if (uniqueColors.size > 1) return;

            paths.forEach(p => {
              const fill = window.getComputedStyle(p).fill;
              if (fill !== 'none' && fill !== 'rgba(0, 0, 0, 0)') { 
                p.style.setProperty('fill', 'var(--arf-text)', 'important'); 
              }
            });
          } else {
            const style = window.getComputedStyle(icon);
            const isMask = (style.maskImage !== 'none' || style.webkitMaskImage !== 'none') && !style.maskImage.includes('gradient');
            
            if (isMask) {
              icon.style.setProperty('background-color', 'var(--arf-text)', 'important');
            } else {
              icon.style.setProperty('background-color', 'transparent', 'important');
              if (isDarkTheme && style.backgroundImage !== 'none' && !style.backgroundImage.includes('gradient')) {
                if (icon.textContent.trim() === '') {
                  icon.style.setProperty('filter', 'var(--arf-icon-filter)', 'important');
                }
              }
            }
          }
        } catch (e) {}
      });

      // 3. THE MATHEMATICAL COLOR MATRIX
      if (isDarkTheme) {
        const mathematicallyLight = (str) => {
          if (!str || str === 'none' || str === 'transparent') return false;
          const regex = /rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?/g;
          let match;
          while ((match = regex.exec(str)) !== null) {
            const r = parseInt(match[1], 10);
            const g = parseInt(match[2], 10);
            const b = parseInt(match[3], 10);
            const a = match[4] !== undefined ? parseFloat(match[4]) : 1;
            if (a > 0.1 && r > 200 && g > 200 && b > 200) return true;
          }
          return false;
        };

        const executeTarget = (el, type) => {
          if (type === 'bg') {
            el.style.setProperty('background-color', 'var(--arf-bg)', 'important');
            el.style.setProperty('color', 'var(--arf-text)', 'important');
          } else {
            el.style.setProperty('background-image', 'none', 'important');
            el.style.setProperty('background', 'transparent', 'important');
            el.style.setProperty('box-shadow', 'none', 'important');
            el.style.setProperty('mask-image', 'none', 'important');
            el.style.setProperty('-webkit-mask-image', 'none', 'important');
            el.classList.add('arf-killed-ghost'); 
          }
        };

        const killFades = (rootNode) => {
          // If we are on Pinterest, DO NOT RUN THIS LOOP. Let the native CSS Nuke handle it to protect React!
          if (document.body.classList.contains('arf-host-pinterest')) return;

          const elements = rootNode.querySelectorAll('div, span, aside, nav, footer, section, main, [class*="toc"], form, fieldset');
          
          elements.forEach(el => {
            try {
              if (el.hasAttribute('data-level') || 
                  el.closest('[class*="calendar" i], [class*="graph" i], [class*="chart" i], #pane-side, [data-testid="chat-list"]')) return;

              ['', '::after', '::before'].forEach(pseudo => {
                const style = window.getComputedStyle(el, pseudo);
                if (pseudo !== '' && style.content === 'none') return;
                
                const bgImg = style.backgroundImage || '';
                const mask = style.maskImage || style.webkitMaskImage || '';
                const bgColor = style.backgroundColor || '';
                const shadow = style.boxShadow || '';
                
                if (pseudo === '' && mathematicallyLight(bgColor)) {
                  executeTarget(el, 'bg');
                }

                const hasGradient = bgImg.includes('gradient') || mask.includes('gradient');
                const isWhiteGradient = hasGradient && (mathematicallyLight(bgImg) || mathematicallyLight(mask));
                const isOverlay = style.position === 'absolute' || style.position === 'fixed' || style.position === 'sticky';
                const isEmpty = el.textContent.trim() === '';
                const isWhiteOverlay = isOverlay && isEmpty && (mathematicallyLight(bgColor) || mathematicallyLight(shadow) || isWhiteGradient);
                const isEmptyGradient = isEmpty && hasGradient;

                if (isWhiteGradient || isWhiteOverlay || isEmptyGradient) {
                  if (pseudo === '') executeTarget(el, 'fade');
                  else el.classList.add('arf-killed-ghost');
                }
              });
            } catch(e) {}
          });
        };

        killFades(document); 
        document.querySelectorAll('*').forEach(node => {
          if (node.shadowRoot) killFades(node.shadowRoot); 
        });
      }
    } catch (error) { console.warn("ARF Warning:", error); }
  }

  // --- MUTATION OBSERVER ---
  function startObserver(theme, immersion) {
    if (observer) observer.disconnect();
    observer = new MutationObserver((mutations) => {
      let shouldUpdate = false;
      for (let mutation of mutations) {
        if (mutation.addedNodes.length > 0) {
          shouldUpdate = true;
          mutation.addedNodes.forEach(node => {
            if (node.nodeType === 1) { 
              if (node.shadowRoot && !node.shadowRoot.adoptedStyleSheets.includes(arfSheet)) {
                node.shadowRoot.adoptedStyleSheets = [...node.shadowRoot.adoptedStyleSheets, arfSheet];
              }
              const innerNodes = node.querySelectorAll ? node.querySelectorAll('*') : [];
              innerNodes.forEach(inner => {
                if (inner.shadowRoot && !inner.shadowRoot.adoptedStyleSheets.includes(arfSheet)) {
                  inner.shadowRoot.adoptedStyleSheets = [...inner.shadowRoot.adoptedStyleSheets, arfSheet];
                }
              });
            }
          });
        }
      }
      if (shouldUpdate) {
        clearTimeout(updateTimeout);
        updateTimeout = setTimeout(() => { applyImmersionLogic(theme, immersion); }, 300); 
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }

  function stopObserver() {
    if (observer) { observer.disconnect(); observer = null; }
    clearTimeout(updateTimeout);
  }

  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "updateReality") {
      applyRealityFilter();
      sendResponse({status: "success"}); 
    }
  });

  applyRealityFilter();
}