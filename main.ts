namespace MyMemberKind {

    let nid: number;
    
    export function create() {
        if (!(nid)) {
            nid = 0;
            return nid
        };
        nid++;
        return nid;
    }

    export const myMember = create()

}

//%block="my kind"
//%color="#f7d84d"
//%icon="\uf02e"
namespace MyKinds {

    //%shim=KIND_GET
    //%kindMemberName=myMember
    //%blockId=MyKinds_kind_get
    //%block="$arg"
    //%kindNamespace=MyMemberKind 
    //%kindPromptHint="enter your member here"
    export function getKind(arg: number) {
        return arg
    }

}
