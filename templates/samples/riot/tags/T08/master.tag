<master class="h-100 container-fluid">
    <!--
    <ul class="nav nav-tabs">
        <li class="nav-item active"><a href="#">Home</a></li>
        <li class="nav-item dropdown">
            <a class="dropdown-toggle" data-toggle="dropdown" href="#">Menu 1
            <span class="caret"></span></a>
            <ul class="dropdown-menu">
            <li><a href="#">Submenu 1-1</a></li>
            <li><a href="#">Submenu 1-2</a></li>
            <li><a href="#">Submenu 1-3</a></li> 
            </ul>
        </li>
        <li class="nav-item"><a href="#">Menu 2</a></li>
        <li class="nav-item"><a href="#">Menu 3</a></li>
    </ul>
    -->
    <ul class="nav nav-tabs mb-3" id="pills-tab" role="tablist">
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" 
                data-toggle="dropdown" role="button" 
                href="javascript:void(0);" aria-haspopup="true"
                aria-expanded="false" aria-selected="false">
                <span class="fas fa-plus"></span>
            </a>
            <ul class="dropdown-menu">
                <a class="dropdown-item active" href="javascript:void(0);">Thai</a>
                <a class="dropdown-item active" href="javascript:void(0);">German</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="javascript:void(0);">English</a>
                <a class="dropdown-item" href="javascript:void(0);">Japanese</a>
            </ul>
        </li>
        <li class="nav-item">
            <a class="nav-link active" data-toggle="tab" role="tab"
                aria-controls="home-tab-panel" aria-selected="true"
                id="home-tab-header" href="#home-tab-panel">
                Home
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link" data-toggle="tab" role="tab" 
                aria-controls="profile-tab-panel" aria-selected="false"
                id="profile-tab-header" href="#profile-tab-panel">
                Profile
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link" data-toggle="tab" role="tab" 
                aria-controls="contact-tab-panel" aria-selected="false" 
                id="contact-tab-header" href="#contact-tab-panel">
                Contact
            </a>
        </li>
    </ul>
    <div class="tab-content" id="tabContent">
        <div class="tab-pane fade show active" role="tabpanel"
            aria-labelledby="home-tab-header"
            id="home-tab-panel">
            Content 1
        </div>
        <div class="tab-pane fade" role="tabpanel"
        aria-labelledby="profile-tab-header"
            id="profile-tab-panel">
            Content 2
        </div>
        <div class="tab-pane fade" role="tabpanel"
            aria-labelledby="contact-tab-header"
            id="contact-tab-panel">
            Content 3
        </div>
    </div>
    <style>
    </style>
    <script>
    </script>
</master>