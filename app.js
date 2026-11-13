/**
 * =========================================================================
 *  (rajkajorders.com)
 * =========================================================================
 * 
 * 📝 नई पोस्ट जोड़ने / बदलने का आसान तरीका (How to Add a New Post):
 * -------------------------------------------------------------------------
 * आप नीचे दी गई 'portalPosts' लिस्ट में सबसे ऊपर अपनी नई पोस्ट जोड़ सकते हैं।
 * हर पोस्ट में 200-300 शब्दों का पूरा विस्तृत विवरण सीधे पेज पर दिखेगा।
 * 
 * बस नीचे दिए गए फॉर्मेट को कॉपी करें और 'portalPosts = [' के तुरंत बाद पेस्ट कर दें:
 * 
 * {
 *     id: 'post-11',                              // अलग आईडी
 *     type: 'latest',                             // 'latest' (नवीनतम) या 'older' (पुरानी)
 *     featured: true,                             // true (प्रमुख पोस्ट) या false
 *     title: "आपकी नई पोस्ट का मुख्य शीर्षक",
 *     date: "30.10.2026",                         // दिनांक (DD.MM.YYYY)
 *     category: "da_pay",                         // da_pay | rules | schemes | general
 *     categoryName: "वेतन व DA",
 *     author: "वित्त विभाग राजस्थान",
 *     orderRef: "क्रमांक: 2026/101",
 *     pdfUrl: "pdfs/sample-order.pdf",            // pdfs/ में फाइल या Google Drive लिंक
 *     body: `
 *         <p>पैराग्राफ 1: आदेश की पृष्ठभूमि और मुख्य विवरण...</p>
 *         <h4>मुख्य बिंदु एवं नियम:</h4>
 *         <ul>
 *             <li>नियम बिंदु 1...</li>
 *             <li>नियम बिंदु 2...</li>
 *             <li>नियम बिंदु 3...</li>
 *         </ul>
 *         <p>पैराग्राफ 2: कार्यालय अध्यक्ष एवं आहरण-वितरण अधिकारी (DDO) के लिए आवश्यक दिशा-निर्देश...</p>
 *     `
 * },
 * =========================================================================
 */

// =========================================================================
// 📌 सेंट्रलाइज़्ड साइडबार व्यवस्था (Centralized Sidebar Engine)
// =========================================================================
// यहाँ नया लिंक जोड़ने/बदलने से वह पूरी वेबसाइट के सभी पेजों (Home, CCL, Post आदि)
// में अपने आप एक साथ अपडेट हो जाएगा! (Zero Lag, 100% Super Fast)

// 1. बायाँ साइडबार: Important Links
const SIDEBAR_IMPORTANT_LINKS = [
    { title: "Income Tax Calculator", url: "https://www.incometaxindia.gov.in/income-tax-calculator", external: true },
    { title: "Finance Department Portal", url: "https://finance.rajasthan.gov.in/", external: true },
    { title: "View Pool Budget/Expenditure on IFMS", url: "https://ifms2.rajasthan.gov.in", external: true },
    { title: "Search ACR/IPR (ACR Form)", url: "https://dop.rajasthan.gov.in/Content/ImmovablePropertyReturn.aspx?menu_id=369", external: true },
    { title: "राजस्थान सरकार कैलेंडर वर्ष 2026", url: "https://rajcalendar.in", external: true },
    { title: "Sanchar Saathi IMEI Block", url: "https://sancharsaathi.gov.in/", external: true },
    { title: "Cyber Security Helpline(1930)", url: "https://cybercrime.gov.in/home", external: true, isHighlight: true },
    { title: "DOITC Portal", url: "https://doitc.rajasthan.gov.in", external: true }
];

// 2. बायाँ साइडबार: Employee Helpline
const SIDEBAR_HELPLINE_LINKS = [
    { title: "IFMS Employee Helpline", url: "https://ifms.rajasthan.gov.in/#/contact-us", external: true },
    { title: "Pensioner Helpline IFMS", url: "https://ifms.rajasthan.gov.in/#/contact-us", external: true },
    { title: "Pension Department", url: "https://pension.rajasthan.gov.in/", external: true }
];

// 3. दायाँ साइडबार: Download Form's
const SIDEBAR_DOWNLOAD_FORMS = [
    { title: "CCL FORM (Child Care Rules and format )", url: "ccl.html", external: true },
    { title: "PL FORM", url: "./pdfs/forms/PL FORM.pdf", external: true },
    { title: "HRA FORMAT", url: "./pdfs/forms/HRAFORMAT.pdf", external: true }
];

