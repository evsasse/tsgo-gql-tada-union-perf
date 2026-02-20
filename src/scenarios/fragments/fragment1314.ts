import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1312 } from "./fragment1312";
import type { FragmentToken1313 } from "./fragment1313";

export const FRAGMENT_1314 = gql(`
  fragment Fragment1314 on Member193 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_193
    memberCount_193
    memberMetric_193
  }
`);

type FragmentResult1314 = ResultOf<typeof FRAGMENT_1314>;
type FragmentSelf1314 = NonNullable<FragmentResult1314>;

export type FragmentToken1314 =
  | FragmentSelf1314["__typename"]
  | FragmentSelf1314["typenameHint"] | FragmentToken1312 | FragmentToken1313;
