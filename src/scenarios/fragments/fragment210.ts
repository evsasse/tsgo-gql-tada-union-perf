import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken208 } from "./fragment208";
import type { FragmentToken209 } from "./fragment209";

export const FRAGMENT_210 = gql(`
  fragment Fragment210 on Member209 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_209
    memberCount_209
    memberMetric_209
  }
`);

type FragmentResult210 = ResultOf<typeof FRAGMENT_210>;
type FragmentSelf210 = NonNullable<FragmentResult210>;

export type FragmentToken210 =
  | FragmentSelf210["__typename"]
  | FragmentSelf210["typenameHint"] | FragmentToken208 | FragmentToken209;