// पोर्टल की सभी पोस्ट्स (Full 200-300+ Words Detailed Posts)
const portalPosts = [
    {
        id: 'post-ccl',
        type: 'latest',
        featured: true,
        title: "राजस्थान संतान देखभाल अवकाश नियम (Child Care Leave - CCL Rules RSR Rule 103C)",
        date: "10.11.2026",
        category: "rules",
        categoryName: "सेवा नियम (RSR)",
        author: "वित्त विभाग राजस्थान",
        orderRef: "RSR Rule 103-C",
        pdfUrl: "./ccl.html",
        customPageUrl: "ccl.html",
        body: `
            <p>राजस्थान सेवा नियम, 1951 के Rule 103-C के अंतर्गत महिला एवं एकल पुरुष सरकारी कर्मचारियों के लिए Child Care Leave (CCL) के संपूर्ण नियम, पात्रता, 730 दिन की सीमा, 100% व 80% वेतन प्रावधान एवं आवेदन प्रक्रिया।</p>
            <ul>
                <li><strong>अधिकतम अवधि:</strong> पूरी सेवा अवधि के दौरान अधिकतम 730 दिन CCL की पात्रता।</li>
                <li><strong>पात्र कार्मिक:</strong> महिला कर्मचारी एवं एकल पुरुष कर्मचारी (अविवाहित, विधुर या तलाकशुदा)।</li>
                <li><strong>वेतन प्रावधान:</strong> पहले 365 दिन 100% अवकाश वेतन तथा अगले 365 दिन 80% अवकाश वेतन।</li>
                <li><strong>अलग लेखा:</strong> CCL का पृथक अवकाश खाता (Leave Account) संधारित किया जाता है।</li>
            </ul>
        `
    },
    {
        id: 'post-3',
        type: 'latest',
        featured: true,
        title: "Pensioner Life certificate order (राजस्थान पेंशनर के जीवन प्रमाण पत्र 30.11.2026 तक प्रस्तुत करने हेतु आदेश 30.10.2026)",
        date: "30.10.2026",
        category: "general",
        categoryName: "सामान्य परिपत्र",
        author: "निदेशालय पेंशन एवं पेंशन कल्याण विभाग जयपुर",
        orderRef: "2393",
        pdfUrl: "pdfs/LifeCertificateOrder30.10.2026.pdf",
        body: `
<p>राजस्थान पेंशनर के जीवन प्रमाण पत्र 30.11.2026 तक प्रस्तुत करने हेतु आदेश 30.10.2026</p>

            <h4>मुख्य बिंदु एवं नियम:</h4>
            <ul>
                <li><strong>जीवन प्रमाण पत्र</strong> राजस्थान के सभी सिविल/पारिवारिक पेंशनर द्वारा माह नवम्बर २०२६ में जीवन प्रमाण पात्र प्रस्तुत करना अनिवार्य है</li>
                <li><strong>प्रक्रिया</strong> पेंशनर जीवन प्रमाण पत्र के लिए राजस्थान सरकार में कार्यरत समस्त राजपत्रित/अराजपत्रित कर्मचारियों (चतुर्थ श्रेणी कर्मचारी को छोडकर) IFMS 3.0 में कर्मचारी की sso id  द्वारा के माध्यम से अथवा संबंधित कोषालय/ उप कोषालय अथवा निदेशालय पेंशन/ संभागीय पेंशन कार्यालयों की हेल्पडेस्क पर व्यक्शिः उपस्थित होकर जीवन प्रमाण पत्र प्रस्तुत कर सकते है।</li>
                <li><strong>IFMS 3.0 से जीवन प्रमाण पात्र जारी करने का तरीका</strong> इसके लिए राजस्थान सरकार में कार्यरत कोई भी कार्मिक  (चतुर्थ श्रेणी कर्मचारी को छोडकर) पेंशनर का जीवन प्रमाण पत्र जारी कर सकता है 
1. इसके लिए कर्मचारी अपने sso में IFMS ३.0 खोले|
2. Access Employee self service(ESS) ओपन करे |
3. दाई तरफ Pension Services में पेंशन वेरिफिकेशन चुने 
४. PPO डालकर verify करे |
5. कर्मचारी अपना आधार नंबर डालकर अंतिम वेरिफिकेशन करे |</li>
            </ul>

            <p><strong>अधिक जानकारी एवं शर्तों के लिए कृपया नीचे दिए गए बटन से आधिकारिक आदेश प्रतिलिपि डाउनलोड करें।</strong></p>
        `
    },

    {
        id: 'post-1',
        type: 'latest',
        featured: true,
        title: "DA Hike Order 60% to 63%",
        date: "30.10.2026",
        category: "da_pay",
        categoryName: "वेतन व DA",
        author: "वित्त विभाग (नियम प्रकोष्ठ) जयपुर",
        orderRef: "F.1(45)FD/Rules/2026",
        pdfUrl: "https://finance.rajasthan.gov.in/PDFDOCS/RULES/15248.pdf",
        body: `
            <p>राजस्थान के अधिकारियों कर्मचारियों के लिए महंगाई भत्ते की दर 60 प्रतिशत से बढाकर 63 प्रतिशत कर दी गयी है </p>

            <h4></h4>
            <ul>
                <li><strong>बोनस की पात्रता और दर: राज्य के ऐसे कर्मचारी जो 31-03-2026 को सेवा में थे और 1 अप्रैल 2026 को भी सेवा में जारी हैं, तथा जो पे मैट्रिक्स लेवल एल-12 या उससे कम (या 2008 के नियमों के तहत 4800 रुपये या उससे कम के ग्रेड पे) में वेतन ले रहे हैं, वे 30 दिनों के समतुल्य तदर्थ बोनस के पात्र हैं। राज्य सेवा के अधिकारी इसमें शामिल नहीं हैं।</li>
                <li><strong>वेतन एवं डीए की गणना दर:</strong> समर्पण अवकाश का भुगतान उस माह के मूल वेतन (Basic Pay) तथा उस समय लागू महंगाई भत्ते (DA) की दर के आधार पर किया जाएगा, जिस माह में समर्पण आदेश जारी किया गया है।</li>
                <li><strong>सेवा अवधि की शर्त: बोनस प्राप्त करने के लिए कर्मचारी ने वित्तीय वर्ष 2025-26 के दौरान कम से कम छह महीने की निरंतर सेवा पूरी की होनी चाहिए। बारह महीने की सेवा पर पूरा 30 दिन का बोनस मिलता है, जबकि 6 से 12 महीने के बीच की सेवा के लिए आनुपातिक (pro-rata) भुगतान किया जाता है।</li>
                <li><strong>वेतन सीमा और गणना: बोनस की गणना 31 मार्च 2026 के वास्तविक संबल (emoluments - जिसमें मूल वेतन, व्यक्तिगत वेतन, प्रतिनियुक्ति और महंगाई भत्ते शामिल हैं) के आधार पर की जाती है, जिसके लिए अधिकतम वेतन सीमा 7,000 रुपये प्रति माह निर्धारित है</li>
                <li><strong>भुगतान का तरीका: कुल तदर्थ बोनस का 75% नकद भुगतान किया जाता है और शेष 25% संबंधित कर्मचारी के सामान्य भविष्य निधि (GPF) खाते में जमा किया जाता है।।</li>
                <li><strong>अपात्र श्रेणियां: अंशकालिक (part-time), दैनिक वेतन भोगी (daily wage), संविदा (contract) कर्मचारी, और परिवीक्षाधीन प्रशिक्षणाार्थी (probationer trainee) इस बोनस के पात्र नहीं हैं। इसके अलावा 31 मार्च 2026 या उससे पहले सेवानिवृत्त होने वाले या इस्तीफा देने वाले कर्मचारी भी इसके हकदार नहीं हैं।</li>
            </ul>

            <p></p>
        `
    },

    {
        id: 'post-2',
        type: 'latest',
        featured: true,
        title: "Bonus order for FY 2025-26",
        date: "30.10.2026",
        category: "da_pay",
        categoryName: "वेतन व बोनस",
        author: "वित्त विभाग (नियम प्रकोष्ठ) जयपुर",
        orderRef: "F.1(45)FD/Rules/2026",
        pdfUrl: "https://finance.rajasthan.gov.in/PDFDOCS/RULES/15250.pdf",
        body: `
            <p>राजस्थान सरकार के वित्त विभाग द्वारा जारी वित्तीय वर्ष 2025-26 के तदर्थ (ad-hoc) बोनस आदेश</p>

            <h4></h4>
            <ul>
                <li><strong>बोनस की घोषणा और राशि: वित्तीय वर्ष 2025-26 के लिए राज्य सरकार के कर्मचारियों को 30 दिनों के संबल (emoluments) के बराबर तदर्थ बोनस प्रदान किया जाएगा।</li>
                <li><strong>वेतन एवं डीए की गणना दर:</strong> समर्पण अवकाश का भुगतान उस माह के मूल वेतन (Basic Pay) तथा उस समय लागू महंगाई भत्ते (DA) की दर के आधार पर किया जाएगा, जिस माह में समर्पण आदेश जारी किया गया है।</li>
                <li><strong>पात्रता की शर्तें: जो कर्मचारी 31-03-2026 को सेवा में थे और 1 अप्रैल 2026 को भी निरंतर सेवा में हैं, तथा जो पे मैट्रिक्स लेवल एल-12 या उससे कम (या 2008 के नियमों के तहत 4800 रुपये या उससे कम के ग्रेड पे) में वेतन ले रहे हैं, वे इसके पात्र हैं (इसमें राज्य सेवा के अधिकारी शामिल नहीं हैं)।</li>
                <li><strong>सेवा अवधि और भुगतान: पात्र कर्मचारियों के लिए वर्ष 2025-26 के दौरान कम से कम छह महीने की निरंतर सेवा आवश्यक है। बारह महीने की सेवा पर पूरे 30 दिनों का बोनस मिलता है, जबकि 6 से 12 महीने की सेवा के लिए आनुपातिक (pro-rata) भुगतान किया जाता है।</li>
                <li><strong>वेतन गणना की सीमा: बोनस की गणना 31 मार्च 2026 के वास्तविक संबल (मूल वेतन, व्यक्तिगत वेतन, प्रतिनियुक्ति और महंगाई भत्ता) के आधार पर की जाएगी, जिसमें अधिकतम वेतन की गणना हेतु सीमा 7,000/- रुपये प्रति माह तय की गई है।</li>
                <li><strong>अपात्र श्रेणियां: अंशकालिक, दैनिक वेतन भोगी, संविदा कर्मचारी, परिवीक्षाधीन प्रशिक्षार्थी (probationer trainee), तथा 31 मार्च 2026 या उससे पहले सेवानिवृत्त होने वाले, इस्तीफा देने वाले या सेवा में मृत कर्मचारी इस बोनस के पात्र नहीं हैं।</li>
                <li><strong>अधिक जानकारी के लिए क्रपया PDF डाउनलोड करें</strong></li>
            </ul>

            <p></p>
        `
    },

    // 👇 📝 नई पोस्ट जोड़ने के लिए इसके ठीक नीचे कॉमा (,) लगाकर नया ऑब्जेक्ट जोड़ें।
    // ऑटो-सॉर्टिंग के कारण नई दिनांक वाली पोस्ट वेबसाइट पर अपने आप सबसे ऊपर (Top) दिखेगी!
];

