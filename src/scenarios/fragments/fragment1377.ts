import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1375 } from "./fragment1375";
import type { FragmentToken1376 } from "./fragment1376";

export const FRAGMENT_1377 = gql(`
  fragment Fragment1377 on Member256 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_256
    memberCount_256
    memberMetric_256
  }
`);

type FragmentResult1377 = ResultOf<typeof FRAGMENT_1377>;
type FragmentSelf1377 = NonNullable<FragmentResult1377>;

export type FragmentToken1377 =
  | FragmentSelf1377["__typename"]
  | FragmentSelf1377["typenameHint"] | FragmentToken1375 | FragmentToken1376;
