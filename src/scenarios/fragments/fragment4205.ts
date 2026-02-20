import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4203 } from "./fragment4203";
import type { FragmentToken4204 } from "./fragment4204";

export const FRAGMENT_4205 = gql(`
  fragment Fragment4205 on Member04 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_04
    memberCount_04
    memberMetric_04
  }
`);

type FragmentResult4205 = ResultOf<typeof FRAGMENT_4205>;
type FragmentSelf4205 = NonNullable<FragmentResult4205>;

export type FragmentToken4205 =
  | FragmentSelf4205["__typename"]
  | FragmentSelf4205["typenameHint"] | FragmentToken4203 | FragmentToken4204;
