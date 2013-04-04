function DataLoader(onCompletedCallback) {
    var dataLoader = {
        functionCompleted: functionCompleted,
        register: register,
        run: run
    };
    var registeredFunctions = [];
    var completedFunctions = 0;

    return dataLoader;

    function functionCompleted() {
        completedFunctions++;
        if (completedFunctions >= registeredFunctions.length)
            onCompletedCallback();
    }

    function register(fn) {
        registeredFunctions.push(fn);
    }

    function run() {
        $.each(registeredFunctions, function (i, fn) {
            if (fn)
                fn();
        });
    }

}
