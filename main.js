var api_url ='https://tinyurl.com/profit-api'

let card1 = {
    icon:"tune",
    title: "Cadastro e Parâmetros",
    img:"https://www.futureagenda.org/wp-content/uploads/2019/02/iStock_000003287087Medium-1280x800-c-center.jpg",
    panel_color:"indigo darken-1",
    subtitle:"Cálculos e definição de metas e parâmetros estratégicos que resultarão nas recomendações de preços para todas as categorias, produtos e lojas.",
    links:[{title:"DEFINIR METAS",  go_to:"/metas.html"},{title:"PARÂMETROS DE PRICING",  go_to:"#"}]
}

let card2 = {
    icon:"zoom_in",
    title: "Gestão de Pesquisas",
    img:"https://i1.wp.com/blog.idwall.co/wp-content/uploads/2019/08/woman-holding-phone-browsing-social-media-1.jpg?fit=800%2C534&ssl=1",
    panel_color:"deep-purple accent-2",
    subtitle:"Definição do Cronograma de Pesquisas e Análise dos dados de produtos e preços coletados nos concorrentes, que serão utilizados nas recomendações de preços.",
    links:[{title:"CRONOGRAMA",  go_to:"#"},{title:"AGENDAMENTO",  go_to:"#"},{title:"RECEBIMENTO",  go_to:"#"}]
}

let card3 = {
    icon:"add_shopping_cart",
    title: "Gestão de Preços",
    img:"https://www.supermarketnews.com/sites/supermarketnews.com/files/styles/article_featured_retina/public/Giant_Camp_Hill_Beer__Wine_Eatery_1_0.png?itok=YjELWc2P",
    panel_color:"pink darken-4",
    subtitle:"Análise das Recomendações de Preços com base nos parâmetros e inteligência artificial, onde é possível visualizar o cálculo dos impactos em competitividade e margens antes da exportação ao Sistema ERP da empresa.",
    links:[
        {title:"PREÇOS REGULARES",  go_to:"#"},
        {title:"ANÁLISE DE CENÁRIOS",  go_to:"#"}
    ]

}

let card4 = {
    icon:"insert_chart",
    title: "Análises e Negociações",
    img:"https://apicms.thestar.com.my/uploads/images/2019/10/29/353925.png",
    panel_color:"green accent-4",
    subtitle:"Painéis de B.I. (Business Intelligence) com análises de competitividade, vendas, margens e dados para potencializar a negociação com fornecedores.",
    links:[
        {title:"COMPETITIVIDADE",  go_to:"#"},
        {title:"DADOS DE PESQUISAS",  go_to:"#"},
        {title:"SORTIMENTO PDV",  go_to:"#"},
        {title:"GESTÃO DE CATEGORIAS",  go_to:"#"},
        {title:"NEGOCIAÇÕES",  go_to:"#"}
    ]
}

var cards = [card1,card2,card3,card4]

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, options);
});

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
                <div class="card-panel card-com-texto">
                    <span class="blue-text text-subtitle">` + card.subtitle + `</span>
                </div>
                <div class="card card-com-links">
                    <div class="card-image" style="background-image: url(` + card.img + `); background-size: cover;">
                        <div class="content-overlay"></div>
                        <span class="card-title card-title-text z-depth-5">` + card.title + `</span>
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
            <a class="lnk" href="`+ link.go_to + `"><span>`+ link.title + `</span></a>
            <div class="divider"></div>             
        `    
    })
   
    return string_html;
}