// =========================================================================
// ⚙️ पोस्ट सॉर्टिंग व्यवस्था (Auto-Sort Settings)
// =========================================================================
// 'newest_date' = दिनांक (Date) के आधार पर नई पोस्ट अपने आप सबसे ऊपर दिखेगी (Recommended)
// 'last_added_first' = जो पोस्ट app.js में सबसे लास्ट में जोड़ी जाएगी, वो सबसे ऊपर दिखेगी
const POST_SORT_MODE = 'newest_date';

// दिनांक पार्स करने का हेल्पर (DD.MM.YYYY)
function parsePostDate(dateStr) {
    if (!dateStr) return 0;
    const parts = dateStr.trim().split('.');
    if (parts.length === 3) {
        const day = parseInt(parts[0], 10);
        const month = parseInt(parts[1], 10) - 1;
        const year = parseInt(parts[2], 10);
        return new Date(year, month, day).getTime();
    }
    return new Date(dateStr).getTime() || 0;
}

// पोस्ट्स को लोड व ऑटो-सॉर्ट करने का फंक्शन
function getPreparedPosts() {
    if (POST_SORT_MODE === 'last_added_first') {
        // जो लास्ट में लिखा गया है वो सबसे ऊपर दिखेगा
        return [...portalPosts].reverse();
    }

    // डिफ़ॉल्ट: नवीनतम दिनांक (Newest Date) वाली पोस्ट अपने आप सबसे ऊपर
    // अगर दो पोस्ट्स की दिनांक समान है, तो जो नीचे/लास्ट में लिखी गई है वो ऊपर दिखेगी
    return [...portalPosts].map((post, idx) => ({ ...post, _originalIndex: idx }))
        .sort((a, b) => {
            const timeA = parsePostDate(a.date);
            const timeB = parsePostDate(b.date);
            if (timeB !== timeA) {
                return timeB - timeA; // बड़ी/नई तारीख पहले
            }
            return b._originalIndex - a._originalIndex; // बाद में जोड़ी गई पहले
        });
}

