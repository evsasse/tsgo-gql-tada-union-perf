import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken461 } from "./fragment461";
import type { FragmentToken462 } from "./fragment462";

export const FRAGMENT_463 = gql(`
  fragment Fragment463 on Member182 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_182
    memberCount_182
    memberMetric_182
  }
`);

type FragmentResult463 = ResultOf<typeof FRAGMENT_463>;
type FragmentSelf463 = NonNullable<FragmentResult463>;

export type FragmentToken463 =
  | FragmentSelf463["__typename"]
  | FragmentSelf463["typenameHint"] | FragmentToken461 | FragmentToken462;
