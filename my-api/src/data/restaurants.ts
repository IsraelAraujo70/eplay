import { Restaurant as RestaurantModel } from '../../../src/models/Restaurant'

export const Restaurantes: RestaurantModel[] = [
  {
    id: 1,
    avaliacao: 4.5,
    categoria: 'Hamburguer',
    destaque: true,
    descricao:
      'Deliciosos hamburgueres artesanais com blend especial de carnes nobres, pães frescos e molhos exclusivos. Ambiente aconchegante e atendimento premium.',
    image:
      'https://i.postimg.cc/tJtCY2vK/person-holding-delicious-burger-with-beef-yellow-cheese-bacon.jpg',
    nome: 'Burger Queen',
    cardapio: [
      {
        descricao:
          'Hambúrguer duplo com queijo cheddar, bacon crocante, cebola caramelizada e molho especial da casa no pão brioche.',
        id: 1,
        foto: 'https://i.postimg.cc/xCY9BBPW/PizzaIte.png',
        nome: 'Royal Double',
        preco: 32,
        porcao: '300g'
      },
      {
        descricao:
          'Hambúrguer vegetariano de grão de bico, cogumelos, alface, tomate e maionese vegana no pão integral.',
        id: 2,
        foto: 'https://i.postimg.cc/xCY9BBPW/PizzaIte.png',
        nome: 'Green Queen',
        preco: 28,
        porcao: '250g'
      },
      {
        descricao:
          'Hambúrguer de frango empanado, queijo provolone, rúcula, tomate seco e maionese de ervas no pão australiano.',
        id: 3,
        foto: 'https://i.postimg.cc/xCY9BBPW/PizzaIte.png',
        nome: 'Chicken Crispy',
        preco: 30,
        porcao: '280g'
      },
      {
        descricao:
          'Hambúrguer premium com blend de costela, queijo gouda, bacon, cebola crispy e molho barbecue no pão pretzel.',
        id: 4,
        foto: 'https://i.postimg.cc/xCY9BBPW/PizzaIte.png',
        nome: 'Smoked Master',
        preco: 38,
        porcao: '320g'
      },
      {
        descricao:
          'Hambúrguer picante com pimenta jalapeño, queijo pepper jack, guacamole, nachos crocantes e maionese chipotle.',
        id: 5,
        foto: 'https://i.postimg.cc/xCY9BBPW/PizzaIte.png',
        nome: 'Mexican Burger',
        preco: 34,
        porcao: '280g'
      }
    ]
  },
  {
    id: 2,
    avaliacao: 4.8,
    categoria: 'Italiana',
    destaque: false,
    descricao:
      'Autêntica culinária italiana com massas feitas à mão, molhos tradicionais e ingredientes importados. Pizza napolitana assada em forno a lenha.',
    image: 'https://i.postimg.cc/GhtGZDBc/La-Dolce-Vita-Trattoria.png',
    nome: 'La Pasta',
    cardapio: [
      {
        descricao: 'Massa fresca ao molho pomodoro com manjericão e parmesão',
        id: 1,
        foto: 'https://i.postimg.cc/xCY9BBPW/PizzaIte.png',
        nome: 'Spaghetti al Pomodoro',
        preco: 42,
        porcao: '400g'
      },
      {
        descricao: 'Massa recheada com ricota e espinafre ao molho branco',
        foto: 'https://i.postimg.cc/xCY9BBPW/PizzaIte.png',
        nome: 'Ravioli di Ricotta',
        preco: 48,
        porcao: '350g',
        id: 2
      },
      {
        descricao: 'Pizza napolitana com muçarela de búfala e manjericão',
        id: 3,
        foto: 'https://i.postimg.cc/xCY9BBPW/PizzaIte.png',
        nome: 'Pizza Margherita',
        preco: 55,
        porcao: '30cm'
      },
      {
        descricao: 'Risoto cremoso com funghi e trufa negra',
        id: 4,
        foto: 'https://i.postimg.cc/xCY9BBPW/PizzaIte.png',
        nome: 'Risotto al Funghi',
        preco: 68,
        porcao: '400g'
      },
      {
        descricao: 'Lasanha à bolonhesa gratinada com queijo',
        id: 5,
        foto: 'https://i.postimg.cc/xCY9BBPW/PizzaIte.png',
        nome: 'Lasagna alla Bolognese',
        preco: 45,
        porcao: '450g'
      }
    ]
  },
  {
    id: 3,
    avaliacao: 4.3,
    categoria: 'Japonesa',
    destaque: false,
    descricao:
      'Sushi e sashimi preparados com peixe fresco premium. Pratos quentes tradicionais e combinados especiais. Ambiente zen e serviço impecável.',
    image: 'https://i.postimg.cc/FHJcKQg8/sushi.png',
    nome: 'Sushi House',
    cardapio: [
      {
        descricao: 'Combinado de sushi e sashimi premium com 16 peças',
        id: 1,
        foto: 'https://i.postimg.cc/xCY9BBPW/PizzaIte.png',
        nome: 'Combinado Premium',
        preco: 75,
        porcao: '16 peças'
      },
      {
        descricao:
          'Roll especial com salmão grelhado, cream cheese e cebolinha',
        id: 2,
        foto: 'https://i.postimg.cc/xCY9BBPW/PizzaIte.png',
        nome: 'Hot Philadelphia',
        preco: 45,
        porcao: '8 peças'
      },
      {
        descricao: 'Seleção de sashimis frescos de atum e salmão',
        id: 3,
        foto: 'https://i.postimg.cc/xCY9BBPW/PizzaIte.png',
        nome: 'Sashimi Mix',
        preco: 58,
        porcao: '12 peças'
      },
      {
        descricao: 'Tempurá de camarão crocante com molho especial',
        id: 4,
        foto: 'https://i.postimg.cc/xCY9BBPW/PizzaIte.png',
        nome: 'Ebi Tempurá',
        preco: 52,
        porcao: '6 unidades'
      },
      {
        descricao: 'Temaki de atum picante com cebolinha e pepino',
        id: 5,
        foto: 'https://i.postimg.cc/xCY9BBPW/PizzaIte.png',
        nome: 'Spicy Tuna Temaki',
        preco: 35,
        porcao: '1 unidade'
      }
    ]
  },
  {
    id: 4,
    avaliacao: 4.6,
    categoria: 'Mexicana',
    destaque: false,
    descricao:
      'Sabores picantes e autênticos do México. Tacos, burritos e quesadillas preparados com ingredientes frescos e receitas tradicionais mexicanas.',
    image:
      'https://i.postimg.cc/y86WSCHv/delicious-tacos-wooden-board-high-angle.jpg',
    nome: 'El Taco',
    cardapio: [
      {
        descricao: 'Tacos macios com carne temperada, cebola e coentro',
        id: 1,
        foto: 'https://i.postimg.cc/xCY9BBPW/PizzaIte.png',
        nome: 'Tacos al Pastor',
        preco: 28,
        porcao: '3 unidades'
      },
      {
        descricao: 'Burrito recheado com frango, arroz, feijão e guacamole',
        id: 2,
        foto: 'https://i.postimg.cc/xCY9BBPW/PizzaIte.png',
        nome: 'Burrito de Pollo',
        preco: 32,
        porcao: '400g'
      },
      {
        descricao: 'Nachos com queijo derretido, pico de gallo e jalapeños',
        id: 3,
        foto: 'https://i.postimg.cc/xCY9BBPW/PizzaIte.png',
        nome: 'Nachos Supremos',
        preco: 35,
        porcao: 'Para 2 pessoas'
      },
      {
        descricao: 'Quesadilla com queijo, cogumelos e pimentões',
        id: 4,
        foto: 'https://i.postimg.cc/xCY9BBPW/PizzaIte.png',
        nome: 'Quesadilla Vegetariana',
        preco: 30,
        porcao: '2 unidades'
      },
      {
        descricao: 'Enchiladas de carne com molho vermelho e crema',
        id: 5,
        foto: 'https://i.postimg.cc/xCY9BBPW/PizzaIte.png',
        nome: 'Enchiladas Rojas',
        preco: 38,
        porcao: '3 unidades'
      }
    ]
  },
  {
    id: 5,
    avaliacao: 4.7,
    categoria: 'Brasileira',
    destaque: false,
    descricao:
      'O verdadeiro sabor da cozinha brasileira. Feijoada, moqueca, acarajé e outros pratos típicos preparados com ingredientes selecionados e temperos especiais.',
    image:
      'https://i.postimg.cc/nhTjdcky/flat-lay-composition-with-delicious-brazilian-food.jpg',
    nome: 'Comida Brasileira',
    cardapio: [
      {
        descricao: 'Feijoada completa com arroz, couve, farofa e laranja',
        id: 1,
        foto: 'https://i.postimg.cc/xCY9BBPW/PizzaIte.png',
        nome: 'Feijoada Tradicional',
        preco: 45,
        porcao: 'Para 1 pessoa'
      },
      {
        descricao: 'Moqueca de peixe com arroz, pirão e farofa',
        id: 2,
        foto: 'https://i.postimg.cc/xCY9BBPW/PizzaIte.png',
        nome: 'Moqueca Baiana',
        preco: 52,
        porcao: '500g'
      },
      {
        descricao: 'Acarajé com vatapá, camarão e salada',
        id: 3,
        foto: 'https://i.postimg.cc/xCY9BBPW/PizzaIte.png',
        nome: 'Acarajé da Casa',
        preco: 28,
        porcao: '2 unidades'
      },
      {
        descricao: 'Picanha grelhada com arroz, feijão e vinagrete',
        id: 4,
        foto: 'https://i.postimg.cc/xCY9BBPW/PizzaIte.png',
        nome: 'Picanha na Brasa',
        preco: 65,
        porcao: '400g'
      },
      {
        descricao: 'Bobó de camarão com arroz e farofa',
        id: 5,
        foto: 'https://i.postimg.cc/xCY9BBPW/PizzaIte.png',
        nome: 'Bobó de Camarão',
        preco: 58,
        porcao: '450g'
      }
    ]
  }
]