// App State: 2 Full Detailed Posts Per Page as requested
const postsPerPage = 2;
let postsList = [];
let currentPostTab = 'all'; // 'all' | 'latest' | 'older'
let currentPostCategory = 'all';
let postSearchQuery = '';
let currentPostPage = 1;
let activeReadingPost = null;

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
    // Clear old localStorage if present to ensure app.js changes take effect immediately
    try {
        localStorage.removeItem('raj_portal_posts');
    } catch (e) { }

    postsList = getPreparedPosts();
    setupEventListeners();
    updateLiveDate();
    renderCentralSidebars(); // Auto-render Centralized Sidebars on all pages (Index, CCL, Post, etc.)
    renderPostsFeed();
    initVisitorCounter();
});

// Setup Event Listeners
function setupEventListeners() {
    // Mobile navigation toggle
    const mobileBtn = document.getElementById('mobile-menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    if (mobileBtn && navMenu) {
        mobileBtn.addEventListener('click', () => {
            navMenu.classList.toggle('show');
        });
    }

    // Top Header Search Bar -> Syncs with Posts Search
    const headerInput = document.getElementById('header-search-input');
    const headerBtn = document.getElementById('header-search-btn');
    if (headerInput && headerBtn) {
        const triggerSearch = () => {
            const query = headerInput.value.trim();
            if (query) {
                const postSearch = document.getElementById('post-search-input');
                if (postSearch) {
                    postSearch.value = query;
                    postSearchQuery = query;
                    currentPostPage = 1;
                    renderPostsFeed();
                    const clearBtn = document.getElementById('clear-post-search-btn');
                    if (clearBtn) clearBtn.style.display = 'block';
                    postSearch.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }
        };
        headerBtn.addEventListener('click', triggerSearch);
        headerInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') triggerSearch();
        });
    }

    // Close modals on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.querySelectorAll('.modal-backdrop').forEach(modal => {
                modal.style.display = 'none';
            });
            document.body.style.overflow = '';
        }
    });

    // Close on backdrop click
    document.querySelectorAll('.modal-backdrop').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal(modal.id);
            }
        });
    });
}

// Live date badge in header
function updateLiveDate() {
    const badge = document.getElementById('live-date');
    if (!badge) return;
    const now = new Date();
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const dateStr = now.toLocaleDateString('hi-IN', options);
    badge.textContent = dateStr || '30 अक्टूबर 2026';
}

// =========================================================================
// Centralized Sidebars Renderer (Ultra Fast, Zero Lag, Updates All Pages)
// =========================================================================
function renderCentralSidebars() {
    // 1. बायाँ साइडबार: Important Links
    const impEl = document.getElementById('latest-updates-list') || document.querySelector('#card-latest-updates .link-list');
    if (impEl && Array.isArray(SIDEBAR_IMPORTANT_LINKS) && SIDEBAR_IMPORTANT_LINKS.length > 0) {
        impEl.innerHTML = SIDEBAR_IMPORTANT_LINKS.map(item => `
            <li class="${item.isHighlight ? 'highlight-item' : ''}">
                <a href="${item.url}" ${item.external ? 'target="_blank" rel="noopener noreferrer"' : ''}>
                    <i class="fa-solid fa-angles-right"></i>
                    <span>${item.isHighlight ? `<strong>${item.title}</strong>` : item.title}</span>
                </a>
            </li>
        `).join('');
    }

    // 2. बायाँ साइडबार: Employee Helpline
    const helpEl = document.getElementById('employee-helpline-list') || document.querySelector('#card-latest-formates .link-list');
    if (helpEl && Array.isArray(SIDEBAR_HELPLINE_LINKS) && SIDEBAR_HELPLINE_LINKS.length > 0) {
        helpEl.innerHTML = SIDEBAR_HELPLINE_LINKS.map(item => `
            <li>
                <a href="${item.url}" ${item.external ? 'target="_blank" rel="noopener noreferrer"' : ''}>
                    <i class="fa-solid fa-angles-right"></i>
                    <span>${item.title}</span>
                </a>
            </li>
        `).join('');
    }

    // 3. दायाँ साइडबार: Download Form's
    const formsEl = document.getElementById('download-forms-list') || document.querySelector('#card-download-forms .link-list');
    if (formsEl && Array.isArray(SIDEBAR_DOWNLOAD_FORMS) && SIDEBAR_DOWNLOAD_FORMS.length > 0) {
        formsEl.innerHTML = SIDEBAR_DOWNLOAD_FORMS.map(item => `
            <li>
                <a href="${item.url}" ${item.external ? 'target="_blank" rel="noopener noreferrer"' : ''}>
                    <i class="fa-solid fa-angles-right"></i>
                    <span>${item.title}</span>
                </a>
            </li>
        `).join('');
    }
}

