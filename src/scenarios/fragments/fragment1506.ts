import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1504 } from "./fragment1504";
import type { FragmentToken1505 } from "./fragment1505";

export const FRAGMENT_1506 = gql(`
  fragment Fragment1506 on Member105 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_105
    memberCount_105
    memberMetric_105
  }
`);

type FragmentResult1506 = ResultOf<typeof FRAGMENT_1506>;
type FragmentSelf1506 = NonNullable<FragmentResult1506>;

export type FragmentToken1506 =
  | FragmentSelf1506["__typename"]
  | FragmentSelf1506["typenameHint"] | FragmentToken1504 | FragmentToken1505;
