import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1330 } from "./fragment1330";
import type { FragmentToken1331 } from "./fragment1331";

export const FRAGMENT_1332 = gql(`
  fragment Fragment1332 on Member211 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_211
    memberCount_211
    memberMetric_211
  }
`);

type FragmentResult1332 = ResultOf<typeof FRAGMENT_1332>;
type FragmentSelf1332 = NonNullable<FragmentResult1332>;

export type FragmentToken1332 =
  | FragmentSelf1332["__typename"]
  | FragmentSelf1332["typenameHint"] | FragmentToken1330 | FragmentToken1331;
