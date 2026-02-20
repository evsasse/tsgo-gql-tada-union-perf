import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken596 } from "./fragment596";
import type { FragmentToken597 } from "./fragment597";

export const FRAGMENT_598 = gql(`
  fragment Fragment598 on Member37 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_37
    memberCount_37
    memberMetric_37
  }
`);

type FragmentResult598 = ResultOf<typeof FRAGMENT_598>;
type FragmentSelf598 = NonNullable<FragmentResult598>;

export type FragmentToken598 =
  | FragmentSelf598["__typename"]
  | FragmentSelf598["typenameHint"] | FragmentToken596 | FragmentToken597;
