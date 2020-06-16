const style = () => ({
  box: {
      height: '100%',
      display: 'flex',
      alignItems: 'center'
    },
   logo: {
     width: '100px',
     height: '100%',
     '&>a>img':{
       width: '100px',
       height: '100%',
     }
   },
   text: {
     textShadow: '2px 3px 5px darkgreen',
     color: 'lightgreen',
     fontSize: '2rem',
   },
   option: { 
     display: 'flex',
     '& ul':{
       display: 'inline-flex',
       '&>li': {
        listStyle: 'none',
       },
       '&>li>a':{
         height: '40px',
         width: '120px',
         borderRadius: '20px',
         marginRight: '5px',
         padding: '5px',
         textDecoration: 'none'
       }
     }
   },
  })
  
  export default style