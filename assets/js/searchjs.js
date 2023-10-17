const data = [
    { 
      name: "Wine",
      keywords: ["Pet-Nat", "Petillant Naturel", "natural sparkling wine", "sparkling wine", "bubbly", "methode ancestrale",
      "Qvevri", "Kvevri", "amphora wine", "clay pot wine", "traditional Georgian wine", "orange wine", "skin-contact wine",
      "natural wine", "minimal intervention wine", "low-intervention wine", "sustainable wine", "organic wine", "biodynamic wine",
      "natural fermentation wine", "wild yeast wine", "native yeast wine", "fermented in amphora", "qvevri-aged wine", "artisanal wine",
      "handcrafted wine", "artisan wine", "small-batch wine", "craft wine", "limited production wine", "unique wine",
      "experimental wine", "indigenous grape wine", "rare grape wine", "uncommon grape wine", "alternative grape wine", 
      "unconventional grape wine", "native varietal wine", "unusual grape wine", "rare varietal wine", "exotic grape wine",
      "uncommon varietal wine", "rare wine", "hard-to-find wine", "exclusive wine", "special edition wine", "collectible wine",
      "vintage wine", "reserve wine", "estate wine", "single vineyard wine", "old vine wine", "aged wine", "cellared wine",
      "library wine", "fine wine", "premium wine", "luxury wine", "high-end wine", "boutique wine", "cult wine", "terroir-driven wine",
      "vineyard-specific wine", "terroir expression wine", "grand cru wine", "premier cru wine", "cru bourgeois wine", "single estate wine",
      "single origin wine", "single barrel wine", "single lot wine", "vigneron wine", "vintner wine", "oenologist wine", "viticulturist wine",
      "cellar master wine", "winemaking wine", "winemaker wine", "winery wine", "wine region wine", "appellation wine", "wine blend",
      "wine varietal blend", "wine variety blend", "grape blend", "wine cuvee", "blend of grapes", "red blend", "white blend",
      "rose blend", "blended wine", "Mtsvane", "Kisi", "Luna", "Saperavi", "Mukuzani", "Tsinandali", "Kindzmarauli", "Khvanchkara",
      "Akhasheni", "Napareuli", "Tbilvino", "Shumi", "Telavi Wine Cellar", "Kakhetian Royal", "Pheasant's Tears", "Alaverdi Monastery",
      "Kakheti wine", "Kartli wine", "Racha wine",  "Saperavi-based wine", "Kisi wine", "Mtsvane wine", "Rkatsiteli wine",
      "Georgian wine", "wine from Georgia", "Georgian indigenous grape wine", "Georgian varietal wine", "Georgian red wine", "Georgian white wine",
      "Georgian rose wine", "Georgian semi-sweet wine", "Georgian dry wine", "Georgian semi-dry wine", "Georgian sweet wine", "Georgian semi-sparkling wine",
      "Georgian semi-dulce wine", "Georgian traditional wine", "Georgian classic wine", "Georgian modern wine", "Georgian wine style", "Georgian wine heritage",
      "wine and food pairing", "wine tasting notes", "wine characteristics", "wine flavor profile", "wine aroma", "wine bouquet", "wine mouthfeel",
      "wine finish", "wine complexity", "wine structure", "wine body", "wine acidity", "wine tannins", "wine fruitiness", "wine oakiness", "wine earthiness",
      "wine spiciness", "wine herbaceousness", "wine minerality", "wine sweetness", "wine dryness", "wine balance", "wine elegance", "wine richness",
      "wine smoothness", "wine depth", "wine freshness", "wine crispness", "wine brightness", "wine intensity", "wine longevity", "wine aging potential",
      "wine vintage", "wine aging", "wine fermentation", "wine production", "wine regions", "wine countries", "wine varieties", "wine appellations",
      "wine awards", "wine competitions", "wine culture", "wine traditions", "wine history", "winery tours", "wine tours", "winery","vineyard tours","berika vineyards", "visit berika", "visit ana","harvest","rtveli","farmtotable","winetasting","wine tourism","wine tasting event","berikawinery","berika winery","winetasting","wine","wnie"],
      url: "wine.html"
    },
    { 
      name: "Visits",
      keywords: ["vineyard visit", "winery visit", "wine tour", "visit vineyard", "winery experience",
      "wine exploration", "winery adventure", "grapevine tour", "cellar tour", "tasting room visit",
      "wine discovery", "vineyard tour and tasting", "wine country visit", "wine and dine tour",
      "vino tour", "oenology tour", "oenotourism", "oenophile visit", "sommelier-led tour",
      "wine estate visit", "wine trail tour", "viticulture tour", "wine culture experience",
      "culinary and wine tour", "terroir exploration", "vintage tasting", "wine enthusiasts tour",
      "educational wine tour", "wine and food pairing tour", "harvest season tour",
      "barrel tasting", "cave tour", "wine workshop", "oenology workshop", "winemaking tour",
      "wine blending experience", "wine and cheese pairing", "tasting menu", "oenology class",
      "wine tasting event", "wine tasting workshop", "vineyard excursion", "oenology seminar",
      "wine appreciation", "oenological journey", "tasting experience", "wine sampling",
      "vintage wine tasting", "reserve wine tasting", "aged wine tasting", "boutique winery tour",
      "small-batch winery visit", "wine flight tasting", "library wine tasting", "vertical tasting",
      "horizontal tasting", "wine glass tasting", "private cellar tour", "group wine tour",
      "winery behind-the-scenes", "wine making process tour", "winery production tour", "wine culture tour",
      "wine and history tour", "wine and art tour", "sustainable vineyard tour", "organic winery visit",
      "biodynamic vineyard tour", "historic winery tour", "architecture and wine tour", "scenic vineyard tour",
      "romantic wine tour", "sunset vineyard tour", "dusk wine tasting", "moonlit vineyard visit",
      "weekend wine tour", "summer wine tour", "autumn wine tour", "winter wine tour", "spring wine tour",
      "wine and jazz tour", "wine and live music tour", "wine and art pairing", "wine and nature tour",
      "winery visit with local guide", "wine trail adventure", "countryside wine tour", "urban winery visit",
      "coastal vineyard tour", "mountain winery visit", "vineyard picnic tour", "wine and spa tour",
      "wine and yoga tour", "wine and hiking tour", "wine and cycling tour", "wine and hot air balloon tour",
      "wine and horseback riding tour", "wine and cooking class", "wine and local cuisine tour",
      "wine and cultural tour", "wine and wellness tour", "winery hopping", "wine region exploration",
      "wine road trip", "wine route journey", "custom wine tour", "wine aficionado tour","rtveli"],
      url: "wineandlunch.html"
    },
  ];
function searchAndRedirect() {
    const queryWine = document.getElementById('searchInputWine').value.toLowerCase();
    const queryVisit = document.getElementById('searchInputVisit').value.toLowerCase();
  
    if (queryWine.length > 0) {
      redirectToWinePage();
    } else if (queryVisit.length > 0) {
      redirectToVisitPage();
    } else {
      displayError();
    }
  }
  
  function redirectToWinePage() {
    window.location.href = "wine.html";
  }
  
  function redirectToVisitPage() {
    window.location.href = "visit.html";
  }
  
  function displayError() {
    alert('Please enter a search query.');
  }