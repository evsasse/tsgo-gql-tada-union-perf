import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1678 } from "./fragment1678";
import type { FragmentToken1679 } from "./fragment1679";

export const FRAGMENT_1680 = gql(`
  fragment Fragment1680 on Member279 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_279
    memberCount_279
    memberMetric_279
  }
`);

type FragmentResult1680 = ResultOf<typeof FRAGMENT_1680>;
type FragmentSelf1680 = NonNullable<FragmentResult1680>;

export type FragmentToken1680 =
  | FragmentSelf1680["__typename"]
  | FragmentSelf1680["typenameHint"] | FragmentToken1678 | FragmentToken1679;
