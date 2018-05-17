<master class="h-100">
    <div class="container-fluid">
        <p>Your Id: {clientId}</p>
        <p>Software Version: {softwareVersion}</p>
        <p>Is Mobile: {isMobile}</p>
        <p>Is Andriod: {isAndriod}</p>
        <p>Is iOS: {isAppleiOS}</p>
    </div>
    <style>
    </style>
    <script>
        let client = new ClientJS();
        this.clientId = client.getFingerprint();;
        this.softwareVersion = client.getSoftwareVersion();
        this.isMobile = client.isMobile() ? "Yes" : "No";
        this.isAndriod = client.isMobileAndroid() ? "Yes" : "No";
        this.isAppleiOS = client.isMobileAndroid() ? "Yes" : "No";

    </script>
</master>