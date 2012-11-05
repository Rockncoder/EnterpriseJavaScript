/**
 * User: Troy
 * Date: 11/4/12
 * Time: 8:46 PM
 */

function Subject(){
    this.observers = new ObserverList();
}

Subject.prototype = {
    AddObserver: function( observer ){
        this.observers.Add( observer );
    },
    RemoveObserver: function( observer ){
        this.observers.RemoveIndexAt( this.observers.IndexOf( observer, 0 ) );
    },
    Notify: function( context ){
        var observerCount = this.observers.Count();
        for(var i=0; i < observerCount; i++){
            this.observers.Get(i).Update( context );
        }
    }
};
