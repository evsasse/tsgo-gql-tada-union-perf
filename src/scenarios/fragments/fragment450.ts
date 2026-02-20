import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken448 } from "./fragment448";
import type { FragmentToken449 } from "./fragment449";

export const FRAGMENT_450 = gql(`
  fragment Fragment450 on Member169 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_169
    memberCount_169
    memberMetric_169
  }
`);

type FragmentResult450 = ResultOf<typeof FRAGMENT_450>;
type FragmentSelf450 = NonNullable<FragmentResult450>;

export type FragmentToken450 =
  | FragmentSelf450["__typename"]
  | FragmentSelf450["typenameHint"] | FragmentToken448 | FragmentToken449;
