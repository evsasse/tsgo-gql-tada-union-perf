import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1805 } from "./fragment1805";
import type { FragmentToken1806 } from "./fragment1806";

export const FRAGMENT_1807 = gql(`
  fragment Fragment1807 on Member126 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_126
    memberCount_126
    memberMetric_126
  }
`);

type FragmentResult1807 = ResultOf<typeof FRAGMENT_1807>;
type FragmentSelf1807 = NonNullable<FragmentResult1807>;

export type FragmentToken1807 =
  | FragmentSelf1807["__typename"]
  | FragmentSelf1807["typenameHint"] | FragmentToken1805 | FragmentToken1806;
