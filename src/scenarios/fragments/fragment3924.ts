import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3922 } from "./fragment3922";
import type { FragmentToken3923 } from "./fragment3923";

export const FRAGMENT_3924 = gql(`
  fragment Fragment3924 on Member03 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_03
    memberCount_03
    memberMetric_03
  }
`);

type FragmentResult3924 = ResultOf<typeof FRAGMENT_3924>;
type FragmentSelf3924 = NonNullable<FragmentResult3924>;

export type FragmentToken3924 =
  | FragmentSelf3924["__typename"]
  | FragmentSelf3924["typenameHint"] | FragmentToken3922 | FragmentToken3923;
