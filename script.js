document.querySelectorAll('.copy-btn').forEach(btn=>{
btn.addEventListener('click',()=>{
const text=btn.parentElement.querySelector('pre').innerText;
navigator.clipboard.writeText(text);
btn.textContent='Copied!';
setTimeout(()=>btn.textContent='Copy',1500);
});
});