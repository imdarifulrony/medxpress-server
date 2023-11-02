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
                                            'data-bs-target="#controllers-links-module-AppModule-20116353bedc35a053cea7f89998abdcabe7ec91132236a888610002ad04a0e6855b47ddf8d10446b51f9e3da580275e23706f2093ae95efc4b89a8213864e55"' : 'data-bs-target="#xs-controllers-links-module-AppModule-20116353bedc35a053cea7f89998abdcabe7ec91132236a888610002ad04a0e6855b47ddf8d10446b51f9e3da580275e23706f2093ae95efc4b89a8213864e55"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-20116353bedc35a053cea7f89998abdcabe7ec91132236a888610002ad04a0e6855b47ddf8d10446b51f9e3da580275e23706f2093ae95efc4b89a8213864e55"' :
                                            'id="xs-controllers-links-module-AppModule-20116353bedc35a053cea7f89998abdcabe7ec91132236a888610002ad04a0e6855b47ddf8d10446b51f9e3da580275e23706f2093ae95efc4b89a8213864e55"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-20116353bedc35a053cea7f89998abdcabe7ec91132236a888610002ad04a0e6855b47ddf8d10446b51f9e3da580275e23706f2093ae95efc4b89a8213864e55"' : 'data-bs-target="#xs-injectables-links-module-AppModule-20116353bedc35a053cea7f89998abdcabe7ec91132236a888610002ad04a0e6855b47ddf8d10446b51f9e3da580275e23706f2093ae95efc4b89a8213864e55"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-20116353bedc35a053cea7f89998abdcabe7ec91132236a888610002ad04a0e6855b47ddf8d10446b51f9e3da580275e23706f2093ae95efc4b89a8213864e55"' :
                                        'id="xs-injectables-links-module-AppModule-20116353bedc35a053cea7f89998abdcabe7ec91132236a888610002ad04a0e6855b47ddf8d10446b51f9e3da580275e23706f2093ae95efc4b89a8213864e55"' }>
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
                                            'data-bs-target="#controllers-links-module-AuthModule-768b3477b088888713a5f25bcb7e791987ed889e3b565449c83deca64932e56b952eb418483c47e82ae041b3e54d0b51bb414edf7540c0d599d7052f3cbd1955"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-768b3477b088888713a5f25bcb7e791987ed889e3b565449c83deca64932e56b952eb418483c47e82ae041b3e54d0b51bb414edf7540c0d599d7052f3cbd1955"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-768b3477b088888713a5f25bcb7e791987ed889e3b565449c83deca64932e56b952eb418483c47e82ae041b3e54d0b51bb414edf7540c0d599d7052f3cbd1955"' :
                                            'id="xs-controllers-links-module-AuthModule-768b3477b088888713a5f25bcb7e791987ed889e3b565449c83deca64932e56b952eb418483c47e82ae041b3e54d0b51bb414edf7540c0d599d7052f3cbd1955"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-768b3477b088888713a5f25bcb7e791987ed889e3b565449c83deca64932e56b952eb418483c47e82ae041b3e54d0b51bb414edf7540c0d599d7052f3cbd1955"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-768b3477b088888713a5f25bcb7e791987ed889e3b565449c83deca64932e56b952eb418483c47e82ae041b3e54d0b51bb414edf7540c0d599d7052f3cbd1955"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-768b3477b088888713a5f25bcb7e791987ed889e3b565449c83deca64932e56b952eb418483c47e82ae041b3e54d0b51bb414edf7540c0d599d7052f3cbd1955"' :
                                        'id="xs-injectables-links-module-AuthModule-768b3477b088888713a5f25bcb7e791987ed889e3b565449c83deca64932e56b952eb418483c47e82ae041b3e54d0b51bb414edf7540c0d599d7052f3cbd1955"' }>
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
                                            'data-bs-target="#controllers-links-module-CheckoutModule-51fc1a837e22b2ec70400bda7e41b2ba665592431f9af14896bf0df6d9815276196dbd311ee6d264f3a1355c9dcd56c23efd05489022b2715bdc0057dbfcc89c"' : 'data-bs-target="#xs-controllers-links-module-CheckoutModule-51fc1a837e22b2ec70400bda7e41b2ba665592431f9af14896bf0df6d9815276196dbd311ee6d264f3a1355c9dcd56c23efd05489022b2715bdc0057dbfcc89c"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CheckoutModule-51fc1a837e22b2ec70400bda7e41b2ba665592431f9af14896bf0df6d9815276196dbd311ee6d264f3a1355c9dcd56c23efd05489022b2715bdc0057dbfcc89c"' :
                                            'id="xs-controllers-links-module-CheckoutModule-51fc1a837e22b2ec70400bda7e41b2ba665592431f9af14896bf0df6d9815276196dbd311ee6d264f3a1355c9dcd56c23efd05489022b2715bdc0057dbfcc89c"' }>
                                            <li class="link">
                                                <a href="controllers/CheckoutController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CheckoutController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CheckoutModule-51fc1a837e22b2ec70400bda7e41b2ba665592431f9af14896bf0df6d9815276196dbd311ee6d264f3a1355c9dcd56c23efd05489022b2715bdc0057dbfcc89c"' : 'data-bs-target="#xs-injectables-links-module-CheckoutModule-51fc1a837e22b2ec70400bda7e41b2ba665592431f9af14896bf0df6d9815276196dbd311ee6d264f3a1355c9dcd56c23efd05489022b2715bdc0057dbfcc89c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CheckoutModule-51fc1a837e22b2ec70400bda7e41b2ba665592431f9af14896bf0df6d9815276196dbd311ee6d264f3a1355c9dcd56c23efd05489022b2715bdc0057dbfcc89c"' :
                                        'id="xs-injectables-links-module-CheckoutModule-51fc1a837e22b2ec70400bda7e41b2ba665592431f9af14896bf0df6d9815276196dbd311ee6d264f3a1355c9dcd56c23efd05489022b2715bdc0057dbfcc89c"' }>
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
                                            'data-bs-target="#controllers-links-module-OrdersModule-db3b671f34595d3ee8b235176d6c7851ef29d7cba41e5f39868f2a2fdefdd52a69c99f13ab0717442902b63c239c6532e4e8aa32a95cb05ebb62d262787e2b86"' : 'data-bs-target="#xs-controllers-links-module-OrdersModule-db3b671f34595d3ee8b235176d6c7851ef29d7cba41e5f39868f2a2fdefdd52a69c99f13ab0717442902b63c239c6532e4e8aa32a95cb05ebb62d262787e2b86"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-OrdersModule-db3b671f34595d3ee8b235176d6c7851ef29d7cba41e5f39868f2a2fdefdd52a69c99f13ab0717442902b63c239c6532e4e8aa32a95cb05ebb62d262787e2b86"' :
                                            'id="xs-controllers-links-module-OrdersModule-db3b671f34595d3ee8b235176d6c7851ef29d7cba41e5f39868f2a2fdefdd52a69c99f13ab0717442902b63c239c6532e4e8aa32a95cb05ebb62d262787e2b86"' }>
                                            <li class="link">
                                                <a href="controllers/OrdersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrdersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-OrdersModule-db3b671f34595d3ee8b235176d6c7851ef29d7cba41e5f39868f2a2fdefdd52a69c99f13ab0717442902b63c239c6532e4e8aa32a95cb05ebb62d262787e2b86"' : 'data-bs-target="#xs-injectables-links-module-OrdersModule-db3b671f34595d3ee8b235176d6c7851ef29d7cba41e5f39868f2a2fdefdd52a69c99f13ab0717442902b63c239c6532e4e8aa32a95cb05ebb62d262787e2b86"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-OrdersModule-db3b671f34595d3ee8b235176d6c7851ef29d7cba41e5f39868f2a2fdefdd52a69c99f13ab0717442902b63c239c6532e4e8aa32a95cb05ebb62d262787e2b86"' :
                                        'id="xs-injectables-links-module-OrdersModule-db3b671f34595d3ee8b235176d6c7851ef29d7cba41e5f39868f2a2fdefdd52a69c99f13ab0717442902b63c239c6532e4e8aa32a95cb05ebb62d262787e2b86"' }>
                                        <li class="link">
                                            <a href="injectables/OrdersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrdersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/CheckoutController.html" data-type="entity-link" >CheckoutController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/MedicineController.html" data-type="entity-link" >MedicineController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/OrdersController.html" data-type="entity-link" >OrdersController</a>
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
                                <a href="classes/LoginDto.html" data-type="entity-link" >LoginDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Medicine.html" data-type="entity-link" >Medicine</a>
                            </li>
                            <li class="link">
                                <a href="classes/Order.html" data-type="entity-link" >Order</a>
                            </li>
                            <li class="link">
                                <a href="classes/SignUpDto.html" data-type="entity-link" >SignUpDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateMedicineDto.html" data-type="entity-link" >UpdateMedicineDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CheckoutService.html" data-type="entity-link" >CheckoutService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtStrategy.html" data-type="entity-link" >JwtStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MedicineService.html" data-type="entity-link" >MedicineService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OrdersService.html" data-type="entity-link" >OrdersService</a>
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