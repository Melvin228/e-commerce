import React from 'react'
import Grid from '@material-ui/core/Grid';

//Components
import Product from './Product/Product'

import useStyles from './styles'

const products = [
    {
        id:1,
        name:'Shoes',
        description:'running shoes',
        price:5,
        image:'data:image/jpeg;base64,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'
    },
    {
        
        id:2,
        name:'Macbook',
        description:'Apple macbook',
        price:10,
        image:'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/macbook-air-gold-select-201810?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1603332211000'
    }

]

const Products = ()=>{
    const classes=useStyles()
    return(
    <main className={classes.content}>
        <div className={classes.toolbar}/>
        <Grid container justify="content" spacing={4}>
            {products.map(product =>{
                return(
               <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}> 
                    <Product product={product}></Product>
               </Grid>
                )
            })}
        </Grid>
    </main>
    );
}

export default Products;