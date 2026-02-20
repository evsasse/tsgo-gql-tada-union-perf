import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4204 } from "./fragment4204";
import type { FragmentToken4205 } from "./fragment4205";

export const FRAGMENT_4206 = gql(`
  fragment Fragment4206 on Member05 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_05
    memberCount_05
    memberMetric_05
  }
`);

type FragmentResult4206 = ResultOf<typeof FRAGMENT_4206>;
type FragmentSelf4206 = NonNullable<FragmentResult4206>;

export type FragmentToken4206 =
  | FragmentSelf4206["__typename"]
  | FragmentSelf4206["typenameHint"] | FragmentToken4204 | FragmentToken4205;
