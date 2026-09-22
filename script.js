// Demo information only. Replace this later with verified listings from a backend or API.
const schools=[
 {name:"শিশু বিকাশ সহায়তা কেন্দ্র",location:"dhaka",place:"মিরপুর, ঢাকা",support:"বিশেষ শিক্ষা, speech support",age:"৪–১২ বছর",contact:"01XXXXXXXXX"},
 {name:"আলোর পথ রিসোর্স সেন্টার",location:"dhaka",place:"ধানমন্ডি, ঢাকা",support:"অভিভাবক সহায়তা, শিক্ষা পরিকল্পনা",age:"৫–১৬ বছর",contact:"01XXXXXXXXX"},
 {name:"সমতা শিশু সহায়তা",location:"chattogram",place:"পাঁচলাইশ, চট্টগ্রাম",support:"Occupational therapy, special education",age:"৩–১৪ বছর",contact:"01XXXXXXXXX"},
 {name:"প্রত্যয় শিক্ষা ও সহায়তা",location:"sylhet",place:"জিন্দাবাজার, সিলেট",support:"শেখার সহায়তা, পরিবার পরামর্শ",age:"৫–১৫ বছর",contact:"01XXXXXXXXX"}
];
const opportunities=[
 {category:"art competition",emoji:"🎨",title:"শিশু ও কিশোর আর্ট প্রতিযোগিতা",text:"নিজের পছন্দের মাধ্যমে অংশ নেওয়ার একটি নমুনা সুযোগ।"},
 {category:"sports competition",emoji:"⚽",title:"Inclusive Sports Day",text:"আনন্দ, অংশগ্রহণ ও দলগত অভিজ্ঞতাকে গুরুত্ব দেওয়া নমুনা আয়োজন।"},
 {category:"design competition",emoji:"👕",title:"T-shirt Design Competition",text:"ডিজাইনে আগ্রহী শিশুদের জন্য একটি নমুনা প্রতিযোগিতা।"},
 {category:"digital art",emoji:"💻",title:"Digital Art Challenge",text:"ডিজিটাল আঁকা বা সৃজনশীল কাজে আগ্রহ থাকলে দেখার মতো নমুনা সুযোগ।"},
 {category:"crafts",emoji:"🧵",title:"Craft Exhibition",text:"হাতে তৈরি কাজ প্রদর্শনের একটি উদাহরণ।"},
 {category:"work",emoji:"💼",title:"Skill-based Internship",text:"বয়স ও প্রস্তুতি উপযোগী সহায়ক কাজের অভিজ্ঞতার নমুনা ধারণা।"},
 {category:"music",emoji:"🎵",title:"Community Music Workshop",text:"সঙ্গীতে আগ্রহ থাকলে অংশ নেওয়ার একটি নমুনা কর্মশালা।"}
];
const schoolList=document.querySelector("#school-list");
function renderSchools(location="all"){
 const filtered=location==="all"?schools:schools.filter(s=>s.location===location);
 schoolList.innerHTML=filtered.map((s,index)=>`<article class="school-card"><span class="tag">Demo Data</span><h3>${s.name}</h3><p>📍 ${s.place}</p><p><strong>সহায়তা:</strong> ${s.support}</p><p><strong>বয়স:</strong> ${s.age}</p><button class="detail-button" data-school="${index}" aria-expanded="false">View Details +</button><div class="school-details" hidden>ডেমো যোগাযোগ: ${s.contact}<br>বাস্তব তথ্য ও ভর্তি প্রক্রিয়া নিজে যাচাই করুন।</div></article>`).join("")||"<p>এই এলাকায় এখনো কোনো ডেমো তালিকা নেই।</p>";
}
const opportunityList=document.querySelector("#opportunity-list");
function renderOpportunities(category="all"){
 const filtered=category==="all"?opportunities:opportunities.filter(item=>item.category.includes(category));
 opportunityList.innerHTML=filtered.map(item=>`<article class="opportunity-card"><span class="opportunity-emoji">${item.emoji}</span><span class="tag">Demo Data</span><h3>${item.title}</h3><p>${item.text}</p><button class="detail-button">আরও জানুন →</button></article>`).join("")||"<p>এই বিভাগে এখনো কোনো ডেমো সুযোগ নেই।</p>";
}
document.querySelector("#location-filter").addEventListener("change",event=>renderSchools(event.target.value));
schoolList.addEventListener("click",event=>{if(!event.target.matches(".detail-button"))return;const details=event.target.nextElementSibling,isOpen=!details.hidden;details.hidden=isOpen;event.target.setAttribute("aria-expanded",String(!isOpen));event.target.textContent=isOpen?"View Details +":"Details বন্ধ করুন −"});
document.querySelectorAll(".filter").forEach(button=>button.addEventListener("click",()=>{document.querySelectorAll(".filter").forEach(item=>item.classList.remove("active"));button.classList.add("active");renderOpportunities(button.dataset.category)}));
document.querySelectorAll(".choice").forEach(button=>button.addEventListener("click",()=>{document.querySelectorAll(".choice").forEach(item=>item.classList.remove("selected"));button.classList.add("selected")}));
document.querySelector("#show-journey").addEventListener("click",()=>{const need=document.querySelector(".choice.selected").dataset.need;const titles={start:"আপনার শুরু করার পথ",support:"সহায়তা খোঁজার পথ",education:"শিক্ষা নিয়ে ভাবার পথ"};document.querySelector("#journey-title").textContent=titles[need];const result=document.querySelector("#journey-result");result.hidden=false;result.scrollIntoView({behavior:"smooth",block:"nearest"})});
document.querySelector(".menu-button").addEventListener("click",event=>{const nav=document.querySelector(".main-nav"),open=nav.classList.toggle("open");event.currentTarget.setAttribute("aria-expanded",String(open))});
document.querySelectorAll(".main-nav a").forEach(link=>link.addEventListener("click",()=>document.querySelector(".main-nav").classList.remove("open")));
document.querySelectorAll(".resource-button").forEach(button=>button.addEventListener("click",()=>button.textContent="শিগগিরই আসছে"));
renderSchools();renderOpportunities();
