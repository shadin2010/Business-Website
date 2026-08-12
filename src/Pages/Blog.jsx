import React from 'react';

export const Blog = () => {
  return (
    <article className="container mx-auto px-4 py-10 font-sans text-right" dir="rtl">
      
      {/* قسم الـ SEO (يمكنك نقله إلى React Helmet إذا كنت تستخدمه) */}
      <div className="hidden">
        <title>شراء مكيفات وألمنيوم مستعمل في الدمام | نشتري المكيفات والألمنيوم</title>
        <meta name="description" content="نشتري مكيفات وألمنيوم مستعمل في الدمام والمناطق المحيطة مثل Al Hasan Al Hubob وAl Katib وAl Kobat وAl Jobaier. تواصل معنا اليوم لبيع منتجاتك القديمة." />
        <meta name="keywords" content="شراء مكيفات وألمنيوم مستعمل في الدمام, شراء مكيفات مستعملة في الدمام, شراء مكيفات قديمة في الدمام, شراء ألمنيوم مستعمل في الدمام, مشتري مكيفات مستعملة في الدمام, مشتري ألمنيوم مستعمل في الدمام" />
      </div>

      {/* ترويسة المقال */}
      <header className="bg-blue-50 rounded-xl p-8 mb-10 shadow-sm border border-blue-100">
        <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-4 leading-tight">
          نشتري مكيفات وألمنيوم مستعمل في الدمام
        </h1>
        <p className="text-xl text-blue-700 font-semibold">
          بع مكيفاتك وألمنيومك المستعمل واحصل على قيمة عادلة اليوم!
        </p>
      </header>

      {/* المقدمة */}
      <section className="mb-12 text-gray-800 text-lg leading-relaxed space-y-4">
        <p>
          هل لديك أجهزة تكييف قديمة أو ألمنيوم مستعمل في منزلك، مكتبك، متجرك، مستودعك أو منشأتك التجارية ولم تعد بحاجة إليها؟
        </p>
        <p>
          لا تترك المنتجات القديمة دون استخدام أو تشغل بها مساحة إضافية. نحن نشتري أجهزة التكييف والألمنيوم المستعمل في <strong>الدمام (Dammam)</strong> والمناطق المحيطة بها.
        </p>
        <p>
          يمكنك بيع أجهزة التكييف المستعملة، وأبواب ونوافذ الألمنيوم، والإطارات، وغيرها من مواد الألمنيوم المستعملة بسهولة. هدفنا هو توفير خدمة شراء سهلة وموثوقة وشفافة، مع تقييم المنتجات بناءً على حالتها ونوعها وكميتها وقيمتها.
        </p>
      </section>

      {/* ماذا نشتري */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-blue-200 pb-2">
          ماذا نشتري من أجهزة التكييف والألمنيوم المستعمل؟
        </h2>
        <p className="mb-6 text-gray-700">نشتري مجموعة متنوعة من أجهزة التكييف والألمنيوم القديم والمستعمل:</p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* قسم المكيفات */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
              ❄️ أجهزة التكييف المستعملة
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>مكيفات سبليت مستعملة</li>
              <li>مكيفات شباك قديمة</li>
              <li>الوحدات الداخلية لأجهزة التكييف</li>
              <li>الوحدات الخارجية لأجهزة التكييف</li>
              <li>أجهزة تكييف قديمة ومستعملة</li>
              <li>أنواع مختلفة من معدات وأجهزة التكييف المستعملة</li>
            </ul>
          </div>

          {/* قسم الألمنيوم */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="text-xl font-bold text-gray-600 mb-4 flex items-center">
              🏗️ الألمنيوم المستعمل
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>أبواب ألمنيوم</li>
              <li>نوافذ ألمنيوم</li>
              <li>إطارات ألمنيوم</li>
              <li>مواد ألمنيوم مستعملة</li>
              <li>هياكل ألمنيوم قديمة</li>
              <li>مختلف أنواع الألمنيوم المستعمل</li>
            </ul>
          </div>
        </div>
        <p className="mt-6 text-sm text-gray-500 italic bg-gray-50 p-3 rounded-md">
          * نقوم بتقييم المنتجات حسب النوع والحالة والكمية والقيمة الإجمالية لتحديد السعر المناسب.
        </p>
      </section>

      {/* مناطق الخدمة */}
      <section className="mb-12 bg-gray-50 p-8 rounded-xl">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">مناطق الخدمة المستهدفة في الدمام</h2>
        <p className="mb-4 text-gray-700">إذا كان لديك مكيفات مستعملة أو ألمنيوم قديم في أي من هذه المناطق، يمكنك التواصل معنا:</p>
        <div className="flex flex-wrap gap-3">
          {['Dammam', 'Al Hasan Al Hubob', 'Al Katib', 'Al Kobat', 'Al Jobaier'].map((area, index) => (
            <span key={index} className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold tracking-wide shadow-sm">
              {area}
            </span>
          ))}
        </div>
      </section>

      {/* لماذا تبيع لنا */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-blue-200 pb-2">
          لماذا تبيع لنا مكيفاتك وألمنيومك المستعمل؟
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center p-4">
            <div className="text-4xl mb-3">💰</div>
            <h3 className="font-bold text-lg mb-2">سعر عادل ومنافس</h3>
            <p className="text-gray-600 text-sm">نقدم سعراً يناسب حالة المنتج ونوعه وقيمته.</p>
          </div>
          <div className="text-center p-4">
            <div className="text-4xl mb-3">📞</div>
            <h3 className="font-bold text-lg mb-2">تواصل سهل</h3>
            <p className="text-gray-600 text-sm">إجراءات بسيطة، أرسل التفاصيل والصور فقط.</p>
          </div>
          <div className="text-center p-4">
            <div className="text-4xl mb-3">🔍</div>
            <h3 className="font-bold text-lg mb-2">تقييم واضح</h3>
            <p className="text-gray-600 text-sm">تقييم شفاف وعادل يضمن وضوح عملية البيع.</p>
          </div>
          <div className="text-center p-4">
            <div className="text-4xl mb-3">⭐</div>
            <h3 className="font-bold text-lg mb-2">خدمة احترافية</h3>
            <p className="text-gray-600 text-sm">نحرص على تلبية احتياجاتك واحترام وقتك.</p>
          </div>
        </div>
      </section>

      {/* خطوات البيع */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-blue-200 pb-2">
          كيف تبيع مكيفاتك أو ألمنيومك المستعمل؟
        </h2>
        <div className="space-y-6">
          {[
            { step: '01', title: 'تواصل معنا', desc: 'أخبرنا بنوع المنتج الذي ترغب في بيعه.' },
            { step: '02', title: 'أرسل تفاصيل المنتج', desc: 'أرسل صور المكيف أو الألمنيوم، والنوع، والكمية، والحالة.' },
            { step: '03', title: 'تقييم المنتج', desc: 'نقوم بتقييم حالة المنتج والكمية والعوامل الأخرى.' },
            { step: '04', title: 'إتمام عملية البيع', desc: 'بعد الاتفاق على السعر، ننهي البيع بطريقة سهلة ومريحة.' },
          ].map((item, index) => (
            <div key={index} className="flex items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <span className="flex-shrink-0 bg-blue-600 text-white font-bold h-10 w-10 flex items-center justify-center rounded-full ml-4">
                {item.step}
              </span>
              <div>
                <h4 className="font-bold text-lg text-gray-900">{item.title}</h4>
                <p className="text-gray-600 mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* الخاتمة والدعوة للإجراء (Call to Action) */}
      <footer className="bg-blue-900 text-white p-8 rounded-xl text-center shadow-lg">
        <h2 className="text-3xl font-bold mb-4">منتجاتك القديمة لها قيمة — ونحن نساعدك على بيعها!</h2>
        <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
          بدلاً من تركها دون استخدام أو الاحتفاظ بها في المستودع، تواصل معنا اليوم وابدأ عملية بيع مكيفاتك وألمنيومك المستعمل في الدمام.
        </p>
        <button className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold py-3 px-10 rounded-full text-lg transition duration-300 shadow-md">
          تواصل معنا الآن
        </button>
      </footer>

    </article>
  );
};