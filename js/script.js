/* =====================================================================
   Épisode 3 — Support pédagogique · Portfolio TSSR
   script.js (JavaScript « vanilla », sans bibliothèque)
   ---------------------------------------------------------------------
   1. Le code de l'épisode (source unique pour l'affichage, la copie et
      le téléchargement)
   2. Mémorisation locale (préférences, coches, progression)
   3. Coloration syntaxique
   4. Réglages d'affichage : thème, contraste, taille du texte
   5. Code complet : affichage, onglets, copie, téléchargement
   6. Fiches, étapes, corrections
   7. Checklists et validation
   8. QCM
   9. Progression, sommaire, retour en haut
   ===================================================================== */

(function () {
  'use strict';

  /* ---------- 1. LE CODE DE L'ÉPISODE (sans commentaires pédagogiques) ---------- */

  const EPISODE_FILES = {
    index: {
      fileName: 'index.html',
      mimeType: 'text/html;charset=utf-8',
      language: 'html',
      /* Lignes ajoutées (+) et ligne modifiée (~) par l'épisode 3 */
      newLines: [130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 210, 211, 212, 213, 214, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300],
      modifiedLines: [256],
      lines: [
        "<!DOCTYPE html>",
        "<html lang=\"fr\" data-theme=\"dark\" dir=\"ltr\">",
        "<head>",
        "  <meta charset=\"UTF-8\" />",
        "  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />",
        "  <meta name=\"description\" content=\"Portfolio professionnel de Lucas Moreau – Technicien Supérieur Systèmes et Réseaux (TSSR) en recherche d'un premier poste, formé chez MODE 83 à Draguignan (Var). Disponible immédiatement en région PACA.\" />",
        "  <meta name=\"keywords\" content=\"TSSR, technicien systèmes et réseaux, emploi, recrutement, premier poste, réseaux, systèmes, Windows Server, Linux, Active Directory, cybersécurité, virtualisation, MODE 83, Draguignan, Var, PACA\" />",
        "  <meta name=\"robots\" content=\"index, follow\" />",
        "  <meta name=\"theme-color\" content=\"#060d1a\" />",
        "  <meta name=\"author\" content=\"Lucas Moreau\" />",
        "",
        "  <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\" />",
        "  <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin />",
        "  <link href=\"https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=IBM+Plex+Mono:wght@300;400;500;600&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap\" rel=\"stylesheet\" />",
        "",
        "  <link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css\" />",
        "  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css\" />",
        "  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css\" />",
        "",
        "  <script src=\"config.js\"></script>",
        "  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js\"></script>",
        "",
        "  <link rel=\"icon\" type=\"image/png\" sizes=\"32x32\" href=\"images/favicon-32x32.png\">",
        "  <link rel=\"icon\" type=\"image/png\" sizes=\"192x192\" href=\"images/favicon-192x192.png\">",
        "  <link rel=\"icon\" type=\"image/webp\" href=\"images/favicon-400x400.webp\">",
        "  <link rel=\"apple-touch-icon\" sizes=\"180x180\" href=\"images/apple-touch-icon.png\">",
        "",
        "  <title>Portfolio TSSR | Recherche d'emploi – Technicien Systèmes &amp; Réseaux · MODE 83 Draguignan</title>",
        "  <style>",
        "    :root {",
        "      --clr-bg:          #060d1a;",
        "      --clr-bg2:         #0b1628;",
        "      --clr-surface:     rgba(255,255,255,.04);",
        "      --clr-surface2:    rgba(255,255,255,.07);",
        "      --clr-border:      rgba(96,165,250,.18);",
        "      --clr-accent:      #3b82f6;",
        "      --clr-accent2:     #60a5fa;",
        "      --clr-accent3:     #93c5fd;",
        "      --clr-teal:        #0ea5e9;",
        "      --clr-cyan:        #22d3ee;",
        "      --clr-text:        #e2e8f0;",
        "      --clr-text-soft:   #94a3b8;",
        "      --clr-text-faint:  #475569;",
        "      --clr-heading:     #f0f6ff;",
        "      --clr-white:       #ffffff;",
        "      --clr-danger:      #f87171;",
        "      --clr-success:     #34d399;",
        "      --clr-warn:        #fbbf24;",
        "      --radius-sm:       6px;",
        "      --radius-md:       12px;",
        "      --radius-lg:       20px;",
        "      --radius-xl:       32px;",
        "      --shadow-glow:     0 0 40px rgba(59,130,246,.25);",
        "      --shadow-card:     0 8px 32px rgba(0,0,0,.45);",
        "      --trans:           .3s cubic-bezier(.4,0,.2,1);",
        "      --font-display:    'Syne', sans-serif;",
        "      --font-mono:       'IBM Plex Mono', monospace;",
        "      --font-body:       'DM Sans', sans-serif;",
        "      --fz-min:          1.05rem;",
        "    }",
        "",
        "    [data-theme=\"light\"] {",
        "      --clr-bg:          #f0f4fa;",
        "      --clr-bg2:         #e2e8f0;",
        "      --clr-surface:     rgba(255,255,255,.7);",
        "      --clr-surface2:    rgba(255,255,255,.9);",
        "      --clr-border:      rgba(59,130,246,.2);",
        "      --clr-accent:      #2563eb;",
        "      --clr-accent2:     #3b82f6;",
        "      --clr-accent3:     #60a5fa;",
        "      --clr-teal:        #0284c7;",
        "      --clr-cyan:        #0891b2;",
        "      --clr-text:        #1e293b;",
        "      --clr-text-soft:   #475569;",
        "      --clr-text-faint:  #94a3b8;",
        "      --clr-heading:     #0f172a;",
        "      --clr-white:       #ffffff;",
        "      --shadow-glow:     0 0 40px rgba(37,99,235,.15);",
        "      --shadow-card:     0 8px 32px rgba(0,0,0,.12);",
        "    }",
        "",
        "    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }",
        "",
        "    html { scroll-behavior: smooth; font-size: 16px; }",
        "",
        "    body {",
        "      font-family: var(--font-body);",
        "      background-color: var(--clr-bg);",
        "      color: var(--clr-text);",
        "      font-size: var(--fz-min);",
        "      line-height: 1.7;",
        "      overflow-x: hidden;",
        "      transition: background-color var(--trans), color var(--trans);",
        "    }",
        "",
        "    ::-webkit-scrollbar               { width: 7px; }",
        "    ::-webkit-scrollbar-track         { background: var(--clr-bg2); }",
        "    ::-webkit-scrollbar-thumb         {",
        "      background: linear-gradient(180deg, var(--clr-accent), var(--clr-teal));",
        "      border-radius: 10px; height: 120px;",
        "    }",
        "    ::-webkit-scrollbar-thumb:hover   {",
        "      background: linear-gradient(180deg, var(--clr-accent2), var(--clr-cyan));",
        "      box-shadow: 0 0 8px var(--clr-accent);",
        "    }",
        "",
        "    .skip-link {",
        "      position: absolute;",
        "      top: -60px; left: 1rem;",
        "      background: var(--clr-accent);",
        "      color: var(--clr-white);",
        "      padding: .6rem 1.2rem;",
        "      border-radius: var(--radius-md);",
        "      font-weight: 600;",
        "      font-size: var(--fz-min);",
        "      z-index: 9999;",
        "      transition: top .2s;",
        "      text-decoration: none;",
        "    }",
        "    .skip-link:focus { top: 1rem; }",
        "",
        "    #read-progress {",
        "      position: fixed; top: 0; left: 0;",
        "      height: 3px; width: 0%;",
        "      background: linear-gradient(90deg, var(--clr-accent), var(--clr-cyan));",
        "      z-index: 9998;",
        "      transition: width .1s linear;",
        "      box-shadow: 0 0 10px var(--clr-accent);",
        "    }",
        "",
        "    #mainNav {",
        "      position: fixed; top: 0; left: 0; right: 0;",
        "      z-index: 1050;",
        "      padding: .9rem 0;",
        "      background: rgba(6,13,26,.82);",
        "      backdrop-filter: blur(18px) saturate(1.4);",
        "      -webkit-backdrop-filter: blur(18px) saturate(1.4);",
        "      border-bottom: 1px solid var(--clr-border);",
        "      transition: all var(--trans);",
        "    }",
        "    #mainNav.scrolled {",
        "      padding: .55rem 0;",
        "      background: rgba(6,13,26,.95);",
        "      box-shadow: 0 4px 30px rgba(0,0,0,.4);",
        "    }",
        "    [data-theme=\"light\"] #mainNav { background: rgba(240,244,250,.88); }",
        "    [data-theme=\"light\"] #mainNav.scrolled { background: rgba(240,244,250,.97); }",
        "",
        "    .nav-brand {",
        "      font-family: var(--font-display);",
        "      font-weight: 800; font-size: 1.3rem;",
        "      color: var(--clr-heading) !important;",
        "      text-decoration: none; letter-spacing: -.02em;",
        "    }",
        "    .nav-brand span { color: var(--clr-accent2); }",
        "",
        "    .navbar-nav .nav-link {",
        "      font-family: var(--font-mono);",
        "      font-size: .92rem;",
        "      font-weight: 500;",
        "      color: var(--clr-text-soft) !important;",
        "      letter-spacing: .02em;",
        "      padding: .4rem .5rem !important;",
        "      border-radius: var(--radius-sm);",
        "      transition: all var(--trans);",
        "      position: relative;",
        "    }",
        "    .navbar-nav .nav-link::before {",
        "      content: '';",
        "      position: absolute; bottom: 0; left: 50%; right: 50%;",
        "      height: 2px; background: var(--clr-accent2);",
        "      border-radius: 2px; transition: all var(--trans);",
        "    }",
        "    .navbar-nav .nav-link:hover,",
        "    .navbar-nav .nav-link:focus {",
        "      color: var(--clr-accent2) !important;",
        "      background: rgba(59,130,246,.08);",
        "    }",
        "    .navbar-nav .nav-link:hover::before,",
        "    .navbar-nav .nav-link:focus::before { left: 10%; right: 10%; }",
        "",
        "    #themeToggle {",
        "      background: var(--clr-surface2);",
        "      border: 1px solid var(--clr-border);",
        "      color: var(--clr-text);",
        "      padding: .4rem .9rem;",
        "      border-radius: var(--radius-lg);",
        "      cursor: pointer; font-size: var(--fz-min);",
        "      transition: all var(--trans);",
        "      display: flex; align-items: center; gap: .5rem;",
        "      white-space: nowrap;",
        "    }",
        "    #themeToggle:hover { background: var(--clr-accent); color: #fff; border-color: var(--clr-accent); }",
        "    #themeToggle:focus-visible { outline: 2px solid var(--clr-accent2); outline-offset: 3px; }",
        "",
        "    #toast {",
        "      position: fixed; bottom: 5.5rem; right: 2rem;",
        "      background: var(--clr-bg2); border: 1px solid var(--clr-border);",
        "      border-radius: var(--radius-md); padding: .9rem 1.4rem;",
        "      font-size: var(--fz-min); color: var(--clr-text); z-index: 2000;",
        "      opacity: 0; transform: translateX(30px);",
        "      transition: all .35s cubic-bezier(.4,0,.2,1);",
        "      max-width: 300px; box-shadow: var(--shadow-card); pointer-events: none;",
        "    }",
        "    #toast.show { opacity: 1; transform: translateX(0); }",
        "",
        "    :focus-visible { outline: 2px solid var(--clr-accent2); outline-offset: 3px; border-radius: 3px; }",
        "    ::selection { background: rgba(59,130,246,.3); color: var(--clr-heading); }",
        "  </style>",
        "",
        "  <style>",
        "  .navbar-nav          { flex-wrap: nowrap; }",
        "  .navbar-nav .nav-link { white-space: nowrap; }",
        "</style>",
        "</head>",
        "",
        "<body>",
        "  <a href=\"#main-content\" class=\"skip-link\">Passer au contenu principal</a>",
        "  <div id=\"toast\" role=\"status\" aria-live=\"polite\"></div>",
        "",
        "  <header>",
        "    <nav id=\"mainNav\" class=\"navbar navbar-expand-lg\" role=\"navigation\" aria-label=\"Navigation principale\">",
        "      <div class=\"container-fluid px-3 px-xl-4\">",
        "        <a class=\"nav-brand navbar-brand\" href=\"#hero\" aria-label=\"Lucas Moreau – Retour en haut\">LM<span>.</span></a>",
        "",
        "        <button class=\"navbar-toggler border-0 p-1\" type=\"button\"",
        "          data-bs-toggle=\"collapse\" data-bs-target=\"#navContent\"",
        "          aria-controls=\"navContent\" aria-expanded=\"false\"",
        "          aria-label=\"Ouvrir le menu de navigation\"",
        "          style=\"color: var(--clr-text-soft);\">",
        "          <i class=\"fas fa-bars\" aria-hidden=\"true\"></i>",
        "        </button>",
        "",
        "        <div class=\"collapse navbar-collapse\" id=\"navContent\">",
        "          <ul class=\"navbar-nav ms-auto align-items-lg-center gap-1 my-2 my-lg-0\">",
        "            <li class=\"nav-item\"><a class=\"nav-link\" href=\"#about\">À propos</a></li>",
        "            <li class=\"nav-item\"><a class=\"nav-link\" href=\"#skills\">Compétences</a></li>",
        "            <li class=\"nav-item\"><a class=\"nav-link\" href=\"#parcours\">Parcours</a></li>",
        "            <li class=\"nav-item\"><a class=\"nav-link\" href=\"#formation\">Formation</a></li>",
        "            <li class=\"nav-item\"><a class=\"nav-link\" href=\"#projects\">Projets</a></li>",
        "            <li class=\"nav-item\"><a class=\"nav-link\" href=\"#stage\">Objectif</a></li>",
        "            <li class=\"nav-item\"><a class=\"nav-link\" href=\"#contact\">Contact</a></li>",
        "          </ul>",
        "          <div class=\"ms-lg-3 mt-2 mt-lg-0\">",
        "            <button id=\"themeToggle\" aria-label=\"Basculer le thème clair/sombre\" title=\"Changer le thème\">",
        "              <i class=\"fas fa-moon\" id=\"themeIcon\" aria-hidden=\"true\"></i>",
        "              <span id=\"themeLabel\">Mode clair</span>",
        "            </button>",
        "          </div>",
        "        </div>",
        "      </div>",
        "    </nav>",
        "  </header>",
        "",
        "  <main id=\"main-content\">",
        "    <div class=\"container\" style=\"padding-top: 7rem; min-height: 200vh;\">",
        "      <h1>Lucas Moreau</h1>",
        "      <p>Technicien Supérieur Systèmes &amp; Réseaux</p>",
        "    </div>",
        "  </main>",
        "",
        "  <script src=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js\"></script>",
        "",
        "  <script>",
        "    (function () {",
        "      const html        = document.documentElement;",
        "      const themeToggle = document.getElementById('themeToggle');",
        "      const themeIcon   = document.getElementById('themeIcon');",
        "      const themeLabel  = document.getElementById('themeLabel');",
        "      const saved       = localStorage.getItem('theme') || 'dark';",
        "",
        "      function applyTheme(t) {",
        "        html.setAttribute('data-theme', t);",
        "        localStorage.setItem('theme', t);",
        "        themeIcon.className    = t === 'dark' ? 'fas fa-moon' : 'fas fa-sun';",
        "        themeLabel.textContent = t === 'dark' ? 'Mode clair' : 'Mode sombre';",
        "      }",
        "      applyTheme(saved);",
        "      themeToggle.addEventListener('click', function () {",
        "        const cur = html.getAttribute('data-theme');",
        "        applyTheme(cur === 'dark' ? 'light' : 'dark');",
        "        showToast(cur === 'dark' ? '☀️ Mode clair activé' : '🌙 Mode sombre activé');",
        "      });",
        "    })();",
        "",
        "    (function () {",
        "      const nav = document.getElementById('mainNav');",
        "      window.addEventListener('scroll', function () {",
        "        nav.classList.toggle('scrolled', window.scrollY > 60);",
        "      }, { passive: true });",
        "    })();",
        "",
        "    function showToast(msg, duration) {",
        "      const toast = document.getElementById('toast');",
        "      toast.textContent = msg;",
        "      toast.classList.add('show');",
        "      clearTimeout(toast._t);",
        "      toast._t = setTimeout(function () { toast.classList.remove('show'); }, duration || 2800);",
        "    }",
        "  </script>",
        "</body>",
        "</html>"
      ]
    },
    config: {
      fileName: 'config.js',
      mimeType: 'text/javascript;charset=utf-8',
      language: 'js',
      lines: [
        '(function () {',
        '  \'use strict\';',
        '  console.log(\'config.js chargé ✔\');',
        '})();'
      ]
    }
  };

  /* Les ajouts seuls, à copier dans le fichier de l'épisode 1 */
  const SNIPPETS = {
    add1: { label: 'l\'ajout n° 1 (CSS de la navigation)', from: 131, to: 205 },
    add2: { label: 'l\'ajout n° 2 (second bloc style)', from: 211, to: 214 },
    add34: { label: 'les ajouts n° 3 et 4 (toast et header)', from: 219, to: 253 },
    mod: { label: 'la ligne modifiée du conteneur', from: 256, to: 256 },
    add5: { label: 'l\'ajout n° 5 (JavaScript)', from: 262, to: 300 }
  };

  function getFileText(fileKey) {
    if (SNIPPETS[fileKey]) {
      const snippet = SNIPPETS[fileKey];
      return EPISODE_FILES.index.lines.slice(snippet.from - 1, snippet.to).join('\n') + '\n';
    }
    return EPISODE_FILES[fileKey].lines.join('\n') + '\n';
  }

  function getLabel(fileKey) {
    return SNIPPETS[fileKey] ? SNIPPETS[fileKey].label : EPISODE_FILES[fileKey].fileName;
  }

  function isNewLine(lineNumber) {
    return EPISODE_FILES.index.newLines.indexOf(lineNumber) !== -1;
  }

  function isModifiedLine(lineNumber) {
    return EPISODE_FILES.index.modifiedLines.indexOf(lineNumber) !== -1;
  }

  /* ---------- 2. MÉMORISATION LOCALE ---------- */
  /* Le stockage peut être indisponible (navigation privée…) : la page fonctionne quand même. */

  const STORAGE_PREFIX = 'tssr-ep3-';

  function loadValue(key, fallback) {
    try {
      const raw = window.localStorage.getItem(STORAGE_PREFIX + key);
      return raw === null ? fallback : JSON.parse(raw);
    } catch (error) {
      return fallback;
    }
  }

  function saveValue(key, value) {
    try {
      window.localStorage.setItem(STORAGE_PREFIX + key, JSON.stringify(value));
    } catch (error) {
      /* Stockage indisponible : on ignore, la page reste utilisable. */
    }
  }

  function clearSavedValues() {
    try {
      Object.keys(window.localStorage)
        .filter(function (key) { return key.indexOf(STORAGE_PREFIX) === 0; })
        .forEach(function (key) { window.localStorage.removeItem(key); });
    } catch (error) {
      /* Rien à effacer. */
    }
  }

  const liveRegion = document.getElementById('annonce');

  function announce(message) {
    liveRegion.textContent = '';
    window.setTimeout(function () { liveRegion.textContent = message; }, 50);
  }

  /* ---------- 3. COLORATION SYNTAXIQUE ---------- */

  function escapeHtml(text) {
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function wrapToken(className, text) {
    return '<span class="' + className + '">' + escapeHtml(text) + '</span>';
  }

  /* Colore les attributs d'une balise : nom="valeur", nom=valeur ou nom seul. */
  function highlightAttributes(text) {
    let output = '';
    let index = 0;
    while (index < text.length) {
      const rest = text.slice(index);
      let match;
      if ((match = rest.match(/^\s+/))) {
        output += match[0];
      } else if ((match = rest.match(/^\/?>/))) {
        output += wrapToken('tok-punct', match[0]);
      } else if ((match = rest.match(/^([^\s=>"\/]+)(=)("[^"]*"?|[^\s>"]+)?/))) {
        output += wrapToken('tok-attr', match[1]) + wrapToken('tok-punct', match[2]);
        if (match[3]) { output += wrapToken('tok-value', match[3]); }
      } else if ((match = rest.match(/^[^\s=>"\/]+/))) {
        output += wrapToken('tok-attr', match[0]);
      } else {
        match = [rest.charAt(0)];
        output += escapeHtml(match[0]);
      }
      index += match[0].length;
    }
    return output;
  }

  function highlightHtml(text) {
    /* Morceau d'attributs isolé (ex. : lang="fr" ou width=device-width) */
    if (!/</.test(text) && /^\s*[\w:@.-]+=/.test(text)) {
      return highlightAttributes(text);
    }
    let output = '';
    let index = 0;
    while (index < text.length) {
      const rest = text.slice(index);
      let match;
      if ((match = rest.match(/^<!DOCTYPE[^>]*>?/i))) {
        output += wrapToken('tok-doctype', match[0]);
      } else if ((match = rest.match(/^(<\/?)([a-zA-Z][\w-]*)([^>]*)(>?)/))) {
        output += wrapToken('tok-punct', match[1]) + wrapToken('tok-tag', match[2]);
        output += highlightAttributes(match[3]);
        if (match[4]) { output += wrapToken('tok-punct', match[4]); }
      } else if ((match = rest.match(/^\/?>/))) {
        output += wrapToken('tok-punct', match[0]);
      } else if ((match = rest.match(/^&[a-zA-Z#0-9]+;/))) {
        output += wrapToken('tok-entity', match[0]);
      } else if ((match = rest.match(/^[^<&>]+/))) {
        output += escapeHtml(match[0]);
      } else {
        match = [rest.charAt(0)];
        output += escapeHtml(match[0]);
      }
      index += match[0].length;
    }
    return output;
  }

  function highlightJs(text) {
    const keywords = ['function', 'return', 'const', 'let', 'var', 'if', 'else', 'true', 'false', 'null'];
    let output = '';
    let index = 0;
    while (index < text.length) {
      const rest = text.slice(index);
      let match;
      if ((match = rest.match(/^\s+/))) {
        output += match[0];
      } else if ((match = rest.match(/^'[^']*'?/))) {
        output += wrapToken('tok-string', match[0]);
      } else if ((match = rest.match(/^\d+(\.\d+)?/))) {
        output += wrapToken('tok-value', match[0]);
      } else if ((match = rest.match(/^[A-Za-z_$][\w$]*/))) {
        output += keywords.indexOf(match[0]) !== -1 ? wrapToken('tok-keyword', match[0]) : escapeHtml(match[0]);
      } else if ((match = rest.match(/^[(){}\[\];.,=:?|&<>!+*\/-]+/))) {
        output += wrapToken('tok-punct', match[0]);
      } else {
        match = [rest.charAt(0)];
        output += escapeHtml(match[0]);
      }
      index += match[0].length;
    }
    return output;
  }

  /* Coloration du CSS : on avance caractère par caractère en suivant l'état
     « sélecteur » → « propriété » → « valeur ». */
  function guessCssState(line) {
    if (line.indexOf('{') !== -1 || /^\s*}/.test(line)) { return 'selector'; }
    if (/^\s*[-\w]+\s*:/.test(line)) { return 'property'; }
    return 'selector';
  }

  function highlightCss(text, startState) {
    let state = startState || guessCssState(text);
    let output = '';
    let buffer = '';
    const classes = { selector: 'tok-tag', property: 'tok-attr', value: 'tok-value' };

    function flush() {
      if (buffer === '') { return; }
      const trimmed = buffer.trim();
      if (trimmed === '') {
        output += buffer;
      } else {
        const lead = buffer.match(/^\s*/)[0];
        const tail = buffer.match(/\s*$/)[0];
        output += lead + wrapToken(classes[state], trimmed) + tail;
      }
      buffer = '';
    }

    for (let index = 0; index < text.length; index++) {
      const char = text.charAt(index);
      if (char === '{') { flush(); output += wrapToken('tok-punct', char); state = 'property'; }
      else if (char === '}') { flush(); output += wrapToken('tok-punct', char); state = 'selector'; }
      else if (char === ':' && state === 'property') { flush(); output += wrapToken('tok-punct', char); state = 'value'; }
      else if (char === ';' && state === 'value') { flush(); output += wrapToken('tok-punct', char); state = 'property'; }
      else { buffer += char; }
    }
    flush();
    return { html: output, state: state };
  }

  /* Bloc mêlant HTML et CSS : les lignes entre <style> et </style> sont colorées en CSS. */
  function highlightMixed(lines) {
    let insideStyle = false;
    let insideScript = false;
    let cssState = 'selector';
    return lines.map(function (line) {
      if (line.trim() === '</script>') { insideScript = false; return highlightHtml(line); }
      if (insideScript) { return highlightJs(line); }
      if (line.trim() === '<script>') { insideScript = true; return highlightHtml(line); }
      if (/<\/style>/.test(line)) { insideStyle = false; return highlightHtml(line); }
      if (insideStyle) {
        const result = highlightCss(line, cssState);
        cssState = result.state;
        return result.html;
      }
      if (/<style>/.test(line)) { insideStyle = true; cssState = 'selector'; }
      return highlightHtml(line);
    });
  }

  /* Colore tous les petits blocs de code de la page (étapes, fiches…). */
  document.querySelectorAll('code[data-hl]').forEach(function (codeElement) {
    codeElement.innerHTML = codeElement.textContent.split('\n').map(highlightHtml).join('\n');
  });
  document.querySelectorAll('code[data-hl-css]').forEach(function (codeElement) {
    const lines = codeElement.textContent.split('\n');
    let state = guessCssState(lines[0]);
    codeElement.innerHTML = lines.map(function (line) {
      const result = highlightCss(line, state);
      state = result.state;
      return result.html;
    }).join('\n');
  });
  document.querySelectorAll('code[data-hl-mixed]').forEach(function (codeElement) {
    codeElement.innerHTML = highlightMixed(codeElement.textContent.split('\n')).join('\n');
  });
  document.querySelectorAll('code[data-hl-js]').forEach(function (codeElement) {
    codeElement.innerHTML = highlightJs(codeElement.textContent);
  });

  /* ---------- 4. RÉGLAGES D'AFFICHAGE ---------- */

  const root = document.documentElement;
  const themeButton = document.getElementById('btn-theme');
  const contrastButton = document.getElementById('btn-contraste');
  const themeColorMeta = document.querySelector('meta[name="theme-color"]');

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    const isDark = theme === 'dark';
    /* Le bouton affiche toujours l'action qu'il va réaliser. */
    themeButton.querySelector('.tool-icon').textContent = isDark ? '☀️' : '🌙';
    themeButton.querySelector('.tool-text').textContent = isDark ? 'Mode clair' : 'Mode sombre';
    themeButton.setAttribute('aria-label', isDark ? 'Passer en mode clair' : 'Passer en mode sombre');
    themeColorMeta.setAttribute('content', isDark ? '#060d1a' : '#f3f6fb');
  }

  function applyContrast(level) {
    root.setAttribute('data-contrast', level);
    contrastButton.setAttribute('aria-pressed', String(level === 'high'));
  }

  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(loadValue('theme', prefersDark ? 'dark' : 'light'));
  applyContrast(loadValue('contrast', 'normal'));

  themeButton.addEventListener('click', function () {
    const nextTheme = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme);
    saveValue('theme', nextTheme);
    announce(nextTheme === 'dark' ? 'Mode sombre activé.' : 'Mode clair activé.');
  });

  contrastButton.addEventListener('click', function () {
    const nextLevel = root.getAttribute('data-contrast') === 'high' ? 'normal' : 'high';
    applyContrast(nextLevel);
    saveValue('contrast', nextLevel);
    announce(nextLevel === 'high' ? 'Contraste renforcé activé.' : 'Contraste normal rétabli.');
  });

  /* Taille du texte : on modifie la variable CSS --text-scale. */
  const TEXT_SCALES = [0.9, 1, 1.15, 1.3, 1.5, 1.75, 2];
  const textSizeOutput = document.getElementById('taille-texte');
  let textScaleIndex = TEXT_SCALES.indexOf(loadValue('textScale', 1));
  if (textScaleIndex === -1) { textScaleIndex = 1; }

  function applyTextScale(index) {
    textScaleIndex = Math.max(0, Math.min(TEXT_SCALES.length - 1, index));
    const scale = TEXT_SCALES[textScaleIndex];
    root.style.setProperty('--text-scale', String(scale));
    textSizeOutput.textContent = Math.round(scale * 100) + ' %';
    document.getElementById('btn-texte-moins').disabled = textScaleIndex === 0;
    document.getElementById('btn-texte-plus').disabled = textScaleIndex === TEXT_SCALES.length - 1;
    saveValue('textScale', scale);
    updateToolbarHeight();
  }

  document.getElementById('btn-texte-plus').addEventListener('click', function () { applyTextScale(textScaleIndex + 1); });
  document.getElementById('btn-texte-moins').addEventListener('click', function () { applyTextScale(textScaleIndex - 1); });
  document.getElementById('btn-texte-normal').addEventListener('click', function () { applyTextScale(1); });

  /* La barre d'outils est fixe sur grand écran : on mémorise sa hauteur pour les ancres. */
  const toolbar = document.querySelector('.toolbar');
  const stickyToolbarQuery = window.matchMedia('(min-width: 48em)');

  function updateToolbarHeight() {
    const height = stickyToolbarQuery.matches ? toolbar.offsetHeight : 0;
    root.style.setProperty('--toolbar-h', height + 'px');
  }

  window.addEventListener('resize', updateToolbarHeight);
  applyTextScale(textScaleIndex);

  /* ---------- 5. CODE COMPLET ---------- */

  function renderCodeBlock(fileKey) {
    const file = EPISODE_FILES[fileKey];
    const highlighted = file.language === 'js' ? file.lines.map(highlightJs) : highlightMixed(file.lines);
    const codeElement = document.getElementById('code-' + fileKey);
    codeElement.innerHTML = file.lines.map(function (line, position) {
      const lineNumber = position + 1;
      let newClass = '';
      if (file.newLines && isNewLine(lineNumber)) { newClass = ' is-new'; }
      if (file.modifiedLines && isModifiedLine(lineNumber)) { newClass = ' is-mod'; }
      return '<span class="line' + newClass + '" id="' + fileKey + '-L' + lineNumber + '"><span class="line-content">' +
        (line === '' ? ' ' : highlighted[position]) + '</span></span>';
    }).join('');
  }

  renderCodeBlock('index');
  renderCodeBlock('config');
  document.getElementById('index-line-count').textContent = String(EPISODE_FILES.index.lines.length);

  /* Copie dans le presse-papiers, avec une solution de secours pour les navigateurs anciens. */
  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text).catch(function () { return legacyCopy(text); });
    }
    return legacyCopy(text);
  }

  function legacyCopy(text) {
    return new Promise(function (resolve, reject) {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.setAttribute('readonly', '');
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      let copied = false;
      try { copied = document.execCommand('copy'); } catch (error) { copied = false; }
      document.body.removeChild(textarea);
      if (copied) { resolve(); } else { reject(new Error('Copie impossible')); }
    });
  }

  document.querySelectorAll('.btn-copy').forEach(function (button) {
    const originalContent = button.innerHTML;
    let resetTimer = null;
    button.addEventListener('click', function () {
      const fileKey = button.dataset.file;
      copyText(getFileText(fileKey)).then(function () {
        button.textContent = '✓ Code copié !';
        button.classList.add('is-done');
        announce('Le code de ' + getLabel(fileKey) + ' a été copié dans le presse-papiers.');
      }).catch(function () {
        button.textContent = 'Copie impossible : sélectionnez le code';
        announce('La copie automatique a échoué. Sélectionnez le code à la main puis utilisez Contrôle C.');
      }).then(function () {
        window.clearTimeout(resetTimer);
        resetTimer = window.setTimeout(function () {
          button.innerHTML = originalContent;
          button.classList.remove('is-done');
        }, 2500);
      });
    });
  });

  /* Téléchargement : on fabrique le fichier dans le navigateur. */
  document.querySelectorAll('.btn-download').forEach(function (button) {
    button.addEventListener('click', function () {
      const file = EPISODE_FILES[button.dataset.file];
      const blob = new Blob([getFileText(button.dataset.file)], { type: file.mimeType });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = file.fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
      announce('Téléchargement de ' + file.fileName + ' lancé.');
    });
  });

  /* Surligner les lignes ajoutées par l'épisode 2 */
  const showNewButton = document.getElementById('btn-show-new');
  showNewButton.addEventListener('click', function () {
    const isOn = showNewButton.getAttribute('aria-pressed') !== 'true';
    showNewButton.setAttribute('aria-pressed', String(isOn));
    document.getElementById('code-index').parentElement.classList.toggle('show-new', isOn);
    announce(isOn ? 'Les lignes ajoutées sont marquées d\'un signe plus, la ligne modifiée d\'un tilde.' : 'Surlignage des ajouts désactivé.');
  });

  /* Retour à la ligne automatique dans le bloc de code */
  document.querySelectorAll('.btn-wrap').forEach(function (button) {
    button.addEventListener('click', function () {
      const isWrapped = button.getAttribute('aria-pressed') !== 'true';
      button.setAttribute('aria-pressed', String(isWrapped));
      document.querySelectorAll('.code-block').forEach(function (block) {
        block.classList.toggle('is-wrapped', isWrapped);
      });
    });
  });

  /* Onglets index.html / config.js (flèches gauche/droite au clavier) */
  const tabs = Array.prototype.slice.call(document.querySelectorAll('.code-tab'));

  function selectTab(tabToSelect) {
    tabs.forEach(function (tab) {
      const isSelected = tab === tabToSelect;
      tab.setAttribute('aria-selected', String(isSelected));
      tab.tabIndex = isSelected ? 0 : -1;
      document.getElementById(tab.getAttribute('aria-controls')).hidden = !isSelected;
    });
  }

  tabs.forEach(function (tab, position) {
    tab.addEventListener('click', function () { selectTab(tab); });
    tab.addEventListener('keydown', function (event) {
      if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') { return; }
      const step = event.key === 'ArrowRight' ? 1 : -1;
      const nextTab = tabs[(position + step + tabs.length) % tabs.length];
      selectTab(nextTab);
      nextTab.focus();
      event.preventDefault();
    });
  });

  /* ---------- 6. FICHES, ÉTAPES, CORRECTIONS ---------- */

  function setAllFiches(open) {
    document.querySelectorAll('.fiche details').forEach(function (details) { details.open = open; });
    announce(open ? 'Toutes les fiches sont ouvertes.' : 'Toutes les fiches sont fermées.');
  }

  document.getElementById('btn-fiches-ouvrir').addEventListener('click', function () { setAllFiches(true); });
  document.getElementById('btn-fiches-fermer').addEventListener('click', function () { setAllFiches(false); });

  /* Un lien vers #l12 (par exemple) ouvre directement la fiche correspondante. */
  function openTargetedFiche() {
    const hash = window.location.hash;
    if (!/^#[\w-]+$/.test(hash)) { return; }
    const target = document.querySelector(hash + '.fiche details');
    if (target) { target.open = true; }
  }
  window.addEventListener('hashchange', openTargetedFiche);
  openTargetedFiche();

  document.querySelectorAll('.btn-reveal').forEach(function (button) {
    const solution = document.getElementById(button.getAttribute('aria-controls'));
    button.addEventListener('click', function () {
      const willShow = solution.hidden;
      solution.hidden = !willShow;
      button.setAttribute('aria-expanded', String(willShow));
      button.textContent = willShow ? 'Masquer la correction' : 'Afficher la correction';
    });
  });

  /* ---------- 7. CHECKLISTS ET VALIDATION ---------- */

  document.querySelectorAll('[data-checklist]').forEach(function (fieldset) {
    const key = 'checklist-' + fieldset.dataset.checklist;
    const boxes = fieldset.querySelectorAll('input[type="checkbox"]');
    const saved = loadValue(key, []);
    boxes.forEach(function (box, position) {
      box.checked = Boolean(saved[position]);
      box.addEventListener('change', function () {
        saveValue(key, Array.prototype.map.call(boxes, function (item) { return item.checked; }));
      });
    });
  });

  const validationMessage = document.getElementById('validation-message');

  document.getElementById('btn-valider').addEventListener('click', function () {
    const boxes = Array.prototype.slice.call(document.querySelectorAll('#tests-checklist input[type="checkbox"]'));
    const remaining = boxes.filter(function (box) { return !box.checked; });
    validationMessage.classList.remove('is-success', 'is-incomplete');

    if (remaining.length === 0) {
      validationMessage.classList.add('is-success');
      validationMessage.textContent = '🎉 Bravo ! Votre épisode 3 est validé : votre portfolio a sa barre de navigation et ses premières lignes de JavaScript. Vous êtes prêt pour l\'épisode 4.';
      markAction('tests');
    } else {
      validationMessage.classList.add('is-incomplete');
      validationMessage.textContent = 'Presque ! Il reste ' + remaining.length + ' point' + (remaining.length > 1 ? 's' : '') +
        ' à vérifier. Le premier point non coché vient de recevoir le focus. En cas de souci, consultez la partie « Si ça ne fonctionne pas ».';
      remaining[0].focus();
    }
  });

  /* ---------- 8. QCM ---------- */

  const questions = Array.prototype.slice.call(document.querySelectorAll('.question'));
  const scoreOutput = document.getElementById('qcm-score');

  function optionText(question, value) {
    const input = question.querySelector('input[value="' + value + '"]');
    return input ? input.parentElement.querySelector('span').textContent : value;
  }

  function evaluateQuestion(question) {
    const chosen = question.querySelector('input:checked');
    if (!chosen) { return; }
    const answer = question.dataset.answer;
    const isCorrect = chosen.value === answer;
    const feedback = question.querySelector('.feedback');

    question.querySelectorAll('label').forEach(function (label) {
      const input = label.querySelector('input');
      label.classList.toggle('is-correct', input.value === answer);
      label.classList.toggle('is-wrong', input.checked && !isCorrect);
    });

    feedback.innerHTML = '';
    feedback.className = 'feedback ' + (isCorrect ? 'is-correct' : 'is-wrong');

    const title = document.createElement('p');
    title.className = 'feedback-title';
    title.textContent = isCorrect ? '✓ Bonne réponse !' : '✗ Ce n\'est pas la bonne réponse. La bonne réponse est : ' + optionText(question, answer);
    feedback.appendChild(title);

    const why = document.createElement('p');
    why.textContent = 'Pourquoi : ' + feedback.dataset.why;
    feedback.appendChild(why);

    const otherTitle = document.createElement('p');
    otherTitle.className = 'feedback-title';
    otherTitle.textContent = 'Pourquoi les autres réponses sont fausses :';
    feedback.appendChild(otherTitle);

    const list = document.createElement('ul');
    question.querySelectorAll('input').forEach(function (input) {
      if (input.value === answer) { return; }
      const reason = feedback.dataset['wrong' + input.value.toUpperCase()];
      const item = document.createElement('li');
      item.textContent = optionText(question, input.value) + ' — ' + reason;
      list.appendChild(item);
    });
    feedback.appendChild(list);
    feedback.hidden = false;
  }

  function updateScore() {
    const answered = questions.filter(function (question) { return question.querySelector('input:checked'); });
    const correct = answered.filter(function (question) {
      return question.querySelector('input:checked').value === question.dataset.answer;
    });
    if (answered.length < questions.length) {
      scoreOutput.textContent = 'Score : ' + correct.length + ' / ' + questions.length + ' — ' + answered.length + ' question' + (answered.length > 1 ? 's' : '') + ' répondue' + (answered.length > 1 ? 's' : '') + ' sur ' + questions.length + '.';
      return;
    }
    let comment = 'Relisez les fiches des questions manquées, puis recommencez.';
    if (correct.length === questions.length) { comment = 'Parfait, sans faute !'; }
    else if (correct.length >= 7) { comment = 'Très bien ! Relisez les fiches des questions manquées.'; }
    scoreOutput.textContent = 'Score final : ' + correct.length + ' / ' + questions.length + '. ' + comment;
    markAction('qcm');
  }

  questions.forEach(function (question) {
    question.addEventListener('change', function () {
      evaluateQuestion(question);
      updateScore();
    });
  });

  document.getElementById('btn-qcm-reset').addEventListener('click', function () {
    questions.forEach(function (question) {
      question.querySelectorAll('input').forEach(function (input) { input.checked = false; });
      question.querySelectorAll('label').forEach(function (label) { label.classList.remove('is-correct', 'is-wrong'); });
      const feedback = question.querySelector('.feedback');
      feedback.hidden = true;
      feedback.innerHTML = '';
    });
    updateScore();
    questions[0].querySelector('input').focus();
  });

  updateScore();

  /* ---------- 9. PROGRESSION, SOMMAIRE, RETOUR EN HAUT ---------- */

  const sections = Array.prototype.slice.call(document.querySelectorAll('[data-progress]'));
  const progressBar = document.getElementById('progression');
  const progressText = document.getElementById('progression-texte');
  const tocLinks = Array.prototype.slice.call(document.querySelectorAll('.sommaire-liste a'));
  const ACTIONS = ['tests', 'qcm'];

  /* La progression repart de 0 % à chaque ouverture : elle n'est pas mémorisée. */
  let visitedSections = [];
  let completedActions = [];

  /* Les sections visibles à l'ouverture ne comptent pas : une section n'est « consultée »
     qu'après une première action de l'utilisateur (molette, toucher, clavier ou clic). */
  let userHasInteracted = false;
  ['wheel', 'touchstart', 'keydown', 'pointerdown'].forEach(function (eventName) {
    window.addEventListener(eventName, function () { userHasInteracted = true; }, { once: true, passive: true });
  });

  function updateProgress() {
    const done = visitedSections.length + completedActions.length;
    const total = sections.length + ACTIONS.length;
    const percent = Math.round((done / total) * 100);
    progressBar.value = percent;
    progressBar.textContent = percent + ' %';
    progressText.textContent = percent + ' %';
    tocLinks.forEach(function (link) {
      link.classList.toggle('vue', visitedSections.indexOf(link.getAttribute('href').slice(1)) !== -1);
    });
  }

  function markVisited(sectionId) {
    if (!userHasInteracted || visitedSections.indexOf(sectionId) !== -1) { return; }
    visitedSections.push(sectionId);
    updateProgress();
  }

  function markAction(actionName) {
    if (completedActions.indexOf(actionName) !== -1) { return; }
    completedActions.push(actionName);
    updateProgress();
  }

  if ('IntersectionObserver' in window) {
    /* Une section est « consultée » quand elle occupe une bonne partie de l'écran. */
    const visitObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        const visibleEnough = entry.intersectionRatio >= 0.35 ||
          entry.intersectionRect.height >= window.innerHeight * 0.5;
        if (entry.isIntersecting && visibleEnough) { markVisited(entry.target.id); }
      });
    }, { threshold: [0, 0.2, 0.35, 0.6, 1] });

    /* La section au centre de l'écran est signalée dans le sommaire. */
    const currentObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) { return; }
        tocLinks.forEach(function (link) {
          if (link.getAttribute('href') === '#' + entry.target.id) {
            link.setAttribute('aria-current', 'true');
          } else {
            link.removeAttribute('aria-current');
          }
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });

    sections.forEach(function (section) {
      visitObserver.observe(section);
      currentObserver.observe(section);
    });
  } else {
    userHasInteracted = true;
    sections.forEach(function (section) { markVisited(section.id); });
  }

  /* Sur petit écran, le sommaire est replié au départ pour laisser la place au contenu,
     et il se replie après un clic sur un lien. */
  const sommaireDetails = document.getElementById('sommaire-details');
  const wideLayoutQuery = window.matchMedia('(min-width: 72em)');
  sommaireDetails.open = wideLayoutQuery.matches;

  tocLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      if (!wideLayoutQuery.matches) { sommaireDetails.open = false; }
    });
  });

  document.getElementById('btn-reset').addEventListener('click', function () {
    if (!window.confirm('Effacer votre progression, vos coches et vos réglages d\'affichage sur cet ordinateur ?')) { return; }
    clearSavedValues();
    visitedSections = [];
    completedActions = [];
    document.querySelectorAll('[data-checklist] input[type="checkbox"]').forEach(function (box) { box.checked = false; });
    validationMessage.textContent = '';
    validationMessage.classList.remove('is-success', 'is-incomplete');
    updateProgress();
    announce('Votre progression a été réinitialisée.');
  });

  updateProgress();

  /* Bouton « retour en haut » */
  const backToTopButton = document.getElementById('btn-haut');
  const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

  window.addEventListener('scroll', function () {
    backToTopButton.hidden = window.scrollY < 600;
  }, { passive: true });

  backToTopButton.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: reducedMotionQuery.matches ? 'auto' : 'smooth' });
    const pageTitle = document.getElementById('titre-episode');
    pageTitle.setAttribute('tabindex', '-1');
    pageTitle.focus({ preventScroll: true });
  });
})();
