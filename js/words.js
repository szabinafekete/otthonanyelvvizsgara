const words=[
    { "theme":"bildbeschreibung",
    "de":"begründen",
    "hu":"indokol",
    "other":"begründet, begründete, hat begründet",
    },
    { "theme":"bildbeschreibung",
    "de":"die Begründung",
    "hu":"indoklás",
    "other":"Pl. Begründungen  "
    },
    { "theme":"bildbeschreibung",
    "de":"sich entscheiden für+A ",
    "hu":"dönteni valami mellett",
    "other":"entscheidet, entschied, hat entschieden",
    },
    { "theme":"bildbeschreibung",
    "de":"äußern",
    "hu":"kifejez, kinyilvánít",
    "other":"äußert, äußerte, hat geäußert",
    },
    { "theme":"bildbeschreibung",
    "de":"die Meinung ",
    "hu":"vélemény",
    "other":"+über /zum Thema Pl. Meinungen"
    },
    { "theme":"bildbeschreibung",
    "de":"anstellen",
    "hu":"tesz",
    "other":"stellt an, stellte an, hat angestellt"
    },
    { "theme":"bildbeschreibung",
    "de":"die Vermutung",
    "hu":"feltételezés, vélelem",
    "other":"Pl. Vermutungen"
    },
    { "theme":"bildbeschreibung",
    "de":"der Hintergrund",
    "hu":"háttér",
    "other":"Pl. Hintergründe"
    },
    { "theme":"bildbeschreibung",
    "de":"der Vordergrund",
    "hu":"előtér",
    "other":"Pl. Vordergründe"
    },
    { "theme":"bildbeschreibung",
    "de":"die Mitte",
    "hu":"közép",
    "other":"Pl. Mitten"
    },
    { "theme":"bildbeschreibung",
    "de":"die Mitte",
    "hu":"közép",
    "other":"Pl. Mitten"
    },
    { "theme":"bildbeschreibung",
    "de":"links",
    "hu":"bal",
    "other":""
    },
    { "theme":"bildbeschreibung",
    "de":"rechts",
    "hu":"jobb",
    "other":""
    },
    { "theme":"bildbeschreibung",
    "de":"die Seite",
    "hu":"joldal",
    "other":"Pl. Seiten"
    },
    { "theme":"bildbeschreibung",
    "de":"außerdem",
    "hu":"ezen kívül",
    "other":""
    },
    { "theme":"bildbeschreibung",
    "de":"des Weiteren",
    "hu":"továbbá",
    "other":""
    },
    { "theme":"bildbeschreibung",
    "de":"wahrscheinlich, vermutlich, möglicherweise", 
    "hu":"valószínűleg",
    "other":""
    },
    { "theme":"bildbeschreibung",
    "de":"scheinen +zu + Inf.", 
    "hu":"tűnik (valamilyennek)",
    "other":"scheint, schien, hat geschienen"
    },
    { "theme":"bildbeschreibung",
    "de":"es geht um (+ A)", 
    "hu":"szó van valamiről",
    "other":""
    },
    { "theme":"bildbeschreibung",
    "de":"sich fühlen", 
    "hu":"érzi magát (valamilyennek)",
    "other":"fühlt, fühlte, hat gefühlt"
    }, 
    { "theme":"bildbeschreibung",
    "de":"betroffen +von+D", 
    "hu":"köze van hozzá, érintett (valami által)",
    "other":"z.B. von diesem Thema"
    }, 
    ]
    document.getElementById('words').innerHTML = words.map(o=>`<tr><td>${o.de}<td>${o.other}</td></td><td>${o.hu}</td></tr>`).join('')