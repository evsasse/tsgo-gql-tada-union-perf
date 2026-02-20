import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1648 } from "./fragment1648";
import type { FragmentToken1649 } from "./fragment1649";

export const FRAGMENT_1650 = gql(`
  fragment Fragment1650 on Member249 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_249
    memberCount_249
    memberMetric_249
  }
`);

type FragmentResult1650 = ResultOf<typeof FRAGMENT_1650>;
type FragmentSelf1650 = NonNullable<FragmentResult1650>;

export type FragmentToken1650 =
  | FragmentSelf1650["__typename"]
  | FragmentSelf1650["typenameHint"] | FragmentToken1648 | FragmentToken1649;
