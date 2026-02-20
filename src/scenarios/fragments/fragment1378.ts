import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1376 } from "./fragment1376";
import type { FragmentToken1377 } from "./fragment1377";

export const FRAGMENT_1378 = gql(`
  fragment Fragment1378 on Member257 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_257
    memberCount_257
    memberMetric_257
  }
`);

type FragmentResult1378 = ResultOf<typeof FRAGMENT_1378>;
type FragmentSelf1378 = NonNullable<FragmentResult1378>;

export type FragmentToken1378 =
  | FragmentSelf1378["__typename"]
  | FragmentSelf1378["typenameHint"] | FragmentToken1376 | FragmentToken1377;
