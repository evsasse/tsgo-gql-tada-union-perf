import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3270 } from "./fragment3270";
import type { FragmentToken3271 } from "./fragment3271";

export const FRAGMENT_3272 = gql(`
  fragment Fragment3272 on Member191 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_191
    memberCount_191
    memberMetric_191
  }
`);

type FragmentResult3272 = ResultOf<typeof FRAGMENT_3272>;
type FragmentSelf3272 = NonNullable<FragmentResult3272>;

export type FragmentToken3272 =
  | FragmentSelf3272["__typename"]
  | FragmentSelf3272["typenameHint"] | FragmentToken3270 | FragmentToken3271;
