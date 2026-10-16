let cart = [];
const whatsappNumber = "963969623485";
let previousScreen = "main";
let currentFromScreen = "main";

// قاعدة بيانات تفاصيل المنتجات والفوائد
const productsData = {
    'scrub-rose': {
        name: 'سكراب الورد',
        price: 45000,
        img: 'images/scrub-rose.jpg',
        benefits: 'تفتيح وتوريد البشرة، وتقشير الخلايا الميتة بلطف.',
        usage: 'يدلك على بشرة مبللة بحركات دائرية ثم يشطف بالماء الدافئ.',
        ingredients: 'خلاصة الورد، سكر ناعم، زيوت مرطبة.'
    },
    'scrub-hibiscus': {
        name: 'سكراب الكركديه',
        price: 45000,
        img: 'images/scrub-hibiscus.jpg',
        benefits: 'تفتيح وتوريد البشرة ومنحها إشراقة طبيعية.',
        usage: 'يستخدم مرتين أسبوعياً على جسم رطب مع تدليك خفيف.',
        ingredients: 'بودرة الكركديه، زبدة الشيا، مقشرات طبيعية.'
    },
    'scrub-nila': {
        name: 'سكراب النيلة',
        price: 50000,
        img: 'images/scrub-nila.jpg',
        benefits: 'تفتيح فوري وملاحظ، وتوحيد لون الجسم والتصبغات.',
        usage: 'يوزع على الجسم ويترك 5 دقائق ثم يدلك ويشطف.',
        ingredients: 'النيلة المغربية، زيوت مغذية.'
    },
    'lotion-whitening': {
        name: 'لوشن مفتح',
        price: 60000,
        img: 'images/lotion-whitening.jpg',
        benefits: 'تفتيح البشرة وتوحيد لونها وترطيب عميق.',
        usage: 'يدهن على كامل الجسم بعد الاستحمام مباشرة.',
        ingredients: 'خلاصات تفتيح طبيعية، فيتامين C.'
    },
    'lotion-dove': {
        name: 'لوشن بريحة دوف',
        price: 50000,
        img: 'images/lotion-dove.jpg',
        benefits: 'ترطيب ونعومة فائقة برائحة النظافة.',
        usage: 'يستخدم يومياً لترطيب يدوم طويلاً.',
        ingredients: 'زبدة مرطبة، خلاصات .'
    },
    'lotion-pomegranate': {
        name: 'لوشن بريحة الرمان',
        price: 50000,
        img: 'images/lotion-pomegranate.jpg',
        benefits: 'ترطيب وانتعاش يدوم طويلاً برائحة الرمان.',
        usage: 'يطبق على الجسم يومياً بعد الاستحمام.',
        ingredients: 'مستخلص الرمان، زيوت خفيفة.'
    },
    'lotion-rose': {
        name: 'لوشن بريحة الورد',
        price: 50000,
        img: 'images/lotion-rose.jpg',
        benefits: 'ترطيب ورائحة ورد جذابة ومنعشة.',
        usage: 'يدلك ببطء على الجسم حتى يتم امتصاصه.',
        ingredients: 'زيت الورد، فيتامين E.'
    },
    'oil-dove': {
        name: 'زيت عطري بريحة دوف',
        price: 35000,
        img: 'images/oil-dove.jpg',
        benefits: 'رائحة نظافة وانتعاش تدوم طويلاً وثبات عالي.',
        usage: 'توضع قطرات بسيطة على أماكن النبض.',
        ingredients: 'زيوت عطرية مركزة خالية من الكحول.'
    },
    'oil-pomegranate': {
        name: 'زيت عطري بريحة الرمان',
        price: 35000,
        img: 'images/oil-pomegranate.jpg',
        benefits: 'رائحة فاكهية منعشة وجذابة ومميزة.',
        usage: 'يستخدم على بشرة رطبة لثبات مثالي.',
        ingredients: 'زيت جوز الهند، عطر الرمان.'
    },
    'oil-rose': {
        name: 'زيت عطري بريحة الورد',
        price: 35000,
        img: 'images/oil-rose.jpg',
        benefits: 'لمسة عطرية دافئة وناعمة.',
        usage: 'يدهن على الجسم أو أطراف الشعر.',
        ingredients: 'زيوت طبيعية، عطر الورد.'
    },
    'package-dove': {
        name: 'بكج دوف المتكامل',
        price: 115000,
        img: 'images/package-dove.jpg',
        benefits: 'عناية كاملة بالنظافة والترطيب بتوفير مميز.',
        usage: 'سكراب ثم لوشن ثم زيت عطري لثبات يدوم طويلاً.',
        ingredients: 'لوشن دوف + زيت دوف + سكراب اختياري.'
    },
    'package-pomegranate': {
        name: 'بكج الرمان المنعش',
        price: 115000,
        img: 'images/package-pomegranate.jpg',
        benefits: 'بكج التفتيح والانتعاش الفاكهي الكامل.',
        usage: 'روتين عناية أسبوعي ويومي متكامل.',
        ingredients: 'لوشن الرمان + زيت الرمان + سكراب الكركديه.'
    },
    'package-rose': {
        name: 'بكج الورد الملكي',
        price: 115000,
        img: 'images/package-rose.jpg',
        benefits: 'بكج الترطيب الأنثوي الملكي برائحة الورد.',
        usage: 'روتين دلال يومي متكامل.',
        ingredients: 'لوشن الورد + زيت الورد + سكراب الورد.'
    }
};

