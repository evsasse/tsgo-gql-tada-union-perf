import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4710 } from "./fragment4710";
import type { FragmentToken4711 } from "./fragment4711";

export const FRAGMENT_4712 = gql(`
  fragment Fragment4712 on Member231 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_231
    memberCount_231
    memberMetric_231
  }
`);

type FragmentResult4712 = ResultOf<typeof FRAGMENT_4712>;
type FragmentSelf4712 = NonNullable<FragmentResult4712>;

export type FragmentToken4712 =
  | FragmentSelf4712["__typename"]
  | FragmentSelf4712["typenameHint"] | FragmentToken4710 | FragmentToken4711;
