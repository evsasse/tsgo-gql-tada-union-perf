import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3831 } from "./fragment3831";
import type { FragmentToken3832 } from "./fragment3832";

export const FRAGMENT_3833 = gql(`
  fragment Fragment3833 on Member192 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_192
    memberCount_192
    memberMetric_192
  }
`);

type FragmentResult3833 = ResultOf<typeof FRAGMENT_3833>;
type FragmentSelf3833 = NonNullable<FragmentResult3833>;

export type FragmentToken3833 =
  | FragmentSelf3833["__typename"]
  | FragmentSelf3833["typenameHint"] | FragmentToken3831 | FragmentToken3832;
