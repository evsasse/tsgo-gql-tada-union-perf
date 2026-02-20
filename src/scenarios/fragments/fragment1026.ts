import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1024 } from "./fragment1024";
import type { FragmentToken1025 } from "./fragment1025";

export const FRAGMENT_1026 = gql(`
  fragment Fragment1026 on Member185 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_185
    memberCount_185
    memberMetric_185
  }
`);

type FragmentResult1026 = ResultOf<typeof FRAGMENT_1026>;
type FragmentSelf1026 = NonNullable<FragmentResult1026>;

export type FragmentToken1026 =
  | FragmentSelf1026["__typename"]
  | FragmentSelf1026["typenameHint"] | FragmentToken1024 | FragmentToken1025;
