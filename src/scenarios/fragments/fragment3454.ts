import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3452 } from "./fragment3452";
import type { FragmentToken3453 } from "./fragment3453";

export const FRAGMENT_3454 = gql(`
  fragment Fragment3454 on Member93 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_93
    memberCount_93
    memberMetric_93
  }
`);

type FragmentResult3454 = ResultOf<typeof FRAGMENT_3454>;
type FragmentSelf3454 = NonNullable<FragmentResult3454>;

export type FragmentToken3454 =
  | FragmentSelf3454["__typename"]
  | FragmentSelf3454["typenameHint"] | FragmentToken3452 | FragmentToken3453;
