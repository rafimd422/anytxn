import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { Navbar } from './components/Navbar';

 export default function RootLayout(props) {
   return (
     <html lang="en">
       <body>
       <AppRouterCacheProvider>
        <Navbar />
           {props.children}
       </AppRouterCacheProvider>
       </body>
     </html>
   );
 }
