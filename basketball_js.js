let pr1El=document.getElementById("pr1")
let pr2El=document.getElementById("pr2")
function Homeup1()
{
    pr1El.textContent=Number(pr1El.textContent)+1
}
function Homeup2()
{
    pr1El.textContent=Number(pr1El.textContent)+2
}
function Homeup3()
{
    pr1El.textContent=Number(pr1El.textContent)+3
}
function Gup1()
{
    pr2El.textContent=Number(pr2El.textContent)+1
}
function Gup2()
{
    pr2El.textContent=Number(pr2El.textContent)+2
}
function Gup3()
{
    pr2El.textContent=Number(pr2El.textContent)+3
}
function Reset()
{
    pr1El.textContent=0
    pr2El.textContent=0
}