function toc_temp(l){var e=0,t=1;return`<div id='toc-post' class="d-inline-block px-3 py-2 my-3 bg_light rounded"><input id="toc-toggle" class="d-none" autocomplete="off" type="checkbox"/><label for="toc-toggle" id="toc-toggler" class="toc-toggler d-flex align-items-center"><span class="fw-light pe-3">Daftar Isi</span><span class="dropdown-toggle ms-auto"></span></label>${l.map((function(i,s){var a=i.level,o="";if(0==s)o+='<ul class="ps-3 pt-3 d-block d-none-check fs-7">';else if(e<a)o+='<ul class="ps-3 pt-2 fs-8"><li>',t++;else if(e>a&&t>1){for(var r=0;r<e-a;r++)o+="</li></ul>";t--}if(e=a,o+=s>0?"</li>":"",o+='<li class="mb-2">',o+='<a class="text-reset" href="#'+i.id+'">'+i.title+"</a>",s==l.length-1)for(var c=1;c<e;c++)o+="</li></ul>";return o})).join("").replace(/<li>\s*<\/li>/gi,"")}</div>`}function related_inline_temp(l){return`<div class='px-3 py-2 mb-4 border border-3 border-light rounded'>${l.title?`<div class='fw-light'><span>${l.title}</span></div>`:""}<ul class='list-unstyled'>${l.posts.map((function(l,e){return`<li class='mb-2'><a href='${l.url}'>${l.title}</a></li>`})).join("")}</ul></div>`}function related_temp(l){return(l.title?"<div class='widget-title position-relative  mb-3 text-uppercase fw-light'><span>"+l.title+"</span></div>":"")+"<div class='row row-cols-sm-2'>"+l.posts.map((function(l){return"<article class='item-post d-flex mb-3'>"+(l.img?"<div class='item-thumbnail me-4 align-self-center col-3' style='width:65px'><a class='rounded bg_light overflow-hidden d-block ratio ratio-4x3' href='"+l.url+"'><img alt='"+l.title+"' class='object-cover lazy-"+l.grup_id+" lazyload' data-src='"+l.img+"' loading='lazy' src='data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='/></a></div>":"")+"<div class='item-content col'><h5 class='item-title fs-7 mb-2' itemprop='headline'><a class='text-reset' href='"+l.url+"'>"+l.title+"</a></h5><div class='item-meta text-secondary d-flex flex-wrap fs-8'><small class='me-2'><svg aria-hidden='true' class='me-1 icon'><use xlink:href='#i-clock'/></svg>"+l.date+"</small></div></div></article>"})).join("")+"</div>"}function sidebar_temp(l){return(l.title?"<div class='widget-title position-relative fs-6 mb-3'><span>"+l.title+"</span></div>":"")+"<div class='row row-cols-sm-2 row-cols-lg-1'>"+l.posts.map((function(l,e){return"<div class='item-post d-flex mb-3'>"+(l.img?"<div class='item-thumbnail me-4 align-self-center col-3' style='width:65px'><a class='rounded bg_light overflow-hidden d-block ratio ratio-4x3' href='"+l.url+"'><img alt='"+l.title+"' class='object-cover lazy-"+l.grup_id+" lazyload' data-src='"+l.img+"' loading='lazy' src='data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='/></a></div>":"")+"<div class='item-content col'><h5 class='item-title fs-7 mb-2' itemprop='headline'><a class='text-reset' href='"+l.url+"'>"+l.title+"</a></h5><div class='item-meta text-secondary d-flex flex-wrap fs-8'><small class='me-2'><svg aria-hidden='true' class='me-1 icon'><use xlink:href='#i-clock'/></svg>"+l.date+"</small></div></div></div>"})).join("")+"</div>"}