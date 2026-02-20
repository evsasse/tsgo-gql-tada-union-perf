import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1314 } from "./fragment1314";
import type { FragmentToken1315 } from "./fragment1315";

export const FRAGMENT_1316 = gql(`
  fragment Fragment1316 on Member195 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_195
    memberCount_195
    memberMetric_195
  }
`);

type FragmentResult1316 = ResultOf<typeof FRAGMENT_1316>;
type FragmentSelf1316 = NonNullable<FragmentResult1316>;

export type FragmentToken1316 =
  | FragmentSelf1316["__typename"]
  | FragmentSelf1316["typenameHint"] | FragmentToken1314 | FragmentToken1315;
