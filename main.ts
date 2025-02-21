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

}

//%block="my kind"
//%color="#dbb62e"
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
