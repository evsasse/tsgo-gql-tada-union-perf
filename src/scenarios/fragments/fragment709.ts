import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken707 } from "./fragment707";
import type { FragmentToken708 } from "./fragment708";

export const FRAGMENT_709 = gql(`
  fragment Fragment709 on Member148 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_148
    memberCount_148
    memberMetric_148
  }
`);

type FragmentResult709 = ResultOf<typeof FRAGMENT_709>;
type FragmentSelf709 = NonNullable<FragmentResult709>;

export type FragmentToken709 =
  | FragmentSelf709["__typename"]
  | FragmentSelf709["typenameHint"] | FragmentToken707 | FragmentToken708;
