import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1266 } from "./fragment1266";
import type { FragmentToken1267 } from "./fragment1267";

export const FRAGMENT_1268 = gql(`
  fragment Fragment1268 on Member147 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_147
    memberCount_147
    memberMetric_147
  }
`);

type FragmentResult1268 = ResultOf<typeof FRAGMENT_1268>;
type FragmentSelf1268 = NonNullable<FragmentResult1268>;

export type FragmentToken1268 =
  | FragmentSelf1268["__typename"]
  | FragmentSelf1268["typenameHint"] | FragmentToken1266 | FragmentToken1267;
