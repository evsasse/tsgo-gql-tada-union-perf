import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1728 } from "./fragment1728";
import type { FragmentToken1729 } from "./fragment1729";

export const FRAGMENT_1730 = gql(`
  fragment Fragment1730 on Member49 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_49
    memberCount_49
    memberMetric_49
  }
`);

type FragmentResult1730 = ResultOf<typeof FRAGMENT_1730>;
type FragmentSelf1730 = NonNullable<FragmentResult1730>;

export type FragmentToken1730 =
  | FragmentSelf1730["__typename"]
  | FragmentSelf1730["typenameHint"] | FragmentToken1728 | FragmentToken1729;
