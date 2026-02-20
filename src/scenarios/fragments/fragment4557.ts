import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4555 } from "./fragment4555";
import type { FragmentToken4556 } from "./fragment4556";

export const FRAGMENT_4557 = gql(`
  fragment Fragment4557 on Member76 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_76
    memberCount_76
    memberMetric_76
  }
`);

type FragmentResult4557 = ResultOf<typeof FRAGMENT_4557>;
type FragmentSelf4557 = NonNullable<FragmentResult4557>;

export type FragmentToken4557 =
  | FragmentSelf4557["__typename"]
  | FragmentSelf4557["typenameHint"] | FragmentToken4555 | FragmentToken4556;
