import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken700 } from "./fragment700";
import type { FragmentToken701 } from "./fragment701";

export const FRAGMENT_702 = gql(`
  fragment Fragment702 on Member141 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_141
    memberCount_141
    memberMetric_141
  }
`);

type FragmentResult702 = ResultOf<typeof FRAGMENT_702>;
type FragmentSelf702 = NonNullable<FragmentResult702>;

export type FragmentToken702 =
  | FragmentSelf702["__typename"]
  | FragmentSelf702["typenameHint"] | FragmentToken700 | FragmentToken701;
