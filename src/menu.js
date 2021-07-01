import {Container} from './page-elements.js';

export const menuContent = document.createElement('div');
menuContent.classList.add('w-100', 'd-none', 'p-5', 'bg-dark');
Container.appendChild(menuContent);

menuContent.innerHTML += `<div class="bg-dark w-100 row">
    <p class="text-white text-center tf-restaurant fs-1 col-12">--------------------THE--------------------</p>
    <p class="text-white text-center tf-restaurant fs-1 col-12 border-bottom pb-3">MENU</p>
    <div class="col-4 p-2 m-0">
        <div class="border-menu rounded-3 m-1">
            <p class="text-dark text-center m-0 p-1 bg-menu fs-3 tf-restaurant">APPETIZER</p>
            <div class="row">
                <p class="text-menu px-4 py-2 col-9 tf-restaurant">GARLIC BREAD</p>
                <p class="text-menu px-4 py-2 col-2 tf-restaurant">5</p>
                <p class="text-menu px-4 py-2 col-9 tf-restaurant">CARPACCIO</p>
                <p class="text-menu px-4 py-2 col-2 tf-restaurant">7</p>
                <p class="text-menu px-4 py-2 col-9 tf-restaurant">OLIVES/CHIPS</p>
                <p class="text-menu px-4 py-2 col-2 tf-restaurant">5</p>
            </div>
        </div>

        <div class="border-menu m-1 rounded-3">
            <p class="text-dark text-center m-0 p-1 bg-menu fs-3 tf-restaurant">pasta</p>
            <div class="row">
                <p class="text-menu px-4 py-2 col-9 tf-restaurant">PASTA BOLOGNESE</p>
                <p class="text-menu px-4 py-2 col-2 tf-restaurant">15</p>
                <p class="text-menu px-4 py-2 col-9 tf-restaurant">ITALIAN RAVIOLI</p>
                <p class="text-menu px-4 py-2 col-2 tf-restaurant">15</p>
                <p class="text-menu px-4 py-2 col-9 tf-restaurant">PASTA CARBONARA</p>
                <p class="text-menu px-4 py-2 col-2 tf-restaurant">15</p>
                <p class="text-menu px-4 py-2 col-9 tf-restaurant">LASGANA</p>
                <p class="text-menu px-4 py-2 col-2 tf-restaurant">20</p>
            </div>
        </div>

        <div class="bg-menu border-menu rounded-3 m-1">
            <p class="text-DARK tf-restaurant fs-8 text-center w-100 fw-bold">open hour</p>
            <p class="text-DARK tf-restaurant fs-8 text-center w-100 fw-bold">5 to 10</p>
            <p class="text-DARK tf-restaurant fs-8 text-center w-100 fw-bold">pm</p>
        </div>
    </div>
    <div class="col-8 p-2 row">
        
        <div class="col-12 row m-0 p-0">
            <div class="border-menu p-0 m-1 rounded-3">
                <p class="text-menu text-center m-0 p-0 fs-3 tf-restaurant border-menu rounded-top">OUR FAVORITE MENU/$22</p>
                <p class="text-menu text-center m-2 p-0 fs-5 tf-restaurant">steak minute</p>
                <p class="text-menu text-center m-2 p-0 fs-5 tf-restaurant">crispy chicken</p>
                <p class="text-menu text-center m-2 p-0 fs-5 tf-restaurant">whole grilled sea bass</p>
            </div>
        </div>

        <div class="col-12 row m-0 p-0">
            <div class="col-6 p-1 m-0">
                <div class="border-menu p-0 m-0 rounded-3">
                    <p class="text-dark text-center m-0 p-3 bg-menu fs-3 tf-restaurant">pizza</p>
                    <div class="row">
                        <p class="text-menu px-4 py-2 col-9 tf-restaurant">marguerita</p>
                        <p class="text-menu px-4 py-2 col-2 tf-restaurant">15</p>
                        <p class="text-menu px-4 py-2 col-9 tf-restaurant">porsciuto e funghi</p>
                        <p class="text-menu px-4 py-2 col-2 tf-restaurant">15</p>
                        <p class="text-menu px-4 py-2 col-9 tf-restaurant">bresaola</p>
                        <p class="text-menu px-4 py-2 col-2 tf-restaurant">15</p>
                        <p class="text-menu px-4 py-2 col-9 tf-restaurant">salsiccia e cipolla</p>
                        <p class="text-menu px-4 py-2 col-2 tf-restaurant">12</p>
                        <p class="text-menu px-4 py-2 col-9 tf-restaurant">vegetariana</p>
                        <p class="text-menu px-4 py-2 col-2 tf-restaurant">12</p>
                    </div>
                </div>

                <div class="border-menu p-0 my-1 mx-0 rounded-3 row">
                    <p class="text-menu text-center m-0 p-2 fs-3 tf-restaurant border-menu rounded-top col-12">burger</p>
                    <p class="text-menu m-0 p-2 fs-5 tf-restaurant col-9">cheese burger</p>
                    <p class="text-menu px-4 py-2 col-2 tf-restaurant col-2">10</p>
                    <p class="text-menu m-0 p-2 fs-5 tf-restaurant col-9">halloumi burger</p>
                    <p class="text-menu px-4 py-2 col-2 tf-restaurant col-2">10</p>
                </div>
            </div>

            <div class="col-6 p-1 m-0">
                <div class="bg-menu border-menu rounded-3">
                    <p class="text-DARK p-1 m-0 col-9 tf-restaurant fs-8 text-center w-100 fw-bold">BEST</p>
                    <p class="text-DARK p-1 m-0 col-9 tf-restaurant fs-8 text-center w-100 fw-bold">TASTE</p>
                </div>

                <div class="border-menu p-0 mx-0 my-1 rounded-3 row">
                    <p class="text-menu text-center text-vertical fs-3 m-0 p-1 tf-restaurant border-menu rounded-start col-2">ice cream</p>
                    <div class="col-10 row">
                        <p class="text-menu m-0 p-2 fs-6 tf-restaurant col-9">bourbon vanilla</p>
                        <p class="text-menu px-4 py-1 col-2 m-0 tf-restaurant col-2">5</p>
                        <p class="text-menu m-0 p-2 fs-6 tf-restaurant col-9">chocolate cookie</p>
                        <p class="text-menu px-4 py-1 col-2 m-0 tf-restaurant col-2">5</p>
                        <p class="text-menu m-0 p-2 fs-6 tf-restaurant col-9">mango sorbet</p>
                        <p class="text-menu px-4 py-1 col-2 m-0 tf-restaurant col-2">5</p>
                    </div>
                </div>

                <div class="border-menu p-0 mx-0 my-1 rounded-3 row">
                    <p class="text-menu text-center text-vertical fs-3 m-0 p-1 tf-restaurant border-menu rounded-start col-2">fresh drink</p>
                    <div class="col-10 row">
                        <p class="text-menu m-0 p-2 fs-6 tf-restaurant col-9">very berry</p>
                        <p class="text-menu px-4 py-1 m-0 col-2 tf-restaurant col-2">3</p>
                        <p class="text-menu m-0 p-2 fs-6 tf-restaurant col-9">cirtus peach</p>
                        <p class="text-menu px-4 py-1 m-0 col-2 tf-restaurant col-2">3</p>
                        <p class="text-menu m-0 p-2 fs-6 tf-restaurant col-9">passion juice</p>
                        <p class="text-menu px-4 py-1 m-0 col-2 tf-restaurant col-2">3</p>
                        <p class="text-menu m-0 p-2 fs-6 tf-restaurant col-9">fresh and fruity</p>
                        <p class="text-menu px-4 py-1 m-0 col-2 tf-restaurant col-2">3</p>
                        <p class="text-menu m-0 p-2 fs-6 tf-restaurant col-9">pineapple paradise</p>
                        <p class="text-menu px-4 py-1 m-0 col-2 tf-restaurant col-2">3</p>
                        <p class="text-menu m-0 p-2 fs-6 tf-restaurant col-9">ginger fizz</p>
                        <p class="text-menu px-4 py-1 m-0 col-2 tf-restaurant col-2">3</p>
                        <p class="text-menu m-0 p-2 fs-6 tf-restaurant col-9">coffe shake</p>
                        <p class="text-menu px-4 py-1 m-0 col-2 tf-restaurant col-2">3</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</div>`;