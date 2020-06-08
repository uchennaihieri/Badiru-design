const Btns = [...document.querySelectorAll('.banner-btn')];
const productItem = document.querySelector('.product-card');


const database = [
    {
      sys: {
        id: "1",
        seller: "Johnny William",
      },
      fields: {
        name: "Men Watch",
        slug: "MenWatch",
        type: "first_class",
        price: 25.5,
        images: [
          {
            fields: {
              file: {
                url: 'product_01.jpg'
              }
            }
          }
        ]
      }
    },
    {
      sys: {
        id: "2",
        seller: "Johnny William",
      },
      fields: {
        name: "Men Watch",
        slug: "MenWatch",
        type: "second_class",
        price: 25.5,
        images: [
          {
            fields: {
              file: {
                url: 'product_02.jpg'
              }
            }
          }
        ]
      }
    },
    {
      sys: {
        id: "3",
        seller: "Johnny William",
      },
      fields: {
        name: "Men Watch",
        slug: "MenWatch",
        type: "regular",
        price: 25.5,
        images: [
          {
            fields: {
              file: {
                url: 'product_03.jpg'
              }
            }
          }
        ]
      }
    },
    {
      sys: {
        id: "4",
        seller: "Johnny William",
      },
      fields: {
        name: "Men Watch",
        slug: "MenWatch",
        type: "regular",
        price: 25.5,
        images: [
          {
            fields: {
              file: {
                url: 'product_05.jpg'
              }
            }
          }
        ]
      }
    },
    {
      sys: {
        id: "5",
        seller: "Johnny William",
      },
      fields: {
        name: "Men Watch",
        slug: "MenWatch",
        type: "second_class",
        price: 25.5,
        images: [
          {
            fields: {
              file: {
                url: 'product_06.jpg'
              }
            }
          }
        ]
      }
    },
    {
      sys: {
        id: "6",
        seller: "Johnny William",
      },
      fields: {
        name: "Men Watch",
        slug: "MenWatch",
        type: "first_class",
        price: 25.5,
        images: [
          {
            fields: {
              file: {
                url: 'product_06.jpg'
              }
            }
          }
        ]
      }
    },
  ];

// Format data
const formatData = data => {
  const tempItem = data.map(item => {
    const id = item.sys.id;
    const seller = item.sys.seller;
    const images = item.fields.images.map(image => image.fields.file.url);
    
    return {id, seller,...item.fields, images}
  })
  return tempItem
}

// Product list item
const myProductList = data => {
  let products = data.map( item => 
    `<div class="center card" >
        <img src=${`../images/${item.images[0]}`} alt=${item.name} />
        <h2>
            ${item.name}
        </h2>
        <a href="#">
            <button class="center features">features</button>
        </a>
      </div>`
)
  return products
}
let products = formatData(database).map(item => item);
productItem.innerHTML = myProductList(products).join('')


// Add event listeners
window.addEventListener('load', () => {
  Btns.map(btn => {
    btn.addEventListener('click', e => {
      const data = formatData(database);
      const currentItem = e.currentTarget.dataset.id;
      
      products = data.filter(item => item.type === currentItem);
      productItem.innerHTML = myProductList(products).join('')
    })
  })
})