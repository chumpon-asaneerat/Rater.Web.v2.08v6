<page-content-absolute>
    <div id="page-content-abs" class="container-fluid"> <!-- position: relative -->
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
            /*
            top: 48px;
            bottom: 24px;
            */
            top: 3em;
            bottom: 2em;
            left: 1px;
            right: 4px;            
            overflow-x: hidden; /* no body scroll bar */
            overflow-y: auto;
        }
    </style>
    <script>
        //#region LOCAL VARIABLES

        //-- LOCAL VARIABLES
        
        let self = this;
        this.uid = nlib.utils.newUId(); // for debug instance id.
        //-- default before load content from server.

        //-- END LOCAL VARIABLES

        //#endregion
    </script>
</page-content-absolute>
