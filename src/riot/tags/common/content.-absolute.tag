<page-content-absolute>
    <div> <!-- position: relative -->
        <!--
        <h3>Content gone below.</h3>
        -->
        <yield />
        <!--
        <h3>Content end here.</h3>
        -->
    </div>
    <style>
        :scope {
            margin: 1px auto;
            padding: 1px;
            /* border: 1px solid blueviolet; */
            position: absolute;
            top: 48px;
            bottom: 24px;
            left: 1px;
            right: 4px;
            
            overflow-x: hidden; /* no body scroll bar */
            overflow-y: auto;
        }
    </style>
</page-content-absolute>
