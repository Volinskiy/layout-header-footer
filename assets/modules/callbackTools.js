export default class CallbackTools
{
    constructor() {
        this.callbackList = {};
    }

    /**
     * Добавляет callback
     * @param event
     * @param callbackFunction
     */
    addCallback(event, callbackFunction) {
        if (Array.isArray(this.callbackList[event])) {
            this.callbackList[event].push(callbackFunction);
        } else {
            this.callbackList[event] = [callbackFunction];
        }
    }

    /**
     * Выполняет список callback-ов на событие
     * @param event
     */
    executeCallbackList(event) {
        if (!Array.isArray(this.callbackList[event])) {
            return;
        }

        this.callbackList[event].forEach((item, i, arr) => {
            item();
        });
    }
}