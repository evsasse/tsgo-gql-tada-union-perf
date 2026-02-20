import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3426 } from "./fragment3426";
import type { FragmentToken3427 } from "./fragment3427";

export const FRAGMENT_3428 = gql(`
  fragment Fragment3428 on Member67 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_67
    memberCount_67
    memberMetric_67
  }
`);

type FragmentResult3428 = ResultOf<typeof FRAGMENT_3428>;
type FragmentSelf3428 = NonNullable<FragmentResult3428>;

export type FragmentToken3428 =
  | FragmentSelf3428["__typename"]
  | FragmentSelf3428["typenameHint"] | FragmentToken3426 | FragmentToken3427;
