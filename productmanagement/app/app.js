/**
 * Created by Deb on 8/20/2014.
 */
(function () {
    "use strict";
    var app = angular.module("productManagement",
        ["ui.router","common.services",
            "ProductResourceMock"
            ]);


    app.config(
        ["$stateProvider",
            "$urlRouterProvider",
            function ($stateProvider, $urlRouterProvider) {
                $urlRouterProvider.otherwise("/");
                $stateProvider

                    .state("home", {
                        url: "/",
                        templateUrl: "app/WelcomeView.html",
                    })

                    .state("productList", {
                    url: "/products",
                    templateUrl: "app/products/ProductListView.html",
                    controller: "ProductListController as vm"
                    })

                 .state("productEdit", {
                     url: "/products/edit/:productId",
                     templateUrl: "app/products/ProductEditView.html",
                     controller: "ProductEditController as vm"
                 })

                .state("productDetail", {
                    url:"/products/:productId",
                    templateUrl: "app/products/ProductDetailView.html",
                    controller: "ProductDetailController as vm"
                })

            }])
}());