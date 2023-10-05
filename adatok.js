export default class AdatKezelo
{
    static betolt(url, callback) {
        jQuery.getJSON(url, callback);
    }
}
