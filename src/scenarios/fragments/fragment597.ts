import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken595 } from "./fragment595";
import type { FragmentToken596 } from "./fragment596";

export const FRAGMENT_597 = gql(`
  fragment Fragment597 on Member36 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_36
    memberCount_36
    memberMetric_36
  }
`);

type FragmentResult597 = ResultOf<typeof FRAGMENT_597>;
type FragmentSelf597 = NonNullable<FragmentResult597>;

export type FragmentToken597 =
  | FragmentSelf597["__typename"]
  | FragmentSelf597["typenameHint"] | FragmentToken595 | FragmentToken596;
