import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken401 } from "./fragment401";
import type { FragmentToken402 } from "./fragment402";

export const FRAGMENT_403 = gql(`
  fragment Fragment403 on Member122 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_122
    memberCount_122
    memberMetric_122
  }
`);

type FragmentResult403 = ResultOf<typeof FRAGMENT_403>;
type FragmentSelf403 = NonNullable<FragmentResult403>;

export type FragmentToken403 =
  | FragmentSelf403["__typename"]
  | FragmentSelf403["typenameHint"] | FragmentToken401 | FragmentToken402;
