import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3859 } from "./fragment3859";
import type { FragmentToken3860 } from "./fragment3860";

export const FRAGMENT_3861 = gql(`
  fragment Fragment3861 on Member220 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_220
    memberCount_220
    memberMetric_220
  }
`);

type FragmentResult3861 = ResultOf<typeof FRAGMENT_3861>;
type FragmentSelf3861 = NonNullable<FragmentResult3861>;

export type FragmentToken3861 =
  | FragmentSelf3861["__typename"]
  | FragmentSelf3861["typenameHint"] | FragmentToken3859 | FragmentToken3860;
