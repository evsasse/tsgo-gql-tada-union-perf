import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1741 } from "./fragment1741";
import type { FragmentToken1742 } from "./fragment1742";

export const FRAGMENT_1743 = gql(`
  fragment Fragment1743 on Member62 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_62
    memberCount_62
    memberMetric_62
  }
`);

type FragmentResult1743 = ResultOf<typeof FRAGMENT_1743>;
type FragmentSelf1743 = NonNullable<FragmentResult1743>;

export type FragmentToken1743 =
  | FragmentSelf1743["__typename"]
  | FragmentSelf1743["typenameHint"] | FragmentToken1741 | FragmentToken1742;
