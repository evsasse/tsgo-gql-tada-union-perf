import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3143 } from "./fragment3143";
import type { FragmentToken3144 } from "./fragment3144";

export const FRAGMENT_3145 = gql(`
  fragment Fragment3145 on Member64 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_64
    memberCount_64
    memberMetric_64
  }
`);

type FragmentResult3145 = ResultOf<typeof FRAGMENT_3145>;
type FragmentSelf3145 = NonNullable<FragmentResult3145>;

export type FragmentToken3145 =
  | FragmentSelf3145["__typename"]
  | FragmentSelf3145["typenameHint"] | FragmentToken3143 | FragmentToken3144;
