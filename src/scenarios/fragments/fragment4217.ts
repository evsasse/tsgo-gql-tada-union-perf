import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4215 } from "./fragment4215";
import type { FragmentToken4216 } from "./fragment4216";

export const FRAGMENT_4217 = gql(`
  fragment Fragment4217 on Member16 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_16
    memberCount_16
    memberMetric_16
  }
`);

type FragmentResult4217 = ResultOf<typeof FRAGMENT_4217>;
type FragmentSelf4217 = NonNullable<FragmentResult4217>;

export type FragmentToken4217 =
  | FragmentSelf4217["__typename"]
  | FragmentSelf4217["typenameHint"] | FragmentToken4215 | FragmentToken4216;
