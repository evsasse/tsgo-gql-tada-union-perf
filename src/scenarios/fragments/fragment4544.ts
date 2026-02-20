import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4542 } from "./fragment4542";
import type { FragmentToken4543 } from "./fragment4543";

export const FRAGMENT_4544 = gql(`
  fragment Fragment4544 on Member63 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_63
    memberCount_63
    memberMetric_63
  }
`);

type FragmentResult4544 = ResultOf<typeof FRAGMENT_4544>;
type FragmentSelf4544 = NonNullable<FragmentResult4544>;

export type FragmentToken4544 =
  | FragmentSelf4544["__typename"]
  | FragmentSelf4544["typenameHint"] | FragmentToken4542 | FragmentToken4543;
