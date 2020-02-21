var api_url ='https://tinyurl.com/profit-api'

let card1 = {
    icon:"tune",
    title: "Parametros de Pricing",
    img:"https://www.futureagenda.org/wp-content/uploads/2019/02/iStock_000003287087Medium-1280x800-c-center.jpg",
    panel_color:"indigo darken-1",
    subtitle:"Nesta seção você pode definir as metas de faturamento, as margens minimas e máximas com as quais deseja trabalhar e quais produtos podem ou não seguir as indicações do sistema PROFIT+ ARTIFICIAL INTELLIGENCE",
    links:[{title:"DEFINIR METAS",  go_to:"#"},{title:"PARAMETROS DE PRICING",  go_to:"#"}]
}

let card2 = {
    icon:"zoom_in",
    title: "Gestão de Pesquisas",
    img:"https://apicms.thestar.com.my/uploads/images/2019/10/29/353925.png",
    panel_color:"deep-purple accent-2",
    subtitle:"Aqui você pode explorar os dados originados das pesquisas feitas junto aos concorrentes. Aqui voce encontra também um painel de controle para alterar o direcionamento dos nossos pesquisadores.",
    links:[{title:"DADOS DE PESQUISA",  go_to:"#"},{title:"AGENDAMENTO",  go_to:"#"},{title:"CONCORRENTES",  go_to:"#"}]
}

let card3 = {
    icon:"add_shopping_cart",
    title: "Gestão de Preços",
    img:"https://www.supermarketnews.com/sites/supermarketnews.com/files/styles/article_featured_retina/public/Giant_Camp_Hill_Beer__Wine_Eatery_1_0.png?itok=YjELWc2P",
    panel_color:"pink darken-4",
    subtitle:"Aqui você encontra a lista completa de produtos com o seu respectivo preço, resultado do sistema de pricing PROFIT+. O painel permite a edição direta do preço final e exporta  para o ERP.",
    links:[
        {title:"LISTA DE PREÇOS DE PRODUTOS",  go_to:"#"},
        {title:"DOWNLOAD DE ARQUIVOS",  go_to:"#"}
    ]

}

let card4 = {
    icon:"insert_chart",
    title: "Analitics",
    img:"https://i1.wp.com/blog.idwall.co/wp-content/uploads/2019/08/woman-holding-phone-browsing-social-media-1.jpg?fit=800%2C534&ssl=1",
    panel_color:"green accent-4",
    subtitle:"Aqui voce tem acesso a um sistema completo de Business Inteligence (BI) com a consolidação dos dados da rede de lojas e as informações da concorrência.",
    links:[
        {title:"COMPETITIVIDADE",  go_to:"#"},
        {title:"DADOS DE PESQUISAS",  go_to:"#"},
        {title:"SORTIMENTO",  go_to:"#"},
        {title:"GESTÃO COMERCIAL",  go_to:"#"},
        {title:"NEGOCIAÇÕES",  go_to:"#"}
    ]
}

var cards = [card1,card2,card3,card4]



document.addEventListener("DOMContentLoaded", function() {
    
    let grid = document.getElementById("card-grid")
    let str_html = ''
    cards.forEach(function (card, index) {
        console.log(card.title, index);
        str_html +=`
        <div class="col s12 m6 l3 center-align">
            <div class="col s12">
                <div class="card-panel ` + card.panel_color + `">
                <i class="large material-icons white-text text-darken-4">` + card.icon + `</i>
    
                </div>
                <div class="card-panel">
                    <span class="blue-text text-subtitle">` + card.subtitle + `</span>
                </div>
                <div class="card">
                    <div class="card-image">
                    <img src="` + card.img + `">
                    <div class="content-overlay"></div>
                    <span class="card-title card-title-text">` + card.title + `</span>
                    </div>
                    <div class="card-content">
                    <p>SELECIONE</p>
                    </div>
                    <div class="card-action">
                    ` + add_links(card.links) + `
                    </div>
                </div>
            </div>
        </div> 
        
        `
    }); 

    grid.innerHTML = str_html


});

function add_links(links){
    let string_html = ''
    links.forEach(function (link, index) {
        string_html +=`
            <a class="lnk" href="`+ link.go_to + `">`+ link.title + `</a>
            </br>
            <div class="divider"></div>             
        `    
    })
   
    return string_html;
}
