cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/org.apache.cordova.core.device/www/device.js",
        "id": "org.apache.cordova.core.device.device",
        "clobbers": [
            "device"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.core.device-motion/www/Acceleration.js",
        "id": "org.apache.cordova.core.device-motion.Acceleration",
        "clobbers": [
            "Acceleration"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.core.device-motion/www/accelerometer.js",
        "id": "org.apache.cordova.core.device-motion.accelerometer",
        "clobbers": [
            "navigator.accelerometer"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.core.device-orientation/www/CompassError.js",
        "id": "org.apache.cordova.core.device-orientation.CompassError",
        "clobbers": [
            "CompassError"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.core.device-orientation/www/CompassHeading.js",
        "id": "org.apache.cordova.core.device-orientation.CompassHeading",
        "clobbers": [
            "CompassHeading"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.core.device-orientation/www/compass.js",
        "id": "org.apache.cordova.core.device-orientation.compass",
        "clobbers": [
            "navigator.compass"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.core.geolocation/www/Coordinates.js",
        "id": "org.apache.cordova.core.geolocation.Coordinates",
        "clobbers": [
            "Coordinates"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.core.geolocation/www/PositionError.js",
        "id": "org.apache.cordova.core.geolocation.PositionError",
        "clobbers": [
            "PositionError"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.core.geolocation/www/Position.js",
        "id": "org.apache.cordova.core.geolocation.Position",
        "clobbers": [
            "Position"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.core.geolocation/www/geolocation.js",
        "id": "org.apache.cordova.core.geolocation.geolocation",
        "clobbers": [
            "navigator.geolocation"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.core.media-capture/www/CaptureAudioOptions.js",
        "id": "org.apache.cordova.core.media-capture.CaptureAudioOptions",
        "clobbers": [
            "CaptureAudioOptions"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.core.media-capture/www/CaptureImageOptions.js",
        "id": "org.apache.cordova.core.media-capture.CaptureImageOptions",
        "clobbers": [
            "CaptureImageOptions"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.core.media-capture/www/CaptureVideoOptions.js",
        "id": "org.apache.cordova.core.media-capture.CaptureVideoOptions",
        "clobbers": [
            "CaptureVideoOptions"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.core.media-capture/www/CaptureError.js",
        "id": "org.apache.cordova.core.media-capture.CaptureError",
        "clobbers": [
            "CaptureError"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.core.media-capture/www/MediaFileData.js",
        "id": "org.apache.cordova.core.media-capture.MediaFileData",
        "clobbers": [
            "MediaFileData"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.core.media-capture/www/MediaFile.js",
        "id": "org.apache.cordova.core.media-capture.MediaFile",
        "clobbers": [
            "MediaFile"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.core.media-capture/www/capture.js",
        "id": "org.apache.cordova.core.media-capture.capture",
        "clobbers": [
            "navigator.device.capture"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.core.AudioHandler/www/MediaError.js",
        "id": "org.apache.cordova.core.AudioHandler.MediaError",
        "clobbers": [
            "window.MediaError"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.core.AudioHandler/www/Media.js",
        "id": "org.apache.cordova.core.AudioHandler.Media",
        "clobbers": [
            "window.Media"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.core.file/www/DirectoryEntry.js",
        "id": "org.apache.cordova.core.file.DirectoryEntry",
        "clobbers": [
            "window.DirectoryEntry"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.core.file/www/DirectoryReader.js",
        "id": "org.apache.cordova.core.file.DirectoryReader",
        "clobbers": [
            "window.DirectoryReader"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.core.file/www/Entry.js",
        "id": "org.apache.cordova.core.file.Entry",
        "clobbers": [
            "window.Entry"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.core.file/www/File.js",
        "id": "org.apache.cordova.core.file.File",
        "clobbers": [
            "window.File"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.core.file/www/FileEntry.js",
        "id": "org.apache.cordova.core.file.FileEntry",
        "clobbers": [
            "window.FileEntry"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.core.file/www/FileError.js",
        "id": "org.apache.cordova.core.file.FileError",
        "clobbers": [
            "window.FileError"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.core.file/www/FileReader.js",
        "id": "org.apache.cordova.core.file.FileReader",
        "clobbers": [
            "window.FileReader"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.core.file/www/FileSystem.js",
        "id": "org.apache.cordova.core.file.FileSystem",
        "clobbers": [
            "window.FileSystem"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.core.file/www/FileUploadOptions.js",
        "id": "org.apache.cordova.core.file.FileUploadOptions",
        "clobbers": [
            "window.FileUploadOptions"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.core.file/www/FileUploadResult.js",
        "id": "org.apache.cordova.core.file.FileUploadResult",
        "clobbers": [
            "window.FileUploadResult"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.core.file/www/FileWriter.js",
        "id": "org.apache.cordova.core.file.FileWriter",
        "clobbers": [
            "window.FileWriter"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.core.file/www/Flags.js",
        "id": "org.apache.cordova.core.file.Flags",
        "clobbers": [
            "window.Flags"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.core.file/www/LocalFileSystem.js",
        "id": "org.apache.cordova.core.file.LocalFileSystem",
        "clobbers": [
            "window.LocalFileSystem"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.core.file/www/Metadata.js",
        "id": "org.apache.cordova.core.file.Metadata",
        "clobbers": [
            "window.Metadata"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.core.file/www/ProgressEvent.js",
        "id": "org.apache.cordova.core.file.ProgressEvent",
        "clobbers": [
            "window.ProgressEvent"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.core.file/www/requestFileSystem.js",
        "id": "org.apache.cordova.core.file.requestFileSystem",
        "clobbers": [
            "window.requestFileSystem"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.core.file/www/resolveLocalFileSystemURI.js",
        "id": "org.apache.cordova.core.file.resolveLocalFileSystemURI",
        "clobbers": [
            "window.resolveLocalFileSystemURI"
        ]
    }
]
});