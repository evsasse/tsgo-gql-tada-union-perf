import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4130 } from "./fragment4130";
import type { FragmentToken4131 } from "./fragment4131";

export const FRAGMENT_4132 = gql(`
  fragment Fragment4132 on Member211 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_211
    memberCount_211
    memberMetric_211
  }
`);

type FragmentResult4132 = ResultOf<typeof FRAGMENT_4132>;
type FragmentSelf4132 = NonNullable<FragmentResult4132>;

export type FragmentToken4132 =
  | FragmentSelf4132["__typename"]
  | FragmentSelf4132["typenameHint"] | FragmentToken4130 | FragmentToken4131;
