var imag = document.getElementsByClassName("Expand enterAnimationContainer")
for (let i = 0; i < imag.length; i++) {
	imag_div = imag[i].getElementsByTagName("div")[0]
	console.log(imag_div.classList)
	imag_div.className = "Bdrs(8px) Bgz(cv) Bgp(c) Ov(h) StretchedBox Ir(p) Cnt($blank)::a StretchedBox::a Bg($inherit)::a Scale(1.3)::a Scale(1.2)::a--s Blur(0px)::a"
}

