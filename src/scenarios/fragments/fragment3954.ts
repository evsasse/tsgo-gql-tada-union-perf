import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3952 } from "./fragment3952";
import type { FragmentToken3953 } from "./fragment3953";

export const FRAGMENT_3954 = gql(`
  fragment Fragment3954 on Member33 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_33
    memberCount_33
    memberMetric_33
  }
`);

type FragmentResult3954 = ResultOf<typeof FRAGMENT_3954>;
type FragmentSelf3954 = NonNullable<FragmentResult3954>;

export type FragmentToken3954 =
  | FragmentSelf3954["__typename"]
  | FragmentSelf3954["typenameHint"] | FragmentToken3952 | FragmentToken3953;
