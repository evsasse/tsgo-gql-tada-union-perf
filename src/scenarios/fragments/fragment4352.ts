import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4350 } from "./fragment4350";
import type { FragmentToken4351 } from "./fragment4351";

export const FRAGMENT_4352 = gql(`
  fragment Fragment4352 on Member151 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_151
    memberCount_151
    memberMetric_151
  }
`);

type FragmentResult4352 = ResultOf<typeof FRAGMENT_4352>;
type FragmentSelf4352 = NonNullable<FragmentResult4352>;

export type FragmentToken4352 =
  | FragmentSelf4352["__typename"]
  | FragmentSelf4352["typenameHint"] | FragmentToken4350 | FragmentToken4351;
