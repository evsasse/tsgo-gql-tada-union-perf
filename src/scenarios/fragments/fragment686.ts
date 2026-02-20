import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken684 } from "./fragment684";
import type { FragmentToken685 } from "./fragment685";

export const FRAGMENT_686 = gql(`
  fragment Fragment686 on Member125 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_125
    memberCount_125
    memberMetric_125
  }
`);

type FragmentResult686 = ResultOf<typeof FRAGMENT_686>;
type FragmentSelf686 = NonNullable<FragmentResult686>;

export type FragmentToken686 =
  | FragmentSelf686["__typename"]
  | FragmentSelf686["typenameHint"] | FragmentToken684 | FragmentToken685;
