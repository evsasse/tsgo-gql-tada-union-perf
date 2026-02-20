import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3860 } from "./fragment3860";
import type { FragmentToken3861 } from "./fragment3861";

export const FRAGMENT_3862 = gql(`
  fragment Fragment3862 on Member221 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_221
    memberCount_221
    memberMetric_221
  }
`);

type FragmentResult3862 = ResultOf<typeof FRAGMENT_3862>;
type FragmentSelf3862 = NonNullable<FragmentResult3862>;

export type FragmentToken3862 =
  | FragmentSelf3862["__typename"]
  | FragmentSelf3862["typenameHint"] | FragmentToken3860 | FragmentToken3861;