// =========================================================================
// URL Helper for Posts (Direct Post Page URL for SEO & Sharing)
// =========================================================================
function getPostUrl(post) {
    if (!post) return 'index.html';
    if (post.customPageUrl) {
        return post.customPageUrl;
    }
    return `post.html?id=${encodeURIComponent(post.id)}`;
}

// Render the Posts Feed with Full Inline 200-300+ Words Content & Pagination (2 Posts Per Page)
function renderPostsFeed() {
    const container = document.getElementById('posts-container');
    const badge = document.getElementById('posts-count-badge');
    const showingText = document.getElementById('showing-posts-text');
    const prevBtn = document.getElementById('btn-newer-posts');
    const nextBtn = document.getElementById('btn-older-posts');
    const pageNumbersContainer = document.getElementById('posts-page-numbers');

    if (!container) return;

    // Filter posts
    const filtered = postsList.filter(item => {
        // Tab filter: 'all', 'latest', 'older'
        const matchesTab = (currentPostTab === 'all') || (item.type === currentPostTab);

        // Category filter (da_pay also covers Finance)
        const matchesCategory = (currentPostCategory === 'all') ||
            (item.category === currentPostCategory) ||
            (currentPostCategory === 'da_pay' && (item.category === 'Finance' || item.category === 'da_pay'));

        // Search query filter
        const matchesSearch = !postSearchQuery ||
            item.title.toLowerCase().includes(postSearchQuery.toLowerCase()) ||
            (item.body && item.body.toLowerCase().includes(postSearchQuery.toLowerCase())) ||
            (item.orderRef && item.orderRef.toLowerCase().includes(postSearchQuery.toLowerCase())) ||
            (item.categoryName && item.categoryName.toLowerCase().includes(postSearchQuery.toLowerCase())) ||
            item.date.includes(postSearchQuery);

        return matchesTab && matchesCategory && matchesSearch;
    });

    // Update count badge
    if (badge) {
        badge.textContent = `कुल: ${filtered.length} पोस्ट`;
    }

    // Handle empty state
    if (filtered.length === 0) {
        container.innerHTML = `
            <div class="posts-empty-state">
                <i class="fa-solid fa-folder-open"></i>
                <h3>कोई पोस्ट नहीं मिली</h3>
                <p>आपके द्वारा खोजे गए शब्द या श्रेणी में कोई परिणाम उपलब्ध नहीं है। कृपया दूसरा शब्द खोजें अथवा फ़िल्टर रीसेट करें।</p>
                <button class="btn-primary" onclick="resetAllPostFilters()">
                    <i class="fa-solid fa-rotate-left"></i> फ़िल्टर रीसेट करें (Show All)
                </button>
            </div>
        `;
        if (showingText) showingText.textContent = `Showing 0 of 0 posts`;
        if (prevBtn) prevBtn.disabled = true;
        if (nextBtn) nextBtn.disabled = true;
        if (pageNumbersContainer) pageNumbersContainer.innerHTML = '';
        return;
    }

    // Pagination calculations (2 Full Posts Per Page)
    const totalPages = Math.ceil(filtered.length / postsPerPage) || 1;
    if (currentPostPage > totalPages) currentPostPage = totalPages;
    if (currentPostPage < 1) currentPostPage = 1;

    const startIndex = (currentPostPage - 1) * postsPerPage;
    const endIndex = Math.min(startIndex + postsPerPage, filtered.length);
    const pagePosts = filtered.slice(startIndex, endIndex);

    if (showingText) {
        showingText.textContent = `Showing ${startIndex + 1} to ${endIndex} of ${filtered.length} posts (पेज ${currentPostPage}/${totalPages})`;
    }

    // Update Pagination Prev/Next buttons
    if (prevBtn) prevBtn.disabled = (currentPostPage <= 1);
    if (nextBtn) nextBtn.disabled = (currentPostPage >= totalPages);

    // Render Page Numbers
    if (pageNumbersContainer) {
        let pagesHtml = '';
        for (let i = 1; i <= totalPages; i++) {
            pagesHtml += `
                <button class="pg-btn ${i === currentPostPage ? 'active' : ''}" onclick="goToPostPage(${i})">
                    ${i}
                </button>
            `;
        }
        pageNumbersContainer.innerHTML = pagesHtml;
    }

    // Render Full Post Cards (Full 200-300 Words Content Right on Page)
    container.innerHTML = pagePosts.map((post, idx) => {
        const isLatest = (post.type === 'latest');
        const isFeatured = post.featured && currentPostPage === 1 && idx === 0 && currentPostTab !== 'older';
        const highlightedTitle = highlightKeyword(post.title, postSearchQuery);
        const highlightedBody = highlightKeyword(post.body, postSearchQuery);
        const pdfFileName = post.pdfUrl ? post.pdfUrl.split('/').pop() : 'official-order.pdf';
        const postUrl = getPostUrl(post);

        return `
            <article class="post-card ${isLatest ? 'type-latest' : 'type-older'} ${isFeatured ? 'featured' : ''}" id="${post.id}">
                ${isFeatured ? `
                    <div class="featured-ribbon">
                        <i class="fa-solid fa-fire"></i> प्रमुख अपडेट (Featured)
                    </div>
                ` : ''}

                <!-- Post Top Meta Header -->
                <div class="post-card-top">
                    <div class="post-meta-tags">
                        <span class="category-tag tag-${post.category || 'default'}">
                            <i class="fa-solid fa-tag"></i> ${post.categoryName || getCategoryLabel(post.category)}
                        </span>
                        <span class="post-date">
                            <i class="fa-regular fa-calendar-days"></i> ${post.date}
                        </span>
                        ${post.author ? `
                            <span class="post-author d-none-mobile">
                                <i class="fa-solid fa-building-columns"></i> ${post.author}
                            </span>
                        ` : ''}
                    </div>

                    <div class="post-badge-type ${isLatest ? 'badge-type-latest' : 'badge-type-older'}">
                        ${isLatest ? '<i class="fa-solid fa-bolt"></i> नवीनतम आदेश' : '<i class="fa-solid fa-clock-rotate-left"></i> पुरानी पोस्ट'}
                    </div>
                </div>

                <!-- Post Title (Direct Page Link for SEO & Search Robots) -->
                <h2 class="post-title">
                    <a href="${postUrl}" class="post-title-link" title="पूरा आदेश अलग पेज पर पढ़ें">
                        ${highlightedTitle}
                    </a>
                </h2>

                ${post.orderRef ? `
                    <div class="post-ref-tag">
                        <i class="fa-solid fa-shield-halved"></i> <span>संदर्भ / क्रमांक: <strong>${post.orderRef}</strong></span>
                    </div>
                ` : ''}

                <!-- Full Post Body (200-300+ Words Inline) -->
                <div class="post-full-body">
                    ${highlightedBody}
                </div>

                <!-- Inline Official PDF Download Box -->
                <div class="post-inline-download-box">
                    <div class="download-box-info">
                        <i class="fa-solid fa-file-pdf"></i>
                        <div>
                            <h4>आधिकारिक आदेश / परिपत्र प्रतिलिपि</h4>
                            <p>क्लिक करके सीधे आधिकारिक प्रतिलिपि डाउनलोड करें</p>
                        </div>
                    </div>
                    <button class="btn-primary" onclick="downloadPostPdf('${post.id}')">
                        <i class="fa-solid fa-download"></i> PDF डाउनलोड करें
                    </button>
                </div>

                <!-- Post Card Bottom Actions Bar -->
                <div class="post-card-bottom">
                    <div class="post-meta-footer">
                        <span><i class="fa-regular fa-calendar-check"></i> दिनांक: <strong>${post.date}</strong></span>
                        ${post.author ? `<span><i class="fa-solid fa-landmark"></i> <strong>${post.author}</strong></span>` : ''}
                    </div>

                    <div class="post-actions-right">
                        <a href="${postUrl}" class="btn-action-sm btn-view-page" title="इस आदेश का अलग वेबपेज खोलें">
                            <i class="fa-solid fa-arrow-up-right-from-square"></i> <span>डायरेक्ट लिंक</span>
                        </a>
                        <button class="btn-action-sm btn-whatsapp" onclick="sharePost('${post.id}')" title="WhatsApp पर शेयर करें">
                            <i class="fa-brands fa-whatsapp text-success"></i> <span>WhatsApp शेयर</span>
                        </button>
                        <button class="btn-action-sm btn-print" onclick="printSinglePost('${post.id}')" title="इस पोस्ट का प्रिंट लें">
                            <i class="fa-solid fa-print"></i> <span>प्रिंट करें</span>
                        </button>
                        <button class="btn-action-sm btn-pdf" onclick="downloadPostPdf('${post.id}')" title="PDF आदेश डाउनलोड करें">
                            <i class="fa-solid fa-file-pdf text-danger"></i> <span>PDF फाइल</span>
                        </button>
                    </div>
                </div>
            </article>
        `;
    }).join('');
}

