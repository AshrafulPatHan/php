## free hosting
- InfinityFree,
- 000webhost,
- AwardSpace,
- FreeHosting


-- --

-- --

এইগুলোর জন্য **পুরো স্পষ্ট সব তথ্য পাওয়া যায় না** সব provider-এর ফ্রি প্লানগুলোর ক্ষেত্রে — কারণ অনেকটা “fair use / স্বার্থ-পর্যবেক্ষণ” আছে, অর্থাৎ তারা ব্যবহার ও পারফরমেন্সের উপর ভিত্তি করে সীমাবদ্ধতা আরোপ করে। তবে আমি যথেষ্ট তথ্য সংগ্রহ করতে পারেছি; এখানে তুলনামূলকভাবে পাওয়া তথ্যগুলি দিচ্ছি:

---

## 🔍 সারসংক্ষেপ Free Plan Limitations (InfinityFree, 000WebHost, AwardSpace, FreeHosting.com)

| Provider            | Storage (Disk Space)                          | Bandwidth / Traffic                                                                    | ডাটাবেস & অন্যান্য ফিচার                                                                                                                         | CPU / RAM / প্রসেসর সীমাবদ্ধতা                                                                                                                                                                               | সার্ভার_suspend / inactivity / সার্ভার কতক্ষণ চলবে / পুনরায় start হওয়ার সময় ইত্যাদি                                                                                                                                                                                                                                                                    |
| ------------------- | --------------------------------------------- | -------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **InfinityFree**    | ≈ **5 GB** ডাটা স্পেস ([InfinityFree][1])     | Unlimited bandwidth ( তবে “fair use” পলিসি আছে ) ([InfinityFree][1])                   | - Free subdomains, MySQL, PHP বিভিন্ন ভার্সন                                                                                                     | RAM / CPU স্পষ্টভাবে নির্ধারিত না; তবে concurrent SQL connections ~ **৯** কি তার কাছাকাছি বলেছে ইউজার কমেন্টে ([InfinityFree Forum][2]) File upload size limit ~ **10 MB** ([InfinityFree Forum][2])         | - যদি দিনে resource limit (দেখুন hits, IO, CPU ব্যবহার) লঙ্ঘন করা হয়, তাহলে **24 ঘণ্টা** জন্য site suspend হতে পারে। ([InfinityFree Forum][3]) <br> - যদি inactivity থাকে (অর্থাৎ visitor বা activity খুব কম হয়), তাদের inactivity policy অনুসারে অ্যাকাউন্ট মুছে দেওয়া হতে পারে বা অপ্রয়োজনে disable করা হতে পারে ([BlackHatWorld][4])                 |
| **000WebHost**      | ~ **300 MB** স্টোরেজ ([Diggity Marketing][5]) | ~ **3 GB / মাস** bandwidth ([Diggity Marketing][5])                                    | - 1 ওয়েবসাইট, 1 MySQL database, cPanel-like interface ([Diggity Marketing][5]) <br> - Email account: কখনও কখনও নেই / সীমিত ([000webhost.llc][6]) | CPU / RAM fractional: যেমন “no more than 25% of one CPU core”, 512 MB RAM limit, 100 active processes limit, etc. ([Hostinger][7])                                                                           | - Free plan **lifetime** as long as use করে যেতে পারো; Suspend হওয়া সম্ভব যদি অনেক বেশি resource ব্যবহার করো <br> - মাঝে মাঝে site “sleep” হয় বা downtime হয় যদি resource limits exceed হয়। <br> - Free প্লানে server কতবার start/stop হয় সপ্তাহে বা দিনে — স্পষ্ট তথ্য পাওয়া যায়নি।                                                                    |
| **AwardSpace**      | **1 GB** ডিস্ক স্পেস ([howinsight.com][8])    | **5 GB / মাস** traffic / bandwidth ([web-hosting.no1reviews.com][9])                   | - 1 ওয়েবসাইট, 1 MySQL database, 1 ইমেইল অ্যাকাউন্ট; Subdomains কিছুটা সীমিত থাকতে পারে ([AwardSpace.com][10])                                    | RAM ও CPU স্পষ্ট সংখ্যা পাওয়া যায়নি; বলা হয় “low CPU and RAM usage” but নির্দিষ্ট মেঘদ্রব নেই ([howinsight.com][8])                                                                                          | - Suspend বা deactivation সম্ভব যদি free plan policy violate করা যায় (উচ্চ ব্যবহার) <br> - Inactivity-based deletion / disable বিষয়ে নির্দিষ্ট সময় নেই স্পষ্টভাবে বলার মতো তথ্য পাওয়া যায়নি <br> - Bandwidth reset প্রতি মাসে হয় ([AwardSpace.com][11])                                                                                                 |
| **FreeHosting.com** | **10 GB** স্টোরেজ ([freehosting.com][12])     | Bandwidth “Unmetered” / “Unlimited” subject to Fair Use Policy ([freehosting.com][12]) | - 1 ওয়েবসাইট, 1 MySQL database, 1 ইমেইল account; custom domain লাগবে (free subdomain নয় হয়তো) ([freehosting.com][12])                            | PHP limits: execution time, memory limit ইত্যাদির উপর কিছু সীমাবদ্ধতা থাকতে পারে (উচ্চ resource ব্যবহার করলে slow down বা suspend) — স্পষ্ট নির্ধারিত সংখ্যা পাওয়া যায়নি প্রায় সব ক্ষেত্রে ([Cybernews][13]) | - Free for entire lifetime যতক্ষণ policy ভঙ্গ করো না ([freehosting.com][12]) <br> - “Fair Use Policy” আছে, তাই যদি continuous high usage হয়, বা resource abuse হয়, তাহলে suspend বা restrictions লাগতে পারে <br> - কখনো যদি very inactive হয়, লগইন বা file activity না হলে policy অনুসারে অ্যাকাউন্ট disable হতে পারে (স্পষ্ট সময়-মেয়াদ নাও পাওয়া গেছে) |

