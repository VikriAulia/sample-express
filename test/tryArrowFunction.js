const traditional = function (){
    return x * x ;
}

const conciseBody = x => x * x;

this.scope = "lexaical scope";

const scopeOf = {
    scope: "mendefinisikan scope",

    traditional: function(){
        return this.scope;
    },

    arrow: () => {
        return this.scope;
    },
};

console.log(scopeOf.traditional());
console.log(scopeOf.arrow());