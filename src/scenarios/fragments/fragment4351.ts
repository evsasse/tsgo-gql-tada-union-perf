import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4349 } from "./fragment4349";
import type { FragmentToken4350 } from "./fragment4350";

export const FRAGMENT_4351 = gql(`
  fragment Fragment4351 on Member150 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_150
    memberCount_150
    memberMetric_150
  }
`);

type FragmentResult4351 = ResultOf<typeof FRAGMENT_4351>;
type FragmentSelf4351 = NonNullable<FragmentResult4351>;

export type FragmentToken4351 =
  | FragmentSelf4351["__typename"]
  | FragmentSelf4351["typenameHint"] | FragmentToken4349 | FragmentToken4350;
