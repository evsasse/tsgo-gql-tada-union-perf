import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4433 } from "./fragment4433";
import type { FragmentToken4434 } from "./fragment4434";

export const FRAGMENT_4435 = gql(`
  fragment Fragment4435 on Member234 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_234
    memberCount_234
    memberMetric_234
  }
`);

type FragmentResult4435 = ResultOf<typeof FRAGMENT_4435>;
type FragmentSelf4435 = NonNullable<FragmentResult4435>;

export type FragmentToken4435 =
  | FragmentSelf4435["__typename"]
  | FragmentSelf4435["typenameHint"] | FragmentToken4433 | FragmentToken4434;