// Category Helper
function getCategoryLabel(cat) {
    switch (cat) {
        case 'da_pay':
        case 'Finance': return 'वेतन व DA';
        case 'rules': return 'सेवा नियम (RSR)';
        case 'schemes': return 'कल्याणकारी योजनाएं';
        case 'general': return 'सामान्य परिपत्र';
        default: return 'सामान्य परिपत्र';
    }
}

// Search Highlight
function highlightKeyword(text, keyword) {
    if (!text || !keyword) return text;
    try {
        const escaped = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const regex = new RegExp(`(${escaped})`, 'gi');
        return text.replace(regex, '<mark class="highlight-text">$1</mark>');
    } catch (e) {
        return text;
    }
}

// Tab Switcher ('all', 'latest', 'older')
function switchPostTab(tabName, buttonElement) {
    currentPostTab = tabName;
    currentPostPage = 1;

    document.querySelectorAll('.post-nav-tab').forEach(btn => btn.classList.remove('active'));
    if (buttonElement) {
        buttonElement.classList.add('active');
    }

    renderPostsFeed();

    // Scroll smoothly to feed top
    const feedHeader = document.querySelector('.posts-header-card');
    if (feedHeader) {
        feedHeader.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Category Filter Pills
function setPostCategory(category, buttonElement) {
    currentPostCategory = category;
    currentPostPage = 1;

    document.querySelectorAll('.cat-pills-list .pill-btn').forEach(btn => btn.classList.remove('active'));
    if (buttonElement) {
        buttonElement.classList.add('active');
    }

    renderPostsFeed();
}

// Post Search Input Handler
function filterPosts() {
    const input = document.getElementById('post-search-input');
    const clearBtn = document.getElementById('clear-post-search-btn');
    if (!input) return;

    postSearchQuery = input.value.trim();
    if (clearBtn) {
        clearBtn.style.display = postSearchQuery ? 'block' : 'none';
    }

    currentPostPage = 1;
    renderPostsFeed();
}

function clearPostSearch() {
    const input = document.getElementById('post-search-input');
    const clearBtn = document.getElementById('clear-post-search-btn');
    if (input) input.value = '';
    if (clearBtn) clearBtn.style.display = 'none';

    postSearchQuery = '';
    currentPostPage = 1;
    renderPostsFeed();
}

function resetAllPostFilters() {
    currentPostTab = 'all';
    currentPostCategory = 'all';
    postSearchQuery = '';
    currentPostPage = 1;

    const input = document.getElementById('post-search-input');
    if (input) input.value = '';

    const clearBtn = document.getElementById('clear-post-search-btn');
    if (clearBtn) clearBtn.style.display = 'none';

    document.querySelectorAll('.post-nav-tab').forEach(b => b.classList.remove('active'));
    const tabAll = document.getElementById('tab-all');
    if (tabAll) tabAll.classList.add('active');

    document.querySelectorAll('.cat-pills-list .pill-btn').forEach(b => b.classList.remove('active'));
    const firstCat = document.querySelector('.cat-pills-list .pill-btn');
    if (firstCat) firstCat.classList.add('active');

    renderPostsFeed();
}

// Pagination Handlers (Move to next/prev 2 posts)
function prevPostPage() {
    if (currentPostPage > 1) {
        currentPostPage--;
        renderPostsFeed();
        scrollToPostsTop();
    }
}

function nextPostPage() {
    const filtered = getFilteredPosts();
    const totalPages = Math.ceil(filtered.length / postsPerPage) || 1;
    if (currentPostPage < totalPages) {
        currentPostPage++;
        renderPostsFeed();
        scrollToPostsTop();
    }
}

function goToPostPage(pageNum) {
    currentPostPage = pageNum;
    renderPostsFeed();
    scrollToPostsTop();
}

function scrollToPostsTop() {
    const el = document.getElementById('center-content');
    if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function getFilteredPosts() {
    return postsList.filter(item => {
        const matchesTab = (currentPostTab === 'all') || (item.type === currentPostTab);
        const matchesCategory = (currentPostCategory === 'all') || (item.category === currentPostCategory);
        const matchesSearch = !postSearchQuery ||
            item.title.toLowerCase().includes(postSearchQuery.toLowerCase()) ||
            (item.body && item.body.toLowerCase().includes(postSearchQuery.toLowerCase())) ||
            (item.orderRef && item.orderRef.toLowerCase().includes(postSearchQuery.toLowerCase())) ||
            item.date.includes(postSearchQuery);
        return matchesTab && matchesCategory && matchesSearch;
    });
}

// ================= REAL PDF DOWNLOAD ENGINE =================
/**
 * Direct file downloader function
 * Handles local files (e.g. pdfs/da-hike-order-58.pdf) and external links (Google Drive, Govt sites)
 */
function downloadFile(fileUrl, preferredFileName) {
    if (!fileUrl) {
        fileUrl = 'pdfs/sample-order.pdf';
    }

    showToast('PDF डाउनलोड शुरू हो रहा है...', 'fa-file-arrow-down');

    // If external link (Google Drive / Website), open in new tab
    if (fileUrl.startsWith('http://') || fileUrl.startsWith('https://')) {
        setTimeout(() => {
            window.open(fileUrl, '_blank');
            showToast('PDF दस्तावेज़ नए टैब में खोला गया!', 'fa-arrow-up-right-from-square');
        }, 400);
        return;
    }

    // Local file download using temporary anchor tag
    const fileName = preferredFileName || fileUrl.split('/').pop() || 'official-order.pdf';
    const link = document.createElement('a');
    link.href = fileUrl;
    link.setAttribute('download', fileName);
    link.setAttribute('target', '_blank');
    link.style.display = 'none';

    document.body.appendChild(link);
    link.click();

    setTimeout(() => {
        document.body.removeChild(link);
        showToast(`फ़ाइल डाउनलोड पूर्ण: ${fileName}`, 'fa-circle-check');
    }, 600);
}

// Download PDF directly from Post Card button
function downloadPostPdf(postId) {
    const post = postsList.find(p => p.id === postId);
    if (!post) return;

    const fileUrl = post.pdfUrl || 'pdfs/sample-order.pdf';
    const fileName = (post.title ? post.title.replace(/[^\w\s\u0900-\u097F-]/gi, '').substring(0, 40).trim() : 'order') + '.pdf';
    downloadFile(fileUrl, fileName);
}

// Print a Single Post directly
function printSinglePost(postId) {
    const post = postsList.find(p => p.id === postId);
    if (!post) return;
    openPostModal(postId);
    setTimeout(() => {
        window.print();
    }, 400);
}

// Share functions
function sharePost(postId) {
    const post = postsList.find(p => p.id === postId);
    if (!post) return;

    // Direct permanent URL for SEO & Social Sharing
    const baseUrl = window.location.origin + window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/') + 1);
    const postRelative = (post.customPageUrl) ? post.customPageUrl : ('post.html?id=' + encodeURIComponent(post.id));
    const shareUrl = baseUrl + postRelative;
    const shareText = `📌 *${post.title}*\nदिनांक: ${post.date}\n\nपूरा आदेश व विवरण पढ़ें:\n${shareUrl}`;

    if (navigator.clipboard) {
        navigator.clipboard.writeText(shareUrl).then(() => {
            showToast('पोस्ट डायरेक्ट लिंक कॉपी हो गया!', 'fa-clipboard-check');
        }).catch(() => {
            // fallback
        });
    }

    // WhatsApp Share
    const waUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`;
    window.open(waUrl, '_blank');
}

// Full Post Reader Modal (Backup & Printing)
function openPostModal(postId) {
    const post = postsList.find(p => p.id === postId);
    if (!post) return;

    activeReadingPost = post;

    const catEl = document.getElementById('modal-post-category');
    const titleEl = document.getElementById('modal-post-title');
    const dateEl = document.getElementById('modal-post-date');
    const authorEl = document.getElementById('modal-post-author');
    const refEl = document.getElementById('modal-post-ref');
    const bodyEl = document.getElementById('modal-post-body');
    const pdfNameEl = document.getElementById('modal-post-pdf-name');

    if (catEl) catEl.textContent = post.categoryName || getCategoryLabel(post.category);
    if (titleEl) titleEl.textContent = post.title;
    if (dateEl) dateEl.textContent = post.date;
    if (authorEl) authorEl.textContent = post.author || 'राजकीय आदेश डेस्क';
    if (refEl) refEl.textContent = post.orderRef || 'सक्षम स्तर से अनुमोदित';

    if (pdfNameEl) {
        pdfNameEl.innerHTML = `आधिकारिक आदेश प्रतिलिपि (PDF)`;
    }

    if (bodyEl) {
        bodyEl.innerHTML = post.body;
    }

    openModal('post-reader-modal');
}

function downloadCurrentPostPdf() {
    if (activeReadingPost) {
        downloadPostPdf(activeReadingPost.id);
    } else {
        downloadFile('pdfs/sample-order.pdf', 'official-order.pdf');
    }
}

function shareCurrentPost() {
    if (activeReadingPost) {
        sharePost(activeReadingPost.id);
    }
}

// Modal open/close helpers
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }
}

// Toast notification helper
function showToast(message, iconClass = 'fa-circle-info') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="fa-solid ${iconClass}"></i> <span>${message}</span>`;

    container.appendChild(toast);

    setTimeout(() => {
        toast.style.transition = 'all 0.3s ease';
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(100%)';
        setTimeout(() => toast.remove(), 300);
    }, 3200);
}

// ================= VISITOR COUNTER =================
function initVisitorCounter() {
    const totalEl = document.getElementById('total-visitor-counter');
    const todayEl = document.getElementById('today-visitor-count');
    const onlineEl = document.getElementById('online-visitor-count');

    if (!totalEl) return;

    // Realistic Base Count: 1,48,930
    const BASE_VISITORS = 148930;
    const now = new Date();
    const todayStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;

    let storedTotal = parseInt(localStorage.getItem('rajkaj_total_visitors'), 10);
    if (!storedTotal || isNaN(storedTotal) || storedTotal < BASE_VISITORS) {
        storedTotal = BASE_VISITORS;
    }

    const lastVisitDate = localStorage.getItem('rajkaj_visitor_date');
    let storedToday = parseInt(localStorage.getItem('rajkaj_today_visitors'), 10);

    if (lastVisitDate !== todayStr || !storedToday || isNaN(storedToday)) {
        // New day start with a realistic starting count for today
        storedToday = Math.floor(650 + Math.random() * 150);
        localStorage.setItem('rajkaj_visitor_date', todayStr);
    }

    // Increment once per browser session so refresh doesn't unnaturally inflate
    const sessionKey = 'rajkaj_visited_session';
    if (!sessionStorage.getItem(sessionKey)) {
        storedTotal += 1;
        storedToday += 1;
        localStorage.setItem('rajkaj_total_visitors', storedTotal.toString());
        localStorage.setItem('rajkaj_today_visitors', storedToday.toString());
        sessionStorage.setItem(sessionKey, '1');
    }

    // Format total into 7 padded digital boxes (e.g. 0148931)
    const formattedStr = storedTotal.toString().padStart(7, '0');
    totalEl.innerHTML = formattedStr
        .split('')
        .map(digit => `<span class="counter-digit">${digit}</span>`)
        .join('');

    if (todayEl) {
        todayEl.textContent = storedToday.toLocaleString('en-IN');
    }

    if (onlineEl) {
        const onlineCount = Math.floor(14 + Math.random() * 15);
        onlineEl.textContent = onlineCount.toString();
    }
}
