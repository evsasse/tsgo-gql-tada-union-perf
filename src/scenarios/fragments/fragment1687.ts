import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1685 } from "./fragment1685";
import type { FragmentToken1686 } from "./fragment1686";

export const FRAGMENT_1687 = gql(`
  fragment Fragment1687 on Member06 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_06
    memberCount_06
    memberMetric_06
  }
`);

type FragmentResult1687 = ResultOf<typeof FRAGMENT_1687>;
type FragmentSelf1687 = NonNullable<FragmentResult1687>;

export type FragmentToken1687 =
  | FragmentSelf1687["__typename"]
  | FragmentSelf1687["typenameHint"] | FragmentToken1685 | FragmentToken1686;
