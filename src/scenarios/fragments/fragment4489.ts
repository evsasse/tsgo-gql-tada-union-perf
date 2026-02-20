import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4487 } from "./fragment4487";
import type { FragmentToken4488 } from "./fragment4488";

export const FRAGMENT_4489 = gql(`
  fragment Fragment4489 on Member08 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_08
    memberCount_08
    memberMetric_08
  }
`);

type FragmentResult4489 = ResultOf<typeof FRAGMENT_4489>;
type FragmentSelf4489 = NonNullable<FragmentResult4489>;

export type FragmentToken4489 =
  | FragmentSelf4489["__typename"]
  | FragmentSelf4489["typenameHint"] | FragmentToken4487 | FragmentToken4488;
