const FOOD=[
  {icon:'🌾',name:'Garri (Ijebu)',cat:'Grains',price:2500,unit:'bag',desc:'White & yellow Ijebu garri, freshly processed',th:'tg'},
  {icon:'🍚',name:'Rice (50kg bag)',cat:'Grains',price:85000,unit:'bag',desc:'Long-grain parboiled rice, great for all meals',th:'tg'},
  {icon:'🌽',name:'Corn Flour (Ogi)',cat:'Grains',price:1800,unit:'pack',desc:'Smooth corn pap for breakfast or weaning',th:'tg'},
  {icon:'🫘',name:'Brown Beans',cat:'Grains',price:4000,unit:'paint',desc:'Quality honey & brown beans, clean sorted',th:'tg'},
  {icon:'🌾',name:'Semovita (1kg)',cat:'Grains',price:1500,unit:'pack',desc:'Fine semolina swallow for soups & stews',th:'tg'},
  {icon:'🥚',name:'Eggs (Crate 30)',cat:'Protein',price:4500,unit:'crate',desc:'Farm-fresh large eggs, 30 per crate',th:'tp'},
  {icon:'🐟',name:'Smoked Fish',cat:'Protein',price:2000,unit:'wrap',desc:'Aromatic smoked catfish for your stews',th:'tp'},
  {icon:'🦐',name:'Crayfish (cup)',cat:'Protein',price:800,unit:'cup',desc:'Sun-dried ground crayfish for rich flavour',th:'tp'},
  {icon:'🐠',name:'Stock Fish',cat:'Protein',price:3500,unit:'piece',desc:'Premium dried stockfish, softens beautifully',th:'tp'},
  {icon:'🛢️',name:'Palm Oil (25L)',cat:'Oils',price:18000,unit:'keg',desc:'Pure unrefined red palm oil from Edo State',th:'to'},
  {icon:'🧴',name:'Vegetable Oil (3L)',cat:'Oils',price:4800,unit:'bottle',desc:'Clear refined vegetable oil, low cholesterol',th:'to'},
  {icon:'🥜',name:'Groundnut Oil (4L)',cat:'Oils',price:6500,unit:'bottle',desc:'Cold-pressed groundnut oil, deep roasted aroma',th:'to'},
  {icon:'🧅',name:'Onions (medium bag)',cat:'Veggies',price:7000,unit:'bag',desc:'Red Sokoto onions, pungent & sweet flavour',th:'tv'},
  {icon:'🍅',name:'Tomatoes (basket)',cat:'Veggies',price:5500,unit:'basket',desc:'Fresh plum tomatoes for stew & jollof rice',th:'tv'},
  {icon:'🫑',name:'Tatashe Pepper',cat:'Veggies',price:2500,unit:'basket',desc:'Sweet red bell pepper for colour & taste',th:'tv'},
  {icon:'🌿',name:'Ugwu Leaves',cat:'Veggies',price:300,unit:'bunch',desc:'Tender fluted pumpkin leaves, iron-rich',th:'tv'},
  {icon:'🧄',name:'Garlic (pack)',cat:'Veggies',price:600,unit:'pack',desc:'Aromatic fresh garlic cloves',th:'tv'},
  {icon:'🥬',name:'Efo Riro Leaves',cat:'Veggies',price:400,unit:'wrap',desc:'Fresh shredded efo for riro or egusi soup',th:'tv'},
  {icon:'🧂',name:'Seasoning Cubes',cat:'Spices',price:500,unit:'pack',desc:'Maggi & Knorr cubes, 50-pack variety bundle',th:'ts'},
  {icon:'🌶️',name:'Ground Pepper',cat:'Spices',price:700,unit:'bottle',desc:'Hot chilli & tatashe blend, deep red',th:'ts'},
  {icon:'🫙',name:'Curry & Thyme Set',cat:'Spices',price:600,unit:'set',desc:'Aromatic curry powder & dried thyme combo',th:'ts'},
  {icon:'🧈',name:'Butter (250g)',cat:'Dairy',price:1800,unit:'pack',desc:'Creamy unsalted butter for baking & cooking',th:'td'},
  {icon:'🥛',name:'Peak Milk (tin)',cat:'Dairy',price:2200,unit:'tin',desc:'Full-cream evaporated milk, rich & nutritious',th:'td'},
  {icon:'🍞',name:'Bread Loaf',cat:'Bakery',price:700,unit:'loaf',desc:'Soft sliced white bread, freshly baked daily',th:'tb'},
  {icon:'🍝',name:'Spaghetti (pack)',cat:'Pasta',price:1200,unit:'pack',desc:'Golden Penny spaghetti, 500g per pack',th:'tpa'},
];
const TECH=[
  {icon:'💳',name:'POS Terminal Setup',cat:'Services',price:0,th:'tsv',desc:'Full setup, activation & training included'},
  {icon:'🔄',name:'Phone Exchange',cat:'Services',price:0,th:'tsv',desc:'Swap your old device — fair valuation'},
  {icon:'💰',name:'Sell Your Phone',cat:'Services',price:0,th:'tsv',desc:'Instant cash — best buy-back rates in Ibadan'},
  {icon:'🛠️',name:'Phone Repair',cat:'Services',price:0,th:'tsv',desc:'Screen, battery, charging port & software fixes'},
  {icon:'📲',name:'Tecno Spark 20',cat:'Phones',price:95000,th:'tph',desc:'6.6" display · 128GB · 5000mAh · Dual SIM'},
  {icon:'📱',name:'Infinix Hot 40',cat:'Phones',price:78000,th:'tph',desc:'6.78" 90Hz · 256GB · 5000mAh battery'},
  {icon:'📟',name:'Samsung Galaxy A15',cat:'Phones',price:110000,th:'tph',desc:'6.5" AMOLED · 128GB · 5000mAh · Triple cam'},
  {icon:'📱',name:'Tecno Camon 20',cat:'Phones',price:130000,th:'tph',desc:'108MP camera · 8GB RAM · 6.67" AMOLED'},
  {icon:'📱',name:'Itel A70',cat:'Phones',price:42000,th:'tph',desc:'Budget powerhouse · 5000mAh · Android 13 Go'},
  {icon:'📱',name:'Infinix Smart 8',cat:'Phones',price:55000,th:'tph',desc:'6.6" HD+ · 64GB · Dual SIM · Android 13'},
  {icon:'🎧',name:'Bluetooth Earbuds',cat:'Accessories',price:6500,th:'tac',desc:'True wireless · noise-cancelling · 6hr play'},
  {icon:'🔋',name:'Power Bank 20000mAh',cat:'Accessories',price:12000,th:'tac',desc:'Fast charge · dual USB-C & USB-A output'},
  {icon:'🔌',name:'USB-C Fast Charger',cat:'Accessories',price:2500,th:'tac',desc:'65W GaN adapter, compact travel size'},
  {icon:'🛡️',name:'Tempered Glass',cat:'Accessories',price:1500,th:'tac',desc:'9H hardness · anti-glare screen protector'},
  {icon:'📦',name:'Phone Back Cover',cat:'Accessories',price:2000,th:'tac',desc:'Military-grade shockproof silicone case'},
  {icon:'🔊',name:'Bluetooth Speaker',cat:'Accessories',price:9500,th:'tac',desc:'Waterproof IPX5 · 8hr playtime · deep bass'},
  {icon:'💡',name:'LED Earphones',cat:'Accessories',price:3500,th:'tac',desc:'Wired · heavy bass driver · RGB LED wire'},
  {icon:'🖥️',name:'Phone Holder/Stand',cat:'Accessories',price:2200,th:'tac',desc:'Adjustable desk mount · 360° rotation'},
];

