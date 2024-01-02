let NewPromise = function NewPromise(callback) {
    let _state = 'panding';
    let _success;
    let _error;
    let _nextResolve;
    let _nextReject;
    let _resolve = function(value) {
      _state = 'fulfilled';

      queueMicrotask(()=>{
        try {
          let result = _success && _success(value);

          if(result instanceof NewPromise) {
            result.then(
              value=>(_nextResolve && _nextResolve(value)), 
              error=>(_nextReject && _nextReject(error))
            );
          } else {
            result = _success ? result:value;
            _nextResolve && _nextResolve(result);
          }
        } catch(e) {
          _nextReject && _nextReject(e);
        }          
      });
    };
    let _reject = function(value) {
      _state = 'rejected';

      queueMicrotask(()=>{
        try {
          let result = _error && _error(value);
          
          if(result instanceof NewPromise) {
            result.then(
              value=>{_nextResolve && _nextResolve(value);}, 
              error=>{_nextReject && _nextReject(error);
            });
          } else {
            if(_error) {
              _nextResolve(result);
            } else {
              if(_nextReject) {
                _nextReject(value);
              } else {
                console.error('Uncaught (in NewPromise)', value);
              }
            }
          }
        } catch(e) {
          _nextReject && _nextReject(e);
        }          
      });
    };

    this.then = function(success, error) {
      _success = success;
      _error = error;

      return new NewPromise((resolve, reject)=>{
        _nextResolve = resolve;
        _nextReject = reject;
      });
    }

    this.catch = function(error) {
      _error = error;

      return new NewPromise((resolve, reject)=>{
        _nextResolve = resolve;
        _nextReject = reject;
      });
    }

    try {
      callback(_resolve, _reject);
    } catch(e) {
      _reject && _reject(e);
    }      
  };
