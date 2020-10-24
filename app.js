async function letraAPI(){
	const cantor = document.getElementById("cantor").value
	const musica = document.getElementById("musica").value
	const response = await fetch("https://api.vagalume.com.br/search.php?apikey=660a4395f992ff67786584e238f501aa&art="+cantor+"&mus="+musica)
	const json = await response.json()
	try{
	document.getElementById("letra").innerHTML = json.mus[0].text
	}
	catch(err){
	document.getElementById("erro").innerHTML = "Erro ao encontar a letra"
}
}