let cart=[];
let curO='food';
const fmt=n=>n>0?'₦'+n.toLocaleString():'Contact Us';
const items=t=>t==='food'?FOOD:TECH;

function buildF(data,id,type){
  const cats=['All',...new Set(data.map(i=>i.cat))];
  document.getElementById(id).innerHTML=cats.map((c,i)=>`<button class="pill ${i===0?(type==='tech'?'ta':'fa'):''}" onclick="fcat('${type}','${c}',this)">${c}</button>`).join('');
}

function rGrid(data,gid,type){
  const el=document.getElementById(gid),em=document.getElementById(type+'-empty');
  if(!data.length){el.innerHTML='';em.style.display='block';return;}
  em.style.display='none';
  const iT=type==='tech';
  el.innerHTML=data.map(item=>{
    const ci=cart.find(c=>c.key===type+'||'+item.name);
    const qty=ci?ci.qty:0;
    const cid='ctl-'+type+'-'+item.name.replace(/\W/g,'_');
    const pc=item.price===0?'cup':(iT?'tp2':'fp');
    return `<div class="card">
      <div class="thumb ${item.th}">${item.icon}<span class="ctag ${iT?'ttag':'ftag'}">${item.cat}</span></div>
      <div class="cb">
        <div class="cn">${item.name}</div>
        <div class="cd">${item.desc||''}</div>
        <div class="cp ${pc}">${fmt(item.price)}</div>
      </div>
      <div class="cf" id="${cid}">
        ${qty===0
          ?`<button class="ab ${iT?'ta2':'fa2'}" onclick="addI('${type}','${item.name}')">+ Add to Cart</button>`
          :`<div class="qr ${iT?'tq':'fq'}"><button class="qb" onclick="chQ('${type}','${item.name}',-1)">−</button><span class="qn">${qty}</span><button class="qb" onclick="chQ('${type}','${item.name}',1)">+</button></div>`
        }
      </div>
    </div>`;
  }).join('');
}

