# কোড নোট — C ও C++ এক্সাম নোট

React + React Router v6 (`createBrowserRouter` + `RouterProvider`) + Vite। দুইটি ডক থেকে ৯০টি করে প্রোগ্রাম (C ও C++)।

- **পড়ার মোড**: কোড, মনে রাখার কৌশল, আউটপুট; C ↔ C++ পাশাপাশি তুলনা
- **প্র্যাক্টিস মোড**: নিজে কোড লিখে চালাও, আউটপুট মেলাও (মিললে ✓ চিহ্ন, ব্রাউজারে সেভ থাকে)
- **চিটশিট**: কুইক রিভিশন ও C → C++ কনভার্সন নোট

## GitHub Pages-এ দেওয়ার দুইটা উপায়

### উপায় ১ (সবচেয়ে সহজ): তৈরি `dist` ফোল্ডার আপলোড
1. `dist` ফোল্ডারের **ভিতরের সব ফাইল** (index.html + assets ফোল্ডার) রিপোর রুটে আপলোড করো।
2. Repo → Settings → Pages → Source: **Deploy from a branch** → Branch: `main` / `(root)` → Save।

### উপায় ২: সোর্স আপলোড + অটো ডিপ্লয়
1. এই পুরো প্রজেক্ট (`node_modules` ছাড়া) `main` ব্রাঞ্চে পুশ করো।
2. Settings → Pages → Source: **GitHub Actions** (`.github/workflows/deploy.yml` বাকিটা করবে)।

## লোকালি চালানো
```
npm install
npm run dev      # ডেভেলপমেন্ট
npm run build    # dist তৈরি
```

## ফোল্ডার স্ট্রাকচার
```
src/
├── routes/Router.jsx       # createBrowserRouter — সব রুট এখানে
├── layouts/MainLayout.jsx  # হেডার + <Outlet /> + ফুটার
├── pages/                  # Home, Lang, Read, Practice, Cheat
├── components/Code.jsx     # CodeBlock, Terminal
├── lib/                    # data, storage, compare, run, highlight
├── data/notes.json         # ১৮০টি প্রোগ্রাম (C ও C++)
└── main.jsx                # <RouterProvider router={router} />
```

## নোট
- URL সুন্দর: `.../cpp/read/2-4` (কোনো `#` নেই)।
- GitHub Pages-এ রিফ্রেশে ৪০৪ আটকাতে `public/404.html` + `index.html`-এর ছোট স্ক্রিপ্ট আছে (spa-github-pages ট্রিক)। `Router.jsx` repo-নাম দেখে নিজে `basename` ঠিক করে — তাই repo-র নাম যা-ই হোক, কিছু বদলাতে হয় না।
- Vercel/Firebase-এ দিলে `vercel.json`/`firebase.json`-এ rewrites দাও (গাইডে যেমন আছে); তখন `404.html` লাগে না।
- প্র্যাক্টিসের "চালাও" বাটন অনলাইন কম্পাইলার (Compiler Explorer API) ব্যবহার করে — ইন্টারনেট লাগবে। না চললে "আউটপুট পেস্ট করে মেলাও" অংশ আছে।
- সব প্রত্যাশিত আউটপুট gcc/g++ দিয়ে আসলে চালিয়ে যাচাই করা।
- নতুন প্রোগ্রাম যোগ/বদল করতে `src/data/notes.json` এডিট করো।
