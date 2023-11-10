'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">medxpress-server documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-558ec4e1ab02b65728f8e9bed29c2a03ad1d461de636fa48f8bb799171942cc04155cc4d47d17a9dd6c97202c6a506f1dbbcb7ce6f86296b485c6c80cf6c353b"' : 'data-bs-target="#xs-controllers-links-module-AppModule-558ec4e1ab02b65728f8e9bed29c2a03ad1d461de636fa48f8bb799171942cc04155cc4d47d17a9dd6c97202c6a506f1dbbcb7ce6f86296b485c6c80cf6c353b"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-558ec4e1ab02b65728f8e9bed29c2a03ad1d461de636fa48f8bb799171942cc04155cc4d47d17a9dd6c97202c6a506f1dbbcb7ce6f86296b485c6c80cf6c353b"' :
                                            'id="xs-controllers-links-module-AppModule-558ec4e1ab02b65728f8e9bed29c2a03ad1d461de636fa48f8bb799171942cc04155cc4d47d17a9dd6c97202c6a506f1dbbcb7ce6f86296b485c6c80cf6c353b"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-558ec4e1ab02b65728f8e9bed29c2a03ad1d461de636fa48f8bb799171942cc04155cc4d47d17a9dd6c97202c6a506f1dbbcb7ce6f86296b485c6c80cf6c353b"' : 'data-bs-target="#xs-injectables-links-module-AppModule-558ec4e1ab02b65728f8e9bed29c2a03ad1d461de636fa48f8bb799171942cc04155cc4d47d17a9dd6c97202c6a506f1dbbcb7ce6f86296b485c6c80cf6c353b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-558ec4e1ab02b65728f8e9bed29c2a03ad1d461de636fa48f8bb799171942cc04155cc4d47d17a9dd6c97202c6a506f1dbbcb7ce6f86296b485c6c80cf6c353b"' :
                                        'id="xs-injectables-links-module-AppModule-558ec4e1ab02b65728f8e9bed29c2a03ad1d461de636fa48f8bb799171942cc04155cc4d47d17a9dd6c97202c6a506f1dbbcb7ce6f86296b485c6c80cf6c353b"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-d8c29029ef47181e77d561c0d6c4b35702fb981360682af5192e67ba4d65693985e219f38c5cf1c6071439d05be40030a46291f73d3dc7c44a7a192d8a2e8950"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-d8c29029ef47181e77d561c0d6c4b35702fb981360682af5192e67ba4d65693985e219f38c5cf1c6071439d05be40030a46291f73d3dc7c44a7a192d8a2e8950"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-d8c29029ef47181e77d561c0d6c4b35702fb981360682af5192e67ba4d65693985e219f38c5cf1c6071439d05be40030a46291f73d3dc7c44a7a192d8a2e8950"' :
                                            'id="xs-controllers-links-module-AuthModule-d8c29029ef47181e77d561c0d6c4b35702fb981360682af5192e67ba4d65693985e219f38c5cf1c6071439d05be40030a46291f73d3dc7c44a7a192d8a2e8950"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-d8c29029ef47181e77d561c0d6c4b35702fb981360682af5192e67ba4d65693985e219f38c5cf1c6071439d05be40030a46291f73d3dc7c44a7a192d8a2e8950"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-d8c29029ef47181e77d561c0d6c4b35702fb981360682af5192e67ba4d65693985e219f38c5cf1c6071439d05be40030a46291f73d3dc7c44a7a192d8a2e8950"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-d8c29029ef47181e77d561c0d6c4b35702fb981360682af5192e67ba4d65693985e219f38c5cf1c6071439d05be40030a46291f73d3dc7c44a7a192d8a2e8950"' :
                                        'id="xs-injectables-links-module-AuthModule-d8c29029ef47181e77d561c0d6c4b35702fb981360682af5192e67ba4d65693985e219f38c5cf1c6071439d05be40030a46291f73d3dc7c44a7a192d8a2e8950"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CheckoutModule.html" data-type="entity-link" >CheckoutModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-CheckoutModule-7cefec22a3cecf5c274018bf236f1368fd172ab179655ed4b0753d6e63a93bbdf5b0b4c9289c51d4707ae0f384ac071f8c24e40a809b685bdcac48fb44b66542"' : 'data-bs-target="#xs-controllers-links-module-CheckoutModule-7cefec22a3cecf5c274018bf236f1368fd172ab179655ed4b0753d6e63a93bbdf5b0b4c9289c51d4707ae0f384ac071f8c24e40a809b685bdcac48fb44b66542"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CheckoutModule-7cefec22a3cecf5c274018bf236f1368fd172ab179655ed4b0753d6e63a93bbdf5b0b4c9289c51d4707ae0f384ac071f8c24e40a809b685bdcac48fb44b66542"' :
                                            'id="xs-controllers-links-module-CheckoutModule-7cefec22a3cecf5c274018bf236f1368fd172ab179655ed4b0753d6e63a93bbdf5b0b4c9289c51d4707ae0f384ac071f8c24e40a809b685bdcac48fb44b66542"' }>
                                            <li class="link">
                                                <a href="controllers/CheckoutController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CheckoutController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CheckoutModule-7cefec22a3cecf5c274018bf236f1368fd172ab179655ed4b0753d6e63a93bbdf5b0b4c9289c51d4707ae0f384ac071f8c24e40a809b685bdcac48fb44b66542"' : 'data-bs-target="#xs-injectables-links-module-CheckoutModule-7cefec22a3cecf5c274018bf236f1368fd172ab179655ed4b0753d6e63a93bbdf5b0b4c9289c51d4707ae0f384ac071f8c24e40a809b685bdcac48fb44b66542"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CheckoutModule-7cefec22a3cecf5c274018bf236f1368fd172ab179655ed4b0753d6e63a93bbdf5b0b4c9289c51d4707ae0f384ac071f8c24e40a809b685bdcac48fb44b66542"' :
                                        'id="xs-injectables-links-module-CheckoutModule-7cefec22a3cecf5c274018bf236f1368fd172ab179655ed4b0753d6e63a93bbdf5b0b4c9289c51d4707ae0f384ac071f8c24e40a809b685bdcac48fb44b66542"' }>
                                        <li class="link">
                                            <a href="injectables/CheckoutService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CheckoutService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MedicineModule.html" data-type="entity-link" >MedicineModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-MedicineModule-85a98a107d953e1db5e18022790abf45a6b1e93c90d54966c9bec7ab26e7893e5e0ee849d9c7a5e761092e8aad971b2c35814ee271a31e89ce576a118d5711e6"' : 'data-bs-target="#xs-controllers-links-module-MedicineModule-85a98a107d953e1db5e18022790abf45a6b1e93c90d54966c9bec7ab26e7893e5e0ee849d9c7a5e761092e8aad971b2c35814ee271a31e89ce576a118d5711e6"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-MedicineModule-85a98a107d953e1db5e18022790abf45a6b1e93c90d54966c9bec7ab26e7893e5e0ee849d9c7a5e761092e8aad971b2c35814ee271a31e89ce576a118d5711e6"' :
                                            'id="xs-controllers-links-module-MedicineModule-85a98a107d953e1db5e18022790abf45a6b1e93c90d54966c9bec7ab26e7893e5e0ee849d9c7a5e761092e8aad971b2c35814ee271a31e89ce576a118d5711e6"' }>
                                            <li class="link">
                                                <a href="controllers/MedicineController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MedicineController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-MedicineModule-85a98a107d953e1db5e18022790abf45a6b1e93c90d54966c9bec7ab26e7893e5e0ee849d9c7a5e761092e8aad971b2c35814ee271a31e89ce576a118d5711e6"' : 'data-bs-target="#xs-injectables-links-module-MedicineModule-85a98a107d953e1db5e18022790abf45a6b1e93c90d54966c9bec7ab26e7893e5e0ee849d9c7a5e761092e8aad971b2c35814ee271a31e89ce576a118d5711e6"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MedicineModule-85a98a107d953e1db5e18022790abf45a6b1e93c90d54966c9bec7ab26e7893e5e0ee849d9c7a5e761092e8aad971b2c35814ee271a31e89ce576a118d5711e6"' :
                                        'id="xs-injectables-links-module-MedicineModule-85a98a107d953e1db5e18022790abf45a6b1e93c90d54966c9bec7ab26e7893e5e0ee849d9c7a5e761092e8aad971b2c35814ee271a31e89ce576a118d5711e6"' }>
                                        <li class="link">
                                            <a href="injectables/MedicineService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MedicineService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/OrdersModule.html" data-type="entity-link" >OrdersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-OrdersModule-1ff2d0535e4387f9d20f54b0e0e957254d6d90fd518bee1fe8a8ea631b75af5109be21993868ec7898043c84a1e1111f52a9198e181e2bbf8f8f933b80de1e8d"' : 'data-bs-target="#xs-controllers-links-module-OrdersModule-1ff2d0535e4387f9d20f54b0e0e957254d6d90fd518bee1fe8a8ea631b75af5109be21993868ec7898043c84a1e1111f52a9198e181e2bbf8f8f933b80de1e8d"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-OrdersModule-1ff2d0535e4387f9d20f54b0e0e957254d6d90fd518bee1fe8a8ea631b75af5109be21993868ec7898043c84a1e1111f52a9198e181e2bbf8f8f933b80de1e8d"' :
                                            'id="xs-controllers-links-module-OrdersModule-1ff2d0535e4387f9d20f54b0e0e957254d6d90fd518bee1fe8a8ea631b75af5109be21993868ec7898043c84a1e1111f52a9198e181e2bbf8f8f933b80de1e8d"' }>
                                            <li class="link">
                                                <a href="controllers/OrdersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrdersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-OrdersModule-1ff2d0535e4387f9d20f54b0e0e957254d6d90fd518bee1fe8a8ea631b75af5109be21993868ec7898043c84a1e1111f52a9198e181e2bbf8f8f933b80de1e8d"' : 'data-bs-target="#xs-injectables-links-module-OrdersModule-1ff2d0535e4387f9d20f54b0e0e957254d6d90fd518bee1fe8a8ea631b75af5109be21993868ec7898043c84a1e1111f52a9198e181e2bbf8f8f933b80de1e8d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-OrdersModule-1ff2d0535e4387f9d20f54b0e0e957254d6d90fd518bee1fe8a8ea631b75af5109be21993868ec7898043c84a1e1111f52a9198e181e2bbf8f8f933b80de1e8d"' :
                                        'id="xs-injectables-links-module-OrdersModule-1ff2d0535e4387f9d20f54b0e0e957254d6d90fd518bee1fe8a8ea631b75af5109be21993868ec7898043c84a1e1111f52a9198e181e2bbf8f8f933b80de1e8d"' }>
                                        <li class="link">
                                            <a href="injectables/OrdersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrdersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/StocksModule.html" data-type="entity-link" >StocksModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-StocksModule-fc9bdc268dc90624aa6a2f053ce0bfcd9e1ba5567c39281ee23bd75e196393c599626534f9f6baf07db975cf4f854116c8b4ed40d68e2c9c737865eccb64edf3"' : 'data-bs-target="#xs-controllers-links-module-StocksModule-fc9bdc268dc90624aa6a2f053ce0bfcd9e1ba5567c39281ee23bd75e196393c599626534f9f6baf07db975cf4f854116c8b4ed40d68e2c9c737865eccb64edf3"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-StocksModule-fc9bdc268dc90624aa6a2f053ce0bfcd9e1ba5567c39281ee23bd75e196393c599626534f9f6baf07db975cf4f854116c8b4ed40d68e2c9c737865eccb64edf3"' :
                                            'id="xs-controllers-links-module-StocksModule-fc9bdc268dc90624aa6a2f053ce0bfcd9e1ba5567c39281ee23bd75e196393c599626534f9f6baf07db975cf4f854116c8b4ed40d68e2c9c737865eccb64edf3"' }>
                                            <li class="link">
                                                <a href="controllers/StocksController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StocksController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-StocksModule-fc9bdc268dc90624aa6a2f053ce0bfcd9e1ba5567c39281ee23bd75e196393c599626534f9f6baf07db975cf4f854116c8b4ed40d68e2c9c737865eccb64edf3"' : 'data-bs-target="#xs-injectables-links-module-StocksModule-fc9bdc268dc90624aa6a2f053ce0bfcd9e1ba5567c39281ee23bd75e196393c599626534f9f6baf07db975cf4f854116c8b4ed40d68e2c9c737865eccb64edf3"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-StocksModule-fc9bdc268dc90624aa6a2f053ce0bfcd9e1ba5567c39281ee23bd75e196393c599626534f9f6baf07db975cf4f854116c8b4ed40d68e2c9c737865eccb64edf3"' :
                                        'id="xs-injectables-links-module-StocksModule-fc9bdc268dc90624aa6a2f053ce0bfcd9e1ba5567c39281ee23bd75e196393c599626534f9f6baf07db975cf4f854116c8b4ed40d68e2c9c737865eccb64edf3"' }>
                                        <li class="link">
                                            <a href="injectables/StocksService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StocksService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CartItemDto.html" data-type="entity-link" >CartItemDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CheckEmailDto.html" data-type="entity-link" >CheckEmailDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CheckoutDto.html" data-type="entity-link" >CheckoutDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CheckoutItem.html" data-type="entity-link" >CheckoutItem</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateMedicineDto.html" data-type="entity-link" >CreateMedicineDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateOrderDto.html" data-type="entity-link" >CreateOrderDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateShopDto.html" data-type="entity-link" >CreateShopDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateStockDto.html" data-type="entity-link" >CreateStockDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginDto.html" data-type="entity-link" >LoginDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Medicine.html" data-type="entity-link" >Medicine</a>
                            </li>
                            <li class="link">
                                <a href="classes/Order.html" data-type="entity-link" >Order</a>
                            </li>
                            <li class="link">
                                <a href="classes/Shop.html" data-type="entity-link" >Shop</a>
                            </li>
                            <li class="link">
                                <a href="classes/ShopLoginDto.html" data-type="entity-link" >ShopLoginDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/SignUpDto.html" data-type="entity-link" >SignUpDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Stock.html" data-type="entity-link" >Stock</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateMedicineDto.html" data-type="entity-link" >UpdateMedicineDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateOrderStatusDto.html" data-type="entity-link" >UpdateOrderStatusDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateStockDto.html" data-type="entity-link" >UpdateStockDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});