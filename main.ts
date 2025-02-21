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
//%icon="\u23"
namespace MyKinds {

    //%shim=KIND_GET kindMemberName=myMember block="$kindID"
    //%blockId=MyKinds_kind_get
    //%kindNamespace=MyMemberKind 
    //%kindPromptHint="e.g. enter your member here"
    export function getKind(kindID: number) {
        return kindID
    }

}
