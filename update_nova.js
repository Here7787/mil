const fs = require('fs');

// قراءة الملف الأصلي
let content = fs.readFileSync('/workspace/index.js', 'utf8');

console.log('بدء التعديلات...');

// تعديل أوامر التحويل من 'c' إلى 'g'
content = content.replace(/`c \$\{TRANSFER_RECIPIENT_ID\}/g, '`g ${TRANSFER_RECIPIENT_ID}');
content = content.replace(/`c \$\{interaction\.user\.id\}/g, '`g ${interaction.user.id}');

// تعديل النصوص من كريدت إلى جولد
content = content.replace(/مبلغ الكريدت/g, 'مبلغ الجولد');
content = content.replace(/1M كريدت/g, '1M جولد');
content = content.replace(/كريدت\n/g, 'جولد\n');
content = content.replace(/كريدت\\/g, 'جولد\\');

console.log('تم إجراء التعديلات الأساسية');

// تعديل معرف البوت
content = content.replace(/CREDIT_BOT_ID/g, 'NOVA_BOT_ID');

// كتابة الملف المعدل
fs.writeFileSync('/workspace/index.js', content);

console.log('تم حفظ التعديلات بنجاح!');