fetch("projects.json", {cache:"no-store"}).then(r=>r.json()).then(projects=>{
  const groups={};
  projects.forEach(p=>{ const key=p.category||"PROJECTS"; (groups[key]??=[]).push(p); });
  const app=document.getElementById("app");
  app.innerHTML="";
  Object.entries(groups).forEach(([cat,items])=>{
    const section=document.createElement("section");
    section.className="group";
    section.innerHTML=`<h2>${cat}</h2><div class="grid"></div>`;
    const grid=section.querySelector(".grid");
    items.forEach(p=>{
      const slug=p.slug || p.id || p.title.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");
      const card=document.createElement("article");
      card.className="card";
      card.innerHTML=`<img src="${p.image}" alt="${p.title}"><div class="cardbody"><div class="title">${p.title}</div><a class="view" href="viewer.html?id=${encodeURIComponent(slug)}">VIEW PROJECT</a></div>`;
      grid.appendChild(card);
    });
    app.appendChild(section);
  });
}).catch(()=>{document.getElementById("app").innerHTML='<div class="loading">Project data could not be loaded.</div>';});
