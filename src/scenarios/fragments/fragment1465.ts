import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1463 } from "./fragment1463";
import type { FragmentToken1464 } from "./fragment1464";

export const FRAGMENT_1465 = gql(`
  fragment Fragment1465 on Member64 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_64
    memberCount_64
    memberMetric_64
  }
`);

type FragmentResult1465 = ResultOf<typeof FRAGMENT_1465>;
type FragmentSelf1465 = NonNullable<FragmentResult1465>;

export type FragmentToken1465 =
  | FragmentSelf1465["__typename"]
  | FragmentSelf1465["typenameHint"] | FragmentToken1463 | FragmentToken1464;
