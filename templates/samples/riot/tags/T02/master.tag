<master class="container-fluid">
    <div data-is="main-nav">
        <li class="nav-item">
            <a class="nav-link" href="#">Link 1</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Link 2</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Link 3</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Link 4</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Link 5</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Link 6</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Link 7</a>
        </li>
    </div>
    <div data-is="page-content">
        <h3>HELLO WORLD.</h3>
        <p>Line !!!</p>
        <p>Line !!!</p>
        <p>Line !!!</p>
        <p>Line !!!</p>
        <p>Line !!!</p>
        <p>Line !!! XXX</p>
        <p>Line !!!</p>
        <p>Line !!!</p>
        <p>Line !!!</p>
        <p>Line !!!</p>
        <p>Line !!!</p>
        <p>Line !!! XXX</p>
        <p>Line !!!</p>
        <p>Line !!!</p>
        <p>Line !!!</p>
        <p>Line !!!</p>
        <p>Line !!!</p>
        <p>Line !!! XXX</p>
        <p>Line !!!</p>
        <p>Line !!!</p>
        <p>Line !!!</p>
        <p>Line !!!</p>
        <p>Line !!!</p>
        <p>Line !!! XXX</p>
        <p>Line !!!</p>
        <p>Line !!!</p>
        <p>Line !!!</p>
        <p>Line !!!</p>
        <p>Line !!!</p>
        <p>Line !!! XXX</p>
        <p>Line !!!</p>
        <p>Line !!!</p>
        <p>Line !!!</p>
        <p>Line !!!</p>
        <p>Line !!!</p>
        <p>Line !!! XXX</p>
        <p>Line !!! END</p>
    </div>
    <div data-is="main-footer"></div>
</master>

<main-nav class="navbar navbar-expand-sm fixed-top navbar-dark bg-primary m-0 p-1">
    <!-- Banner -->
    <a href="#" class="navbar-band m-1 p-0">
        <div class="d-inline-block">
            <img src="images/bird.jpg" class="d-inline-block logo">            
            <span class="navbar-text">Logo.</span>
        </div>
    </a>
    <div class="d-flex flex-row order-2 order-sm-3 order-md-3 order-lg-3">
        <ul class="navbar-nav flex-row">
            <li class="nav-item">
                <a class="nav-link px-2" href="#">
                    <span class="fab fa-facebook"></span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link px-2" href="#">
                    <span class="fab fa-twitter"></span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link px-2" href="#">
                    <span class="fab fa-youtube"></span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link px-2" href="#">
                    <span class="fab fa-linkedin"></span>
                </a>
            </li>
        </ul>
        <!-- Toggler/collapsibe Button -->
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
        </button>
    </div>

    <div class="collapse navbar-collapse order-3 order-sm-2 order-md-2 order-lg-2" id="collapsibleNavbar">
        <ul class="navbar-nav">
            <yield />
        </ul>
    </div>
    <!--
    <div class="dropdown show justify-content-end">
        <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true"
            aria-expanded="false">
            Dropdown link
        </a>

        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
        </div>
    </div>
    -->

    <style>
        :scope {
            padding-top: 2px;
            padding-bottom: 0px;
            font-size: 1em;
        }
    
        .logo {
            /* width: 28px; */
            height: 28px;
        }
    </style>
</main-nav>

<page-content class="container-fluid">
    <yield />
    <style>
        :scope {
            margin-top: 70px;
            margin-bottom: 2em;
        }
    </style>
</page-content>

<main-footer class="navbar fixed-bottom m-0 p-1 navbar-light bg-primary">
    <span class="float-left m-0 p-0" style="font-size: 0.7em;">
        &nbsp;&nbsp;Status.&nbsp;
        <div class="v-divider">&nbsp;</div>
    </span>
    <span class="float-right m-0 p-0 ml-auto">
        <div class="v-divider">&nbsp;</div>
        &copy;&nbsp;EDL co.th.&nbsp;&nbsp;&nbsp;&nbsp;
    </span>

    <style>
        :scope, nav, span, .navbar-text {
            color: whitesmoke;
            font-size: 0.8em;
            margin: 0 auto;
        }
        .v-divider {
            display: inline;
            margin-left: 5px;
            margin-right: 5px;
            /*
            width: 1px;
            height: 100%;
            */
            border-left: 1px solid whitesmoke;
        }        
    </style>
</main-footer>