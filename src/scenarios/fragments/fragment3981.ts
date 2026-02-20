import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3979 } from "./fragment3979";
import type { FragmentToken3980 } from "./fragment3980";

export const FRAGMENT_3981 = gql(`
  fragment Fragment3981 on Member60 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_60
    memberCount_60
    memberMetric_60
  }
`);

type FragmentResult3981 = ResultOf<typeof FRAGMENT_3981>;
type FragmentSelf3981 = NonNullable<FragmentResult3981>;

export type FragmentToken3981 =
  | FragmentSelf3981["__typename"]
  | FragmentSelf3981["typenameHint"] | FragmentToken3979 | FragmentToken3980;
