import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken465 } from "./fragment465";
import type { FragmentToken466 } from "./fragment466";

export const FRAGMENT_467 = gql(`
  fragment Fragment467 on Member186 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_186
    memberCount_186
    memberMetric_186
  }
`);

type FragmentResult467 = ResultOf<typeof FRAGMENT_467>;
type FragmentSelf467 = NonNullable<FragmentResult467>;

export type FragmentToken467 =
  | FragmentSelf467["__typename"]
  | FragmentSelf467["typenameHint"] | FragmentToken465 | FragmentToken466;
