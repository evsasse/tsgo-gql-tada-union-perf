import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4236 } from "./fragment4236";
import type { FragmentToken4237 } from "./fragment4237";

export const FRAGMENT_4238 = gql(`
  fragment Fragment4238 on Member37 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_37
    memberCount_37
    memberMetric_37
  }
`);

type FragmentResult4238 = ResultOf<typeof FRAGMENT_4238>;
type FragmentSelf4238 = NonNullable<FragmentResult4238>;

export type FragmentToken4238 =
  | FragmentSelf4238["__typename"]
  | FragmentSelf4238["typenameHint"] | FragmentToken4236 | FragmentToken4237;