function fcat(type,cat,btn){
  document.querySelectorAll('#'+type+'-filt .pill').forEach(b=>b.classList.remove('fa','ta'));
  btn.classList.add(type==='tech'?'ta':'fa');
  rGrid(cat==='All'?items(type):items(type).filter(i=>i.cat===cat),type+'-grid',type);
}
function filterQ(type,q){
  q=q.toLowerCase();
  const f=q?items(type).filter(i=>i.name.toLowerCase().includes(q)||i.cat.toLowerCase().includes(q)):items(type);
  document.querySelectorAll('#'+type+'-filt .pill').forEach((b,i)=>{b.classList.remove('fa','ta');if(i===0)b.classList.add(type==='tech'?'ta':'fa');});
  rGrid(f,type+'-grid',type);
}

function addI(type,name){
  const item=items(type).find(i=>i.name===name);if(!item)return;
  const key=type+'||'+name,ex=cart.find(c=>c.key===key);
  if(ex){ex.qty++;}else{cart.push({key,type,name,icon:item.icon,price:item.price,qty:1});}
  updC();updCtrl(type,name);
  toast('✓ '+name.split('(')[0].trim()+' added');
}
function chQ(type,name,d){
  const key=type+'||'+name,idx=cart.findIndex(c=>c.key===key);if(idx===-1)return;
  cart[idx].qty+=d;if(cart[idx].qty<=0)cart.splice(idx,1);
  updC();updCtrl(type,name);
  if(document.getElementById('cart-dr').classList.contains('on'))rCart();
}
function updCtrl(type,name){
  const el=document.getElementById('ctl-'+type+'-'+name.replace(/\W/g,'_'));if(!el)return;
  const ci=cart.find(c=>c.key===type+'||'+name),qty=ci?ci.qty:0,iT=type==='tech';
  el.innerHTML=qty===0
    ?`<button class="ab ${iT?'ta2':'fa2'}" onclick="addI('${type}','${name}')">+ Add to Cart</button>`
    :`<div class="qr ${iT?'tq':'fq'}"><button class="qb" onclick="chQ('${type}','${name}',-1)">−</button><span class="qn">${qty}</span><button class="qb" onclick="chQ('${type}','${name}',1)">+</button></div>`;
}
function updC(){document.getElementById('cart-count').textContent=cart.reduce((s,c)=>s+c.qty,0);}

