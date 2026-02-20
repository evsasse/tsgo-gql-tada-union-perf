import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken610 } from "./fragment610";
import type { FragmentToken611 } from "./fragment611";

export const FRAGMENT_612 = gql(`
  fragment Fragment612 on Member51 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_51
    memberCount_51
    memberMetric_51
  }
`);

type FragmentResult612 = ResultOf<typeof FRAGMENT_612>;
type FragmentSelf612 = NonNullable<FragmentResult612>;

export type FragmentToken612 =
  | FragmentSelf612["__typename"]
  | FragmentSelf612["typenameHint"] | FragmentToken610 | FragmentToken611;
