document.addEventListener('DOMContentLoaded',()=>{
    const nb=document.getElementById('navbar');window.addEventListener('scroll',()=>nb.classList.toggle('scrolled',window.scrollY>50));
    const h=document.getElementById('hamburger'),l=document.getElementById('navLinks');
    h.addEventListener('click',()=>{h.classList.toggle('active');l.classList.toggle('active')});
    l.querySelectorAll('.nav-link').forEach(a=>a.addEventListener('click',()=>{h.classList.remove('active');l.classList.remove('active')}));
    
    document.getElementById('bookingForm').addEventListener('submit',e=>{
        e.preventDefault();const d=Object.fromEntries(new FormData(e.target));d.id=Date.now();d.submittedAt=new Date().toISOString();d.status='Pending Review';
        const all=JSON.parse(localStorage.getItem('ritz_bookings')||'[]');all.push(d);localStorage.setItem('ritz_bookings',JSON.stringify(all));
        e.target.reset();showToast('PROPOSAL REQUEST RECEIVED. WE WILL CONTACT YOU SHORTLY.');
    });
});
function bookSvc(s){
    const select=document.getElementById('svcSelect');
    Array.from(select.options).forEach(o=>{if(o.value.includes(s))select.value=o.value});
    document.getElementById('booking').scrollIntoView({behavior:'smooth'})
}
function showToast(m){const t=document.getElementById('toast');t.textContent=m;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),4000)}
window.bookSvc=bookSvc;