const categoryTitles = {
    'scrubs': '🌿 قسم السكرابات',
    'lotions': '🧴 قسم اللوشنات',
    'oils': '💧 الزيوت العطرية',
    'body-packages': '🌸 بكجات الجسم',
    'packages': '🎁 قسم البكجات'
};

function openBodySection() {
    document.getElementById('mainCategoriesView').style.display = 'none';
    document.getElementById('bodySubCategoriesView').style.display = 'block';
    document.getElementById('productsView').style.display = 'none';
    currentFromScreen = "body-main";
}

function showMainHome() {
    document.getElementById('mainCategoriesView').style.display = 'grid';
    document.getElementById('bodySubCategoriesView').style.display = 'none';
    document.getElementById('productsView').style.display = 'none';
    currentFromScreen = "main";
}

function showProducts(categoryId, fromScreen) {
    previousScreen = fromScreen;
    document.getElementById('mainCategoriesView').style.display = 'none';
    document.getElementById('bodySubCategoriesView').style.display = 'none';
    document.getElementById('productsView').style.display = 'block';

    const groups = document.querySelectorAll('.category-products-group');
    groups.forEach(group => group.style.display = 'none');

    const selectedGroup = document.getElementById(categoryId);
    if (selectedGroup) {
        selectedGroup.style.display = 'flex';
    }
    
    document.getElementById('currentCategoryTitle').innerText = categoryTitles[categoryId] || 'المنتجات';
}

function goBackFromProducts() {
    if (previousScreen === 'body') {
        openBodySection();
    } else {
        showMainHome();
    }
}

// دوال فتح وإغلاق نافذة تفاصيل المنتج
function openProductDetails(key) {
    const data = productsData[key];
    if (!data) return;

    document.getElementById('modalImg').src = data.img;
    document.getElementById('modalTitle').innerText = data.name;
    document.getElementById('modalPrice').innerText = data.price.toLocaleString('ar-SY') + ' ل.س';
    document.getElementById('modalBenefits').innerText = data.benefits;
    document.getElementById('modalUsage').innerText = data.usage;
    document.getElementById('modalIngredients').innerText = data.ingredients;

    const modalAddBtn = document.getElementById('modalAddBtn');
    modalAddBtn.onclick = function() {
        addToCart(data.name, data.price);
        closeModalDirect();
    };

    document.getElementById('productModal').style.display = 'flex';
}

function closeModal(event) {
    if (event.target.id === 'productModal') {
        document.getElementById('productModal').style.display = 'none';
    }
}

function closeModalDirect() {
    document.getElementById('productModal').style.display = 'none';
}

function addToCart(name, price) {
    const existingProduct = cart.find(item => item.name === name);

    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ name: name, price: price, quantity: 1 });
    }

    updateCartUI();
}

function updateCartUI() {
    const cartBar = document.getElementById('cartBar');
    const cartCount = document.getElementById('cartCount');
    const cartTotal = document.getElementById('cartTotal');

    let totalItems = 0;
    let totalPrice = 0;

    cart.forEach(item => {
        totalItems += item.quantity;
        totalPrice += (item.price * item.quantity);
    });

    if (totalItems > 0) {
        cartBar.style.display = 'flex';
        cartCount.innerText = totalItems;
        cartTotal.innerText = totalPrice.toLocaleString('ar-SY');
    } else {
        cartBar.style.display = 'none';
    }
}

function sendToWhatsapp() {
    if (cart.length === 0) return;

    let message = "مرحباً Skinloop ✨\nأود طلب المنتجات التالية:\n\n";
    let totalPrice = 0;

    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        totalPrice += itemTotal;
        message += `${index + 1}. ${item.name} (${item.quantity}x) - ${itemTotal.toLocaleString('ar-SY')} ل.س\n`;
    });

    message += `\n💵 *المجموع الكلي:* ${totalPrice.toLocaleString('ar-SY')} ل.س\n\n`;
    message += "يرجى تزويدي بتفاصيل الشحن والتوصيل. شكراً لكم!";

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
}