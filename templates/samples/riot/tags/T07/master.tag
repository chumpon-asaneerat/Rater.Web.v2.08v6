<master class="h-100">
    <div class="container-fluid">
        <p>Your Id: {clientId}</p>
        <p>Software Version: {softwareVersion}</p>
    </div>
    <style>
    </style>
    <script>
        let client = new ClientJS();
        this.clientId = client.getFingerprint();;
        this.softwareVersion = client.getSoftwareVersion();

    </script>
</master>