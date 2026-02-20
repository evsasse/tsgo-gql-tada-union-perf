import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4432 } from "./fragment4432";
import type { FragmentToken4433 } from "./fragment4433";

export const FRAGMENT_4434 = gql(`
  fragment Fragment4434 on Member233 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_233
    memberCount_233
    memberMetric_233
  }
`);

type FragmentResult4434 = ResultOf<typeof FRAGMENT_4434>;
type FragmentSelf4434 = NonNullable<FragmentResult4434>;

export type FragmentToken4434 =
  | FragmentSelf4434["__typename"]
  | FragmentSelf4434["typenameHint"] | FragmentToken4432 | FragmentToken4433;
