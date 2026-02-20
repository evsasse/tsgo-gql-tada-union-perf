import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1315 } from "./fragment1315";
import type { FragmentToken1316 } from "./fragment1316";

export const FRAGMENT_1317 = gql(`
  fragment Fragment1317 on Member196 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_196
    memberCount_196
    memberMetric_196
  }
`);

type FragmentResult1317 = ResultOf<typeof FRAGMENT_1317>;
type FragmentSelf1317 = NonNullable<FragmentResult1317>;

export type FragmentToken1317 =
  | FragmentSelf1317["__typename"]
  | FragmentSelf1317["typenameHint"] | FragmentToken1315 | FragmentToken1316;
