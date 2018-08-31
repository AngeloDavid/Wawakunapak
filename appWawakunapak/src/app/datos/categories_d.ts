import {GroupCategory, Category} from '../../interfaces/categories';
import {User} from '../../interfaces/user';
import {GroupGame,game,option} from '../../interfaces/game';
export class Globals{
    

    categories_dt: GroupCategory []= [
        {
        id:1,
        title:'Vocabulario',
        titlek:'',
        colorBt:'#662D91',
        icon:'..    /../assets/imgs/home/vocabulario.png',        
        list: [
            {
                id:1,
                title:'A',
                icon:'../../assets/imgs/categorias/a.png',
                sing:'assets/sounds/a.mp3',
                isvocal:true,
                est:true
            },
            {
                id:2,
                title:'I',
                icon:'../../assets/imgs/categorias/i.png',
                sing:'assets/sounds/i.mp3',
                isvocal:true,
                est:true
            },
            {
                id:3,
                title:'U',
                icon:'../../assets/imgs/categorias/u.png',
                sing:'assets/sounds/u.mp3',
                isvocal:true,
                est:true
            },
            {
                id:4,
                title:'CH',
                icon:'../../assets/imgs/categorias/ch.png',
                sing:'assets/sounds/ch.mp3',
                isvocal:false,
                est:true
            },
            {
                id:5,
                title:'H',
                icon:'../../assets/imgs/categorias/h.png',
                sing:'assets/sounds/h.mp3',
                isvocal:false,
                est:true
            },
            {
                id:6,
                title:'K',
                icon:'../../assets/imgs/categorias/k.png',
                sing:'assets/sounds/k.mp3',
                isvocal:false,
                est:true
            },
            {
                id:7,
                title:'L',
                icon:'../../assets/imgs/categorias/l.png',
                sing:'assets/sounds/l.mp3',
                isvocal:false,
                est:true
            },
            {
                id:8,
                title:'LL',
                icon:'../../assets/imgs/categorias/ll.png',
                sing:'assets/sounds/ll.mp3',
                isvocal:false,
                est:true
            },
            {
                id:9,
                title:'M',
                icon:'../../assets/imgs/categorias/m.png',
                sing:'assets/sounds/m.mp3',
                isvocal:false,
                est:true
            },
            {
                id:10,
                title:'N',
                icon:'../../assets/imgs/categorias/n.png',
                sing:'assets/sounds/n.mp3',
                isvocal:false,
                est:true
            },
            {
                id:11,
                title:'Ñ',
                icon:'../../assets/imgs/categorias/nn.png',
                sing:'assets/sounds/nn.mp3',
                isvocal:false,
                est:true
            },
            {
                id:12,
                title:'P',
                icon:'../../assets/imgs/categorias/p.png',
                sing:'assets/sounds/p.mp3',
                isvocal:false,
                est:true
            },
            {
                id:13,
                title:'R',
                icon:'../../assets/imgs/categorias/r.png',
                sing:'assets/sounds/r.mp3',
                isvocal:false,
                est:true
            },
            {
                id:14,
                title:'T',
                icon:'../../assets/imgs/categorias/t.png',
                sing:'assets/sounds/t.mp3',
                isvocal:false,
                est:true
            },
            {
                id:15,
                title:'TS',
                icon:'../../assets/imgs/categorias/ts.png',
                sing:'assets/sounds/ts.mp3',
                isvocal:false,
                est:true
            },
            {
                id:16,
                title:'S',
                icon:'../../assets/imgs/categorias/s.png',
                sing:'assets/sounds/s.mp3',
                isvocal:false,
                est:true
            },
            {
                id:17,
                title:'SH',
                icon:'../../assets/imgs/categorias/sh.png',
                sing:'assets/sounds/sh.mp3',
                isvocal:false,
                est:true
            },
            {
                id:18,
                title:'W',
                icon:'../../assets/imgs/categorias/w.png',
                sing:'assets/sounds/w.mp3',
                isvocal:false,
                est:true
            },
            {
                id:19,
                title:'Y',
                icon:'../../assets/imgs/categorias/y.png',
                sing:'assets/sounds/y.mp3',
                isvocal:false,
                est:true
            },
            {
                id:20,
                title:'z',
                icon:'../../assets/imgs/categorias/z.png',
                sing:'assets/sounds/z.mp3',
                isvocal:false,
                est:true
            }
        ],
        est:true        
        },
        {
            id:2,
            title:'Numeros',
            titlek:'Yupaykuna',
            colorBt:'#006837',
            icon:'../../assets/imgs/home/numeros.png',
            list: [
                {
                    id:1,
                    title:'uno',
                    titlek:'Shunk',
                    icon:'../../assets/imgs/categorias/1.png',
                    sing:'assets/sounds/1.mp3',
                    est:true
                },
                {
                    id:2,
                    title:'dos',
                    titlek:'Iskay',
                    icon:'../../assets/imgs/categorias/2.png',
                    sing:'assets/sounds/2.mp3',
                    est:true
                },
                {
                    id:3,
                    title:'tres',
                    titlek:'Kimsa',
                    icon:'../../assets/imgs/categorias/3.png',
                    sing:'assets/sounds/3.mp3',
                    est:true
                },   
                {
                    id:4,
                    title:'cuatro',
                    titlek:'Chusku',
                    icon:'../../assets/imgs/categorias/4.png',
                    sing:'assets/sounds/4.mp3',
                    est:true
                },
                {
                    id:5,
                    title:'cinco',
                    titlek:'Pichka',
                    icon:'../../assets/imgs/categorias/5.png',
                    sing:'assets/sounds/5.mp3',
                    est:true
                },
                {
                    id:6,
                    title:'seis',
                    titlek:'Sukta',
                    icon:'../../assets/imgs/categorias/6.png',
                    sing:'assets/sounds/6.mp3',
                    est:true
                },
                {
                    id:7,
                    title:'siete',
                    titlek:'Kanchis',
                    icon:'../../assets/imgs/categorias/7.png',
                    sing:'assets/sounds/7.mp3',
                    est:true
                },
                {
                    id:8,
                    title:'ocho',
                    titlek:'Pusak',
                    icon:'../../assets/imgs/categorias/8.png',
                    sing:'assets/sounds/8.mp3',
                    est:true
                },
                {
                    id:9,
                    title:'nuevo',
                    titlek:'Iskun',
                    icon:'../../assets/imgs/categorias/9.png',
                    sing:'assets/sounds/9.mp3',
                    est:true
                },
                {
                    id:10,
                    title:'Diez',
                    titlek:'Chunka',
                    icon:'../../assets/imgs/categorias/10.png',
                    sing:'assets/sounds/10.mp3',
                    est:true
                }                      
            ],
            est:true        
        },
        {
            id:3,
            title:'Colores',
            titlek:'Tullpukuna',
            icon:'../../assets/imgs/home/colores.png',
            colorBt:'#FFFF00',
            list: [
                {
                    id:1,
                    title:'amarrillo',
                    titlek:'Killu',
                    icon:'../../assets/imgs/categorias/amarillo.png',
                    sing:'assets/sounds/amarillo.mp3',
                    est:true
                },               
                {
                    id:2,
                    title:'azul',
                    titlek:'Ankas',
                    icon:'../../assets/imgs/categorias/azul.png',
                    sing:'assets/sounds/azul.mp3',
                    est:true
                },                
                {
                    id:3,
                    title:'cafe',
                    titlek:'Paku',
                    icon:'../../assets/imgs/categorias/cafe.png',
                    sing:'assets/sounds/cafe.mp3',
                    est:true
                },   
                {
                    id:4,
                    title:'negro',
                    titlek:'Yana',
                    icon:'../../assets/imgs/categorias/negro.png',
                    sing:'assets/sounds/negro.mp3',
                    est:true
                },  
                {
                    id:5,
                    title:'rojo',
                    titlek:'Puka',
                    icon:'../../assets/imgs/categorias/rojo.png',
                    sing:'assets/sounds/rojo.mp3',
                    est:true
                },        
                {
                    id:6,
                    title:'verde',
                    titlek:'Waylla',
                    icon:'../../assets/imgs/categorias/verde.png',
                    sing:'assets/sounds/verde.mp3',
                    est:true
                }      
            ],
            est:true        
        } ,
        {
            id:4,
            title:'Cuerpo Humano',
            titlek:'Runa aycha',
            icon:'../../assets/imgs/home/cuerpo.png',
            colorBt:'#FF7900',
            list: [
                {
                    id:1,
                    title:'cabeza',
                    titlek:'Uma',
                    icon:'../../assets/imgs/categorias/cabeza.png',
                    sing:'assets/sounds/cabeza.mp3',
                    est:true
                },    
                {
                    id:2,
                    title:'ojos',
                    titlek:'Ñawi',
                    icon:'../../assets/imgs/categorias/ojos.png',
                    sing:'assets/sounds/ojos.mp3',
                    est:true
                },            
                {
                    id:3,
                    title:'boca',
                    titlek:'Shimi',
                    icon:'../../assets/imgs/categorias/boca.png',
                    sing:'assets/sounds/boca.mp3',
                    est:true
                },                
                {
                    id:4,
                    title:'nariz',
                    titlek:'Sinka',
                    icon:'../../assets/imgs/categorias/nariz.png',
                    sing:'assets/sounds/nariz.mp3',
                    est:true
                },   
                {
                    id:5,
                    title:'oido',
                    titlek:'Rinri',
                    icon:'../../assets/imgs/categorias/oido.png',
                    sing:'assets/sounds/oido.mp3',
                    est:true
                },                                
                {
                    id:6,
                    title:'mano',
                    titlek:'Maki',
                    icon:'../../assets/imgs/categorias/mano.png',
                    sing:'assets/sounds/mano.mp3',
                    est:true
                },  
                {
                    id:7,
                    title:'pie',
                    titlek:'Chaki',
                    icon:'../../assets/imgs/categorias/pie.png',
                    sing:'assets/sounds/pie.mp3',
                    est:true
                },              
            ],
            est:true        
        } ,
        {
            id:5,
            title:'Familia',
            titlek:'Ayllukuna',
            icon:'../../assets/imgs/home/familia.png',
            colorBt:'#ED1C24',
            list: [
                {
                    id:1,
                    title:'abuelo',
                    titlek:'Hatun tayta',
                    icon:'../../assets/imgs/categorias/abuelito.png',
                    sing:'assets/sounds/abuelo.mp3',
                    est:true
                },               
                {
                    id:2,
                    title:'abuela',
                    titlek:'Hatun mama',
                    icon:'../../assets/imgs/categorias/abuelita.png',
                    sing:'assets/sounds/abuela.mp3',
                    est:true
                },                
                {
                    id:3,
                    title:'papa',
                    titlek:'Tayta',
                    icon:'../../assets/imgs/categorias/papa.png',
                    sing:'assets/sounds/papa.mp3',
                    est:true
                },  
                {
                    id:4,
                    title:'mama',
                    titlek:'Mama',
                    icon:'../../assets/imgs/categorias/mama.png',
                    sing:'assets/sounds/mama.mp3',
                    est:true
                },              
            ],
            est:true        
        } ,
        {
            id:6,
            title:'Animales',
            titlek:'Wiwakuna',
            icon:'../../assets/imgs/home/animal.png',
            colorBt:'#662D91',
            list: [
                {
                    id:1,
                    title:'perro',
                    titlek:'Allku',
                    icon:'../../assets/imgs/categorias/perro.png',
                    sing:'assets/sounds/perro.mp3',
                    est:true
                },               
                {
                    id:2,
                    title:'pollito',
                    titlek:'Kulta',
                    icon:'../../assets/imgs/categorias/pollito.png',
                    sing:'assets/sounds/pollito.mp3',
                    est:true
                },                
                {
                    id:3,
                    title:'conejo',
                    titlek:'Wallinku',
                    icon:'../../assets/imgs/categorias/conejo.png',
                    sing:'assets/sounds/conejo.mp3',
                    est:true
                },   
                {
                    id:4,
                    title:'gallina',
                    titlek:'Atallpa',
                    icon:'../../assets/imgs/categorias/gallina.png',
                    sing:'assets/sounds/gallina.mp3',
                    est:true
                },    
                {
                    id:5,
                    title:'gato',
                    titlek:'Misi',
                    icon:'../../assets/imgs/categorias/gato.png',
                    sing:'assets/sounds/gato.mp3',
                    est:true
                },
                {
                    id:6,
                    title:'hormiga',
                    titlek:'Añanku',
                    icon:'../../assets/imgs/categorias/hormiga.png',
                    sing:'assets/sounds/hormiga.mp3',
                    est:true
                },          
            ],
            est:true        
        } ,
        {
            id:7,
            title:'Frutas',
            titlek:'Rurukuna',
            icon:'../../assets/imgs/home/frutas.png',
            colorBt:'#006837',
            list: [
                {
                    id:1,
                    title:'banana',
                    titlek:'Pal anta',
                    icon:'../../assets/imgs/categorias/banana.png',
                    sing:'assets/sounds/banana.mp3',
                    est:true
                },               
                {
                    id:2,
                    title:'naranja',
                    titlek:'Chilina',
                    icon:'../../assets/imgs/categorias/naranja.png',
                    sing:'assets/sounds/naranja.mp3',
                    est:true
                },                
                {
                    id:3,
                    title:'piña',
                    titlek:'Chiwila',
                    icon:'../../assets/imgs/categorias/pina.png',
                    sing:'assets/sounds/pina.mp3',
                    est:true
                },   
                {
                    id:4,
                    title:'uvas',
                    titlek:'Paku',
                    icon:'../../assets/imgs/categorias/uvas.png',
                    sing:'assets/sounds/uvas.mp3',
                    est:true
                },  
                {
                    id:5,
                    title:'capuli',
                    titlek:'Kapulli',
                    icon:'../../assets/imgs/categorias/capuli.png',
                    sing:'assets/sounds/capuli.mp3',
                    est:false
                }, 
                {
                    id:6,
                    title:'manzana',
                    titlek:'Manzana',
                    icon:'../../assets/imgs/categorias/manzana.png',
                    sing:'assets/sounds/manzana.mp3',
                    est:true
                }, 
                {
                    id:7,
                    title:'aguacate',
                    titlek:'Palta',
                    icon:'../../assets/imgs/categorias/aguacate.png',
                    sing:'assets/sounds/aguacate.mp3',
                    est:true
                }, 
                {
                    id:8,
                    title:'Chirimoya',
                    titlek:'Ananas',
                    icon:'../../assets/imgs/categorias/chirimoya.png',
                    sing:'assets/sounds/chirimoya.mp3',
                    est:true
                }, 
                {
                    id:9,
                    title:'papaya',
                    titlek:'papaya',
                    icon:'../../assets/imgs/categorias/papaya.png',
                    sing:'assets/sounds/papaya.mp3',
                    est:true
                },           
            ],
            est:true        
        },
        {
            id:8,
            title:'SALUDOS',
            titlek:'NAPAYKUNA',
            icon:'../../assets/imgs/home/saludos.png',
            colorBt:'#FFFF00',
            list: [
                {
                    id:1,
                    title:'hola',
                    titlek:'IMANALLA',
                    icon:'../../assets/imgs/categorias/hola.png',
                    sing:'assets/sounds/hola.mp3',
                    est:true
                },
                {
                    id:2,
                    title:'Buenos Días',
                    titlek:'ALLI PUNCHA',
                    icon:'../../assets/imgs/categorias/dia.png',
                    sing:'assets/sounds/dia.mp3',
                    est:true
                }  ,
                {
                    id:3,
                    title:'Buenas Tardes',
                    titlek:'ALLI chishi',
                    icon:'../../assets/imgs/categorias/tarde.png',
                    sing:'assets/sounds/tarde.mp3',
                    est:true
                },
                {
                    id:4,
                    title:'Buenas Noche',
                    titlek:'ALLI TUTA',
                    icon:'../../assets/imgs/categorias/noche.png',
                    sing:'assets/sounds/noche.mp3',
                    est:true
                } ,
                {
                    id:5,
                    title:'Adios',
                    titlek:'MINCHAKAMA',
                    icon:'../../assets/imgs/categorias/adios.png',
                    sing:'assets/sounds/adios.mp3',
                    est:true
                }       

            ],
            est:true        
        }
    ];
    
   
    listGame:GroupGame []= [
        {
            id:1,
            title:'Ordenar palabras',
            colorBt:'#662D91',  
            img:'../../assets/imgs/games/1.png'   ,
            listOpcion:[],       
            est:true
        },
        {
            id:2,
            title:'Relacionar Sonidos',
            colorBt:'#006837', 
            img:'../../assets/imgs/games/2.png'   , 
            listOpcion:[
            ],          
            est:true
        },
        {
            id:3,
            title:'Relacionar Palabras',
            colorBt:'#FF7900',
            img:'../../assets/imgs/games/3.png'   ,
            est:true
        },
        {
            id:4,
            title:'Relacionar Objetos',
            img:'../../assets/imgs/games/4.png'   ,
            colorBt:'#ED1C24',
            est:true
        }
    ];

    user_dt:User={
        id:1,
        nombre:'Ramiro Escobar',
        edad:10,
        puntaje:0,
        img:'../../assets/imgs/perfil/perfil.png',
        imgn:'../../assets/imgs/perfil/perfiln.png',
        isboy:true
    }
    
    
}