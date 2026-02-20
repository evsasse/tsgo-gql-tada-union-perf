import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1740 } from "./fragment1740";
import type { FragmentToken1741 } from "./fragment1741";

export const FRAGMENT_1742 = gql(`
  fragment Fragment1742 on Member61 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_61
    memberCount_61
    memberMetric_61
  }
`);

type FragmentResult1742 = ResultOf<typeof FRAGMENT_1742>;
type FragmentSelf1742 = NonNullable<FragmentResult1742>;

export type FragmentToken1742 =
  | FragmentSelf1742["__typename"]
  | FragmentSelf1742["typenameHint"] | FragmentToken1740 | FragmentToken1741;
