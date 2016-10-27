<?php

error_reporting(E_ALL);

define('OTAURL_XML', 'https://otageo.cartrawler.com/cartrawlerota/');
define('OTAURL_JSON', 'https://otageo.cartrawler.com/cartrawlerota/json');
define('FILES', 'files/');

$clientAddress = getRealIpAddr();

$otaheaders = array(
    'X-OTAProxy: 3.1',
    'X-OTAProxy-Secure: ' . (((!isset($_SERVER['HTTPS'])) || (strtolower($_SERVER['HTTPS'])) != 'on' ) ? ('false') : ('true')),
    'X-OTAProxy-ClientAddress: ' . $clientAddress
);
$message = '';


/* 	If request 'Content-Type' header contains the 
	term json, example: 'application/json' then send 
	request to JSON Server */
$serverUrl = OTAURL_XML;
if (isset($_SERVER["CONTENT_TYPE"]) && 
	stripos($_SERVER["CONTENT_TYPE"], "json") !== false) {
	$serverUrl = OTAURL_JSON;
}

if ((isset($_POST['getfile'])) || (isset($_GET['getfile']))) {
    $getfile = ((isset($_POST['getfile'])) ? ($_POST['getfile']) : ($_GET['getfile']));
    $message = process_getfile(OTAURL_XML, $otaheaders, $getfile);
} elseif ((isset($_POST['geturl'])) || (isset($_GET['geturl']))) {
    $url = ((isset($_POST['geturl'])) ? ($_POST['geturl']) : ($_GET['geturl']));
    /*
        validate that domain is safe
    */
    $allowed_domains = array( 'www.cartrawler.com', 'otatest.cartrawler.com', 'otageo.cartrawler.com', 'ota.cartrawler.com', 'cdn.cartrawler.com' );
    $url_is_allowed = false; // guilty till proven innocent
    if(strpos($url, 'http://') === 0) { $url = substr($url, 7); }
    if(strpos($url, 'https://') === 0) { $url = substr($url, 8); }
    foreach ($allowed_domains as $k => $v) {
        if ( strpos($url, $allowed_domains[$k]) === 0 ) {
            $url_is_allowed = true;
        }
    }
    if ( !$url_is_allowed ) {
        header("HTTP/1.0 404 Unsupported Domain");
        return '';
    }
    $message = process_getURL($url, $otaheaders);
} elseif (isset($HTTP_RAW_POST_DATA)) {
    $message = process_rawpost($serverUrl, $otaheaders, $HTTP_RAW_POST_DATA);
} else {
    $message = 'Unsupported request';
}

if (strlen($message) > 0) {
    header("HTTP/1.0 404 $message");
}

function getRealIpAddr()
{
    if (!empty($_SERVER['HTTP_CLIENT_IP']))   //check ip from share internet
    {
      $ip=$_SERVER['HTTP_CLIENT_IP'];
    }
    elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR']))   //to check ip is pass from proxy
    {
      $ip=$_SERVER['HTTP_X_FORWARDED_FOR'];
    }
    else
    {
      $ip=$_SERVER['REMOTE_ADDR'];
    }
    return $ip;
}

function process_getfile($url, $otaheaders, $getfile) {
    if (validatefilename($getfile)) {
        $curl_handle = curl_init();

        $url .= FILES . $getfile;
        setoptions($curl_handle, $url, $otaheaders);

        $buffer = curl_exec($curl_handle);
        if (curl_errno($curl_handle)) {
            $msg = 'CURL Error ' + curl_error($curl_handle);
            curl_close($curl_handle);
            return $msg;
        }

        $type = curl_getinfo($curl_handle, CURLINFO_CONTENT_TYPE);

        if (curl_getinfo($curl_handle, CURLINFO_HTTP_CODE) != 200) {
            return 'No such file';
        }

        curl_close($curl_handle);
        header("Expires: " . gmdate("D, d M Y H:i:s", (time() + 60 * 60)) . " GMT");
        header('Content-type: ' . $type);
        echo $buffer;
    } else {
        return 'File validation failed';
    }
    return '';
}

