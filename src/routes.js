import React from 'react';
import { Route, IndexRoute } from 'react-router';

/* Five header modules */
import App from './components/App/App';
import ShopPage from './pages/ShopPage';
import ShopIndexPage from './pages/ShopIndexPage';
import EverydayPage from './pages/EverydayPage';
import SourcePage from './pages/SourcePage';
import UserMenuPage from './pages/UserMenuPage';

/* Five home page for header modules */
import EverydayPageHome from './components/PageEveryDay/home';
import ShopPageHome from './components/PageShop/home';
import ShopPageIndexHome from './components/PageShopIndex/home';
import SourcePageHome from './components/PageSource/home';

import BookList from './components/BookList/BookList';
import BookType from './components/BookType/BookType';
import NewBookList from './components/NewBookList/NewBookList';

import ArticleDisplay from './components/ArticleDisplay/ArticleDisplay';
import BookDetail from './components/BookDetail/BookDetail';
import BookRead from './components/BookRead/BookRead';
import BookConsult from './components/BookDetail/BookConsult';
import BookSourceList from './components/BookDetail/BookSourceList';

import GoodsList from './components/GoodsList/GoodsList';
import CommodityDetail from './components/CommodityDetail/CommodityDetail';
import GoodsSearch from './components/GoodsSearch/GoodsSearch';

import Favorites from './components/Favorites/Favorites';

import UserIntegration from './components/UserIntegration/UserIntegration';
import UserIntegrationHome from './components/UserIntegration/home';
import IntegrationConsumeList from './components/UserIntegration/IntegrationConsumeList';
import TotalIntegrationList from './components/UserIntegration/TotalIntegrationList';

import VideoModule from './components/SourceModules/VideoModule/VideoModule';
import VideoModuleHome from './components/SourceModules/VideoModule/VideoModuleHome';
import VideoList from './components/SourceModules/VideoModule/VideoList';
import AudioModule from './components/SourceModules/AudioModule/AudioModule';
import PhotoModuleHome from './components/SourceModules/PhotoModule/home';
import PhotoModule from './components/SourceModules/PhotoModule/PhotoModule';
import PhotoList from './components/SourceModules/PhotoModule/PhotoList';
import AlbumShow from './components/SourceModules/PhotoModule/AlbumShow';
import SourcePdf from './components/SourceModules/SourcePdf/SourcePdf';
import SourcePdfHome from './components/SourceModules/SourcePdf/home';
import SourcePdfCatalogPage from './components/SourceModules/SourcePdf/SourcePdfCatalogPage';
import SourceDownLoad from './components/SourceModules/SourceDownLoad/SourceDownLoad';
import SourceComment from './components/SourceModules/SourceComment/SourceComment';

import OrderList from './components/OrderList/OrderList';
import OrderListHome from './components/OrderList/home';
import OrderDisplay from './components/OrderDisplay/OrderDisplay';

import SocialArea from './components/SocialArea/SocialArea';
import SocialAreaHome from './components/SocialArea/home';
import SocialDetail from './components/SocialArea/SocialDetail';

import ConfirmOrder from './components/ConfirmOrder/ConfirmOrder';

import NotFound from './components/NotFound/NotFound';

export default (
  <Route path="/" component={App} onEnter= {getRoute}>
    <IndexRoute component={ShopPageHome} />
    <Route path="danpin" component={ShopPage}>
      <IndexRoute component={ShopPageHome}/>
      <Route path="books" component={BookType}/>
      <Route path="booklist/:typeIndex" component={BookList}/>
      <Route path="bookbuy/:id" component={BookDetail}/>
      <Route path="bookread/:id" component={BookRead}/>
      <Route path="bookconsult/:id" component={BookConsult}/>
      <Route path="booksource/:id" component={BookSourceList}/>
      <Route path="newbooklist/:type" component={NewBookList}/>
    </Route>

    <Route path="shop" component={ShopIndexPage}>
      <IndexRoute component={ShopPageIndexHome} />
      <Route path="goodslist/:typeId" component={GoodsList}/>
      <Route path="goodsbuy/:id" component={CommodityDetail}/>
      <Route path="goodssearch" component={GoodsSearch}/>
    </Route>

    <Route path="source" component={SourcePage}>
      <IndexRoute component={SourcePageHome} />
      <Route path="audio/:id" component={AudioModule}/>
      <Route path="video/:id" component={VideoModule}>
        <IndexRoute component={VideoModuleHome}/>
        <Route path="videolist" component={VideoList}/>
      </Route>
      <Route path="photo/:id" component={PhotoModule}>
        <IndexRoute component={PhotoModuleHome} />
        <Route path="photolist" component={PhotoList}/>
        <Route path="albumshow/:indexid" component={AlbumShow}/>
      </Route>
      <Route path="pdf/:id" component={SourcePdf}>
        <IndexRoute component={SourcePdfHome} />
        <Route path="pdfcatalog" component={SourcePdfCatalogPage}/>
      </Route>
      <Route path="commentpage" components={SourceComment}/>
      <Route path="downloadpage" components={SourceDownLoad}/>
    </Route>

    <Route path="everyday" component={EverydayPage}>
      <IndexRoute component={EverydayPageHome}/>
      <Route path=":id/display" component={ArticleDisplay} />
    </Route>

    <Route path="usermenu" component={UserMenuPage}/>
    <Route path="favorites" component={Favorites}/>
    <Route path="userintegration" component={UserIntegration}>
      <IndexRoute component={UserIntegrationHome} />
      <Route path="used" component={IntegrationConsumeList}/>
      <Route path="total" component={TotalIntegrationList}/>
    </Route>

    <Route path="orderlist" component={OrderList}>
      <IndexRoute component={OrderListHome} />
      <Route path=":id/display" component={OrderDisplay}/>
    </Route>

    <Route path="socialarea" component={SocialArea}>
      <IndexRoute component={SocialAreaHome} />
      <Route path=":id/display" component={SocialDetail}/>
    </Route>

    <Route path="confirmorder" component={ConfirmOrder}>
    </Route>

    <Route path="*" component={NotFound} />
  </Route>
)

function getRoute (nextState, replaceState) {
  //const state = store.getState()
  //const isLoggedIn = Boolean(state.application.token)
  //if (!isLoggedIn)
  //  replaceState({
  //    nextPathname: nextState.location.pathname
  //  }, '/login')
}