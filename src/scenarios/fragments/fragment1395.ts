import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1393 } from "./fragment1393";
import type { FragmentToken1394 } from "./fragment1394";

export const FRAGMENT_1395 = gql(`
  fragment Fragment1395 on Member274 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_274
    memberCount_274
    memberMetric_274
  }
`);

type FragmentResult1395 = ResultOf<typeof FRAGMENT_1395>;
type FragmentSelf1395 = NonNullable<FragmentResult1395>;

export type FragmentToken1395 =
  | FragmentSelf1395["__typename"]
  | FragmentSelf1395["typenameHint"] | FragmentToken1393 | FragmentToken1394;