function process_getlocalfile($url, $otaheaders, $getfile) {
    $curl_handle = curl_init();

    $url .= $getfile;
    setoptions($curl_handle, $url, $otaheaders);

    $buffer = curl_exec($curl_handle);

    if (curl_errno($curl_handle)) {
        $msg = 'CURL Error ' + curl_error($curl_handle);
        curl_close($curl_handle);
        return $msg;
    }

    $type = curl_getinfo($curl_handle, CURLINFO_CONTENT_TYPE);

    if (curl_getinfo($curl_handle, CURLINFO_HTTP_CODE) != 200) {
        return 'No such file';
    }

    curl_close($curl_handle);
    header("Expires: " . gmdate("D, d M Y H:i:s", (time() + 60 * 60)) . " GMT");
    header('Content-type: ' . $type);
    echo $buffer;

    return '';
}

function process_getURL($url, $otaheaders) {

    $curl_handle = curl_init();

    setoptions($curl_handle, $url, $otaheaders);
    $buffer = curl_exec($curl_handle);
    if (curl_errno($curl_handle)) {
        $msg = 'CURL Error ' + curl_error($curl_handle);
        curl_close($curl_handle);
        echo $msg;
        return $msg;
    }

    $type = curl_getinfo($curl_handle, CURLINFO_CONTENT_TYPE);

    if (curl_getinfo($curl_handle, CURLINFO_HTTP_CODE) != 200) {
        curl_close($curl_handle);
        header("Cache-Control: no-store, no-cache");
        header('Content-type: ' . $type);
        echo "status=failed_badly";		
        return '';
    }
    curl_close($curl_handle);

    header("Expires: " . gmdate("D, d M Y H:i:s", (time() + 60 * 60)) . " GMT");
    header('Content-type: ' . $type);
    echo $buffer;

    return '';
}

function process_rawpost($url, $otaheaders, $rawpost) {
    $curl_handle = curl_init();

    setoptions($curl_handle, $url, $otaheaders);
    curl_setopt($curl_handle, CURLOPT_POSTFIELDS, $rawpost);

    $buffer = curl_exec($curl_handle);
    if (curl_errno($curl_handle)) {
        $msg = 'CURL Error ' + curl_error($curl_handle);
        curl_close($curl_handle);
        return $msg;
    }

    $type = curl_getinfo($curl_handle, CURLINFO_CONTENT_TYPE);

    if (curl_getinfo($curl_handle, CURLINFO_HTTP_CODE) != 200) {
        curl_close($curl_handle);
        header("Cache-Control: no-store, no-cache");
        header('Content-type: ' . $type);
        echo "status=failed_badly";		
        return '';
    }
    curl_close($curl_handle);

    header("Cache-Control: no-store, no-cache");
    header('Content-type: ' . $type);
    echo $buffer;

    return '';
}

function setoptions($curl_handle, $url, $headers) {
    curl_setopt($curl_handle, CURLOPT_RETURNTRANSFER, 1);
    if (preg_match('@^https://@', $url)) {
        curl_setopt($curl_handle, CURLOPT_SSL_VERIFYPEER, FALSE);
    }
    curl_setopt($curl_handle, CURLOPT_ENCODING, "");
    curl_setopt($curl_handle, CURLOPT_URL, $url);
    curl_setopt($curl_handle, CURLOPT_HTTPHEADER, $headers);
}

function validatefilename($filename) {
    if ((strlen($filename) > 128) || (strlen($filename) == 0)) {
        return false;
    }
    if (preg_match('/(^[.\\/\\\\])|([.\\/\\\\]$)|([.\\/\\\\]{2})|([^\w.\\/])/', $filename)) {
        return false;
    }
    return true;
}
?>