---

## ⚠️ যা স্পষ্টভাবে পাওয়া যায়নি বা অসম্পূর্ণ

* **সঠিক RAM বা CPU cores** কতটা দেওয়া হয় free plans-এ, সব ক্ষেত্রে পাওয়া যায়নি। অনেক সময় “low CPU/RAM usage allowed” বলেই সীমাবদ্ধ থাকে।
* **কতবার সার্ভার রিস্টার্ট হয় / কতক্ষণ সার্ভার ২৪ ঘণ্টায় কাজ করে** — উদাহরন: 000WebHost-এর free plan কি দিনে কোনো downtime বা “sleep” থাকে — কিছু ব্যবহারকারী বলেছে তারা “sleep” দেখেছে কখনো-কখনো। তবে অফিসিয়াল data নেই।
* **কোন period পরে inactive হওয়া অ্যাকাউন্ট মুছে দেওয়া হবে** — InfinityFree-তে দেখা গেছে ৩০ দিন inactivity হলে একটা ই-মেইল/notification আসে, এবং যদি সাড়া না দেওয়া হয়, delete হতে পারে। ([BlackHatWorld][4])

---

যদি তুমি চাই, আমি একটি আপ-টু-ডেট চার্ট বানিয়ে দিতে পারি যেখানে প্রতিটা provider-এর **CPU, RAM, process limit, file upload limit, inactivity deletion time** ইত্যাদি স্পষ্ট থাকবে — তবে কিছু তথ্য হয়তো সেই চার্টে “আনঅফিসিয়াল ব্যবহারের ভিত্তিতে” হবে কারণ অফিসিয়াল ওয়ারেই সব দেওয়া নেই। চাও এমনটা বানাই?

[1]: https://www.infinityfree.com/premium/?utm_source=chatgpt.com "iFastNet Premium Hosting - InfinityFree"
[2]: https://forum.infinityfree.com/t/specifications/50967?utm_source=chatgpt.com "Specifications - Hosting Support - InfinityFree Forum"
[3]: https://forum.infinityfree.com/t/account-suspended/9386?utm_source=chatgpt.com "Account suspended - Hosting Support - InfinityFree Forum"
[4]: https://www.blackhatworld.com/seo/free-website-hosting-infinity-free.1361642/?utm_source=chatgpt.com "Free Website Hosting - Infinity Free | BlackHatWorld"
[5]: https://diggitymarketing.com/web-hosting/000webhost-review/?utm_source=chatgpt.com "000webhost Review: Free Hosting, But What’s the Catch?"
[6]: https://www.000webhost.llc/?utm_source=chatgpt.com "Free Web Hosting | 000webhost LLC"
[7]: https://www.000webhost.com/hosting-agreement?utm_source=chatgpt.com "Free Web Hosting, Domain Names, VPS | 000Webhost"
[8]: https://www.howinsight.com/2024/07/awardspace-review-in-depth-analysis-off.html?utm_source=chatgpt.com "AwardSpace Review: In-Depth Analysis of Free and Paid Hosting"
[9]: https://web-hosting.no1reviews.com/features/awardspace.html?utm_source=chatgpt.com "AwardSpace | AwardSpace.com Costs & Features"
[10]: https://www.awardspace.com/free-hosting/?utm_source=chatgpt.com "Free Hosting - AwardSpace.com"
[11]: https://www.awardspace.com/kb/where-can-i-see-my-bandwidth-usage/?utm_source=chatgpt.com "Where Can I See My Bandwidth Usage? | AwardSpace Knowledge Base"
[12]: https://www.freehosting.com/free-hosting.html?utm_source=chatgpt.com "Free Hosting package"
[13]: https://cybernews.com/best-web-hosting/freehosting-com-review//?utm_source=chatgpt.com "FreeHosting.com Review 2024: Can Free Be Good? | Cybernews"