function openCart(){document.getElementById('cart-ov').classList.add('on');document.getElementById('cart-dr').classList.add('on');rCart();}
function closeCart(){document.getElementById('cart-ov').classList.remove('on');document.getElementById('cart-dr').classList.remove('on');}
function rCart(){
  const bd=document.getElementById('cart-bd'),ft=document.getElementById('cart-ft');
  if(!cart.length){bd.innerHTML='<div class="ec"><div class="ei">🛒</div><p>Your cart is empty</p></div>';ft.style.display='none';return;}
  let tot=0;
  bd.innerHTML=cart.map(c=>{tot+=c.price*c.qty;return`<div class="crit">
    <div class="cri">${c.icon}</div>
    <div class="crd">
      <div class="crn">${c.name}</div>
      <div class="crp">${c.price>0?fmt(c.price)+' each':'Price on request'}</div>
      <div class="crq"><button onclick="chQ('${c.type}','${c.name}',-1);rCart()">−</button><span>${c.qty}</span><button onclick="chQ('${c.type}','${c.name}',1);rCart()">+</button></div>
    </div>
    <button class="crdl" onclick="remI('${c.key}')">🗑</button>
  </div>`;}).join('');
  document.getElementById('cart-total').textContent=tot>0?fmt(tot):'Price on request';
  ft.style.display='block';
}
function remI(key){const c=cart.find(x=>x.key===key);if(c){cart=cart.filter(x=>x.key!==key);updCtrl(c.type,c.name);}updC();rCart();}
function checkoutWA(){
  if(!cart.length)return;
  let msg='🛒 *New Order*\n\n';
  cart.forEach(c=>{msg+=`• ${c.icon} ${c.name} × ${c.qty}${c.price>0?' — '+fmt(c.price*c.qty):''}\n`;});
  const tot=cart.reduce((s,c)=>s+c.price*c.qty,0);
  if(tot>0)msg+=`\n💰 *Total: ${fmt(tot)}*`;
  msg+='\n\nPlease confirm and arrange delivery. Thank you! 🙏';
  window.open('https://wa.me/2349072206274?text='+encodeURIComponent(msg));
}

function openOrder(type){
  curO=type;const iT=type==='tech';
  document.getElementById('modal-hd').className='mhd '+(iT?'th':'fh');
  document.getElementById('modal-title').textContent=iT?'📱 Order from Emmy Enterprises':'🥦 Order from Ronkies Food Mart';
  const fc=cart.filter(c=>c.type===type);
  document.getElementById('o-items').value=fc.length?fc.map(c=>`${c.name} × ${c.qty}`).join('\n'):'';
  document.getElementById('order-modal').classList.add('on');
}
function closeOrder(){document.getElementById('order-modal').classList.remove('on');}
function submitOrder(){
  const name=document.getElementById('o-name').value.trim();
  const phone=document.getElementById('o-phone').value.trim();
  const itms=document.getElementById('o-items').value.trim();
  if(!name||!phone||!itms){toast('⚠️ Please fill Name, Phone & Items');return;}
  const addr=document.getElementById('o-addr').value.trim();
  const note=document.getElementById('o-note').value.trim();
  const store=curO==='tech'?'Emmy Enterprises':'Ronkies Food Mart';
  let msg=`📦 *Order — ${store}*\n\n👤 ${name}\n📞 ${phone}`;
  if(addr)msg+=`\n📍 ${addr}`;
  msg+=`\n\n🛍 *Items:*\n${itms}`;
  if(note)msg+=`\n\n📝 ${note}`;
  msg+='\n\nPlease confirm and arrange delivery. Thank you! 🙏';
  window.open('https://wa.me/2349072206274?text='+encodeURIComponent(msg));
  closeOrder();toast('✅ Order sent!');
}

function openWA(num,store){window.open('https://wa.me/234'+num.replace(/^0/,'')+'?text='+encodeURIComponent('Hello '+store+'! 👋 I found you online and I\'d like to enquire. Please assist me.'));}
function dial(num){window.location.href='tel:+234'+num.replace(/^0/,'');}
function showSec(id,btn){
  document.querySelectorAll('.sec').forEach(s=>s.classList.remove('on'));
  document.querySelectorAll('.tab').forEach(b=>b.classList.remove('af','at'));
  document.getElementById('sec-'+id).classList.add('on');
  btn.classList.add(id==='tech'?'at':'af');
  const fb=document.getElementById('floatb');
  fb.textContent=id==='tech'?'📱 Order from Emmy':'📦 Place Food Order';
  fb.onclick=()=>openOrder(id);
}
function toast(msg){const t=document.getElementById('toast');t.textContent=msg;t.classList.add('show');clearTimeout(t._t);t._t=setTimeout(()=>t.classList.remove('show'),2400);}

buildF(FOOD,'food-filt','food');
buildF(TECH,'tech-filt','tech');
rGrid(FOOD,'food-grid','food');
rGrid(TECH,'tech-grid','tech');