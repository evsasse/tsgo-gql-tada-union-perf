import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken650 } from "./fragment650";
import type { FragmentToken651 } from "./fragment651";

export const FRAGMENT_652 = gql(`
  fragment Fragment652 on Member91 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_91
    memberCount_91
    memberMetric_91
  }
`);

type FragmentResult652 = ResultOf<typeof FRAGMENT_652>;
type FragmentSelf652 = NonNullable<FragmentResult652>;

export type FragmentToken652 =
  | FragmentSelf652["__typename"]
  | FragmentSelf652["typenameHint"] | FragmentToken650 | FragmentToken651;
