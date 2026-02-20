import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1316 } from "./fragment1316";
import type { FragmentToken1317 } from "./fragment1317";

export const FRAGMENT_1318 = gql(`
  fragment Fragment1318 on Member197 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_197
    memberCount_197
    memberMetric_197
  }
`);

type FragmentResult1318 = ResultOf<typeof FRAGMENT_1318>;
type FragmentSelf1318 = NonNullable<FragmentResult1318>;

export type FragmentToken1318 =
  | FragmentSelf1318["__typename"]
  | FragmentSelf1318["typenameHint"] | FragmentToken1316 | FragmentToken1317;
