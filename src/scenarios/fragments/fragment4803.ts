import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4801 } from "./fragment4801";
import type { FragmentToken4802 } from "./fragment4802";

export const FRAGMENT_4803 = gql(`
  fragment Fragment4803 on Member42 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_42
    memberCount_42
    memberMetric_42
  }
`);

type FragmentResult4803 = ResultOf<typeof FRAGMENT_4803>;
type FragmentSelf4803 = NonNullable<FragmentResult4803>;

export type FragmentToken4803 =
  | FragmentSelf4803["__typename"]
  | FragmentSelf4803["typenameHint"] | FragmentToken4801 | FragmentToken4802;
