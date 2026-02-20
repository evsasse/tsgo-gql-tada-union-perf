import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken014 } from "./fragment014";
import type { FragmentToken015 } from "./fragment015";

export const FRAGMENT_016 = gql(`
  fragment Fragment016 on Member15 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_15
    memberCount_15
    memberMetric_15
  }
`);

type FragmentResult016 = ResultOf<typeof FRAGMENT_016>;
type FragmentSelf016 = NonNullable<FragmentResult016>;

export type FragmentToken016 =
  | FragmentSelf016["__typename"]
  | FragmentSelf016["typenameHint"] | FragmentToken014 | FragmentToken015;
