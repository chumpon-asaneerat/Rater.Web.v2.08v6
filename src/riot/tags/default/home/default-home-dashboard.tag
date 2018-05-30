<default-home-dashboard>
    <div data-is="sidebars" class="sidebars">
        <div data-is="sidebar" icon="apple" text="Menu 1"/>
        <div data-is="sidebar" icon="android" text="Menu 2" active="true" />
        <div data-is="sidebar" icon="apple" text="Menu 3" />
        <div data-is="sidebar" icon="android" text="Menu 4" />
        <div data-is="sidebar" icon="apple" text="Menu 5" />
        <div data-is="sidebar" icon="android" text="Menu 6" />
        <div data-is="sidebar" icon="apple" text="Menu 7" />
        <div data-is="sidebar" icon="android" text="Menu 8" />
        <div data-is="sidebar" icon="apple" text="Menu 9" />
        <div data-is="sidebar" icon="android" text="Menu 10" />
        <div data-is="sidebar" icon="apple" text="Menu 11" />
        <div data-is="sidebar" icon="android" text="Menu 12" />
        <div data-is="sidebar" icon="apple" text="Menu 13" />
        <div data-is="sidebar" icon="android" text="Menu 14" />
        <div data-is="sidebar" icon="apple" text="Menu 15" />
        <div data-is="sidebar" icon="android" text="Menu 16" />
        <div data-is="sidebar" icon="apple" text="Menu 17" />
        <div data-is="sidebar" icon="android" text="Menu 18" />
        <div data-is="sidebar" icon="apple" text="Menu 19" />
        <div data-is="sidebar" icon="android" text="Menu 20" />
        <div data-is="sidebar" icon="apple" text="Menu 21" />
        <div data-is="sidebar" icon="android" text="Menu 22" />
        <div data-is="sidebar" icon="apple" text="Menu 23" />
        <div data-is="sidebar" icon="android" text="Menu 24" />
        <div data-is="sidebar" icon="apple" text="Menu 25" />
    </div>
    <div data-is="dashboard-content" class="dashboard-content">
        <yield />
    </div>
    <style>
        .sidebars {
            position: absolute;
            top: 1px;
            left: 1px;
            bottom: 1px;
            width: 150px;
        }
        .dashboard-content {
            position: absolute;
            top: 1px;
            left: 152px;
            right: 2px;
            bottom: 1px;
        }
    </style>
</default-home-dashboard>

<sidebars>
    <div class="sidebars-container" data-simplebar>
        <yield />
    </div>
    <style>
        :scope {
            border: 1px solid silver;
            margin: 0 auto;
        }
        .sidebars-container {
            position: absolute;
            left: 0px;
            top: 0px;
            right: 0px;
            bottom: 0px;
            width: 150px;
            overflow-x: hidden;
            overflow-y: auto;
        }
    </style>
</sidebars>

<sidebar>
    <a href="javascript:void(0);" class="d-inline item {(active === 'true') ? 'active' : ''}">
        <span class="m-auto item-icon fab fa-{icon}"></span>
        <p class="item-text d-inline-block m-auto">{text}</p>
    </a>

    <style>
        a {
            text-decoration-line: none;
        }
        .item {
            height: 56px;
            margin: 0px auto;
            padding-left: 3px;
            padding-top: 7px;
            padding-bottom: 6px;
            padding-right: 1px;
            color: whitesmoke;
            background: cornflowerblue;
            border-radius: 0;
            overflow: hidden;
        }
        .item:hover {
            background: forestgreen;
        }
        .active {
            color: yellow;
            background: darkgreen;
        }

        .item-icon {
            width: 1.2em;
            padding: 3px;
            padding-left: 5px;
            font-size: 1.1rem;
        }
        .item-text {
            margin: 0 auto;
            padding: 4px;
            padding-right: 1px;
            font-size: 1.1em;
            width: 120px;
            white-space: nowrap;
        }
    </style>
    <script>
        this.icon = opts.icon;
        this.text = opts.text;
        this.active = opts.active;
    </script>
</sidebar>

<dashboard-content>
    <yield />
    <style>
        :scope {
            border: 1px solid silver;
        }
    </style>
</dashboard-content>