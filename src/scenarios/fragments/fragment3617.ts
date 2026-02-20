import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3615 } from "./fragment3615";
import type { FragmentToken3616 } from "./fragment3616";

export const FRAGMENT_3617 = gql(`
  fragment Fragment3617 on Member256 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_256
    memberCount_256
    memberMetric_256
  }
`);

type FragmentResult3617 = ResultOf<typeof FRAGMENT_3617>;
type FragmentSelf3617 = NonNullable<FragmentResult3617>;

export type FragmentToken3617 =
  | FragmentSelf3617["__typename"]
  | FragmentSelf3617["typenameHint"] | FragmentToken3615 | FragmentToken3616;
