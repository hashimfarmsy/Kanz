
// ==================================
// Hashim Pharmacy
// Raw Materials Encyclopedia
// ==================================

const categories = {
  actives: {
    name: "المواد الفعالة",
    materials: [
      "مينوكسيديل",
      "ترانيكساميك أسيد",
      "ألفا أربيوتين",
      "أزيليك أسيد",
      "جلوتاثيون",
      "حمض الهيالورونيك",
      "فيروليك أسيد",
      "ريتينول",
      "ريتينيل بالميتات",
      "ريدينسل",
      "بروكابيل"
    ]
  },

  extracts: {
    name: "المستخلصات الطبيعية",
    materials: [
      "ألوفيرا باودر",
      "مستخلص التوت",
      "مستخلص البابايا",
      "مستخلص القهوة",
      "مستخلص الجريب فروت",
      "مستخلص الخيار",
      "مستخلص الأناناس",
      "مستخلص الماتشا",
      "سنتيلا سيكا",
      "عرق السوس"
    ]
  },

  acids: {
    name: "الأحماض والمقشرات",
    materials: [
      "حمض اللاكتيك",
      "جلايكوليك أسيد",
      "حمض الساليسيليك",
      "كوجيك أسيد",
      "كوجيك بالميتات",
      "حمض الستريك",
      "أزيليك أسيد",
      "فيروليك أسيد"
    ]
  },

  hair: {
    name: "مواد العناية بالشعر",
    materials: [
      "مينوكسيديل",
      "ريدينسل",
      "بروكابيل",
      "كافيين",
      "بيوتين",
      "كيراتين",
      "بروتين القمح",
      "بروتين الحرير"
    ]
  },

  vitamins: {
    name: "الفيتامينات",
    materials: [
      "فيتامين A بالميتات",
      "ريتينول",
      "فيتامين C",
      "فيتامين E",
      "نياسيناميد",
      "بانثينول",
      "بيوتين",
      "أسكوربيل بالميتات",
      "أسكوربيل مغنيسيوم فوسفات"
    ]
  },

  preservatives: {
    name: "المواد الحافظة",
    materials: [
      "فينوكسي إيثانول",
      "بوتاسيوم سوربات",
      "بنزوات الصوديوم",
      "حمض البنزويك"
    ]
  },

  solvents: {
    name: "المذيبات والمرطبات",
    materials: [
      "بروبلين جلايكول",
      "جلسرين",
      "يوريا",
      "بانثينول",
      "لانولين",
      "ماء مقطر",
      "إيثانول 96%"
    ]
  },

  thickeners: {
    name: "المكثفات والمثبتات",
    materials: [
      "كاربوبول",
      "صمغ زانثان",
      "بنتونايت",
      "CMC",
      "PVP K30",
      "فايبر هانس"
    ]
  },

  cleansers: {
    name: "مواد التنظيف",
    materials: [
      "كوكوجلايكوزيد",
      "تكسابون جل",
      "بيتائين",
      "صابون مغربي خام",
      "توين 80"
    ]
  },

  oils: {
    name: "الزيوت والزبدات",
    materials: [
      "زيت روزهيب",
      "سكوالين",
      "زبدة الشيا",
      "زبدة الكاكاو",
      "زيت بارافين",
      "فازلين"
    ]
  },

  waxes: {
    name: "الشموع والمستحلبات",
    materials: [
      "E-Wax",
      "حمض الشمع",
      "شمع البلسم",
      "شمع بارافين",
      "شمع النحل",
      "BTMS 80",
      "GMS",
      "إيمولجين"
    ]
  },

  proteins: {
    name: "البروتينات والسيليكونات",
    materials: [
      "كيراتين",
      "كولاجين",
      "بروتين القمح",
      "بروتين الحرير",
      "سيليكون 350",
      "بولي كوانتاريوم 7"
    ]
  },

  colors: {
    name: "الألوان والأصباغ",
    materials: [
      "ألوان مايكا",
      "ألوان بيجمنت",
      "قليتر",
      "ألوان مائية",
      "مجيك باودر",
      "نيلة مغربية زرقاء",
      "دم الغزال"
    ]
  },

  perfumes: {
    name: "العطور",
    materials: [
      "عطر الفراولة",
      "عطر الفانيليا",
      "عطر التوت",
      "عطر البطيخ",
      "عطر الخوخ",
      "عطر العنب",
      "عطر الشوكولاتة",
      "عطر الرمان",
      "عطر الكرز"
    ]
  },

  tools: {
    name: "المواد والأدوات المساعدة",
    materials: [
      "ورق pH",
      "EDTA",
      "تراي إيثانول أمين",
      "BHT",
      "صوديوم ميتابيسلفيت",
      "زنك أوكسيد",
      "زنك PCA",
      "ألانطوين",
      "كالامين",
      "ريزورسينول",
      "هيدروكينون",
      "تتراسايكلين",
      "فضة",
      "بوريك أسيد",
      "بيكرول",
      "قشور اسكرب"
    ]
  }
};

// عناصر الصفحة
const buttons = document.querySelectorAll(".category-btn");
const searchInput = document.getElementById("searchInput");

// إنشاء مساحة عرض الأقسام
const display = document.createElement("section");
display.id = "materialsDisplay";
display.style.marginTop = "25px";

document.querySelector("main").appendChild(display);

// فتح القسم
function openCategory(categoryId) {
  const category = categories[categoryId];

  if (!category) return;

  display.innerHTML = `
    <h2>${category.name}</h2>
    <div class="materials-grid">
      ${category.materials.map(material => `
        <button class="material-btn">
          ${material}
        </button>
      `).join("")}
    </div>
  `;

  display.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

// تشغيل أزرار الأقسام
buttons.forEach(button => {
  button.addEventListener("click", () => {
    openCategory(button.dataset.category);
    searchInput.value = "";
  });
});

// البحث في جميع المواد
searchInput.addEventListener("input", () => {
  const query = searchInput.value.trim().toLowerCase();

  if (!query) {
    display.innerHTML = "";
    return;
  }

  const results = [];

  Object.entries(categories).forEach(([id, category]) => {
    category.materials.forEach(material => {
      if (material.toLowerCase().includes(query)) {
        results.push({
          material,
          category: category.name,
          id
        });
      }
    });
  });

  if (results.length === 0) {
    display.innerHTML = `
      <p class="no-results">
        لم يتم العثور على المادة المطلوبة.
      </p>
    `;
    return;
  }

  display.innerHTML = `
    <h2>نتائج البحث (${results.length})</h2>

    <div class="materials-grid">
      ${results.map(result => `
        <button class="material-btn"
          data-category="${result.id}">
          ${result.material}
          <small>${result.category}</small>
        </button>
      `).join("")}
    </div>
  `;
});

// فتح القسم من نتيجة البحث
display.addEventListener("click", event => {
  const button = event.target.closest(".material-btn");

  if (!button || !button.dataset.category) return;

  openCategory(button.dataset.category);
  searchInput.value = "";
});

console.log("Hashim Pharmacy loaded successfully");
